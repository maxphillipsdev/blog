const { crimson, crimsonDark, gray, grayDark } = require("@radix-ui/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {},
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)"],
      },
    },
  },
  plugins: [
    require("windy-radix-palette")({
      colors: {
        gray,
        grayDark,
        crimson,
        crimsonDark,
      },
    }),
    require("@tailwindcss/typography"),
    require("windy-radix-typography"),
  ],
};
