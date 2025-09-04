/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './js/**/*.{js,ts}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#14088F',
          gray: '#4B4B4D'
        }
      },
      fontFamily: {
        sans: ['Poppins','ui-sans-serif','system-ui','sans-serif'],
        brand: ['Ubuntu','Poppins','ui-sans-serif','system-ui','sans-serif']
      }
    }
  },
  plugins: []
};
