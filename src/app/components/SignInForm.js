"use client";

import Checkbox from "@/components/form/input/Checkbox";
import InputField from "@/components/form/input/InputField";
import Label from "@/components/form/Label";
import FloatingButton from "./FloatingButton";
import { EyeIcon, EyeCloseIcon, ChevronLeftIcon } from "@/icons";
import Link from "next/link";
import React, { useState } from "react";

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 bg-gray-100 dark:bg-gray-900">
      <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-md md:max-w-md lg:max-w-lg dark:bg-gray-800">
        {/* Back Link */}
        <Link href="/" className="flex items-center text-gray-500 hover:text-gray-700 dark:text-gray-400">
          <ChevronLeftIcon className="w-5 h-5 mr-2" />
          Back to Dashboard
        </Link>

        {/* Heading */}
        <h1 className="mt-4 text-2xl font-bold text-center text-gray-800 dark:text-white">Sign In</h1>
        <p className="text-center text-gray-500 dark:text-gray-400">Enter your email and password to sign in!</p>

        {/* Form */}
        <form className="mt-6 space-y-4">
          {/* Email Field */}
          <div>
            <Label>Email</Label>
            <InputField type="email" placeholder="info@example.com" className="w-full" />
          </div>

          {/* Password Field */}
          <div>
            <Label>Password</Label>
            <div className="relative">
              <InputField type={showPassword ? "text" : "password"} placeholder="Enter your password" className="w-full" />
              <span onClick={() => setShowPassword(!showPassword)} className="absolute cursor-pointer right-3 top-3">
                {showPassword ? <EyeIcon className="w-5 h-5" /> : <EyeCloseIcon className="w-5 h-5" />}
              </span>
            </div>
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Checkbox checked={isChecked} onChange={setIsChecked} />
              <span className="ml-2 text-gray-700 dark:text-gray-400">Keep me logged in</span>
            </div>
            <Link href="/reset-password" className="text-sm text-blue-500 hover:underline">
              Forgot password?
            </Link>
          </div>

          {/* Sign In Button */}
          <button className="w-full py-2 text-white transition bg-blue-500 rounded-lg hover:bg-blue-600">
            Sign In
          </button>
        </form>

        {/* Sign Up Link */}
        <p className="mt-4 text-center text-gray-700 dark:text-gray-400">
          Don't have an account?{" "}
          <Link href="/signup" className="text-blue-500 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
