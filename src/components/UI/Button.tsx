"use client";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
}

export default function Button({ variant = 'primary', children, ...props }: ButtonProps) {
  const baseStyles =
    'relative px-6 py-3 rounded-xl font-semibold text-lg transition-all duration-500 transform hover:scale-105 focus:outline-none focus:ring-4';

  const variantStyles = {
    primary:
      'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 focus:ring-purple-500/50 shadow-[0_0_20px_rgba(147,51,234,0.4)] hover:shadow-[0_0_30px_rgba(147,51,234,0.6)]',
    outline:
      'border border-purple-500/80 text-purple-200 bg-transparent hover:bg-purple-900/20 focus:ring-purple-500/50 backdrop-blur-sm hover:border-purple-400',
    ghost:
      'text-purple-300 bg-transparent hover:bg-purple-900/30 focus:ring-purple-500/50 backdrop-blur-sm hover:text-purple-200',
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} group`}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
    </button>
  );
}