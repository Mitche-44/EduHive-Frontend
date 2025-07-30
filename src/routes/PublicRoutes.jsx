import { Route, Routes } from "react-router-dom"
import PublicLayout from "@/layouts/PublicLayout"
import Home from "@/pages/learner/Home"
import Auth from "@/pages/learner/Auth"

export default function PublicRoutes() {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route index element={<Home />} />
        <Route path="/auth" element={<Auth />} />
      </Route>
    </Routes>
  )
}