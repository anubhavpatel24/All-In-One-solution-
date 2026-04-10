/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fff9f3',
          100: '#ffe8d1',
          500: '#d97706',
          700: '#92400e',
          900: '#4a2b0a',
        },
      },
      boxShadow: {
        soft: '0 10px 30px -10px rgba(146, 64, 14, 0.25)',
      },
      fontFamily: {
        heading: ['Sora', 'sans-serif'],
        display: ['Manrope', 'sans-serif'],
        body: ['Nunito Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
