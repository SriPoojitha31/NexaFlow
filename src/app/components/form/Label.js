"use client";
import React from "react";

export default function Label({ children }) {
  return <label className="font-medium text-gray-700 dark:text-gray-300">{children}</label>;
}
