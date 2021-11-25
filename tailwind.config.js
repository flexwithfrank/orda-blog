module.exports = {
  mode: "jit",
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Lato", "sans-serif"],
      cerebri: ["Cerebri", "sans-serif"],
    },
    extend: {
      colors: {
        "light-blue": "#218BD6",
        "darker-blue": "#2362AF",
        "header-hover-blue": "#0077ff",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
      },
      animation: {
        wiggle: "wiggle 200ms ease-in-out",
      },
    },
  },
  variants: {
    extend: {
      "border-r": ["last"],
      ml: ["last"],
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/typography"),
  ],
};
