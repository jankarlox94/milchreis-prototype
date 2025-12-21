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
      },
      screens: {
        '3xl': '1600px', // Adds a '3xl:' utility prefix
        '5xl': '2560px'
      },

    },
  },
  plugins: [],
}

