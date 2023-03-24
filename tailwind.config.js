const withMT = require("@material-tailwind/react/utils/withMT");
const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      aspectRatio: {
        potrait: "9 / 16",
      },
      fontFamily: {
        jakarta: ["var(--plus-jakarta-sans)", ...defaultTheme.fontFamily.serif],
      },
      colors: {
        main: "#0f172a",
      },
    },
  },
  // plugins: [require("@tailwindcss/forms")],
});
