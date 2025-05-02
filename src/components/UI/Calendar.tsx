
"use client";

import { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { format, addMonths, subMonths } from 'date-fns';

export default function Calendar() {
  const [date, setDate] = useState(new Date());
  const currentMonth = format(date, 'MMMM yyyy');

  const handlePrevMonth = () => setDate(subMonths(date, 1));
  const handleNextMonth = () => setDate(addMonths(date, 1));
  const handleTodayClick = () => setDate(new Date());

  return (
    <div className="min-h-screen flex items-center justify-center bg-[radial-gradient(circle_at_center,_#2a0044_0%,_#000_80%)]">
      <div className="relative bg-black/85 backdrop-blur-2xl rounded-3xl shadow-[0_0_50px_rgba(147,51,234,0.4)] p-10 w-full max-w-md border border-purple-900/50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(147,51,234,0.25),_transparent_70%)] rounded-3xl pointer-events-none" />
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={handlePrevMonth}
            className="p-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 focus:ring-4 focus:ring-purple-500/50 transition-all duration-300 transform hover:scale-110"
          >
            <FaChevronLeft className="text-lg" />
          </button>
          <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 tracking-tight">
            {currentMonth}
          </h2>
          <button
            onClick={handleNextMonth}
            className="p-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 focus:ring-4 focus:ring-purple-500/50 transition-all duration-300 transform hover:scale-110"
          >
            <FaChevronRight className="text-lg" />
          </button>
        </div>
        <div className="text-center">
          <button
            onClick={handleTodayClick}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold text-lg hover:from-purple-600 hover:to-pink-600 focus:ring-4 focus:ring-purple-500/50 transition-all duration-300 transform hover:scale-105 shadow-[0_0_15px_rgba(147,51,234,0.4)]"
          >
            Select Today
          </button>
        </div>
        <div className="mt-8 text-center">
          <p className="text-lg font-medium text-gray-300">
            Selected:{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              {format(date, 'MMMM d, yyyy')}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}