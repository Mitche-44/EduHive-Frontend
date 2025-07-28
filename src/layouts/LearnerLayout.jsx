// src/layouts/LearnerLayout.jsx
import { useState } from "react";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import AppSidebar from "@/components/common/AppSidebar";
import { Outlet } from "react-router-dom";

export default function LearnerLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="h-screen w-screen overflow-hidden flex flex-col bg-gray-50">
      {/* Fixed Navbar */}
      <Navbar onToggleSidebar={toggleSidebar} />
      
      {/* Main content below navbar */}
      <div className="flex flex-1 pt-16 overflow-hidden">
        {/* Sidebar - handles its own width transitions */}
        <AppSidebar 
          isOpen={sidebarOpen} 
          onToggle={toggleSidebar} 
          className={`shrink-0 h-full sticky top-16 transition-all duration-300 ease-in-out bg-white border-r border-gray-200 z-30 ${
            sidebarOpen ? 'w-72' : 'w-16'
          }`}
        />
        
        {/* Scrollable Page Content - let it flex naturally */}
        <main className="flex-1 h-full overflow-y-auto bg-gray-50 text-gray-800">
          <div className="px-4 sm:px-6 py-6 min-h-full flex flex-col max-w-7xl mx-auto">
            {/* Page content */}
            <div className="flex-1 mb-8">
              <Outlet />
            </div>
            
            {/* Footer at bottom of scrollable content */}
            <Footer />
          </div>
        </main>
      </div>
    </div>
  );
}