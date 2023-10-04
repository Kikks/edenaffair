/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      chillax: ["'Chillax', sans-serif"],
      renade: ["'Ranade', sans-serif"],
      pacifico: ['Pacifico', 'cursive'],
    },
    fontSize: {
      xxs: '0.65rem',
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '4.5rem',
    },
    extend: {
      colors: {
        'vote-black': '#1B2127',
        'vote-gray': '#F1F5F9',
        'vote-gray-light': '#FEFEFE',
        primary: {
          main: '#004C8F',
          light: '#EBF6FF',
          dark: '#003666',
        },
      },
    },
  },
  plugins: [],
};
