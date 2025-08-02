import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  BarChart3,
  BookOpen,
  HelpCircle,
  Trophy,
  Award,
  Users,
  User,
  Settings,
  LogOut,
  ChevronDown,
  ChevronRight,
  Menu,
  X,
  GraduationCap,
  Zap,
  Bell,
} from "lucide-react";
import { useLocation, Link } from "react-router-dom";
import { useState } from "react";
import { useSidebar } from "@/components/ui/sidebar";

// Nav items
const navItems = [
  { title: "Contributors", url: "/admin/contributors", icon: BarChart3, badge: "3", description: "Overview & Analytics" },
  { title: "Learners", url: "/admin/learners", icon: BookOpen, description: "Structured Courses" },
  { title: "Modules", url: "/admin/modules", icon: HelpCircle, description: "Tests & Quizzes" },
  { title: "Paths", url: "/admin/paths", icon: Trophy, description: "Rankings & Competition" },
];

// Header
const SidebarHeaderComponent = () => {
  const { open: isOpen, toggleSidebar: onToggle } = useSidebar();

  return (
    <SidebarHeader className="border-b border-gray-200 p-3 shrink-0 bg-white">
      <div className="flex items-center justify-between">
        <div className={`flex items-center gap-2.5 transition-all duration-300 ${isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg shadow-md">
            <GraduationCap className="h-4 w-4 text-white" />
          </div>
          <div className="flex flex-col">
            <span className="text-base font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">LearnHub</span>
            <span className="text-xs text-gray-500">Learning Management</span>
          </div>
        </div>
        <button
          onClick={onToggle}
          className="hidden md:flex p-1.5 hover:bg-gray-100 rounded-lg transition-all duration-200 hover:scale-105 group"
        >
          {isOpen ? (
            <X className="h-4 w-4 text-gray-600 group-hover:text-gray-800 transition-colors" />
          ) : (
            <Menu className="h-4 w-4 text-gray-600 group-hover:text-gray-800 transition-colors" />
          )}
        </button>
      </div>
    </SidebarHeader>
  );
};

// Quick Stats
const QuickStats = () => (
  <div className="px-3 py-2 bg-gradient-to-r from-blue-50 to-purple-50 border-b border-gray-100">
    <div className="flex items-center justify-between text-xs">
      <div className="flex items-center gap-2">
        <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
        <span className="text-gray-600">Active Session</span>
      </div>
      <div className="flex items-center gap-1 text-gray-500">
        <Bell className="h-3 w-3" />
        <span>5</span>
      </div>
    </div>
  </div>
);

// Badge
const Badge = ({ badge }) => (
  <span className={`px-2 py-0.5 text-xs font-bold rounded-full ${
    badge === 'new' ? 'bg-emerald-500 text-white animate-pulse' : 'bg-blue-100 text-blue-600'
  }`}>
    {badge}
  </span>
);

// Navigation Item
const NavigationItem = ({ item, isActive, isExpanded, onToggleExpanded }) => {
  const { open: isOpen } = useSidebar();

  const baseClasses = "group w-full flex items-center gap-3 px-3 py-2.5 rounded-xl font-medium transition-all duration-300 hover:scale-[1.01] active:scale-[0.99] relative overflow-hidden";

  if (item.children) {
    return (
      <div>
        <button
          onClick={() => onToggleExpanded(item.title)}
          className={`${baseClasses} justify-between ${
            isExpanded
              ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-200"
              : "text-gray-700 hover:bg-gray-50"
          }`}
        >
          <div className="flex items-center gap-3">
            <div className={`flex items-center justify-center w-8 h-8 rounded-lg ${
              isExpanded ? "bg-white/20" : "bg-gray-100 group-hover:bg-gray-200"
            }`}>
              <item.icon className="h-4 w-4" />
            </div>
            {isOpen && (
              <div className="flex flex-col items-start">
                <span className="text-sm font-semibold">{item.title}</span>
                <span className="text-xs opacity-70">{item.description}</span>
              </div>
            )}
          </div>
          {isOpen && (
            <div className="transition-transform duration-300">
              {isExpanded ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
            </div>
          )}
        </button>
        {item.children && isExpanded && isOpen && (
          <div className="ml-5 mt-2 space-y-1 animate-in slide-in-from-top-2 duration-300">
            {item.children.map((child) => (
              <Link
                key={child.title}
                to={child.url}
                className={`group flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium ${
                  isActive(child.url)
                    ? "bg-blue-50 text-blue-700 border-l-2 border-blue-500 shadow-sm"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full group-hover:bg-blue-500" />
                  <span>{child.title}</span>
                </div>
                {child.badge && <Badge badge={child.badge} />}
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <Link
      to={item.url}
      className={`${baseClasses} ${
        isActive(item.url)
          ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-200"
          : "text-gray-700 hover:bg-gray-50"
      }`}
    >
      <div className={`flex items-center justify-center w-8 h-8 rounded-lg ${
        isActive(item.url) ? "bg-white/20" : "bg-gray-100 group-hover:bg-gray-200"
      }`}>
        <item.icon className="h-4 w-4" />
      </div>
      {isOpen && (
        <div className="flex flex-col items-start flex-1">
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold">{item.title}</span>
            {item.badge && <Badge badge={item.badge} />}
          </div>
          <span className="text-xs opacity-70">{item.description}</span>
        </div>
      )}
      {isActive(item.url) && (
        <div className="absolute right-0 top-0 h-full w-1 bg-gradient-to-b from-blue-400 to-purple-400 rounded-l-full"></div>
      )}
    </Link>
  );
};

// Logout Button
const LogoutButton = ({ onLogout }) => {
  const { open: isOpen } = useSidebar();

  return (
    <button
      className="group w-full flex items-center gap-3 px-3 py-2.5 rounded-xl font-medium text-red-600 hover:bg-red-50 border border-red-200 hover:border-red-300"
      onClick={onLogout}
    >
      <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-red-100 group-hover:bg-red-200">
        <LogOut className="h-4 w-4" />
      </div>
      {isOpen && (
        <>
          <div className="flex flex-col items-start">
            <span className="text-sm font-semibold">Sign Out</span>
            <span className="text-xs opacity-70">End your session</span>
          </div>
          <div className="ml-auto">
            <div className="w-1.5 h-1.5 bg-red-400 rounded-full animate-pulse" />
          </div>
        </>
      )}
    </button>
  );
};

// User Info
const UserInfo = () => {
  const { open: isOpen } = useSidebar();
  return isOpen ? (
    <div className="mt-3 p-2.5 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-gray-200">
      <div className="flex items-center gap-2.5">
        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-sm">
          <User className="h-4 w-4 text-white" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-gray-800 truncate">Student Portal</p>
          <p className="text-xs text-gray-500 truncate">Active Learning Mode</p>
        </div>
        <div className="flex items-center gap-1">
          <Zap className="h-3 w-3 text-yellow-500" />
          <span className="text-xs text-yellow-600 font-bold">Pro</span>
        </div>
      </div>
    </div>
  ) : null;
};

// Final Component
export default function AdminNav({ className = "" }) {
  const location = useLocation();
  const { open: isOpen, toggleSidebar: onToggle } = useSidebar();
  const [expandedItems, setExpandedItems] = useState({});

  const isActive = (url) =>
    location.pathname === url || location.pathname.startsWith(url + "/");

  const toggleExpanded = (title) => {
    setExpandedItems((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to sign out?")) {
      console.log("User logged out");
    }
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-20 lg:hidden transition-opacity duration-300"
          onClick={onToggle}
        />
      )}

      <aside className={`fixed md:relative h-full ${className}`}>
        <div className="h-full flex flex-col bg-white border-r border-gray-200 shadow-xl">
          <SidebarHeaderComponent />
          {isOpen && <QuickStats />}

          <SidebarContent className="flex-1 overflow-y-auto px-2 py-4 custom-scrollbar">
            <SidebarGroup>
              <SidebarGroupLabel className={`text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4 px-3 transition-all duration-300 ${isOpen ? "opacity-100" : "opacity-0"}`}>
                Navigation
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu className="space-y-1">
                  {navItems.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <NavigationItem
                        item={item}
                        isActive={isActive}
                        isExpanded={expandedItems[item.title]}
                        onToggleExpanded={toggleExpanded}
                      />
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>

          <SidebarFooter className="border-t border-gray-200 p-3 shrink-0 bg-gray-50/50">
            <SidebarMenu>
              <SidebarMenuItem>
                <LogoutButton onLogout={handleLogout} />
              </SidebarMenuItem>
            </SidebarMenu>
            <UserInfo />
          </SidebarFooter>
        </div>
      </aside>
    </>
  );
}