/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'isu_red': '#C8102E',
      'isu_gold': '#F1BE48',
      'isu_black': '#0A0908',
      'isu_white': '#FFFBFF',
      'isu_light': '#F0F0F0',
      'isu_ghost': '#D8D4D5',
      'isu_green': '#57A773',
      'isu_yellow': '#F1BE48'
    }
  },
  plugins: [],
}

