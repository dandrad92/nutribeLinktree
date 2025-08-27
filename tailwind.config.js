/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        blue:  "#04ADBF",
        green: "#34BFBF",
        red:   "#F2637E",
        black: "#0D0D0D",
        pink:  "#EE05F2",
      },
      boxShadow: {
        soft: "0 10px 20px rgba(2,12,27,0.06)",
      },
    },
  },
  plugins: [],
};