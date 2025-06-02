/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3B82F6',
        dark: '#121212', // Your preferred dark color
        light: '#f5f5f5' // Your preferred light text color
      }
    }
  },
  plugins: [],
}