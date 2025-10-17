import OpenAI from 'openai';

<<<<<<< HEAD
const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true
});

export const getChatCompletion = async (message: string) => {
  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        {
          role: 'system',
          content: `Sen EMOTICE adlı duygusal sağlık asistanısın. 
          Kullanıcıların duygularını dinler, empati kurar ve yapıcı tavsiyelerde bulunursun.
          Asla tıbbi tavsiye verme. Acil durumlarda profesyonel yardım aramasını öner.
          Türkçe yanıtlar ver, sıcak ve destekleyici ol.`
=======
// OpenAI client initialization
const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true // WARNING: For MVP only! Use backend in production
});

/**
 * Get chat completion from OpenAI
 * @param message - User message
 * @returns AI response text
 */
export const getChatCompletion = async (message: string): Promise<string | null> => {
  try {
    // Validate API key
    if (!import.meta.env.VITE_OPENAI_API_KEY) {
      throw new Error('OpenAI API key is not configured');
    }

    // Validate message
    if (!message || message.trim().length === 0) {
      throw new Error('Message cannot be empty');
    }

    // Create completion
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini', // Cost-effective model
      messages: [
        {
          role: 'system',
          content: `Sen EMOTICE adlı duygusal sağlık asistanısın.

GÖREVIN:
- Kullanıcıların duygularını dinlemek
- Empati kurmak ve destek olmak
- Yapıcı, pozitif tavsiyelerde bulunmak
- Sıcak, samimi ve destekleyici bir ton kullanmak

ÖNEMLİ KURALLAR:
1. ASLA tıbbi teşhis koyma
2. ASLA ilaç önerme
3. Acil durumlarda 112 veya 182'yi aramalarını öner
4. Profesyonel yardım almalarını teşvik et
5. Her zaman Türkçe yanıt ver
6. Kısa ve anlaşılır cümleler kullan (max 3-4 cümle)
7. Kullanıcının duygularını doğrula
8. Umut ve olumlu bakış açısı sun

TON:
- Sıcak ve dostane
- Empatik ve anlayışlı
- Destekleyici ve motive edici
- Profesyonel ama samimi

ÖRNEK YAPILAR:
✅ "Seni anlıyorum, zor bir süreçten geçiyorsun..."
✅ "Bu hissetmek çok doğal. Kendine karşı nazik ol..."
✅ "Paylaştığın için teşekkürler. Seninleyim..."
✅ "Belki şunu deneyebilirsin..."

❌ "İlaç almalısın"
❌ "Depresyonun var"
❌ "Bunun için endişelenme"
❌ Uzun, karmaşık paragraflar`
>>>>>>> 835e4aa1 (Initial commit: EMOTICE MVP with Auth and KVKK)
        },
        {
          role: 'user',
          content: message
        }
      ],
<<<<<<< HEAD
      temperature: 0.7,
      max_tokens: 500
    });

    return completion.choices[0].message.content;
  } catch (error) {
    console.error('OpenAI API Error:', error);
=======
      temperature: 0.7, // Balanced creativity
      max_tokens: 300, // Keep responses concise
      top_p: 0.9,
      frequency_penalty: 0.3,
      presence_penalty: 0.3
    });

    // Extract response
    const response = completion.choices[0]?.message?.content;

    if (!response) {
      throw new Error('No response from OpenAI');
    }

    return response;

  } catch (error: any) {
    console.error('OpenAI API Error:', error);

    // Handle specific errors
    if (error?.status === 401) {
      throw new Error('API key is invalid or expired');
    } else if (error?.status === 429) {
      throw new Error('Rate limit exceeded. Please try again later.');
    } else if (error?.status === 500) {
      throw new Error('OpenAI service is temporarily unavailable');
    } else if (error?.message?.includes('network')) {
      throw new Error('Network error. Please check your connection.');
    }

    // Generic error
>>>>>>> 835e4aa1 (Initial commit: EMOTICE MVP with Auth and KVKK)
    throw new Error('AI yanıt alınamadı. Lütfen tekrar deneyin.');
  }
};

<<<<<<< HEAD
// Crisis detection
export const detectCrisis = (message: string): boolean => {
  const crisisKeywords = [
    'intihar', 'kendime zarar', 'ölmek istiyorum', 'yaşamak istemiyorum',
    'suicide', 'kill myself', 'end my life', 'self harm'
  ];
  
  return crisisKeywords.some(keyword => 
    message.toLowerCase().includes(keyword)
  );
};
=======
/**
 * Detect crisis keywords in user message
 * @param message - User message
 * @returns True if crisis detected
 */
