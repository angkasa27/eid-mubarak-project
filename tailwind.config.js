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
        jakarta: ["var(--plus-jakarta-sans)", ...defaultTheme.fontFamily.sans],
        berkshireSwash: [
          "var(--berkshire-swash)",
          ...defaultTheme.fontFamily.serif,
        ],
        grandHotel: ["var(--grand-hotel)", ...defaultTheme.fontFamily.serif],
        cinzel: ["var(--cinzel)", ...defaultTheme.fontFamily.serif],
        pacifico: ["var(--pacifico)", ...defaultTheme.fontFamily.serif],
        acme: ["var(--acme)", ...defaultTheme.fontFamily.serif],
        croissantOne: [
          "var(--croissant-one)",
          ...defaultTheme.fontFamily.serif,
        ],
        poppins: ["var(--poppins)", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        main: "#0f172a",
        secondary: "#1e293b",
      },
    },
  },
  // plugins: [require("@tailwindcss/forms")],
});
