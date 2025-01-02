import {
  getFirestore,
  collection,
  getDocs,
  limit,
  query,
  orderBy,
  startAfter,
  Timestamp,
  QueryDocumentSnapshot,
} from "firebase/firestore";
import { useInfiniteQuery } from "@tanstack/react-query";
import * as v from "valibot";

function getFirstPosts() {
  const db = getFirestore();
  const ref = query(
    collection(db, "posts"),
    orderBy("createdAt", "desc"),
    limit(1),
  );
  return getDocs(ref);
}

function getNextPosts(lastDoc: QueryDocumentSnapshot) {
  const db = getFirestore();
  const ref = query(
    collection(db, "posts"),
    orderBy("createdAt", "desc"),
    startAfter(lastDoc),
    limit(1),
  );
  return getDocs(ref);
}

export function usePosts() {
  return useInfiniteQuery({
    queryKey: ["posts"],
    queryFn: ({ pageParam }) => {
      const lastDoc = pageParam;
      return lastDoc ? getNextPosts(lastDoc) : getFirstPosts();
    },
    initialPageParam: null as QueryDocumentSnapshot | null,
    getNextPageParam: (lastPage) => {
      return lastPage.docs[lastPage.docs.length - 1];
    },
    select: (data) => ({
      pages: data.pages.map((page) => {
        return page.docs.map((doc) => {
          try {
            return v.parse(PostScheme, doc.data());
          } catch (error) {
            console.error("Error parsing post data", error);
          }
        });
      }),
      pageParams: data.pageParams,
    }),
    retry: 0,
    refetchOnWindowFocus: false,
  });
}

const UserScheme = v.object({
  photoURL: v.string(),
  userId: v.string(),
});

const PostScheme = v.pipe(
  v.object({
    postId: v.string(),
    title: v.string(),
    username: v.string(),
    content: v.string(),
    pawCount: v.number(),
    scratchCount: v.number(),
    commentsCount: v.number(),
    createdAt: v.custom<Timestamp>((val) => val instanceof Timestamp),
    userDetail: v.union([UserScheme, v.array(UserScheme)]),
  }),
  v.transform((input) => {
    const {
      postId,
      createdAt,
      pawCount,
      scratchCount,
      commentsCount,
      userDetail,
      username,
      ...rest
    } = input;

    let user = null;
    if (Array.isArray(userDetail)) {
      if (userDetail.length > 0) {
        user = userDetail[0];
      }
    } else if (userDetail.userId) {
      user = userDetail;
    }

    return {
      ...rest,
      id: postId,
      createdAt: createdAt.toDate(),
      like: pawCount,
      dislike: scratchCount,
      comments: commentsCount,
      user: user
        ? {
            id: user.userId,
            photo: user.photoURL,
            username: username,
          }
        : null,
    };
  }),
);

export type Post = v.InferOutput<typeof PostScheme>;
