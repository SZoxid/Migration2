/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src//*.{vue,js,ts,jsx,tsx}", "node_modules/swiper/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
        Inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
