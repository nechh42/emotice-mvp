// src/lib/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Translation resources
const resources = {
  en: {
    translation: {
      // Common
      common: {
        loading: 'Loading...',
        save: 'Save',
        cancel: 'Cancel',
        continue: 'Continue',
        back: 'Back',
        next: 'Next',
        submit: 'Submit',
        close: 'Close',
        delete: 'Delete',
        edit: 'Edit',
        search: 'Search',
        filter: 'Filter',
        export: 'Export',
        import: 'Import',
        yes: 'Yes',
        no: 'No',
        error: 'Error',
        success: 'Success',
        warning: 'Warning',
        info: 'Information'
      },
      
      // Home page
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
          subtitle: 'Start free, upgrade when you\'re ready',
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

      // Navigation
      nav: {
        home: 'Home',
        dashboard: 'Dashboard',
        mood: 'Mood',
        analytics: 'Analytics',
        partner: 'Partner',
        settings: 'Settings',
        legal: 'Legal',
        logout: 'Logout',
        login: 'Login',
        register: 'Register',
        features: 'Features',  
        pricing: 'Pricing', 
      },

      // Auth
      auth: {
        email: 'Email',
        password: 'Password',
        confirmPassword: 'Confirm Password',
        forgotPassword: 'Forgot Password?',
        resetPassword: 'Reset Password',
        createAccount: 'Create Account',
        alreadyHaveAccount: 'Already have an account?',
        dontHaveAccount: "Don't have an account?",
        signIn: 'Sign In',
        signUp: 'Sign Up',
        signOut: 'Sign Out',
        verifyEmail: 'Verify Email',
        checkEmail: 'Check your email for verification link'
      },

      // Onboarding
      onboarding: {
        welcome: 'Welcome to EMOTICE',
        subtitle: 'Your AI-powered mood companion',
        letsGetStarted: "Let's get started",
        ageVerification: 'Age Verification',
        ageVerificationText: 'You must be 16 years or older to use EMOTICE',
        iAmOver16: 'I am 16 years or older',
        consent: 'Consent & Legal',
        consentText: 'Please review and accept our terms',
        iAcceptTerms: 'I accept the Terms of Service',
        iAcceptPrivacy: 'I accept the Privacy Policy',
        iUnderstandDisclaimer: 'I understand EMOTICE is not medical advice',
        surveyTitle: 'Tell us about yourself',
        surveySubtitle: 'This helps us personalize your experience (3-5 minutes)',
        skipSurvey: 'Skip for now',
        completeSurvey: 'Complete Survey',
        almostDone: 'Almost done!',
        setupComplete: 'Setup Complete'
      },

      // Mood
      mood: {
        howAreYouFeeling: 'How are you feeling?',
        selectMood: 'Select your mood',
        addNote: 'Add a note (optional)',
        notePlaceholder: 'What happened today? What are you thinking about?',
        saveMood: 'Save Mood',
        moodSaved: 'Mood saved successfully',
        moodHistory: 'Mood History',
        noMoods: 'No moods recorded yet',
        streak: 'Day Streak',
        average: 'Average Mood',
        lastWeek: 'Last 7 Days',
        lastMonth: 'Last 30 Days',
        moodEmojis: {
          terrible: 'Terrible',
          bad: 'Bad',
          okay: 'Okay',
          good: 'Good',
          amazing: 'Amazing'
        }
      },

      // Partner
      partner: {
        title: 'Partner Sharing',
        subtitle: 'Share your mood with someone you trust',
        invitePartner: 'Invite Partner',
        partnerEmail: "Partner's Email",
        sendInvite: 'Send Invite',
        pending: 'Invitation Pending',
        accepted: 'Partner Connected',
        declined: 'Invitation Declined',
        noPartner: 'No partner yet',
        inviteSent: 'Invitation sent successfully',
        viewPartnerMood: "View Partner's Mood",
        yourMood: 'Your Mood',
        partnerMood: "Partner's Mood",
        bothFeeling: 'Both of you are feeling',
        disconnect: 'Disconnect Partner',
        confirmDisconnect: 'Are you sure you want to disconnect?'
      },

      // AI Chat
      ai: {
        title: 'AI Companion',
        subtitle: 'Chat with your AI wellness companion',
        placeholder: 'Type your message...',
        send: 'Send',
        thinking: 'AI is thinking...',
        disclaimer: 'AI provides wellness support, not medical advice',
        dailyLimit: 'Daily message limit',
        limitReached: 'Daily limit reached. Upgrade to Premium for more.',
        upgradeToPremium: 'Upgrade to Premium'
      },

      // Settings
      settings: {
        title: 'Settings',
        profile: 'Profile',
        notifications: 'Notifications',
        privacy: 'Privacy',
        language: 'Language',
        theme: 'Theme',
        account: 'Account',
        deleteAccount: 'Delete Account',
        deleteAccountWarning: 'This action cannot be undone',
        exportData: 'Export My Data',
        downloadData: 'Download Data',
        dataExported: 'Data exported successfully'
      },

      // Legal
      legal: {
        terms: 'Terms of Service',
        privacy: 'Privacy Policy',
        disclaimer: 'Medical Disclaimer',
        cookies: 'Cookie Policy',
        backToHome: 'Back to Home',
        lastUpdated: 'Last updated',
        version: 'Version'
      },

      // Emergency
      emergency: {
        title: 'Emergency Resources',
        subtitle: 'If you are in crisis, please seek immediate help',
        crisis: 'Crisis',
        turkey: 'Turkey: 112 (Emergency), 182 (Health)',
        usa: 'USA: 911 (Emergency), 988 (Suicide Hotline)',
        europe: 'Europe: 112 (Emergency), 116 123 (Helpline)',
        disclaimer: 'EMOTICE is not for emergencies. Call emergency services immediately.'
      },

      // Premium
      premium: {
        title: 'Upgrade to Premium',
        subtitle: 'Unlock all features',
        features: {
          unlimited: 'Unlimited mood entries',
          ai: '20 AI messages per day',
          analytics: 'Advanced analytics',
          export: 'Data export',
          support: 'Priority support'
        },
        price: '$9.99/month',
        subscribe: 'Subscribe Now',
        cancel: 'Cancel anytime'
      }
    }
  },

  tr: {
    translation: {
      // Common
      common: {
        loading: 'Yükleniyor...',
        save: 'Kaydet',
        cancel: 'İptal',
        continue: 'Devam',
        back: 'Geri',
        next: 'İleri',
        submit: 'Gönder',
        close: 'Kapat',
        delete: 'Sil',
        edit: 'Düzenle',
        search: 'Ara',
        filter: 'Filtrele',
        export: 'Dışa Aktar',
        import: 'İçe Aktar',
        yes: 'Evet',
        no: 'Hayır',
        error: 'Hata',
        success: 'Başarılı',
        warning: 'Uyarı',
        info: 'Bilgi'
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

      nav: {
        home: 'Ana Sayfa',
        dashboard: 'Panel',
        mood: 'Ruh Hali',
        analytics: 'Analiz',
        partner: 'Partner',
        settings: 'Ayarlar',
        legal: 'Yasal',
        logout: 'Çıkış',
        login: 'Giriş',
        register: 'Kayıt',
        features: 'Özellikler',
        pricing: 'Fiyatlandırma',
        
      },

      auth: {
        email: 'E-posta',
        password: 'Şifre',
        confirmPassword: 'Şifreyi Onayla',
        forgotPassword: 'Şifremi Unuttum?',
        resetPassword: 'Şifreyi Sıfırla',
        createAccount: 'Hesap Oluştur',
        alreadyHaveAccount: 'Zaten hesabınız var mı?',
        dontHaveAccount: 'Hesabınız yok mu?',
        signIn: 'Giriş Yap',
        signUp: 'Kayıt Ol',
        signOut: 'Çıkış Yap',
        verifyEmail: 'E-postayı Doğrula',
        checkEmail: 'Doğrulama bağlantısı için e-postanızı kontrol edin'
      },

      onboarding: {
        welcome: "EMOTICE'e Hoş Geldiniz",
        subtitle: 'AI destekli ruh hali yoldaşınız',
        letsGetStarted: 'Hadi başlayalım',
        ageVerification: 'Yaş Doğrulaması',
        ageVerificationText: "EMOTICE'i kullanmak için 16 yaş veya üzeri olmalısınız",
        iAmOver16: '16 yaşından büyüğüm',
        consent: 'Onay ve Yasal',
        consentText: 'Lütfen şartlarımızı inceleyin ve kabul edin',
        iAcceptTerms: 'Kullanım Koşullarını kabul ediyorum',
        iAcceptPrivacy: 'Gizlilik Politikasını kabul ediyorum',
        iUnderstandDisclaimer: "EMOTICE'in tıbbi tavsiye olmadığını anlıyorum",
        surveyTitle: 'Kendiniz hakkında bize bilgi verin',
        surveySubtitle: 'Deneyiminizi kişiselleştirmemize yardımcı olur (3-5 dakika)',
        skipSurvey: 'Şimdilik atla',
        completeSurvey: 'Anketi Tamamla',
        almostDone: 'Neredeyse bitti!',
        setupComplete: 'Kurulum Tamamlandı'
      },

      mood: {
        howAreYouFeeling: 'Nasıl hissediyorsun?',
        selectMood: 'Ruh halini seç',
        addNote: 'Not ekle (opsiyonel)',
        notePlaceholder: 'Bugün ne oldu? Ne düşünüyorsun?',
        saveMood: 'Ruh Halini Kaydet',
        moodSaved: 'Ruh hali başarıyla kaydedildi',
        moodHistory: 'Ruh Hali Geçmişi',
        noMoods: 'Henüz kayıtlı ruh hali yok',
        streak: 'Günlük Seri',
        average: 'Ortalama Ruh Hali',
        lastWeek: 'Son 7 Gün',
        lastMonth: 'Son 30 Gün',
        moodEmojis: {
          terrible: 'Berbat',
          bad: 'Kötü',
          okay: 'İdare Eder',
          good: 'İyi',
          amazing: 'Harika'
        }
      },

      partner: {
        title: 'Partner Paylaşımı',
        subtitle: 'Ruh halini güvendiğin biriyle paylaş',
        invitePartner: 'Partner Davet Et',
        partnerEmail: 'Partner E-postası',
        sendInvite: 'Davet Gönder',
        pending: 'Davet Bekliyor',
        accepted: 'Partner Bağlandı',
        declined: 'Davet Reddedildi',
        noPartner: 'Henüz partner yok',
        inviteSent: 'Davet başarıyla gönderildi',
        viewPartnerMood: 'Partner Ruh Halini Gör',
        yourMood: 'Senin Ruh Halin',
        partnerMood: 'Partner Ruh Hali',
        bothFeeling: 'İkiniz de hissediyorsunuz',
        disconnect: 'Partner Bağlantısını Kes',
        confirmDisconnect: 'Bağlantıyı kesmek istediğinize emin misiniz?'
      },

      ai: {
        title: 'AI Yardımcı',
        subtitle: 'AI wellness yardımcınla sohbet et',
        placeholder: 'Mesajını yaz...',
        send: 'Gönder',
        thinking: 'AI düşünüyor...',
        disclaimer: 'AI wellness desteği sağlar, tıbbi tavsiye değildir',
        dailyLimit: 'Günlük mesaj limiti',
        limitReached: 'Günlük limit doldu. Daha fazlası için Premium üyelik.',
        upgradeToPremium: "Premium'a Yükselt"
      },

      settings: {
        title: 'Ayarlar',
        profile: 'Profil',
        notifications: 'Bildirimler',
        privacy: 'Gizlilik',
        language: 'Dil',
        theme: 'Tema',
        account: 'Hesap',
        deleteAccount: 'Hesabı Sil',
        deleteAccountWarning: 'Bu işlem geri alınamaz',
        exportData: 'Verilerimi Dışa Aktar',
        downloadData: 'Veriyi İndir',
        dataExported: 'Veri başarıyla dışa aktarıldı'
      },

      legal: {
        terms: 'Kullanım Koşulları',
        privacy: 'Gizlilik Politikası',
        disclaimer: 'Tıbbi Sorumluluk Reddi',
        cookies: 'Çerez Politikası',
        backToHome: 'Ana Sayfaya Dön',
        lastUpdated: 'Son güncelleme',
        version: 'Versiyon'
      },

      emergency: {
        title: 'Acil Kaynaklar',
        subtitle: 'Kriz halindeyseniz, lütfen hemen yardım arayın',
        crisis: 'Kriz',
        turkey: 'Türkiye: 112 (Acil), 182 (Sağlık)',
        usa: 'ABD: 911 (Acil), 988 (İntihar Hattı)',
        europe: 'Avrupa: 112 (Acil), 116 123 (Yardım Hattı)',
        disclaimer: 'EMOTICE acil durumlar için değildir. Hemen acil servisleri arayın.'
      },

      premium: {
        title: "Premium'a Yükselt",
        subtitle: 'Tüm özelliklerin kilidini aç',
        features: {
          unlimited: 'Sınırsız ruh hali kaydı',
          ai: 'Günde 20 AI mesajı',
          analytics: 'Gelişmiş analiz',
          export: 'Veri dışa aktarma',
          support: 'Öncelikli destek'
        },
        price: '$9.99/ay',
        subscribe: 'Şimdi Abone Ol',
        cancel: 'İstediğin zaman iptal et'
      }
    }
  },

  es: {
    translation: {
      // Common
      common: {
        loading: 'Cargando...',
        save: 'Guardar',
        cancel: 'Cancelar',
        continue: 'Continuar',
        back: 'Atrás',
        next: 'Siguiente',
        submit: 'Enviar',
        close: 'Cerrar',
        delete: 'Eliminar',
        edit: 'Editar',
        search: 'Buscar',
        filter: 'Filtrar',
        export: 'Exportar',
        import: 'Importar',
        yes: 'Sí',
        no: 'No',
        error: 'Error',
        success: 'Éxito',
        warning: 'Advertencia',
        info: 'Información'
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

      nav: {
        home: 'Inicio',
        dashboard: 'Panel',
        mood: 'Estado de ánimo',
        analytics: 'Analítica',
        partner: 'Pareja',
        settings: 'Ajustes',
        legal: 'Legal',
        logout: 'Cerrar sesión',
        login: 'Iniciar sesión',
        register: 'Registrarse',
        features: 'Características',
        pricing: 'Precios',
      },

      auth: {
        email: 'Correo electrónico',
        password: 'Contraseña',
        confirmPassword: 'Confirmar contraseña',
        forgotPassword: '¿Olvidaste tu contraseña?',
        resetPassword: 'Restablecer contraseña',
        createAccount: 'Crear cuenta',
        alreadyHaveAccount: '¿Ya tienes una cuenta?',
        dontHaveAccount: '¿No tienes una cuenta?',
        signIn: 'Iniciar sesión',
        signUp: 'Registrarse',
        signOut: 'Cerrar sesión',
        verifyEmail: 'Verificar correo',
        checkEmail: 'Revisa tu correo para el enlace de verificación'
      },

      onboarding: {
        welcome: 'Bienvenido a EMOTICE',
        subtitle: 'Tu compañero de estado de ánimo con IA',
        letsGetStarted: 'Empecemos',
        ageVerification: 'Verificación de edad',
        ageVerificationText: 'Debes tener 16 años o más para usar EMOTICE',
        iAmOver16: 'Tengo 16 años o más',
        consent: 'Consentimiento y Legal',
        consentText: 'Por favor revisa y acepta nuestros términos',
        iAcceptTerms: 'Acepto los Términos de Servicio',
        iAcceptPrivacy: 'Acepto la Política de Privacidad',
        iUnderstandDisclaimer: 'Entiendo que EMOTICE no es asesoramiento médico',
        surveyTitle: 'Cuéntanos sobre ti',
        surveySubtitle: 'Esto nos ayuda a personalizar tu experiencia (3-5 minutos)',
        skipSurvey: 'Omitir por ahora',
        completeSurvey: 'Completar encuesta',
        almostDone: '¡Casi listo!',
        setupComplete: 'Configuración completa'
      },

      mood: {
        howAreYouFeeling: '¿Cómo te sientes?',
        selectMood: 'Selecciona tu estado de ánimo',
        addNote: 'Agregar nota (opcional)',
        notePlaceholder: '¿Qué pasó hoy? ¿En qué estás pensando?',
        saveMood: 'Guardar estado de ánimo',
        moodSaved: 'Estado de ánimo guardado exitosamente',
        moodHistory: 'Historial de estado de ánimo',
        noMoods: 'Aún no hay estados de ánimo registrados',
        streak: 'Racha de días',
        average: 'Estado de ánimo promedio',
        lastWeek: 'Últimos 7 días',
        lastMonth: 'Últimos 30 días',
        moodEmojis: {
          terrible: 'Terrible',
          bad: 'Malo',
          okay: 'Regular',
          good: 'Bueno',
          amazing: 'Increíble'
        }
      },

      partner: {
        title: 'Compartir con pareja',
        subtitle: 'Comparte tu estado de ánimo con alguien de confianza',
        invitePartner: 'Invitar pareja',
        partnerEmail: 'Correo de la pareja',
        sendInvite: 'Enviar invitación',
        pending: 'Invitación pendiente',
        accepted: 'Pareja conectada',
        declined: 'Invitación rechazada',
        noPartner: 'Aún no hay pareja',
        inviteSent: 'Invitación enviada exitosamente',
        viewPartnerMood: 'Ver estado de ánimo de pareja',
        yourMood: 'Tu estado de ánimo',
        partnerMood: 'Estado de ánimo de pareja',
        bothFeeling: 'Ambos se sienten',
        disconnect: 'Desconectar pareja',
        confirmDisconnect: '¿Estás seguro de que quieres desconectar?'
      },

      ai: {
        title: 'Compañero IA',
        subtitle: 'Chatea con tu compañero de bienestar IA',
        placeholder: 'Escribe tu mensaje...',
        send: 'Enviar',
        thinking: 'IA está pensando...',
        disclaimer: 'IA proporciona apoyo de bienestar, no asesoramiento médico',
        dailyLimit: 'Límite diario de mensajes',
        limitReached: 'Límite diario alcanzado. Actualiza a Premium para más.',
        upgradeToPremium: 'Actualizar a Premium'
      },

      settings: {
        title: 'Ajustes',
        profile: 'Perfil',
        notifications: 'Notificaciones',
        privacy: 'Privacidad',
        language: 'Idioma',
        theme: 'Tema',
        account: 'Cuenta',
        deleteAccount: 'Eliminar cuenta',
        deleteAccountWarning: 'Esta acción no se puede deshacer',
        exportData: 'Exportar mis datos',
        downloadData: 'Descargar datos',
        dataExported: 'Datos exportados exitosamente'
      },

      legal: {
        terms: 'Términos de Servicio',
        privacy: 'Política de Privacidad',
        disclaimer: 'Descargo de Responsabilidad Médica',
        cookies: 'Política de Cookies',
        backToHome: 'Volver al inicio',
        lastUpdated: 'Última actualización',
        version: 'Versión'
      },

      emergency: {
        title: 'Recursos de emergencia',
        subtitle: 'Si estás en crisis, busca ayuda inmediata',
        crisis: 'Crisis',
        turkey: 'Turquía: 112 (Emergencia), 182 (Salud)',
        usa: 'EE.UU.: 911 (Emergencia), 988 (Línea de Suicidio)',
        europe: 'Europa: 112 (Emergencia), 116 123 (Línea de ayuda)',
        disclaimer: 'EMOTICE no es para emergencias. Llama a servicios de emergencia inmediatamente.'
      },

      premium: {
        title: 'Actualizar a Premium',
        subtitle: 'Desbloquea todas las funciones',
        features: {
          unlimited: 'Registros de estado de ánimo ilimitados',
          ai: '20 mensajes IA por día',
          analytics: 'Análisis avanzado',
          export: 'Exportación de datos',
          support: 'Soporte prioritario'
        },
        price: '$9.99/mes',
        subscribe: 'Suscribirse ahora',
        cancel: 'Cancela en cualquier momento'
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