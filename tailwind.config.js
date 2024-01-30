/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./page/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
    },
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
      },
      colors: {
        primary: "#f8fafc",
        dark: "#070707",
        light: "#e9e9e9	",
      },
      fontFamily: {
        kanit: ["Kanit"],
        monserrat: ["Montserrat"],
      },
    },
  },
  plugins: [],
};
