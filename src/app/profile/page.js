"use client";

import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function ProfilePage() {
  const { data: session } = useSession();
  const router = useRouter();

  if (!session) {
    router.push("/login");
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-4">Profile</h2>
        
        <div className="text-center">
          <img
            src={session.user.image || "/default-profile.png"}
            alt="Profile Picture"
            className="w-24 h-24 rounded-full mx-auto mb-4"
          />
          <p className="text-lg font-semibold">{session.user.name}</p>
          <p className="text-gray-600">{session.user.email}</p>
          <p className="text-gray-600">Enterprise: {session.user.enterprise || "Not Provided"}</p>
        </div>

        <div className="mt-6">
          <Link href="/profile/edit">
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition duration-300">
              Edit Profile
            </button>
          </Link>
        </div>

        <div className="mt-4">
          <button
            onClick={() => signOut({ callbackUrl: "/login" })}
            className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 rounded-lg transition duration-300"
          >
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
}
