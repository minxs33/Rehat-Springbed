import Link from 'next/link';
import { ArrowLeftEndOnRectangleIcon } from '@heroicons/react/24/solid';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center text-center px-4">
      <h1 className="text-4xl font-bold text-gray-800">404 — Page Not Found</h1>
      <p className="mt-2 text-gray-600">
        Sorry, we couldn't find the page you're looking for.
      </p>
      <Link
        href="/"
        className="mt-6 inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-white hover:bg-blue-700 transition"
      >
        <ArrowLeftEndOnRectangleIcon className="h-5 w-5" />
        Back to Home
      </Link>
    </div>
  );
}
