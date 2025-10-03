// src/pages/legal/Terms.tsx
import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { ArrowLeft, FileText, AlertTriangle } from 'lucide-react'
import Navbar from '@/components/Navbar' // ← YENİ EKLENEN

const Terms = () => {
  const { i18n } = useTranslation()
  
  const content = {
    en: {
      title: 'Terms of Service',
      lastUpdated: 'Last updated: October 2, 2025 | Version 1.0',
      backToHome: 'Back to Home',
      warning: {
        title: 'IMPORTANT WARNING',
        text: 'EMOTICE is not a medical device and does not provide medical advice, diagnosis, or treatment. In emergencies, call 112 (Turkey), 911 (US), or 988 (US Suicide Hotline). For mental health concerns, always consult a licensed healthcare professional.'
      },
      section1: {
        title: '1. Parties and Agreement',
        p1: 'These Terms of Service ("Agreement") are between emotice.com website and mobile application (hereinafter "Platform" or "EMOTICE") and the person using the Platform ("User" or "You").',
        controller: 'Data Controller: Nechh Lab Robotics',
        contact: 'Contact: legal@emotice.com',
        web: 'Website: emotice.com'
      },
      section2: {
        title: '2. Age Requirement and Eligibility',
        p1: 'By using the Platform, you accept, declare, and commit that:',
        items: [
          'You are at least 16 (sixteen) years old',
          'You have read and understood this Agreement completely',
          'You unconditionally accept all terms of the Agreement',
          'The information you provide is accurate and current'
        ],
        warning: 'WARNING: Registration by individuals under 16 years of age is strictly prohibited. Legal responsibility for age declaration lies entirely with the User.'
      },
      section3: {
        title: '3. Platform Purpose and Use',
        subtitle1: '3.1. What EMOTICE Provides',
        p1: 'EMOTICE offers the following features:',
        provides: [
          'Daily mood tracking and recording system',
          'Personal emotional analysis and statistics',
          'AI-powered motivation and wellness support',
          'Optional mood sharing with a partner',
          'Mindfulness and self-care resources'
        ],
        subtitle2: '3.2. What EMOTICE Does NOT Provide',
        p2: 'EMOTICE does NOT provide:',
        notProvides: [
          'Medical diagnosis, treatment, or advice',
          'Psychotherapy or clinical support',
          'Emergency crisis intervention',
          'Prescription medications or medical prescriptions',
          'Professional mental health services'
        ]
      },
      section4: {
        title: '4. User Responsibilities',
        p1: 'As a user, you agree that:',
        items: [
          'You will use the Platform solely for personal wellness purposes',
          'You will not base decisions that could harm yourself on the Platform',
          'You will seek professional help for mental health concerns',
          'You will call emergency services (112, 911, 988) in crisis situations',
          'You understand AI responses are "informative," not "medical advice"'
        ]
      },
      section5: {
        title: '5. Prohibited Uses',
        p1: 'The following actions are strictly prohibited:',
        items: [
          'Using the Platform on behalf of individuals under 16',
          'Providing false information or misleading identity',
          'Unauthorized access to other users\' accounts',
          'Reverse engineering or copying the Platform',
          'Uploading harmful code (viruses, malware)',
          'Using automated bots or scraping tools',
          'Sharing harassment, spam, or hate content'
        ]
      },
      section6: {
        title: '6. Account Management',
        subtitle1: '6.1. Account Creation',
        p1: 'During registration, you must provide a valid email address and create a strong password. Account security is your responsibility.',
        subtitle2: '6.2. Account Termination',
        p2: 'Your account may be terminated if:',
        items: [
          'You are found not to meet the age requirement',
          'You engage in prohibited uses',
          'You violate these Terms',
          'You voluntarily delete your account'
        ]
      },
      section7: {
        title: '7. Intellectual Property',
        p1: 'All content on the Platform (code, design, logos, text, AI models) belongs to or is licensed by Nechh Lab Robotics. Unauthorized copying, distribution, or commercial use is prohibited.'
      },
      section8: {
        title: '8. Limitation of Liability',
        p1: 'EMOTICE is NOT responsible for:',
        items: [
          'Decisions made based on information obtained from the Platform',
          'Inaccuracy or incompleteness of AI responses',
          'Technical failures, data loss, or service interruptions',
          'Third-party attacks (hacking, DDoS, etc.)',
          'Misuse of information shared through the partner feature'
        ],
        p2: 'The Platform is provided "AS IS." No warranties are given. Use at your own risk.'
      },
      section9: {
        title: '9. Privacy and Data Protection',
        p1: 'For detailed information about the processing of your personal data, please read our',
        linkText: 'Privacy Policy',
        p2: '. You have rights under KVKK and GDPR.'
      },
      section10: {
        title: '10. Changes to Terms',
        p1: 'EMOTICE reserves the right to change this Agreement without prior notice. Changes take effect immediately upon publication on the Platform.',
        p2: 'Version number and date are indicated at the top of this page. Continued use of the Platform after changes constitutes acceptance of the new Terms.'
      },
      section11: {
        title: '11. Applicable Law and Jurisdiction',
        p1: 'This Agreement is subject to the laws of the Republic of Turkey. Istanbul Courts and Enforcement Offices have jurisdiction over disputes arising from the Agreement.'
      },
      section12: {
        title: '12. Contact',
        p1: 'For questions:',
        email: 'Email: legal@emotice.com',
        web: 'Website: emotice.com'
      },
      acceptance: {
        title: 'Acceptance',
        text: 'By registering on or using the Platform, you declare that you have read, understood, and accept all terms of this Terms of Service.'
      }
    },
    tr: {
      title: 'Kullanım Koşulları',
      lastUpdated: 'Son güncelleme: 2 Ekim 2025 | Versiyon 1.0',
      backToHome: 'Ana Sayfaya Dön',
      warning: {
        title: 'ÖNEMLİ UYARI',
        text: 'EMOTICE tıbbi bir cihaz değildir ve tıbbi tavsiye, teşhis veya tedavi sağlamaz. Acil durumlarda 112 (Türkiye), 911 (ABD) veya 988 (ABD İntihar Hattı) arayın. Mental sağlık endişeleri için mutlaka lisanslı bir sağlık profesyoneline başvurun.'
      },
      section1: {
        title: '1. Taraflar ve Sözleşme',
        p1: 'Bu Kullanım Koşulları ("Sözleşme"), emotice.com web sitesi ve mobil uygulaması (bundan sonra "Platform" veya "EMOTICE") ile Platform\'u kullanan kişi ("Kullanıcı" veya "Siz") arasında yapılmıştır.',
        controller: 'Veri Sorumlusu: Nechh Lab Robotics',
        contact: 'İletişim: legal@emotice.com',
        web: 'Web: emotice.com'
      },
      section2: {
        title: '2. Yaş Şartı ve Ehliyet',
        p1: 'Platform\'u kullanarak, aşağıdakileri kabul, beyan ve taahhüt edersiniz:',
        items: [
          'En az 16 (on altı) yaşında olduğunuzu',
          'Bu Sözleşme\'yi tamamen okuduğunuzu ve anladığınızı',
          'Sözleşme\'nin tüm maddelerini koşulsuz kabul ettiğinizi',
          'Sağladığınız bilgilerin doğru ve güncel olduğunu'
        ],
        warning: 'UYARI: 16 yaşından küçük bireylerin Platform\'a kaydolması kesinlikle yasaktır. Yaş beyanının hukuki sorumluluğu tamamen Kullanıcı\'ya aittir.'
      },
      section3: {
        title: '3. Platform\'un Amacı ve Kullanım',
        subtitle1: '3.1. EMOTICE Ne Sağlar',
        p1: 'EMOTICE aşağıdaki özellikleri sunar:',
        provides: [
          'Günlük ruh hali takibi ve kayıt sistemi',
          'Kişisel duygusal analiz ve istatistikler',
          'AI destekli motivasyon ve wellness desteği',
          'Opsiyonel olarak bir partner ile ruh hali paylaşımı',
          'Mindfulness ve self-care kaynakları'
        ],
        subtitle2: '3.2. EMOTICE Ne SAĞLAMAZ',
        p2: 'EMOTICE aşağıdakileri SAĞLAMAZ:',
        notProvides: [
          'Tıbbi teşhis, tedavi veya tavsiye',
          'Psikoterapi veya klinik destek',
          'Acil kriz müdahalesi',
          'İlaç reçetesi veya tıbbi reçete',
          'Profesyonel mental sağlık hizmeti'
        ]
      },
      section4: {
        title: '4. Kullanıcı Sorumlulukları',
        p1: 'Kullanıcı olarak şunları kabul edersiniz:',
        items: [
          'Platform\'u yalnızca kişisel wellness amacıyla kullanacaksınız',
          'Kendinize zarar verebilecek kararlar için Platform\'u temel almayacaksınız',
          'Mental sağlık endişeleriniz için profesyonel yardım alacaksınız',
          'Kriz anında acil servisleri (112, 911, 988) arayacaksınız',
          'AI yanıtlarının "bilgilendirici" olduğunu, "tıbbi öneri" olmadığını anlıyorsunuz'
        ]
      },
      section5: {
        title: '5. Yasak Kullanımlar',
        p1: 'Aşağıdaki eylemler kesinlikle yasaktır:',
        items: [
          'Platform\'u 16 yaş altı bireyler adına kullanmak',
          'Sahte bilgi veya yanıltıcı kimlik bilgisi sağlamak',
          'Başka kullanıcıların hesaplarına yetkisiz erişim',
          'Platform\'u tersine mühendislik veya kopyalama',
          'Zararlı kod (virüs, malware) yükleme',
          'Otomatik botlar veya scraping araçları kullanma',
          'Taciz, spam veya nefret içeriği paylaşma'
        ]
      },
      section6: {
        title: '6. Hesap Yönetimi',
        subtitle1: '6.1. Hesap Oluşturma',
        p1: 'Kayıt sırasında geçerli bir e-posta adresi ve güçlü bir şifre belirlemeniz gerekir. Hesabınızın güvenliği sizin sorumluluğunuzdadır.',
        subtitle2: '6.2. Hesap İptali',
        p2: 'Aşağıdaki durumlarda hesabınız iptal edilebilir:',
        items: [
          'Yaş şartını sağlamadığınız tespit edilirse',
          'Yasak kullanımlarda bulunursanız',
          'Bu Şartlar\'ı ihlal ederseniz',
          'Kendi isteğinizle hesabı silerseniz'
        ]
      },
      section7: {
        title: '7. Fikri Mülkiyet',
        p1: 'Platform\'daki tüm içerik (kod, tasarım, logo, metin, AI modelleri) Nechh Lab Robotics\'e aittir veya lisanslıdır. İzinsiz kopyalama, dağıtma veya ticari kullanım yasaktır.'
      },
      section8: {
        title: '8. Sorumluluk Sınırlaması',
        p1: 'EMOTICE aşağıdaki durumlardan sorumlu DEĞİLDİR:',
        items: [
          'Platform\'dan elde ettiğiniz bilgilere dayanarak aldığınız kararlar',
          'AI yanıtlarının yanlışlığı veya eksikliği',
          'Teknik arızalar, veri kayıpları veya servis kesintileri',
          'Üçüncü taraf saldırıları (hacking, DDoS, vb.)',
          'Partner özelliğinde paylaştığınız bilgilerin kötüye kullanımı'
        ],
        p2: 'Platform "OLDUĞU GİBİ" sunulmaktadır. Hiçbir garanti verilmez. Kullanım riski tamamen size aittir.'
      },
      section9: {
        title: '9. Gizlilik ve Veri Koruması',
        p1: 'Kişisel verilerinizin işlenmesi hakkında detaylı bilgi için',
        linkText: 'Gizlilik Politikası',
        p2: '\'nı okuyunuz. KVKK ve GDPR uyarınca haklarınız bulunmaktadır.'
      },
      section10: {
        title: '10. Değişiklikler',
        p1: 'EMOTICE, bu Sözleşme\'yi önceden haber vermeksizin değiştirme hakkını saklı tutar. Değişiklikler Platform\'da yayınlandığı anda yürürlüğe girer.',
        p2: 'Versiyon numarası ve tarih bu sayfanın üstünde belirtilir. Değişikliklerden sonra Platform\'u kullanmaya devam etmeniz, yeni Şartlar\'ı kabul ettiğiniz anlamına gelir.'
      },
      section11: {
        title: '11. Uygulanacak Hukuk ve Yargı',
        p1: 'Bu Sözleşme Türkiye Cumhuriyeti kanunlarına tabidir. Sözleşme\'den doğan uyuşmazlıklarda İstanbul Mahkemeleri ve İcra Daireleri yetkilidir.'
      },
      section12: {
        title: '12. İletişim',
        p1: 'Sorularınız için:',
        email: 'E-posta: legal@emotice.com',
        web: 'Web: emotice.com'
      },
      acceptance: {
        title: 'Onay',
        text: 'Platform\'a kayıt olarak veya Platform\'u kullanarak, bu Kullanım Koşulları\'nı okuduğunuzu, anladığınızı ve tüm maddelerini kabul ettiğinizi beyan edersiniz.'
      }
    },
    es: {
      title: 'Términos de Servicio',
      lastUpdated: 'Última actualización: 2 de octubre de 2025 | Versión 1.0',
      backToHome: 'Volver al Inicio',
      warning: {
        title: 'ADVERTENCIA IMPORTANTE',
        text: 'EMOTICE no es un dispositivo médico y no proporciona asesoramiento, diagnóstico o tratamiento médico. En emergencias, llame al 112 (Turquía), 911 (EE.UU.) o 988 (Línea de Suicidio EE.UU.). Para problemas de salud mental, consulte siempre con un profesional de la salud licenciado.'
      },
      section1: {
        title: '1. Partes y Acuerdo',
        p1: 'Estos Términos de Servicio ("Acuerdo") son entre el sitio web emotice.com y la aplicación móvil (en adelante "Plataforma" o "EMOTICE") y la persona que usa la Plataforma ("Usuario" o "Usted").',
        controller: 'Controlador de Datos: Nechh Lab Robotics',
        contact: 'Contacto: legal@emotice.com',
        web: 'Sitio web: emotice.com'
      },
      section2: {
        title: '2. Requisito de Edad y Elegibilidad',
        p1: 'Al usar la Plataforma, usted acepta, declara y se compromete a que:',
        items: [
          'Tiene al menos 16 (dieciséis) años de edad',
          'Ha leído y entendido este Acuerdo completamente',
          'Acepta incondicionalmente todos los términos del Acuerdo',
          'La información que proporciona es precisa y actual'
        ],
        warning: 'ADVERTENCIA: El registro de personas menores de 16 años está estrictamente prohibido. La responsabilidad legal por la declaración de edad recae completamente en el Usuario.'
      },
      section3: {
        title: '3. Propósito y Uso de la Plataforma',
        subtitle1: '3.1. Lo que EMOTICE Proporciona',
        p1: 'EMOTICE ofrece las siguientes características:',
        provides: [
          'Sistema de seguimiento y registro del estado de ánimo diario',
          'Análisis emocional personal y estadísticas',
          'Apoyo de motivación y bienestar impulsado por IA',
          'Compartir el estado de ánimo opcional con una pareja',
          'Recursos de mindfulness y autocuidado'
        ],
        subtitle2: '3.2. Lo que EMOTICE NO Proporciona',
        p2: 'EMOTICE NO proporciona:',
        notProvides: [
          'Diagnóstico, tratamiento o asesoramiento médico',
          'Psicoterapia o apoyo clínico',
          'Intervención de crisis de emergencia',
          'Medicamentos recetados o prescripciones médicas',
          'Servicios profesionales de salud mental'
        ]
      },
      section4: {
        title: '4. Responsabilidades del Usuario',
        p1: 'Como usuario, usted acepta que:',
        items: [
          'Usará la Plataforma únicamente para fines de bienestar personal',
          'No basará decisiones que puedan dañarlo en la Plataforma',
          'Buscará ayuda profesional para problemas de salud mental',
          'Llamará a los servicios de emergencia (112, 911, 988) en situaciones de crisis',
          'Entiende que las respuestas de IA son "informativas", no "asesoramiento médico"'
        ]
      },
      section5: {
        title: '5. Usos Prohibidos',
        p1: 'Las siguientes acciones están estrictamente prohibidas:',
        items: [
          'Usar la Plataforma en nombre de personas menores de 16 años',
          'Proporcionar información falsa o identidad engañosa',
          'Acceso no autorizado a cuentas de otros usuarios',
          'Ingeniería inversa o copia de la Plataforma',
          'Cargar código dañino (virus, malware)',
          'Usar bots automatizados o herramientas de scraping',
          'Compartir acoso, spam o contenido de odio'
        ]
      },
      section6: {
        title: '6. Gestión de Cuenta',
        subtitle1: '6.1. Creación de Cuenta',
        p1: 'Durante el registro, debe proporcionar una dirección de correo electrónico válida y crear una contraseña segura. La seguridad de la cuenta es su responsabilidad.',
        subtitle2: '6.2. Terminación de Cuenta',
        p2: 'Su cuenta puede ser terminada si:',
        items: [
          'Se descubre que no cumple con el requisito de edad',
          'Participa en usos prohibidos',
          'Viola estos Términos',
          'Elimina voluntariamente su cuenta'
        ]
      },
      section7: {
        title: '7. Propiedad Intelectual',
        p1: 'Todo el contenido de la Plataforma (código, diseño, logotipos, texto, modelos de IA) pertenece a Nechh Lab Robotics o tiene licencia de la misma. La copia, distribución o uso comercial no autorizado está prohibido.'
      },
      section8: {
        title: '8. Limitación de Responsabilidad',
        p1: 'EMOTICE NO es responsable de:',
        items: [
          'Decisiones tomadas basadas en información obtenida de la Plataforma',
          'Inexactitud o incompletitud de las respuestas de IA',
          'Fallas técnicas, pérdida de datos o interrupciones del servicio',
          'Ataques de terceros (hacking, DDoS, etc.)',
          'Uso indebido de información compartida a través de la función de pareja'
        ],
        p2: 'La Plataforma se proporciona "TAL CUAL". No se dan garantías. Use bajo su propio riesgo.'
      },
      section9: {
        title: '9. Privacidad y Protección de Datos',
        p1: 'Para información detallada sobre el procesamiento de sus datos personales, lea nuestra',
        linkText: 'Política de Privacidad',
        p2: '. Tiene derechos bajo KVKK y GDPR.'
      },
      section10: {
        title: '10. Cambios en los Términos',
        p1: 'EMOTICE se reserva el derecho de cambiar este Acuerdo sin previo aviso. Los cambios entran en vigor inmediatamente después de su publicación en la Plataforma.',
        p2: 'El número de versión y la fecha se indican en la parte superior de esta página. El uso continuado de la Plataforma después de los cambios constituye la aceptación de los nuevos Términos.'
      },
      section11: {
        title: '11. Ley Aplicable y Jurisdicción',
        p1: 'Este Acuerdo está sujeto a las leyes de la República de Turquía. Los tribunales y oficinas de ejecución de Estambul tienen jurisdicción sobre las disputas que surjan del Acuerdo.'
      },
      section12: {
        title: '12. Contacto',
        p1: 'Para preguntas:',
        email: 'Correo electrónico: legal@emotice.com',
        web: 'Sitio web: emotice.com'
      },
      acceptance: {
        title: 'Aceptación',
        text: 'Al registrarse o usar la Plataforma, declara que ha leído, entendido y acepta todos los términos de estos Términos de Servicio.'
      }
    }
  }

  const lang = (i18n.language.startsWith('tr') ? 'tr' : i18n.language.startsWith('es') ? 'es' : 'en') as 'en' | 'tr' | 'es'
  const c = content[lang]

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />0
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <Link to="/" className="flex items-center gap-2 text-purple-600 hover:text-purple-700 mb-4">
            <ArrowLeft className="w-5 h-5" />
            {c.backToHome}
          </Link>
          
          <div className="flex items-center gap-3">
            <FileText className="w-8 h-8 text-purple-600" />
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{c.title}</h1>
              <p className="text-gray-600 mt-1">{c.lastUpdated}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm p-8">
          
          <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-8">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-red-900 mb-2">{c.warning.title}</h3>
                <p className="text-red-800 text-sm leading-relaxed">{c.warning.text}</p>
              </div>
            </div>
          </div>

          <div className="prose max-w-none space-y-8">
            
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{c.section1.title}</h2>
              <p className="text-gray-700 leading-relaxed mb-4">{c.section1.p1}</p>
              <div className="bg-gray-50 p-4 rounded">
                <p className="text-sm"><strong>{c.section1.controller}</strong></p>
                <p className="text-sm"><strong>{c.section1.contact}</strong></p>
                <p className="text-sm"><strong>{c.section1.web}</strong></p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{c.section2.title}</h2>
              <p className="text-gray-700 leading-relaxed mb-3">{c.section2.p1}</p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                {c.section2.items.map((item, idx) => (
                  <li key={idx} className="text-gray-700">{item}</li>
                ))}
              </ul>
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
                <p className="text-yellow-900 text-sm">{c.section2.warning}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{c.section3.title}</h2>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{c.section3.subtitle1}</h3>
              <p className="text-gray-700 mb-2">{c.section3.p1}</p>
              <ul className="list-disc list-inside space-y-2 mb-6">
                {c.section3.provides.map((item, idx) => (
                  <li key={idx} className="text-gray-700">{item}</li>
                ))}
              </ul>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{c.section3.subtitle2}</h3>
              <p className="text-red-700 font-bold mb-2">{c.section3.p2}</p>
              <ul className="list-disc list-inside space-y-2 text-red-700">
                {c.section3.notProvides.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{c.section4.title}</h2>
              <p className="text-gray-700 mb-3">{c.section4.p1}</p>
              <ul className="list-disc list-inside space-y-2">
                {c.section4.items.map((item, idx) => (
                  <li key={idx} className="text-gray-700">{item}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{c.section5.title}</h2>
              <p className="text-gray-700 mb-3">{c.section5.p1}</p>
              <ul className="list-disc list-inside space-y-2">
                {c.section5.items.map((item, idx) => (
                  <li key={idx} className="text-gray-700">{item}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{c.section6.title}</h2>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{c.section6.subtitle1}</h3>
              <p className="text-gray-700 mb-6">{c.section6.p1}</p>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{c.section6.subtitle2}</h3>
              <p className="text-gray-700 mb-2">{c.section6.p2}</p>
              <ul className="list-disc list-inside space-y-2">
                {c.section6.items.map((item, idx) => (
                  <li key={idx} className="text-gray-700">{item}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{c.section7.title}</h2>
              <p className="text-gray-700">{c.section7.p1}</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{c.section8.title}</h2>
              <p className="text-gray-700 mb-3">{c.section8.p1}</p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                {c.section8.items.map((item, idx) => (
                  <li key={idx} className="text-gray-700">{item}</li>
                ))}
              </ul>
              <div className="bg-gray-100 p-4 rounded">
                <p className="text-gray-800 font-medium">{c.section8.p2}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{c.section9.title}</h2>
              <p className="text-gray-700">
                {c.section9.p1}{' '}
                <Link to="/privacy" className="text-purple-600 hover:underline font-medium">
                  {c.section9.linkText}
                </Link>
                {c.section9.p2}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{c.section10.title}</h2>
              <p className="text-gray-700 mb-3">{c.section10.p1}</p>
              <p className="text-gray-700">{c.section10.p2}</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{c.section11.title}</h2>
              <p className="text-gray-700">{c.section11.p1}</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{c.section12.title}</h2>
              <p className="text-gray-700 mb-2">{c.section12.p1}</p>
              <p className="text-gray-700">{c.section12.email}</p>
              <p className="text-gray-700">{c.section12.web}</p>
            </section>

            <div className="bg-purple-50 border-l-4 border-purple-500 p-6 mt-8">
              <h3 className="font-bold text-purple-900 mb-2">{c.acceptance.title}</h3>
              <p className="text-purple-800">{c.acceptance.text}</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Terms