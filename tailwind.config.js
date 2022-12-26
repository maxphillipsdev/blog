const { crimson, slate, crimsonDark, slateDark } = require("@radix-ui/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: "Inter",
    colors: {
      ...crimson,
      ...slate,
    },
    extend: {},
  },
  plugins: [],
};
