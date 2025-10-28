import { useAuth } from '@/hooks/useAuth';
import { Navigate, Outlet } from 'react-router-dom';

export const AdminRoute = () => {
  const { role } = useAuth();

  if (role !== 'admin') {
    return <Navigate to="/products" replace />;
  }

  return <Outlet />;
};