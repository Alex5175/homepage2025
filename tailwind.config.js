module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    // other paths...
  ],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
