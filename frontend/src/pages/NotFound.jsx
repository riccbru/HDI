import Button from '../components/Button'

export default function NotFound() {
  return (
    <div className="container-page flex flex-col items-center justify-center py-24 text-center md:py-32">
      <p className="font-display text-6xl font-bold text-accent">404</p>
      <h1 className="mt-4 font-display text-2xl font-bold">Page not found</h1>
      <p className="mt-2 max-w-sm text-sm text-on-surface-variant">
        The page you're looking for doesn't exist or has moved.
      </p>
      <Button to="/" variant="primary" className="mt-6">
        Back to Home
      </Button>
    </div>
  )
}
