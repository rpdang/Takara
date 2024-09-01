/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html', './node_modules/flowbite/**/*.js'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        theme: {
          50: '#F4E7FF',
          100: '#E8CFFF',
          200: '#D1AFFF',
          300: '#BB8FFF',
          400: '#A46FFF',
          500: '#8A45FF',
          600: '#7338D4',
          700: '#5D2CAB',
          800: '#461F82',
          900: '#301259',
        },
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
