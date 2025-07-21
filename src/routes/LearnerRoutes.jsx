import { Routes, Route } from "react-router-dom";

import LearnerBadgesPage from "../pages/learner/Badges";
import LearnerChatPage from "../pages/learner/Chat";
import LearnerCommunityPage from "../pages/learner/Community";
import LearnerDashboardPage from "../pages/learner/Dashboard";
import LearnerHomePage from "../pages/learner/Home";
import LearnerLeaderboardPage from "../pages/learner/Leaderboard";
import LearnerLoginPage from "../pages/learner/Login";
import LearnerModulePage from "../pages/learner/Module";
import LearnerPathPage from "../pages/learner/Path";
import LearnerPaymentPage from "../pages/learner/Payment";
import LearnerProfilePage from "../pages/learner/Profile";
import LearnerQuestionsPage from "../pages/learner/Questions";
import LearnerQuizesPage from "../pages/learner/Quizes";
import LearnerRegisterPage from "../pages/learner/Register";
import LearnerSettingsPage from "../pages/learner/Settings";

const LearnerRoutes = () => {
  return (
    <Routes>
      <Route path="/badges" element={<LearnerBadgesPage />} />
      <Route path="/chat" element={<LearnerChatPage />} />
      <Route path="/community" element={<LearnerCommunityPage />} />
      <Route path="/dashboard" element={<LearnerDashboardPage />} />
      <Route path="/home" element={<LearnerHomePage />} />
      <Route path="/leaderboard" element={<LearnerLeaderboardPage />} />
      <Route path="/login" element={<LearnerLoginPage />} />
      <Route path="/module" element={<LearnerModulePage />} />
      <Route path="/path" element={<LearnerPathPage />} />
      <Route path="/payment" element={<LearnerPaymentPage />} />
      <Route path="/profile" element={<LearnerProfilePage />} />
      <Route path="/questions" element={<LearnerQuestionsPage />} />
      <Route path="/quizes" element={<LearnerQuizesPage />} />
      <Route path="/register" element={<LearnerRegisterPage />} />
      <Route path="/settings" element={<LearnerSettingsPage />} />
    </Routes>
  );
};

export default LearnerRoutes;
