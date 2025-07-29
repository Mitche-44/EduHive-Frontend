// import PublicNav from "@/components/nav/PublicNav"
import Navbar from "@/components/common/Navbar"
import Footer from "@/components/common/Footer"
import { Outlet } from "react-router-dom"

export default function PublicLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      {/* Sticky Navbar */}
      <header className="sticky top-0 z-50 bg-white shadow">
        <Navbar />
      </header>

      {/* Main content scrolls with footer */}
      <main className="flex-1 w-full">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
