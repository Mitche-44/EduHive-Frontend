// import {
//   Sidebar,
//   SidebarContent,
//   SidebarFooter,
//   SidebarGroup,
//   SidebarGroupContent,
//   SidebarGroupLabel,
//   SidebarHeader,
//   SidebarMenu,
//   SidebarMenuButton,
//   SidebarMenuItem,
// } from "@/components/ui/sidebar";

// import { Home, BookOpen, Users, Settings, LogOut } from "lucide-react";
// import { useLocation } from "react-router-dom";

// const navItems = [
//   { title: "Dashboard", url: "/learner/dashboard", icon: Home },
//   { title: "Modules", url: "/learner/module", icon: BookOpen },
//   { title: "Community", url: "/learner/community", icon: Users },
//   { title: "Settings", url: "/learner/settings", icon: Settings },
// ];

// export function AppSidebar() {
//   const location = useLocation();

//   const isActive = (url) => location.pathname.startsWith(url);

//   return (
//     <Sidebar className="bg-[--sidebar] text-[--sidebar-foreground] border-r border-[--sidebar-border] min-w-[250px] shadow-md">
//       {/* Header */}
//       <SidebarHeader className="px-4 py-5 flex items-center gap-2">
//         <img src="/logo.png" alt="EduHive Logo" className="h-8 w-auto" />
//         <span className="font-bold text-xl tracking-wide">EduHive</span>
//       </SidebarHeader>

//       {/* Content */}
//       <SidebarContent>
//         <SidebarGroup>
//           <SidebarGroupLabel className="px-4 pt-2 text-sm uppercase text-muted-foreground">
//             Menu
//           </SidebarGroupLabel>
//           <SidebarGroupContent>
//             <SidebarMenu>
//               {navItems.map((item) => (
//                 <SidebarMenuItem key={item.title} className="group">
//                   <SidebarMenuButton
//                     asChild
//                     className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-all text-base font-medium
//                       ${isActive(item.url)
//                         ? "bg-[--sidebar-accent] text-[--sidebar-accent-foreground]"
//                         : "hover:bg-[--sidebar-accent] hover:text-[--sidebar-accent-foreground]"}`}
//                   >
//                     <a href={item.url} className="flex w-full items-center gap-3">
//                       <item.icon className="w-5 h-5" />
//                       <span>{item.title}</span>
//                     </a>
//                   </SidebarMenuButton>
//                 </SidebarMenuItem>
//               ))}
//             </SidebarMenu>
//           </SidebarGroupContent>
//         </SidebarGroup>
//       </SidebarContent>

//       {/* Footer */}
//       <SidebarFooter className="mt-auto border-t border-[--sidebar-border] px-4 py-4">
//         <SidebarMenu>
//           <SidebarMenuItem>
//             <SidebarMenuButton
//               asChild
//               className="flex items-center gap-3 text-red-500 hover:bg-red-100 rounded-lg px-3 py-2"
//             >
//               <a href="/logout">
//                 <LogOut className="w-5 h-5" />
//                 <span>Logout</span>
//               </a>
//             </SidebarMenuButton>
//           </SidebarMenuItem>
//         </SidebarMenu>
//       </SidebarFooter>
//     </Sidebar>
//   );
// }





// import {
//   Sidebar,
//   SidebarContent,
//   SidebarFooter,
//   SidebarGroup,
//   SidebarGroupContent,
//   SidebarGroupLabel,
//   SidebarHeader,
//   SidebarMenu,
//   SidebarMenuButton,
//   SidebarMenuItem,
//   SidebarTrigger,
// } from "@/components/ui/sidebar";

// import { Home, BookOpen, Users, Settings, LogOut, GraduationCap } from "lucide-react";
// import { useLocation } from "react-router-dom";

// const navItems = [
//   { title: "Dashboard", url: "/learner/dashboard", icon: Home },
//   { title: "Modules", url: "/learner/module", icon: BookOpen },
//   { title: "Community", url: "/learner/community", icon: Users },
//   { title: "Settings", url: "/learner/settings", icon: Settings },
// ];

// export function AppSidebar() {
//   const location = useLocation();
  
//   const isActive = (url) => location.pathname.startsWith(url);

//   return (
//     <Sidebar className="border-r border-gray-200">
//       {/* Header */}
//       <SidebarHeader className="border-b border-gray-100 p-6">
//         <div className="flex items-center gap-3">
//           <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500 text-white">
//             <GraduationCap className="h-6 w-6" />
//           </div>
//           <div className="flex flex-col">
//             <h1 className="text-xl font-bold text-gray-900">EduHive</h1>
//           </div>
//         </div>
//       </SidebarHeader>

