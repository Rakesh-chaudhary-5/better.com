/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        x900: "970px",
        x800: "855px",
        x12: "1200px",
      },
    },
  },
  plugins: [],
};
