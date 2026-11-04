"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ProfileDropDown() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const { data: session } = authClient.useSession();
  const user = session?.user;

  const handleSignOut = async () => {
    const user = await authClient.signOut();
    setOpen(false);
    router.push('/signin');
  };

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 rounded-full px-2 py-1 hover:bg-gray-100 transition"
      >
        <img
          className=" mr-1.5 w-10 h-10 rounded-2xl object-cover object-top bg-gray-100"
          src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200"
          alt=""
        />
        <div className="flex items-center text-black font-bold">
          {user?.name}
        </div>
        <span className="text-xs text-gray-500">{open ? "⌃" : "⌄"}</span>
      </button>

      {/* Dropdown Menu */}
      {open && (
        <div className="absolute right-0 top-full mt-2 w-60 rounded-2xl border border-gray-200 bg-[#fbfdfb] p-4 shadow-xl z-50">
          {/* User Information */}
          <div className="border-b border-gray-100 pb-3">
            <h3 className="text-sm font-semibold text-gray-800">{user.name}</h3>

            <p className="text-xs text-gray-500 mt-1 break-all">{user.email}</p>
          </div>

          {/* My Profile */}
          <Link
            href="/profile"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2 mt-3 py-2 text-sm text-gray-700 hover:text-green-700 transition"
          >
            <span>👤</span>
            আমার প্রোফাইল
          </Link>

          {/* Sign Out */}
          <button
            onClick={handleSignOut}
            className="flex items-center gap-2 mt-1 py-2 text-sm text-red-500 hover:text-red-600 transition"
          >
            <span>↪</span>
            সাইন আউট
          </button>
        </div>
      )}
    </div>
  );
}
