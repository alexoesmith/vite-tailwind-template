module.exports = {
  mode: "jit",
  purge: ["./src/*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        body: "Roboto Mono",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
