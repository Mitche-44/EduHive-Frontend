import React from "react";
import AuthTabs from "../../components/auth/AuthTabs";
import registerIllustration from "../../assets/illustrations/register-illustration.svg";

export default function Auth() {
  return (
    <div className="flex h-screen w-full">
      {/* Left Panel */}
      <div className="w-1/2 bg-[#007AFF] text-white flex flex-col items-center justify-center p-8">
        <div className="w-64 h-64 mb-6">
          <img
            src={registerIllustration}
            alt="Register illustration"
            className="w-full h-full object-contain"
          />
        </div>
        <h1 className="text-3xl font-bold">EduHive Academy</h1>
        <p className="text-lg mt-2 text-center">A learning hub for tech minds.</p>
      </div>

      {/* Right Panel */}
      <div className="w-1/2 flex items-center justify-center bg-gray-50">
        <AuthTabs />
      </div>
    </div>
  );
}