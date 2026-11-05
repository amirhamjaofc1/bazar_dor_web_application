import { createAuthClient } from "better-auth/react"
import toast from "react-hot-toast"

export const authClient = createAuthClient({
  /** The base URL of the server (optional if you're using the same domain) */
  baseURL: process.env.BETTER_AUTH_URL,
})

export const handleGoogle = async () => {
  try {
    const { error } = await authClient.signIn.social({
      provider: "google",
      callbackURL: "/?auth=login-success",
      errorCallbackURL: "/signin?auth=oauth-error",
    })

    if (error) {
      console.error("Google sign-in failed:", error)
      toast.error(error.message || "Google sign-in failed.")
    }
  } catch (error) {
    console.error("Google sign-in failed:", error)
    toast.error("Google sign-in failed. Please try again.")
  }
}

export const handleSignupGithub = async () => {
  try {
    const { error } = await authClient.signIn.social({
      provider: "github",
      callbackURL: "/?auth=login-success",
      errorCallbackURL: "/signin?auth=oauth-error",
    })

    if (error) {
      console.error("GitHub sign-in failed:", error)
      toast.error(error.message || "GitHub sign-in failed.")
    }
  } catch (error) {
    console.error("GitHub sign-in failed:", error)
    toast.error("GitHub sign-in failed. Please try again.")
  }
}

export const { signIn, signUp, signOut, useSession } = authClient