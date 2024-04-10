/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        darkblue: "#060b26",
        darkishblue: "#1E35BD",
        ssblue: "#0AAEFF",
        faded: "rgb(163, 162, 162)",
        lightgrey: "rgb(48, 48, 48)",
        lightbox: "rgb(0, 0, 0, 0.8)",
        darkred: "rgb(185, 28, 28)",
        fadedwhite: "rgb(255, 255, 255, 0.5)",
        gradientblue1: "#51c0f7",
        gradientblue2: "#0a4fff",
      },
      fontFamily: {
        anton: "Anton",
        inter: "Inter",
      },
    },
  },
  plugins: [],
}

