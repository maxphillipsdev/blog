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
    colors: {
      transparent: "transparent",
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)"],
        mono: ["var(--font-jbm)"],
      },
      animation: {
        text: "text 5s ease infinite",
      },
      keyframes: {
        text: {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
      },
      ringColor: crimson.crimson9,
      accentColor: crimson.crimson9,
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
