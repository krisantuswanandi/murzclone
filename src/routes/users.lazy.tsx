import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/users")({
  component: () => {
    return <div>Users Page</div>;
  },
});
