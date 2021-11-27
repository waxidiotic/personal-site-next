module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    colors: {
      construction: {
        dark: "#18181B",
        accent: "#f59e0b",
        text: "#e4e4e7",
      },
    },
    stoke: (theme) => ({
      construction: theme("colors.construction.accent"),
    }),
    boxShadow: (theme) => ({
      avatar: `0px 0px 8px 6px ${theme("colors.construction.accent")}`,
    }),
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
