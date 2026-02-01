/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'saisei-beige': '#F6F3EB',
        'saisei-dark': '#1A1A1A',
        'saisei-brown': '#8C7B6C',
        'saisei-text': '#2C2C2C',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Lato"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
