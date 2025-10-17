// src/pages/legal/Privacy.tsx - PART 1/5
import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { ArrowLeft, Shield, Lock, Eye, Database, UserX } from 'lucide-react'
import Navbar from '@/components/Navbar'
const Privacy = () => {
  const { i18n } = useTranslation()
  
  const content = {
    en: {
      title: 'Privacy Policy',
      subtitle: 'KVKK and GDPR Compliant',
      lastUpdated: 'Last updated: October 2, 2025 | v1.0',
      backToHome: 'Back to Home',
      
      tldr: {
        title: 'Quick Summary (TL;DR)',
        items: [
          'Your mood data is stored only for you',
          'We do NOT sell your data to third parties',
          'Protected with AES-256 encryption',
          'You can delete your data anytime',
          'No ad trackers'
        ]
      },

      section1: {
        title: '1. Data Controller Identity',
        intro: 'According to Law No. 6698 on Protection of Personal Data ("KVKK") and EU General Data Protection Regulation ("GDPR"), the data controller is:',
        name: 'Trade Name: Nechh Lab Robotics',
        platform: 'Platform: EMOTICE (emotice.com)',
        email: 'Contact Email: privacy@emotice.com',
        dpo: 'Data Protection Officer: dpo@emotice.com',
        web: 'Website: emotice.com'
      },

      section2: {
        title: '2. Personal Data Processed',
        intro: 'EMOTICE processes the following personal data to provide its services:',
        
        identity: {
          title: '2.1. Identity Data',
          items: [
            'Email address (required)',
            'First and last name (optional)',
            'Date of birth (for 16+ age verification only)',
            'Username (optional)'
          ]
        },

        health: {
          title: '2.2. Health and Emotional Data (Sensitive Data)',
          warning: 'GDPR Article 9: Special Category Data',
          warningText: 'The following data is in the "sensitive data" category and is under special protection:',
          items: [
            'Daily mood records (emoji and notes)',
            'Emotional intensity scores',
            'AI chat history (for motivation and support)',
            'Onboarding survey responses (WHO-5, PHQ-2, GAD-2, sleep quality)',
            'Stress sources and triggers'
          ]
        },

        technical: {
          title: '2.3. Technical Data',
          items: [
            'IP address (for security and fraud prevention)',
            'Browser type and version',
            'Device information (mobile/desktop)',
            'Session logs',
            'Usage statistics (anonymous)'
          ]
        },

        communication: {
          title: '2.4. Communication Data',
          items: [
            'Email communication history',
            'Support requests and responses',
            'Notification preferences'
          ]
        }
      },

      section3: {
        title: '3. Processing Purposes and Legal Bases',
        tableHeaders: ['Data Category', 'Purpose', 'Legal Basis'],
        rows: [
          ['Identity', 'Account creation, login verification', 'Contract (KVKK Art. 5/2-c)'],
          ['Health/Emotional', 'Mood tracking, AI support, statistics', 'Explicit Consent (KVKK Art. 6/2, GDPR Art. 9/2-a)'],
          ['Technical', 'Security, fraud prevention, analysis', 'Legitimate Interest (GDPR Art. 6/1-f)'],
          ['Communication', 'Support, information', 'Contract (KVKK Art. 5/2-c)']
        ]
      },

      section4: {
        title: '4. Explicit Consent',
        intro: 'Your explicit consent is obtained for all data in the sensitive category (mood, emotional state, survey responses).',
        withdrawal: 'Your right to withdraw consent:',
        withdrawalText: 'You can withdraw all your consents and delete your data using the "Delete My Data" option in account settings.'
      },

      section5: {
        title: '5. Data Retention Period',
        items: [
          'Active accounts: As long as your account is active',
          'Deleted accounts: Completely deleted within 30 days (recovery period)',
          'Technical logs: 90 days (for security purposes)',
          'Anonymous analytics data: Indefinitely (without personal connection)',
          'Legal obligations: For the legal period (e.g., invoice information 10 years)'
        ]
      },

      section6: {
        title: '6. Data Security',
        encryption: { title: 'Encryption', items: ['Transit: TLS 1.3', 'Rest: AES-256', 'Database: Row-level encryption'] },
        access: { title: 'Access Control', items: ['Multi-Factor Authentication (MFA)', 'Role-Based Access Control (RBAC)', 'Audit logs'] },
        infrastructure: { title: 'Infrastructure', items: ['Supabase (SOC 2 Type II)', 'GDPR-compliant hosting (EU)', 'Automated backups (encrypted)'] },
        monitoring: { title: 'Monitoring', items: ['24/7 security monitoring', 'Intrusion detection', 'Breach notification (72h)'] }
      },

      section7: {
        title: '7. Data Transfer',
        thirdParty: {
          title: '7.1. Third Party Transfer',
          intro: 'We do NOT sell your data or share it for marketing purposes. Limited transfer only in the following cases:',
          tableHeaders: ['Recipient', 'Purpose', 'Protected Data'],
          rows: [
            ['Supabase (EU)', 'Database hosting', 'All data (encrypted)'],
            ['OpenAI (US)', 'AI chat support', 'Chat texts (anonymized)'],
            ['Vercel (US)', 'Web hosting', 'IP, usage logs'],
            ['Email service', 'Notifications', 'Email address']
          ]
        },
        international: {
          title: '7.2. International Data Transfer',
          intro: 'Since OpenAI (GPT-4o-mini) is US-based, AI chat data is transferred to the US. For this transfer:',
          items: [
            'Standard Contractual Clauses (SCC) are used',
            'Data is anonymized (no name, identity sent)',
            'OpenAI does NOT use your data for model training',
            'Deleted from OpenAI systems within 30 days'
          ]
        },
        legal: {
          title: '7.3. Legal Obligations',
          items: ['Court order or legal obligation', 'Emergency life safety (suicide risk)', 'Criminal acts']
        }
      },

      section8: {
        title: '8. Cookies',
        intro: 'For detailed information, please read our',
        linkText: 'Cookie Policy',
        types: 'Cookies we use:',
        items: ['Essential: Session management, security', 'Analytics: Anonymous usage statistics (opt-out available)', 'Preference: Language, theme settings'],
        note: 'We do not use advertising cookies or tracking pixels.'
      },

      section9: {
        title: '9. User Rights (KVKK and GDPR)',
        intro: 'You have the following rights:',
        rights: [
          { num: '1', title: 'Right to Access', desc: 'Learn what data is being processed.', action: 'Account Settings → Download My Data' },
          { num: '2', title: 'Right to Rectification', desc: 'Correct incorrect data.', action: 'Profile → Edit' },
          { num: '3', title: 'Right to Erasure', desc: 'Delete all your data.', action: 'Account Settings → Delete Account', warning: 'This action is irreversible!' },
          { num: '4', title: 'Data Portability', desc: 'Download your data in JSON format.' },
          { num: '5', title: 'Right to Object', desc: 'Withdraw consent, freeze account.' },
          { num: '6', title: 'Right to Lodge Complaint', desc: 'Turkey: kvkk.gov.tr | EU: Supervisory Authority' }
        ]
      },

      section10: {
        title: '10. Children\'s Privacy',
        content: 'EMOTICE does not provide services to individuals under 16 years of age. If we determine that a user is under 16, we immediately delete their account and destroy all data.',
        parent: 'If you are a parent and notice that your child has registered: privacy@emotice.com'
      },

      section11: {
        title: '11. Data Breach Notification',
        items: ['Reported to KVKK Board within 72 hours', 'Affected users immediately notified by email', 'Breach details and measures disclosed transparently']
      },

      section12: {
        title: '12. Policy Changes',
        items: ['Version number and date are changed (top of page)', 'Significant changes notified by email', 'Announcement on Platform']
      },

      section13: {
        title: '13. Contact and Requests',
        intro: 'To exercise your rights or for questions:',
        dpo: 'Data Protection Officer: dpo@emotice.com',
        general: 'General Questions: privacy@emotice.com',
        response: 'Response time: Within 30 days (KVKK Art. 13)'
      },

      quickDelete: {
        title: 'Quick Delete',
        icon: 'Account Settings → Delete Account',
        note: 'All your data will be permanently deleted within 30 days.'
      }
    },
    // PART 2/5 - Türkçe content (aynı dosyaya devam et)
    tr: {
      title: 'Gizlilik Politikası',
      subtitle: 'KVKK ve GDPR Uyumlu',
      lastUpdated: 'Son güncelleme: 2 Ekim 2025 | v1.0',
      backToHome: 'Ana Sayfaya Dön',
      
      tldr: {
        title: 'Özet (TL;DR)',
        items: [
          'Ruh hali verileriniz yalnızca sizin için saklanır',
          'Verilerinizi üçüncü taraflara satmıyoruz',
          'AES-256 şifreleme ile korunuyor',
          'İstediğiniz zaman verilerinizi silebilirsiniz',
          'Reklam tracker kullanmıyoruz'
        ]
      },

      section1: {
        title: '1. Veri Sorumlusu Kimliği',
        intro: '6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") ve AB Genel Veri Koruma Tüzüğü ("GDPR") uyarınca veri sorumlusu:',
        name: 'Ticari Ünvan: Nechh Lab Robotics',
        platform: 'Platform: EMOTICE (emotice.com)',
        email: 'İletişim E-posta: privacy@emotice.com',
        dpo: 'Veri Koruma Görevlisi: dpo@emotice.com',
        web: 'Web: emotice.com'
      },

      section2: {
        title: '2. İşlenen Kişisel Veriler',
        intro: 'EMOTICE, hizmetlerini sunabilmek için aşağıdaki kişisel verileri işler:',
        
        identity: {
          title: '2.1. Kimlik Verileri',
          items: [
            'E-posta adresi (zorunlu)',
            'Ad ve soyad (opsiyonel)',
            'Doğum tarihi (yaş kontrolü için - yalnızca 16+ doğrulama)',
            'Kullanıcı adı (opsiyonel)'
          ]
        },

        health: {
          title: '2.2. Sağlık ve Duygusal Veriler (Hassas Veri)',
          warning: 'GDPR Madde 9: Özel Kategori Veri',
          warningText: 'Aşağıdaki veriler "hassas veri" kategorisindedir ve özel koruma altındadır:',
          items: [
            'Günlük ruh hali kayıtları (emoji ve notlar)',
            'Duygu yoğunluk skorları',
            'AI sohbet geçmişi (motivasyon ve destek amaçlı)',
            'Onboarding anket yanıtları (WHO-5, PHQ-2, GAD-2, uyku kalitesi)',
            'Stres kaynakları ve tetikleyiciler'
          ]
        },

        technical: {
          title: '2.3. Teknik Veriler',
          items: [
            'IP adresi (güvenlik ve fraud prevention)',
            'Tarayıcı tipi ve sürümü',
            'Cihaz bilgisi (mobil/desktop)',
            'Oturum logları',
            'Kullanım istatistikleri (anonim)'
          ]
        },

        communication: {
          title: '2.4. İletişim Verileri',
          items: [
            'E-posta iletişim geçmişi',
            'Destek talepleri ve yanıtları',
            'Bildirim tercihleri'
          ]
        }
      },

      section3: {
        title: '3. Verilerin İşlenme Amaçları ve Hukuki Dayanaklar',
        tableHeaders: ['Veri Kategorisi', 'Amaç', 'Hukuki Dayanak'],
        rows: [
          ['Kimlik', 'Hesap oluşturma, giriş doğrulama', 'Sözleşme (KVKK m.5/2-c)'],
          ['Sağlık/Duygusal', 'Mood tracking, AI destek, istatistikler', 'Açık Rıza (KVKK m.6/2, GDPR m.9/2-a)'],
          ['Teknik', 'Güvenlik, fraud prevention, analiz', 'Meşru Menfaat (GDPR m.6/1-f)'],
          ['İletişim', 'Destek, bilgilendirme', 'Sözleşme (KVKK m.5/2-c)']
        ]
      },

      section4: {
        title: '4. Açık Rıza',
        intro: 'Hassas veri kategorisindeki (ruh hali, duygusal durum, anket yanıtları) tüm veriler için açık rızanız alınmaktadır.',
        withdrawal: 'Rızanızı geri çekme hakkınız:',
        withdrawalText: 'Hesap ayarlarından "Verilerimi Sil" seçeneğiyle tüm rızalarınızı geri çekebilir ve verilerinizi silebilirsiniz.'
      },

      section5: {
        title: '5. Verilerin Saklanma Süresi',
        items: [
          'Aktif hesaplar: Hesabınız aktif olduğu sürece',
          'Silinen hesaplar: 30 gün içinde tamamen silinir (kurtarma süresi)',
          'Teknik loglar: 90 gün (güvenlik amaçlı)',
          'Anonim analiz verileri: Süresiz (kişisel bağlantı olmadan)',
          'Yasal yükümlülükler: Yasal süre boyunca (örn. fatura bilgileri 10 yıl)'
        ]
      },

      section6: {
        title: '6. Verilerin Güvenliği',
        encryption: { title: 'Şifreleme', items: ['Transit: TLS 1.3', 'Rest: AES-256', 'Database: Row-level encryption'] },
        access: { title: 'Erişim Kontrolü', items: ['Multi-Factor Authentication (MFA)', 'Role-Based Access Control (RBAC)', 'Audit logs'] },
        infrastructure: { title: 'Altyapı', items: ['Supabase (SOC 2 Type II)', 'GDPR-uyumlu hosting (EU)', 'Otomatik yedekler (şifreli)'] },
        monitoring: { title: 'İzleme', items: ['7/24 güvenlik izleme', 'Intrusion detection', 'İhlal bildirimi (72 saat)'] }
      },

      section7: {
        title: '7. Verilerin Aktarımı',
        thirdParty: {
          title: '7.1. Üçüncü Taraflara Aktarım',
          intro: 'Verilerinizi satmıyoruz veya pazarlama amacıyla paylaşmıyoruz. Yalnızca aşağıdaki durumlarda sınırlı aktarım:',
          tableHeaders: ['Alıcı', 'Amaç', 'Korunan Veri'],
          rows: [
            ['Supabase (AB)', 'Database hosting', 'Tüm veriler (şifreli)'],
            ['OpenAI (ABD)', 'AI chat desteği', 'Sohbet metinleri (anonim)'],
            ['Vercel (ABD)', 'Web hosting', 'IP, kullanım logları'],
            ['Email servis', 'Bildirimler', 'E-posta adresi']
          ]
        },
        international: {
          title: '7.2. Uluslararası Veri Aktarımı',
          intro: 'OpenAI (GPT-4o-mini) ABD merkezli olduğundan, AI sohbet verileri ABD\'ye aktarılmaktadır. Bu aktarım için:',
          items: [
            'Standard Contractual Clauses (SCC) kullanılmaktadır',
            'Veriler anonimleştirilmektedir (isim, kimlik bilgisi gönderilmez)',
            'OpenAI verilerinizi model eğitiminde kullanmamaktadır',
            '30 gün içinde OpenAI sistemlerinden silinmektedir'
          ]
        },
        legal: {
          title: '7.3. Yasal Zorunluluklar',
          items: ['Mahkeme kararı veya yasal zorunluluk', 'Acil can güvenliği durumu (intihar riski)', 'Suç teşkil eden eylemler']
        }
      },

      section8: {
        title: '8. Çerezler',
        intro: 'Detaylı bilgi için',
        linkText: 'Çerez Politikası',
        types: '\'nı okuyunuz. Kullandığımız çerezler:',
        items: ['Zorunlu: Oturum yönetimi, güvenlik', 'Analitik: Anonim kullanım istatistikleri (opt-out mevcut)', 'Tercih: Dil, tema ayarları'],
        note: 'Reklam çerezi veya tracking pixel kullanmıyoruz.'
      },

      section9: {
        title: '9. Kullanıcı Hakları (KVKK ve GDPR)',
        intro: 'Aşağıdaki haklara sahipsiniz:',
        rights: [
          { num: '1', title: 'Bilgi Talep Etme', desc: 'Hangi verilerinizin işlendiğini öğrenebilirsiniz.', action: 'Hesap Ayarları → Verilerimi İndir' },
          { num: '2', title: 'Düzeltme', desc: 'Yanlış verileri düzelttirebilirsiniz.', action: 'Profil → Düzenle' },
          { num: '3', title: 'Silme (Unutulma Hakkı)', desc: 'Tüm verilerinizi silebilirsiniz.', action: 'Hesap Ayarları → Hesabı Sil', warning: 'Bu işlem geri alınamaz!' },
          { num: '4', title: 'Taşınabilirlik', desc: 'Verilerinizi JSON formatında indirebilirsiniz.' },
          { num: '5', title: 'İşlemeyi Durdurma', desc: 'Rızanızı geri çekebilir, hesabınızı dondurabilirsiniz.' },
          { num: '6', title: 'Şikayet', desc: 'Türkiye: kvkk.gov.tr | AB: İlgili Supervisory Authority' }
        ]
      },

      section10: {
        title: '10. Çocukların Gizliliği',
        content: 'EMOTICE, 16 yaşından küçük bireylere hizmet sunmamaktadır. Bir kullanıcının 16 yaşından küçük olduğunu tespit edersek, hesabını derhal sileriz ve tüm verilerini imha ederiz.',
        parent: 'Ebeveynseniz ve çocuğunuzun kaydolduğunu fark ederseniz: privacy@emotice.com'
      },

      section11: {
        title: '11. Veri İhlali Bildirimi',
        items: ['KVKK Kurulu\'na 72 saat içinde bildirilir', 'Etkilenen kullanıcılar derhal e-posta ile bilgilendirilir', 'İhlal detayları ve alınan önlemler şeffaf şekilde açıklanır']
      },

      section12: {
        title: '12. Politika Değişiklikleri',
        items: ['Versiyon numarası ve tarih değiştirilir (sayfa üstünde)', 'Önemli değişiklikler e-posta ile bildirilir', 'Platform\'da duyuru yapılır']
      },

      section13: {
        title: '13. İletişim ve Talepler',
        intro: 'Haklarınızı kullanmak veya sorularınız için:',
        dpo: 'Veri Koruma Görevlisi: dpo@emotice.com',
        general: 'Genel Sorular: privacy@emotice.com',
        response: 'Yanıt süresi: 30 gün içinde (KVKK m.13)'
      },

      quickDelete: {
        title: 'Hızlı Silme',
        icon: 'Hesap Ayarları → Hesabı Sil',
        note: '30 gün içinde tüm verileriniz kalıcı olarak silinecektir.'
      }
    },
    // PART 3/5 - Español content (aynı dosyaya devam et)
    es: {
      title: 'Política de Privacidad',
      subtitle: 'Compatible con KVKK y GDPR',
      lastUpdated: 'Última actualización: 2 de octubre de 2025 | v1.0',
      backToHome: 'Volver al Inicio',
      
      tldr: {
        title: 'Resumen Rápido (TL;DR)',
        items: [
          'Sus datos de estado de ánimo se almacenan solo para usted',
          'NO vendemos sus datos a terceros',
          'Protegido con cifrado AES-256',
          'Puede eliminar sus datos en cualquier momento',
          'Sin rastreadores publicitarios'
        ]
      },

      section1: {
        title: '1. Identidad del Controlador de Datos',
        intro: 'De acuerdo con la Ley No. 6698 de Protección de Datos Personales ("KVKK") y el Reglamento General de Protección de Datos de la UE ("GDPR"), el controlador de datos es:',
        name: 'Nombre Comercial: Nechh Lab Robotics',
        platform: 'Plataforma: EMOTICE (emotice.com)',
        email: 'Correo de Contacto: privacy@emotice.com',
        dpo: 'Oficial de Protección de Datos: dpo@emotice.com',
        web: 'Sitio web: emotice.com'
      },

      section2: {
        title: '2. Datos Personales Procesados',
        intro: 'EMOTICE procesa los siguientes datos personales para proporcionar sus servicios:',
        
        identity: {
          title: '2.1. Datos de Identidad',
          items: [
            'Dirección de correo electrónico (requerido)',
            'Nombre y apellido (opcional)',
            'Fecha de nacimiento (solo para verificación de 16+)',
            'Nombre de usuario (opcional)'
          ]
        },

        health: {
          title: '2.2. Datos de Salud y Emocionales (Datos Sensibles)',
          warning: 'Artículo 9 del GDPR: Categoría Especial de Datos',
          warningText: 'Los siguientes datos están en la categoría de "datos sensibles" y están bajo protección especial:',
          items: [
            'Registros diarios de estado de ánimo (emoji y notas)',
            'Puntuaciones de intensidad emocional',
            'Historial de chat con IA (para motivación y apoyo)',
            'Respuestas de encuesta de incorporación (WHO-5, PHQ-2, GAD-2, calidad del sueño)',
            'Fuentes de estrés y desencadenantes'
          ]
        },

        technical: {
          title: '2.3. Datos Técnicos',
          items: [
            'Dirección IP (para seguridad y prevención de fraude)',
            'Tipo y versión del navegador',
            'Información del dispositivo (móvil/escritorio)',
            'Registros de sesión',
            'Estadísticas de uso (anónimas)'
          ]
        },

        communication: {
          title: '2.4. Datos de Comunicación',
          items: [
            'Historial de comunicación por correo electrónico',
            'Solicitudes de soporte y respuestas',
            'Preferencias de notificación'
          ]
        }
      },

      section3: {
        title: '3. Propósitos de Procesamiento y Bases Legales',
        tableHeaders: ['Categoría de Datos', 'Propósito', 'Base Legal'],
        rows: [
          ['Identidad', 'Creación de cuenta, verificación de inicio de sesión', 'Contrato (KVKK Art. 5/2-c)'],
          ['Salud/Emocional', 'Seguimiento de estado de ánimo, soporte IA, estadísticas', 'Consentimiento Explícito (KVKK Art. 6/2, GDPR Art. 9/2-a)'],
          ['Técnico', 'Seguridad, prevención de fraude, análisis', 'Interés Legítimo (GDPR Art. 6/1-f)'],
          ['Comunicación', 'Soporte, información', 'Contrato (KVKK Art. 5/2-c)']
        ]
      },

      section4: {
        title: '4. Consentimiento Explícito',
        intro: 'Se obtiene su consentimiento explícito para todos los datos en la categoría sensible (estado de ánimo, estado emocional, respuestas de encuestas).',
        withdrawal: 'Su derecho a retirar el consentimiento:',
        withdrawalText: 'Puede retirar todos sus consentimientos y eliminar sus datos usando la opción "Eliminar Mis Datos" en la configuración de la cuenta.'
      },

      section5: {
        title: '5. Período de Retención de Datos',
        items: [
          'Cuentas activas: Mientras su cuenta esté activa',
          'Cuentas eliminadas: Completamente eliminadas en 30 días (período de recuperación)',
          'Registros técnicos: 90 días (con fines de seguridad)',
          'Datos de análisis anónimos: Indefinidamente (sin conexión personal)',
          'Obligaciones legales: Por el período legal (ej. información de factura 10 años)'
        ]
      },

      section6: {
        title: '6. Seguridad de Datos',
        encryption: { title: 'Cifrado', items: ['Tránsito: TLS 1.3', 'Reposo: AES-256', 'Base de datos: Cifrado a nivel de fila'] },
        access: { title: 'Control de Acceso', items: ['Autenticación Multifactor (MFA)', 'Control de Acceso Basado en Roles (RBAC)', 'Registros de auditoría'] },
        infrastructure: { title: 'Infraestructura', items: ['Supabase (SOC 2 Type II)', 'Alojamiento compatible con GDPR (UE)', 'Copias de seguridad automatizadas (cifradas)'] },
        monitoring: { title: 'Monitoreo', items: ['Monitoreo de seguridad 24/7', 'Detección de intrusiones', 'Notificación de violación (72h)'] }
      },

      section7: {
        title: '7. Transferencia de Datos',
        thirdParty: {
          title: '7.1. Transferencia a Terceros',
          intro: 'NO vendemos sus datos ni los compartimos con fines de marketing. Transferencia limitada solo en los siguientes casos:',
          tableHeaders: ['Destinatario', 'Propósito', 'Datos Protegidos'],
          rows: [
            ['Supabase (UE)', 'Alojamiento de base de datos', 'Todos los datos (cifrados)'],
            ['OpenAI (EE.UU.)', 'Soporte de chat IA', 'Textos de chat (anonimizados)'],
            ['Vercel (EE.UU.)', 'Alojamiento web', 'IP, registros de uso'],
            ['Servicio de correo', 'Notificaciones', 'Dirección de correo electrónico']
          ]
        },
        international: {
          title: '7.2. Transferencia Internacional de Datos',
          intro: 'Dado que OpenAI (GPT-4o-mini) tiene sede en EE.UU., los datos de chat IA se transfieren a EE.UU. Para esta transferencia:',
          items: [
            'Se utilizan Cláusulas Contractuales Estándar (SCC)',
            'Los datos se anonimizan (no se envía nombre, identidad)',
            'OpenAI NO usa sus datos para entrenamiento de modelos',
            'Se eliminan de los sistemas de OpenAI en 30 días'
          ]
        },
        legal: {
          title: '7.3. Obligaciones Legales',
          items: ['Orden judicial u obligación legal', 'Situación de emergencia de seguridad vital (riesgo de suicidio)', 'Actos criminales']
        }
      },

      section8: {
        title: '8. Cookies',
        intro: 'Para información detallada, lea nuestra',
        linkText: 'Política de Cookies',
        types: 'Cookies que usamos:',
        items: ['Esenciales: Gestión de sesiones, seguridad', 'Analíticas: Estadísticas de uso anónimas (opt-out disponible)', 'Preferencias: Configuración de idioma, tema'],
        note: 'No usamos cookies publicitarias ni píxeles de seguimiento.'
      },

      section9: {
        title: '9. Derechos del Usuario (KVKK y GDPR)',
        intro: 'Tiene los siguientes derechos:',
        rights: [
          { num: '1', title: 'Derecho de Acceso', desc: 'Conocer qué datos se están procesando.', action: 'Configuración de Cuenta → Descargar Mis Datos' },
          { num: '2', title: 'Derecho de Rectificación', desc: 'Corregir datos incorrectos.', action: 'Perfil → Editar' },
          { num: '3', title: 'Derecho de Supresión', desc: 'Eliminar todos sus datos.', action: 'Configuración de Cuenta → Eliminar Cuenta', warning: '¡Esta acción es irreversible!' },
          { num: '4', title: 'Portabilidad de Datos', desc: 'Descargar sus datos en formato JSON.' },
          { num: '5', title: 'Derecho de Oposición', desc: 'Retirar consentimiento, congelar cuenta.' },
          { num: '6', title: 'Derecho a Presentar Queja', desc: 'Turquía: kvkk.gov.tr | UE: Autoridad de Supervisión' }
        ]
      },

      section10: {
        title: '10. Privacidad de Menores',
        content: 'EMOTICE no proporciona servicios a personas menores de 16 años. Si determinamos que un usuario es menor de 16 años, eliminamos inmediatamente su cuenta y destruimos todos los datos.',
        parent: 'Si es padre y nota que su hijo se ha registrado: privacy@emotice.com'
      },

      section11: {
        title: '11. Notificación de Violación de Datos',
        items: ['Reportado a la Junta KVKK dentro de 72 horas', 'Usuarios afectados notificados inmediatamente por correo', 'Detalles de violación y medidas divulgadas de forma transparente']
      },

      section12: {
        title: '12. Cambios en la Política',
        items: ['El número de versión y la fecha se cambian (parte superior de la página)', 'Los cambios significativos se notifican por correo', 'Se hace anuncio en la Plataforma']
      },

      section13: {
        title: '13. Contacto y Solicitudes',
        intro: 'Para ejercer sus derechos o para preguntas:',
        dpo: 'Oficial de Protección de Datos: dpo@emotice.com',
        general: 'Preguntas Generales: privacy@emotice.com',
        response: 'Tiempo de respuesta: Dentro de 30 días (KVKK Art. 13)'
      },

      quickDelete: {
        title: 'Eliminación Rápida',
        icon: 'Configuración de Cuenta → Eliminar Cuenta',
        note: 'Todos sus datos serán eliminados permanentemente en 30 días.'
      }
    }
  } // content object sonu
  // PART 4/5 - JSX Render (aynı dosyaya devam et)
  
  const lang = (i18n.language.startsWith('tr') ? 'tr' : i18n.language.startsWith('es') ? 'es' : 'en') as 'en' | 'tr' | 'es'
  const c = content[lang]

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <Link to="/" className="flex items-center gap-2 text-purple-600 hover:text-purple-700 mb-4">
            <ArrowLeft className="w-5 h-5" />
            {c.backToHome}
          </Link>
          
          <div className="flex items-center gap-3">
            <Shield className="w-8 h-8 text-purple-600" />
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{c.title}</h1>
              <p className="text-gray-600 mt-1">{c.subtitle} | {c.lastUpdated}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm p-8">
          
          {/* TL;DR */}
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
            <h3 className="font-bold text-blue-900 mb-3">{c.tldr.title}</h3>
            <ul className="text-blue-800 text-sm space-y-2">
              {c.tldr.items.map((item, idx) => (
                <li key={idx}>✓ {item}</li>
              ))}
            </ul>
          </div>

          <div className="prose max-w-none space-y-8">
            
            {/* Section 1 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{c.section1.title}</h2>
              <p className="text-gray-700 mb-4">{c.section1.intro}</p>
              <div className="bg-gray-50 p-4 rounded">
                <p className="text-sm mb-1"><strong>{c.section1.name}</strong></p>
                <p className="text-sm mb-1"><strong>{c.section1.platform}</strong></p>
                <p className="text-sm mb-1"><strong>{c.section1.email}</strong></p>
                <p className="text-sm mb-1"><strong>{c.section1.dpo}</strong></p>
                <p className="text-sm"><strong>{c.section1.web}</strong></p>
              </div>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{c.section2.title}</h2>
              <p className="text-gray-700 mb-4">{c.section2.intro}</p>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{c.section2.identity.title}</h3>
              <ul className="list-disc list-inside space-y-2 mb-6">
                {c.section2.identity.items.map((item, idx) => (
                  <li key={idx} className="text-gray-700">{item}</li>
                ))}
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">{c.section2.health.title}</h3>
              <div className="bg-red-50 border border-red-200 p-4 rounded mb-3">
                <p className="text-red-800 font-bold mb-2 flex items-center gap-2">
                  <Lock className="w-4 h-4" />
                  {c.section2.health.warning}
                </p>
                <p className="text-red-700 text-sm">{c.section2.health.warningText}</p>
              </div>
              <ul className="list-disc list-inside space-y-2 mb-6">
                {c.section2.health.items.map((item, idx) => (
                  <li key={idx} className="text-gray-700">{item}</li>
                ))}
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">{c.section2.technical.title}</h3>
              <ul className="list-disc list-inside space-y-2 mb-6">
                {c.section2.technical.items.map((item, idx) => (
                  <li key={idx} className="text-gray-700">{item}</li>
                ))}
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">{c.section2.communication.title}</h3>
              <ul className="list-disc list-inside space-y-2">
                {c.section2.communication.items.map((item, idx) => (
                  <li key={idx} className="text-gray-700">{item}</li>
                ))}
              </ul>
            </section>

            {/* Section 3 - Table */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{c.section3.title}</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300 my-4">
                  <thead className="bg-gray-100">
                    <tr>
                      {c.section3.tableHeaders.map((header, idx) => (
                        <th key={idx} className="border border-gray-300 p-3 text-left">{header}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {c.section3.rows.map((row, idx) => (
                      <tr key={idx}>
                        {row.map((cell, cellIdx) => (
                          <td key={cellIdx} className="border border-gray-300 p-3">{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{c.section4.title}</h2>
              <p className="text-gray-700 mb-3">{c.section4.intro}</p>
              <div className="bg-green-50 border-l-4 border-green-500 p-4">
                <p className="text-green-800">
                  <strong>{c.section4.withdrawal}</strong> {c.section4.withdrawalText}
                </p>
              </div>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{c.section5.title}</h2>
              <ul className="list-disc list-inside space-y-2">
                {c.section5.items.map((item, idx) => (
                  <li key={idx} className="text-gray-700">{item}</li>
                ))}
              </ul>
            </section>

            {/* Section 6 - Security Icons */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{c.section6.title}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border border-gray-200 rounded p-4">
                  <Database className="w-8 h-8 text-purple-600 mb-2" />
                  <h4 className="font-bold mb-2">{c.section6.encryption.title}</h4>
                  <ul className="text-sm space-y-1">
                    {c.section6.encryption.items.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="border border-gray-200 rounded p-4">
                  <Lock className="w-8 h-8 text-purple-600 mb-2" />
                  <h4 className="font-bold mb-2">{c.section6.access.title}</h4>
                  <ul className="text-sm space-y-1">
                    {c.section6.access.items.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="border border-gray-200 rounded p-4">
                  <Shield className="w-8 h-8 text-purple-600 mb-2" />
                  <h4 className="font-bold mb-2">{c.section6.infrastructure.title}</h4>
                  <ul className="text-sm space-y-1">
                    {c.section6.infrastructure.items.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="border border-gray-200 rounded p-4">
                  <Eye className="w-8 h-8 text-purple-600 mb-2" />
                  <h4 className="font-bold mb-2">{c.section6.monitoring.title}</h4>
                  <ul className="text-sm space-y-1">
                    {c.section6.monitoring.items.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 7 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{c.section7.title}</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{c.section7.thirdParty.title}</h3>
              <p className="text-gray-700 mb-3">{c.section7.thirdParty.intro}</p>
              <div className="overflow-x-auto mb-6">
                <table className="w-full border-collapse border border-gray-300">
                  <thead className="bg-gray-100">
                    <tr>
                      {c.section7.thirdParty.tableHeaders.map((header, idx) => (
                        <th key={idx} className="border border-gray-300 p-3 text-left">{header}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {c.section7.thirdParty.rows.map((row, idx) => (
                      <tr key={idx}>
                        {row.map((cell, cellIdx) => (
                          <td key={cellIdx} className="border border-gray-300 p-3">{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">{c.section7.international.title}</h3>
              <p className="text-gray-700 mb-2">{c.section7.international.intro}</p>
              <ul className="list-disc list-inside space-y-2 mb-6">
                {c.section7.international.items.map((item, idx) => (
                  <li key={idx} className="text-gray-700">{item}</li>
                ))}
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">{c.section7.legal.title}</h3>
              <ul className="list-disc list-inside space-y-2">
                {c.section7.legal.items.map((item, idx) => (
                  <li key={idx} className="text-gray-700">{item}</li>
                ))}
              </ul>
            </section>

            {/* Section 8 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{c.section8.title}</h2>
              <p className="text-gray-700 mb-2">
                {c.section8.intro}{' '}
                <Link to="/cookies" className="text-purple-600 hover:underline font-medium">
                  {c.section8.linkText}
                </Link>
                {c.section8.types}
              </p>
              <ul className="list-disc list-inside space-y-2 mb-3">
                {c.section8.items.map((item, idx) => (
                  <li key={idx} className="text-gray-700">{item}</li>
                ))}
              </ul>
              <p className="text-sm text-gray-600">{c.section8.note}</p>
            </section>
            {/* PART 5/5 - Son bölümler (aynı dosyaya devam et) */}
            
            {/* Section 9 - User Rights */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{c.section9.title}</h2>
              <p className="text-gray-700 mb-4">{c.section9.intro}</p>
              <div className="space-y-4">
                {c.section9.rights.map((right) => (
                  <div key={right.num} className="border-l-4 border-purple-500 pl-4">
                    <h4 className="font-bold text-gray-900">
                      {right.num}. {right.title}
                    </h4>
                    <p className="text-sm text-gray-700 mt-1">{right.desc}</p>
                    {right.action && (
                      <p className="text-sm text-purple-600 mt-1">
                        <strong>{right.action}</strong>
                      </p>
                    )}
                    {right.warning && (
                      <p className="text-sm text-red-600 mt-1">{right.warning}</p>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* Section 10 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{c.section10.title}</h2>
              <p className="bg-yellow-50 border-l-4 border-yellow-500 p-4 text-gray-800">
                {c.section10.content}
              </p>
              <p className="text-gray-700 mt-4">{c.section10.parent}</p>
            </section>

            {/* Section 11 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{c.section11.title}</h2>
              <ul className="list-disc list-inside space-y-2">
                {c.section11.items.map((item, idx) => (
                  <li key={idx} className="text-gray-700">{item}</li>
                ))}
              </ul>
            </section>

            {/* Section 12 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{c.section12.title}</h2>
              <ul className="list-disc list-inside space-y-2">
                {c.section12.items.map((item, idx) => (
                  <li key={idx} className="text-gray-700">{item}</li>
                ))}
              </ul>
            </section>

            {/* Section 13 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{c.section13.title}</h2>
              <p className="text-gray-700 mb-4">{c.section13.intro}</p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="mb-2"><strong>{c.section13.dpo}</strong></p>
                <p className="mb-2"><strong>{c.section13.general}</strong></p>
                <p><strong>{c.section13.response}</strong></p>
              </div>
            </section>

            {/* Quick Delete Box */}
            <div className="bg-purple-50 border-l-4 border-purple-500 p-6 mt-8">
              <h3 className="font-bold text-purple-900 mb-2 flex items-center gap-2">
                <UserX className="w-5 h-5" />
                {c.quickDelete.title}
              </h3>
              <p className="text-purple-800 mb-2">
                <strong>{c.quickDelete.icon}</strong>
              </p>
              <p className="text-purple-800 text-sm">{c.quickDelete.note}</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Privacy