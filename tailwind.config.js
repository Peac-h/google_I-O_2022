/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "col-dark": "#202124",
        "col-light-dark": "#5f6368",
        "col-grey": "#9aa0a6",
        "col-grey-dark": "#80868b",
        "col-light": "#e8eaed",
        "col-yellow-dark": "#f6bd41",
        "col-yellow-light": "#fcd56c",
        "col-blue": "#93c5fd",
        "col-blue-sec": "#1a73e8",
        "col-blue-dark": "#8ab4f8",
        "col-blue-darker": "#538EF7",
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
