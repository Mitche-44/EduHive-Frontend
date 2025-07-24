// src/layouts/LearnerLayout.jsx
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import LearnerSidebar from "@/components/common/AppSidebar";
import { Outlet } from "react-router-dom";

export default function LearnerLayout() {
  return (
    <div className="h-screen w-screen overflow-hidden flex flex-col">
      {/* Fixed Navbar */}
      <Navbar />
      
      {/* Main content below navbar */}
      <div className="flex flex-1 pt-16 overflow-hidden">
        {/* Sticky Sidebar (does not scroll) */}
        <aside className="w-80 shrink-0 h-full sticky top-16">
          <LearnerSidebar />
        </aside>
        
        {/* Scrollable Page Content with Footer */}
        <main className="flex-1 h-full overflow-y-auto bg-gray-50 text-gray-800">
          <div className="px-6 py-6 min-h-full flex flex-col">
            {/* Page content */}
            <div className="flex-1">
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