<<<<<<< HEAD
﻿import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Mail, Lock, User } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';


const Auth = () => {
  const { signIn, signUp } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
=======
﻿// Auth.tsx - PASSWORD STRENGTH EKLENİYOR
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Mail, Lock, User, AlertCircle, CheckCircle2 } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate, Link } from 'react-router-dom';

const Auth = () => {
  const { signIn, signUp } = useAuth();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  
  // State'ler
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [passwordStrength, setPasswordStrength] = useState(0);
  
  // Hukuki onaylar
  const [ageConfirm, setAgeConfirm] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [kvkkAccepted, setKvkkAccepted] = useState(false);
>>>>>>> 835e4aa1 (Initial commit: EMOTICE MVP with Auth and KVKK)

  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const [signupData, setSignupData] = useState({
    name: '',
    email: '',
    password: '',
  });

<<<<<<< HEAD
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await signIn(loginData.email, loginData.password);
=======
  // Email validation (ÖNCEKİ)
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // YENİ: Password validation fonksiyonu
  const validatePassword = (password: string): { isValid: boolean; errors: string[] } => {
    const errors: string[] = [];
    
    if (password.length < 8) {
      errors.push('At least 8 characters');
    }
    if (!/(?=.*[a-z])/.test(password)) {
      errors.push('One lowercase letter');
    }
    if (!/(?=.*[A-Z])/.test(password)) {
      errors.push('One uppercase letter');
    }
    if (!/(?=.*\d)/.test(password)) {
      errors.push('One number');
    }

    return {
      isValid: errors.length === 0,
      errors
    };
  };

  // YENİ: Password strength calculator
  const calculatePasswordStrength = (password: string): number => {
    let strength = 0;
    
    if (password.length >= 8) strength += 25;
    if (/[a-z]/.test(password)) strength += 25;
    if (/[A-Z]/.test(password)) strength += 25;
    if (/\d/.test(password)) strength += 25;
    
    return strength;
  };

  // YENİ: Real-time password validation
  const handlePasswordChange = (password: string, isSignup: boolean = false) => {
    if (isSignup) {
      setSignupData({ ...signupData, password });
    } else {
      setLoginData({ ...loginData, password });
    }

    // Strength calculation
    const strength = calculatePasswordStrength(password);
    setPasswordStrength(strength);

    // Validation
    if (isSignup && password) {
      const validation = validatePassword(password);
      if (!validation.isValid) {
        setPasswordError(validation.errors[0]);
      } else {
        setPasswordError('');
      }
    }
  };

  // Email change (ÖNCEKİ)
  const handleEmailChange = (email: string, isSignup: boolean = false) => {
    if (isSignup) {
      setSignupData({ ...signupData, email });
    } else {
      setLoginData({ ...loginData, email });
    }

    if (email && !validateEmail(email)) {
      setEmailError('Please enter a valid email address');
    } else {
      setEmailError('');
    }
  };

  // Login (GÜNCELLENDİ)
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateEmail(loginData.email)) {
      setEmailError('Please enter a valid email address');
      return;
    }
    
    setIsLoading(true);
    try {
      await signIn(loginData.email, loginData.password);
      // Başarılı login sonrası dashboard'a yönlendir
      navigate('/dashboard');
>>>>>>> 835e4aa1 (Initial commit: EMOTICE MVP with Auth and KVKK)
    } catch (error) {
      console.error('Login error:', error);
    } finally {
      setIsLoading(false);
    }
  };

<<<<<<< HEAD
  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await signUp(signupData.email, signupData.password, signupData.name);
=======
  // Signup
  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // 16 yaş kontrolü
    if (!ageConfirm) {
      alert('You must be at least 16 years old to register.');
      return;
    }

    // Hukuki onaylar kontrolü
    if (!termsAccepted || !privacyAccepted || !kvkkAccepted) {
      alert('Please accept all terms and policies to continue.');
      return;
    }
    
    if (!validateEmail(signupData.email)) {
      setEmailError('Please enter a valid email address');
      return;
    }

    // Password validation
    const passwordValidation = validatePassword(signupData.password);
    if (!passwordValidation.isValid) {
      setPasswordError(passwordValidation.errors[0]);
      return;
    }
    
    setIsLoading(true);
    try {
      await signUp(signupData.email, signupData.password, signupData.name);
      navigate('/onboarding');
>>>>>>> 835e4aa1 (Initial commit: EMOTICE MVP with Auth and KVKK)
    } catch (error) {
      console.error('Signup error:', error);
    } finally {
      setIsLoading(false);
    }
  };

