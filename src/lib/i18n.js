import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
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
            feature2: '5 AI messages per day',
            feature3: 'Basic insights',
            button: 'Get Started'
          },
          premium: {
            title: 'Premium',
            badge: 'POPULAR',
            feature1: 'Unlimited mood tracking',
            feature2: '10 AI messages per day',
            feature3: 'Advanced analytics',
            feature4: 'Export data',
            button: 'Start Free Trial'
          }
        },
        footer: '© 2025 Emotice. Your emotional wellness companion.'
      },
      dashboard: {
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
          saveButton: 'Save Today is Mood'
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
      nav: {
        home: 'Ana Sayfa',
        features: 'Özellikler',
        pricing: 'Fiyatlandırma',
        legal: 'Yasal'
      },
      legal: {
        terms: 'Hizmet Koşulları',
        privacy: 'Gizlilik Politikası',
        medical: 'Tıbbi Sorumluluk Reddi',
        cookie: 'Çerez Politikası'
      },
      auth: {
        signIn: 'Giriş Yap'
      },
      home: {
        hero: {
          title: 'Duygularınızla Asla Yalnız Hissetmeyin',
          subtitle: 'Ruh halinizi takip edin, yapay zeka arkadaşınızla sohbet edin ve duygusal sağlık yolculuğunuz hakkında bilgi edinin.',
          privacy: 'Verileriniz gizli ve güvende'
        },
        cta: {
          trial: 'Ücretsiz Deneme Başlat',
          demo: 'Demoyu Görüntüle'
        },
        features: {
          mood: {
            title: 'Günlük Ruh Hali Takibi',
            desc: 'Hızlı ve basit emoji tabanlı takip. Saniyeler içinde nasıl hissettiğinizi kaydedin.'
          },
          ai: {
            title: 'Yapay Zeka Arkadaşı',
            desc: 'Duygusal destek ve içgörüler için kişisel yapay zeka arkadaşınızla sohbet edin.'
          },
          insights: {
            title: 'Duygusal İçgörüler',
            desc: 'Güzel görselleştirmelerle kalıplarınızı ve eğilimlerinizi anlayın.'
          }
        },
        pricing: {
          title: 'Basit, Şeffaf Fiyatlandırma',
          subtitle: 'Ücretsiz başlayın, hazır olduğunuzda yükseltin',
          free: {
            title: 'Ücretsiz',
            feature1: 'Günlük ruh hali takibi',
            feature2: 'Günde 5 AI mesajı',
            feature3: 'Temel içgörüler',
            button: 'Başla'
          },
          premium: {
            title: 'Premium',
            badge: 'POPÜLER',
            feature1: 'Sınırsız ruh hali takibi',
            feature2: 'Günde 10 AI mesajı',
            feature3: 'Gelişmiş analizler',
            feature4: 'Veri dışa aktarma',
            button: 'Ücretsiz Deneme Başlat'
          }
        },
        footer: '© 2025 Emotice. Duygusal sağlık arkadaşınız.'
      },
      dashboard: {
        mood: {
          question: 'Bugün nasıl hissediyorsun?',
          labels: {
            terrible: 'Kötü',
            bad: 'Fena',
            okay: 'İdare Eder',
            good: 'İyi',
            great: 'Harika'
          },
          noteLabel: 'Not ekle (opsiyonel)',
          notePlaceholder: 'Aklından ne geçiyor?',
          saveButton: 'Bugünün Ruh Halini Kaydet'
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
        toast: {
          selectMood: 'Lütfen bir ruh hali seç',
          selectMoodDesc: 'Bugün nasıl hissettiğini seç',
          saved: 'Ruh hali kaydedildi!',
          savedDesc: 'Bugünkü ruh halin kaydedildi.'
        }
      }
    }
  },
  es: {
    translation: {
      nav: {
        home: 'Inicio',
        features: 'Características',
        pricing: 'Precios',
        legal: 'Legal'
      },
      legal: {
        terms: 'Términos de Servicio',
        privacy: 'Política de Privacidad',
        medical: 'Descargo de Responsabilidad Médica',
        cookie: 'Política de Cookies'
      },
      auth: {
        signIn: 'Iniciar sesión'
      },
      home: {
        hero: {
          title: 'Nunca te Sientas Solo con tus Emociones',
          subtitle: 'Rastrea tu estado de ánimo, chatea con tu compañero de IA y obtén información sobre tu bienestar emocional.',
          privacy: 'Tus datos son privados y seguros'
        },
        cta: {
          trial: 'Comenzar Prueba Gratuita',
          demo: 'Ver Demo'
        },
        features: {
          mood: {
            title: 'Seguimiento Diario del Estado de Ánimo',
            desc: 'Seguimiento rápido y simple basado en emojis. Registra cómo te sientes en segundos.'
          },
          ai: {
            title: 'Compañero de IA',
            desc: 'Chatea con tu compañero de IA personal para apoyo emocional e información.'
          },
          insights: {
            title: 'Perspectivas Emocionales',
            desc: 'Comprende tus patrones y tendencias con hermosas visualizaciones.'
          }
        },
        pricing: {
          title: 'Precios Simples y Transparentes',
          subtitle: 'Comienza gratis, actualiza cuando estés listo',
          free: {
            title: 'Gratis',
            feature1: 'Seguimiento diario del estado de ánimo',
            feature2: '5 mensajes de IA por día',
            feature3: 'Información básica',
            button: 'Comenzar'
          },
          premium: {
            title: 'Premium',
            badge: 'POPULAR',
            feature1: 'Seguimiento ilimitado del estado de ánimo',
            feature2: '10 mensajes de IA por día',
            feature3: 'Análisis avanzados',
            feature4: 'Exportar datos',
            button: 'Comenzar Prueba Gratuita'
          }
        },
        footer: '© 2025 Emotice. Tu compañero de bienestar emocional.'
      },
      dashboard: {
        mood: {
          question: '¿Cómo te sientes hoy?',
          labels: {
            terrible: 'Terrible',
            bad: 'Mal',
            okay: 'Regular',
            good: 'Bien',
            great: 'Genial'
          },
          noteLabel: 'Añadir una nota (opcional)',
          notePlaceholder: '¿Qué tienes en mente?',
          saveButton: 'Guardar Estado de Ánimo de Hoy'
        },
        stats: {
          dayStreak: 'Racha de Días',
          avgMood: 'Estado Promedio',
          thisWeek: 'Esta Semana'
        },
        entries: {
          title: 'Entradas Recientes',
          viewAll: 'Ver Todo',
          today: 'Hoy',
          yesterday: 'Ayer',
          daysAgo: 'días atrás'
        },
        toast: {
          selectMood: 'Por favor selecciona un estado de ánimo',
          selectMoodDesc: 'Elige cómo te sientes hoy',
          saved: 'Estado de ánimo guardado!',
          savedDesc: 'Tu estado de ánimo ha sido registrado para hoy.'
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
    supportedLngs: ['en', 'tr', 'es'],
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage']
    },
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;