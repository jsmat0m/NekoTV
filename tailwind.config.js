/** @type {import('tailwindcss').Config} */

const colors = {
  primary: "#269cfc",
  background: "#101B2A",
  lightbg: "#101B2A",
  card: "#101B2A",
  btnbg: "#101B2A",
  yellow: "#F9ED69",
  purple: "#B1B2FF",
  pink: "#F2BED1",
  lighttext: "#ccc",
};
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: colors,
    },
  },
  plugins: [],
};
