import React, { useState } from 'react';

const SimpleChat = () => {
  const [messages, setMessages] = useState<Array<{text: string, isUser: boolean}>>([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    
    // Kullanıcı mesajını ekle
    setMessages(prev => [...prev, { text: input, isUser: true }]);
    
    // Basit AI yanıtı (demo mod)
    setTimeout(() => {
      const responses = [
        "Seni anlıyorum. Duygularını paylaştığın için teşekkürler 💜",
        "Bu konuda konuşmak iyi bir fikir. Nasıl hissettiğini dinliyorum...",
        "Duyguların önemli. Paylaştığın için teşekkür ederim 😊",
        "Seni dinliyorum. Biraz daha anlatmak ister misin?",
        "Bu hisleri anlamak önemli. Yanındayım 🌟"
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      setMessages(prev => [...prev, { text: randomResponse, isUser: false }]);
    }, 1000);
    
    setInput('');
  };

  return (
    <div className="h-[600px] flex flex-col border rounded-lg">
      {/* Chat Header */}
      <div className="p-4 bg-gradient-primary text-white rounded-t-lg">
        <h3 className="font-semibold">Emotice AI Asistan</h3>
        <p className="text-sm opacity-90">Seni dinliyorum 💜</p>
      </div>
      
      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.length === 0 && (
          <div className="text-center text-gray-500 mt-10">
            <p>Merhaba! Nasıl hissediyorsun?</p>
            <p className="text-sm">Duygularını paylaş, seni dinleyelim...</p>
          </div>
        )}
        {messages.map((msg, index) => (
          <div key={index} className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[80%] p-3 rounded-lg ${
              msg.isUser 
                ? 'bg-blue-500 text-white rounded-br-none' 
                : 'bg-gray-100 text-gray-800 rounded-bl-none'
            }`}>
              {msg.text}
            </div>
          </div>
        ))}
      </div>
      
      {/* Input */}
      <div className="p-4 border-t">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Nasıl hissediyorsunuz? Paylaşmaktan çekinmeyin..."
            className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleSend}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            Gönder
          </button>
        </div>
      </div>
    </div>
  );
};

export default SimpleChat;