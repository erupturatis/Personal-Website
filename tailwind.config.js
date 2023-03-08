/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bgdark: '#0d0d0e',
        primary: {
          50: '#f9fafb',
        },
      },
      dropShadow: {},
      fontFamily: {
        montserrat: ['var(--font-montserrat)'],
        questrial: ['var(--font-questrial)'],
        roboto: ['var(--font-roboto)'],
      },
    },
  },
  plugins: [],
};
