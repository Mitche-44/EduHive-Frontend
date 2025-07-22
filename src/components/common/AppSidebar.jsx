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

import { Home, BookOpen, Users, Settings, LogOut } from "lucide-react";
import { useLocation } from "react-router-dom";

const navItems = [
  { title: "Dashboard", url: "/learner/dashboard", icon: Home },
  { title: "Modules", url: "/learner/module", icon: BookOpen },
  { title: "Community", url: "/learner/community", icon: Users },
  { title: "Settings", url: "/learner/settings", icon: Settings },
];

export function AppSidebar() {
  const location = useLocation();

  const isActive = (url) => location.pathname.startsWith(url);

  return (
    <Sidebar className="bg-[--sidebar] text-[--sidebar-foreground] border-r border-[--sidebar-border] min-w-[250px] shadow-md">
      {/* Header */}
      <SidebarHeader className="px-4 py-5 flex items-center gap-2">
        <img src="/logo.png" alt="EduHive Logo" className="h-8 w-auto" />
        <span className="font-bold text-xl tracking-wide">EduHive</span>
      </SidebarHeader>

      {/* Content */}
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="px-4 pt-2 text-sm uppercase text-muted-foreground">
            Menu
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.title} className="group">
                  <SidebarMenuButton
                    asChild
                    className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-all text-base font-medium
                      ${isActive(item.url)
                        ? "bg-[--sidebar-accent] text-[--sidebar-accent-foreground]"
                        : "hover:bg-[--sidebar-accent] hover:text-[--sidebar-accent-foreground]"}`}
                  >
                    <a href={item.url} className="flex w-full items-center gap-3">
                      <item.icon className="w-5 h-5" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* Footer */}
      <SidebarFooter className="mt-auto border-t border-[--sidebar-border] px-4 py-4">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="flex items-center gap-3 text-red-500 hover:bg-red-100 rounded-lg px-3 py-2"
            >
              <a href="/logout">
                <LogOut className="w-5 h-5" />
                <span>Logout</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
