const colors = {
  primary: "#269cfc",
  accent: "#a78bfa",
  softAccent: "#b1b2ff",
  background: "#0B1220",
  lightbg: "#131A30",
  card: "#131A30",
  hoverbg: "#1C2640",
  yellow: "#F9ED69",
  pink: "#F2BED1",
  textPrimary: "#E0E6F1",
  textSecondary: "#A3A9B8",
  textTertiary: "#6C7080",
  link: "#7DD3FC",
  linkHover: "#A78BFA",
  grid: "#000000",
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
