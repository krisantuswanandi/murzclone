import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/main')({
  component: () => {
    return <div>Main Page</div>
  },
})

