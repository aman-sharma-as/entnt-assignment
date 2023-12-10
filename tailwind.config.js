/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        accent: {
          dark: "#C8CDD6",
          light: "#F9FAFB",
        },
        purple: {
          light: "#8338EC",
        },
        yellow: {
          dark: "#FFC136",
        },
        hotpink: {
          dark: "#FF006E",
        },
        deep: {
          light: "#F9FAFB",
          dark: "#05182D",
        }
      },
    },
  },
  plugins: [],
};