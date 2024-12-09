import { Button } from "@/components/ui/button"

export default function Custom500() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">500 - Server-side error occurred</h1>
      <p className="text-xl mb-8">We're sorry, but something went wrong on our end.</p>
      <Button onClick={() => window.location.href = '/'}>
        Go back home
      </Button>
    </div>
  )
}

