"use client";

import { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { format, addMonths, subMonths, startOfMonth, endOfMonth, eachDayOfMonth, getDay } from 'date-fns';

export default function Calendar() {
  const [date, setDate] = useState(new Date());
  const currentMonth = format(date, 'MMMM yyyy');
  const startDay = startOfMonth(date);
  const endDay = endOfMonth(date);
  const days = eachDayOfMonth(date);
  const firstDayOfMonth = getDay(startDay);

  const handlePrevMonth = () => setDate(subMonths(date, 1));
  const handleNextMonth = () => setDate(addMonths(date, 1));
  const handleDayClick = (day: Date) => setDate(day);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100">
      <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl p-8 w-full max-w-md border border-white/20">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-200/20 to-pink-200/20 rounded-3xl pointer-events-none" />
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={handlePrevMonth}
            className="p-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:from-indigo-600 hover:to-purple-600 transition-all duration-300"
          >
            <FaChevronLeft />
          </button>
          <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
            {currentMonth}
          </h2>
          <button
            onClick={handleNextMonth}
            className="p-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:from-indigo-600 hover:to-purple-600 transition-all duration-300"
          >
            <FaChevronRight />
          </button>
        </div>
        <div className="grid grid-cols-7 gap-2 text-center text-gray-600 font-medium text-sm">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
            <div key={day} className="py-2">
              {day}
            </div>
          ))}
          {Array.from({ length: firstDayOfMonth }).map((_, i) => (
            <div key={`empty-${i}`} className="h-10" />
          ))}
          {days.map((day) => (
            <button
              key={day.toString()}
              onClick={() => handleDayClick(day)}
              className={`h-10 w-10 flex items-center justify-center rounded-full transition-all duration-300 ${
                format(day, 'yyyy-MM-dd') === format(date, 'yyyy-MM-dd')
                  ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-[0_0_10px_rgba(99,102,241,0.5)]'
                  : 'hover:bg-indigo-100/50 text-gray-800'
              }`}
            >
              {format(day, 'd')}
            </button>
          ))}
        </div>
        <div className="mt-6 text-center">
          <p className="text-lg font-medium text-gray-700">
            Selected: <span className="text-indigo-600">{format(date, 'MMMM d, yyyy')}</span>
          </p>
        </div>
      </div>
    </div>
  );
}