<<<<<<< HEAD
=======
  // YENİ: Password strength color
  const getStrengthColor = (strength: number) => {
    if (strength === 0) return 'bg-gray-200';
    if (strength <= 50) return 'bg-red-500';
    if (strength <= 75) return 'bg-yellow-500';
    return 'bg-green-500';
  };

>>>>>>> 835e4aa1 (Initial commit: EMOTICE MVP with Auth and KVKK)
  return (
    <div className="min-h-screen bg-gradient-calm flex items-center justify-center p-4">
      <div className="w-full max-w-md animate-scale-in">
        <div className="text-center mb-8">
          <div className="w-16 h-16 rounded-full bg-gradient-primary mx-auto mb-4" />
          <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
            Emotice
          </h1>
          <p className="text-muted-foreground">
            Your AI companion for emotional wellness
          </p>
        </div>

<<<<<<< HEAD

=======
>>>>>>> 835e4aa1 (Initial commit: EMOTICE MVP with Auth and KVKK)
        <Card className="p-6 shadow-glow">
          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="login">Sign In</TabsTrigger>
              <TabsTrigger value="signup">Sign Up</TabsTrigger>
            </TabsList>

            <TabsContent value="login">
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="email"
                      placeholder="you@example.com"
                      className="pl-10"
                      value={loginData.email}
<<<<<<< HEAD
                      onChange={(e) =>
                        setLoginData({ ...loginData, email: e.target.value })
                      }
                      required
                    />
                  </div>
=======
                      onChange={(e) => handleEmailChange(e.target.value, false)}
                      required
                    />
                  </div>
                  {emailError && (
                    <div className="flex items-center gap-2 text-red-600 text-sm mt-1">
                      <AlertCircle className="w-4 h-4" />
                      <span>{emailError}</span>
                    </div>
                  )}
>>>>>>> 835e4aa1 (Initial commit: EMOTICE MVP with Auth and KVKK)
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Password</label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="password"
                      placeholder="••••••••"
                      className="pl-10"
                      value={loginData.password}
<<<<<<< HEAD
                      onChange={(e) =>
                        setLoginData({ ...loginData, password: e.target.value })
                      }
=======
                      onChange={(e) => handlePasswordChange(e.target.value, false)}
>>>>>>> 835e4aa1 (Initial commit: EMOTICE MVP with Auth and KVKK)
                      required
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-primary hover:opacity-90"
                  disabled={isLoading}
                >
                  {isLoading ? 'Signing in...' : 'Sign In'}
                </Button>

                <Button type="button" variant="link" className="w-full text-sm">
                  Forgot password?
                </Button>
              </form>
            </TabsContent>

            <TabsContent value="signup">
              <form onSubmit={handleSignup} className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Name</label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="text"
                      placeholder="Your name"
                      className="pl-10"
                      value={signupData.name}
                      onChange={(e) =>
                        setSignupData({ ...signupData, name: e.target.value })
                      }
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="email"
                      placeholder="you@example.com"
                      className="pl-10"
                      value={signupData.email}
<<<<<<< HEAD
                      onChange={(e) =>
                        setSignupData({ ...signupData, email: e.target.value })
                      }
                      required
                    />
                  </div>
=======
                      onChange={(e) => handleEmailChange(e.target.value, true)}
                      required
                    />
                  </div>
                  {emailError && (
                    <div className="flex items-center gap-2 text-red-600 text-sm mt-1">
                      <AlertCircle className="w-4 h-4" />
                      <span>{emailError}</span>
                    </div>
                  )}
>>>>>>> 835e4aa1 (Initial commit: EMOTICE MVP with Auth and KVKK)
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Password</label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="password"
                      placeholder="••••••••"
                      className="pl-10"
                      value={signupData.password}
<<<<<<< HEAD
                      onChange={(e) =>
                        setSignupData({
                          ...signupData,
                          password: e.target.value,
                        })
                      }
                      required
                    />
                  </div>
=======
                      onChange={(e) => handlePasswordChange(e.target.value, true)}
                      required
                    />
                  </div>
                  
                  {/* YENİ: Password strength indicator */}
                  {signupData.password && (
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>Password strength</span>
                        <span>{passwordStrength}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full transition-all duration-300 ${getStrengthColor(passwordStrength)}`}
                          style={{ width: `${passwordStrength}%` }}
                        />
                      </div>
                      
                      {/* YENİ: Password requirements */}
                      <div className="text-xs text-muted-foreground space-y-1">
                        <div className={`flex items-center gap-2 ${signupData.password.length >= 8 ? 'text-green-600' : ''}`}>
                          {signupData.password.length >= 8 ? <CheckCircle2 className="w-3 h-3" /> : '○'}
                          At least 8 characters
                        </div>
                        <div className={`flex items-center gap-2 ${/[a-z]/.test(signupData.password) ? 'text-green-600' : ''}`}>
                          {/[a-z]/.test(signupData.password) ? <CheckCircle2 className="w-3 h-3" /> : '○'}
                          One lowercase letter
                        </div>
                        <div className={`flex items-center gap-2 ${/[A-Z]/.test(signupData.password) ? 'text-green-600' : ''}`}>
                          {/[A-Z]/.test(signupData.password) ? <CheckCircle2 className="w-3 h-3" /> : '○'}
                          One uppercase letter
                        </div>
                        <div className={`flex items-center gap-2 ${/\d/.test(signupData.password) ? 'text-green-600' : ''}`}>
                          {/\d/.test(signupData.password) ? <CheckCircle2 className="w-3 h-3" /> : '○'}
                          One number
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {passwordError && (
                    <div className="flex items-center gap-2 text-red-600 text-sm mt-1">
                      <AlertCircle className="w-4 h-4" />
                      <span>{passwordError}</span>
                    </div>
                  )}
                </div>

                {/* 16 YAŞ VE HUKUKİ ONAYLAR */}
                <div className="space-y-3 pt-2 border-t">
                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="age-confirm"
                      checked={ageConfirm}
                      onCheckedChange={(checked) => setAgeConfirm(checked as boolean)}
                    />
                    <label
                      htmlFor="age-confirm"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      I confirm that I am at least 16 years old
                    </label>
                  </div>

                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="terms"
                      checked={termsAccepted}
                      onCheckedChange={(checked) => setTermsAccepted(checked as boolean)}
                    />
                    <label
                      htmlFor="terms"
                      className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      I have read and accept the{' '}
                      <Link to="/legal/terms" className="text-blue-600 hover:underline" target="_blank">
                        Terms of Service
                      </Link>
                    </label>
                  </div>

                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="privacy"
                      checked={privacyAccepted}
                      onCheckedChange={(checked) => setPrivacyAccepted(checked as boolean)}
                    />
                    <label
                      htmlFor="privacy"
                      className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      I have read and accept the{' '}
                      <Link to="/legal/privacy" className="text-blue-600 hover:underline" target="_blank">
                        Privacy Policy
                      </Link>
                    </label>
                  </div>

                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="kvkk"
                      checked={kvkkAccepted}
                      onCheckedChange={(checked) => setKvkkAccepted(checked as boolean)}
                    />
                    <label
                      htmlFor="kvkk"
                      className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      I have read and accept the{' '}
                      <Link to="/legal/kvkk" className="text-blue-600 hover:underline" target="_blank">
                        KVKK Policy
                      </Link>
                    </label>
                  </div>
>>>>>>> 835e4aa1 (Initial commit: EMOTICE MVP with Auth and KVKK)
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-primary hover:opacity-90"
<<<<<<< HEAD
                  disabled={isLoading}
=======
                  disabled={isLoading || passwordStrength < 100 || !ageConfirm || !termsAccepted || !privacyAccepted || !kvkkAccepted}
>>>>>>> 835e4aa1 (Initial commit: EMOTICE MVP with Auth and KVKK)
                >
                  {isLoading ? 'Creating account...' : 'Create Account'}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  By signing up, you agree to our Terms of Service and Privacy
                  Policy
                </p>
              </form>
            </TabsContent>
          </Tabs>
        </Card>
      </div>
    </div>
  );
};

<<<<<<< HEAD
export default Auth;
=======
export default Auth;
>>>>>>> 835e4aa1 (Initial commit: EMOTICE MVP with Auth and KVKK)
