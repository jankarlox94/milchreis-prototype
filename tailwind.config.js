/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        glow: {
          "0%, 100%": {
            filter: "drop-shadow(0 0 5px #fff) drop-shadow(0 0 10px #fca311)",
          },
          "50%": {
            filter: "drop-shadow(0 0 15px #fff) drop-shadow(0 0 30px #fca311)",
          },
        },
        "slide-right": {
          "0%": {
            transform: "translateX(-100%)",
            opacity: "0",
          },
          "100%": {
            transform: "translateX(0)",
            opacity: "1",
          },
        },
      },
      animation: {
        "text-glow": "glow 2s ease-in-out infinite",
        "slide-right": "slide-right 1s ease-out forwards", // 'forwards' ensures it stays at the final state
      },
      colors: {
        "custom-navbar": "#C88147",
        cream: "#FAF9F3",
        "dark-green": "#2E463A",
        terracotta: "#C88147",
        "peach-beige": "#F2C8B5", // Define your custom color name and hex code
      },
      fontFamily: {
        serif: ["Georgia", "Cambria", '"Times New Roman"', "Times", "serif"],
        sans: [
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          "sans-serif",
        ],
      },
      maxWidth: {
        "container-desktop": "1280px", // Standardizes the width of content blocks
      },
    },
  },
  plugins: [],
};
