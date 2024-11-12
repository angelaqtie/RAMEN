/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#F6AD49",
        accent: "#E60033",
        secondary: "#433D3C",
      },
      fontFamily: {
        montserrat: "Montserrat",
        economica: "Economica",
        comingsoon: "Coming Soon",
      },
      backgroundImage: {
        banner: "url('../ramen_img/wood.jpg')",
        bannerYellow: "url('../ramen_img/bg.png')",
      },
    },
  },
  plugins: [],
};
