module.exports = {
  mode: "jit",
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "light-blue": "#218BD6",
        "darker-blue": "#2362AF",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
