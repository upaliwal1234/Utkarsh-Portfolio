/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bebas: ["Bebas Neue", "sans-serif"],
        openSans: ["Open Sans", "sans-serif"]
      },
      utilities: {
        '.scroll-smooth': {
          'scroll-behavior': 'smooth',
        },
        '.no-scrollbar': {
          'scrollbar-width': 'none', /* Firefox */
          '-ms-overflow-style': 'none', /* Internet Explorer 10+ */
        },
        '.no-scrollbar::-webkit-scrollbar': {
          'display': 'none', /* Safari and Chrome */
        },
      },
    },
  },
  plugins: [],
}