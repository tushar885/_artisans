/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Josefin: ["Josefin Sans", "sans-serif"],
        founder: ["Space Grotesk", "sans-serif"],
        fira: ["Fira Code", "monospace"],
      },
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant("not-last", "&:not(:last-child)");
    }),
  ],
};
