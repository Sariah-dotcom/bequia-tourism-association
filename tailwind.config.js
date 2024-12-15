/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'green':'#003C43',
        'grey':'#757575',
      },

      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'dm': ['DM Sans', 'sans-serif']
      }
    },
  },
  plugins: [],
}

