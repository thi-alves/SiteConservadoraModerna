/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT:'0.75rem',
        md: '3rem',
        lg: '4rem',
        xl: '5rem',
      },
    },
    extend: {},
    colors:{
      primary:'#14213D',
      secondary:'#FFC928',
      black:'#071E22',
      gray:'#BDBDBD',
      white:'#FFFF',
      lightgray:"#F3F3F3",

    },
    screens: {
     

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
      
    },
  },
  plugins: [],
}
