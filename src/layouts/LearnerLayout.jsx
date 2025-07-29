import { useState } from "react"
import Navbar from "@/components/common/Navbar"
import Footer from "@/components/common/Footer"
import LearnerSidebar from "@/components/common/AppSidebar"
import { Outlet } from "react-router-dom"

// ✅ Import SidebarProvider
import { SidebarProvider } from "@/components/ui/sidebar"

export default function LearnerLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }

  return (
    // ✅ Wrap everything inside SidebarProvider
    <SidebarProvider>
      <div className="h-screen w-screen overflow-hidden flex flex-col bg-gray-50">
        {/* Fixed Navbar */}
        <Navbar onToggleSidebar={toggleSidebar} />

        {/* Main content below navbar */}
        <div className="flex flex-1 pt-16 overflow-hidden">
          {/* Collapsible Sidebar */}
          {sidebarOpen && (
            <aside className="w-80 shrink-0 h-full sticky top-16 transition-all duration-300 ease-in-out bg-white shadow-lg border-r border-gray-200 z-50">
              <LearnerSidebar />
            </aside>
          )}

          {/* Overlay for mobile when sidebar is open */}
          {sidebarOpen && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
              onClick={toggleSidebar}
            />
          )}

          {/* Scrollable Page Content with Footer */}
          <main className="flex-1 h-full overflow-y-auto bg-gray-50 text-gray-800 transition-all duration-300 ease-in-out">
            <div className="px-4 sm:px-6 py-6 min-h-full flex flex-col max-w-7xl mx-auto">
              {/* Page content */}
              <div className="flex-1 mb-8">
                <Outlet />
              </div>

              {/* Footer */}
              <Footer />
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  )
}
