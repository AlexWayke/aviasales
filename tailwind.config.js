/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/tailwind.css",
    "./src/assets/styles/index.css",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "2rem",
        screens: {
          sm: "610px",
          md: "738px",
          lg: "990px",
          xl: "1250px",
          "2xl": "1506px",
        },
      },
      colors: {
        background: "var(--background)",
        "background-light": "var(--background-light)",
        "font-primary": "var(--font-primary)",
        blue: "var(--blue)",
        "blue-light": "var(--blue-light)",
        "blue-dark": "var(--blue-darker)",
        gray: "var(--gray)",
        "gray-light": "var(--gray-light)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
