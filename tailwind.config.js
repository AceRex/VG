/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0D6EFD",
        primaryDark: "#0A369D",
        dark: "#000031",
        neutral: "#F0F2F5",
        neutralText: "#647995",
        accent: "#FEF4E6",
        accentText: "#7A4504",
        accentRed: "#FBEAE9",
        accentRedD: "#9E0A05",
        yellow: "#F4B93E",
        body: "#f0f2f5",
      },
    },
  },
  plugins: [],
};
