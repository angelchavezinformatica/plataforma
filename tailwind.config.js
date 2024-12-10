/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        links: 'rgba(255, 255, 255, 0.6)',
        bgcolor1: 'rgba(0, 62, 147, 0.2)',
        bgcolor2: 'rgba(122, 97, 215, 0.2)',
        bgcolor3: 'rgba(19, 192, 191, 0.2)',

      }
    },
  },
  plugins: [],
}

