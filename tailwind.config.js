/** @type {import('tailwindcss').Config} */

const colors = {
  primary: "#a29bfc",
  background: "#a29bfc",
  lightbg: "#101B2A",
  card: "#a29bfc",
  btnbg: "#8ac5fe",
  yellow: "#fff8b0",
  purple: "#d6d6ff",
  pink: "#f9e0ea",
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



