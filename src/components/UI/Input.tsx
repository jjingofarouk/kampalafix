"use client";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export default function Input({ ...props }: InputProps) {
  return (
    <input
      className="w-full px-5 py-3 bg-gray-900/10 border border-purple-500/30 rounded-xl text-gray-200 placeholder-gray-400 focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-500 hover:bg-gray-800/20 hover:shadow-[0_0_15px_rgba(147,51,234,0.2)] backdrop-blur-sm"
      {...props}
    />
  );
}