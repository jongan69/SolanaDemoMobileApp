/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: '#512DA8',
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [],
};