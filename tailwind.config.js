/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [".{html,js}"],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#04152D',
        'light-blue': '#262a34',
        'blue-gray': '#363a45',
         'dark-black': '#0C0C0C99'
    },
    fontFamily :{
          "outfit" : ['Outfit', 'sans-serif'],
          "roboto" : ['Roboto','sans-serif']
          // font-family: "Roboto", sans-serif;
    }
  },
  plugins: [],
}
}

