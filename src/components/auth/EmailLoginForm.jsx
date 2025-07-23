import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { useNavigate } from "react-router-dom"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Mail, Eye, EyeOff } from "lucide-react"
// import { supabase } from "@/lib/supabaseClient" //  Make sure this path is correct

const schema = z.object({
  email: z.string().email("Enter a valid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
})

export default function EmailLoginForm() {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  })

  const onSubmit = async (data) => {
    const { error } = await supabase.auth.signInWithPassword({
      email: data.email,
      password: data.password,
    })

    if (error) {
      alert(error.message) // Optional: replace with toast from shadcn/ui
    } else {
      navigate("/dashboard")
    }
  }

  const handleGoogleLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: '${window.location.origin}/dashboard',
      },
    })

    if (error) {
      console.error("Google Sign-In Error:", error.message)
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
      <button
        type="button"
        onClick={handleGoogleLogin}
        className="w-full flex items-center justify-center gap-3 px-4 py-2 border border-gray-300 rounded-full bg-white hover:bg-gray-100"
      >
        <img
          src="https://www.svgrepo.com/show/475656/google-color.svg"
          alt="Google"
          className="h-5 w-5"
        />
        <span className="font-medium text-sm">Continue with Google</span>
      </button>

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