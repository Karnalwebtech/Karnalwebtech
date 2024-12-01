import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-md text-center max-w-md w-full">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-8">Oops! Page not found.</p>
        <Link
          href="/"
          className="px-6 py-2 bg-black text-white rounded-md hover:bg-white hover:text-black border transition-colors duration-300 inline-block text-md"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
