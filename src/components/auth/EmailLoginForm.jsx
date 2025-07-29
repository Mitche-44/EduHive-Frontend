import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { useNavigate } from "react-router-dom"
import axiosInstance from "@/api/axiosInstance"
import GoogleAuthButton from "./GoogleAuthButton"
import { useAuth } from "@/context/AuthContext"
import { jwtDecode } from "jwt-decode" // 👈 import this

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Mail, Eye, EyeOff } from "lucide-react"

const schema = z.object({
  email: z.string().email("Enter a valid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
})

export default function EmailLoginForm() {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)
  const { login } = useAuth()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  })

  const onSubmit = async (data) => {
  try {
    const res = await axiosInstance.post("/auth/login", {
      email: data.email,
      password: data.password,
    })

    const { access_token } = res.data

    const decoded = jwtDecode(access_token)
    console.log("Decoded token:", decoded) // ✅ inspect this
    const role = decoded?.sub?.role
// ✅ or decoded?.sub?.role depending on token

    login(access_token)

    if (role === "learner") {
      console.log("Navigating to /learner/dashboard")

      navigate("/learner/dashboard")
    } else if (role === "contributor") {
      navigate("/contributor/addpath")
    } else if (role === "admin") {
      navigate("/admin/paths")
    } else {
      alert("Unknown role")
    }
  } catch (error) {
    const message = error?.response?.data?.message || "Login failed"
    alert(message)
  }
}


  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 mt-6 max-w-md mx-auto">
      <div className="text-center space-y-1">
        <h2 className="text-xl font-bold">Welcome Back</h2>
        <p className="text-sm text-gray-500">
          Enter your email and password to access your account.
        </p>
      </div>

      {/* Email */}
      <div className="relative">
        <Input
          type="email"
          placeholder="Email address"
          {...register("email")}
          className="pr-10"
        />
        <Mail className="absolute right-3 top-2.5 h-5 w-5 text-muted-foreground" />
        {errors.email && (
          <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>
        )}
      </div>

      {/* Password */}
      <div className="relative">
        <Input
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          {...register("password")}
          className="pr-10"
        />
        <button
          type="button"
          onClick={() => setShowPassword((prev) => !prev)}
          className="absolute right-3 top-2.5 text-muted-foreground"
        >
          {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
        </button>
        {errors.password && (
          <p className="text-sm text-red-500 mt-1">{errors.password.message}</p>
        )}
      </div>

      {/* Forgot password */}
      <div className="text-right">
        <a href="/reset-password" className="text-sm text-blue-600 hover:underline">
          Forgot your password?
        </a>
      </div>

      {/* Submit */}
      <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
        Sign in
      </Button>

      <div className="text-center text-sm text-gray-500">or</div>

      {/* Google Auth */}
      <GoogleAuthButton label="Continue with Google" />

      {/* Redirect to register */}
      <p className="text-center text-sm mt-4">
        Don’t have an account?{" "}
        <a href="/register" className="text-blue-600 hover:underline">
          Register Now
        </a>
      </p>
    </form>
  )
}
