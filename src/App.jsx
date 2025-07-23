import './App.css';

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Common Layout Components
import Navbar from "./components/common/Navbar.jsx";
import Footer from "./components/common/Footer.jsx";
import AppSidebar from "./components/common/AppSidebar.jsx";

// Routes
import LearnerRoutes from "./routes/LearnerRoutes.jsx";
// import AdminRoutes from "./routes/AdminRoutes.jsx";
// import ProtectedRoute from "./routes/ContributorRoutes.jsx";

// ✅ Import SidebarProvider
import { SidebarProvider } from "@/components/ui/sidebar";

const App = () => {
  return (
    <SidebarProvider>
      <Router>
        <div className="flex flex-col min-h-screen bg-gray-50 text-gray-800">
          <Navbar />
          <AppSidebar />

          <main className="flex-grow container mx-auto px-4 py-6">
            <Routes>
              {/* User-facing pages */}
              <Route path="/*" element={<LearnerRoutes />} />

              {/* Admin dashboard pages */}
              {/* <Route
                path="/admin/*"
                element={
                  <ProtectedRoute role="admin">
                    <AdminRoutes />
                  </ProtectedRoute>
                }
              /> */}
            </Routes>
          </main>

          <Footer />
        </div>
      </Router>
    </SidebarProvider>
  );
};

export default App;
