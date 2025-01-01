import { Post } from "./post";
import { Button } from "@/components/ui/button";
import { IconRefresh } from "@tabler/icons-react";

const Posts = () => {
  function loadMore() {
    alert("load more");
  }

  return (
    <div>
      <Post />
      <Post />
      <Post />
      <Post />
      <div className="text-center mt-4">
        <Button
          variant="ghost"
          className="hover:bg-zinc-200"
          onClick={loadMore}
        >
          <IconRefresh />
          Load more Posts
        </Button>
      </div>
    </div>
  );
};

export { Posts };
