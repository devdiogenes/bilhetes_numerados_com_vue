/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'gray': '#454545',
      'red': '#89011b',
      'dark-red': '#590004',
      'white': '#ffffff',
      'silver': '#f2f2f2', 
      'black': '#020202',
      'yellow': '#ffbf00'
    },
    screens: {
        'xs': '500px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
    }
  },
  plugins: [],
}