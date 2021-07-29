module.exports = {
  mode: "jit",
  purge: ["./src/*.html", "./src/**/*.html", "./src/**/*.js"],
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
