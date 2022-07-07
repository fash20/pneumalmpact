/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '820px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    colors:{
      'primaryTextColor' : '#2F327D',
      'fadeWhite':'#CACED8',
      'white':'#FFF',
      'red': '#FF5364',
      "grayMarginColor":'#DBDBDB',
      "lightBlue":'#E9EAFF',
      "PrimaryGray":'#7F7F7F',
      "discountRed":'#EA4B48'
    },
    fontFamily:{
      inter:["inter"],
      poppins:["poppins"],
      smSans:["sm-sans"],
      zcool:["z-cool"],
      interlight:["interlight"]
    },
    extend: {
      // backgroundImage: "url('/components/assets/images/frontpagebg.svg')"
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}
