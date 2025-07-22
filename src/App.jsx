import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/common/AppSidebar.jsx";

// 👇 Import your landing page
import Home from "./pages/learner/Home.jsx";

const App = () => {
  return (
    <Router>
      <SidebarProvider>
        <div className="flex min-h-screen">
          <AppSidebar />
          <div className="flex-1 flex flex-col">
            <SidebarTrigger className="m-4" />
            <main className="flex-grow p-8 text-xl">
              <Routes>
                <Route path="/" element={<Home />} />
                {/* You can add more test routes below if needed */}
              </Routes>
            </main>
          </div>
        </div>
      </SidebarProvider>
    </Router>
  );
};

export default App;
