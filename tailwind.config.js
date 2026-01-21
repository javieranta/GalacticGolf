/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        space: {
          dark: '#0a0a1a',
          light: '#1a1a3a',
        }
      }
    },
  },
  plugins: [],
}
