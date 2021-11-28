module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: "var(--accent-color)",
      },
      backgroundColor: {
        primary: "var(--bg-color)",
      },
      textColor: {
        primary: "var(--text-color)",
        accent: "var(--accent-color)",
      },
      boxShadow: (theme) => ({
        "avatar-orange": `0px 0px 8px 8px var(--accent-color)`,
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
