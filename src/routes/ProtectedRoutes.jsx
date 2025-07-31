import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";

export default function ProtectedRoute({ allowedRoles = [] }) {
  const { isAuthenticated, user } = useAuth()
  console.log("ProtectedRoute: user role is", user?.role)


  if (!isAuthenticated) {
    return <Navigate to="" replace />
  }

  if (allowedRoles.length && !allowedRoles.includes(user?.role)) {
    return <Navigate to="/" replace />
  }

  return <Outlet />
  
}