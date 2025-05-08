import { Navigate, Outlet } from 'react-router-dom';
import { useAuthStore } from '../features/auth/useAuthStore';

export default function ProtectedRoute() {
  const token = useAuthStore((state) => state.token);

  return token ? <Outlet /> : <Navigate to="/login" replace />;
}
