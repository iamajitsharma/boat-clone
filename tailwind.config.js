/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        metropolis: ["metropolis", "sans-serif"],
        metropolis_medium: ["metropolis_medium", "sans-serif"],
        metropolis_light: ["metropolis_light", "sans-serif"],
        metropolis_extralight: ["metropolis_extralight", "sans-serif"],
        metropolis_semibold: ["metropolis_semibold", "sans-serif"],
        metropolis_bold: ["metropolis_bold", "sans-serif"],
        metropolis_black: ["metropolis_black", "sans-serif"],
      },
    },
  },
  plugins: [],
};
