import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/lib/supabase';
import AgeVerification from '@/components/onboarding/AgeVerification';
import LegalConsent from '@/components/onboarding/LegalConsent';
import MiniSurvey, { SurveyData } from '@/components/onboarding/MiniSurvey';
import { Loader2 } from 'lucide-react';

type OnboardingStep = 'age' | 'legal' | 'survey' | 'saving';

const Onboarding = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState<OnboardingStep>('age');
  const [onboardingData, setOnboardingData] = useState({
    birthDate: '',
    age: 0,
    legalAccepted: false,
    surveyData: null as SurveyData | null,
  });

  const handleAgeComplete = (birthDate: string, age: number) => {
    setOnboardingData((prev) => ({ ...prev, birthDate, age }));
    setCurrentStep('legal');
  };

  const handleLegalComplete = () => {
    setOnboardingData((prev) => ({ ...prev, legalAccepted: true }));
    setCurrentStep('survey');
  };

  const handleSurveyComplete = async (surveyData: SurveyData) => {
    setOnboardingData((prev) => ({ ...prev, surveyData }));
    setCurrentStep('saving');

    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        throw new Error('No user found');
      }

      const db: any = supabase;

      const { error: profileError } = await db
        .from('profiles')
        .update({
          date_of_birth: onboardingData.birthDate,
          onboarding_completed: true,
          privacy_policy_accepted_at: new Date().toISOString(),
          terms_accepted_at: new Date().toISOString(),
          health_disclaimer_accepted_at: new Date().toISOString(),
        })
        .eq('id', user.id);

      if (profileError) throw profileError;

      const { error: surveyError } = await db
        .from('survey_responses')
        .insert([{
          user_id: user.id,
          gender: surveyData.gender,
          previous_experience: surveyData.previousExperience,
          expectations: surveyData.expectations,
          focus_area: surveyData.focusArea,
          ai_usage_frequency: surveyData.aiUsageFrequency,
        }]);

      if (surveyError) throw surveyError;

      navigate('/dashboard');
    } catch (error) {
      console.error('Error saving onboarding data:', error);
      alert('Failed to save data. Please try again.');
      setCurrentStep('survey');
    }
  };

  if (currentStep === 'saving') {
    return (
      <div className="min-h-screen bg-gradient-calm flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-12 h-12 animate-spin text-purple-600 mx-auto mb-4" />
          <p className="text-lg font-medium">Setting up your account...</p>
          <p className="text-sm text-muted-foreground mt-2">Please wait</p>
        </div>
      </div>
    );
  };

  return (
    <>
      {currentStep === 'age' && <AgeVerification onComplete={handleAgeComplete} />}
      {currentStep === 'legal' && <LegalConsent onComplete={handleLegalComplete} />}
      {currentStep === 'survey' && <MiniSurvey onComplete={handleSurveyComplete} />}
    </>
  );
};

export default Onboarding;