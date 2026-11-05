"use client";

import { authClient } from "@/lib/auth-client";
import {
  Button,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { useRouter } from "next/navigation";

export default function Profile() {
  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const Newdata = Object.fromEntries(formData.entries());
    console.log(Newdata);
    await authClient.updateUser({
      ...Newdata,
    });
  };
  const router = useRouter();

  const { data: sesson } = authClient.useSession();
  const user = sesson?.user;

  const handleSignOut = async () => {
    const users = await authClient.signOut();
    router.push("/signin");
  };

  return (
    <>
      <main className="min-h-screen bg-[#f0f6f1] px-4 py-8">
        <div className="mx-auto max-w-6xl">
          {/* Heading */}
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-[#202820]">আমার প্রোফাইল</h1>
            <p className="text-xs text-gray-500 mt-1">
              আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।
            </p>
          </div>

          {/* User Profile Card */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-2xl border border-[#dfe8df] bg-[#fbfdfb] p-5">
            <div className="flex items-center gap-4">
              <img
                src={
                  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200"
                }
                alt="Profile"
                className="h-16 w-16 rounded-2xl object-cover bg-gray-100"
              />

              <div>
                <h2 className="text-lg font-semibold text-[#202820]">
                  {user?.name}
                </h2>
                <p className="text-sm text-gray-500 mt-1">{user?.email}</p>
              </div>
            </div>

            <Button
              onPress={handleSignOut}
              className="h-10 rounded-lg border border-red-400 bg-transparent px-4 text-sm text-red-500"
            >
              ↪ সাইন আউট
            </Button>
          </div>

          {/* Information Card */}
          <div className="mt-6 rounded-2xl border border-[#dfe8df] bg-[#fbfdfb] p-5 sm:p-6">
            <h2 className="text-base font-semibold text-[#202820]">তথ্য</h2>

            <Form onSubmit={handleUpdateProfile} className="mt-8 space-y-4">
              <div className="w-full">
                <TextField name="name">
                  <Label className="text-xs font-medium text-gray-800 mt-2 mb-1">
                    নাম
                  </Label>
                  <Input
                    placeholder="যেমন: রহিম উদ্দিন"
                    className="h-9 rounded-lg border border-[#e0e8e1] bg-transparent px-5 py-6 text-xs"
                    minLength={3}
                  />
                  <FieldError />
                </TextField>
              </div>

              <Button
                type="submit"
                className="h-10 w-full rounded-lg bg-[#078c43] text-sm font-semibold text-white shadow-md hover:bg-[#067a3a]"
              >
                আপডেট
              </Button>
            </Form>
          </div>
        </div>
      </main>
    </>
  );
}
