import { useState } from "react"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import GoogleAuthButton from "./GoogleAuthButton"
import EmailRegisterForm from "./EmailRegisterForm"
import EmailLoginForm from "./EmailLoginForm"
import AuthFooter from "./AuthFooter"

export default function AuthTabs() {
  const [tab, setTab] = useState("register")

  return (
    <div className="w-full max-w-md mx-auto mt-10 border rounded-xl shadow-lg p-6 bg-white">
     

      {/* Tabs */}
      <Tabs value={tab} onValueChange={setTab} className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-4">
          <TabsTrigger value="signin">Sign In</TabsTrigger>
          <TabsTrigger value="register">Register</TabsTrigger>
        </TabsList>
      </Tabs>

      {/* Google OAuth */}
      {/* <GoogleAuthButton /> */}

      {/* Conditional Form */}
      <div className="mt-4">
        {tab === "register" ? <EmailRegisterForm /> : <EmailLoginForm />}
      </div>

      <AuthFooter />
    </div>
  )
}
