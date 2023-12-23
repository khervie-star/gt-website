/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gt_purple: "#3d0052",
        gt_yellow: "yellow",
        gt_red: "red",
      },
      boxShadow: {
        main: "rgba(0, 0, 0, 0.24) 0px 3px 8px;",
      },
      fontFamily: {
        montserrat: '"Montserrat", sans-serif',
        ubuntu: '"Ubuntu", sans-serif',
      },
    },
  },
  plugins: [],
};
