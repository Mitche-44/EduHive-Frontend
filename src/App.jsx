import "./App.css";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

// Routes
import LearnerRoutes from "./routes/LearnerRoutes.jsx";
import { SidebarProvider } from "@/components/ui/sidebar";


const App = () => {
  return (
    <SidebarProvider>

      <Router>
        <LearnerRoutes />

      </Router>
    </SidebarProvider>
  );
};

export default App;






