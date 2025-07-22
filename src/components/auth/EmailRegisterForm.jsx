'use client'

import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Eye, EyeOff, Mail, User } from 'lucide-react'
import GoogleAuthButton from "./GoogleAuthButton"

const schema = z
  .object({
    firstName: z.string().min(2, 'First name is required'),
    lastName: z.string().min(2, 'Last name is required'),
    email: z.string().email('Enter a valid email'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  })

export default function EmailRegisterForm() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  })

  const onSubmit = async (data) => {
    console.log('Form submitted:', data)
    // Call supabase.auth.signUp() or custom logic here
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-6">
      {/* First Name */}
       <h1 className="text-center text-2xl font-bold mb-4">Welcome!</h1>

       {/* Google OAuth */}
      <GoogleAuthButton />


      <div className="relative">
        <Input
          placeholder="First Name"
          {...register('firstName')}
          className="pr-10"
        />
        <User className="absolute right-3 top-2.5 h-5 w-5 text-muted-foreground" />
        {errors.firstName && (
          <p className="text-red-500 text-sm">{errors.firstName.message}</p>
        )}
      </div>

      {/* Last Name */}
      <div className="relative">
        <Input
          placeholder="Last Name"
          {...register('lastName')}
          className="pr-10"
        />
        <User className="absolute right-3 top-2.5 h-5 w-5 text-muted-foreground" />
        {errors.lastName && (
          <p className="text-red-500 text-sm">{errors.lastName.message}</p>
        )}
      </div>

      {/* Email */}
      <div className="relative">
        <Input
          type="email"
          placeholder="Email address"
          {...register('email')}
          className="pr-10"
        />
        <Mail className="absolute right-3 top-2.5 h-5 w-5 text-muted-foreground" />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}
      </div>

      {/* Password */}
      <div className="relative">
        <Input
          placeholder="Password"
          type={showPassword ? 'text' : 'password'}
          {...register('password')}
          className="pr-10"
        />
        <button
          type="button"
          className="absolute right-3 top-2.5 text-muted-foreground"
          onClick={() => setShowPassword((prev) => !prev)}
        >
          {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
        </button>
        {errors.password && (
          <p className="text-red-500 text-sm">{errors.password.message}</p>
        )}
      </div>

      {/* Confirm Password */}
      <div className="relative">
        <Input
          placeholder="Confirm Password"
          type={showConfirm ? 'text' : 'password'}
          {...register('confirmPassword')}
          className="pr-10"
        />
        <button
          type="button"
          className="absolute right-3 top-2.5 text-muted-foreground"
          onClick={() => setShowConfirm((prev) => !prev)}
        >
          {showConfirm ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
        </button>
        {errors.confirmPassword && (
          <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>
        )}
      </div>

      <Button type="submit" className="w-full bg-[#007AFF] hover:bg-blue-700 text-white">
        Create an Account
      </Button>
    </form>
  )
}
