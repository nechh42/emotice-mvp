// src/components/chat/ChatInterface.tsx - GÜNCELLENMİŞ
import { useState } from "react";
import ChatInput from "./ChatInput";
import ChatMessage from "./ChatMessage";
import CrisisAlert from "./CrisisAlert"; // ✅ YENİ
import { Card, CardContent } from "@/components/ui/card";
import { sendChatMessage } from "@/lib/openai";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";
import { useCrisisDetection } from "./useCrisisDetection"; // ✅ YENİ

interface Message {
  role: "user" | "assistant";
  content: string;
  timestamp?: string;
}

interface ChatInterfaceProps {
  moodHistory: any[];
  currentMood: string;
}

const ChatInterface = ({ moodHistory, currentMood }: ChatInterfaceProps) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();
  const { toast } = useToast();
  
  // ✅ KRİZ TESPİT HOOK'U EKLENDİ
  const { currentCrisis, checkForCrisis, clearCrisis } = useCrisisDetection();

  const handleSend = async (userMessage: string) => {
    if (!user) {
      toast({
        title: "Hata",
        description: "Sohbet etmek için giriş yapmalısınız",
        variant: "destructive",
      });
      return;
    }

    // ✅ KRİZ KONTROLÜ - EN KRİTİK KISIM!
    const isCrisisDetected = checkForCrisis(userMessage);
    
    if (isCrisisDetected) {
      // Kriz durumunda AI'ya mesaj GÖNDERME!
      // Sadece kriz alert'ı göster
      return;
    }

    const newMessage: Message = {
      role: "user",
      content: userMessage,
      timestamp: new Date().toISOString(),
    };
    
    setMessages((prev) => [...prev, newMessage]);
    setLoading(true);

    try {
      const chatMessages = [
        ...messages.map(msg => ({
          role: msg.role as 'user' | 'assistant',
          content: msg.content
        })),
        { role: 'user' as const, content: userMessage }
      ];

      const response = await sendChatMessage(chatMessages, user.id);

      if (response.error) {
        throw new Error(response.error);
      }

      const aiMessage: Message = {
        role: "assistant",
        content: response.message,
        timestamp: new Date().toISOString(),
      };
      
      setMessages((prev) => [...prev, aiMessage]);
    } catch (error: any) {
      console.error('Sohbet hatası:', error);
      const errorMessage: Message = {
        role: "assistant",
        content: "Üzgünüm, şu anda cevap veremiyorum. Lütfen biraz sonra tekrar deneyin.",
        timestamp: new Date().toISOString(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="w-full flex flex-col h-[600px]">
      <CardContent className="flex-1 overflow-y-auto space-y-4 p-4">
        {/* ✅ KRİZ ALERT COMPONENT'İ EKLENDİ */}
        {currentCrisis && (
          <CrisisAlert 
            crisisType={currentCrisis.level}
            onClose={clearCrisis}
          />
        )}
        
        {messages.length === 0 && (
          <div className="text-center text-muted-foreground mt-10 space-y-2">
            <p className="text-lg">👋 Merhaba! Ben Emotice AI asistanınız.</p>
            <p className="text-sm">Duygusal sağlık yolculuğunuzda sizi dinlemek ve destek olmak için buradayım.</p>
          </div>
        )}
        {messages.map((msg, i) => (
          <ChatMessage
            key={i}
            role={msg.role}
            content={msg.content}
            timestamp={msg.timestamp}
          />
        ))}
        {loading && (
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <div className="animate-pulse">💭</div>
            <span>Düşünüyorum...</span>
          </div>
        )}
      </CardContent>

      <div className="p-4 border-t bg-secondary/20">
        <ChatInput
          onSend={handleSend}
          disabled={loading}
          placeholder="Nasıl hissediyorsunuz? Paylaşmaktan çekinmeyin..."
        />
      </div>
    </Card>
  );
};

export default ChatInterface;