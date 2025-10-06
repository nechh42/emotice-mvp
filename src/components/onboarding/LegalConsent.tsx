import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Shield, ExternalLink, AlertTriangle } from 'lucide-react';

interface LegalConsentProps {
  onComplete: () => void;
}

const LegalConsent = ({ onComplete }: LegalConsentProps) => {
  const [accepted, setAccepted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!accepted) {
      setError('You must accept the terms to continue');
      return;
    }

    onComplete();
  };

  return (
    <div className="min-h-screen bg-gradient-calm flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl p-8 shadow-glow animate-scale-in">
        <div className="text-center mb-6">
          <div className="w-16 h-16 rounded-full bg-gradient-primary mx-auto mb-4 flex items-center justify-center">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-2xl font-bold mb-2">Legal Consent</h1>
          <p className="text-sm text-muted-foreground">
            Please review and accept our terms to continue
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="bg-red-50 border-2 border-red-500 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <div className="space-y-2">
                <h3 className="font-bold text-red-900">CRITICAL WARNING</h3>
                <p className="text-sm text-red-800 leading-relaxed">
                  EMOTICE is NOT a medical device. In emergencies, call 112 or 911.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="legal-consent"
                checked={accepted}
                onChange={(e) => setAccepted(e.target.checked)}
                className="mt-1 h-4 w-4"
              />
              <label htmlFor="legal-consent" className="text-sm cursor-pointer">
                I accept the Privacy Policy, Terms of Service, and Medical Disclaimer.
              </label>
            </div>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-3">
              <p className="text-sm text-red-800">{error}</p>
            </div>
          )}

          <Button type="submit" className="w-full bg-gradient-primary" size="lg">
            Accept & Continue
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default LegalConsent;