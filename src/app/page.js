"use client";

import { useSession } from "next-auth/react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function HomePage() {
  const { data: session } = useSession();

  if (!session) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <h1 className="text-4xl font-bold mb-4">Welcome to NexaFlow</h1>
        <p className="text-lg mb-6">Please log in to access your workflows</p>
        <Link href="/login">
          <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:bg-gray-200">
            Log In
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 flex flex-col items-center">
      {/* Recent Works Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mt-10 w-full max-w-4xl bg-white text-gray-900 p-6 rounded-lg shadow-lg"
      >
        <h2 className="text-2xl font-bold mb-4">Recent Works</h2>
        <ul className="space-y-4">
          <li className="p-4 border rounded-lg shadow-sm">✔ Automated Email Campaign</li>
          <li className="p-4 border rounded-lg shadow-sm">✔ AI-driven Data Processing</li>
          <li className="p-4 border rounded-lg shadow-sm">✔ Workflow Optimization Model</li>
          <li className="p-4 border rounded-lg shadow-sm">✔ AI Insights & Data Analysis</li>
          <li className="p-4 border rounded-lg shadow-sm">✔ AI Chatbot Implementation</li>
        </ul>
        <div className="mt-6 flex justify-between">
          <Link href="/workflows" className="text-blue-600 hover:underline">
            View More
          </Link>
          <Link href="/profile" className="text-blue-600 hover:underline">
            Profile
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
