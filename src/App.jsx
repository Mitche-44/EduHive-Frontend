// src/App.jsx
import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/common/AppSidebar";
import SidebarToggle from "@/components/common/SidebarToggle";

// Pages
import Home from "./pages/learner/Home.jsx";
import Dashboard from "./pages/learner/Dashboard.jsx";
import Payment from "./pages/learner/Payment.jsx";

// Layouts
const MinimalLayout = ({ children }) => (
  <div className="min-h-screen">{children}</div>
);

const DashboardLayout = ({ children }) => (
  <div className="flex min-h-screen bg-gray-50">
    {/* Mobile sidebar toggle - positioned fixed */}
    <SidebarToggle />
    
    {/* Sidebar */}
    <AppSidebar />
    
    {/* Main content area */}
    <div className="flex-1 min-w-0">
      {children}
    </div>
  </div>
);

const App = () => {
  return (
    <SidebarProvider>
      <Toaster richColors position="top-right" />
      <Router>
        <Routes>
          <Route path="/" element={<MinimalLayout><Home /></MinimalLayout>} />
          <Route path="/dashboard" element={<DashboardLayout><Dashboard /></DashboardLayout>} />
          <Route path="/payment" element={<DashboardLayout><Payment /></DashboardLayout>} />
        </Routes>
      </Router>
    </SidebarProvider>
  );
};

export default App;