import './App.css';

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//import Home from "./pages/learner/Home";
import React from "react";



import Path from './pages/learner/Path';




// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// // Common Layout Components
// import Navbar from "./components/common/Navbar.jsx";
// import Footer from "./components/common/Footer.jsx";

// // Routes
// import ClientRoutes from "./routes/ClientRoutes.jsx";
// import AdminRoutes from "./routes/AdminRoutes.jsx";
=======
//import Badges from './pages/learner/Badges';
//import AdminSidebar from './components/admin/AdminPanel';


//import ContributorSidebar from './components/contributor/contributor-sidebar';

//import AdminSidebar from './components/admin/AdminPanel';


//import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/common/AppSidebar.jsx";


// 👇 Import your landing page
import Home from "./pages/learner/Home.jsx";
// Routes
//import ContributorRoutes from "./routes/ContributorRoutes.jsx";

// import ProtectedRoute from "./routes/ProtectedRoute.jsx";



function App() {
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

    <Path/>

     

    {/* <Badges /> */}

    
    
   

  );
}

export default App;
