const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/*.tsx"],
  darkMode: false, // or 'media' or 'class'
  mode: "jit",
  theme: {
    extend: {
      colors: {
        orange: colors.orange,
        metodbok: "rgb(78, 121, 204)",
        gray: colors.trueGray,
        oldYellow: "rgb(255, 255, 204)",
        oldPink: "rgb(255, 204, 255)",
        oldOrange: "rgb(255, 153, 102)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
