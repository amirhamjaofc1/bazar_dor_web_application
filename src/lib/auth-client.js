import { createAuthClient } from "better-auth/react"

export const authClient = createAuthClient({
  /** The base URL of the server (optional if you're using the same domain) */
  baseURL: process.env.BETTER_AUTH_URL,
})

export const handleGoogle = async () => {
  const { error } = await authClient.signIn.social({
    provider: "google",
    callbackURL: "/",
  })

  if (error) {
    console.error("Google sign-in failed:", error)
    alert(error.message)
  }
}

export const handleSignupGithub = async () => {
  const { error } = await authClient.signIn.social({
    provider: "github",
    callbackURL: "/",
  })

  if (error) {
    console.error("GitHub sign-in failed:", error)
    alert(error.message)
  }
}

export const { signIn, signUp, signOut, useSession } = authClient