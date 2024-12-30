import { Link, Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from "@tanstack/router-devtools"

export const Route = createRootRoute({
  component: () => {
    return (
      <>
        <div>
          <Link to="/">
            Home
          </Link>
          <br />
          <Link to="/main">
            Main
          </Link>
          <br />
          <Link to="/about">
            About
          </Link>
        </div>
        <Outlet />
        <TanStackRouterDevtools />
      </>
    )
  },
})

