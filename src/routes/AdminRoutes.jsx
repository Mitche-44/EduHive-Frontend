import { Routes, Route } from "react-router-dom";

// Layout and guard
import AdminLayout from "@/layouts/AdminLayout";
import ProtectedRoute from "@/routes/ProtectedRoutes";

// Pages
import AdminPanel from "../components/admin/AdminPanel";
import AdminContributorsPage from "../pages/admin/Contributors";
import AdminLearnersPage from "../pages/admin/Learners";
import AdminModulesPage from "../pages/admin/Modules";
import AdminPathsPage from "../pages/admin/Paths";

const AdminRoutes = () => {
  return (
    <Routes>
      <Route
        element={
          <ProtectedRoute role="admin">
            <AdminLayout />
          </ProtectedRoute>
        }
      >
        <Route path="/" element={<AdminPanel />} />
        <Route path="/contributors" element={<AdminContributorsPage />} />
        <Route path="/learners" element={<AdminLearnersPage />} />
        <Route path="/modules" element={<AdminModulesPage />} />
        <Route path="/paths" element={<AdminPathsPage />} />
      </Route>
    </Routes>
  );
};

export default AdminRoutes;
