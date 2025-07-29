import { Routes, Route } from "react-router-dom";

// Layouts
import ContributorLayout from "@/layouts/ContributorLayout";
import PublicLayout from "@/layouts/PublicLayout";

// Pages
import ContributorAddModulePage from "../pages/contributor/AddModule";
import ContributorAddPathPage from "../pages/contributor/AddPath";
import ContributorChallengesPage from "../pages/contributor/Challenges";
import ContributorModifyPathsPage from "../pages/contributor/ModifyPaths";

// ProtectedRoute component
import ProtectedRoute from "@/routes/ProtectedRoutes";

const ContributorRoutes = () => {
  return (
    <Routes>
      {/* Public layout for any public contributor routes (if needed) */}
      {/* Example: */}
      {/* <Route element={<PublicLayout />}> */}
      {/*   <Route path="/some-public" element={<SomePublicContributorPage />} /> */}
      {/* </Route> */}

      {/* Protected contributor layout */}
      <Route element={<ProtectedRoute role="contributor"><ContributorLayout /></ProtectedRoute>}>
        <Route path="/add-module" element={<ContributorAddModulePage />} />
        <Route path="/add-path" element={<ContributorAddPathPage />} />
        <Route path="/challenges" element={<ContributorChallengesPage />} />
        <Route path="/modify-paths" element={<ContributorModifyPathsPage />} />
      </Route>
    </Routes>
  );
};

export default ContributorRoutes;
