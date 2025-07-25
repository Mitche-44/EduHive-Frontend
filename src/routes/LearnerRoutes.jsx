import { Routes, Route } from "react-router-dom";

// Layouts
import LearnerLayout from "@/layouts/LearnerLayout";
import PublicLayout from "@/layouts/PublicLayout";


// Pages
import LearnerBadgesPage from "../pages/learner/Badges";
import LearnerCommunityPage from "../pages/learner/Community";
import LearnerDashboardPage from "../pages/learner/Dashboard";
import LearnerHomePage from "../pages/learner/Home";
import LearnerLeaderboardPage from "../pages/learner/Leaderboard";
import LearnerPaymentPage from "../pages/learner/Payment";

import LearnerAuthPage from "../pages/learner/Auth";
import LearnerPathPage from "../pages/learner/Path";
import LearnerProfilePage from "../pages/learner/Profile";
import LearnerQuizesPage from "../pages/learner/Quizes";
import LearnerSettingsPage from "../pages/learner/Settings";

import LearnerPlansPage from "../pages/learner/Plans";
import LearnerTestimonialsPage from "../pages/learner/Testimonials";

import Team from "../components/admin/Team";
import PrivacyPolicyPage from "../components/admin/PrivacyPolicy";
import TermsPage from "../components/admin/TermsAndConditions";
import FAQsPage from "../components/admin/FAQs";


const LearnerRoutes = () => {
  return (
    <Routes>
      {/* Public layout for home + auth */}
      <Route element={<PublicLayout />}>
        
        <Route path="/auth" element={<LearnerAuthPage />} />
        <Route path="/team" element={<Team />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms-and-conditions" element={<TermsPage />} /> 
        <Route path="/faqs" element={<FAQsPage />} />

        {/* This should be last to avoid greedy matching */} 
        <Route path="/*" element={<LearnerHomePage />} />
      </Route>

      {/* Private layout with sidebar for learner pages */}
      <Route element={<LearnerLayout />}>
        <Route path="/dashboard" element={<LearnerDashboardPage />} />
        <Route path="/badges" element={<LearnerBadgesPage />} />
        <Route path="/community" element={<LearnerCommunityPage />} />
        <Route path="/payment" element={<LearnerPaymentPage />} />
        <Route path="/leaderboard" element={<LearnerLeaderboardPage />} />
        <Route path="/path" element={<LearnerPathPage />} />
         <Route path="/profile" element={<LearnerProfilePage />} />
        <Route path="/quizes" element={<LearnerQuizesPage />} />
        <Route path="/settings" element={<LearnerSettingsPage />} />

        <Route path="/plans" element={<LearnerPlansPage />} />
        <Route path="/testimonials" element={<LearnerTestimonialsPage />} />
      </Route>
    </Routes>
  );
};

export default LearnerRoutes;
