/** @type {import('tailwindcss').Config} */

const colors = {
  primary: "#269cfc",
  background: "#1A2536",
  lightbg: "#1A2536",
  card: "#1A2536",
  btnbg: "#1A2536",
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
