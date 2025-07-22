import './App.css';


import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Common Layout Components
import Navbar from "./components/common/Navbar.jsx";
import Footer from "./components/common/Footer.jsx";

// // Routes
// import LearnerRoutes from "./routes/LearnerRoutes.jsx";
// import AdminRoutes from "./routes/AdminRoutes.jsx";
// import ContributorRoutes from "./routes/ContributorRoutes.jsx";
// // import ProtectedRoute from "./routes/ProtectedRoute.jsx";

// Pages
import LeaderboardPage from "./pages/learner/Leaderboard.jsx";

// Static placeholder data (mimics LeaderboardPage's data for logging)
const staticLeaderboardData = [
  { rank: 1, username: "Alice", points: 1500 },
  { rank: 2, username: "Bob", points: 1200 },
  { rank: 3, username: "Charlie", points: 950 },
  { rank: 4, username: "Diana", points: 800 },
  { rank: 5, username: "Eve", points: 600 },
];

const AppContent = () => {
  // Log static data when on /leaderboard route
  if (window.location.pathname === "/leaderboard") {
    console.log("Leaderboard Data (Static):", staticLeaderboardData);
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1">
        <Routes>
          <Route path="/leaderboard" element={<LeaderboardPage />} />
          {/* Placeholder routes - uncomment and implement as needed */}
          {/* <Route path="/learner/*" element={<LearnerRoutes />} />
          <Route path="/admin/*" element={<AdminRoutes />} />
          <Route path="/contributor/*" element={<ContributorRoutes />} /> */}
        </Routes>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

const App = () => {
  return (
      <AppContent />
  );
};

export default App;