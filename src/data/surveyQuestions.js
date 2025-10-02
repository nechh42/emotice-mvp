// src/data/surveyQuestions.js
// Clinical screening tools: WHO-5, PHQ-2/9, GAD-2/7, PSQI, stress assessment

export const surveyQuestions = {
  // WHO-5 Wellbeing Index (validated screening tool)
  wellbeing: {
    id: 'who5',
    title: {
      en: 'General Wellbeing (WHO-5)',
      tr: 'Genel İyilik Hali (WHO-5)',
      es: 'Bienestar General (WHO-5)'
    },
    description: {
      en: 'Over the last 2 weeks, how often have you felt...',
      tr: 'Son 2 haftada ne sıklıkla hissettiniz...',
      es: 'En las últimas 2 semanas, ¿con qué frecuencia se ha sentido...?'
    },
    required: true,
    questions: [
      {
        id: 'who5_1',
        text: {
          en: 'I have felt cheerful and in good spirits',
          tr: 'Kendimi neşeli ve iyi ruh halinde hissettim',
          es: 'Me he sentido alegre y de buen ánimo'
        },
        type: 'scale',
        scale: {
          min: 0,
          max: 5,
          labels: {
            en: ['Never', 'Rarely', 'Sometimes', 'Often', 'Most of the time', 'All the time'],
            tr: ['Hiçbir zaman', 'Nadiren', 'Bazen', 'Sıklıkla', 'Çoğu zaman', 'Her zaman'],
            es: ['Nunca', 'Raramente', 'A veces', 'A menudo', 'La mayoría del tiempo', 'Todo el tiempo']
          }
        }
      },
      {
        id: 'who5_2',
        text: {
          en: 'I have felt calm and relaxed',
          tr: 'Kendimi sakin ve rahat hissettim',
          es: 'Me he sentido calmado y relajado'
        },
        type: 'scale',
        scale: { min: 0, max: 5 }
      },
      {
        id: 'who5_3',
        text: {
          en: 'I have felt active and vigorous',
          tr: 'Kendimi aktif ve enerjik hissettim',
          es: 'Me he sentido activo y vigoroso'
        },
        type: 'scale',
        scale: { min: 0, max: 5 }
      },
      {
        id: 'who5_4',
        text: {
          en: 'I woke up feeling fresh and rested',
          tr: 'Taze ve dinlenmiş olarak uyandım',
          es: 'Me desperté sintiéndome fresco y descansado'
        },
        type: 'scale',
        scale: { min: 0, max: 5 }
      },
      {
        id: 'who5_5',
        text: {
          en: 'My daily life has been filled with things that interest me',
          tr: 'Günlük hayatım ilgimi çeken şeylerle doluydu',
          es: 'Mi vida diaria ha estado llena de cosas que me interesan'
        },
        type: 'scale',
        scale: { min: 0, max: 5 }
      }
    ],
    scoring: {
      calculation: 'sum * 4',
      range: [0, 100],
      thresholds: {
        low: { max: 50, severity: 'low_wellbeing' },
        moderate: { min: 51, max: 75, severity: 'moderate_wellbeing' },
        high: { min: 76, severity: 'high_wellbeing' }
      },
      interpretation: {
        en: {
          low_wellbeing: 'Your score suggests low wellbeing. Consider speaking with a mental health professional.',
          moderate_wellbeing: 'Your wellbeing is moderate. Focus on self-care activities.',
          high_wellbeing: 'You have good wellbeing. Keep up your positive habits!'
        },
        tr: {
          low_wellbeing: 'Skorunuz düşük iyilik hali gösteriyor. Bir ruh sağlığı uzmanıyla konuşmayı düşünün.',
          moderate_wellbeing: 'İyilik haliniz orta düzeyde. Kendinize bakım aktivitelerine odaklanın.',
          high_wellbeing: 'İyi bir iyilik haliniz var. Olumlu alışkanlıklarınızı sürdürün!'
        },
        es: {
          low_wellbeing: 'Su puntuación sugiere bajo bienestar. Considere hablar con un profesional de salud mental.',
          moderate_wellbeing: 'Su bienestar es moderado. Concéntrese en actividades de autocuidado.',
          high_wellbeing: 'Tiene buen bienestar. ¡Mantenga sus hábitos positivos!'
        }
      }
    }
  },

  // PHQ-2/9 Depression Screening
  depression: {
    id: 'phq',
    title: {
      en: 'Depression Screening (PHQ-2/9)',
      tr: 'Depresyon Taraması (PHQ-2/9)',
      es: 'Detección de Depresión (PHQ-2/9)'
    },
    description: {
      en: 'Over the last 2 weeks, how often have you been bothered by...',
      tr: 'Son 2 haftada ne sıklıkla rahatsız oldunuz...',
      es: 'En las últimas 2 semanas, ¿con qué frecuencia le ha molestado...?'
    },
    required: true,
    adaptive: true, // PHQ-2 first, then PHQ-9 if score >= 3
    questions: [
      // PHQ-2 (always shown)
      {
        id: 'phq_1',
        text: {
          en: 'Little interest or pleasure in doing things',
          tr: 'Bir şeyler yapmaya karşı ilgisizlik veya zevk alamama',
          es: 'Poco interés o placer en hacer cosas'
        },
        type: 'scale',
        scale: {
          min: 0,
          max: 3,
          labels: {
            en: ['Not at all', 'Several days', 'More than half the days', 'Nearly every day'],
            tr: ['Hiç', 'Birkaç gün', 'Günlerin yarısından fazlası', 'Neredeyse her gün'],
            es: ['Para nada', 'Varios días', 'Más de la mitad de los días', 'Casi todos los días']
          }
        }
      },
      {
        id: 'phq_2',
        text: {
          en: 'Feeling down, depressed, or hopeless',
          tr: 'Kendini üzgün, depresif veya umutsuz hissetme',
          es: 'Sentirse deprimido, triste o sin esperanza'
        },
        type: 'scale',
        scale: { min: 0, max: 3 }
      },
      // PHQ-9 additional questions (shown if PHQ-2 >= 3)
      {
        id: 'phq_3',
        conditional: { field: 'phq_2_score', operator: '>=', value: 3 },
        text: {
          en: 'Trouble falling or staying asleep, or sleeping too much',
          tr: 'Uyumakta zorlanma, uykuda kalamama veya çok uyuma',
          es: 'Problemas para conciliar el sueño, permanecer dormido o dormir demasiado'
        },
        type: 'scale',
        scale: { min: 0, max: 3 }
      },
      {
        id: 'phq_4',
        conditional: { field: 'phq_2_score', operator: '>=', value: 3 },
        text: {
          en: 'Feeling tired or having little energy',
          tr: 'Yorgun hissetme veya az enerjiye sahip olma',
          es: 'Sentirse cansado o tener poca energía'
        },
        type: 'scale',
        scale: { min: 0, max: 3 }
      },
      {
        id: 'phq_5',
        conditional: { field: 'phq_2_score', operator: '>=', value: 3 },
        text: {
          en: 'Poor appetite or overeating',
          tr: 'Kötü iştah veya aşırı yeme',
          es: 'Poco apetito o comer en exceso'
        },
        type: 'scale',
        scale: { min: 0, max: 3 }
      },
      {
        id: 'phq_6',
        conditional: { field: 'phq_2_score', operator: '>=', value: 3 },
        text: {
          en: 'Feeling bad about yourself or that you are a failure',
          tr: 'Kendin hakkında kötü hissetme veya başarısız olduğunu düşünme',
          es: 'Sentirse mal consigo mismo o que eres un fracaso'
        },
        type: 'scale',
        scale: { min: 0, max: 3 }
      },
      {
        id: 'phq_7',
        conditional: { field: 'phq_2_score', operator: '>=', value: 3 },
        text: {
          en: 'Trouble concentrating on things',
          tr: 'Bir şeylere konsantre olmakta zorlanma',
          es: 'Problemas para concentrarse en las cosas'
        },
        type: 'scale',
        scale: { min: 0, max: 3 }
      },
      {
        id: 'phq_8',
        conditional: { field: 'phq_2_score', operator: '>=', value: 3 },
        text: {
          en: 'Moving or speaking slowly, or being fidgety/restless',
          tr: 'Yavaş hareket etme veya konuşma, ya da huzursuz/sakin duramama',
          es: 'Moverse o hablar lentamente, o estar inquieto/agitado'
        },
        type: 'scale',
        scale: { min: 0, max: 3 }
      },
      {
        id: 'phq_9',
        conditional: { field: 'phq_2_score', operator: '>=', value: 3 },
        text: {
          en: 'Thoughts that you would be better off dead, or thoughts of hurting yourself',
          tr: 'Ölmüş olmanın daha iyi olacağı veya kendine zarar verme düşünceleri',
          es: 'Pensamientos de que estarías mejor muerto o de hacerte daño'
        },
        type: 'scale',
        scale: { min: 0, max: 3 },
        critical: true, // Trigger crisis resources if > 0
        crisisAlert: {
          en: 'If you are having thoughts of self-harm, please contact emergency services immediately: 911 (US), 112 (EU), 182 (Turkey)',
          tr: 'Kendine zarar verme düşünceleriniz varsa, lütfen acil servislere derhal başvurun: 112 (Türkiye), 911 (ABD), 112 (AB)',
          es: 'Si tiene pensamientos de autolesión, comuníquese con los servicios de emergencia de inmediato: 911 (EE.UU.), 112 (UE), 182 (Turquía)'
        }
      }
    ],
    scoring: {
      calculation: 'sum',
      range: [0, 27],
      thresholds: {
        minimal: { max: 4, severity: 'minimal' },
        mild: { min: 5, max: 9, severity: 'mild' },
        moderate: { min: 10, max: 14, severity: 'moderate' },
        moderately_severe: { min: 15, max: 19, severity: 'moderately_severe' },
        severe: { min: 20, severity: 'severe' }
      }
    }
  },

  // GAD-2/7 Anxiety Screening
  anxiety: {
    id: 'gad',
    title: {
      en: 'Anxiety Screening (GAD-2/7)',
      tr: 'Anksiyete Taraması (GAD-2/7)',
      es: 'Detección de Ansiedad (GAD-2/7)'
    },
    description: {
      en: 'Over the last 2 weeks, how often have you been bothered by...',
      tr: 'Son 2 haftada ne sıklıkla rahatsız oldunuz...',
      es: 'En las últimas 2 semanas, ¿con qué frecuencia le ha molestado...?'
    },
    required: true,
    adaptive: true,
    questions: [
      {
        id: 'gad_1',
        text: {
          en: 'Feeling nervous, anxious, or on edge',
          tr: 'Sinirli, endişeli veya gergin hissetme',
          es: 'Sentirse nervioso, ansioso o al límite'
        },
        type: 'scale',
        scale: { min: 0, max: 3 }
      },
      {
        id: 'gad_2',
        text: {
          en: 'Not being able to stop or control worrying',
          tr: 'Endişelenmeyi durduramama veya kontrol edememe',
          es: 'No poder dejar de preocuparse o controlar las preocupaciones'
        },
        type: 'scale',
        scale: { min: 0, max: 3 }
      },
      {
        id: 'gad_3',
        conditional: { field: 'gad_2_score', operator: '>=', value: 3 },
        text: {
          en: 'Worrying too much about different things',
          tr: 'Farklı şeyler hakkında çok fazla endişelenme',
          es: 'Preocuparse demasiado por diferentes cosas'
        },
        type: 'scale',
        scale: { min: 0, max: 3 }
      },
      {
        id: 'gad_4',
        conditional: { field: 'gad_2_score', operator: '>=', value: 3 },
        text: {
          en: 'Trouble relaxing',
          tr: 'Rahatlamakta zorlanma',
          es: 'Dificultad para relajarse'
        },
        type: 'scale',
        scale: { min: 0, max: 3 }
      },
      {
        id: 'gad_5',
        conditional: { field: 'gad_2_score', operator: '>=', value: 3 },
        text: {
          en: 'Being so restless that it is hard to sit still',
          tr: 'Oturmayı zorlaştıracak kadar huzursuz olma',
          es: 'Estar tan inquieto que es difícil quedarse quieto'
        },
        type: 'scale',
        scale: { min: 0, max: 3 }
      },
      {
        id: 'gad_6',
        conditional: { field: 'gad_2_score', operator: '>=', value: 3 },
        text: {
          en: 'Becoming easily annoyed or irritable',
          tr: 'Kolayca sinirlenen veya huysuzlaşan',
          es: 'Irritarse o enfadarse fácilmente'
        },
        type: 'scale',
        scale: { min: 0, max: 3 }
      },
      {
        id: 'gad_7',
        conditional: { field: 'gad_2_score', operator: '>=', value: 3 },
        text: {
          en: 'Feeling afraid, as if something awful might happen',
          tr: 'Korku hissetme, sanki korkunç bir şey olacakmış gibi',
          es: 'Sentir miedo, como si algo terrible pudiera suceder'
        },
        type: 'scale',
        scale: { min: 0, max: 3 }
      }
    ],
    scoring: {
      calculation: 'sum',
      range: [0, 21],
      thresholds: {
        minimal: { max: 4, severity: 'minimal' },
        mild: { min: 5, max: 9, severity: 'mild' },
        moderate: { min: 10, max: 14, severity: 'moderate' },
        severe: { min: 15, severity: 'severe' }
      }
    }
  },

  // Sleep Quality (PSQI-based)
  sleep: {
    id: 'sleep',
    title: {
      en: 'Sleep Quality',
      tr: 'Uyku Kalitesi',
      es: 'Calidad del Sueño'
    },
    description: {
      en: 'Over the past month...',
      tr: 'Geçen ay boyunca...',
      es: 'Durante el último mes...'
    },
    required: false,
    questions: [
      {
        id: 'sleep_1',
        text: {
          en: 'How would you rate your sleep quality overall?',
          tr: 'Genel uyku kalitenizi nasıl değerlendirirsiniz?',
          es: '¿Cómo calificaría su calidad de sueño en general?'
        },
        type: 'scale',
        scale: {
          min: 0,
          max: 3,
          labels: {
            en: ['Very good', 'Fairly good', 'Fairly bad', 'Very bad'],
            tr: ['Çok iyi', 'Oldukça iyi', 'Oldukça kötü', 'Çok kötü'],
            es: ['Muy buena', 'Bastante buena', 'Bastante mala', 'Muy mala']
          }
        }
      },
      {
        id: 'sleep_2',
        text: {
          en: 'How many hours of actual sleep did you get per night?',
          tr: 'Geceleri kaç saat gerçek uyku aldınız?',
          es: '¿Cuántas horas de sueño real obtuvo por noche?'
        },
        type: 'number',
        range: { min: 0, max: 24 }
      },
      {
        id: 'sleep_3',
        text: {
          en: 'How long did it usually take you to fall asleep?',
          tr: 'Uykuya dalmak genellikle ne kadar sürdü?',
          es: '¿Cuánto tiempo le tomó normalmente quedarse dormido?'
        },
        type: 'select',
        options: {
          en: ['<15 minutes', '16-30 minutes', '31-60 minutes', '>60 minutes'],
          tr: ['<15 dakika', '16-30 dakika', '31-60 dakika', '>60 dakika'],
          es: ['<15 minutos', '16-30 minutos', '31-60 minutos', '>60 minutos']
        }
      },
      {
        id: 'sleep_4',
        text: {
          en: 'How often did you have trouble sleeping?',
          tr: 'Ne sıklıkla uyku sorunu yaşadınız?',
          es: '¿Con qué frecuencia tuvo problemas para dormir?'
        },
        type: 'scale',
        scale: {
          min: 0,
          max: 3,
          labels: {
            en: ['Not in past month', 'Less than once a week', 'Once or twice a week', 'Three or more times a week'],
            tr: ['Geçen ay hiç', 'Haftada birden az', 'Haftada bir veya iki kez', 'Haftada üç veya daha fazla'],
            es: ['No en el último mes', 'Menos de una vez por semana', 'Una o dos veces por semana', 'Tres o más veces por semana']
          }
        }
      }
    ],
    scoring: {
      calculation: 'weighted',
      thresholds: {
        good: { max: 5, severity: 'good' },
        poor: { min: 6, severity: 'poor' }
      }
    }
  },

  // Stress & Triggers
  stress: {
    id: 'stress',
    title: {
      en: 'Stress & Triggers',
      tr: 'Stres ve Tetikleyiciler',
      es: 'Estrés y Desencadenantes'
    },
    description: {
      en: 'Help us understand your stress levels',
      tr: 'Stres seviyenizi anlamamıza yardımcı olun',
      es: 'Ayúdenos a comprender sus niveles de estrés'
    },
    required: true,
    questions: [
      {
        id: 'stress_1',
        text: {
          en: 'On a scale of 0-10, how stressed do you feel right now?',
          tr: '0-10 ölçeğinde, şu anda ne kadar stresli hissediyorsunuz?',
          es: 'En una escala de 0 a 10, ¿qué tan estresado se siente ahora?'
        },
        type: 'slider',
        scale: { min: 0, max: 10 }
      },
      {
        id: 'stress_2',
        text: {
          en: 'What is your primary source of stress?',
          tr: 'Birincil stres kaynağınız nedir?',
          es: '¿Cuál es su principal fuente de estrés?'
        },
        type: 'multiselect',
        options: {
          en: ['Work/School', 'Finances', 'Relationships', 'Health', 'Uncertainty', 'Family', 'Other'],
          tr: ['İş/Okul', 'Finans', 'İlişkiler', 'Sağlık', 'Belirsizlik', 'Aile', 'Diğer'],
          es: ['Trabajo/Escuela', 'Finanzas', 'Relaciones', 'Salud', 'Incertidumbre', 'Familia', 'Otro']
        }
      },
      {
        id: 'stress_3',
        text: {
          en: 'How often do you want to record your mood?',
          tr: 'Ne sıklıkla ruh halinizi kaydetmek istersiniz?',
          es: '¿Con qué frecuencia desea registrar su estado de ánimo?'
        },
        type: 'select',
        options: {
          en: ['Once a day', '2-3 times a day', '4+ times a day'],
          tr: ['Günde bir kez', 'Günde 2-3 kez', 'Günde 4 veya daha fazla'],
          es: ['Una vez al día', '2-3 veces al día', '4+ veces al día']
        }
      }
    ]
  },

  // Support & Preferences
  preferences: {
    id: 'preferences',
    title: {
      en: 'Support & Preferences',
      tr: 'Destek ve Tercihler',
      es: 'Apoyo y Preferencias'
    },
    description: {
      en: 'Help us personalize your experience',
      tr: 'Deneyiminizi kişiselleştirmemize yardımcı olun',
      es: 'Ayúdenos a personalizar su experiencia'
    },
    required: false,
    questions: [
      {
        id: 'pref_1',
        text: {
          en: 'Are you currently receiving mental health support?',
          tr: 'Şu anda ruh sağlığı desteği alıyor musunuz?',
          es: '¿Está recibiendo actualmente apoyo de salud mental?'
        },
        type: 'select',
        options: {
          en: ['Yes, therapy/medication', 'No, but planning to', 'No', 'Prefer not to say'],
          tr: ['Evet, terapi/ilaç', 'Hayır, ama planlıyorum', 'Hayır', 'Söylemek istemiyorum'],
          es: ['Sí, terapia/medicación', 'No, pero planeando', 'No', 'Prefiero no decir']
        }
      },
      {
        id: 'pref_2',
        text: {
          en: 'How would you like to receive motivational messages?',
          tr: 'Motivasyon mesajlarını nasıl almak istersiniz?',
          es: '¿Cómo le gustaría recibir mensajes motivacionales?'
        },
        type: 'multiselect',
        options: {
          en: ['Push notifications', 'Email', 'In-app only'],
          tr: ['Bildirimler', 'E-posta', 'Sadece uygulama içi'],
          es: ['Notificaciones push', 'Correo electrónico', 'Solo en la aplicación']
        }
      },
      {
        id: 'pref_3',
        text: {
          en: 'What are your interests? (for personalized suggestions)',
          tr: 'İlgi alanlarınız nedir? (kişiselleştirilmiş öneriler için)',
          es: '¿Cuáles son sus intereses? (para sugerencias personalizadas)'
        },
        type: 'multiselect',
        options: {
          en: ['Music', 'Mindfulness', 'Exercise', 'Reading', 'Nature', 'Art', 'Other'],
          tr: ['Müzik', 'Mindfulness', 'Egzersiz', 'Okuma', 'Doğa', 'Sanat', 'Diğer'],
          es: ['Música', 'Mindfulness', 'Ejercicio', 'Lectura', 'Naturaleza', 'Arte', 'Otro']
        }
      }
    ]
  }
};

