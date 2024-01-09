/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx, json}"],
  theme: {
    screens: {
      xs: "375px",
      sm: "550px",
      md: "800px",
      lg: "1000px",
      xl: "1430px",
    },
    extend: {
      colors: {
        // primary
        blue: "hsl(246, 80%, 60%)",
        lightRed: "hsl(15, 100%, 70%)", //work
        softBlue: "hsl(195, 74%, 62%)", //play
        coral: "hsl(348, 100%, 68%)", // study
        limeGreen: "hsl(145, 58%, 55%)", //exercise
        violet: "hsl(264, 64%, 52%)", // social
        softOrange: "hsl(43, 84%, 65%)", //self-care
        // neutral
        lightBlue: "#34397B",
        veryDarkBlue: "hsl(226, 43%, 10%)",
        darkBlue: "hsl(235, 46%, 20%)",
        desaturatedBlue: "hsl(235, 45%, 61%)",
        paleBlue: "hsl(236, 100%, 87%)",
      },
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
      },
    },
  },
  plugins: [],
};
