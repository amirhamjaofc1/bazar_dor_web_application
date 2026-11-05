"use client";

import { useEffect } from "react";
import { Toaster, toast } from "react-hot-toast";

export default function ToastNotifications() {
  useEffect(() => {
    const url = new URL(window.location.href);
    const status = url.searchParams.get("auth");

    if (status === "registered") toast.success("Account created. Please sign in.");
    if (status === "login-success") toast.success("Signed in successfully.");
    if (status === "oauth-error") toast.error("Social sign-in failed.");
    if (status === "protected") toast.error("Please sign in to continue.");

    if (status) {
      url.searchParams.delete("auth");
      window.history.replaceState(window.history.state, "", url);
    }
  }, []);

  return <Toaster position="top-right" />;
}