export const detectCrisis = (message: string): boolean => {
  if (!message) return false;

  const lowerMessage = message.toLowerCase();

  // Crisis keywords (Turkish and English)
  const crisisKeywords = [
    // Suicide-related (Turkish)
    'intihar',
    'kendimi öldür',
    'ölmek istiyorum',
    'yaşamak istemiyorum',
    'hayattan bıktım',
    'yaşamaya değmez',
    'ölüm',
    'canıma kıymak',
    'kendimi bitirmek',
    
    // Self-harm (Turkish)
    'kendime zarar',
    'kendimi kesmek',
    'kendimi yakmak',
    'kendime acı vermek',
    
    // Suicide-related (English)
    'suicide',
    'kill myself',
    'end my life',
    'want to die',
    'better off dead',
    'no reason to live',
    
    // Self-harm (English)
    'self harm',
    'hurt myself',
    'cut myself',
    'harm myself'
  ];

  // Check for crisis keywords
  return crisisKeywords.some(keyword => lowerMessage.includes(keyword));
};

/**
 * Get sentiment analysis (basic implementation)
 * @param message - User message
 * @returns Sentiment score (1-5)
 */
export const analyzeSentiment = (message: string): number => {
  if (!message) return 3; // Neutral default

  const lowerMessage = message.toLowerCase();

  // Positive keywords (Turkish/English)
  const positiveKeywords = [
    'mutlu', 'iyi', 'harika', 'güzel', 'mükemmel', 'sevindim', 'heyecanlı',
    'happy', 'good', 'great', 'wonderful', 'excellent', 'excited', 'joy'
  ];

  // Negative keywords (Turkish/English)
  const negativeKeywords = [
    'üzgün', 'kötü', 'mutsuz', 'depresif', 'sinirli', 'kaygılı', 'stresli',
    'sad', 'bad', 'unhappy', 'depressed', 'angry', 'anxious', 'stressed'
  ];

  let score = 3; // Start neutral

  // Count positive/negative matches
  positiveKeywords.forEach(keyword => {
    if (lowerMessage.includes(keyword)) score += 0.5;
  });

  negativeKeywords.forEach(keyword => {
    if (lowerMessage.includes(keyword)) score -= 0.5;
  });

  // Clamp between 1-5
  return Math.max(1, Math.min(5, Math.round(score)));
};

/**
 * Check if message is appropriate (basic content moderation)
 * @param message - User message
 * @returns True if appropriate
 */
export const isMessageAppropriate = (message: string): boolean => {
  if (!message) return false;

  // Basic checks
  if (message.length > 1000) return false; // Too long
  if (message.length < 2) return false; // Too short

  // Block spam patterns
  const spamPatterns = [
    /(.)\1{10,}/, // Repeated characters (11+)
    /^[A-Z\s!?]{50,}$/, // All caps spam
  ];

  for (const pattern of spamPatterns) {
    if (pattern.test(message)) return false;
  }

  return true;
};

/**
 * Rate limiter (client-side basic implementation)
 * Store in localStorage for persistence
 */
interface RateLimitData {
  count: number;
  resetTime: number;
}

const RATE_LIMIT_KEY = 'emotice_rate_limit';
const MAX_REQUESTS_PER_HOUR = 15;

export const checkRateLimit = (): { allowed: boolean; remaining: number } => {
  try {
    const stored = localStorage.getItem(RATE_LIMIT_KEY);
    const now = Date.now();

    let data: RateLimitData;

    if (stored) {
      data = JSON.parse(stored);
      
      // Reset if hour passed
      if (now > data.resetTime) {
        data = {
          count: 0,
          resetTime: now + 3600000 // +1 hour
        };
      }
    } else {
      data = {
        count: 0,
        resetTime: now + 3600000
      };
    }

    const remaining = Math.max(0, MAX_REQUESTS_PER_HOUR - data.count);
    const allowed = data.count < MAX_REQUESTS_PER_HOUR;

    return { allowed, remaining };

  } catch (error) {
    console.error('Rate limit check error:', error);
    return { allowed: true, remaining: MAX_REQUESTS_PER_HOUR };
  }
};

export const incrementRateLimit = (): void => {
  try {
    const stored = localStorage.getItem(RATE_LIMIT_KEY);
    const now = Date.now();

    let data: RateLimitData;

    if (stored) {
      data = JSON.parse(stored);
      
      // Reset if hour passed
      if (now > data.resetTime) {
        data = {
          count: 1,
          resetTime: now + 3600000
        };
      } else {
        data.count++;
      }
    } else {
      data = {
        count: 1,
        resetTime: now + 3600000
      };
    }

    localStorage.setItem(RATE_LIMIT_KEY, JSON.stringify(data));

  } catch (error) {
    console.error('Rate limit increment error:', error);
  }
};

// Export types
export type { RateLimitData };
>>>>>>> 835e4aa1 (Initial commit: EMOTICE MVP with Auth and KVKK)
