/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'almost-white': '#fafafa',
      'medium-gray': '#696969',
      'almost-black': '#141414'
    },
    boxShadow: {
      'around': '0 0 8px rgba(0, 0, 0, 0.25);'
    },
    extend: {},
  },
  plugins: [],
}

