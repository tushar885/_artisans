/** @type {import('tailwindcss').Config} */
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
  plugins: [],
};
