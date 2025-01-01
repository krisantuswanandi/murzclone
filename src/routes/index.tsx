import { createFileRoute } from "@tanstack/react-router";
import { Posts } from "@/components/posts";

export const Route = createFileRoute("/")({
  component: () => {
    return (
      <div>
        <Posts />
      </div>
    );
  },
});
