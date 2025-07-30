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
import Team from "../pages/learner/Team";
import PrivacyPolicyPage from "../pages/learner/PrivacyPolicy";
import TermsPage from "../pages/learner/TermsAndConditions";
import FAQsPage from "../pages/learner/FAQs";

// Protected route helper
import ProtectedRoute from "@/routes/ProtectedRoutes";




const LearnerRoutes = () => {
  return (
    <Routes>
      {/* Public routes under /learner */}
      <Route element={<PublicLayout />}>

        <Route path="auth" element={<LearnerAuthPage />} />
        <Route index element={<LearnerHomePage />} />
      </Route>

      {/* Protected routes under /learner */}
      <Route element={<ProtectedRoute role="learner" />}>
        <Route element={<LearnerLayout />}>
          <Route path="dashboard" element={<LearnerDashboardPage />} />
          <Route path="badges" element={<LearnerBadgesPage />} />
          <Route path="community" element={<LearnerCommunityPage />} />
          <Route path="payment" element={<LearnerPaymentPage />} />
          <Route path="leaderboard" element={<LearnerLeaderboardPage />} />
          <Route path="path" element={<LearnerPathPage />} />
          <Route path="profile" element={<LearnerProfilePage />} />
          <Route path="quizes" element={<LearnerQuizesPage />} />
          <Route path="settings" element={<LearnerSettingsPage />} />
          <Route path="plans" element={<LearnerPlansPage />} />
          <Route path="testimonials" element={<LearnerTestimonialsPage />} />
          <Route path="team" element={<Team />} />
          <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="terms-and-conditions" element={<TermsPage />} /> 
          <Route path="faqs" element={<FAQsPage />} />
          <Route path="*" element={<div>Not Found inside /learner</div>} />
        </Route>

        

     
      </Route>
    </Routes>
  );
};
export default LearnerRoutes;

