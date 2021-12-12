const colors = require("tailwindcss/colors");

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
        accent: colors.orange[400],
      },
      textColor: {
        primary: colors.gray[900],
        dark: colors.gray[100],
        accent: colors.orange[400],
      },
      boxShadow: () => ({
        "avatar-orange": `0px 0px 8px 8px ${colors.orange[400]}`,
      }),
    },
  },
  plugins: [],
};
