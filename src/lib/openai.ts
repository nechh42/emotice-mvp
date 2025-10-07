// src/lib/openai.ts - SADECE DEMO MOD
interface ChatMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

interface ChatResponse {
  message: string;
  error?: string;
}

const demoResponses = [
  "Merhaba! Bugün nasıl hissediyorsun? Duyguların hakkında konuşmak ister misin?",
  "Duygularını takip etmek, onları anlamana yardımcı olabilir. Biraz daha açabilir misin?",
  "Bazen duygularımızı paylaşmak iyi gelir. Ben dinlemeye hazırım.",
  "Her duygu değerlidir. Şu anki hislerin hakkında konuşmak ister misin?",
  "Seni anlamak için buradayım. Nasıl olduğunu anlatır mısın?",
  "Duygusal iyilik halin için buradayım. Biraz sohbet edelim mi?",
  "Ruh halin hakkında konuşmak, kendini daha iyi hissetmeni sağlayabilir. Paylaşmak ister misin?",
  "Bazen sadece bir şeyleri dışa vurmak bile rahatlatıcı olabilir. Ben dinliyorum.",
  "Duyguların karmaşık olabilir, ama onları anlamak için adım adım ilerleyebiliriz. Nereden başlamak istersin?",
  "Her gün farklı hissedebiliriz ve bu normal. Bugün senin için nasıl bir gün?"
];

export async function sendChatMessage(
  messages: ChatMessage[],
  userId: string
): Promise<ChatResponse> {
  // Her zaman demo modunda çalış, rastgele bir yanıt seç
  const randomResponse = demoResponses[Math.floor(Math.random() * demoResponses.length)];
  
  // Kullanıcının son mesajını al (isteğe bağlı, ona göre yanıt verebiliriz ama şimdilik rastgele)
  // İleride basit bir anahtar kelime eşleştirme yapabiliriz.

  return { message: randomResponse };
}

export async function checkMessageLimit(userId: string): Promise<{
  used: number;
  limit: number;
  isPremium: boolean;
}> {
  // Basit implementasyon - her zaman 0 kullanılmış dönsün
  return {
    used: 0,
    limit: 15,
    isPremium: false
  };
}