/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Update this path based on where your files are
  ],
  theme: {
    extend: {
      colors: {
        mainBlue: "#0097B2",
        secondaryBlue: "#01DAFF",
      },
      fontFamily: {
        fira: ["Fira Code", "sans-serif"],
      },
    },
  },
};
