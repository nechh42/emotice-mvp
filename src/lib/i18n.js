// src/lib/i18n.js - DÜZELTİLMİŞ VERSİYON
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      common: {
        readHere: 'Read here',
        loading: 'Loading...',
        continue: 'Continue',
        back: 'Back',
        skip: 'Skip'
      },
      nav: {
        home: 'Home',
        features: 'Features',
        pricing: 'Pricing',
        legal: 'Legal'
      },
      legal: {
        terms: 'Terms of Service',
        privacy: 'Privacy Policy',
        medical: 'Medical Disclaimer',
        cookie: 'Cookie Policy'
      },
      auth: {
        signIn: 'Sign In'
      },
      onboarding: {
        welcome: 'Welcome to EMOTICE',
        consent: 'Legal Consent',
        consentText: 'Please review and accept our terms to continue',
        criticalWarning: 'CRITICAL WARNING',
        criticalWarningText: 'EMOTICE is NOT a medical device. In emergencies, call 112 or 911.',
        acceptAll: 'Accept All',
        iAcceptTerms: 'I accept the Terms of Service',
        iAcceptPrivacy: 'I accept the Privacy Policy',
        iUnderstandDisclaimer: 'I understand EMOTICE is not medical advice (Medical Disclaimer)',
        consentError: 'You must accept all terms to continue',
        acceptAndContinue: 'Accept & Continue',
        ageVerification: 'Age Verification',
        ageVerificationText: 'You must be 16 years or older to use EMOTICE',
        surveyTitle: 'Quick Survey',
        surveySubtitle: 'Help us personalize your experience (5 questions)'
      },
      home: {
        hero: {
          title: 'Never Feel Alone with Your Emotions',
          subtitle: 'Track your mood, chat with AI companion, and gain insights into your emotional wellness journey.',
          privacy: 'Your data is private and secure'
        },
        cta: {
          trial: 'Start Free Trial',
          demo: 'View Demo'
        },
        features: {
          mood: {
            title: 'Daily Mood Tracking',
            desc: 'Quick and simple emoji-based tracking. Record how you feel in seconds.'
          },
          ai: {
            title: 'AI Companion',
            desc: 'Chat with your personal AI companion for emotional support and insights.'
          },
          insights: {
            title: 'Emotional Insights',
            desc: 'Understand your patterns and trends with beautiful visualizations.'
          }
        },
        pricing: {
          title: 'Simple, Transparent Pricing',
          subtitle: 'Start free, upgrade when you are ready',
          free: {
            title: 'Free',
            feature1: 'Daily mood tracking',
            feature2: '15 AI messages per day',
            feature3: 'Basic insights',
            button: 'Get Started'
          },
          premium: {
            title: 'Premium',
            badge: 'POPULAR',
            feature1: 'Unlimited mood tracking',
            feature2: '100 AI messages per day',
            feature3: 'Advanced analytics',
            feature4: 'Export data',
            button: 'Start Free Trial'
          }
        },
        footer: '© 2025 Emotice. Your emotional wellness companion.'
      },
      dashboard: {
        tabs: {
          moodTracking: 'Mood Tracking',
          aiCompanion: 'AI Companion'
        },
        mood: {
          question: 'How are you feeling today?',
          labels: {
            terrible: 'Terrible',
            bad: 'Bad',
            okay: 'Okay',
            good: 'Good',
            great: 'Great'
          },
          noteLabel: 'Add a note (optional)',
          notePlaceholder: 'What is on your mind?',
          saveButton: 'Save Today\'s Mood'
        },
        stats: {
          dayStreak: 'Day Streak',
          avgMood: 'Avg. Mood',
          thisWeek: 'This Week'
        },
        entries: {
          title: 'Recent Entries',
          viewAll: 'View All',
          today: 'Today',
          yesterday: 'Yesterday',
          daysAgo: 'days ago'
        },
        chat: {
          moodSummary: 'Mood Summary',
          currentMood: 'Current Mood',
          noData: 'No data yet',
          recentPatterns: 'Recent Patterns',
          tips: 'Quick Tips',
          tip1: 'Share your feelings openly',
          tip2: 'Ask about mood patterns',
          tip3: 'Get wellness suggestions'
        },
        toast: {
          selectMood: 'Please select a mood',
          selectMoodDesc: 'Choose how you are feeling today',
          saved: 'Mood saved!',
          savedDesc: 'Your mood has been recorded for today.'
        }
      }
    }
  },
  tr: {
    translation: {
      common: {
        readHere: 'Buradan okuyun',
        loading: 'Yükleniyor...',
        continue: 'Devam Et',
        back: 'Geri',
        skip: 'Atla'
      },
      nav: {
        home: 'Ana Sayfa',
        features: 'Özellikler',
        pricing: 'Fiyatlandırma',
        legal: 'Yasal'
      },
      legal: {
        terms: 'Kullanım Koşulları',
        privacy: 'Gizlilik Politikası',
        medical: 'Tıbbi Sorumluluk Reddi',
        cookie: 'Çerez Politikası'
      },
      auth: {
        signIn: 'Giriş Yap'
      },
      onboarding: {
        welcome: 'EMOTICE\'a Hoş Geldiniz',
        consent: 'Yasal Onay',
        consentText: 'Devam etmek için lütfen koşullarımızı inceleyin ve kabul edin',
        criticalWarning: 'KRİTİK UYARI',
        criticalWarningText: 'EMOTICE tıbbi bir cihaz DEĞİLDİR. Acil durumlarda 112\'yi arayın.',
        acceptAll: 'Tümünü Kabul Et',
        iAcceptTerms: 'Kullanım Koşullarını kabul ediyorum',
        iAcceptPrivacy: 'Gizlilik Politikasını kabul ediyorum',
        iUnderstandDisclaimer: 'EMOTICE\'ın tıbbi tavsiye olmadığını anlıyorum (Tıbbi Sorumluluk Reddi)',
        consentError: 'Devam etmek için tüm koşulları kabul etmelisiniz',
        acceptAndContinue: 'Kabul Et ve Devam Et',
        ageVerification: 'Yaş Doğrulama',
        ageVerificationText: 'EMOTICE\'ı kullanmak için 16 yaşında veya daha büyük olmalısınız',
        surveyTitle: 'Hızlı Anket',
        surveySubtitle: 'Deneyiminizi kişiselleştirmemize yardımcı olun (5 soru)'
      },
      home: {
        hero: {
          title: 'Duygularınızla Asla Yalnız Hissetmeyin',
          subtitle: 'Ruh halinizi takip edin, AI asistanıyla sohbet edin ve duygusal sağlık yolculuğunuzda içgörüler kazanın.',
          privacy: 'Verileriniz gizli ve güvende'
        },
        cta: {
          trial: 'Ücretsiz Denemeyi Başlat',
          demo: 'Demoyu Görüntüle'
        },
        features: {
          mood: {
            title: 'Günlük Ruh Hali Takibi',
            desc: 'Hızlı ve basit emoji tabanlı takip. Saniyeler içinde nasıl hissettiğinizi kaydedin.'
          },
          ai: {
            title: 'AI Asistan',
            desc: 'Duygusal destek ve içgörüler için kişisel AI asistanınızla sohbet edin.'
          },
          insights: {
            title: 'Duygusal İçgörüler',
            desc: 'Güzel görselleştirmelerle modellerinizi ve eğilimlerinizi anlayın.'
          }
        },
        pricing: {
          title: 'Basit, Şeffaf Fiyatlandırma',
          subtitle: 'Ücretsiz başlayın, hazır olduğunuzda yükseltin',
          free: {
            title: 'Ücretsiz',
            feature1: 'Günlük ruh hali takibi',
            feature2: 'Günde 15 AI mesajı',
            feature3: 'Temel içgörüler',
            button: 'Başla'
          },
          premium: {
            title: 'Premium',
            badge: 'POPÜLER',
            feature1: 'Sınırsız ruh hali takibi',
            feature2: 'Günde 100 AI mesajı',
            feature3: 'Gelişmiş analitik',
            feature4: 'Veri aktarımı',
            button: 'Ücretsiz Denemeyi Başlat'
          }
        },
        footer: '© 2025 Emotice. Duygusal sağlık yol arkadaşınız.'
      },
      dashboard: {
        tabs: {
          moodTracking: 'Ruh Hali Takibi',
          aiCompanion: 'AI Asistan'
        },
        mood: {
          question: 'Bugün nasıl hissediyorsunuz?',
          labels: {
            terrible: 'Berbat',
            bad: 'Kötü',
            okay: 'Normal',
            good: 'İyi',
            great: 'Harika'
          },
          noteLabel: 'Not ekleyin (isteğe bağlı)',
          notePlaceholder: 'Aklınızdan neler geçiyor?',
          saveButton: 'Bugünkü Ruh Halini Kaydet'
        },
        stats: {
          dayStreak: 'Gün Serisi',
          avgMood: 'Ort. Ruh Hali',
          thisWeek: 'Bu Hafta'
        },
        entries: {
          title: 'Son Kayıtlar',
          viewAll: 'Tümünü Gör',
          today: 'Bugün',
          yesterday: 'Dün',
          daysAgo: 'gün önce'
        },
        chat: {
          moodSummary: 'Ruh Hali Özeti',
          currentMood: 'Mevcut Ruh Hali',
          noData: 'Henüz veri yok',
          recentPatterns: 'Son Modeller',
          tips: 'Hızlı İpuçları',
          tip1: 'Duygularınızı açıkça paylaşın',
          tip2: 'Ruh hali modelleri hakkında soru sorun',
          tip3: 'Sağlık önerileri alın'
        },
        toast: {
          selectMood: 'Lütfen bir ruh hali seçin',
          selectMoodDesc: 'Bugün nasıl hissettiğinizi seçin',
          saved: 'Ruh hali kaydedildi!',
          savedDesc: 'Bugünkü ruh haliniz kaydedildi.'
        }
      }
    }
  },
  es: {
    translation: {
      common: {
        readHere: 'Leer aquí',
        loading: 'Cargando...',
        continue: 'Continuar',
        back: 'Atrás',
        skip: 'Saltar'
      },
      nav: {
        home: 'Inicio',
        features: 'Características',
        pricing: 'Precios',
        legal: 'Legal'
      },
      dashboard: {
        tabs: {
          moodTracking: 'Seguimiento de Estado de Ánimo',
          aiCompanion: 'Compañero IA'
        },
        mood: {
          question: '¿Cómo te sientes hoy?',
          labels: {
            terrible: 'Terrible',
            bad: 'Mal',
            okay: 'Regular',
            good: 'Bien',
            great: 'Excelente'
          }
        }
      }
    }
  },
  fr: {
    translation: {
      common: {
        readHere: 'Lire ici',
        loading: 'Chargement...',
        continue: 'Continuer',
        back: 'Retour',
        skip: 'Passer'
      },
      nav: {
        home: 'Accueil',
        features: 'Fonctionnalités',
        pricing: 'Tarifs',
        legal: 'Légal'
      },
      dashboard: {
        tabs: {
          moodTracking: 'Suivi de Humeur',
          aiCompanion: 'Compagnon IA'
        },
        mood: {
          question: 'Comment vous sentez-vous aujourd\'hui ?',
          labels: {
            terrible: 'Terrible',
            bad: 'Mauvais',
            okay: 'Correct',
            good: 'Bien',
            great: 'Excellent'
          }
        }
      }
    }
  },
  ru: {
    translation: {
      common: {
        readHere: 'Читать здесь',
        loading: 'Загрузка...',
        continue: 'Продолжить',
        back: 'Назад',
        skip: 'Пропустить'
      },
      nav: {
        home: 'Главная',
        features: 'Функции',
        pricing: 'Цены',
        legal: 'Правовая'
      },
      dashboard: {
        tabs: {
          moodTracking: 'Отслеживание настроения',
          aiCompanion: 'ИИ Компаньон'
        },
        mood: {
          question: 'Как вы себя чувствуете сегодня?',
          labels: {
            terrible: 'Ужасно',
            bad: 'Плохо',
            okay: 'Нормально',
            good: 'Хорошо',
            great: 'Отлично'
          }
        }
      }
    }
  },
  zh: {
    translation: {
      common: {
        readHere: '在此阅读',
        loading: '加载中...',
        continue: '继续',
        back: '返回',
        skip: '跳过'
      },
      nav: {
        home: '首页',
        features: '功能',
        pricing: '价格',
        legal: '法律'
      },
      dashboard: {
        tabs: {
          moodTracking: '情绪跟踪',
          aiCompanion: 'AI 伴侣'
        },
        mood: {
          question: '你今天感觉如何？',
          labels: {
            terrible: '糟透了',
            bad: '不好',
            okay: '还行',
            good: '好',
            great: '很好'
          }
        }
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    supportedLngs: ['en', 'tr', 'es', 'fr', 'ru', 'zh'],
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage']
    },
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;