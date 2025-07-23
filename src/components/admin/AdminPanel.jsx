import React, { useState } from "react";
import {
  Home,
  BookOpen,
  BarChart2,
  Users,
  Settings,
  LogOut,
  HelpCircle,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

const AdminSidebar = () => {
  const [openMenus, setOpenMenus] = useState({
    certificates: false,
    paths: false,
    courses: false,
    leaderboard: false,
    settings: false,
  });

  const toggleMenu = (menu) =>
    setOpenMenus({ ...openMenus, [menu]: !openMenus[menu] });

  return (
    <aside className="w-64 h-screen bg-white shadow-md border-r text-sm hidden md:flex flex-col justify-between">
      <div className="p-4 space-y-6">
        {/* MAIN Section */}
        <div>
          <h2 className="text-gray-400 text-xs font-bold mb-2 uppercase">Main</h2>
          <ul className="space-y-2">
            <li className="flex items-center gap-3 text-blue-500 font-bold">
              <Home size={18} />
              Dashboard
            </li>

            {/* Certificates Dropdown */}
            <li>
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() => toggleMenu("certificates")}
              >
                <div className="flex items-center gap-3">
                  <BookOpen size={18} />
                  Certificates
                </div>
                {openMenus.certificates ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </div>
              {openMenus.certificates && (
                <ul className="ml-7 mt-2 space-y-1 text-gray-600">
                  <li>Issued Certificates</li>
                  <li>Request Certificate</li>
                </ul>
              )}
            </li>

            {/* Paths Dropdown */}
            <li>
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() => toggleMenu("paths")}
              >
                <div className="flex items-center gap-3">
                  <BookOpen size={18} />
                  Paths
                </div>
                {openMenus.paths ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </div>
              {openMenus.paths && (
                <ul className="ml-7 mt-2 space-y-1 text-gray-600">
                  <li>Intro into Programming</li>
                  <li>Python</li>
                </ul>
              )}
            </li>

            <li className="flex items-center gap-3">
              <BookOpen size={18} />
              Quiz
            </li>

            {/* Courses Dropdown */}
            <li>
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() => toggleMenu("courses")}
              >
                <div className="flex items-center gap-3">
                  <BookOpen size={18} />
                  Courses
                </div>
                {openMenus.courses ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </div>
              {openMenus.courses && (
                <ul className="ml-7 mt-2 space-y-1 text-gray-600">
                  <li>React</li>
                  <li>Flask</li>
                  <li>UI/UX</li>
                </ul>
              )}
            </li>

            {/* Leaderboard Dropdown */}
            <li>
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() => toggleMenu("leaderboard")}
              >
                <div className="flex items-center gap-3">
                  <BarChart2 size={18} />
                  Leaderboard
                </div>
                {openMenus.leaderboard ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </div>
              {openMenus.leaderboard && (
                <ul className="ml-7 mt-2 text-gray-600 space-y-1">
                  <li>Kennedy R. <span className="text-xs text-gray-400">(Backend Manager)</span></li>
                  <li>Juma Underson <span className="text-xs text-gray-400">(UI/UX Developer)</span></li>
                </ul>
              )}
            </li>

            <li className="flex items-center gap-3">
              <Users size={18} />
              Community
            </li>
          </ul>
        </div>

        {/* SETTINGS Section */}
        <div>
          <h2 className="text-gray-400 text-xs font-bold mb-2 uppercase">Settings</h2>
          <ul className="space-y-2">
            <li>
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() => toggleMenu("settings")}
              >
                <div className="flex items-center gap-3">
                  <Settings size={18} />
                  Settings
                </div>
                {openMenus.settings ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </div>
              {openMenus.settings && (
                <ul className="ml-7 mt-2 text-gray-600 space-y-1">
                  <li>Account</li>
                  <li>Notifications</li>
                </ul>
              )}
            </li>
          </ul>
        </div>
      </div>

      {/* Footer */}
      <div className="p-4 space-y-3 text-gray-700">
        <div className="flex items-center gap-3 cursor-pointer">
          <HelpCircle size={18} />
          Help
        </div>
        <div className="flex items-center gap-3 text-red-500 font-medium cursor-pointer">
          <LogOut size={18} />
          Logout
        </div>
      </div>
    </aside>
  );
};

export default AdminSidebar;
