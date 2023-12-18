/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "theme-blue": "#5D50C6",
        "theme-pink": "#F85E9F",
      },
    },
  },
  plugins: [],
};
