/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        maroon: {
          50: '#fdf2f2',
          100: '#fce8e8',
          200: '#fbd5d5',
          300: '#f8b4b4',
          400: '#f28b8b',
          500: '#e53e3e',
          600: '#c53030',
          700: '#9b2c2c',
          800: '#822727',
          900: '#742a2a',
          950: '#4a1414',
        },
        charcoal: {
          50: '#f8f9fa',
          100: '#e9ecef',
          200: '#dee2e6',
          300: '#ced4da',
          400: '#adb5bd',
          500: '#6c757d',
          600: '#495057',
          700: '#343a40',
          800: '#212529',
          900: '#1a1d20',
          950: '#0d0f11',
        }
      },
      backgroundImage: {
        'maroon-gradient': 'linear-gradient(135deg, #742a2a 0%, #9b2c2c 50%, #c53030 100%)',
        'charcoal-gradient': 'linear-gradient(135deg, #0d0f11 0%, #1a1d20 50%, #212529 100%)',
        'professional-gradient': 'linear-gradient(135deg, #0d0f11 0%, #742a2a 50%, #1a1d20 100%)',
      }
    },
  },
  plugins: [],
};
