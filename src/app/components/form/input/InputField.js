"use client";
import React from "react";

export default function InputField({ type, placeholder }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-500 dark:bg-gray-900 dark:border-gray-700 dark:text-white"
    />
  );
}
