/**
 * @type {import('prettier').Options}
 * */
module.exports = {
  plugins: [
    require.resolve("prettier-plugin-astro"),
    require.resolve("prettier-plugin-tailwindcss"),
    require.resolve("prettier-plugin-organize-imports"),
  ],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};
