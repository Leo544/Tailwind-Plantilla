/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'wave-pattern': 'url(../assets/img/wave-white.jpg)',
        'wave-pattern-dots': 'url(../assets/img/pattern-white-dots.png)'
      })
    },
  },
  plugins: [],
}
