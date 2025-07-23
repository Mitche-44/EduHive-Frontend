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
  ChevronDown,
} from "lucide-react";

import { useLocation, Link } from "react-router-dom";
import { useSidebar } from "@/components/ui/sidebar";
import { useState } from "react";

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

export function AppSidebar() {
  const location = useLocation();
  const { toggleSidebar } = useSidebar();
  const [expandedItems, setExpandedItems] = useState({});

  const isActive = (url) => {
    if (!url) return false;
    return location.pathname === url || location.pathname.startsWith(url + '/');
  };

  const toggleExpanded = (title) => {
    setExpandedItems(prev => ({
      ...prev,
      [title]: !prev[title]
    }));
  };

  const handleLinkClick = () => {
    // Close sidebar on mobile when a link is clicked
    if (window.innerWidth < 1024) {
      toggleSidebar();
    }
  };

  return (
    <Sidebar className="border-r border-gray-200 bg-white">
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

      <SidebarContent className="px-4 py-6 overflow-y-auto">
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-4 px-2">
            MENU
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {navItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  {item.children ? (
                    // Parent item with children
                    <div>
                      <SidebarMenuButton
                        onClick={() => toggleExpanded(item.title)}
                        className={`w-full justify-between px-3 py-2.5 rounded-lg font-medium transition-all duration-200 text-gray-600 hover:bg-gray-50 hover:text-gray-900`}
                      >
                        <div className="flex items-center gap-3">
                          <item.icon className="h-5 w-5 text-gray-400" />
                          <span className="text-sm">{item.title}</span>
                        </div>
                        <ChevronDown 
                          className={`h-4 w-4 transition-transform duration-200 ${
                            expandedItems[item.title] ? 'rotate-180' : ''
                          }`} 
                        />
                      </SidebarMenuButton>

                      {expandedItems[item.title] && (
                        <SidebarMenu className="ml-6 mt-1 space-y-1">
                          {item.children.map((child) => (
                            <SidebarMenuItem key={child.title}>
                              <SidebarMenuButton
                                asChild
                                isActive={isActive(child.url)}
                                className={`w-full justify-start px-3 py-2 rounded-lg text-sm font-normal transition-all duration-200 ${
                                  isActive(child.url)
                                    ? "bg-blue-100 text-blue-800"
                                    : "text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                                }`}
                              >
                                <Link
                                  to={child.url}
                                  className="block w-full"
                                  onClick={handleLinkClick}
                                >
                                  {child.title}
                                </Link>
                              </SidebarMenuButton>
                            </SidebarMenuItem>
                          ))}
                        </SidebarMenu>
                      )}
                    </div>
                  ) : (
                    // Regular menu item
                    <SidebarMenuButton
                      asChild
                      isActive={isActive(item.url)}
                      className={`w-full justify-start px-3 py-2.5 rounded-lg font-medium transition-all duration-200 ${
                        isActive(item.url)
                          ? "bg-blue-50 text-blue-700 border-r-2 border-blue-700"
                          : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                      }`}
                    >
                      <Link
                        to={item.url}
                        className="flex items-center gap-3 w-full"
                        onClick={handleLinkClick}
                      >
                        <item.icon
                          className={`h-5 w-5 ${
                            isActive(item.url)
                              ? "text-blue-700"
                              : "text-gray-400"
                          }`}
                        />
                        <span className="text-sm">{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

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