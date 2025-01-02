import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Link } from "@tanstack/react-router";
import {
  IconMessageCircle,
  IconThumbUp,
  IconThumbDown,
} from "@tabler/icons-react";
import { PostAction } from "./post-action";
import { Post } from "@/hooks/posts";
import { formatDistanceToNow, format } from "date-fns";

interface Props {
  post: Post;
}

const PostCard = ({ post }: Props) => {
  function like() {
    alert("like");
  }

  function dislike() {
    alert("dislike");
  }

  const humanReadableDate = formatDistanceToNow(post.createdAt, {
    addSuffix: true,
  });

  const formattedDate = format(post.createdAt, "d MMM yyyy, hh.mm");

  return (
    <Card className="mt-4 first:mt-0">
      <CardHeader>
        <CardTitle>
          <div className="flex gap-2 items-center">
            <img src={post.user?.photo} width="48px" />
            <div className="min-w-0">
              <div className="truncate" title={post.title}>
                {post.title}
              </div>
              <div className="flex gap-1 font-normal text-sm mt-0.5">
                <div className="text-zinc-500 hover:underline">
                  <Link to="/">{post.user?.username}</Link>
                </div>
                <div>·</div>
                <div className="text-zinc-300" title={formattedDate}>
                  {humanReadableDate}
                </div>
              </div>
            </div>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="whitespace-pre-line">{post.content}</CardContent>
      <CardFooter>
        <PostAction icon={<IconThumbUp />} count={post.like} onClick={like} />
        <PostAction
          icon={<IconThumbDown />}
          count={post.dislike}
          onClick={dislike}
        />
        <PostAction icon={<IconMessageCircle />} count={post.comments} to="/" />
      </CardFooter>
    </Card>
  );
};

export { PostCard };
