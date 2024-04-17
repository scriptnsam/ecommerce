/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./shop.html","./index.html"],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
        'jost': ['Jost', 'sans-serif']
      }
    },
  },
  plugins: [],
}

