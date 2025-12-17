/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-navbar': '#C88147', // Define your custom color name and hex code
      },
      fontFamily: {
        miFuenteRubik: ["Rubik", "sans-serif"]
      }
    },
  },
  plugins: [],
}

