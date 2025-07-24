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
      { title: "Learn Generative AI", url: "/paths/ai" },
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
    <div className="h-[calc(100vh-64px)] sticky top-16 flex flex-col w-72 border-r border-gray-200 bg-white">
      {/* Sidebar Header */}
      <SidebarHeader className="border-b border-gray-100 p-6 shrink-0">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500 text-white">
            <GraduationCap className="h-6 w-6" />
          </div>
          <h1 className="text-xl font-bold text-gray-900">EduHive</h1>
        </div>
      </SidebarHeader>

      {/* Sidebar Content (scrollable) */}
      <SidebarContent className="flex-1 overflow-y-auto px-4 py-6">
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
                        ? "bg-blue-50 text-blue-700 border-r-2 border-blue-700"
                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"}
                    `}
                  >
                    <a
                      href={item.url || "#"}
                      className="flex items-center gap-3 w-full"
                    >
                      <item.icon
                        className={`h-5 w-5 ${
                          isActive(item.url)
                            ? "text-blue-700"
                            : "text-gray-400"
                        }`}
                      />
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
                                ? "bg-blue-100 text-blue-800"
                                : "text-gray-500 hover:bg-gray-100 hover:text-gray-700"}
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

      {/* Sidebar Footer */}
      <SidebarFooter className="border-t border-gray-100 p-4 shrink-0">
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
    </div>
  );
}