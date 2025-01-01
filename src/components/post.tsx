import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import photo from "@/assets/logo.webp";

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
        <Button size="sm" variant="ghost" onClick={like}>
          Like
        </Button>
        <Button size="sm" variant="ghost" onClick={dislike}>
          Dislike
        </Button>
        <Button size="sm" variant="ghost" asChild>
          <Link to="/">Comment</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export { Post };
