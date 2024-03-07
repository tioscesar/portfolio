/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
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
  plugins: [require("daisyui")],

  daisyui: {
    themes: ["light", 
              "dark", "cupcake"],
  },
}

