/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {

    screens: {
      'sm': '768px',
      'md': '1024px',
      'lg': '1440px'
    },

    extend: {
                           
      container: {
       padding: {
         DEFAULT: '1rem',
         sm: '2rem',
         lg: '4rem',
         xl: '5rem',
       },
      },
      
      
      
    },
  },
  plugins: [],
};
