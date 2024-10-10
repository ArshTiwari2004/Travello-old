/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,jsx}"],
    theme: {
      extend: {
        fontFamily: {
            qwitcher: ['"Qwitcher Grypen"', 'cursive'],
            caveat: ['"Caveat"', 'cursive'],
            roboto: ['Roboto', 'sans-serif'],
            playfair: ['Playfair Display', 'serif'],
            
            
            },


      },
    },
    plugins: [],
  }