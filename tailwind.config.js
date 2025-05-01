/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
      },
      colors: {
        aura: {
          black: '#000000',
          darkgray: '#121212',
          gray: '#333333',
          lightgray: '#888888',
          silver: '#c0c0c0',
          white: '#ffffff',
        },
      },
      animation: {
        'fade-in': 'fadeIn 1.5s ease-in-out forwards',
        'pulse-once': 'pulseOnce 2s ease-in-out forwards',
        'sweep-line': 'sweepLine 1s ease-in-out forwards 1.5s',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        pulseOnce: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
        sweepLine: {
          '0%': { width: '0%', opacity: '0' },
          '100%': { width: '100%', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      backgroundImage: {
        'subtle-texture': 'url("https://www.transparenttextures.com/patterns/subtle-white-feathers.png")',
        'leaf-texture': 'url("https://www.transparenttextures.com/patterns/natural-paper.png")',
      },
    },
  },
  plugins: [],
};