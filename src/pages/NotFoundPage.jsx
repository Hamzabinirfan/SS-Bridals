import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="text-xs uppercase tracking-widest text-slate-500">404</div>
        <h1 className="font-heading text-maroon text-4xl sm:text-5xl mt-3">Page Not Found</h1>
        <p className="text-slate-700 mt-3 max-w-xl mx-auto">
          The page you are looking for doesn't exist or may have moved.
        </p>
        <Link
          to="/"
          className="inline-flex mt-8 px-6 py-3 rounded-2xl bg-maroon text-white hover:bg-maroon/90 transition font-medium"
        >
          Back to Home
        </Link>
      </div>
    </div>
  )
}

