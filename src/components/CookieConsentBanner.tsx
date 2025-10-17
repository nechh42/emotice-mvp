import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const CookieConsentBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    localStorage.setItem('cookie-consent-date', new Date().toISOString());
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50 p-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="bg-purple-100 p-2 rounded-full">
              <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <div>
              <p className="text-sm text-gray-700">
                We use cookies to enhance your experience.{' '}
                <a href="/legal/cookie" className="text-purple-600 hover:underline font-medium">
                  Learn more
                </a>
              </p>
            </div>
          </div>
          <Button
            onClick={acceptCookies}
            className="bg-purple-600 hover:bg-purple-700 whitespace-nowrap"
          >
            Accept Cookies
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsentBanner;
