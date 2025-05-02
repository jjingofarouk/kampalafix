"use client";

import Button from '../UI/Button';
import Input from '../UI/Input';
import { FaEnvelope } from 'react-icons/fa';

export default function ResetPassword() {
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle reset password logic
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[radial-gradient(circle_at_top,_#2a0044_0%,_#000_80%)] overflow-hidden">
      <div className="relative bg-black/85 backdrop-blur-2xl rounded-3xl shadow-[0_0_60px_rgba(147,51,234,0.4)] p-10 w-full max-w-md border border-purple-900/40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(147,51,234,0.25),_transparent_70%)] rounded-3xl pointer-events-none" />
        <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600 mb-8 text-center tracking-tight">
          Reclaim Your Power
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <Input
              type="email"
              placeholder="Enter your email"
              required
              className="w-full px-5 py-4 bg-gray-900/70 border border-purple-800/60 rounded-xl text-gray-200 placeholder-gray-500 focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all duration-500 hover:bg-gray-800/80 hover:shadow-[0_0_20px_rgba(147,51,234,0.3)] pl-12"
            />
            <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-purple-400 text-lg animate-[pulse_2s_infinite]" />
          </div>
          <Button
            type="submit"
            className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-bold text-lg hover:from-purple-700 hover:to-pink-700 focus:ring-4 focus:ring-purple-500/50 transition-all duration-500 transform hover:scale-105 hover:shadow-[0_0_25px_rgba(147,51,234,0.6)]"
          >
            Reset Password
          </Button>
        </form>
        <p className="text-gray-400 text-sm mt-8 text-center">
          Remember your password?{' '}
          <a href="/login" className="text-purple-400 hover:text-purple-300 font-medium transition-colors">
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
}