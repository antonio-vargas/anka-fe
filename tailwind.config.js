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
    container: {
      center: true,
      padding: "0.75rem",
      screens: {
        xs: "100%",
        sm: "100%",
        md: "100%",
        lg: "1024px",
        xl: "1280px",
        // xxl: "1800px",
      },
    },
    extend: {
      colors: {
        primary: '#0C2A3D',
        "primary-light": '#073A5A',
        secondary: '#E63A24'
      }
    },
    fontFamily:{
      sans: ['Telegraf Regular', 'sans-serif'],
      'telegraf-thin': ['Telegraf Thin', 'sans-serif'],
      'telegraf-regular': ['Telegraf Regular', 'sans-serif'],
      'telegraf-black': ['Telegraf Black', 'sans-serif']
    }
  },
  plugins: [],
}