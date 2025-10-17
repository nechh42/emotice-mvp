[file name]: src/components/onboarding/OnboardingSurvey.tsx
[file content begin]
import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { ClipboardList, ArrowLeft, ArrowRight } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

export interface SurveyData {
  // Section 1: Demografi & Yaş
  birthDate: string;
  gender: string;
  country: string;
  language: string;

  // Section 2: Genel Ruh Hali & Sağlık
  generalMood: string;
  mentalHealthDiagnosis: string;
  currentTreatment: string;

  // Section 3: Günlük Alışkanlıklar
  sleepPattern: string;
  physicalActivity: string;
  substanceUse: string;

  // Section 4: Stres Kaynakları
  mainStressSource: string;
  dailyStressLevel: number;

  // Section 5: Duygu Takibi İhtiyacı
  primaryExpectation: string;
  dailyMoodEntries: string;

  // Section 6: Destek & Öneriler
  notificationPreference: string;
  interests: string[];
}

const OnboardingSurvey = () => {
  const { user, completeOnboarding } = useAuth();
  const navigate = useNavigate();
  
  const [currentSection, setCurrentSection] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const [surveyData, setSurveyData] = useState<SurveyData>({
    // Section 1
    birthDate: '',
    gender: '',
    country: '',
    language: '',

    // Section 2
    generalMood: '',
    mentalHealthDiagnosis: '',
    currentTreatment: '',

    // Section 3
    sleepPattern: '',
    physicalActivity: '',
    substanceUse: '',

    // Section 4
    mainStressSource: '',
    dailyStressLevel: 5,

    // Section 5
    primaryExpectation: '',
    dailyMoodEntries: '',

    // Section 6
    notificationPreference: '',
    interests: [],
  });

  const sections = [
    {
      title: 'Demografi & Yaş',
      description: 'Help us get to know you better'
    },
    {
      title: 'Genel Ruh Hali & Sağlık',
      description: 'Share about your mental wellness'
    },
    {
      title: 'Günlük Alışkanlıklar',
      description: 'Tell us about your daily routines'
    },
    {
      title: 'Stres Kaynakları',
      description: 'Identify what affects your mood'
    },
    {
      title: 'Duygu Takibi İhtiyacı',
      description: 'What are you looking for?'
    },
    {
      title: 'Destek & Öneriler',
      description: 'Personalize your experience'
    }
  ];

  const updateSurveyData = (field: keyof SurveyData, value: any) => {
    setSurveyData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const toggleArrayItem = (field: keyof SurveyData, item: string) => {
    const currentArray = surveyData[field] as string[];
    if (currentArray.includes(item)) {
      updateSurveyData(field, currentArray.filter(i => i !== item));
    } else {
      updateSurveyData(field, [...currentArray, item]);
    }
  };

  const validateCurrentSection = (): boolean => {
    switch (currentSection) {
      case 0: // Demografi
        if (!surveyData.birthDate) {
          setError('Please enter your birth date');
          return false;
        }
        // Age validation (16+)
        const birthDate = new Date(surveyData.birthDate);
        const today = new Date();
        const age = today.getFullYear() - birthDate.getFullYear();
        if (age < 16) {
          setError('You must be at least 16 years old to use Emotice');
          return false;
        }
        return true;

      case 1: // Ruh Hali
        if (!surveyData.generalMood) {
          setError('Please select your general mood');
          return false;
        }
        return true;

      case 2: // Alışkanlıklar
        if (!surveyData.sleepPattern || !surveyData.physicalActivity) {
          setError('Please complete all habit questions');
          return false;
        }
        return true;

      case 3: // Stres
        if (!surveyData.mainStressSource) {
          setError('Please select your main stress source');
          return false;
        }
        return true;

      case 4: // Beklentiler
        if (!surveyData.primaryExpectation || !surveyData.dailyMoodEntries) {
          setError('Please complete all expectation questions');
          return false;
        }
        return true;

      case 5: // Tercihler
        if (!surveyData.notificationPreference || surveyData.interests.length === 0) {
          setError('Please complete all preference questions');
          return false;
        }
        return true;

      default:
        return true;
    }
  };

  const handleNext = () => {
    setError('');
    if (validateCurrentSection()) {
      setCurrentSection(prev => Math.min(prev + 1, sections.length - 1));
    }
  };

  const handleBack = () => {
    setError('');
    setCurrentSection(prev => Math.max(prev - 1, 0));
  };

  const handleSubmit = async () => {
    setError('');
    if (!validateCurrentSection()) return;

    setIsSubmitting(true);
    try {
      await completeOnboarding(surveyData);
      navigate('/dashboard');
    } catch (error: any) {
      setError(error.message || 'Failed to save survey data');
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderSection = () => {
    switch (currentSection) {
      case 0: // Demografi & Yaş
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-3">Doğum Tarihi *</label>
              <input
                type="date"
                className="w-full p-3 border border-gray-300 rounded-lg"
                value={surveyData.birthDate}
                onChange={(e) => updateSurveyData('birthDate', e.target.value)}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-3">Cinsiyet (Opsiyonel)</label>
              <div className="grid grid-cols-2 gap-3">
                {['Erkek', 'Kadın', 'Diğer', 'Belirtmek İstemiyorum'].map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => updateSurveyData('gender', option)}
                    className={`p-3 border-2 rounded-lg text-sm transition-all ${
                      surveyData.gender === option
                        ? 'border-purple-500 bg-purple-50 text-purple-900'
                        : 'border-gray-200 hover:border-purple-300'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-3">Ülke</label>
              <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded-lg"
                placeholder="Ülkenizi yazın"
                value={surveyData.country}
                onChange={(e) => updateSurveyData('country', e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-3">Dil Tercihi</label>
              <select 
                className="w-full p-3 border border-gray-300 rounded-lg"
                value={surveyData.language}
                onChange={(e) => updateSurveyData('language', e.target.value)}
              >
                <option value="">Seçiniz</option>
                <option value="tr">Türkçe</option>
                <option value="en">English</option>
                <option value="de">Deutsch</option>
                <option value="fr">Français</option>
              </select>
            </div>
          </div>
        );

      case 1: // Genel Ruh Hali & Sağlık
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-3">
                Son 2 haftada ruh hâlinizi nasıl tanımlarsınız? *
              </label>
              <div className="space-y-2">
                {['Mutlu', 'Stresli', 'Yorgun', 'Depresif eğilimli', 'Duygusal olarak dalgalı'].map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => updateSurveyData('generalMood', option)}
                    className={`w-full p-3 border-2 rounded-lg text-sm text-left transition-all ${
                      surveyData.generalMood === option
                        ? 'border-purple-500 bg-purple-50 text-purple-900'
                        : 'border-gray-200 hover:border-purple-300'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-3">
                Daha önce mental health tanısı aldınız mı?
              </label>
              <div className="space-y-2">
                {['Evet', 'Hayır', 'Söylemek istemiyorum'].map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => updateSurveyData('mentalHealthDiagnosis', option)}
                    className={`w-full p-3 border-2 rounded-lg text-sm text-left transition-all ${
                      surveyData.mentalHealthDiagnosis === option
                        ? 'border-purple-500 bg-purple-50 text-purple-900'
                        : 'border-gray-200 hover:border-purple-300'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-3">
                Şu an ilaç/terapi desteği alıyor musunuz?
              </label>
              <div className="space-y-2">
                {['Evet', 'Hayır', 'Planlıyorum'].map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => updateSurveyData('currentTreatment', option)}
                    className={`w-full p-3 border-2 rounded-lg text-sm text-left transition-all ${
                      surveyData.currentTreatment === option
                        ? 'border-purple-500 bg-purple-50 text-purple-900'
                        : 'border-gray-200 hover:border-purple-300'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          </div>
        );

      case 2: // Günlük Alışkanlıklar
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-3">Uyku düzeniniz? *</label>
              <div className="space-y-2">
                {['Düzenli', 'Düzensiz', 'Uykusuzluk yaşıyorum'].map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => updateSurveyData('sleepPattern', option)}
                    className={`w-full p-3 border-2 rounded-lg text-sm text-left transition-all ${
                      surveyData.sleepPattern === option
                        ? 'border-purple-500 bg-purple-50 text-purple-900'
                        : 'border-gray-200 hover:border-purple-300'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-3">Fiziksel aktivite sıklığınız? *</label>
              <div className="space-y-2">
                {['Hiç', 'Haftada 1-2', 'Haftada 3+'].map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => updateSurveyData('physicalActivity', option)}
                    className={`w-full p-3 border-2 rounded-lg text-sm text-left transition-all ${
                      surveyData.physicalActivity === option
                        ? 'border-purple-500 bg-purple-50 text-purple-900'
                        : 'border-gray-200 hover:border-purple-300'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-3">Alkol / sigara / kafein kullanımı?</label>
              <div className="space-y-2">
                {['Hayır', 'Az', 'Yoğun'].map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => updateSurveyData('substanceUse', option)}
                    className={`w-full p-3 border-2 rounded-lg text-sm text-left transition-all ${
                      surveyData.substanceUse === option
                        ? 'border-purple-500 bg-purple-50 text-purple-900'
                        : 'border-gray-200 hover:border-purple-300'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          </div>
        );

      case 3: // Stres Kaynakları
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-3">En büyük stres kaynağınız nedir? *</label>
              <div className="space-y-2">
                {['İş/okul', 'Finans', 'İlişkiler', 'Sağlık', 'Belirsizlik', 'Diğer'].map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => updateSurveyData('mainStressSource', option)}
                    className={`w-full p-3 border-2 rounded-lg text-sm text-left transition-all ${
                      surveyData.mainStressSource === option
                        ? 'border-purple-500 bg-purple-50 text-purple-900'
                        : 'border-gray-200 hover:border-purple-300'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-3">
                Günlük stres seviyenizi 1-10 arası puanlayın: {surveyData.dailyStressLevel}
              </label>
              <input
                type="range"
                min="1"
                max="10"
                value={surveyData.dailyStressLevel}
                onChange={(e) => updateSurveyData('dailyStressLevel', parseInt(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-xs text-muted-foreground mt-2">
                <span>1 - Çok Az</span>
                <span>10 - Çok Yüksek</span>
              </div>
            </div>
          </div>
        );

      case 4: // Duygu Takibi İhtiyacı
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-3">Emotice'ten öncelikli beklentiniz nedir? *</label>
              <div className="space-y-2">
                {[
                  'Kendi ruh hâlimi anlamak',
                  'Günlük motivasyon almak', 
                  'Mindfulness/meditasyon desteği',
                  'Topluluk & paylaşım'
                ].map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => updateSurveyData('primaryExpectation', option)}
                    className={`w-full p-3 border-2 rounded-lg text-sm text-left transition-all ${
                      surveyData.primaryExpectation === option
                        ? 'border-purple-500 bg-purple-50 text-purple-900'
                        : 'border-gray-200 hover:border-purple-300'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-3">Günde kaç kez ruh hâli kaydı girmek istersiniz? *</label>
              <div className="space-y-2">
                {['1', '2-3', '4+'].map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => updateSurveyData('dailyMoodEntries', option)}
                    className={`w-full p-3 border-2 rounded-lg text-sm text-left transition-all ${
                      surveyData.dailyMoodEntries === option
                        ? 'border-purple-500 bg-purple-50 text-purple-900'
                        : 'border-gray-200 hover:border-purple-300'
                    }`}
                  >
                    {option} {option === '1' ? 'time' : 'times'} per day
                  </button>
                ))}
              </div>
            </div>
          </div>
        );

      case 5: // Destek & Öneriler
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-3">
                Motivasyon mesajlarını nasıl almak istersiniz? *
              </label>
              <div className="space-y-2">
                {['Bildirim', 'E-posta', 'Uygulama içi'].map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => updateSurveyData('notificationPreference', option)}
                    className={`w-full p-3 border-2 rounded-lg text-sm text-left transition-all ${
                      surveyData.notificationPreference === option
                        ? 'border-purple-500 bg-purple-50 text-purple-900'
                        : 'border-gray-200 hover:border-purple-300'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-3">
                İlgi alanı seçin (En az 1 seçin) *
              </label>
              <div className="grid grid-cols-2 gap-3">
                {['Müzik', 'Astroloji', 'Mindfulness', 'Spor', 'Okuma', 'Diğer'].map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => toggleArrayItem('interests', option)}
                    className={`p-3 border-2 rounded-lg text-sm transition-all ${
                      surveyData.interests.includes(option)
                        ? 'border-purple-500 bg-purple-50 text-purple-900'
                        : 'border-gray-200 hover:border-purple-300'
                    }`}
                  >
                    <span className="flex items-center gap-2 justify-center">
                      <span className={`w-4 h-4 border-2 rounded ${
                        surveyData.interests.includes(option) ? 'bg-purple-500 border-purple-500' : 'border-gray-300'
                      }`} />
                      {option}
                    </span>
                  </button>
                ))}
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                Selected: {surveyData.interests.length}
              </p>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-calm flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl p-8 shadow-glow animate-scale-in max-h-[90vh] overflow-y-auto">
        <div className="text-center mb-6">
          <div className="w-16 h-16 rounded-full bg-gradient-primary mx-auto mb-4 flex items-center justify-center">
            <ClipboardList className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-2xl font-bold mb-2">{sections[currentSection].title}</h1>
          <p className="text-sm text-muted-foreground">
            {sections[currentSection].description}
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-muted-foreground mb-2">
            <span>Progress</span>
            <span>{currentSection + 1} / {sections.length}</span>
          </div>
          <Progress value={((currentSection + 1) / sections.length) * 100} className="h-2" />
        </div>

        {/* Section Content */}
        <div className="mb-8">
          {renderSection()}
        </div>

        {/* Error Message */}
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-4">
            <p className="text-sm text-red-800">{error}</p>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex gap-3">
          <Button
            type="button"
            variant="outline"
            onClick={handleBack}
            disabled={currentSection === 0}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </Button>

          {currentSection < sections.length - 1 ? (
            <Button
              type="button"
              onClick={handleNext}
              className="flex-1 bg-gradient-primary hover:opacity-90 flex items-center gap-2"
            >
              Next
              <ArrowRight className="w-4 h-4" />
            </Button>
          ) : (
            <Button
              type="button"
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="flex-1 bg-gradient-primary hover:opacity-90"
            >
              {isSubmitting ? 'Saving...' : 'Complete Onboarding'}
            </Button>
          )}
        </div>
      </Card>
    </div>
  );
};

export default OnboardingSurvey;
[file content end]