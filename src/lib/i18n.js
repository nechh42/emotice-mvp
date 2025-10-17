// src/lib/i18n.js
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
        criticalWarningText: "EMOTICE is NOT a medical device. In emergencies, call 112 or 911.",
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
          badge: 'AI-Powered Wellness',
          title: {
            line1: 'Track Your',
            emotions: 'Emotions',
            line2: 'Improve Your Life'
          },
          subtitle: {
            part1: 'Join thousands building better mental health habits. Track moods, chat with AI, and connect with your partner through',
            emotice: 'EMOTICE MIRROR',
            part2: '.'
          },
          cta: {
            trial: 'Start Free Trial',
            demo: 'View Demo'
          },
          benefits: {
            nocard: 'No credit card',
            freeplan: 'Free forever plan',
            cancel: 'Cancel anytime'
          },
          demo: {
            title: 'Live Demo',
            subtitle: 'Interactive mood tracking dashboard'
          },
          rating: '4.9/5',
          users: '10K+ Users',
          privacy: 'Your data is private and secure'
        },
        stats: {
          users: '10K+',
          usersLabel: 'Active Users',
          entries: '1M+',
          entriesLabel: 'Mood Entries',
          rating: '4.9★',
          ratingLabel: 'User Rating',
          support: '24/7',
          supportLabel: 'AI Support'
        },
        mirror: {
          badge: 'Unique Feature',
          title: 'Introducing',
          emotice: 'EMOTICE MIRROR',
          subtitle: "Connect with your partner and understand each other's emotional patterns like never before",
          features: {
            partner: {
              title: 'Partner Sync',
              desc: 'Share your emotional journey with your partner in real-time'
            },
            pattern: {
              title: 'AI Pattern Analysis',
              desc: 'Discover emotional patterns and understand relationship dynamics'
            },
            insights: {
              title: 'Shared Insights',
              desc: 'Get personalized recommendations for better communication'
            }
          },
          visual: {
            title: 'Mirror Dashboard',
            subtitle: 'Demo visualization'
          }
        },
        features: {
          title: 'Everything You Need',
          subtitle: 'Comprehensive tools for emotional wellness and better mental health',
          grid: {
            mood: {
              title: 'Daily Mood Tracking',
              desc: 'Quick emoji-based tracking. Record how you feel in seconds with our intuitive interface.'
            },
            ai: {
              title: 'AI Wellness Companion',
              desc: 'Chat with GPT-4 powered AI for emotional support and personalized insights.'
            },
            analytics: {
              title: 'Advanced Analytics',
              desc: 'Visualize patterns, track progress, and understand your emotional journey.'
            },
            privacy: {
              title: 'Privacy First',
              desc: 'Your data is encrypted and secure. We never share your personal information.'
            },
            language: {
              title: 'Multi-Language',
              desc: 'Available in 6 languages. Use EMOTICE in your preferred language.'
            },
            gdpr: {
              title: 'GDPR Compliant',
              desc: 'Fully compliant with GDPR and data protection regulations.'
            }
          }
        },
        pricing: {
          title: 'Simple, Transparent Pricing',
          subtitle: "Start free, upgrade when you're ready. No credit card required.",
          free: {
            title: 'Free',
            price: '$0',
            period: '/forever',
            description: 'Perfect for getting started',
            features: {
              mood: 'Daily mood tracking',
              ai: '15 AI messages per day',
              insights: 'Basic insights & analytics',
              partner: '1 partner connection'
            },
            cta: 'Get Started Free'
          },
          premium: {
            title: 'Premium',
            badge: 'POPULAR',
            price: '$7.99',
            period: '/month',
            description: 'For serious wellness enthusiasts',
            features: {
              included: 'Everything in Free, plus:',
              mood: 'Unlimited mood tracking',
              ai: '100 AI messages per day',
              pattern: 'Advanced AI pattern analysis',
              export: 'Export your data (CSV/PDF)',
              support: 'Priority support'
            },
            cta: 'Start 7-Day Free Trial',
            note: 'Cancel anytime. No questions asked.'
          },
          options: {
            title: 'Save More with Longer Plans',
            '1month': {
              title: '1 Month',
              price: '$7.99',
              note: 'per month'
            },
            '3months': {
              title: '3 Months',
              price: '$20.99',
              note: '$6.99/month',
              save: 'SAVE 12%'
            },
            '6months': {
              title: '6 Months',
              price: '$38.99',
              note: '$6.49/month',
              save: 'SAVE 18%'
            }
          }
        },
        cta: {
          title: 'Ready to Transform Your Emotional Wellness?',
          subtitle: 'Join 10,000+ users who are already improving their mental health with EMOTICE',
          buttons: {
            trial: 'Start Free Trial',
            demo: 'View Demo'
          },
          benefits: '✓ No credit card required  ✓ 7-day free trial  ✓ Cancel anytime'
        },
        footer: {
          description: 'Your emotional wellness companion. Track, understand, and improve your mental health.',
          product: {
            title: 'Product',
            features: 'Features',
            pricing: 'Pricing',
            demo: 'Demo'
          },
          legal: {
            title: 'Legal',
            terms: 'Terms of Service',
            privacy: 'Privacy Policy',
            medical: 'Medical Disclaimer',
            cookie: 'Cookie Policy'
          },
          support: {
            title: 'Support',
            contact: 'Contact Us',
            help: 'Help Center',
            faq: 'FAQ'
          },
          copyright: '© 2025 EMOTICE. All rights reserved.',
          gdpr: 'GDPR Compliant'
        }
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
          saveButton: "Save Today's Mood"
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
      },
      crisis: {
        suicide: {
          title: '🚨 EMERGENCY - Get Help Now',
          message: "EMOTICE is NOT a medical device. In an emergency call your local emergency number or seek immediate professional assistance."
        },
        selfHarm: {
          title: '🆘 Immediate Support Needed',
          message: 'Please seek professional help. If you are at immediate risk of harming yourself, contact emergency services or a crisis hotline right away.'
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
          badge: 'AI Destekli Sağlık',
          title: {
            line1: 'Duygularınızı',
            emotions: 'Takip Edin',
            line2: 'Hayatınızı İyileştirin'
          },
          subtitle: {
            part1: 'Binlerce kişiye daha iyi zihinsel sağlık alışkanlıkları oluşturma yolculuğunda katılın. Ruh halinizi takip edin, AI ile sohbet edin ve partnerinizle',
            emotice: 'EMOTICE MIRROR',
            part2: 'aracılığıyla bağlanın.'
          },
          cta: {
            trial: 'Ücretsiz Denemeyi Başlat',
            demo: 'Demoyu Görüntüle'
          },
          benefits: {
            nocard: 'Kredi kartı gerekmez',
            freeplan: 'Sonsuz ücretsiz plan',
            cancel: 'İstediğiniz zaman iptal'
          },
          demo: {
            title: 'Canlı Demo',
            subtitle: 'Etkileşimli ruh hali takip paneli'
          },
          rating: '4.9/5',
          users: '10K+ Kullanıcı',
          privacy: 'Verileriniz gizli ve güvende'
        },
        stats: {
          users: '10K+',
          usersLabel: 'Aktif Kullanıcı',
          entries: '1M+',
          entriesLabel: 'Ruh Hali Kaydı',
          rating: '4.9★',
          ratingLabel: 'Kullanıcı Puanı',
          support: '7/24',
          supportLabel: 'AI Desteği'
        },
        mirror: {
          badge: 'Benzersiz Özellik',
          title: 'Tanıtıyoruz',
          emotice: 'EMOTICE MIRROR',
          subtitle: 'Partnerinizle bağlanın ve birbirinizin duygusal modellerini hiç olmadığı kadar iyi anlayın',
          features: {
            partner: {
              title: 'Partner Senkronizasyonu',
              desc: 'Duygusal yolculuğunuzu partnerinizle gerçek zamanlı paylaşın'
            },
            pattern: {
              title: 'AI Model Analizi',
              desc: 'Duygusal modelleri keşfedin ve ilişki dinamiklerini anlayın'
            },
            insights: {
              title: 'Paylaşılan İçgörüler',
              desc: 'Daha iyi iletişim için kişiselleştirilmiş öneriler alın'
            }
          },
          visual: {
            title: 'Ayna Paneli',
            subtitle: 'Demo görselleştirme'
          }
        },
        features: {
          title: 'İhtiyacınız Olan Her Şey',
          subtitle: 'Duygusal sağlık ve daha iyi zihinsel sağlık için kapsamlı araçlar',
          grid: {
            mood: {
              title: 'Günlük Ruh Hali Takibi',
              desc: 'Hızlı emoji tabanlı takip. Saniyeler içinde nasıl hissettiğinizi kaydedin.'
            },
            ai: {
              title: 'AI Sağlık Asistanı',
              desc: 'Duygusal destek ve kişiselleştirilmiş içgörüler için GPT-4 destekli AI ile sohbet edin.'
            },
            analytics: {
              title: 'Gelişmiş Analitik',
              desc: 'Modelleri görselleyin, ilerlemeyi takip edin ve duygusal yolculuğunuzu anlayın.'
            },
            privacy: {
              title: 'Gizlilik Öncelikli',
              desc: 'Verileriniz şifrelenmiş ve güvende. Kişisel bilgilerinizi asla paylaşmayız.'
            },
            language: {
              title: 'Çok Dilli',
              desc: '6 dilde mevcut. EMOTICE\'ı tercih ettiğiniz dilde kullanın.'
            },
            gdpr: {
              title: 'GDPR Uyumlu',
              desc: 'GDPR ve veri koruma düzenlemelerine tam uyumludur.'
            }
          }
        },
        pricing: {
          title: 'Basit, Şeffaf Fiyatlandırma',
          subtitle: 'Ücretsiz başlayın, hazır olduğunuzda yükseltin. Kredi kartı gerekmez.',
          free: {
            title: 'Ücretsiz',
            price: '$0',
            period: '/sonsuza kadar',
            description: 'Başlangıç için mükemmel',
            features: {
              mood: 'Günlük ruh hali takibi',
              ai: 'Günde 15 AI mesajı',
              insights: 'Temel içgörüler ve analitik',
              partner: '1 partner bağlantısı'
            },
            cta: 'Ücretsiz Başla'
          },
          premium: {
            title: 'Premium',
            badge: 'POPÜLER',
            price: '$7.99',
            period: '/ay',
            description: 'Ciddi sağlık meraklıları için',
            features: {
              included: 'Ücretsiz\'deki her şey, artı:',
              mood: 'Sınırsız ruh hali takibi',
              ai: 'Günde 100 AI mesajı',
              pattern: 'Gelişmiş AI model analizi',
              export: 'Verilerinizi dışa aktarın (CSV/PDF)',
              support: 'Öncelikli destek'
            },
            cta: '7 Günlük Ücretsiz Denemeyi Başlat',
            note: 'İstediğiniz zaman iptal edin. Soru sorulmaz.'
          },
          options: {
            title: 'Uzun Planlarla Daha Fazla Tasarruf Edin',
            '1month': {
              title: '1 Ay',
              price: '$7.99',
              note: 'aylık'
            },
            '3months': {
              title: '3 Ay',
              price: '$20.99',
              note: '$6.99/ay',
              save: '%12 TASARRUF'
            },
            '6months': {
              title: '6 Ay',
              price: '$38.99',
              note: '$6.49/ay',
              save: '%18 TASARRUF'
            }
          }
        },
        cta: {
          title: 'Duygusal Sağlığınızı Dönüştürmeye Hazır mısınız?',
          subtitle: 'EMOTICE ile zihinsel sağlıklarını iyileştiren 10.000+ kullanıcıya katılın',
          buttons: {
            trial: 'Ücretsiz Denemeyi Başlat',
            demo: 'Demoyu Görüntüle'
          },
          benefits: '✓ Kredi kartı gerekmez  ✓ 7 günlük ücretsiz deneme  ✓ İstediğiniz zaman iptal'
        },
        footer: {
          description: 'Duygusal sağlık yol arkadaşınız. Takip edin, anlayın ve zihinsel sağlığınızı iyileştirin.',
          product: {
            title: 'Ürün',
            features: 'Özellikler',
            pricing: 'Fiyatlandırma',
            demo: 'Demo'
          },
          legal: {
            title: 'Yasal',
            terms: 'Kullanım Koşulları',
            privacy: 'Gizlilik Politikası',
            medical: 'Tıbbi Sorumluluk Reddi',
            cookie: 'Çerez Politikası'
          },
          support: {
            title: 'Destek',
            contact: 'Bize Ulaşın',
            help: 'Yardım Merkezi',
            faq: 'SSS'
          },
          copyright: '© 2025 EMOTICE. Tüm hakları saklıdır.',
          gdpr: 'GDPR Uyumlu'
        }
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
      },
      crisis: {
        suicide: {
          title: '🚨 ACİL DURUM - Hemen Yardım Alın',
          message: "EMOTICE tıbbi bir cihaz DEĞİLDİR. Acil durumlarda 112'yi arayın veya derhal profesyonel yardım alın."
        },
        selfHarm: {
          title: '🆘 Acil Destek Gerekli',
          message: 'Lütfen profesyonel yardım alın. Kendinize zarar verme riski varsa hemen acil servise veya kriz hattına başvurun.'
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
      legal: {
        terms: 'Términos de Servicio',
        privacy: 'Política de Privacidad',
        medical: 'Descargo de Responsabilidad Médica',
        cookie: 'Política de Cookies'
      },
      auth: {
        signIn: 'Iniciar Sesión'
      },
      home: {
        hero: {
          badge: 'Bienestar con IA',
          title: {
            line1: 'Rastrea Tus',
            emotions: 'Emociones',
            line2: 'Mejora Tu Vida'
          },
          subtitle: {
            part1: 'Únete a miles construyendo mejores hábitos de salud mental. Rastrea estados de ánimo, chatea con IA y conéctate con tu pareja a través de',
            emotice: 'EMOTICE MIRROR',
            part2: '.'
          },
          cta: {
            trial: 'Comenzar Prueba Gratuita',
            demo: 'Ver Demo'
          },
          benefits: {
            nocard: 'Sin tarjeta de crédito',
            freeplan: 'Plan gratuito para siempre',
            cancel: 'Cancela en cualquier momento'
          },
          demo: {
            title: 'Demo en Vivo',
            subtitle: 'Panel de seguimiento de estado de ánimo interactivo'
          },
          rating: '4.9/5',
          users: '10K+ Usuarios',
          privacy: 'Tus datos son privados y seguros'
        },
        stats: {
          users: '10K+',
          usersLabel: 'Usuarios Activos',
          entries: '1M+',
          entriesLabel: 'Registros de Estado de Ánimo',
          rating: '4.9★',
          ratingLabel: 'Calificación de Usuarios',
          support: '24/7',
          supportLabel: 'Soporte de IA'
        },
        mirror: {
          badge: 'Característica Única',
          title: 'Presentando',
          emotice: 'EMOTICE MIRROR',
          subtitle: 'Conéctate con tu pareja y entiende los patrones emocionales del otro como nunca antes',
          features: {
            partner: {
              title: 'Sincronización de Pareja',
              desc: 'Comparte tu viaje emocional con tu pareja en tiempo real'
            },
            pattern: {
              title: 'Análisis de Patrones con IA',
              desc: 'Descubre patrones emocionales y comprende la dinámica de la relación'
            },
            insights: {
              title: 'Ideas Compartidas',
              desc: 'Obtén recomendaciones personalizadas para una mejor comunicación'
            }
          },
          visual: {
            title: 'Panel Espejo',
            subtitle: 'Visualización de demo'
          }
        },
        features: {
          title: 'Todo Lo Que Necesitas',
          subtitle: 'Herramientas integrales para el bienestar emocional y una mejor salud mental',
          grid: {
            mood: {
              title: 'Seguimiento Diario de Estado de Ánimo',
              desc: 'Seguimiento rápido basado en emojis. Registra cómo te sientes en segundos con nuestra interfaz intuitiva.'
            },
            ai: {
              title: 'Compañero de Bienestar con IA',
              desc: 'Chatea con IA potenciada por GPT-4 para apoyo emocional e ideas personalizadas.'
            },
            analytics: {
              title: 'Análisis Avanzados',
              desc: 'Visualiza patrones, rastrea el progreso y comprende tu viaje emocional.'
            },
            privacy: {
              title: 'Privacidad Primero',
              desc: 'Tus datos están encriptados y seguros. Nunca compartimos tu información personal.'
            },
            language: {
              title: 'Multilenguaje',
              desc: 'Disponible en 6 idiomas. Usa EMOTICE en tu idioma preferido.'
            },
            gdpr: {
              title: 'Cumple con GDPR',
              desc: 'Totalmente compatible con GDPR y regulaciones de protección de datos.'
            }
          }
        },
        pricing: {
          title: 'Precios Sencillos y Transparentes',
          subtitle: 'Comienza gratis, actualiza cuando estés listo. No se requiere tarjeta de crédito.',
          free: {
            title: 'Gratis',
            price: '$0',
            period: '/para siempre',
            description: 'Perfecto para comenzar',
            features: {
              mood: 'Seguimiento diario de estado de ánimo',
              ai: '15 mensajes de IA por día',
              insights: 'Ideas y análisis básicos',
              partner: '1 conexión de pareja'
            },
            cta: 'Comenzar Gratis'
          },
          premium: {
            title: 'Premium',
            badge: 'POPULAR',
            price: '$7.99',
            period: '/mes',
            description: 'Para entusiastas serios del bienestar',
            features: {
              included: 'Todo en Gratis, más:',
              mood: 'Seguimiento ilimitado de estado de ánimo',
              ai: '100 mensajes de IA por día',
              pattern: 'Análisis avanzado de patrones con IA',
              export: 'Exporta tus datos (CSV/PDF)',
              support: 'Soporte prioritario'
            },
            cta: 'Comenzar Prueba Gratuita de 7 Días',
            note: 'Cancela en cualquier momento. Sin preguntas.'
          },
          options: {
            title: 'Ahorra Más con Planes Más Largos',
            '1month': {
              title: '1 Mes',
              price: '$7.99',
              note: 'por mes'
            },
            '3months': {
              title: '3 Meses',
              price: '$20.99',
              note: '$6.99/mes',
              save: 'AHORRA 12%'
            },
            '6months': {
              title: '6 Meses',
              price: '$38.99',
              note: '$6.49/mes',
              save: 'AHORRA 18%'
            }
          }
        },
        cta: {
          title: '¿Listo para Transformar Tu Bienestar Emocional?',
          subtitle: 'Únete a 10,000+ usuarios que ya están mejorando su salud mental con EMOTICE',
          buttons: {
            trial: 'Comenzar Prueba Gratuita',
            demo: 'Ver Demo'
          },
          benefits: '✓ Sin tarjeta de crédito requerida  ✓ Prueba gratuita de 7 días  ✓ Cancela en cualquier momento'
        },
        footer: {
          description: 'Tu compañero de bienestar emocional. Rastrea, comprende y mejora tu salud mental.',
          product: {
            title: 'Producto',
            features: 'Características',
            pricing: 'Precios',
            demo: 'Demo'
          },
          legal: {
            title: 'Legal',
            terms: 'Términos de Servicio',
            privacy: 'Política de Privacidad',
            medical: 'Descargo de Responsabilidad Médica',
            cookie: 'Política de Cookies'
          },
          support: {
            title: 'Soporte',
            contact: 'Contáctanos',
            help: 'Centro de Ayuda',
            faq: 'Preguntas Frecuentes'
          },
          copyright: '© 2025 EMOTICE. Todos los derechos reservados.',
          gdpr: 'Cumple con GDPR'
        }
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
          },
          noteLabel: 'Agregar una nota (opcional)',
          notePlaceholder: '¿Qué tienes en mente?',
          saveButton: 'Guardar estado de ánimo de hoy'
        },
        stats: {
          dayStreak: 'Racha de días',
          avgMood: 'Estado medio',
          thisWeek: 'Esta semana'
        },
        entries: {
          title: 'Entradas recientes',
          viewAll: 'Ver todas',
          today: 'Hoy',
          yesterday: 'Ayer',
          daysAgo: 'hace días'
        },
        chat: {
          moodSummary: 'Resumen de estado de ánimo',
          currentMood: 'Estado actual',
          noData: 'Aún no hay datos',
          recentPatterns: 'Patrones recientes',
          tips: 'Consejos rápidos',
          tip1: 'Comparte tus sentimientos abiertamente',
          tip2: 'Pregunta sobre patrones de estado de ánimo',
          tip3: 'Obtén sugerencias de bienestar'
        },
        toast: {
          selectMood: 'Por favor selecciona un estado de ánimo',
          selectMoodDesc: 'Elige cómo te sientes hoy',
          saved: '¡Estado guardado!',
          savedDesc: 'Tu estado de ánimo ha sido registrado para hoy.'
        }
      },
      crisis: {
        suicide: {
          title: '🚨 EMERGENCIA - Busque ayuda ahora',
          message: 'EMOTICE NO es un dispositivo médico. En caso de emergencia, llame a los servicios de emergencia locales o busque asistencia profesional inmediata.'
        },
        selfHarm: {
          title: '🆘 Se necesita apoyo inmediato',
          message: 'Por favor, busque ayuda profesional. Si corre riesgo de autolesionarse, contacte a los servicios de emergencia o a una línea de crisis de inmediato.'
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
      legal: {
        terms: 'Conditions d\'Utilisation',
        privacy: 'Politique de Confidentialité',
        medical: 'Avertissement Médical',
        cookie: 'Politique des Cookies'
      },
      auth: {
        signIn: 'Se Connecter'
      },
      home: {
        hero: {
          badge: 'Bien-être avec IA',
          title: {
            line1: 'Suivez Vos',
            emotions: 'Émotions',
            line2: 'Améliorez Votre Vie'
          },
          subtitle: {
            part1: 'Rejoignez des milliers de personnes qui développent de meilleures habitudes de santé mentale. Suivez vos humeurs, discutez avec l\'IA et connectez-vous avec votre partenaire grâce à',
            emotice: 'EMOTICE MIRROR',
            part2: '.'
          },
          cta: {
            trial: 'Commencer l\'Essai Gratuit',
            demo: 'Voir la Démo'
          },
          benefits: {
            nocard: 'Aucune carte de crédit',
            freeplan: 'Plan gratuit à vie',
            cancel: 'Annulez à tout moment'
          },
          demo: {
            title: 'Démo en Direct',
            subtitle: 'Tableau de bord interactif de suivi de l\'humeur'
          },
          rating: '4.9/5',
          users: '10K+ Utilisateurs',
          privacy: 'Vos données sont privées et sécurisées'
        },
        stats: {
          users: '10K+',
          usersLabel: 'Utilisateurs Actifs',
          entries: '1M+',
          entriesLabel: 'Entrées d\'Humeur',
          rating: '4.9★',
          ratingLabel: 'Note des Utilisateurs',
          support: '24/7',
          supportLabel: 'Support IA'
        },
        mirror: {
          badge: 'Fonctionnalité Unique',
          title: 'Présentation de',
          emotice: 'EMOTICE MIRROR',
          subtitle: 'Connectez-vous avec votre partenaire et comprenez les schémas émotionnels de l\'autre comme jamais auparavant',
          features: {
            partner: {
              title: 'Synchronisation Partenaire',
              desc: 'Partagez votre parcours émotionnel avec votre partenaire en temps réel'
            },
            pattern: {
              title: 'Analyse des Schémas par IA',
              desc: 'Découvrez les schémas émotionnels et comprenez la dynamique relationnelle'
            },
            insights: {
              title: 'Insights Partagés',
              desc: 'Obtenez des recommandations personnalisées pour une meilleure communication'
            }
          },
          visual: {
            title: 'Tableau de Bord Miroir',
            subtitle: 'Visualisation de démonstration'
          }
        },
        features: {
          title: 'Tout Ce Dont Vous Avez Besoin',
          subtitle: 'Outils complets pour le bien-être émotionnel et une meilleure santé mentale',
          grid: {
            mood: {
              title: 'Suivi Quotidien de l\'Humeur',
              desc: 'Suivi rapide basé sur les émojis. Enregistrez votre humeur en quelques secondes avec notre interface intuitive.'
            },
            ai: {
              title: 'Compagnon de Bien-être IA',
              desc: 'Discutez avec l\'IA alimentée par GPT-4 pour un soutien émotionnel et des insights personnalisés.'
            },
            analytics: {
              title: 'Analyses Avancées',
              desc: 'Visualisez les schémas, suivez les progrès et comprenez votre parcours émotionnel.'
            },
            privacy: {
              title: 'Confidentialité d\'Abord',
              desc: 'Vos données sont cryptées et sécurisées. Nous ne partageons jamais vos informations personnelles.'
            },
            language: {
              title: 'Multilingue',
              desc: 'Disponible en 6 langues. Utilisez EMOTICE dans votre langue préférée.'
            },
            gdpr: {
              title: 'Conforme au RGPD',
              desc: 'Entièrement conforme au RGPD et aux réglementations sur la protection des données.'
            }
          }
        },
        pricing: {
          title: 'Tarification Simple et Transparente',
          subtitle: 'Commencez gratuitement, passez à la version premium quand vous êtes prêt. Aucune carte de crédit requise.',
          free: {
            title: 'Gratuit',
            price: '$0',
            period: '/pour toujours',
            description: 'Parfait pour commencer',
            features: {
              mood: 'Suivi quotidien de l\'humeur',
              ai: '15 messages IA par jour',
              insights: 'Insights et analyses de base',
              partner: '1 connexion partenaire'
            },
            cta: 'Commencer Gratuitement'
          },
          premium: {
            title: 'Premium',
            badge: 'POPULAIRE',
            price: '$7.99',
            period: '/mois',
            description: 'Pour les passionnés sérieux du bien-être',
            features: {
              included: 'Tout dans Gratuit, plus:',
              mood: 'Suivi illimité de l\'humeur',
              ai: '100 messages IA par jour',
              pattern: 'Analyse avancée des schémas par IA',
              export: 'Exportez vos données (CSV/PDF)',
              support: 'Support prioritaire'
            },
            cta: 'Commenter l\'Essai Gratuit de 7 Jours',
            note: 'Annulez à tout moment. Aucune question posée.'
          },
          options: {
            title: 'Économisez Plus avec des Plans Plus Longs',
            '1month': {
              title: '1 Mois',
              price: '$7.99',
              note: 'par mois'
            },
            '3months': {
              title: '3 Mois',
              price: '$20.99',
              note: '$6.99/mois',
              save: 'ÉCONOMISEZ 12%'
            },
            '6months': {
              title: '6 Mois',
              price: '$38.99',
              note: '$6.49/mois',
              save: 'ÉCONOMISEZ 18%'
            }
          }
        },
        cta: {
          title: 'Prêt à Transformer Votre Bien-être Émotionnel?',
          subtitle: 'Rejoignez 10 000+ utilisateurs qui améliorent déjà leur santé mentale avec EMOTICE',
          buttons: {
            trial: 'Commencer l\'Essai Gratuit',
            demo: 'Voir la Démo'
          },
          benefits: '✓ Aucune carte de crédit requise  ✓ Essai gratuit de 7 jours  ✓ Annulez à tout moment'
        },
        footer: {
          description: 'Votre compagnon de bien-être émotionnel. Suivez, comprenez et améliorez votre santé mentale.',
          product: {
            title: 'Produit',
            features: 'Fonctionnalités',
            pricing: 'Tarifs',
            demo: 'Démo'
          },
          legal: {
            title: 'Légal',
            terms: 'Conditions d\'Utilisation',
            privacy: 'Politique de Confidentialité',
            medical: 'Avertissement Médical',
            cookie: 'Politique des Cookies'
          },
          support: {
            title: 'Support',
            contact: 'Contactez-nous',
            help: 'Centre d\'Aide',
            faq: 'FAQ'
          },
          copyright: '© 2025 EMOTICE. Tous droits réservés.',
          gdpr: 'Conforme au RGPD'
        }
      },
      dashboard: {
        tabs: {
          moodTracking: 'Suivi de l\'Humeur',
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
          },
          noteLabel: 'Ajouter une note (optionnel)',
          notePlaceholder: 'À quoi pensez-vous ?',
          saveButton: 'Enregistrer l\'humeur du jour'
        },
        stats: {
          dayStreak: 'Série de jours',
          avgMood: 'Humeur moyenne',
          thisWeek: 'Cette semaine'
        },
        entries: {
          title: 'Entrées récentes',
          viewAll: 'Voir tout',
          today: 'Aujourd\'hui',
          yesterday: 'Hier',
          daysAgo: 'jours plus tôt'
        },
        chat: {
          moodSummary: 'Résumé de l\'humeur',
          currentMood: 'Humeur actuelle',
          noData: 'Aucune donnée pour le moment',
          recentPatterns: 'Tendances récentes',
          tips: 'Astuces rapides',
          tip1: 'Partagez vos sentiments ouvertement',
          tip2: 'Demandez des tendances d\'humeur',
          tip3: 'Obtenez des suggestions de bien-être'
        },
        toast: {
          selectMood: 'Veuillez sélectionner une humeur',
          selectMoodDesc: 'Choisissez comment vous vous sentez aujourd\'hui',
          saved: 'Humeur enregistrée !',
          savedDesc: 'Votre humeur a été enregistrée pour aujourd\'hui.'
        }
      },
      crisis: {
        suicide: {
          title: '🚨 URGENCE - Obtenez de l\'aide maintenant',
          message: 'EMOTICE N\'est PAS un dispositif médical. En cas d\'urgence, appelez les secours locaux ou demandez une aide professionnelle immédiatement.'
        },
        selfHarm: {
          title: '🆘 Besoin de soutien immédiat',
          message: 'Veuillez consulter un professionnel. Si vous risquez de vous faire du mal, contactez immédiatement les services d\'urgence ou une ligne d\'assistance en crise.'
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
      legal: {
        terms: 'Условия использования',
        privacy: 'Политика конфиденциальности',
        medical: 'Медицинская оговорка',
        cookie: 'Политика файлов cookie'
      },
      auth: {
        signIn: 'Войти'
      },
      home: {
        hero: {
          badge: 'Благополучие с ИИ',
          title: {
            line1: 'Отслеживайте свои',
            emotions: 'Эмоции',
            line2: 'Улучшайте свою жизнь'
          },
          subtitle: {
            part1: 'Присоединяйтесь к тысячам, формирующим лучшие привычки психического здоровья. Отслеживайте настроение, общайтесь с ИИ и соединяйтесь с партнером через',
            emotice: 'EMOTICE MIRROR',
            part2: '.'
          },
          cta: {
            trial: 'Начать бесплатную пробную версию',
            demo: 'Посмотреть демо'
          },
          benefits: {
            nocard: 'Без кредитной карты',
            freeplan: 'Бесплатный план навсегда',
            cancel: 'Отмена в любое время'
          },
          demo: {
            title: 'Живая демонстрация',
            subtitle: 'Интерактивная панель отслеживания настроения'
          },
          rating: '4.9/5',
          users: '10K+ Пользователей',
          privacy: 'Ваши данные приватны и защищены'
        },
        stats: {
          users: '10K+',
          usersLabel: 'Активных пользователей',
          entries: '1M+',
          entriesLabel: 'Записей настроения',
          rating: '4.9★',
          ratingLabel: 'Рейтинг пользователей',
          support: '24/7',
          supportLabel: 'Поддержка ИИ'
        },
        mirror: {
          badge: 'Уникальная функция',
          title: 'Представляем',
          emotice: 'EMOTICE MIRROR',
          subtitle: 'Соединитесь с партнером и понимайте эмоциональные паттерны друг друга как никогда прежде',
          features: {
            partner: {
              title: 'Синхронизация с партнером',
              desc: 'Делитесь своим эмоциональным путешествием с партнером в реальном времени'
            },
            pattern: {
              title: 'Анализ паттернов ИИ',
              desc: 'Откройте эмоциональные паттерны и поймите динамику отношений'
            },
            insights: {
              title: 'Общие инсайты',
              desc: 'Получайте персонализированные рекомендации для лучшего общения'
            }
          },
          visual: {
            title: 'Зеркальная панель',
            subtitle: 'Демонстрационная визуализация'
          }
        },
        features: {
          title: 'Все, что вам нужно',
          subtitle: 'Комплексные инструменты для эмоционального благополучия и лучшего психического здоровья',
          grid: {
            mood: {
              title: 'Ежедневное отслеживание настроения',
              desc: 'Быстрое отслеживание на основе эмодзи. Записывайте свое состояние за секунды с помощью нашего интуитивного интерфейса.'
            },
            ai: {
              title: 'ИИ-компаньон для благополучия',
              desc: 'Общайтесь с ИИ на базе GPT-4 для эмоциональной поддержки и персонализированных инсайтов.'
            },
            analytics: {
              title: 'Расширенная аналитика',
              desc: 'Визуализируйте паттерны, отслеживайте прогресс и понимайте свое эмоциональное путешествие.'
            },
            privacy: {
              title: 'Конфиденциальность прежде всего',
              desc: 'Ваши данные зашифрованы и защищены. Мы никогда не передаем вашу личную информацию.'
            },
            language: {
              title: 'Многоязычный',
              desc: 'Доступно на 6 языках. Используйте EMOTICE на предпочитаемом языке.'
            },
            gdpr: {
              title: 'Соответствует GDPR',
              desc: 'Полностью соответствует GDPR и правилам защиты данных.'
            }
          }
        },
        pricing: {
          title: 'Простая и прозрачная цена',
          subtitle: 'Начните бесплатно, обновитесь, когда будете готовы. Кредитная карта не требуется.',
          free: {
            title: 'Бесплатно',
            price: '$0',
            period: '/навсегда',
            description: 'Идеально для начала',
            features: {
              mood: 'Ежедневное отслеживание настроения',
              ai: '15 сообщений ИИ в день',
              insights: 'Базовые инсайты и аналитика',
              partner: '1 подключение партнера'
            },
            cta: 'Начать бесплатно'
          },
          premium: {
            title: 'Премиум',
            badge: 'ПОПУЛЯРНО',
            price: '$7.99',
            period: '/месяц',
            description: 'Для серьезных энтузиастов благополучия',
            features: {
              included: 'Все в Бесплатно, плюс:',
              mood: 'Неограниченное отслеживание настроения',
              ai: '100 сообщений ИИ в день',
              pattern: 'Расширенный анализ паттернов ИИ',
              export: 'Экспортируйте свои данные (CSV/PDF)',
              support: 'Приоритетная поддержка'
            },
            cta: 'Начать 7-дневную бесплатную пробную версию',
            note: 'Отмена в любое время. Без вопросов.'
          },
          options: {
            title: 'Экономьте больше с длинными планами',
            '1month': {
              title: '1 Месяц',
              price: '$7.99',
              note: 'в месяц'
            },
            '3months': {
              title: '3 Месяца',
              price: '$20.99',
              note: '$6.99/месяц',
              save: 'ЭКОНОМИЯ 12%'
            },
            '6months': {
              title: '6 Месяцев',
              price: '$38.99',
              note: '$6.49/месяц',
              save: 'ЭКОНОМИЯ 18%'
            }
          }
        },
        cta: {
          title: 'Готовы преобразить свое эмоциональное благополучие?',
          subtitle: 'Присоединяйтесь к 10 000+ пользователям, которые уже улучшают свое психическое здоровье с EMOTICE',
          buttons: {
            trial: 'Начать бесплатную пробную версию',
            demo: 'Посмотреть демо'
          },
          benefits: '✓ Кредитная карта не требуется  ✓ 7-дневная бесплатная пробная версия  ✓ Отмена в любое время'
        },
        footer: {
          description: 'Ваш компаньон эмоционального благополучия. Отслеживайте, понимайте и улучшайте свое психическое здоровье.',
          product: {
            title: 'Продукт',
            features: 'Функции',
            pricing: 'Цены',
            demo: 'Демо'
          },
          legal: {
            title: 'Правовая',
            terms: 'Условия использования',
            privacy: 'Политика конфиденциальности',
            medical: 'Медицинская оговорка',
            cookie: 'Политика файлов cookie'
          },
          support: {
            title: 'Поддержка',
            contact: 'Свяжитесь с нами',
            help: 'Центр помощи',
            faq: 'ЧаВо'
          },
          copyright: '© 2025 EMOTICE. Все права защищены.',
          gdpr: 'Соответствует GDPR'
        }
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
          },
          noteLabel: 'Добавить заметку (необязательно)',
          notePlaceholder: 'Что у вас на уме?',
          saveButton: 'Сохранить настроение дня'
        },
        stats: {
          dayStreak: 'Серия дней',
          avgMood: 'Среднее настроение',
          thisWeek: 'На этой неделе'
        },
        entries: {
          title: 'Недавние записи',
          viewAll: 'Показать все',
          today: 'Сегодня',
          yesterday: 'Вчера',
          daysAgo: 'дней назад'
        },
        chat: {
          moodSummary: 'Сводка настроения',
          currentMood: 'Текущее настроение',
          noData: 'Данных пока нет',
          recentPatterns: 'Недавние тенденции',
          tips: 'Быстрые советы',
          tip1: 'Открыто делитесь своими чувствами',
          tip2: 'Спросите о закономерностях настроения',
          tip3: 'Получите советы по благополучию'
        },
        toast: {
          selectMood: 'Пожалуйста, выберите настроение',
          selectMoodDesc: 'Выберите, как вы себя чувствуете сегодня',
          saved: 'Настроение сохранено!',
          savedDesc: 'Ваше настроение записано на сегодня.'
        }
      },
      crisis: {
        suicide: {
          title: '🚨 АВАРИЙНАЯ СИТУАЦИЯ - Немедленно обратитесь за помощью',
          message: 'EMOTICE НЕ является медицинским устройством. В экстренных случаях звоните в экстренные службы вашего региона или немедленно обратитесь за профессиональной помощью.'
        },
        selfHarm: {
          title: '🆘 Требуется немедленная поддержка',
          message: 'Пожалуйста, обратитесь за профессиональной помощью. Если вы подвержены риску причинить себе вред, немедленно свяжитесь со службами экстренной помощи или кризисной линией.'
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
      legal: {
        terms: '服务条款',
        privacy: '隐私政策',
        medical: '医疗免责声明',
        cookie: 'Cookie 政策'
      },
      auth: {
        signIn: '登录'
      },
      home: {
        hero: {
          badge: 'AI 赋能健康',
          title: {
            line1: '追踪您的',
            emotions: '情绪',
            line2: '改善您的生活'
          },
          subtitle: {
            part1: '加入成千上万建立更好心理健康习惯的人群。追踪情绪，与 AI 聊天，并通过',
            emotice: 'EMOTICE MIRROR',
            part2: '与您的伴侣连接。'
          },
          cta: {
            trial: '开始免费试用',
            demo: '查看演示'
          },
          benefits: {
            nocard: '无需信用卡',
            freeplan: '永久免费计划',
            cancel: '随时取消'
          },
          demo: {
            title: '实时演示',
            subtitle: '交互式情绪追踪仪表板'
          },
          rating: '4.9/5',
          users: '10K+ 用户',
          privacy: '您的数据私密且安全'
        },
        stats: {
          users: '10K+',
          usersLabel: '活跃用户',
          entries: '1M+',
          entriesLabel: '情绪记录',
          rating: '4.9★',
          ratingLabel: '用户评分',
          support: '24/7',
          supportLabel: 'AI 支持'
        },
        mirror: {
          badge: '独特功能',
          title: '介绍',
          emotice: 'EMOTICE MIRROR',
          subtitle: '与您的伴侣连接，前所未有地理解彼此的情感模式',
          features: {
            partner: {
              title: '伴侣同步',
              desc: '实时与伴侣分享您的情感旅程'
            },
            pattern: {
              title: 'AI 模式分析',
              desc: '发现情感模式并理解关系动态'
            },
            insights: {
              title: '共享洞察',
              desc: '获得个性化建议以改善沟通'
            }
          },
          visual: {
            title: '镜像仪表板',
            subtitle: '演示可视化'
          }
        },
        features: {
          title: '您需要的一切',
          subtitle: '全面的情感健康和心理健康工具',
          grid: {
            mood: {
              title: '每日情绪追踪',
              desc: '快速的基于表情符号的追踪。通过我们直观的界面在几秒钟内记录您的感受。'
            },
            ai: {
              title: 'AI 健康伴侣',
              desc: '与 GPT-4 驱动的 AI 聊天，获得情感支持和个性化洞察。'
            },
            analytics: {
              title: '高级分析',
              desc: '可视化模式，跟踪进度，理解您的情感旅程。'
            },
            privacy: {
              title: '隐私优先',
              desc: '您的数据已加密且安全。我们从不分享您的个人信息。'
            },
            language: {
              title: '多语言',
              desc: '提供 6 种语言。使用您偏好的语言使用 EMOTICE。'
            },
            gdpr: {
              title: '符合 GDPR',
              desc: '完全符合 GDPR 和数据保护法规。'
            }
          }
        },
        pricing: {
          title: '简单透明的定价',
          subtitle: '免费开始，准备好时升级。无需信用卡。',
          free: {
            title: '免费',
            price: '$0',
            period: '/永久',
            description: '完美开始',
            features: {
              mood: '每日情绪追踪',
              ai: '每天 15 条 AI 消息',
              insights: '基本洞察和分析',
              partner: '1 个伴侣连接'
            },
            cta: '免费开始'
          },
          premium: {
            title: '高级版',
            badge: '热门',
            price: '$7.99',
            period: '/月',
            description: '适合认真的健康爱好者',
            features: {
              included: '免费版中的所有功能，加上：',
              mood: '无限情绪追踪',
              ai: '每天 100 条 AI 消息',
              pattern: '高级 AI 模式分析',
              export: '导出您的数据 (CSV/PDF)',
              support: '优先支持'
            },
            cta: '开始 7 天免费试用',
            note: '随时取消。不问问题。'
          },
          options: {
            title: '长期计划更省钱',
            '1month': {
              title: '1 个月',
              price: '$7.99',
              note: '每月'
            },
            '3months': {
              title: '3 个月',
              price: '$20.99',
              note: '$6.99/月',
              save: '节省 12%'
            },
            '6months': {
              title: '6 个月',
              price: '$38.99',
              note: '$6.49/月',
              save: '节省 18%'
            }
          }
        },
        cta: {
          title: '准备好改变您的情感健康了吗？',
          subtitle: '加入 10,000+ 已经在使用 EMOTICE 改善心理健康的用户',
          buttons: {
            trial: '开始免费试用',
            demo: '查看演示'
          },
          benefits: '✓ 无需信用卡  ✓ 7 天免费试用  ✓ 随时取消'
        },
        footer: {
          description: '您的情感健康伴侣。追踪、理解并改善您的心理健康。',
          product: {
            title: '产品',
            features: '功能',
            pricing: '价格',
            demo: '演示'
          },
          legal: {
            title: '法律',
            terms: '服务条款',
            privacy: '隐私政策',
            medical: '医疗免责声明',
            cookie: 'Cookie 政策'
          },
          support: {
            title: '支持',
            contact: '联系我们',
            help: '帮助中心',
            faq: '常见问题'
          },
          copyright: '© 2025 EMOTICE。保留所有权利。',
          gdpr: '符合 GDPR'
        }
      },
      dashboard: {
        tabs: {
          moodTracking: '情绪追踪',
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
          },
          noteLabel: '添加备注（可选）',
          notePlaceholder: '你在想什么？',
          saveButton: '保存今日情绪'
        },
        stats: {
          dayStreak: '连续天数',
          avgMood: '平均情绪',
          thisWeek: '本周'
        },
        entries: {
          title: '最近记录',
          viewAll: '查看全部',
          today: '今天',
          yesterday: '昨天',
          daysAgo: '天前'
        },
        chat: {
          moodSummary: '情绪总结',
          currentMood: '当前情绪',
          noData: '暂无数据',
          recentPatterns: '近期趋势',
          tips: '快速提示',
          tip1: '坦率表达你的感受',
          tip2: '了解情绪模式',
          tip3: '获取健康建议'
        },
        toast: {
          selectMood: '请选择一种情绪',
          selectMoodDesc: '选择你今天的感受',
          saved: '情绪已保存！',
          savedDesc: '今天的情绪记录已保存。'
        }
      },
      crisis: {
        suicide: {
          title: '🚨 紧急情况 - 立即寻求帮助',
          message: 'EMOTICE 不是医疗设备。如遇紧急情况，请拨打当地急救电话或立即寻求专业帮助。'
        },
        selfHarm: {
          title: '🆘 需要立即支持',
          message: '请寻求专业帮助。如果您有自伤风险，请立即联系急救服务或危机热线。'
        }
      }
    }
  },
  de: {
    translation: {
      common: {
        readHere: 'Hier lesen',
        loading: 'Lädt...',
        continue: 'Weiter',
        back: 'Zurück',
        skip: 'Überspringen'
      },
      nav: {
        home: 'Startseite',
        features: 'Funktionen',
        pricing: 'Preise',
        legal: 'Rechtliches'
      },
      legal: {
        terms: 'Nutzungsbedingungen',
        privacy: 'Datenschutzrichtlinie',
        medical: 'Medizinischer Haftungsausschluss',
        cookie: 'Cookie-Richtlinie'
      },
      auth: {
        signIn: 'Anmelden'
      },
      home: {
        hero: {
          badge: 'KI-gestütztes Wohlbefinden',
          title: {
            line1: 'Verfolgen Sie Ihre',
            emotions: 'Emotionen',
            line2: 'Verbessern Sie Ihr Leben'
          },
          subtitle: {
            part1: 'Schließen Sie sich Tausenden an, die bessere psychische Gesundheitsgewohnheiten aufbauen. Verfolgen Sie Stimmungen, chatten Sie mit KI und verbinden Sie sich mit Ihrem Partner durch',
            emotice: 'EMOTICE MIRROR',
            part2: '.'
          },
          cta: {
            trial: 'Kostenlose Testversion starten',
            demo: 'Demo ansehen'
          },
          benefits: {
            nocard: 'Keine Kreditkarte',
            freeplan: 'Kostenloser Plan für immer',
            cancel: 'Jederzeit kündbar'
          },
          demo: {
            title: 'Live-Demo',
            subtitle: 'Interaktives Stimmungs-Tracking-Dashboard'
          },
          rating: '4.9/5',
          users: '10K+ Nutzer',
          privacy: 'Ihre Daten sind privat und sicher'
        },
        stats: {
          users: '10K+',
          usersLabel: 'Aktive Nutzer',
          entries: '1M+',
          entriesLabel: 'Stimmungseinträge',
          rating: '4.9★',
          ratingLabel: 'Nutzerbewertung',
          support: '24/7',
          supportLabel: 'KI-Support'
        },
        mirror: {
          badge: 'Einzigartige Funktion',
          title: 'Einführung von',
          emotice: 'EMOTICE MIRROR',
          subtitle: 'Verbinden Sie sich mit Ihrem Partner und verstehen Sie die emotionalen Muster des anderen wie nie zuvor',
          features: {
            partner: {
              title: 'Partner-Synchronisation',
              desc: 'Teilen Sie Ihre emotionale Reise in Echtzeit mit Ihrem Partner'
            },
            pattern: {
              title: 'KI-Musteranalyse',
              desc: 'Entdecken Sie emotionale Muster und verstehen Sie Beziehungsdynamiken'
            },
            insights: {
              title: 'Gemeinsame Einblicke',
              desc: 'Erhalten Sie personalisierte Empfehlungen für bessere Kommunikation'
            }
          },
          visual: {
            title: 'Spiegel-Dashboard',
            subtitle: 'Demo-Visualisierung'
          }
        },
        features: {
          title: 'Alles, was Sie brauchen',
          subtitle: 'Umfassende Tools für emotionales Wohlbefinden und bessere psychische Gesundheit',
          grid: {
            mood: {
              title: 'Tägliche Stimmungsverfolgung',
              desc: 'Schnelles Emoji-basiertes Tracking. Zeichnen Sie Ihre Gefühle in Sekundenschnelle mit unserer intuitiven Oberfläche auf.'
            },
            ai: {
              title: 'KI-Wohlführ-Begleiter',
              desc: 'Chatten Sie mit GPT-4-gestützter KI für emotionale Unterstützung und personalisierte Einblicke.'
            },
            analytics: {
              title: 'Erweiterte Analysen',
              desc: 'Visualisieren Sie Muster, verfolgen Sie Fortschritte und verstehen Sie Ihre emotionale Reise.'
            },
            privacy: {
              title: 'Datenschutz zuerst',
              desc: 'Ihre Daten sind verschlüsselt und sicher. Wir geben Ihre persönlichen Daten niemals weiter.'
            },
            language: {
              title: 'Mehrsprachig',
              desc: 'In 6 Sprachen verfügbar. Verwenden Sie EMOTICE in Ihrer bevorzugten Sprache.'
            },
            gdpr: {
              title: 'DSGVO-konform',
              desc: 'Vollständig konform mit DSGVO und Datenschutzbestimmungen.'
            }
          }
        },
        pricing: {
          title: 'Einfache, transparente Preisgestaltung',
          subtitle: 'Kostenlos starten, upgraden wenn Sie bereit sind. Keine Kreditkarte erforderlich.',
          free: {
            title: 'Kostenlos',
            price: '$0',
            period: '/für immer',
            description: 'Perfekt für den Start',
            features: {
              mood: 'Tägliche Stimmungsverfolgung',
              ai: '15 KI-Nachrichten pro Tag',
              insights: 'Grundlegende Einblicke & Analysen',
              partner: '1 Partnerverbindung'
            },
            cta: 'Kostenlos starten'
          },
          premium: {
            title: 'Premium',
            badge: 'BELIEBT',
            price: '$7.99',
            period: '/Monat',
            description: 'Für ernsthafte Wellness-Enthusiasten',
            features: {
              included: 'Alles in Kostenlos, plus:',
              mood: 'Unbegrenzte Stimmungsverfolgung',
              ai: '100 KI-Nachrichten pro Tag',
              pattern: 'Erweiterte KI-Musteranalyse',
              export: 'Exportieren Sie Ihre Daten (CSV/PDF)',
              support: 'Priorisierter Support'
            },
            cta: '7-Tage kostenlose Testversion starten',
            note: 'Jederzeit kündbar. Keine Fragen.'
          },
          options: {
            title: 'Sparen Sie mehr mit längeren Plänen',
            '1month': {
              title: '1 Monat',
              price: '$7.99',
              note: 'pro Monat'
            },
            '3months': {
              title: '3 Monate',
              price: '$20.99',
              note: '$6.99/Monat',
              save: '12% SPAREN'
            },
            '6months': {
              title: '6 Monate',
              price: '$38.99',
              note: '$6.49/Monat',
              save: '18% SPAREN'
            }
          }
        },
        cta: {
          title: 'Bereit, Ihr emotionales Wohlbefinden zu transformieren?',
          subtitle: 'Schließen Sie sich 10.000+ Nutzern an, die bereits ihre psychische Gesundheit mit EMOTICE verbessern',
          buttons: {
            trial: 'Kostenlose Testversion starten',
            demo: 'Demo ansehen'
          },
          benefits: '✓ Keine Kreditkarte erforderlich  ✓ 7-tägige kostenlose Testversion  ✓ Jederzeit kündbar'
        },
        footer: {
          description: 'Ihr Begleiter für emotionales Wohlbefinden. Verfolgen, verstehen und verbessern Sie Ihre psychische Gesundheit.',
          product: {
            title: 'Produkt',
            features: 'Funktionen',
            pricing: 'Preise',
            demo: 'Demo'
          },
          legal: {
            title: 'Rechtliches',
            terms: 'Nutzungsbedingungen',
            privacy: 'Datenschutzrichtlinie',
            medical: 'Medizinischer Haftungsausschluss',
            cookie: 'Cookie-Richtlinie'
          },
          support: {
            title: 'Support',
            contact: 'Kontaktieren Sie uns',
            help: 'Hilfe-Center',
            faq: 'FAQ'
          },
          copyright: '© 2025 EMOTICE. Alle Rechte vorbehalten.',
          gdpr: 'DSGVO-konform'
        }
      },
      dashboard: {
        tabs: {
          moodTracking: 'Stimmungsverfolgung',
          aiCompanion: 'KI-Begleiter'
        },
        mood: {
          question: 'Wie fühlen Sie sich heute?',
          labels: {
            terrible: 'Furchtbar',
            bad: 'Schlecht',
            okay: 'Okay',
            good: 'Gut',
            great: 'Großartig'
          },
          noteLabel: 'Notiz hinzufügen (optional)',
          notePlaceholder: 'Was geht Ihnen durch den Kopf?',
          saveButton: 'Heutige Stimmung speichern'
        },
        stats: {
          dayStreak: 'Tagesserie',
          avgMood: 'Durchschn. Stimmung',
          thisWeek: 'Diese Woche'
        },
        entries: {
          title: 'Letzte Einträge',
          viewAll: 'Alle anzeigen',
          today: 'Heute',
          yesterday: 'Gestern',
          daysAgo: 'Tage zuvor'
        },
        chat: {
          moodSummary: 'Stimmungsübersicht',
          currentMood: 'Aktuelle Stimmung',
          noData: 'Noch keine Daten',
          recentPatterns: 'Aktuelle Muster',
          tips: 'Schnelle Tipps',
          tip1: 'Teilen Sie Ihre Gefühle offen',
          tip2: 'Fragen Sie nach Stimmungsmustern',
          tip3: 'Holen Sie sich Wohlfühlvorschläge'
        },
        toast: {
          selectMood: 'Bitte wählen Sie eine Stimmung aus',
          selectMoodDesc: 'Wählen Sie, wie Sie sich heute fühlen',
          saved: 'Stimmung gespeichert!',
          savedDesc: 'Ihre heutige Stimmung wurde aufgezeichnet.'
        }
      },
      crisis: {
        suicide: {
          title: '🚨 NOTFALL - Holen Sie jetzt Hilfe',
          message: 'EMOTICE ist KEIN medizinisches Gerät. In einem Notfall rufen Sie die örtlichen Notdienste an oder suchen Sie umgehend professionelle Hilfe.'
        },
        selfHarm: {
          title: '🆘 Sofortige Unterstützung erforderlich',
          message: 'Bitte suchen Sie professionelle Hilfe. Wenn eine unmittelbare Gefahr besteht, sich selbst zu verletzen, kontaktieren Sie sofort die Notdienste oder eine Krisenhotline.'
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
    supportedLngs: ['en', 'tr', 'es', 'fr', 'ru', 'zh', 'de'],
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage']
    },
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
