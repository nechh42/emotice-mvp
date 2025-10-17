// src/pages/legal/MedicalDisclaimer.tsx - PART 1/2
import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { ArrowLeft, AlertTriangle, Heart, Phone, ExternalLink } from 'lucide-react'
import Navbar from '@/components/Navbar' 
const MedicalDisclaimer = () => {
  const { i18n } = useTranslation()
  
  const content = {
    en: {
      title: 'Medical Disclaimer',
      subtitle: 'Please read carefully',
      lastUpdated: 'Last updated: October 2, 2025',
      backToHome: 'Back to Home',
      
      emergency: {
        title: 'EMERGENCY?',
        text: 'If you have thoughts of harming yourself or others, seek professional help immediately:',
        turkey: { flag: '🇹🇷', country: 'Turkey', lines: ['Emergency: 112', 'Health Line: 182'] },
        usa: { flag: '🇺🇸', country: 'USA', lines: ['Emergency: 911', 'Suicide Hotline: 988'] },
        europe: { flag: '🇪🇺', country: 'Europe', lines: ['Emergency: 112', 'Helpline: 116 123'] }
      },

      section1: {
        title: '1. What is EMOTICE?',
        intro: 'EMOTICE is a digital wellness platform that helps users track their daily moods, develop emotional awareness, and receive support on their personal wellness journey.',
        whatItProvides: 'What EMOTICE PROVIDES:',
        provides: [
          'Daily mood tracking and emoji recording system',
          'Personal emotional statistics and trends',
          'AI-powered motivational and positive psychology messages',
          'Mindfulness and self-care resources',
          'Optional partner sharing (social support)'
        ]
      },

      section2: {
        title: '2. What EMOTICE is NOT',
        warning: 'CRITICAL WARNING',
        intro: 'EMOTICE does NOT provide and CANNOT be used for the following:',
        notProvides: [
          '❌ Not a Medical Device: Not FDA, CE Mark, or TGA approved',
          '❌ Not a Diagnostic Tool: Does not diagnose mental health conditions',
          '❌ Does Not Provide Treatment: No therapy, psychotherapy, or clinical treatment',
          '❌ Does Not Prescribe Medication: No medical prescriptions or drug recommendations',
          '❌ Not Emergency Services: Inadequate for crisis situations',
          '❌ Not Professional Counseling: Not a replacement for licensed therapists'
        ]
      },

      section3: {
        title: '3. About AI Support',
        intro: 'The artificial intelligence (AI) feature used in EMOTICE:',
        points: [
          'For Informational Purposes: Shares general wellness advice, motivational messages, and positive psychology principles',
          'Not Personalized: Does not analyze your specific medical condition',
          'Not Medical Advice: AI responses should not be interpreted as medical recommendations',
          'Can Make Errors: AI technology is not 100% accurate'
        ],
        important: 'Important: No AI response replaces the opinion of a licensed healthcare professional.'
      },

      section4: {
        title: '4. Self-Diagnosis Warning',
        warning: 'Surveys in EMOTICE (WHO-5, PHQ-2, GAD-2, etc.) are for EDUCATIONAL and AWARENESS purposes only. They are NOT clinical diagnostic tools!',
        intro: 'Scores from these surveys:',
        points: [
          'Are for screening purposes (screening, not diagnosis)',
          'Do not replace professional evaluation',
          'Only provide "risk indicators"',
          'Are insufficient for definitive diagnosis'
        ],
        remember: 'Please remember: Mental health conditions such as depression, anxiety, bipolar disorder can only be diagnosed by a licensed psychiatrist or psychologist.'
      },

      section5: {
        title: '5. User Responsibilities',
        intro: 'By using EMOTICE, you agree to:',
        items: [
          'Consult Professional: Seek help from licensed healthcare professionals for mental health concerns',
          'Emergency Protocol: Call emergency services (112, 182, 911, 988) in crisis situations rather than using EMOTICE',
          'Medication Use: Do not stop or change your medications without consulting your doctor',
          'Personal Decisions: Do not make major life decisions based solely on information from EMOTICE',
          'Existing Treatment: Do not replace your existing treatment with EMOTICE'
        ]
      },

      section6: {
        title: '6. When to Seek Professional Help?',
        intro: 'Seek professional help IMMEDIATELY if you have the following symptoms:',
        symptoms: [
          '🚨 Thoughts of harming yourself or others',
          '🚨 Suicide plans or intentions',
          '🚨 Severe depression (unable to get out of bed, dysfunction)',
          '🚨 Panic attacks or severe anxiety',
          '🚨 Difficulty perceiving reality (hallucinations, delusions)',
          '🚨 Substance/alcohol addiction',
          '🚨 Eating disorders (anorexia, bulimia)',
          '🚨 Post-traumatic stress (PTSD)',
          '🚨 Symptoms affecting your daily life'
        ]
      },

      section7: {
        title: '7. Crisis Resources',
        turkey: { title: '🇹🇷 Turkey', items: ['Emergency: 112', 'ALO 182 (Ministry of Health): 182', 'Police Emergency: 155', 'Ministry of Health: saglik.gov.tr'] },
        usa: { title: '🇺🇸 USA', items: ['Emergency: 911', 'Suicide & Crisis Lifeline: 988', 'Crisis Text Line: Text "HELLO" to 741741', '988lifeline.org'] },
        europe: { title: '🇪🇺 Europe', items: ['Emergency: 112', 'Helplines (most countries): 116 123', 'befrienders.org'] },
        international: { title: '🌍 International', items: ['Find a Helpline: findahelpline.com', 'Global Suicide Hotlines: opencounseling.com/suicide-hotlines'] }
      },

      section8: {
        title: '8. Limitation of Liability',
        intro: 'EMOTICE and its operator (Nechh Lab Robotics) are NOT responsible for:',
        items: [
          'Decisions made based on information obtained from the Platform',
          'Self-harm or suicide attempts',
          'Damages resulting from not seeking professional help',
          'AI responses being incorrect or incomplete',
          'Use of the Platform in emergency situations',
          'Medication use, treatment changes, or medical decisions',
          'Worsening of mental health condition'
        ]
      },

      section9: {
        title: '9. Scientific Basis',
        intro: 'Surveys used in EMOTICE (WHO-5, PHQ-2, GAD-2, PSQI) are validated in scientific literature as screening tools. However:',
        points: [
          'These are "self-administered" versions',
          'Require professional supervision in clinical settings',
          'Cannot be used alone for diagnosis',
          'Sensitivity/specificity rates vary'
        ]
      },

      section10: {
        title: '10. Third-Party Links',
        text: 'EMOTICE may contain links to crisis resources and mental health organizations. These links are for informational purposes only and do not constitute endorsement. We are not responsible for third-party content.'
      },

      section11: {
        title: '11. Disclaimer Updates',
        text: 'When this disclaimer is updated, an announcement will be made on the Platform. Continued use means acceptance of the updated disclaimer.'
      },

      section12: {
        title: '12. Contact',
        text: 'For questions about this disclaimer:',
        email: 'Email: legal@emotice.com'
      },

      healthyUse: {
        title: 'Healthy Use Recommendations',
        items: [
          '✓ Make EMOTICE part of your daily wellness routine',
          '✓ Use it to increase your emotional awareness',
          '✓ Connect with loved ones through the partner feature',
          '✓ Get motivation and positive messages from AI',
          '✓ But always prioritize professional help!'
        ]
      },

      acceptance: {
        text: 'By reading and understanding this disclaimer, you acknowledge and accept that EMOTICE is not a medical service.'
      }
    },

    tr: {
      title: 'Tıbbi Sorumluluk Reddi',
      subtitle: 'Lütfen dikkatlice okuyunuz',
      lastUpdated: 'Son güncelleme: 2 Ekim 2025',
      backToHome: 'Ana Sayfaya Dön',
      
      emergency: {
        title: 'ACİL DURUM?',
        text: 'Kendinize veya başkalarına zarar verme düşünceniz varsa, hemen profesyonel yardım alın:',
        turkey: { flag: '🇹🇷', country: 'Türkiye', lines: ['Acil: 112', 'ALO 182: 182'] },
        usa: { flag: '🇺🇸', country: 'ABD', lines: ['Acil: 911', 'İntihar Hattı: 988'] },
        europe: { flag: '🇪🇺', country: 'Avrupa', lines: ['Acil: 112', 'Yardım Hattı: 116 123'] }
      },

      section1: {
        title: '1. EMOTICE Nedir?',
        intro: 'EMOTICE, kullanıcıların günlük ruh hallerini takip etmelerine, duygusal farkındalık geliştirmelerine ve kişisel wellness yolculuklarında destek almalarına yardımcı olan bir dijital wellness platformudur.',
        whatItProvides: 'EMOTICE Neler SUNAR:',
        provides: [
          'Günlük ruh hali takibi ve emoji kayıt sistemi',
          'Kişisel duygusal istatistikler ve trendler',
          'AI destekli motivasyon ve pozitif psikoloji mesajları',
          'Mindfulness ve self-care kaynakları',
          'Opsiyonel partner paylaşımı (sosyal destek)'
        ]
      },

      section2: {
        title: '2. EMOTICE Ne DEĞİLDİR?',
        warning: 'KRİTİK UYARI',
        intro: 'EMOTICE aşağıdakileri SAĞLAMAZ ve bu amaçlarla KULLANILAMAZ:',
        notProvides: [
          '❌ Tıbbi Cihaz Değildir: FDA, CE Mark veya TGA onaylı değildir',
          '❌ Teşhis Aracı Değildir: Mental sağlık tanısı koymaz',
          '❌ Tedavi Sunmaz: Terapi, psikoterapi veya klinik tedavi sağlamaz',
          '❌ İlaç Reçetesi Vermez: Tıbbi reçete veya ilaç önerisi yapmaz',
          '❌ Acil Müdahale Hizmeti Değildir: Kriz durumlarında yetersizdir',
          '❌ Profesyonel Danışmanlık Değildir: Lisanslı terapist yerine geçmez'
        ]
      },

      section3: {
        title: '3. AI Desteği Hakkında',
        intro: 'EMOTICE\'de kullanılan yapay zeka (AI) özelliği:',
        points: [
          'Bilgilendirme Amaçlıdır: Genel wellness tavsiyeleri, motivasyon mesajları ve pozitif psikoloji ilkeleri paylaşır',
          'Kişiselleştirilmiş Değildir: Sizin spesifik tıbbi durumunuzu analiz etmez',
          'Tıbbi Tavsiye Vermez: AI yanıtları tıbbi öneri olarak yorumlanmamalıdır',
          'Hata Yapabilir: AI teknolojisi %100 doğru değildir'
        ],
        important: 'Önemli: AI\'ın verdiği hiçbir yanıt, lisanslı bir sağlık profesyonelinin görüşü yerine geçmez.'
      },

      section4: {
        title: '4. Kendi Kendine Teşhis Uyarısı',
        warning: 'EMOTICE\'deki anketler (WHO-5, PHQ-2, GAD-2, vb.) yalnızca EĞİTİM ve FARKINDALIK amaçlıdır. Klinik teşhis aracı DEĞİLDİR!',
        intro: 'Bu anketlerden aldığınız skorlar:',
        points: [
          'Tarama amaçlıdır (screening, not diagnosis)',
          'Profesyonel değerlendirme yerine geçmez',
          'Yalnızca "risk göstergesi" sağlar',
          'Kesin tanı için yetersizdir'
        ],
        remember: 'Lütfen unutmayın: Depresyon, anksiyete, bipolar bozukluk gibi mental sağlık durumları, yalnızca lisanslı psikiyatrist veya psikolog tarafından teşhis edilebilir.'
      },

      section5: {
        title: '5. Kullanıcı Sorumlulukları',
        intro: 'EMOTICE\'i kullanarak, aşağıdakileri kabul edersiniz:',
        items: [
          'Profesyonel Danışma: Mental sağlık endişeleriniz için lisanslı bir sağlık profesyoneline başvuracaksınız',
          'Acil Durum Protokolü: Kriz anında EMOTICE yerine acil servisleri (112, 182, 911, 988) arayacaksınız',
          'İlaç Kullanımı: İlaçlarınızı doktorunuza danışmadan kesmeyecek veya değiştirmeyeceksiniz',
          'Kişisel Karar: EMOTICE\'deki bilgilere dayanarak önemli yaşam kararları almayacaksınız',
          'Mevcut Tedavi: Var olan tedavinizi EMOTICE ile değiştirmeyeceksiniz'
        ]
      },

      section6: {
        title: '6. Hangi Durumlarda Profesyonel Yardım Almalısınız?',
        intro: 'Aşağıdaki belirtiler varsa DERHAL profesyonel yardım alın:',
        symptoms: [
          '🚨 Kendinize veya başkalarına zarar verme düşünceleri',
          '🚨 İntihar planı veya niyeti',
          '🚨 Şiddetli depresyon (yataktan kalkamama, işlevsizlik)',
          '🚨 Panik ataklar veya şiddetli anksiyete',
          '🚨 Gerçekliği algılamada zorluk (halüsinasyonlar, sanrılar)',
          '🚨 Madde/alkol bağımlılığı',
          '🚨 Yeme bozuklukları (anoreksiya, bulimia)',
          '🚨 Travma sonrası stres (PTSD)',
          '🚨 Günlük yaşamınızı etkileyecek düzeyde belirti'
        ]
      },

      section7: {
        title: '7. Kriz Kaynakları',
        turkey: { title: '🇹🇷 Türkiye', items: ['Acil: 112', 'ALO 182 (Sağlık Bakanlığı): 182', 'Polis İmdat: 155', 'Sağlık Bakanlığı: saglik.gov.tr'] },
        usa: { title: '🇺🇸 ABD', items: ['Acil: 911', 'İntihar & Kriz Hattı: 988', 'Kriz SMS Hattı: "HELLO" mesajı 741741\'e', '988lifeline.org'] },
        europe: { title: '🇪🇺 Avrupa', items: ['Acil: 112', 'Yardım Hatları (çoğu ülke): 116 123', 'befrienders.org'] },
        international: { title: '🌍 Uluslararası', items: ['Yardım Hattı Bul: findahelpline.com', 'Global İntihar Hatları: opencounseling.com/suicide-hotlines'] }
      },

      section8: {
        title: '8. Sorumluluk Sınırlaması',
        intro: 'EMOTICE ve işleteni (Nechh Lab Robotics), aşağıdaki durumlardan SORUMLU DEĞİLDİR:',
        items: [
          'Platform\'dan elde edilen bilgilere dayanarak alınan kararlar',
          'Kendine zarar verme veya intihar girişimleri',
          'Profesyonel yardım almama nedeniyle oluşan zararlar',
          'AI yanıtlarının yanlış veya eksik olması',
          'Acil durumlarda Platform\'un kullanılması',
          'İlaç kullanımı, tedavi değişikliği veya tıbbi kararlar',
          'Mental sağlık durumunun kötüleşmesi'
        ]
      },

      section9: {
        title: '9. Bilimsel Dayanak',
        intro: 'EMOTICE\'de kullanılan anketler (WHO-5, PHQ-2, GAD-2, PSQI) bilimsel literatürde tarama araçları olarak valide edilmiştir. Ancak:',
        points: [
          'Bunlar "kendi kendine uygulanan" versiyonlardır',
          'Klinik ortamda profesyonel gözetimi gerektirir',
          'Tek başına teşhis için kullanılamaz',
          'Hassasiyet/özgüllük oranları değişkendir'
        ]
      },

      section10: {
        title: '10. Üçüncü Taraf Bağlantıları',
        text: 'EMOTICE, kriz kaynakları ve mental sağlık kuruluşlarına bağlantılar içerebilir. Bu bağlantılar yalnızca bilgilendirme amaçlıdır ve onay anlamına gelmez. Üçüncü taraf içeriklerden sorumlu değiliz.'
      },

      section11: {
        title: '11. Disclaimer Güncellemeleri',
        text: 'Bu disclaimer güncellendikinde, Platform\'da duyuru yapılır. Kullanmaya devam etmeniz, güncel disclaimer\'ı kabul ettiğiniz anlamına gelir.'
      },

      section12: {
        title: '12. İletişim',
        text: 'Bu disclaimer hakkında sorularınız için:',
        email: 'E-posta: legal@emotice.com'
      },

      healthyUse: {
        title: 'Sağlıklı Kullanım İçin Öneriler',
        items: [
          '✓ EMOTICE\'i günlük wellness rutininizin bir parçası yapın',
          '✓ Duygusal farkındalığınızı artırmak için kullanın',
          '✓ Partner özelliğiyle sevdiklerinizle bağ kurun',
          '✓ AI\'dan motivasyon ve pozitif mesajlar alın',
          '✓ Ama her zaman profesyonel yardımı öncelik yapın!'
        ]
      },

      acceptance: {
        text: 'Bu disclaimer\'ı okuyup anladığınızı ve EMOTICE\'in tıbbi bir hizmet olmadığını kabul ettiğinizi beyan edersiniz.'
      }
    },

    es: {
      title: 'Descargo de Responsabilidad Médica',
      subtitle: 'Por favor lea cuidadosamente',
      lastUpdated: 'Última actualización: 2 de octubre de 2025',
      backToHome: 'Volver al Inicio',
      
      emergency: {
        title: '¿EMERGENCIA?',
        text: 'Si tiene pensamientos de hacerse daño a sí mismo o a otros, busque ayuda profesional inmediatamente:',
        turkey: { flag: '🇹🇷', country: 'Turquía', lines: ['Emergencia: 112', 'Línea de Salud: 182'] },
        usa: { flag: '🇺🇸', country: 'EE.UU.', lines: ['Emergencia: 911', 'Línea de Suicidio: 988'] },
        europe: { flag: '🇪🇺', country: 'Europa', lines: ['Emergencia: 112', 'Línea de Ayuda: 116 123'] }
      },

      section1: {
        title: '1. ¿Qué es EMOTICE?',
        intro: 'EMOTICE es una plataforma digital de bienestar que ayuda a los usuarios a rastrear sus estados de ánimo diarios, desarrollar conciencia emocional y recibir apoyo en su viaje personal de bienestar.',
        whatItProvides: 'Lo que EMOTICE PROPORCIONA:',
        provides: [
          'Sistema de seguimiento del estado de ánimo diario y registro de emoji',
          'Estadísticas y tendencias emocionales personales',
          'Mensajes motivacionales y de psicología positiva impulsados por IA',
          'Recursos de mindfulness y autocuidado',
          'Compartir opcional con pareja (apoyo social)'
        ]
      },

      section2: {
        title: '2. Lo que EMOTICE NO es',
        warning: 'ADVERTENCIA CRÍTICA',
        intro: 'EMOTICE NO proporciona y NO PUEDE usarse para lo siguiente:',
        notProvides: [
          '❌ No es un Dispositivo Médico: No aprobado por FDA, CE Mark o TGA',
          '❌ No es una Herramienta de Diagnóstico: No diagnostica condiciones de salud mental',
          '❌ No Proporciona Tratamiento: No ofrece terapia, psicoterapia o tratamiento clínico',
          '❌ No Prescribe Medicamentos: No hay prescripciones médicas ni recomendaciones de medicamentos',
          '❌ No es un Servicio de Emergencia: Inadecuado para situaciones de crisis',
          '❌ No es Asesoramiento Profesional: No reemplaza a terapeutas licenciados'
        ]
      },

      section3: {
        title: '3. Acerca del Soporte de IA',
        intro: 'La función de inteligencia artificial (IA) utilizada en EMOTICE:',
        points: [
          'Con Fines Informativos: Comparte consejos generales de bienestar, mensajes motivacionales y principios de psicología positiva',
          'No Personalizado: No analiza su condición médica específica',
          'No es Consejo Médico: Las respuestas de IA no deben interpretarse como recomendaciones médicas',
          'Puede Cometer Errores: La tecnología de IA no es 100% precisa'
        ],
        important: 'Importante: Ninguna respuesta de IA reemplaza la opinión de un profesional de la salud licenciado.'
      },

      section4: {
        title: '4. Advertencia de Autodiagnóstico',
        warning: 'Las encuestas en EMOTICE (WHO-5, PHQ-2, GAD-2, etc.) son solo con fines EDUCATIVOS y de CONCIENCIA. ¡NO son herramientas de diagnóstico clínico!',
        intro: 'Las puntuaciones de estas encuestas:',
        points: [
          'Son con fines de detección (screening, no diagnóstico)',
          'No reemplazan la evaluación profesional',
          'Solo proporcionan "indicadores de riesgo"',
          'Son insuficientes para un diagnóstico definitivo'
        ],
        remember: 'Recuerde: Las condiciones de salud mental como depresión, ansiedad, trastorno bipolar solo pueden ser diagnosticadas por un psiquiatra o psicólogo licenciado.'
      },

      section5: {
        title: '5. Responsabilidades del Usuario',
        intro: 'Al usar EMOTICE, usted acepta:',
        items: [
          'Consultar Profesionales: Buscar ayuda de profesionales de la salud licenciados para problemas de salud mental',
          'Protocolo de Emergencia: Llamar a servicios de emergencia (112, 911, 988) en situaciones de crisis en lugar de usar EMOTICE',
          'Uso de Medicamentos: No suspender ni cambiar sus medicamentos sin consultar a su médico',
          'Decisiones Personales: No tomar decisiones importantes de vida basándose únicamente en información de EMOTICE',
          'Tratamiento Existente: No reemplazar su tratamiento existente con EMOTICE'
        ]
      },

      section6: {
        title: '6. ¿Cuándo Buscar Ayuda Profesional?',
        intro: 'Busque ayuda profesional INMEDIATAMENTE si tiene los siguientes síntomas:',
        symptoms: [
          '🚨 Pensamientos de hacerse daño a sí mismo o a otros',
          '🚨 Planes o intenciones de suicidio',
          '🚨 Depresión severa (incapaz de levantarse de la cama, disfunción)',
          '🚨 Ataques de pánico o ansiedad severa',
          '🚨 Dificultad para percibir la realidad (alucinaciones, delirios)',
          '🚨 Adicción a sustancias/alcohol',
          '🚨 Trastornos alimenticios (anorexia, bulimia)',
          '🚨 Estrés postraumático (TEPT)',
          '🚨 Síntomas que afectan su vida diaria'
        ]
      },

      section7: {
        title: '7. Recursos de Crisis',
        turkey: { title: '🇹🇷 Turquía', items: ['Emergencia: 112', 'ALO 182 (Ministerio de Salud): 182', 'Emergencia Policial: 155', 'Ministerio de Salud: saglik.gov.tr'] },
        usa: { title: '🇺🇸 EE.UU.', items: ['Emergencia: 911', 'Línea de Vida de Suicidio y Crisis: 988', 'Línea de Texto de Crisis: Envía "HELLO" al 741741', '988lifeline.org'] },
        europe: { title: '🇪🇺 Europa', items: ['Emergencia: 112', 'Líneas de Ayuda (mayoría de países): 116 123', 'befrienders.org'] },
        international: { title: '🌍 Internacional', items: ['Encontrar Línea de Ayuda: findahelpline.com', 'Líneas Globales de Suicidio: opencounseling.com/suicide-hotlines'] }
      },

      section8: {
        title: '8. Limitación de Responsabilidad',
        intro: 'EMOTICE y su operador (Nechh Lab Robotics) NO son responsables de:',
        items: [
          'Decisiones tomadas basadas en información obtenida de la Plataforma',
          'Intentos de autolesión o suicidio',
          'Daños resultantes de no buscar ayuda profesional',
          'Respuestas de IA incorrectas o incompletas',
          'Uso de la Plataforma en situaciones de emergencia',
          'Uso de medicamentos, cambios de tratamiento o decisiones médicas',
          'Empeoramiento de la condición de salud mental'
        ]
      },

      section9: {
        title: '9. Base Científica',
        intro: 'Las encuestas utilizadas en EMOTICE (WHO-5, PHQ-2, GAD-2, PSQI) están validadas en la literatura científica como herramientas de detección. Sin embargo:',
        points: [
          'Estas son versiones "autoadministradas"',
          'Requieren supervisión profesional en entornos clínicos',
          'No pueden usarse solas para el diagnóstico',
          'Las tasas de sensibilidad/especificidad varían'
        ]
      },

      section10: {
        title: '10. Enlaces de Terceros',
        text: 'EMOTICE puede contener enlaces a recursos de crisis y organizaciones de salud mental. Estos enlaces son solo con fines informativos y no constituyen respaldo. No somos responsables del contenido de terceros.'
      },

      section11: {
        title: '11. Actualizaciones del Descargo',
        text: 'Cuando se actualice este descargo, se hará un anuncio en la Plataforma. El uso continuado significa la aceptación del descargo actualizado.'
      },

      section12: {
        title: '12. Contacto',
        text: 'Para preguntas sobre este descargo:',
        email: 'Correo electrónico: legal@emotice.com'
      },

      healthyUse: {
        title: 'Recomendaciones para Uso Saludable',
        items: [
          '✓ Haga de EMOTICE parte de su rutina diaria de bienestar',
          '✓ Úselo para aumentar su conciencia emocional',
          '✓ Conéctese con seres queridos a través de la función de pareja',
          '✓ Obtenga motivación y mensajes positivos de IA',
          '✓ ¡Pero siempre priorice la ayuda profesional!'
        ]
      },

      acceptance: {
        text: 'Al leer y comprender este descargo, usted reconoce y acepta que EMOTICE no es un servicio médico.'
      }
    }
  }
  // PART 2/2 - JSX Render (aynı dosyaya devam et)
  
  const lang = (i18n.language.startsWith('tr') ? 'tr' : i18n.language.startsWith('es') ? 'es' : 'en') as 'en' | 'tr' | 'es'
  const c = content[lang]

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      {/* Header */}
      <div className="bg-red-600 text-white shadow-lg">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <Link to="/" className="flex items-center gap-2 text-white hover:text-red-100 mb-4">
            <ArrowLeft className="w-5 h-5" />
            {c.backToHome}
          </Link>
          
          <div className="flex items-center gap-3">
            <AlertTriangle className="w-10 h-10" />
            <div>
              <h1 className="text-3xl font-bold">{c.title}</h1>
              <p className="text-red-100 mt-1">{c.subtitle} | {c.lastUpdated}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Emergency Banner */}
      <div className="bg-red-900 text-white">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-start gap-3">
            <Phone className="w-6 h-6 flex-shrink-0 mt-1 animate-pulse" />
            <div>
              <h2 className="font-bold text-lg mb-2">{c.emergency.title}</h2>
              <p className="text-sm mb-3">{c.emergency.text}</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
                <div className="bg-red-800 p-3 rounded">
                  <p className="font-bold">{c.emergency.turkey.flag} {c.emergency.turkey.country}</p>
                  {c.emergency.turkey.lines.map((line, idx) => (
                    <p key={idx}>{line}</p>
                  ))}
                </div>
                <div className="bg-red-800 p-3 rounded">
                  <p className="font-bold">{c.emergency.usa.flag} {c.emergency.usa.country}</p>
                  {c.emergency.usa.lines.map((line, idx) => (
                    <p key={idx}>{line}</p>
                  ))}
                </div>
                <div className="bg-red-800 p-3 rounded">
                  <p className="font-bold">{c.emergency.europe.flag} {c.emergency.europe.country}</p>
                  {c.emergency.europe.lines.map((line, idx) => (
                    <p key={idx}>{line}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="prose max-w-none space-y-8">
            
            {/* Section 1 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{c.section1.title}</h2>
              <p className="text-gray-700 mb-4">{c.section1.intro}</p>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
                <h3 className="font-bold text-blue-900 mb-2">{c.section1.whatItProvides}</h3>
                <ul className="text-blue-800 space-y-1">
                  {c.section1.provides.map((item, idx) => (
                    <li key={idx}>✓ {item}</li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{c.section2.title}</h2>
              <div className="bg-red-50 border-2 border-red-500 p-6">
                <h3 className="text-red-900 font-bold mb-3 text-xl flex items-center gap-2">
                  <AlertTriangle className="w-6 h-6" />
                  {c.section2.warning}
                </h3>
                <p className="text-red-800 font-bold mb-4">{c.section2.intro}</p>
                <ul className="text-red-800 space-y-2">
                  {c.section2.notProvides.map((item, idx) => (
                    <li key={idx}><strong>{item}</strong></li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{c.section3.title}</h2>
              <p className="text-gray-700 mb-3">{c.section3.intro}</p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                {c.section3.points.map((item, idx) => (
                  <li key={idx} className="text-gray-700">{item}</li>
                ))}
              </ul>
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
                <p className="text-yellow-900 font-bold">{c.section3.important}</p>
              </div>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{c.section4.title}</h2>
              <p className="text-lg font-bold text-red-700 mb-4">{c.section4.warning}</p>
              <p className="text-gray-700 mb-2">{c.section4.intro}</p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                {c.section4.points.map((item, idx) => (
                  <li key={idx} className="text-gray-700">{item}</li>
                ))}
              </ul>
              <div className="bg-orange-50 border-l-4 border-orange-500 p-4">
                <p className="text-orange-900">{c.section4.remember}</p>
              </div>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{c.section5.title}</h2>
              <p className="text-gray-700 mb-3">{c.section5.intro}</p>
              <ol className="list-decimal list-inside space-y-3">
                {c.section5.items.map((item, idx) => (
                  <li key={idx} className="text-gray-700">{item}</li>
                ))}
              </ol>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{c.section6.title}</h2>
              <div className="bg-purple-50 border-2 border-purple-500 p-6">
                <h3 className="font-bold text-purple-900 mb-3">{c.section6.intro}</h3>
                <ul className="text-purple-800 space-y-2">
                  {c.section6.symptoms.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Section 7 - Crisis Resources */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{c.section7.title}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border border-gray-300 rounded p-4">
                  <h4 className="font-bold mb-2">{c.section7.turkey.title}</h4>
                  <ul className="text-sm space-y-1">
                    {c.section7.turkey.items.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="border border-gray-300 rounded p-4">
                  <h4 className="font-bold mb-2">{c.section7.usa.title}</h4>
                  <ul className="text-sm space-y-1">
                    {c.section7.usa.items.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="border border-gray-300 rounded p-4">
                  <h4 className="font-bold mb-2">{c.section7.europe.title}</h4>
                  <ul className="text-sm space-y-1">
                    {c.section7.europe.items.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="border border-gray-300 rounded p-4">
                  <h4 className="font-bold mb-2">{c.section7.international.title}</h4>
                  <ul className="text-sm space-y-1">
                    {c.section7.international.items.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 8 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{c.section8.title}</h2>
              <p className="font-bold text-gray-800 mb-3">{c.section8.intro}</p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                {c.section8.items.map((item, idx) => (
                  <li key={idx} className="text-gray-700">{item}</li>
                ))}
              </ul>
            </section>

            {/* Section 9 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{c.section9.title}</h2>
              <p className="text-gray-700 mb-3">{c.section9.intro}</p>
              <ul className="list-disc list-inside space-y-2">
                {c.section9.points.map((item, idx) => (
                  <li key={idx} className="text-gray-700">{item}</li>
                ))}
              </ul>
            </section>

            {/* Section 10 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{c.section10.title}</h2>
              <p className="text-gray-700">{c.section10.text}</p>
            </section>

            {/* Section 11 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{c.section11.title}</h2>
              <p className="text-gray-700">{c.section11.text}</p>
            </section>

            {/* Section 12 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{c.section12.title}</h2>
              <p className="text-gray-700 mb-2">{c.section12.text}</p>
              <p className="text-gray-700">{c.section12.email}</p>
            </section>

            {/* Healthy Use Box */}
            <div className="bg-green-50 border-l-4 border-green-500 p-6 mt-8">
              <div className="flex items-start gap-3">
                <Heart className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-green-900 mb-2">{c.healthyUse.title}</h3>
                  <ul className="text-green-800 space-y-1">
                    {c.healthyUse.items.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Acceptance */}
            <div className="bg-red-100 border-2 border-red-500 p-6 mt-8 text-center">
              <p className="text-red-900 font-bold text-lg">{c.acceptance.text}</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default MedicalDisclaimer