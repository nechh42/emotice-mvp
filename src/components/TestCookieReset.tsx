// components/TestCookieReset.tsx
import { Button } from "@/components/ui/button";
import { RefreshCw, Eye } from "lucide-react";

export const TestCookieReset = () => {
  const clearConsent = () => {
    localStorage.removeItem('cookie-consent');
    localStorage.removeItem('cookie-consent-date');
    window.location.reload();
  };

  const showCurrentConsent = () => {
    const consent = localStorage.getItem('cookie-consent');
    const date = localStorage.getItem('cookie-consent-date');
    alert(`🧪 Cookie Consent Test\n\nCurrent Consent: ${consent || 'none'}\nDate: ${date || 'none'}`);
  };

  return (
    <div className="fixed top-20 right-4 bg-white p-4 rounded-lg shadow-lg border z-50">
      <h3 className="font-bold mb-2 text-sm">🧪 Cookie Test</h3>
      <div className="space-y-2">
        <Button 
          onClick={clearConsent} 
          size="sm" 
          variant="outline"
          className="w-full flex items-center gap-2"
        >
          <RefreshCw className="w-3 h-3" />
          Clear Consent
        </Button>
        <Button 
          onClick={showCurrentConsent} 
          size="sm" 
          variant="outline"
          className="w-full flex items-center gap-2"
        >
          <Eye className="w-3 h-3" />
          Show Consent
        </Button>
      </div>
    </div>
  );
};