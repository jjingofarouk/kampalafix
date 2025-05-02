import { ChatMessage } from '../../types/chat';

interface MessageBubbleProps {
  message: ChatMessage;
}

export default function MessageBubble({ message }: MessageBubbleProps) {
  return (
    <div className={`p-2 ${message.isSent ? 'text-right' : 'text-left'}`}>
      <div
        className={`inline-block p-2 rounded-lg ${
          message.isSent ? 'bg-orange-500 text-white' : 'bg-gray-100'
        }`}
      >
        {message.text}
      </div>
    </div>
  );
}