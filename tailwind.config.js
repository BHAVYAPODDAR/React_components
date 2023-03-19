/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        '4xl': '20px 20px 60px #bebebe,-20px -20px 60px #ffffff'
      },
      fontFamily: {
        'Edu': 'Edu NSW ACT Foundation',
      }
    },
  },
  plugins: [],
}
