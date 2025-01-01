import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/news")({
  component: () => {
    return <div>News Page</div>;
  },
});
