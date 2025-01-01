import { Post } from "./post";
import { Button } from "@/components/ui/button";

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
        <Button variant="ghost" onClick={loadMore}>
          Load more Posts
        </Button>
      </div>
    </div>
  );
};

export { Posts };
