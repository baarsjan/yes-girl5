/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        pink: {
          200: '#f8d7e8',
          300: '#f2b5d1',
          400: '#eb3d92',
          500: '#eb3d92',
          600: '#d13582',
        }
      },
      fontFamily: {
        'lubalin': ['ITC Lubalin Graph', 'Georgia', 'serif'],
        'lubalin-condensed': ['ITC Lubalin Graph Condensed', 'ITC Lubalin Graph', 'Georgia', 'serif'],
        'brave-outline': ['Brave Eighty One Outline Italic', 'cursive'],
      },
      fontWeight: {
        'extralight': 200,
        'light': 300,
        'normal': 400,
        'medium': 500,
        'semibold': 600,
        'bold': 700,
      }
    },
  },
  plugins: [],
};