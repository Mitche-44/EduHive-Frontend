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

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;