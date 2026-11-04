"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import ProfileDropDown from "./ProfileDropDown";




export default function UserInfo() {
  const { data: sesson, isPending } = authClient.useSession();
  // console.log('sesson is',sesson);


  const user = sesson?.user;
  console.log("user is", user);
  return (
    <>
      {user ? (
        <div className="flex">
          <ProfileDropDown  />
        </div>
      ) : (
        <div>
          <Link href="/signin">
            {" "}
            <button className="hover:bg-green-700 hover:text-white text-black font-bold py-2 px-4 rounded-2xl shadow-md">
              সাইন ইন
            </button>
          </Link>
          <Link href="/signup">
            {" "}
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-2xl shadow-md">
              সাইন আপ
            </button>
          </Link>
        </div>
      )}
    </>
  );
}
