/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        '1024px': '1024px',
        '786px': '786px',
        '484px': '484px'
      }
    },
  },
  plugins: [],
}