// Helper function to calculate scores
export const calculateScore = (questionnaireId, answers) => {
  const questionnaire = surveyQuestions[questionnaireId];
  if (!questionnaire || !questionnaire.scoring) return null;

  let score = 0;
  
  if (questionnaire.scoring.calculation === 'sum') {
    score = Object.values(answers).reduce((sum, val) => sum + (val || 0), 0);
  } else if (questionnaire.scoring.calculation === 'sum * 4') {
    const sum = Object.values(answers).reduce((total, val) => total + (val || 0), 0);
    score = sum * 4;
  }

  // Find severity level
  let severity = null;
  const thresholds = questionnaire.scoring.thresholds;
  
  for (const [key, range] of Object.entries(thresholds)) {
    if (range.min !== undefined && range.max !== undefined) {
      if (score >= range.min && score <= range.max) {
        severity = range.severity;
        break;
      }
    } else if (range.max !== undefined && score <= range.max) {
      severity = range.severity;
      break;
    } else if (range.min !== undefined && score >= range.min) {
      severity = range.severity;
      break;
    }
  }

  return { score, severity };
};

// Check if crisis intervention needed
export const checkCrisisAlert = (answers) => {
  // PHQ-9 question 9 (suicide ideation)
  if (answers.phq_9 && answers.phq_9 > 0) {
    return {
      critical: true,
      message: surveyQuestions.depression.questions.find(q => q.id === 'phq_9').crisisAlert
    };
  }
  return { critical: false };
};

export default surveyQuestions;