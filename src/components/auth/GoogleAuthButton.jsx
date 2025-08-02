import React from "react"
import { useGoogleLogin } from "@react-oauth/google"
import axiosInstance from "@/api/axiosInstance"
import { Button } from "@/components/ui/button"
import { FcGoogle } from "react-icons/fc"
import { useAuth } from '@/context/AuthContext'
import { useNavigate } from "react-router-dom"
import { jwtDecode } from "jwt-decode"

const GoogleAuthButton = ({ label = "Sign in with Google" }) => {
  const { login } = useAuth()
  const navigate = useNavigate()

  const googleLogin = useGoogleLogin({
    flow: "auth-code",
    onSuccess: async ({ code }) => {
      try {
        const response = await axiosInstance.post("/auth/google-login", { code })
        const { access_token } = response.data

        const decoded = jwtDecode(access_token)
        const role = decoded?.sub?.role

        login(access_token)

        if (role === "learner") {
          navigate("/learner/dashboard")
        } else if (role === "contributor") {
          navigate("/contributor/manage")
        } else if (role === "admin") {
          navigate("/admin/panel")
        } else {
          alert("Unknown role")
        }
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
      {label}
    </Button>
  )
}

export default GoogleAuthButton