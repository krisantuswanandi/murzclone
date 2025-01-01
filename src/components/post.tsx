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
import photo from "@/assets/logo.webp";
import { PostAction } from "./post-action";

const Post = () => {
  function like() {
    alert("like");
  }

  function dislike() {
    alert("dislike");
  }

  return (
    <Card className="mt-4 first:mt-0">
      <CardHeader>
        <CardTitle>
          <div className="flex gap-2 items-center">
            <img src={photo} width="48px" />
            <div className="min-w-0">
              <div className="truncate" title="Title">
                Title
              </div>
              <div className="flex gap-1 font-normal text-sm mt-0.5">
                <div className="text-zinc-500 hover:underline">
                  <Link to="/">Username</Link>
                </div>
                <div>·</div>
                <div className="text-zinc-400">2 days ago</div>
              </div>
            </div>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>Content</CardContent>
      <CardFooter>
        <PostAction icon={<IconThumbUp />} count={50} onClick={like} />
        <PostAction icon={<IconThumbDown />} count={50} onClick={dislike} />
        <PostAction icon={<IconMessageCircle />} count={50} to="/" />
      </CardFooter>
    </Card>
  );
};

export { Post };
