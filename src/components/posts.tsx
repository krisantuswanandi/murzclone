import { PostCard } from "./post-card";
import { Button } from "@/components/ui/button";
import { IconRefresh } from "@tabler/icons-react";
import { usePosts } from "@/hooks/posts";

const Posts = () => {
  const { data, isFetching, fetchNextPage, hasNextPage } = usePosts();

  if (!data) {
    return (
      <div className="flex justify-center gap-2">
        <IconRefresh className="animate-spin" />
        Loading...
      </div>
    );
  }

  const posts = data.pages.flatMap((page) => page);

  return (
    <div>
      {posts && posts.map((post) => <PostCard key={post.id} post={post} />)}
      <div className="text-center mt-4">
        {hasNextPage ? (
          <Button
            variant="ghost"
            className="hover:bg-zinc-200"
            onClick={() => fetchNextPage()}
          >
            <IconRefresh className={isFetching ? "animate-spin" : ""} />
            Load more Posts
          </Button>
        ) : (
          <div className="text-zinc-400 p-4">There are no more posts...</div>
        )}
      </div>
    </div>
  );
};

export { Posts };
