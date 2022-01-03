const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: colors.white,
      black: colors.black,
      indigo: {
        light: '#7250a1',
        default: '#7250a1',
        dark: '#7250a1',
      },
      gray: {
        light: '#bcc3ce',
        default: '#5f6a7d',
        dark: '#14112d',
      },
      red: {
        light: '#ff7e7c',
        default: '#c52020',
        dark: '#c52020',
      },
      yellow: colors.amber,
      blue: {
        light: '#3c97ff',
        default: '#1768e1',
        dark: '#0168de',
      },
      green: {
        light: '#e6fffa',
        default: '#02bea2',
        hover: '#08ccaf',
      },
    },
    boxShadow: {
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      default: '0 0 10px rgba(0, 0, 0, 0.2)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      none: 'none',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
