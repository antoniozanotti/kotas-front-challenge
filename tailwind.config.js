const defaultTheme = require('tailwindcss/defaultTheme')
/** @type {import('tailwindcss').Config} */
export default {
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
        'primary': "#C1BEBE"
      },
      fontFamily: {
        'sans': ['Mulish', ...defaultTheme.fontFamily.sans],
        'primary': ['Mulish'],
        'secondary': ['Quicksand'],
      },
      boxShadow: {
        'sm-c1': '0 1px 1px 0 #E1E1E1',
        'c1': '0 4px 20px 0 #E1E1E1',
        'md-c1': '0 4px 20px 0 rgba(0, 0, 0, 0.05)',
      }
    },
  },
  plugins: [],
}

