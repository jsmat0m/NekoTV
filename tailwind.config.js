/** @type {import('tailwindcss').Config} */

const colors = {
  primary: "#a29bfc",
  background: "#145183",
  lightbg: "#145183",
  card: "#101B2A",
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



