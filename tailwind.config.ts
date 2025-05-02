import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        orange: {
          500: '#ff6200',
          600: '#e55a00',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;