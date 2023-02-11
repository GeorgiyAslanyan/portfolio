/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradeint": "linear-gradient(0deg, rgba(236,241,253,1) 0%, rgba(207,216,247,1) 51%, rgba(228,231,253,1) 74%, rgba(255,255,255,1) 100%);"
      }
    },
  },
  plugins: [],
}
