// import { useState } from "react";
// import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import EmailRegisterForm from "./EmailRegisterForm";
// import EmailLoginForm from "./EmailLoginForm";
// import AuthFooter from "./AuthFooter";

// export default function AuthTabs() {
//   const [tab, setTab] = useState("register");

//   return (
//     <div className="w-full max-w-md border rounded-xl shadow-lg p-6 bg-white">
//       {/* Tabs Header */}
//       <Tabs value={tab} onValueChange={setTab} className="w-full">
//         <TabsList className="grid w-full grid-cols-2 mb-4">
//           <TabsTrigger value="signin">Log In</TabsTrigger>
//           <TabsTrigger value="register">Register</TabsTrigger>
//         </TabsList>
//       </Tabs>

//       {/* Conditional Forms */}
//       {tab === "register" ? <EmailRegisterForm /> : <EmailLoginForm />}
//       <AuthFooter />
//     </div>
//   );
// }


import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import EmailRegisterForm from "./EmailRegisterForm";
import EmailLoginForm from "./EmailLoginForm";
import AuthFooter from "./AuthFooter";

export default function AuthTabs() {
  const [searchParams] = useSearchParams();
  const defaultTab = searchParams.get("tab") === "signin" ? "signin" : "register";
  const [tab, setTab] = useState(defaultTab);

  useEffect(() => {
    setTab(defaultTab);
  }, [defaultTab]);

  return (
    <div className="w-full max-w-md border rounded-xl shadow-lg p-6 bg-white">
      <Tabs value={tab} onValueChange={setTab} className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-4">
          <TabsTrigger value="signin">Log In</TabsTrigger>
          <TabsTrigger value="register">Register</TabsTrigger>
        </TabsList>
      </Tabs>

      {tab === "register" ? <EmailRegisterForm /> : <EmailLoginForm />}
      <AuthFooter />
    </div>
  );
}
