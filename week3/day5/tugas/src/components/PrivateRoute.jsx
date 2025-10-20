import { Navigate, Outlet, useLocation } from "react-router-dom";

function PrivateRoute() {
  const location = useLocation();
  const isAuthenticated = localStorage.getItem("token");

  if (!isAuthenticated) {
    alert("Anda harus login terlebih dahulu!");
    return <Navigate to="/" replace state={{ from: location }} />;
  }

  return <Outlet />;
}

export default PrivateRoute;
