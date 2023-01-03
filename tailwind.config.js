const { crimson, crimsonDark, slate, slateDark } = require("@radix-ui/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: "Inter",
    colors: {},
    extend: {},
  },
  plugins: [
    require("windy-radix-palette")({
      colors: {
        slate,
        slateDark,
        crimson,
        crimsonDark,
      },
    }),
  ],
};
