import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ClipboardList } from 'lucide-react';

interface MiniSurveyProps {
  onComplete: (data: SurveyData) => void;
}

export interface SurveyData {
  gender: string;
  previousExperience: string;
  expectations: string[];
  focusArea: string[];
  aiUsageFrequency: string;
}

const MiniSurvey = ({ onComplete }: MiniSurveyProps) => {
  const [gender, setGender] = useState('');
  const [previousExperience, setPreviousExperience] = useState('');
  const [expectations, setExpectations] = useState<string[]>([]);
  const [focusArea, setFocusArea] = useState<string[]>([]);
  const [aiUsageFrequency, setAiUsageFrequency] = useState('');
  const [error, setError] = useState('');

  const toggleArrayItem = (array: string[], item: string, setter: (arr: string[]) => void, max?: number) => {
    if (array.includes(item)) {
      setter(array.filter(i => i !== item));
    } else {
      if (max && array.length >= max) {
        setError(`You can select maximum ${max} items`);
        setTimeout(() => setError(''), 3000);
        return;
      }
      setter([...array, item]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!gender) {
      setError('Please select your gender');
      return;
    }
    if (!previousExperience) {
      setError('Please answer the previous experience question');
      return;
    }
    if (expectations.length === 0) {
      setError('Please select at least one expectation');
      return;
    }
    if (focusArea.length === 0) {
      setError('Please select at least one focus area');
      return;
    }
    if (!aiUsageFrequency) {
      setError('Please select AI usage frequency');
      return;
    }

    onComplete({
      gender,
      previousExperience,
      expectations,
      focusArea,
      aiUsageFrequency,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-calm flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl p-8 shadow-glow animate-scale-in max-h-[90vh] overflow-y-auto">
        <div className="text-center mb-6">
          <div className="w-16 h-16 rounded-full bg-gradient-primary mx-auto mb-4 flex items-center justify-center">
            <ClipboardList className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-2xl font-bold mb-2">Quick Survey</h1>
          <p className="text-sm text-muted-foreground">
            Help us personalize your experience (5 questions)
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Question 1: Gender */}
          <div>
            <label className="block text-sm font-medium mb-3">1. Gender</label>
            <div className="grid grid-cols-2 gap-3">
              {['Male', 'Female', 'Other', 'Prefer not to say'].map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setGender(option)}
                  className={`p-3 border-2 rounded-lg text-sm transition-all ${
                    gender === option
                      ? 'border-purple-500 bg-purple-50 text-purple-900'
                      : 'border-gray-200 hover:border-purple-300'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          {/* Question 2: Previous Experience */}
          <div>
            <label className="block text-sm font-medium mb-3">2. Have you used a mood tracking app before?</label>
            <div className="space-y-2">
              {[
                { value: 'yes', label: 'Yes' },
                { value: 'no', label: 'No' },
                { value: 'tried', label: 'Tried but did not use regularly' },
              ].map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => setPreviousExperience(option.value)}
                  className={`w-full p-3 border-2 rounded-lg text-sm text-left transition-all ${
                    previousExperience === option.value
                      ? 'border-purple-500 bg-purple-50 text-purple-900'
                      : 'border-gray-200 hover:border-purple-300'
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          {/* Question 3: Expectations */}
          <div>
            <label className="block text-sm font-medium mb-3">3. What do you expect from EMOTICE? (Select up to 3)</label>
            <div className="space-y-2">
              {[
                'Track my mood regularly',
                'See changes and trends',
                'Get support from AI',
                'Receive personalized recommendations',
              ].map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => toggleArrayItem(expectations, option, setExpectations, 3)}
                  className={`w-full p-3 border-2 rounded-lg text-sm text-left transition-all ${
                    expectations.includes(option)
                      ? 'border-purple-500 bg-purple-50 text-purple-900'
                      : 'border-gray-200 hover:border-purple-300'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span className={`w-4 h-4 border-2 rounded ${
                      expectations.includes(option) ? 'bg-purple-500 border-purple-500' : 'border-gray-300'
                    }`} />
                    {option}
                  </span>
                </button>
              ))}
            </div>
            <p className="text-xs text-muted-foreground mt-2">Selected: {expectations.length}/3</p>
          </div>

          {/* Question 4: Focus Area */}
          <div>
            <label className="block text-sm font-medium mb-3">4. What would you like to focus on?</label>
            <div className="space-y-2">
              {[
                'Stress management',
                'Anxiety',
                'Motivation',
                'Other',
              ].map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => toggleArrayItem(focusArea, option, setFocusArea)}
                  className={`w-full p-3 border-2 rounded-lg text-sm text-left transition-all ${
                    focusArea.includes(option)
                      ? 'border-purple-500 bg-purple-50 text-purple-900'
                      : 'border-gray-200 hover:border-purple-300'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span className={`w-4 h-4 border-2 rounded ${
                      focusArea.includes(option) ? 'bg-purple-500 border-purple-500' : 'border-gray-300'
                    }`} />
                    {option}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Question 5: AI Usage Frequency */}
          <div>
            <label className="block text-sm font-medium mb-3">5. How often do you plan to use AI features?</label>
            <div className="space-y-2">
              {[
                { value: 'daily', label: 'Every day' },
                { value: 'weekly', label: 'A few times a week' },
                { value: 'monthly', label: 'A few times a month' },
                { value: 'asNeeded', label: 'Only when needed' },
              ].map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => setAiUsageFrequency(option.value)}
                  className={`w-full p-3 border-2 rounded-lg text-sm text-left transition-all ${
                    aiUsageFrequency === option.value
                      ? 'border-purple-500 bg-purple-50 text-purple-900'
                      : 'border-gray-200 hover:border-purple-300'
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-3">
              <p className="text-sm text-red-800">{error}</p>
            </div>
          )}

          <div className="flex gap-3">
            <Button
              type="button"
              variant="outline"
              onClick={() => window.history.back()}
              className="flex-1"
            >
              Back
            </Button>
            <Button
              type="submit"
              className="flex-1 bg-gradient-primary hover:opacity-90"
              size="lg"
            >
              Complete Survey
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default MiniSurvey;