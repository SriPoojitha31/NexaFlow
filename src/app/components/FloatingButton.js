"use client"; // Required for client-side interaction

import Link from "next/link";

const FloatingButton = () => {
  return (
    <Link href="/workflows/new">
      <button className="fixed p-4 text-2xl text-white bg-blue-600 rounded-full shadow-lg bottom-6 right-6 hover:bg-blue-700">
        ➕
      </button>
    </Link>
  );
};

export default FloatingButton;
