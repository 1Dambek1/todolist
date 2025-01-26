/** @type {import('tailwindcss').Config} */
export default {
  darkMode:"class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
      colors:{
        red:{
          DEFAULT: '#DE473A',
          light: '#FF4D4D',
          dark: '#C70000',
        },
        brown:{
          DEFAULT: '#755139',
          light: '#fff6f0',
          dark: '#593D28',
        }
      },
      width:{
        "1140":"1140px",
      }
    },
  },
  plugins: [],
}