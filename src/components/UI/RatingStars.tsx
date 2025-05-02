"use client";

import { FaStar } from 'react-icons/fa';

interface RatingStarsProps {
  rating: number;
}

export default function RatingStars({ rating }: RatingStarsProps) {
  return (
    <div className="flex space-x-1">
      {[...Array(5)].map((_, i) => (
        <FaStar
          key={i}
          className={`text-2xl transition-all duration-300 ${
            i < rating
              ? 'text-yellow-400 drop-shadow-[0_0_8px_rgba(234,179,8,0.6)] hover:scale-125'
              : 'text-gray-600/50 hover:text-gray-500/80'
          }`}
        />
      ))}
    </div>
  );
}