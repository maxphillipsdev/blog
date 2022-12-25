/** @type {import('tailwindcss').Config} */

const { crimson, slate, crimsonDark, slateDark } = require("@radix-ui/colors");
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      ...crimson,
      ...slate,
    },
    extend: {},
  },
  plugins: [],
};
