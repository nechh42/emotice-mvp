<<<<<<< HEAD
﻿import { createContext, useContext, useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'
import type { User, Session } from '@supabase/supabase-js'
import { useToast } from '@/hooks/use-toast'

interface AuthContextType {
  user: User | null
  session: Session | null
  loading: boolean
  signUp: (email: string, password: string, name: string) => Promise<void>
  signIn: (email: string, password: string) => Promise<void>
  signOut: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [session, setSession] = useState<Session | null>(null)
  const [loading, setLoading] = useState(true)
  const { toast } = useToast()

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
      setUser(session?.user ?? null)
      setLoading(false)
    })

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
      setUser(session?.user ?? null)
      setLoading(false)
    })

    return () => subscription.unsubscribe()
  }, [])
=======
﻿import { createContext, useContext, useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import type { User, Session } from '@supabase/supabase-js';
import { useToast } from '@/hooks/use-toast';

interface AuthContextType {
  user: User | null;
  session: Session | null;
  loading: boolean;
  signUp: (email: string, password: string, name: string) => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  completeOnboarding: (surveyData: any) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      setLoading(false);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (_event, session) => {
      setSession(session);
      setUser(session?.user ?? null);
      setLoading(false);

      // User created - create profile if not exists
      if (session?.user && _event === 'SIGNED_IN') {
        const { error } = await supabase
          .from('profiles')
          .upsert({
            id: session.user.id,
            email: session.user.email,
            updated_at: new Date().toISOString(),
          }, {
            onConflict: 'id'
          });

        if (error) {
          console.error('Error creating profile:', error);
        }
      }
    });

    return () => subscription.unsubscribe();
  }, []);
>>>>>>> 835e4aa1 (Initial commit: EMOTICE MVP with Auth and KVKK)

  const signUp = async (email: string, password: string, name: string) => {
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: name,
          },
        },
<<<<<<< HEAD
      })

      if (error) throw error

      toast({
        title: 'Account created!',
        description: "Welcome to Emotice!",
      })

      // Navigate işlemini component içinde yapacağız
=======
      });

      if (error) throw error;

      toast({
        title: 'Account created!',
        description: "Welcome to Emotice! Please complete your onboarding survey.",
      });
>>>>>>> 835e4aa1 (Initial commit: EMOTICE MVP with Auth and KVKK)
    } catch (error: any) {
      toast({
        title: 'Error',
        description: error.message || 'Failed to create account',
        variant: 'destructive',
<<<<<<< HEAD
      })
      throw error
    }
  }
=======
      });
      throw error;
    }
  };
>>>>>>> 835e4aa1 (Initial commit: EMOTICE MVP with Auth and KVKK)

  const signIn = async (email: string, password: string) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
<<<<<<< HEAD
      })

      if (error) throw error
=======
      });

      if (error) throw error;
>>>>>>> 835e4aa1 (Initial commit: EMOTICE MVP with Auth and KVKK)

      toast({
        title: 'Welcome back!',
        description: 'Successfully logged in.',
<<<<<<< HEAD
      })

      // Navigate işlemini component içinde yapacağız
=======
      });
>>>>>>> 835e4aa1 (Initial commit: EMOTICE MVP with Auth and KVKK)
    } catch (error: any) {
      toast({
        title: 'Error',
        description: error.message || 'Failed to sign in',
        variant: 'destructive',
<<<<<<< HEAD
      })
      throw error
    }
  }

  const signOut = async () => {
    try {
      const { error } = await supabase.auth.signOut()
      if (error) throw error
=======
      });
      throw error;
    }
  };

  const signOut = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
>>>>>>> 835e4aa1 (Initial commit: EMOTICE MVP with Auth and KVKK)

      toast({
        title: 'Signed out',
        description: 'You have been successfully signed out.',
<<<<<<< HEAD
      })

      // Navigate işlemini component içinde yapacağız
=======
      });
>>>>>>> 835e4aa1 (Initial commit: EMOTICE MVP with Auth and KVKK)
    } catch (error: any) {
      toast({
        title: 'Error',
        description: error.message || 'Failed to sign out',
        variant: 'destructive',
<<<<<<< HEAD
      })
    }
  }
=======
      });
    }
  };

  const completeOnboarding = async (surveyData: any) => {
    try {
      const { error } = await supabase
        .from('profiles')
        .update({
          onboarding_completed: true,
          survey_data: surveyData,
          updated_at: new Date().toISOString(),
        })
        .eq('id', user?.id);

      if (error) throw error;

      toast({
        title: 'Onboarding completed!',
        description: 'Your profile has been personalized.',
      });
    } catch (error: any) {
      toast({
        title: 'Error',
        description: error.message || 'Failed to save survey data',
        variant: 'destructive',
      });
      throw error;
    }
  };
>>>>>>> 835e4aa1 (Initial commit: EMOTICE MVP with Auth and KVKK)

  const value = {
    user,
    session,
    loading,
    signUp,
    signIn,
    signOut,
<<<<<<< HEAD
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
=======
    completeOnboarding,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
>>>>>>> 835e4aa1 (Initial commit: EMOTICE MVP with Auth and KVKK)
}