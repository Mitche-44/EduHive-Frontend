// Updated AppSidebar.jsx
import { useState } from "react";
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
} from "lucide-react";

import { useLocation, Link } from "react-router-dom";

const navItems = [
  { title: "Dashboard", url: "/dashboard", icon: BarChart3 },
  {
    title: "Paths",
    icon: BookOpen,
    children: [
      { title: "Web Development", url: "/path/web-development" },
      { title: "Data Science", url: "/path/data-science" },
      { title: "Machine Learning", url: "/path/machine-learning" },
      { title: "Mobile Development", url: "/path/mobile-development" },
    ],
  },
  { title: "Quizes", url: "/quizes", icon: HelpCircle },
  { title: "Leaderboard", url: "/leaderboard", icon: Trophy },
  { title: "Badges", url: "/badges", icon: Award },
  { title: "Community", url: "/community", icon: Users },
  { title: "Profile", url: "/profile", icon: User },
  { title: "Settings", url: "/settings", icon: Settings },
];

export default function AppSidebar({ onToggle }) {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(true);
  const [expandedItems, setExpandedItems] = useState({});

  const isActive = (url) => location.pathname === url || location.pathname.startsWith(url + "/");

  const toggleSidebar = () => {
    const newState = !isOpen;
    setIsOpen(newState);
    // Notify parent component about sidebar state change
    if (onToggle) {
      onToggle(newState);
    }
  };

  const toggleExpanded = (title) => {
    setExpandedItems(prev => ({
      ...prev,
      [title]: !prev[title]
    }));
  };

  return (
    <>
      {/* Toggle Button for Mobile */}
      <button
        onClick={toggleSidebar}
        className="fixed top-20 left-4 z-50 p-2 bg-white border border-gray-200 rounded-lg shadow-lg hover:bg-gray-50 transition-all duration-200 md:hidden"
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <div
        className={`
          fixed md:sticky top-16 left-0 z-40 h-[calc(100vh-64px)] 
          transition-all duration-300 ease-in-out transform
          ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
          ${isOpen ? 'w-72' : 'md:w-16'}
          border-r border-gray-200 bg-white shadow-lg md:shadow-none
          flex flex-col
        `}
      >
        {/* Sidebar Header */}
        <SidebarHeader className="border-b border-gray-100 p-4 shrink-0">
          <div className="flex items-center justify-between">
            <div className={`flex items-center gap-3 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 md:opacity-0'}`}>
              <h1 className="text-xl font-bold text-gray-900">EduHive</h1>
            </div>
            <button
              onClick={toggleSidebar}
              className="hidden md:flex p-1.5 hover:bg-gray-100 rounded-lg transition-colors duration-200"
            >
              {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </SidebarHeader>

        {/* Sidebar Content (scrollable) */}
        <SidebarContent className="flex-1 overflow-y-auto px-3 py-4">
          <SidebarGroup>
            <SidebarGroupLabel 
              className={`text-xs font-medium text-gray-500 uppercase tracking-wider mb-4 px-2 transition-opacity duration-300 ${
                isOpen ? 'opacity-100' : 'opacity-0'
              }`}
            >
              MENU
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu className="space-y-1">
                {navItems.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <div>
                      {item.children ? (
                        // Expandable menu item
                        <button
                          onClick={() => toggleExpanded(item.title)}
                          className={`
                            w-full flex items-center justify-between px-3 py-2.5 rounded-lg font-medium transition-all duration-200
                            ${expandedItems[item.title]
                              ? "bg-blue-50 text-blue-700"
                              : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"}
                          `}
                        >
                          <div className="flex items-center gap-3">
                            <item.icon
                              className={`h-5 w-5 ${
                                expandedItems[item.title]
                                  ? "text-blue-700"
                                  : "text-gray-400"
                              }`}
                            />
                            <span className={`text-sm transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
                              {item.title}
                            </span>
                          </div>
                          {isOpen && (
                            <div className="transition-transform duration-200">
                              {expandedItems[item.title] ? (
                                <ChevronDown className="h-4 w-4" />
                              ) : (
                                <ChevronRight className="h-4 w-4" />
                              )}
                            </div>
                          )}
                        </button>
                      ) : (
                        // Regular menu item
                        <Link
                          to={item.url}
                          className={`
                            w-full flex items-center gap-3 px-3 py-2.5 rounded-lg font-medium transition-all duration-200
                            ${isActive(item.url)
                              ? "bg-blue-50 text-blue-700 border-r-2 border-blue-700"
                              : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"}
                          `}
                        >
                          <item.icon
                            className={`h-5 w-5 ${
                              isActive(item.url)
                                ? "text-blue-700"
                                : "text-gray-400"
                            }`}
                          />
                          <span className={`text-sm transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
                            {item.title}
                          </span>
                        </Link>
                      )}

                      {/* Submenu */}
                      {item.children && expandedItems[item.title] && isOpen && (
                        <div className="ml-6 mt-1 space-y-1 overflow-hidden transition-all duration-300">
                          {item.children.map((child) => (
                            <Link
                              key={child.title}
                              to={child.url}
                              className={`
                                block w-full px-3 py-2 rounded-lg text-sm font-normal transition-all duration-200
                                ${isActive(child.url)
                                  ? "bg-blue-100 text-blue-800"
                                  : "text-gray-500 hover:bg-gray-100 hover:text-gray-700"}
                              `}
                            >
                              {child.title}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>

        {/* Sidebar Footer */}
        <SidebarFooter className="border-t border-gray-100 p-3 shrink-0">
          <SidebarMenu>
            <SidebarMenuItem>
              <button
                className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg font-medium text-red-600 hover:bg-red-50 hover:text-red-700 transition-all duration-200"
                onClick={() => {
                  // Add logout logic here
                  console.log('Logout clicked');
                }}
              >
                <LogOut className="h-5 w-5 text-red-500" />
                <span className={`text-sm transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
                  Logout
                </span>
              </button>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </div>
    </>
  );
}

