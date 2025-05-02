"use client";

import { FaTimes } from 'react-icons/fa';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gradient-to-b from-black/80 to-purple-900/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="relative bg-black/90 backdrop-blur-2xl rounded-2xl shadow-[0_0_40px_rgba(147,51,234,0.4)] p-8 w-full max-w-lg border border-purple-900/40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(147,51,234,0.2),_transparent_70%)] rounded-2xl pointer-events-none" />
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 transition-all duration-300 hover:scale-110"
        >
          <FaTimes className="text-lg" />
        </button>
        <div className="text-gray-200">{children}</div>
      </div>
    </div>
  );
}