/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "gray": "#F4F7F8",
        "dark-green": "#013d29",
        "light-green": "#08AC08",
        "white": "#ffffff",
        "black": "#000000",
      }
    },
  },
  plugins: [],
}
