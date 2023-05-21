/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        yellow: "#cc9c00",
        "light-yellow": "rgba(249, 192, 15, .2)",
        "main-grey": "#828282",
        "true-status": "rgba(34, 197, 94, .5)",
      },
      fontFamily: {
        sans: ["iranYekan"],
      },
    },
  },
  plugins: [],
};
