/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "col-black-1": "#202124",
        "col-grey-5": "#5f6368",
        "col-grey-4": "#80868b",
        "col-grey-3": "#9aa0a6",
        "col-grey-2": "#e3e3e3",
        "col-grey-1": "#e8eaed",
        "col-yellow-2": "#f6bd41",
        "col-yellow-1": "#fcd56c",

        "col-blue-4": "#1a73e8",
        "col-blue-3": "#538EF7",
        "col-blue-2": "#8ab4f8",
        "col-blue-1": "#93c5fd",
      },
    },
    screens: {
      sm: "320px",
      sm_md: "575px",
      md: "768px",
      lg: "960px",
      lg_xl: "1025px",
      xl: "1440px",
    },
  },
  plugins: [],
  darkMode: "selector",
};
