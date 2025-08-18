/** @type {import('tailwindcss').Config} */

const colors = {
  primary: "#269cfc",
  background: "#011C41",
  lightbg: "#011C41",
  card: "#011C41",
  btnbg: "#011C41",
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
