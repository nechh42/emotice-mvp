import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Shield, ExternalLink, AlertTriangle } from 'lucide-react';

interface LegalConsentProps {
  onComplete: () => void;
}

const LegalConsent = ({ onComplete }: LegalConsentProps) => {
  const { t } = useTranslation();
  const [consents, setConsents] = useState({
    terms: false,
    privacy: false,
    medical: false
  });
  const [error, setError] = useState('');

  const allAccepted = consents.terms && consents.privacy && consents.medical;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!allAccepted) {
      setError(t('onboarding.consentError') || 'You must accept all terms to continue');
      return;
    }

    onComplete();
  };

  const toggleAll = () => {
    const newValue = !allAccepted;
    setConsents({
      terms: newValue,
      privacy: newValue,
      medical: newValue
    });
  };

  return (
    <div className="min-h-screen bg-gradient-calm flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl p-8 shadow-glow animate-scale-in">
        <div className="text-center mb-6">
          <div className="w-16 h-16 rounded-full bg-gradient-primary mx-auto mb-4 flex items-center justify-center">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-2xl font-bold mb-2">{t('onboarding.consent')}</h1>
          <p className="text-sm text-muted-foreground">
            {t('onboarding.consentText')}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Critical Warning */}
          <div className="bg-red-50 border-2 border-red-500 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <div className="space-y-2">
                <h3 className="font-bold text-red-900">{t('onboarding.criticalWarning') || 'CRITICAL WARNING'}</h3>
                <p className="text-sm text-red-800 leading-relaxed">
                  {t('onboarding.criticalWarningText') || 'EMOTICE is NOT a medical device. In emergencies, call 112 or 911.'}
                </p>
              </div>
            </div>
          </div>

          {/* Consent Checkboxes */}
          <div className="space-y-4">
            {/* Accept All */}
            <div className="bg-purple-50 border-2 border-purple-500 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="accept-all"
                  checked={allAccepted}
                  onChange={toggleAll}
                  className="mt-1 h-5 w-5"
                />
                <label htmlFor="accept-all" className="font-bold cursor-pointer">
                  {t('onboarding.acceptAll') || 'Accept All'}
                </label>
              </div>
            </div>

            {/* Terms of Service */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="consent-terms"
                  checked={consents.terms}
                  onChange={(e) => setConsents({ ...consents, terms: e.target.checked })}
                  className="mt-1 h-4 w-4"
                />
                <label htmlFor="consent-terms" className="text-sm cursor-pointer flex-1">
                  {t('onboarding.iAcceptTerms')}
                  <Link 
                    to="/legal/terms" 
                    target="_blank"
                    className="text-purple-600 hover:underline ml-1 inline-flex items-center gap-1"
                  >
                    ({t('common.readHere') || 'Read here'})
                    <ExternalLink className="w-3 h-3" />
                  </Link>
                </label>
              </div>
            </div>

            {/* Privacy Policy */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="consent-privacy"
                  checked={consents.privacy}
                  onChange={(e) => setConsents({ ...consents, privacy: e.target.checked })}
                  className="mt-1 h-4 w-4"
                />
                <label htmlFor="consent-privacy" className="text-sm cursor-pointer flex-1">
                  {t('onboarding.iAcceptPrivacy')}
                  <Link 
                    to="/legal/privacy" 
                    target="_blank"
                    className="text-purple-600 hover:underline ml-1 inline-flex items-center gap-1"
                  >
                    ({t('common.readHere') || 'Read here'})
                    <ExternalLink className="w-3 h-3" />
                  </Link>
                </label>
              </div>
            </div>

            {/* Medical Disclaimer */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="consent-medical"
                  checked={consents.medical}
                  onChange={(e) => setConsents({ ...consents, medical: e.target.checked })}
                  className="mt-1 h-4 w-4"
                />
                <label htmlFor="consent-medical" className="text-sm cursor-pointer flex-1">
                  {t('onboarding.iUnderstandDisclaimer')}
                  <Link 
                    to="/legal/medical" 
                    target="_blank"
                    className="text-purple-600 hover:underline ml-1 inline-flex items-center gap-1"
                  >
                    ({t('common.readHere') || 'Read here'})
                    <ExternalLink className="w-3 h-3" />
                  </Link>
                </label>
              </div>
            </div>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-3">
              <p className="text-sm text-red-800">{error}</p>
            </div>
          )}

          <Button 
            type="submit" 
            className="w-full bg-gradient-primary" 
            size="lg"
            disabled={!allAccepted}
          >
            {t('onboarding.acceptAndContinue') || 'Accept & Continue'}
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default LegalConsent;
