import { useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Loader2 } from 'lucide-react';

/**
 * ProtectedRoute Component
 * 
 * Bu component authentication gerektiren route'ları korur.
 * - User yoksa: /auth sayfasına yönlendirir (return_url ile)
 * - Loading: Spinner gösterir
 * - User varsa: İçeriği gösterir
 */

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  // Loading durumunda spinner göster
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center space-y-4">
          <Loader2 className="w-12 h-12 animate-spin text-primary mx-auto" />
          <p className="text-muted-foreground animate-pulse">Loading...</p>
        </div>
      </div>
    );
  }

  // User yoksa auth sayfasına yönlendir
  // location.pathname'i state olarak gönderiyoruz ki login sonrası geri dönsün
  if (!user) {
    return <Navigate to="/auth" state={{ from: location.pathname }} replace />;
  }

  // User varsa içeriği göster
  return <>{children}</>;
};

export default ProtectedRoute;