// EMOTICE MIRROR - AI Pattern Detection Service
import { supabase } from './supabase.js';

// OpenAI client
const openAIClient = {
  async chatCompletion(messages, systemPrompt = '') {
    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + import.meta.env.VITE_OPENAI_API_KEY
        },
        body: JSON.stringify({
          model: 'gpt-4o-mini',
          messages: [
            { role: 'system', content: systemPrompt },
            ...messages
          ],
          max_tokens: 500,
          temperature: 0.7
        })
      });

      if (!response.ok) {
        throw new Error('OpenAI API error: ' + response.status);
      }

      const data = await response.json();
      return data.choices[0].message.content;
    } catch (error) {
      console.error('OpenAI API Error:', error);
      throw new Error('AI yanıtı alınamadı. Lütfen daha sonra tekrar deneyin.');
    }
  }
};

// Partner mood pattern analysis with AI
export const analyzeMoodPatternsWithAI = async (userMoods, partnerMoods, userName = 'Kullanıcı', partnerName = 'Partner') => {
  try {
    const userMoodText = formatMoodDataForAI(userMoods, userName);
    const partnerMoodText = formatMoodDataForAI(partnerMoods, partnerName);

    const systemPrompt = `Sen EMOTICE MIRROR'ın AI analiz asistanısın. İki kişinin mood verilerini analiz edip pattern'leri bul, ilişki dinamiklerini anla ve yapıcı önerilerde bulun. ASLA tıbbi tavsiye verme. Pozitif ve destekleyici ol. Kısa, öz ve anlaşılır yanıtlar ver. İlişkiyi güçlendirici tavsiyelerde bulun. Format: JSON olarak döndür: { "patterns": { "sameMoodDays": sayı, "oppositeMoodDays": sayı, "correlation": yüzde, "trend": "artıyor/azalıyor/durağan" }, "insights": ["insight1", "insight2"], "suggestions": ["öneri1", "öneri2"], "summary": "kısa özet" }`;

    const userPrompt = `İKİ KİŞİNİN MOOD VERİLERİ:\n\n${userMoodText}\n\n${partnerMoodText}\n\nLütfen bu verileri analiz edip yukarıdaki JSON formatında yanıt ver.`;

    const aiResponse = await openAIClient.chatCompletion(
      [{ role: 'user', content: userPrompt }],
      systemPrompt
    );

    let parsedResponse;
    try {
      parsedResponse = JSON.parse(aiResponse);
    } catch (parseError) {
      console.error('AI response parse error:', parseError);
      parsedResponse = {
        patterns: { sameMoodDays: 0, oppositeMoodDays: 0, correlation: 50, trend: 'durağan' },
        insights: ['Veriler analiz ediliyor...'],
        suggestions: ['Birbirinizle iletişimde kalmaya devam edin.'],
        summary: 'Mood pattern analizi hazırlanıyor.'
      };
    }

    return parsedResponse;
  } catch (error) {
    console.error('AI pattern analysis error:', error);
    return {
      patterns: { sameMoodDays: 0, oppositeMoodDays: 0, correlation: 0, trend: 'bilinmiyor' },
      insights: ['AI analiz şu anda kullanılamıyor.'],
      suggestions: ['Verilerinizi günlük olarak kaydetmeye devam edin.'],
      summary: 'Sistem geçici olarak kullanılamıyor.'
    };
  }
};

// Crisis detection
export const detectCrisis = (message, recentMoods = []) => {
  const crisisKeywords = [
    'intihar', 'kendime zarar', 'ölmek', 'bitirmek', 'yaşamak istemiyorum',
    'suicide', 'self harm', 'end my life', 'kill myself'
  ];

  const hasCrisisKeyword = crisisKeywords.some(keyword => 
    message.toLowerCase().includes(keyword.toLowerCase())
  );

  const recentLowMoods = recentMoods
    .slice(0, 3)
    .filter(entry => entry.mood_level <= 2)
    .length;

  const isHighRisk = hasCrisisKeyword && recentLowMoods >= 2;

  return {
    isCrisis: isHighRisk,
    riskLevel: isHighRisk ? 'high' : (hasCrisisKeyword ? 'medium' : 'low'),
    message: isHighRisk ? 
      '⚠️ Lütfen acil durumda 112\'yi arayın veya en yakın sağlık kuruluşuna başvurun. EMOTICE tıbbi bir hizmet değildir.' :
      (hasCrisisKeyword ? 
        '🤗 Zor zamanlardan geçiyor olabilirsiniz. Profesyonel destek almayı düşünebilirsiniz.' : 
        null)
  };
};

