// src/components/contributor/ContributorSidebar.jsx
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
  FolderKanban,
  Layers,
  HelpCircle,
  Users,
  User,
  LogOut,
  Menu,
  X,
  GraduationCap,
  Bell,
  Zap,
} from "lucide-react";
import { useLocation, Link } from "react-router-dom";
import { useSidebar } from "@/components/ui/sidebar"; // ✅ Import the context hook

const navItems = [
  {
    title: "My Paths",
    url: "/contributor/addpath",
    icon: FolderKanban,
    description: "Manage your learning paths",
  },
  {
    title: "My Modules",
    url: "/contributor/addmodule",
    icon: Layers,
    description: "Manage your modules",
  },
  {
    title: "My Challenges",
    url: "/contributor/challenges",
    icon: HelpCircle,
    description: "Create & edit quizzes",
  },
  {
    title: "My Learners",
    url: "/contributor/learners",
    icon: Users,
    description: "Track learner progress",
  },
];

const SidebarHeaderComponent = () => {
  const { open: isOpen, toggleSidebar } = useSidebar();

  return (
    <SidebarHeader className="border-b border-gray-200 p-3 shrink-0 bg-white">
      <div className="flex items-center justify-between">
        <div className={`flex items-center gap-2.5 transition-all duration-300 ${isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg shadow-md">
            <GraduationCap className="h-4 w-4 text-white" />
          </div>
          <div className="flex flex-col">
            <span className="text-base font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              EduHive
            </span>
            <span className="text-xs text-gray-500">Contributor Panel</span>
          </div>
        </div>
        <button
          onClick={toggleSidebar}
          className="hidden md:flex p-1.5 hover:bg-gray-100 rounded-lg transition-all duration-200 hover:scale-105 group"
        >
          {isOpen ? (
            <X className="h-4 w-4 text-gray-600" />
          ) : (
            <Menu className="h-4 w-4 text-gray-600" />
          )}
        </button>
      </div>
    </SidebarHeader>
  );
};

const NavigationItem = ({ item, isOpen, isActive }) => (
  <Link
    to={item.url}
    className={`group w-full flex items-center gap-3 px-3 py-2.5 rounded-xl font-medium transition-all duration-300 hover:scale-[1.01] ${
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
      <div className="flex flex-col items-start">
        <span className="text-sm font-semibold">{item.title}</span>
        <span className="text-xs opacity-70">{item.description}</span>
      </div>
    )}
  </Link>
);

const LogoutButton = ({ isOpen, onLogout }) => (
  <button
    className="group w-full flex items-center gap-3 px-3 py-2.5 rounded-xl font-medium text-red-600 hover:bg-red-50 transition-all duration-300 hover:scale-[1.01] active:scale-[0.99] border border-red-200 hover:border-red-300"
    onClick={onLogout}
  >
    <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-red-100 group-hover:bg-red-200 transition-all duration-300">
      <LogOut className="h-4 w-4" />
    </div>
    {isOpen && (
      <div className="flex flex-col items-start">
        <span className="text-sm font-semibold">Sign Out</span>
        <span className="text-xs opacity-70">End your session</span>
      </div>
    )}
  </button>
);

const UserInfo = () => (
  <div className="mt-3 p-2.5 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-gray-200">
    <div className="flex items-center gap-2.5">
      <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-sm">
        <User className="h-4 w-4 text-white" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold text-gray-800 truncate">Contributor</p>
        <p className="text-xs text-gray-500 truncate">Manage Content</p>
      </div>
      <div className="flex items-center gap-1">
        <Zap className="h-3 w-3 text-yellow-500" />
        <span className="text-xs text-yellow-600 font-bold">Pro</span>
      </div>
    </div>
  </div>
);

export default function ContributorSidebar({ className = "" }) {
  const { open: isOpen, toggleSidebar: onToggle } = useSidebar();
  const location = useLocation();
  const isActive = (url) => location.pathname === url || location.pathname.startsWith(url + "/");

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to sign out?")) {
      console.log("Contributor logged out");
      // Implement logout logic
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

          {isOpen && (
            <div className="px-3 py-2 bg-gradient-to-r from-blue-50 to-purple-50 border-b border-gray-100">
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-gray-600">Active Session</span>
                </div>
                <div className="flex items-center gap-1 text-gray-500">
                  <Bell className="h-3 w-3" />
                  <span>3</span>
                </div>
              </div>
            </div>
          )}

          <SidebarContent className="flex-1 overflow-y-auto px-2 py-4 custom-scrollbar">
            <SidebarGroup>
              <SidebarGroupLabel className={`text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4 px-3 transition-all duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
                Contributor Menu
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu className="space-y-1">
                  {navItems.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <NavigationItem item={item} isOpen={isOpen} isActive={isActive} />
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>

          <SidebarFooter className="border-t border-gray-200 p-3 shrink-0 bg-gray-50/50">
            <SidebarMenu>
              <SidebarMenuItem>
                <LogoutButton isOpen={isOpen} onLogout={handleLogout} />
              </SidebarMenuItem>
            </SidebarMenu>

            {isOpen && <UserInfo />}
          </SidebarFooter>
        </div>
      </aside>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(156, 163, 175, 0.3);
          border-radius: 2px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(156, 163, 175, 0.5);
        }
      `}</style>
    </>
  );
}
