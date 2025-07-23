import React, { useState } from "react";
import {
  PlusCircle,
  Home,
  BookOpen,
  Layers,
  FileText,
  BarChart2,
  Users,
  Settings,
  LogOut,
  HelpCircle,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

const ContributorSidebar = () => {
  const [openMenus, setOpenMenus] = useState({
    certificates: false,
    paths: false,
    courses: false,
    settings: false,
  });

  const toggleMenu = (menu) =>
    setOpenMenus({ ...openMenus, [menu]: !openMenus[menu] });

  return (
    <aside className="w-60 h-screen bg-white border-r shadow-sm flex flex-col justify-between text-sm">
      {/* Top Section */}
      <div className="p-4">
        <button className="flex items-center gap-2 bg-blue-100 text-blue-600 rounded-full px-4 py-2 font-semibold text-sm hover:bg-blue-200 transition">
          <PlusCircle size={18} />
          Create
        </button>

        <div className="mt-6 space-y-6">
          {/* MAIN */}
          <div>
            <h2 className="text-gray-400 text-xs font-semibold mb-3 uppercase">Main</h2>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center gap-3 text-blue-600 font-bold cursor-pointer">
                <Home size={18} />
                Dashboard
              </li>

              {/* Certificates */}
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
                  <ul className="ml-7 mt-2 text-gray-600 space-y-1">
                    <li>Issued</li>
                    <li>Request</li>
                  </ul>
                )}
              </li>

              {/* Paths */}
              <li>
                <div
                  className="flex items-center justify-between cursor-pointer"
                  onClick={() => toggleMenu("paths")}
                >
                  <div className="flex items-center gap-3">
                    <Layers size={18} />
                    Paths
                  </div>
                  {openMenus.paths ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </div>
                {openMenus.paths && (
                  <ul className="ml-7 mt-2 text-gray-600 space-y-1">
                    <li>Intro</li>
                    <li>Python</li>
                  </ul>
                )}
              </li>

              {/* Quiz */}
              <li className="flex items-center gap-3 cursor-pointer">
                <FileText size={18} />
                Quiz
              </li>

              {/* Courses */}
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
                  <ul className="ml-7 mt-2 text-gray-600 space-y-1">
                    <li>React</li>
                    <li>Flask</li>
                  </ul>
                )}
              </li>

              {/* Leaderboard */}
              <li className="flex items-center gap-3 cursor-pointer">
                <BarChart2 size={18} />
                Leaderboard
              </li>
              <ul className="ml-7 mt-2 text-gray-600 space-y-1">
                <li className="flex items-center gap-2">
                  <img
                    src="https://randomuser.me/api/portraits/men/32.jpg"
                    alt="kennedy"
                    className="w-6 h-6 rounded-full"
                  />
                  <div>
                    Kennedy R.
                    <p className="text-xs text-gray-400">(Backend Manager)</p>
                  </div>
                </li>
                <li className="flex items-center gap-2">
                  <img
                    src="https://randomuser.me/api/portraits/men/41.jpg"
                    alt="juma"
                    className="w-6 h-6 rounded-full"
                  />
                  <div>
                    Juma Underson
                    <p className="text-xs text-gray-400">(UI/UX Developer)</p>
                  </div>
                </li>
              </ul>

              {/* Community */}
              <li className="flex items-center gap-3 cursor-pointer">
                <Users size={18} />
                Community
              </li>
            </ul>
          </div>

          {/* SETTINGS */}
          <div>
            <h2 className="text-gray-400 text-xs font-semibold mb-3 uppercase">Settings</h2>
            <ul className="space-y-2 text-gray-700">
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
      </div>

      {/* Footer */}
      <div className="p-4 space-y-3 text-gray-700 border-t">
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

export default ContributorSidebar;
