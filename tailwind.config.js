/** @type {import('tailwindcss').Config} */

const colors = {
  primary: "#269cfc",
  background: "#101B2A",
  lightbg: "#101B2A",
  card: "#101B2A",
  btnbg: "#101B2A",
  yellow: #fff8b0;
  purple: #d6d6ff;
  pink: #f9e0ea;
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


