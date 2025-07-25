import { Outlet } from "react-router-dom";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";


{/* <Route path="/pricing" element={<Pricing />} />
<Route path="/testimonials" element={<Testimonials />} /> */}


export default function PublicLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Sticky Navbar */}
      <header className="sticky top-0 z-50 bg-white border-b">
        <Navbar />
      </header>

      {/* Full-width main content that scrolls together with footer */}
      <main className="flex-1 w-full px-4 py-8">
        <Outlet />
      </main>

      {/* Footer (scrolls with content) */}
      <Footer />
    </div>
  );
}
