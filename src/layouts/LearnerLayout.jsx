import Navbar from "@/components/common/Navbar"
import Footer from "@/components/common/Footer"
import AppSidebar from "@/components/common/AppSidebar"
import { Outlet } from "react-router-dom"
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"

export default function LearnerLayout() {
  return (
    <SidebarProvider defaultOpen={true}>
      <div className="flex h-screen w-full bg-gray-50">
        {/* Sidebar */}
        <AppSidebar />
        
        {/* Main Content */}
        <SidebarInset className="flex flex-col flex-1 overflow-hidden">
          {/* Fixed Navbar */}
          <Navbar className="shrink-0 border-b border-gray-200 bg-white shadow-sm z-10" />
          
          {/* Scrollable Page Content */}
          <div className="flex-1 overflow-y-auto">
            <main className="p-4 sm:p-6 max-w-7xl mx-auto w-full">
              {/* Page content */}
              <div className="mb-8">
                <Outlet />
              </div>
              {/* Footer */}
              <Footer />
            </main>
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}