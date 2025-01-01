import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/talents")({
  component: () => {
    return <div>Talents Page</div>;
  },
});
