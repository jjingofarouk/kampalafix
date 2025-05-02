// components/Chat/ChatWindow.tsx or ChatWindow.jsx
"use client";

import { useChat } from '../../hooks/useChat';
import MessageBubble from './MessageBubble';
import TypingIndicator from './TypingIndicator';

interface ChatWindowProps {
  className?: string;
}

export default function ChatWindow({ className = '' }: ChatWindowProps) {
  const { messages, sendMessage } = useChat();

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle send message
  };

  return (
    <div className={`flex flex-col h-[500px] bg-white rounded-lg shadow ${className}`}>
      <div className="flex-1 overflow-y-auto p-4">
        {messages.map((msg) => (
          <MessageBubble key={msg.id} message={msg} />
        ))}
      </div>
      <TypingIndicator />
      <form onSubmit={handleSend} className="p-4">
        <input type="text" className="w-full p-2 border rounded" placeholder="Type a message..." />
      </form>
    </div>
  );
}