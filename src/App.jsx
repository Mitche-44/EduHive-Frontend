

// import Footer from "@/components/common/Footer";
// import LearnerLeaderboardPage from "@/pages/learner/Leaderboard.jsx";
// import Navbar from "@/components/common/Navbar";




import "./App.css";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

// Routes
import LearnerRoutes from "./routes/LearnerRoutes.jsx";
import { SidebarProvider } from "@/components/ui/sidebar";


const App = () => {
  return (
    // <div className="flex flex-col min-h-screen">
    //   {/* Navbar */}
    //   <Navbar />

    //   {/* Footer */}
    //   <Footer />

    //   {/* leaderboard page */}
    //   <LearnerLeaderboardPage className="flex-grow bg-[#F9FAFB]" />
    // </div>
    <SidebarProvider>
      <Router>
        <LearnerRoutes />
      </Router>
    </SidebarProvider>
  );
};

export default App;






