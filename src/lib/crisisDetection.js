// crisisDetection.js
export const crisisKeywords = {
  suicide: ['intihar', 'öldürmek', 'ölmek', 'bitirmek', 'son vermek', 'yaşamak istemiyorum', 'hayatımı sonlandırmak'],
  selfHarm: ['kendime zarar', 'kesmek', 'yakmak', 'acı çekmek', 'kendimi incitmek', 'zarar vermek'],
  emergency: ['yardım', 'acil', 'kurtar', 'bitkin', 'dayanamıyorum', 'kontrolü kaybediyorum', 'çıldırmak üzereyim'],
  depression: ['umutsuz', 'çaresiz', 'boşluk', 'anlamsız', 'tükenmiş', 'hiçbir şey hissetmiyorum', 'yalnızım']
};

export const detectCrisis = (message) => {
  const lowerMessage = message.toLowerCase();
  let detectedLevel = 'none';
  let detectedKeywords = [];

  Object.entries(crisisKeywords).forEach(([level, keywords]) => {
    keywords.forEach(keyword => {
      if (lowerMessage.includes(keyword)) {
        detectedLevel = level;
        detectedKeywords.push(keyword);
      }
    });
  });

  return { detectedLevel, detectedKeywords };
};