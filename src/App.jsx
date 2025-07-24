import "./App.css";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

<<<<<<< HEAD

import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//import Home from "./pages/learner/Home";



import Path from './pages/learner/Path';




// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


// // Routes
// import LearnerRoutes from "./routes/LearnerRoutes.jsx";
// import AdminRoutes from "./routes/AdminRoutes.jsx";
// import ContributorRoutes from "./routes/ContributorRoutes.jsx";
// // import ProtectedRoute from "./routes/ProtectedRoute.jsx";

// // Common Layout Components
// import Navbar from "./components/common/Navbar.jsx";
// import Footer from "./components/common/Footer.jsx";

// // Routes
// import ClientRoutes from "./routes/ClientRoutes.jsx";
// import AdminRoutes from "./routes/AdminRoutes.jsx";

//import Badges from './pages/learner/Badges';
//import AdminSidebar from './components/admin/AdminPanel';


//import ContributorSidebar from './components/contributor/contributor-sidebar';

//import AdminSidebar from './components/admin/AdminPanel';


//import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/common/AppSidebar.jsx";


// 👇 Import your landing page
import Home from "./pages/learner/Home.jsx";
=======
>>>>>>> 336e2ad5176aef343f3d57742d7c6bac1c2e2657
// Routes
import LearnerRoutes from "./routes/LearnerRoutes.jsx";
import { SidebarProvider } from "@/components/ui/sidebar";


const App = () => {
  return (
<<<<<<< HEAD
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Footer */}
      <Footer />

      {/* leaderboard page */}
      <LearnerLeaderboardPage className="flex-grow bg-[#F9FAFB]" />
    </div>
=======
    <SidebarProvider>

      <Router>
        <LearnerRoutes />

      </Router>
    </SidebarProvider>
>>>>>>> 336e2ad5176aef343f3d57742d7c6bac1c2e2657
  );
};

export default App;






