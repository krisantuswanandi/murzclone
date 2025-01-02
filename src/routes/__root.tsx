import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { Layout } from "@/components/layout";

export const Route = createRootRoute({
  component: () => {
    const devtools = import.meta.env.DEV ? <TanStackRouterDevtools /> : null;
    return (
      <Layout>
        <Outlet />
        {devtools}
      </Layout>
    );
  },
});
