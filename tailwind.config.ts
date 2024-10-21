import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class', // Enable class-based dark mode
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        neutral: {
          DEFAULT: '#f3f4f6',
          dark: '#d1d5db',
        },
        primary: {
          DEFAULT: '#0D3B66',
          light: '#3E5C76',
          dark: '#052D4B',
        },
        secondary: {
          DEFAULT: '#FAA916',
          light: '#FFB94E',
          dark: '#E59800',
        },
        accent: {
          DEFAULT: '#F4D35E',
          light: '#F7DE80',
          dark: '#E6C345',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        bounceIn: {
          '0%, 20%, 50%, 80%, 100%': { transform: 'translateY(0)' },
          '40%': { transform: 'translateY(-30px)' },
          '60%': { transform: 'translateY(-15px)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out',
        slideInRight: 'slideInRight 0.5s ease-out',
        bounceIn: 'bounceIn 2s ease-in-out',
      },
    },
  },
  plugins: [],
};

export default config;








