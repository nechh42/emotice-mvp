import { Bot, User } from 'lucide-react';

interface ChatMessageProps {
  role: 'user' | 'assistant';
  content: string;
  timestamp?: string;
}

const ChatMessage = ({ role, content, timestamp }: ChatMessageProps) => {
  const isAssistant = role === 'assistant';

  return (
    <div className={`flex gap-3 ${isAssistant ? '' : 'flex-row-reverse'}`}>
      <div className={`
        w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0
        ${isAssistant ? 'bg-purple-100' : 'bg-blue-100'}
      `}>
        {isAssistant ? (
          <Bot className="w-5 h-5 text-purple-600" />
        ) : (
          <User className="w-5 h-5 text-blue-600" />
        )}
      </div>

      <div className={`flex-1 max-w-[70%] ${isAssistant ? '' : 'text-right'}`}>
        <div className={`
          inline-block p-3 rounded-2xl
          ${isAssistant 
            ? 'bg-gray-100 text-gray-900 rounded-tl-none' 
            : 'bg-gradient-primary text-white rounded-tr-none'
          }
        `}>
          <p className="text-sm whitespace-pre-wrap">{content}</p>
        </div>
        {timestamp && (
          <p className="text-xs text-muted-foreground mt-1 px-2">
            {new Date(timestamp).toLocaleTimeString('tr-TR', {
              hour: '2-digit',
              minute: '2-digit'
            })}
          </p>
        )}
      </div>
    </div>
  );
};

export default ChatMessage;
