"use client";  // ✅ This tells Next.js that this is a client component

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  // Page Titles
  const pageTitles = {
    "/": "NexaFlow",
    "/dashboard": "Dashboard",
    "/workflow": "Workflow Automation",
    "/ai-insightful": "AI Insights",
    "/profile": "Enterprise Profile",
    "/signup": "Sign Up",
  };

  return (
    <nav className="flex justify-between p-4 bg-white shadow-md dark:bg-gray-800">
      <h1 className="text-xl font-bold text-gray-900 dark:text-white">
        {pageTitles[pathname] || "NexaFlow"}
      </h1>
      <div className="space-x-4">
        <Link href="/" className="text-blue-500 hover:underline">Home</Link>
        <Link href="/dashboard" className="text-blue-500 hover:underline">Dashboard</Link>
        <Link href="/workflows" className="text-blue-500 hover:underline">Workflow</Link>
        <Link href="/ai-insightful" className="text-blue-500 hover:underline">AI Insights</Link>
        <Link href="/profile" className="text-blue-500 hover:underline">Profile</Link>
        <Link href="/signup" className="text-blue-500 hover:underline">Sign Up</Link>
      </div>
    </nav>
  );
}
