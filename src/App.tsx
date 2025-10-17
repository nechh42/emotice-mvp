import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import Index from "@/index";
import Dashboard from "./pages/Dashboard";
import Auth from "./pages/Auth";
import NotFound from "./pages/NotFound";
import Onboarding from "./pages/Onboarding";
import Terms from "./pages/legal/Terms";
import Privacy from "./pages/legal/Privacy";
import MedicalDisclaimer from "./pages/legal/MedicalDisclaimer";
import CookiePolicy from "./pages/legal/CookiePolicy";
<<<<<<< HEAD
=======
import KVKK from "./pages/legal/KVKK"; // YENİ
>>>>>>> 835e4aa1 (Initial commit: EMOTICE MVP with Auth and KVKK)
import BlogPage from '@/components/blog/BlogPage';
import SimpleCookieBanner from "@/components/CookieConsentBanner";
import ProtectedRoute from "@/components/ProtectedRoute";
import About from "./pages/About";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
        <AuthProvider>
          {/* ANA İÇERİK */}
          <div className="min-h-screen">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route 
                path="/dashboard" 
                element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                } 
              />
              <Route path="/auth" element={<Auth />} />
              <Route 
                path="/onboarding" 
                element={
                  <ProtectedRoute>
                    <Onboarding />
                  </ProtectedRoute>
                } 
              />
              <Route path="/legal/terms" element={<Terms />} />
              <Route path="/legal/privacy" element={<Privacy />} />
              <Route path="/legal/medical" element={<MedicalDisclaimer />} />
              <Route path="/legal/cookie" element={<CookiePolicy />} />
<<<<<<< HEAD
=======
              <Route path="/legal/kvkk" element={<KVKK />} /> {/* YENİ */}
>>>>>>> 835e4aa1 (Initial commit: EMOTICE MVP with Auth and KVKK)
              <Route path="/about" element={<About />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
          
          {/* COOKIE BANNER - EN SON */}
          
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;