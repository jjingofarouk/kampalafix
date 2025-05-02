"use client";

import { useAuth } from '../../hooks/useAuth';
import Button from '../UI/Button';
import Input from '../UI/Input';
import { useState } from 'react';

export default function LoginForm() {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(email, password);
      setError(null);
    } catch (err) {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100">
      <div className="relative bg-white/80 backdrop-blur-xl rounded-2xl shadow-2xl p-8 w-full max-w-md border border-white/20">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-200/20 to-pink-200/20 rounded-2xl pointer-events-none" />
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center tracking-tight">Welcome Back</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="relative">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 bg-gray-50/50 border border-gray-200/50 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:border-transparent text-gray-900 placeholder-gray-500 transition-all duration-300 hover:bg-gray-100/80"
            />
          </div>
          <div className="relative">
            <Input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-3 bg-gray-50/50 border border-gray-200/50 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:border-transparent text-gray-900 placeholder-gray-500 transition-all duration-300 hover:bg-gray-100/80"
            />
          </div>
          {error && (
            <p className="text-red-400 text-sm font-medium bg-red-50/80 rounded-md py-2 px-3 animate-pulse">
              {error}
            </p>
          )}
          <Button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg font-semibold text-lg hover:from-indigo-600 hover:to-purple-700 focus:ring-4 focus:ring-indigo-300/50 transition-all duration-300 transform hover:scale-105"
          >
            Sign In
          </Button>
        </form>
        <p className="text-gray-600 text-sm mt-6 text-center">
          Don&apos;t have an account?{' '}
          <a href="/signup" className="text-indigo-500 hover:text-indigo-600 font-medium transition-colors">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}