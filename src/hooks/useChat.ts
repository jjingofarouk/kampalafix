import { useState, useEffect } from 'react';
import { getDocuments } from '../firebase/db';
import { ChatMessage } from '../types/chat';

export function useChat() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);

  useEffect(() => {
    const fetchMessages = async () => {
      const data = await getDocuments('messages');
      setMessages(data);
    };
    fetchMessages();
  }, []);

  const sendMessage = async (text: string) => {
    // Implement send message
  };

  return { messages, sendMessage };
}