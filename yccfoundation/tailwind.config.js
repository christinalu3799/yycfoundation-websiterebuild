/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
        fontFamily: {
            'body': ['Nunito']
        }
    },
    colors: {
        coral: '#E9353D',
        green: '#CBD64A',
        blue: '#66ADA8',
        white: '#ffffff'
    }
  },
  plugins: [],
}
