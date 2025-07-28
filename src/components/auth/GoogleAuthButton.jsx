import React from "react"
import { useGoogleLogin } from "@react-oauth/google"
import axiosInstance from "@/api/axiosInstance" // ✅ FIXED
import { Button } from "@/components/ui/button"
import { FcGoogle } from "react-icons/fc"
import { useAuth } from '@/context/AuthContext'

const GoogleAuthButton = () => {
  const { login } = useAuth()

  const googleLogin = useGoogleLogin({
    flow: "auth-code",
    onSuccess: async ({ code }) => {
      try {
        const response = await axiosInstance.post("/auth/google-login", { code }) // ✅ FIXED
        login(response.data.access_token, response.data.user)
      } catch (error) {
        console.error("Google login failed:", error)
        alert("Google login failed")
      }
    },
    onError: () => {
      alert("Google login failed")
    },
  })

  return (
    <Button
      type="button"
      variant="outline"
      className="w-full flex gap-2 items-center justify-center"
      onClick={() => googleLogin()}
    >
      <FcGoogle className="w-5 h-5" />
      Sign in with Google
    </Button>
  )
}

export default GoogleAuthButton
