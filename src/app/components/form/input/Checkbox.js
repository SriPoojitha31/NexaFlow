"use client";
import React from "react";

export default function Checkbox({ checked, onChange }) {
  return (
    <label className="flex items-center cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        onChange={() => onChange(!checked)}
        className="hidden"
      />
      <div
        className={`w-5 h-5 border-2 flex items-center justify-center rounded-md transition ${
          checked ? "bg-brand-500 border-brand-500" : "border-gray-400"
        }`}
      >
        {checked && (
          <svg
            className="w-4 h-4 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        )}
      </div>
    </label>
  );
}
