"use client";

import { useAuth } from '../../hooks/useAuth';
import Button from '../UI/Button';
import Input from '../UI/Input';
import { useState } from 'react';

export default function RegisterForm() {
  const { register } = useAuth();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await register(email, password);
      setError(null);
    } catch (err) {
      setError('Registration failed. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[radial-gradient(circle_at_center,_#1a0033_0%,_#000_100%)] overflow-hidden">
      <div className="relative bg-black/90 backdrop-blur-2xl rounded-3xl shadow-[0_0_50px_rgba(138,43,226,0.3)] p-10 w-full max-w-lg border border-purple-900/50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(138,43,226,0.2),_transparent_70%)] rounded-3xl pointer-events-none" />
        <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-8 text-center tracking-wide">
          Forge Your Identity
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <Input
              type="text"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
              className="w-full px-5 py-4 bg-gray-900/80 border border-purple-800/50 rounded-xl text-gray-200 placeholder-gray-500 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-500 hover:bg-gray-800/90 hover:shadow-[0_0_15px_rgba(138,43,226,0.2)]"
            />
          </div>
          <div className="relative">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-5 py-4 bg-gray-900/80 border border-purple-800/50 rounded-xl text-gray-200 placeholder-gray-500 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-500 hover:bg-gray-800/90 hover:shadow-[0_0_15px_rgba(138,43,226,0.2)]"
            />
          </div>
          <div className="relative">
            <Input
              type="password"
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-5 py-4 bg-gray-900/80 border border-purple-800/50 rounded-xl text-gray-200 placeholder-gray-500 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-500 hover:bg-gray-800/90 hover:shadow-[0_0_15px_rgba(138,43,226,0.2)]"
            />
          </div>
          {error && (
            <p className="text-red-400 text-sm font-medium bg-red-900/30 rounded-lg py-2 px-4 animate-[pulse_1s_ease-in-out_infinite] text-center">
              {error}
            </p>
          )}
          <Button
            type="submit"
            className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-bold text-lg hover:from-purple-700 hover:to-pink-700 focus:ring-4 focus:ring-purple-500/50 transition-all duration-500 transform hover:scale-105 hover:shadow-[0_0_20px_rgba(138,43,226,0.5)]"
          >
            Create Account
          </Button>
        </form>
        <p className="text-gray-400 text-sm mt-8 text-center">
          Already have an account?{' '}
          <a href="/login" className="text-purple-400 hover:text-purple-300 font-medium transition-colors">
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
}