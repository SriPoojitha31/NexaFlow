import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-3xl font-bold">Welcome to NexaFlow</h1>
      <p className="mt-2 text-lg text-gray-600">Automate workflows intelligently</p>

      <div className="mt-4 space-x-4">
        <Link href="/dashboard">
          <button className="px-6 py-2 text-white bg-blue-600 rounded shadow hover:bg-blue-700">
            Go to Dashboard
          </button>
        </Link>
        <Link href="/workflows">
          <button className="px-6 py-2 text-white bg-green-600 rounded shadow hover:bg-green-700">
            View Workflows
          </button>
        </Link>
      </div>
    </div>
  );
}