// Daily AI insight
export const generateDailyInsight = async (userMoods, partnerMoods) => {
  try {
    const systemPrompt = `Sen EMOTICE'in destekleyici AI asistanısın. Kullanıcıya günlük mood önerisi ver. Pozitif ve motive edici ol. 1-2 cümleyi geçme. Kişiselleştirilmiş önerilerde bulun. ASLA tıbbi tavsiye verme. Örnek: "Bugün hava güzel, kısa bir yürüyüş ruh halinize iyi gelebilir! 🌞"`;

    const recentUserMoods = userMoods.slice(0, 5);
    const recentPartnerMoods = partnerMoods.slice(0, 5);

    const userPrompt = `Son mood'larım: ${recentUserMoods.map(m => m.mood_level).join(', ')}\nPartner mood'ları: ${recentPartnerMoods.map(m => m.mood_level).join(', ')}\n\nKısa, pozitif bir günlük öneri ver:`;

    const suggestion = await openAIClient.chatCompletion(
      [{ role: 'user', content: userPrompt }],
      systemPrompt
    );

    return suggestion || 'Bugün kendinize iyi bakmayı unutmayın! 💫';
  } catch (error) {
    console.error('Daily insight error:', error);
    return 'Kendinize iyi bakın ve sevdiklerinizle zaman geçirin! ❤️';
  }
};

// Simple pattern analysis (without AI)
export const simplePatternAnalysis = (userMoods, partnerMoods) => {
  if (userMoods.length === 0 || partnerMoods.length === 0) {
    return {
      correlation: 0,
      sameDirectionDays: 0,
      insights: ['Henüz yeterli veri yok.'],
      summary: 'Daha fazla veri bekleniyor.'
    };
  }

  const userAvg = userMoods.reduce((sum, m) => sum + m.mood_level, 0) / userMoods.length;
  const partnerAvg = partnerMoods.reduce((sum, m) => sum + m.mood_level, 0) / partnerMoods.length;
  
  const correlation = Math.round((1 - Math.abs(userAvg - partnerAvg) / 4) * 100);

  let summary = '';
  if (correlation > 80) summary = 'Moodlarınız çok uyumlu! 🎉';
  else if (correlation > 60) summary = 'Moodlarınız oldukça benziyor 👍';
  else if (correlation > 40) summary = 'Moodlarınız orta seviyede uyumlu 🤔';
  else summary = 'Moodlarınız farklı desenler gösteriyor 📊';

  return {
    correlation,
    sameDirectionDays: Math.min(userMoods.length, partnerMoods.length),
    insights: [
      `Ortalama moodunuz: ${userAvg.toFixed(1)}/5`,
      `Partner ortalaması: ${partnerAvg.toFixed(1)}/5`,
      `Uyum seviyeniz: %${correlation}`
    ],
    summary
  };
};

// Helper functions
const formatMoodDataForAI = (moods, name) => {
  if (!moods || moods.length === 0) {
    return `${name}: Veri yok`;
  }

  const moodText = moods
    .slice(0, 10)
    .map(entry => {
      const date = new Date(entry.created_at).toLocaleDateString('tr-TR');
      const moodEmoji = getMoodEmoji(entry.mood_level);
      return `${date}: ${moodEmoji} (${entry.mood_level}/5) ${entry.note ? `- ${entry.note}` : ''}`;
    })
    .join('\n');

  return `${name} - Son ${moods.length} kayıt:\n${moodText}`;
};

const getMoodEmoji = (moodLevel) => {
  const emojis = ['😭', '😢', '😐', '😊', '😄'];
  return emojis[moodLevel - 1] || '😐';
};