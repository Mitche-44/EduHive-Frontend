import "./App.css";

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
// import { AppSidebar } from "@/components/common/AppSidebar.jsx";
import AppSidebar from "@/components/common/AppSidebar";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import LearnerLeaderboardPage from "../pages/learner/Leaderboard.jsx";
import LearnerHomePage from "./pages/learner/Home.jsx";
import LearnerPathPage from "./pages/learner/Path.jsx";
import LearnerBadgesPage from "./pages/learner/Badges.jsx";
import LearnerCoursesPage from "./pages/learner/Courses.jsx";
import LearnerQuizzesPage from "./pages/learner/Quizzes.jsx";
import LearnerProfilePage from "./pages/learner/Profile.jsx";
import LearnerResourcesPage from "./pages/learner/Resources.jsx";
import LearnerTestimonialsPage from "./pages/learner/Testimonials.jsx";
import LearnerTeamPage from "./pages/learner/Team.jsx";
import LearnerPricingPage from "./pages/learner/Pricing.jsx";
import LearnerContactPage from "./pages/learner/Contact.jsx";
import LearnerHome from "./pages/learner/Home.jsx";



// 👇 Import your landing page
import Home from "./pages/learner/Home.jsx";
// Routes
import LearnerRoutes from "./routes/LearnerRoutes.jsx";


const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Footer */}
      <Footer />

      {/* leaderboard page */}
      <LearnerLeaderboardPage className="flex-grow bg-[#F9FAFB]" />
    </div>
  );
};
export default App;






