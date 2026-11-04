"use client";

import { authClient } from "@/lib/auth-client";
import {
  Button,
  FieldError,
  FieldGroup,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { redirect } from "next/navigation";

// import { Form, FieldGroup, TextField, Label, Input, FieldError, Button } from "@better-auth/react";

export default function SignUp() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    console.log(data);

    const { data: signupdata, error } = await authClient.signUp.email({
      name: data.name,
      email: data.email,
      password: data.password,
    });
    if (data) {
      alert("no error");
      redirect("/signin");
    }
    if (error) {
      console.error("Signup failed:", error);
      alert(error.message);
      return;
    }

    console.log("Signup response:", signupdata);
  };
  return (
    <main className="min-h-screen bg-[#f1f6f2] flex flex-col items-center justify-center px-4 py-10">
      <div className="text-center mb-5">
        <h1 className="text-2xl font-bold text-[#202a23]">
          অ্যাকাউন্ট তৈরি করুন
        </h1>

        <p className="text-xs text-gray-500 mt-1">
          বিনা ঝামেলায় সাইন আপ করে সবকিছু দেখতে শুরু করুন।
        </p>
      </div>
      <div className="w-full max-w-xl bg-[#fbfdfb] border border-[#e2e9e3] rounded-xl p-5">
        <Form className="w-full" onSubmit={handleSubmit}>
          <FieldGroup className="gap-3">
            <TextField isRequired name="name">
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

            {/* Email */}
            <TextField isRequired name="email" type="email">
              <Label className="text-xs font-medium text-gray-800 mt-2 mb-1">
                ইমেইল
              </Label>
              <Input
                placeholder="you@example.com"
                className="h-9  rounded-lg border border-[#e0e8e1] bg-transparent px-5 py-6 text-xs"
              />
              <FieldError />
            </TextField>

            {/* Password */}
            <TextField
              isRequired
              name="password"
              type="password"
              minLength={8}
              validate={(value) => {
                if (value.length < 8) {
                  return "Password must be at least 8 characters";
                }

                if (!/[A-Z]/.test(value)) {
                  return "Password must contain one uppercase letter";
                }

                if (!/[0-9]/.test(value)) {
                  return "Password must contain one number";
                }

                return null;
              }}
            >
              <Label className="text-xs font-medium text-gray-800 mt-2 mb-1">
                পাসওয়ার্ড
              </Label>
              <Input
                placeholder="কমপক্ষে ৮ অক্ষর"
                className="h-9 rounded-lg border border-[#e0e8e1] bg-transparent px-5 py-6 text-xs"
              />
              <FieldError />
            </TextField>

            {/* Confirm Password */}
            <TextField
              isRequired
              name="confirmPassword"
              type="password"
              minLength={8}
            >
              <Label className="text-xs font-medium text-gray-800 mt-2 mb-1">
                পাসওয়ার্ড নিশ্চিত করুন
              </Label>
              <Input
                placeholder="আবার লিখুন"
                className="h-9 rounded-lg border border-[#e0e8e1] bg-transparent px-5 py-6 text-xs"
              />
              <FieldError />
            </TextField>
          </FieldGroup>

          {/* Create Account Button */}
          <Button
            type="submit"
            className="w-full h-9 mt-3 rounded-lg bg-[#078c43] hover:bg-[#067a3a] text-white text-xs font-semibold shadow-md"
          >
            অ্যাকাউন্ট তৈরি করুন
          </Button>
        </Form>

        {/* Divider */}
        <div className="flex items-center gap-3 my-4">
          <div className="flex-1 h-px bg-gray-200"></div>
          <span className="text-xs text-gray-500">অথবা</span>
          <div className="flex-1 h-px bg-gray-200"></div>
        </div>

        {/* Social Login */}
        <div className="grid grid-cols-2 gap-2">
          <button
            type="button"
            className="h-9 flex items-center justify-center gap-1.5 border border-[#e0e8e1] rounded-lg text-[11px] font-medium text-gray-800 hover:bg-gray-50 transition"
          >
            <span className="font-bold text-sm text-[#4285F4]">G</span>
            Google দিয়ে চালিয়ে যান
          </button>

          <button
            type="button"
            className="h-9 flex items-center justify-center gap-1.5 border border-[#e0e8e1] rounded-lg text-[11px] font-medium text-gray-800 hover:bg-gray-50 transition"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.05c-3.34.73-4.04-1.42-4.04-1.42-.55-1.39-1.33-1.76-1.33-1.76-1.09-.75.08-.74.08-.74 1.2.08 1.83 1.23 1.83 1.23 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.52.12-3.17 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.29-1.23 3.29-1.23.66 1.65.25 2.87.13 3.17.77.84 1.23 1.91 1.23 3.22 0 4.62-2.8 5.64-5.48 5.94.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.83.57A12 12 0 0 0 12 .5Z" />
            </svg>
            GitHub দিয়ে চালিয়ে যান
          </button>
        </div>

        {/* Login Link */}
        <p className="text-center text-xs text-gray-600 mt-4">
          অ্যাকাউন্ট আছে?{" "}
          <a
            href="/login"
            className="text-[#078c43] font-semibold hover:underline"
          >
            সাইন ইন করুন
          </a>
        </p>
      </div>

      {/* Back to Home */}
      <a
        href="/"
        className="text-xs text-gray-500 hover:text-[#078c43] mt-5 transition"
      >
        ← হোম পেজে ফিরে যান
      </a>
    </main>
  );
}
