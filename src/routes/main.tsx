import { createFileRoute } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'

export const Route = createFileRoute('/main')({
  component: () => {
    return <div>
      <div>
        Main Page
      </div>
      <div>
        <Button>
          Testing
        </Button>
      </div>
    </div>
  },
})

