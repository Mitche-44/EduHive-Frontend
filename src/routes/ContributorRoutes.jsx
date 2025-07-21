import { Routes, Route } from "react-router-dom";

import ContributorAddModulePage from "../pages/contributor/AddModule";
import ContributorAddPathPage from "../pages/contributor/AddPath";
import ContributorChallengesPage from "../pages/contributor/Challenges";
import ContributorModifyPathsPage from "../pages/contributor/ModifyPaths";

const ContributorRoutes = () => {
  return (
    <Routes>
      <Route path="/add-module" element={<ContributorAddModulePage />} />
      <Route path="/add-path" element={<ContributorAddPathPage />} />
      <Route path="/challenges" element={<ContributorChallengesPage />} />
      <Route path="/modify-paths" element={<ContributorModifyPathsPage />} />
    </Routes>
  );
};

export default ContributorRoutes;
