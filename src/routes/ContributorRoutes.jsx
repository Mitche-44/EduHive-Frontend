import { Routes, Route } from "react-router-dom";

// Layouts
import ContributorLayout from "@/layouts/ContributorLayout";

// Pages
import ContributorAddModulePage from "../pages/contributor/AddModule";
import ContributorAddPathPage from "../pages/contributor/AddPath";
import ContributorChallengesPage from "../pages/contributor/Challenges";
import ContributorModifyLearnersPage from "../pages/contributor/Learner";

// ProtectedRoute component
import ProtectedRoute from "@/routes/ProtectedRoutes";

const ContributorRoutes = () => {
  return (
    <Routes>
      {/* Protected routes under /contributor */}
      <Route element={<ProtectedRoute role="contributor" />}>
        <Route element={<ContributorLayout />}>
          <Route path="addmodule" element={<ContributorAddModulePage />} />
          <Route path="addpath" element={<ContributorAddPathPage />} />
          <Route path="challenges" element={<ContributorChallengesPage />} />
          <Route path="learners" element={<ContributorModifyLearnersPage />} />
          <Route path="*" element={<div>Not Found inside /contributor</div>} />
        </Route>
      </Route>
    </Routes>
  );
};

export default ContributorRoutes;