//       {/* Content */}
//       <SidebarContent className="px-4 py-6">
//         <SidebarGroup>
//           <SidebarGroupLabel className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-4 px-2">
//             MENU
//           </SidebarGroupLabel>
//           <SidebarGroupContent>
//             <SidebarMenu className="space-y-1">
//               {navItems.map((item) => (
//                 <SidebarMenuItem key={item.title}>
//                   <SidebarMenuButton
//                     asChild
//                     isActive={isActive(item.url)}
//                     className={`
//                       w-full justify-start px-3 py-2.5 rounded-lg font-medium transition-all duration-200
//                       ${isActive(item.url) 
//                         ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-700' 
//                         : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
//                       }
//                     `}
//                   >
//                     <a href={item.url} className="flex items-center gap-3 w-full">
//                       <item.icon className={`h-5 w-5 ${isActive(item.url) ? 'text-blue-700' : 'text-gray-400'}`} />
//                       <span className="text-sm">{item.title}</span>
//                     </a>
//                   </SidebarMenuButton>
//                 </SidebarMenuItem>
//               ))}
//             </SidebarMenu>
//           </SidebarGroupContent>
//         </SidebarGroup>
//       </SidebarContent>

//       {/* Footer */}
//       <SidebarFooter className="border-t border-gray-100 p-4">
//         <SidebarMenu>
//           <SidebarMenuItem>
//             <SidebarMenuButton 
//               asChild
//               className="w-full justify-start px-3 py-2.5 rounded-lg font-medium text-red-600 hover:bg-red-50 hover:text-red-700 transition-all duration-200"
//             >
//               <button className="flex items-center gap-3 w-full">
//                 <LogOut className="h-5 w-5 text-red-500" />
//                 <span className="text-sm">Logout</span>
//               </button>
//             </SidebarMenuButton>
//           </SidebarMenuItem>
//         </SidebarMenu>
//       </SidebarFooter>
//     </Sidebar>
//   );
// }

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import {
  HelpCircle,
  LogOut,
  Settings,
  Award,
  BookOpen,
  BarChart3,
  Users,
  GraduationCap,
} from "lucide-react";

import { useLocation } from "react-router-dom";

const navItems = [
  { title: "Dashboard", url: "/dashboard", icon: BarChart3 },
  {
    title: "Certificates",
    icon: Award,
    children: [
      { title: "JavaScript Tutorials", url: "/certificates/javascript" },
      { title: "Introduction to Python", url: "/certificates/python" },
    ],
  },
  {
    title: "Paths",
    icon: BookOpen,
    children: [
      { title: "Learn generative AI", url: "/paths/ai" },
      { title: "JavaScript Tutorials", url: "/paths/javascript" },
      { title: "Introduction to Python", url: "/paths/python" },
    ],
  },
  { title: "Quiz", url: "/quiz", icon: HelpCircle },
  { title: "Courses", url: "/courses", icon: BookOpen },
  { title: "Leaderboard", url: "/leaderboard", icon: Award },
  { title: "Community", url: "/community", icon: Users },
];

export default function AppSidebar() {
  const location = useLocation();

  const isActive = (url) => location.pathname.startsWith(url);

  return (
    <Sidebar className="border-r border-gray-200 w-80 bg-white">
      {/* Header */}
      <SidebarHeader className="border-b border-gray-100 p-6">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500 text-white">
            <GraduationCap className="h-6 w-6" />
          </div>
          <div className="flex flex-col">
            <h1 className="text-xl font-bold text-gray-900">EduHive</h1>
          </div>
        </div>
      </SidebarHeader>

      {/* Content */}
      <SidebarContent className="px-4 py-6 overflow-y-auto">
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-4 px-2">
            MENU
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {navItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={isActive(item.url)}
                    className={`
                      w-full justify-start px-3 py-2.5 rounded-lg font-medium transition-all duration-200
                      ${isActive(item.url) 
                        ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-700' 
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                      }
                    `}
                  >
                    <a href={item.url || "#"} className="flex items-center gap-3 w-full">
                      <item.icon className={`h-5 w-5 ${isActive(item.url) ? 'text-blue-700' : 'text-gray-400'}`} />
                      <span className="text-sm">{item.title}</span>
                    </a>
                  </SidebarMenuButton>

                  {item.children && (
                    <SidebarMenu className="ml-6 mt-1 space-y-1">
                      {item.children.map((child) => (
                        <SidebarMenuItem key={child.title}>
                          <SidebarMenuButton
                            asChild
                            isActive={isActive(child.url)}
                            className={`
                              w-full justify-start px-3 py-2 rounded-lg text-sm font-normal transition-all duration-200
                              ${isActive(child.url) 
                                ? 'bg-blue-100 text-blue-800' 
                                : 'text-gray-500 hover:bg-gray-100 hover:text-gray-700'
                              }
                            `}
                          >
                            <a href={child.url} className="block w-full">
                              {child.title}
                            </a>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      ))}
                    </SidebarMenu>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* Footer */}
      <SidebarFooter className="border-t border-gray-100 p-4">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton 
              asChild
              className="w-full justify-start px-3 py-2.5 rounded-lg font-medium text-red-600 hover:bg-red-50 hover:text-red-700 transition-all duration-200"
            >
              <button className="flex items-center gap-3 w-full">
                <LogOut className="h-5 w-5 text-red-500" />
                <span className="text-sm">Logout</span>
              </button>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
