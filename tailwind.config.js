/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0C2A3D',
        secondary: '#E63A24'
      },
      fontFamily:{
        'primary': ['Manrope']
      }
    },
  },
  plugins: [],
}