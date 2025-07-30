import { Routes, Route } from "react-router-dom";

// Layout and guard
import AdminLayout from "@/layouts/AdminLayout";
import ProtectedRoute from "@/routes/ProtectedRoutes";

// Pages
import AdminContributorsPage from "../pages/admin/Contributors";
import AdminLearnersPage from "../pages/admin/Learners";
import AdminModulesPage from "../pages/admin/Modules";
import AdminPathsPage from "../pages/admin/Paths";
import AdminSubscriptionPage from "../pages/admin/AdminSubscriptionPage";
import SubscriptionDashboard from "../pages/admin/SubscriptionDashboard";




const AdminRoutes = () => {
  return (
    <Routes>

      {/* Protected routes under /admin */}
      <Route element={<ProtectedRoute role="admin" />}>
        <Route element={<AdminLayout />}>
          <Route path="contributors" element={<AdminContributorsPage />} />
          <Route path="learners" element={<AdminLearnersPage />} />
          <Route path="modules" element={<AdminModulesPage />} />
          <Route path="paths" element={<AdminPathsPage />} />
          <Route path="*" element={<div>Not Found inside /admin</div>} />
          <Route path="subscriptions" element={<AdminSubscriptionPage />} />
          <Route path="subscription" element={<SubscriptionDashboard />} />                         
        </Route>
      </Route>

    </Routes>
  );
};

export default AdminRoutes;