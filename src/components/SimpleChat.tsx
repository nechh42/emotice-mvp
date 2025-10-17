<<<<<<< HEAD
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
=======
import { useState, useRef, useEffect } from 'react';
import { getChatCompletion, detectCrisis } from '../services/openai';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Alert, AlertDescription } from './ui/alert';
import { AlertTriangle, Send, Loader2 } from 'lucide-react';
import { toast } from 'sonner';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

const SimpleChat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showCrisisAlert, setShowCrisisAlert] = useState(false);
  const [messageCount, setMessageCount] = useState(0);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Rate limiting: 15 messages per session
  const MESSAGE_LIMIT = 15;

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    // Validations
    if (!input.trim() || isLoading) return;

    // Rate limiting check
    if (messageCount >= MESSAGE_LIMIT) {
      toast.error('Mesaj limitine ulaştınız. Lütfen daha sonra tekrar deneyin.', {
        description: `Oturum başına maksimum ${MESSAGE_LIMIT} mesaj gönderebilirsiniz.`
      });
      return;
    }

    const userMessage = input.trim();
    setInput('');
    setMessageCount(prev => prev + 1);

    // Crisis detection
    if (detectCrisis(userMessage)) {
      setShowCrisisAlert(true);
    }

    // Add user message
    const newUserMessage: Message = {
      role: 'user',
      content: userMessage,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, newUserMessage]);

    // Get AI response
    setIsLoading(true);
    try {
      const aiResponse = await getChatCompletion(userMessage);

      if (!aiResponse) {
        throw new Error('No response from AI');
      }

      const assistantMessage: Message = {
        role: 'assistant',
        content: aiResponse,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, assistantMessage]);

      // Success toast (subtle)
      toast.success('Yanıt alındı', { 
        duration: 1000,
        position: 'bottom-right'
      });

    } catch (error: any) {
      console.error('Chat error:', error);
      
      // Detailed error handling
      let errorMsg = 'Üzgünüm, bir hata oluştu. Lütfen tekrar deneyin.';
      
      if (error.message?.includes('API key')) {
        errorMsg = 'API anahtarı hatası. Lütfen sistem yöneticisiyle iletişime geçin.';
      } else if (error.message?.includes('Rate limit')) {
        errorMsg = 'Çok fazla istek gönderdiniz. Lütfen birkaç dakika bekleyin.';
      } else if (error.message?.includes('Network')) {
        errorMsg = 'İnternet bağlantınızı kontrol edin.';
      }

      toast.error('Hata', {
        description: errorMsg,
        duration: 5000
      });
      
      const errorMessage: Message = {
        role: 'assistant',
        content: errorMsg,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);

      // Decrement message count on error
      setMessageCount(prev => Math.max(0, prev - 1));
    } finally {
      setIsLoading(false);
    }
  };

  // Handle Enter key
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="flex flex-col h-[600px] border rounded-lg shadow-lg bg-white">
      {/* Crisis Alert */}
      {showCrisisAlert && (
        <Alert variant="destructive" className="m-4 border-2 animate-in fade-in duration-300">
          <AlertTriangle className="h-5 w-5" />
          <AlertDescription className="ml-2">
            <p className="font-semibold mb-2">🆘 Acil Yardım Gerekiyor mu?</p>
            <p className="text-sm mb-2">
              Eğer acil yardıma ihtiyacınız varsa lütfen:
            </p>
            <ul className="text-sm list-disc ml-4 mb-2 space-y-1">
              <li><strong>🇹🇷 Türkiye:</strong> 112 (Acil Yardım)</li>
              <li><strong>💚 İntihar Önleme Hattı:</strong> 182</li>
              <li><strong>🏥 En yakın acil servise gidin</strong></li>
            </ul>
            <p className="text-xs italic mt-2 border-t pt-2">
              <strong>Önemli:</strong> EMOTICE tıbbi bir hizmet değildir. 
              Lütfen profesyonel yardım alın.
            </p>
            <Button 
              variant="outline" 
              size="sm"
              className="mt-3"
              onClick={() => setShowCrisisAlert(false)}
            >
              Anladım
            </Button>
          </AlertDescription>
        </Alert>
      )}

      {/* Chat Header */}
      <div className="p-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white rounded-t-lg">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="font-semibold text-lg flex items-center gap-2">
              💜 EMOTICE AI Asistan
            </h3>
            <p className="text-sm opacity-90">Seni dinliyorum...</p>
          </div>
          <div className="text-right text-xs opacity-75">
            <p>{messageCount}/{MESSAGE_LIMIT} mesaj</p>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-gray-50 to-white">
        {messages.length === 0 && (
          <div className="text-center text-gray-500 mt-20 animate-in fade-in duration-500">
            <div className="text-6xl mb-4">💭</div>
            <p className="text-lg font-medium">Merhaba! Bugün nasıl hissediyorsun?</p>
            <p className="text-sm mt-2 text-gray-400">
              Duygularını benimle rahatça paylaşabilirsin...
            </p>
            <div className="mt-6 flex justify-center gap-2 flex-wrap">
              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">
                Güvenli
              </span>
              <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs">
                Gizli
              </span>
              <span className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-xs">
                Destekleyici
              </span>
            </div>
          </div>
        )}
        
        {messages.map((msg, index) => (
          <div 
            key={index} 
            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-in slide-in-from-bottom duration-300`}
          >
            <div 
              className={`max-w-[80%] p-3 rounded-lg shadow-sm transition-all hover:shadow-md ${
                msg.role === 'user' 
                  ? 'bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-br-none' 
                  : 'bg-white text-gray-800 rounded-bl-none border border-gray-200'
              }`}
            >
              <p className="whitespace-pre-wrap leading-relaxed">{msg.content}</p>
              <p className={`text-xs mt-2 ${
                msg.role === 'user' ? 'text-blue-100' : 'text-gray-400'
              }`}>
                {msg.timestamp.toLocaleTimeString('tr-TR', { 
                  hour: '2-digit', 
                  minute: '2-digit' 
                })}
              </p>
            </div>
          </div>
        ))}
        
        {isLoading && (
          <div className="flex justify-start animate-in fade-in duration-200">
            <div className="bg-white p-4 rounded-lg border shadow-sm">
              <div className="flex items-center space-x-3">
                <Loader2 className="h-5 w-5 animate-spin text-blue-500" />
                <div>
                  <span className="text-sm text-gray-700 font-medium">Düşünüyorum</span>
                  <div className="flex space-x-1 mt-1">
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-2 h-2 bg-pink-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-4 border-t bg-white rounded-b-lg">
        <div className="flex gap-2">
          <Input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder={
              messageCount >= MESSAGE_LIMIT 
                ? 'Mesaj limitine ulaştınız' 
                : 'Mesajını yaz...'
            }
            disabled={isLoading || messageCount >= MESSAGE_LIMIT}
            className="flex-1 focus:ring-2 focus:ring-blue-500 transition-all"
            maxLength={500}
          />
          <Button
            onClick={handleSend}
            disabled={isLoading || !input.trim() || messageCount >= MESSAGE_LIMIT}
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all duration-200"
          >
            {isLoading ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Send className="h-4 w-4" />
            )}
          </Button>
        </div>
        
        {/* Helper Text */}
        <div className="flex justify-between items-center mt-2">
          <p className="text-xs text-gray-500">
            💡 Duygularını rahatça paylaş, seni dinliyorum
          </p>
          <p className="text-xs text-gray-400">
            {input.length}/500
          </p>
        </div>

        {/* Rate Limit Warning */}
        {messageCount >= MESSAGE_LIMIT * 0.8 && messageCount < MESSAGE_LIMIT && (
          <Alert className="mt-2 bg-yellow-50 border-yellow-200">
            <AlertDescription className="text-xs text-yellow-800">
              ⚠️ {MESSAGE_LIMIT - messageCount} mesaj hakkınız kaldı
            </AlertDescription>
          </Alert>
        )}
>>>>>>> 835e4aa1 (Initial commit: EMOTICE MVP with Auth and KVKK)
      </div>
    </div>
  );
};

export default SimpleChat;