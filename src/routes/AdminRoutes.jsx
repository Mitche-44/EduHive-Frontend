import { Routes, Route } from "react-router-dom";
import AdminPanel from "../components/admin/AdminPanel";
import AdminContributorsPage from "../pages/admin/Contributors";
import AdminLearnersPage from "../pages/admin/Learners";
import AdminModulesPage from "../pages/admin/Modules";
import AdminPathsPage from "../pages/admin/Paths";
import AdminSubscriptionPage from "../pages/admin/AdminSubscriptionPage";
import SubscriptionDashboard from "../pages/admin/SubscriptionDashboard";




const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AdminPanel />} />
      

      <Route path="/contributors" element={<AdminContributorsPage />} />
      <Route path="/learners" element={<AdminLearnersPage />} />
      <Route path="/modules" element={<AdminModulesPage />} />
      <Route path="/paths" element={<AdminPathsPage />} />
      <Route path="/subscriptions" element={<AdminSubscriptionPage />} />
      <Route path="/subscription" element={<SubscriptionDashboard />} />
      
      {/* Add more admin routes as needed */}
      {/* <Route path="/settings" element={<AdminSettingsPage />} />
      <Route path="/reports" element={<AdminReportsPage />} /> */}

      
      {/* Add more admin routes as needed */}

    </Routes>
  );
};

export default AdminRoutes;