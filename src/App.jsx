import './App.css';
import Home from "./pages/learner/Home";
import React from "react";
import ContributorSidebar from './components/contributor/contributor-sidebar';
//import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Common Layout Components
//import Navbar from "./components/common/Navbar.jsx";
//import Footer from "./components/common/Footer.jsx";

// Routes
//import ContributorRoutes from "./routes/ContributorRoutes.jsx";
// import ProtectedRoute from "./routes/ProtectedRoute.jsx";

const App = () => {
  return (
   
   //<AdminSidebar />
   <ContributorSidebar />
  );
};

export default App;