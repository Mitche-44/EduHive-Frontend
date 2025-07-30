import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import React from "react";
import ProtectedRoute from "@/routes/ProtectedRoutes"

import PublicRoutes from "@/routes/PublicRoutes"
import LearnerRoutes from "@/routes/LearnerRoutes"
import ContributorRoutes from "@/routes/ContributorRoutes"
import AdminRoutes from "@/routes/AdminRoutes"



export default function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/*" element={<PublicRoutes />} />

        {/* Learner Routes */}
        <Route element={<ProtectedRoute allowedRoles={["learner"]} />}>
          <Route path="/learner/*" element={<LearnerRoutes />} />
        </Route>

        {/* Contributor Routes */}
        <Route element={<ProtectedRoute allowedRoles={["contributor"]} />}>
          <Route path="/contributor/*" element={<ContributorRoutes />} />
        </Route>

        {/* Admin Routes */}
        <Route element={<ProtectedRoute allowedRoles={["admin"]} />}>
          <Route path="/admin/*" element={<AdminRoutes />} />
        </Route>
      </Routes>
    </Router>
  )
}
