const colors = require("tailwindcss/colors")

module.exports = {
  purge: ["*.html"],
  darkMode: false, // or 'media' or 'class'
  mode: "jit",
  theme: {
    extend: {
      colors:{
        orange: colors.orange,
        metodbok: "#4e79cc"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
