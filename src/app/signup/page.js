"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function SignupPage() {
  const router = useRouter();
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    enterprise: "",
  });

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    const response = await fetch("/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    });

    if (response.ok) {
      alert("Signup successful! Redirecting to login...");
      router.push("/login");
    } else {
      alert("Signup failed! Try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-4">Create an Account</h2>
        
        <form onSubmit={handleSignup} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            value={userData.name}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Enter Your Email"
            value={userData.email}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Enter Your Password"
            value={userData.password}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg"
            required
          />

          <input
            type="text"
            name="enterprise"
            placeholder="Enter Enterprise Name (Optional)"
            value={userData.enterprise}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center mt-4">
          Already have an account?{" "}
          <Link href="/login" className="text-blue-600 hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}
