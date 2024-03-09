/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/components/Nav.tsx"
  ],
  theme: {
    extend: {
      colors: {
        primaryDark: "#101928",
        primaryLight: "#2754F3",
        layer: "#1D2739",
        grey: "#F9FAFB",
        bg: "#F5F6F8"

      },
      fontSize:{
        md: "26px",
        sm: "14px"
      }
    },
  },
  plugins: [],
}

