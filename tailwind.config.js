/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "serif"],
        roboto: ["Roboto", "serif"],
      },
      backgroundImage: {
        "lol-image": "url('/src/assets/lolImage.jpg')",
        "dota-image": "url('/src/assets/dotaImage.jpg')",
        "cs-image": "url('/src/assets/csImage.png')",
        "valo-image": "url('/src/assets/valoImage.webp')",
      },
    },
  },
  plugins: [],
};
