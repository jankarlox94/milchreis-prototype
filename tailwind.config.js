/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-navbar': '#C88147',
        'cream': '#FAF9F3',
        'dark-green': '#2E463A',
        'terracotta': '#C88147',
        'peach-beige': '#F2C8B5', // Define your custom color name and hex code
      },
      fontFamily: {
        miFuenteRubik: ["Rubik", "sans-serif"],
        serif: ['Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
        sans: ['ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif'],
      },
      maxWidth: {
        'container-desktop': '1280px', // Standardizes the width of content blocks
      },
      screens: {
        '3xl': '1600px', // Adds a '3xl:' utility prefix
        '5xl': '2560px'
      },

    },
  },
  plugins: [],
}

