import { useMemo } from 'react';
import { Navigate, Outlet } from 'react-router';

const ProtectedRoute = () => {
    
    const { token, role } = useMemo(() => {
        const userData = JSON.parse(localStorage.getItem('userGoTrip') || '{}');
        return {
          token: userData?.token,
          role: userData?.user?.role,
        };
      }, []);
    
      if (!token) return <Navigate to="/login" replace />;
      if (token && role !== 'ADMIN') return <Navigate to="/" replace />;
      
      return <Outlet />;
};

export default ProtectedRoute;
