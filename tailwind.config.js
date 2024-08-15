/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        purple:"#562C2C",
        red:"#F2542D",
        white:"#F5DFBB",
        blue:"#0E9594",
        green:'#127475',
        grey:'#127475',
        brown:'#46351D'
      }
    },
  },
  plugins: [],
}

