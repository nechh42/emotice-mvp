import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Calendar, AlertTriangle } from 'lucide-react';

interface AgeVerificationProps {
  onComplete: (birthDate: string, age: number) => void;
}

const AgeVerification = ({ onComplete }: AgeVerificationProps) => {
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [error, setError] = useState('');

  const calculateAge = (birthDate: Date): number => {
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    
    return age;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Validation
    const dayNum = parseInt(day);
    const monthNum = parseInt(month);
    const yearNum = parseInt(year);

    if (!day || !month || !year) {
      setError('Please fill in all fields');
      return;
    }

    if (dayNum < 1 || dayNum > 31) {
      setError('Invalid day');
      return;
    }

    if (monthNum < 1 || monthNum > 12) {
      setError('Invalid month');
      return;
    }

    if (yearNum < 1900 || yearNum > new Date().getFullYear()) {
      setError('Invalid year');
      return;
    }

    // Create birth date
    const birthDate = new Date(yearNum, monthNum - 1, dayNum);
    
    // Check if date is valid
    if (birthDate.getDate() !== dayNum) {
      setError('Invalid date');
      return;
    }

    // Calculate age
    const age = calculateAge(birthDate);

    // Check minimum age
    if (age < 16) {
      setError('You must be at least 16 years old to use EMOTICE');
      return;
    }

    // Success
    const birthDateString = `${yearNum}-${monthNum.toString().padStart(2, '0')}-${dayNum.toString().padStart(2, '0')}`;
    onComplete(birthDateString, age);
  };

  return (
    <div className="min-h-screen bg-gradient-calm flex items-center justify-center p-4">
      <Card className="w-full max-w-md p-8 shadow-glow animate-scale-in">
        <div className="text-center mb-6">
          <div className="w-16 h-16 rounded-full bg-gradient-primary mx-auto mb-4 flex items-center justify-center">
            <Calendar className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-2xl font-bold mb-2">Age Verification</h1>
          <p className="text-sm text-muted-foreground">
            To use EMOTICE, you must be at least 16 years old
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="text-sm font-medium mb-2 block">Date of Birth</label>
            <div className="grid grid-cols-3 gap-3">
              <div>
                <Input
                  type="number"
                  placeholder="Day"
                  min="1"
                  max="31"
                  value={day}
                  onChange={(e) => setDay(e.target.value)}
                  className="text-center"
                />
                <p className="text-xs text-muted-foreground mt-1">Day</p>
              </div>
              <div>
                <Input
                  type="number"
                  placeholder="Month"
                  min="1"
                  max="12"
                  value={month}
                  onChange={(e) => setMonth(e.target.value)}
                  className="text-center"
                />
                <p className="text-xs text-muted-foreground mt-1">Month</p>
              </div>
              <div>
                <Input
                  type="number"
                  placeholder="Year"
                  min="1900"
                  max={new Date().getFullYear()}
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                  className="text-center"
                />
                <p className="text-xs text-muted-foreground mt-1">Year</p>
              </div>
            </div>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-3 flex items-start gap-2">
              <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-red-800">{error}</p>
            </div>
          )}

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-xs text-blue-800 leading-relaxed">
              <strong>Privacy Notice:</strong> Your date of birth is only used to verify your age and comply with legal requirements. It is stored securely and never shared with third parties.
            </p>
          </div>

          <Button
            type="submit"
            className="w-full bg-gradient-primary hover:opacity-90"
            size="lg"
          >
            Continue
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default AgeVerification;