/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  darkmode:'class',
  theme: {
    container: {
      center: true,
      padding: '16px',
    },

    extend: {
      colors: {
        primary: '#0F62FE' ,
      },
      screens: {
        '2xl': '1320px'
      }
    },
  },
  plugins: [require("daisyui","tailgrids/plugin")],

  daisyui: {
    themes: ["light", 
              "dark", 
              "cupcake",
              "black",
              "business",
              "night",
            ],
  },
}

