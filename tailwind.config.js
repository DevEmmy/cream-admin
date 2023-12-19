/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      screens: {
        lt: { max: "500px" },
        sm: { max: "600px" },
        sm1: { max: "768px" },
        md: { max: "800px" },
        md1: { max: "850px" },
        lg: { max: "1707px" },
        ls: { max: "1370px" },
        xl: { max: "1250px" },
        lf: { max: "1150px" },
      },
      colors: {
        primary: "#FFD42E"
      }
    },
  },
  plugins: [],
}
