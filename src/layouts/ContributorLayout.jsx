import { useState } from "react"
// import ContributorNav from "@/components/nav/ContributorNav"
import Navbar from "@/components/Nav/ContributorNav"
import ContributorSidebar from "@/components/contributor/ContributorSidebar"
import Footer from "@/components/common/Footer"
import { Outlet } from "react-router-dom"

import { SidebarProvider } from "@/components/ui/sidebar"

export default function ContributorLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }

  return (
    <SidebarProvider>
      <div className="h-screen w-screen overflow-hidden flex flex-col bg-gray-50">
      {/* Fixed Navbar */}
      <Navbar onToggleSidebar={toggleSidebar} />

      {/* Main Content */}
      <div className="flex flex-1 pt-16 overflow-hidden">
        {/* Sidebar */}
        {sidebarOpen && (
          <aside className="w-80 shrink-0 h-full sticky top-16 transition-all duration-300 ease-in-out bg-white shadow-lg border-r border-gray-200 z-50">
            <ContributorSidebar />
          </aside>
        )}

        {/* Mobile Overlay */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            onClick={toggleSidebar}
          />
        )}

        {/* Page Content */}
        <main className="flex-1 h-full overflow-y-auto bg-gray-50 text-gray-800 transition-all duration-300 ease-in-out">
          <div className="px-4 sm:px-6 py-6 min-h-full flex flex-col max-w-7xl mx-auto">
            {/* Outlet renders the routed page */}
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
