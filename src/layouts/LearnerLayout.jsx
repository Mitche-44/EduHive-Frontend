import Navbar from "@/components/Nav/learnerNav"
import Footer from "@/components/common/Footer"
import AppSidebar from "@/components/common/AppSidebar"
import { Outlet } from "react-router-dom"
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"

export default function LearnerLayout() {
  return (
    <div className="min-h-screen w-full bg-gray-50">
      {/* Fixed Navbar at the top */}
      <Navbar className="sticky top-0 shrink-0 border-b border-gray-200 bg-white shadow-sm z-50" />
      
      {/* Content area below navbar - includes sidebar and main content */}
      <div className="flex">
        <SidebarProvider defaultOpen={true}>
          <div className="flex w-full">
            {/* Sidebar - now under navbar */}
            <AppSidebar />
            
            {/* Main Content */}
            <SidebarInset className="flex-1">
              {/* Scrollable Page Content */}
              <main className="p-4 sm:p-6 max-w-7xl mx-auto w-full">
                <div className="mb-8">
                  <Outlet />
                </div>
                <Footer />
              </main>
            </SidebarInset>
          </div>
        </SidebarProvider>
      </div>
    </div>
  )
}