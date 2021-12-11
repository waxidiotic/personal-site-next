module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        accent: "var(--accent-color)",
        faded: "var(--accent-color-faded)",
        "blue-light-mode": "var(--blue-light)",
        "blue-dark-mode": "var(--blue-dark)",
        "orange-light-mode": "var(--orange-light)",
        "orange-dark-mode": "var(--orange-dark)",
      },
      backgroundColor: {
        primary: "var(--bg-color)",
      },
      textColor: {
        primary: "var(--text-color)",
        dark: "var(--text-color-dark)",
        accent: "var(--accent-color)",
      },
      boxShadow: () => ({
        "avatar-orange": `0px 0px 8px 8px var(--accent-color)`,
      }),
    },
  },
  plugins: [],
};
