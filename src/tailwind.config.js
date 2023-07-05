/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./comps/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0F1020",
        pink: {
          50: '#fcd2ff',
          100: '#fcc9ff',
          200: '#fbc0ff',
          300: '#fbb7ff',
          400: '#faaeff',
          500: '#faa6ff',
          600: '#e195e5',
          700: '#c884cc',
          800: '#af74b2',
          900: '#966399'
        }
      }
    }
  },
  plugins: [require("daisyui")],
}

