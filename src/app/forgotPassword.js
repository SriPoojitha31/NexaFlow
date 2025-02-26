"use client";

import { useState } from "react";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleReset = async (e) => {
    e.preventDefault();

    // Simulating password reset request (Replace with actual API)
    setMessage("A password reset link has been sent to your email.");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center">Forgot Password?</h2>
        <p className="text-gray-600 text-center mt-2">Enter your email to receive a reset link.</p>
        <form onSubmit={handleReset} className="mt-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border rounded-lg mb-3"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" className="w-full bg-yellow-500 text-white py-2 rounded-lg">
            Send Reset Link
          </button>
        </form>
        {message && <p className="mt-3 text-center text-green-600">{message}</p>}
      </div>
    </div>
  );
}
