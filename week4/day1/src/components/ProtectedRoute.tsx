import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./auth-provider.tsx";

export function ProtectedRoute() {
  const { token } = useAuth();

  if (!token) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
}