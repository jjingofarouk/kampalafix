"use client";

import Button from '../UI/Button';
import { FaGoogle, FaFacebook } from 'react-icons/fa';

export default function SocialAuth() {
  return (
    <div className="relative space-y-5 px-6 py-8 bg-gradient-to-b from-gray-900/95 to-black/95 rounded-2xl shadow-[0_0_40px_rgba(255,0,255,0.2)] border border-pink-900/30 backdrop-blur-md">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,0,255,0.15),_transparent_70%)] rounded-2xl pointer-events-none" />
      <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 mb-6 text-center tracking-wider">
        Unleash Your Connection
      </h3>
      <Button
        variant="outline"
        className="relative w-full py-4 bg-gray-800/60 border border-pink-700/50 rounded-xl text-gray-200 font-semibold text-lg flex items-center justify-center gap-3 hover:bg-gradient-to-r hover:from-pink-600/80 hover:to-purple-600/80 hover:border-pink-500 hover:text-white focus:ring-4 focus:ring-pink-500/40 transition-all duration-500 transform hover:scale-105 hover:shadow-[0_0_25px_rgba(255,0,255,0.4)]"
      >
        <FaGoogle className="text-xl animate-[pulse_2s_infinite]" />
        Sign in with Google
      </Button>
      <Button
        variant="outline"
        className="relative w-full py-4 bg-gray-800/60 border border-pink-700/50 rounded-xl text-gray-200 font-semibold text-lg flex items-center justify-center gap-3 hover:bg-gradient-to-r hover:from-pink-600/80 hover:to-purple-600/80 hover:border-pink-500 hover:text-white focus:ring-4 focus:ring-pink-500/40 transition-all duration-500 transform hover:scale-105 hover:shadow-[0_0_25px_rgba(255,0,255,0.4)]"
      >
        <FaFacebook className="text-xl animate-[pulse_2s_infinite]" />
        Sign in with Facebook
      </Button>
    </div>
  );
}