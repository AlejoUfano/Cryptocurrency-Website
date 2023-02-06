/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "gray-20": "#E0E0E0",
        "gray-50": "#525267",
        "gray-100": "#DFCCCC",
        "gray-500": "#5E0000",
        "primary-100": "#3671E9",        
        "primary-300": "#2B076E",
        "primary-400": "#252540",
        "primary-500": "#0D0D2B",
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
};
