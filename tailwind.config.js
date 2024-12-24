/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        'sm': '8rem',
        'md': '10rem',
      },
      fontSize: {
        '8xl': '8rem',
        '10xl': '10rem'
      },
      fontFamily: {
        "lato": ['Lato', 'sans-serif'],
        "kanit": ["Kanit", "serif"]
      },
      "colors": {
        "brand": {
          50: "#EBFBFF",
          100: "#D1F5FF",
          200: "#A8ECFF",
          300: "#7AE2FF",
          400: "#52D9FF",
          500: "#24CEFF",
          600: "#00B8EB",
          700: "#0088AD",
          800: "#005C75",
          900: "#002C38",
          950: "#00181F"
        }
      }
    },
  },
  plugins: [],


}

