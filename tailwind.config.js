/** @type {import('tailwindcss').Config} */

const colors = {
  primary: "#269cfc",
  background: "#00265B",
  lightbg: "#2f2f33",
  card: "#2f2f33",
  btnbg: "#3a3a3e",
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
