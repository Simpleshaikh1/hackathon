/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ['Clash Display',],
        mont: 'Montserrat',
        unica: 'UnicaOne'
      },
      colors: {
        mainBlue: '#150E28',
        brightPurple: '#D434FE',
        lightBlue: '#903AFF',
        redPink: '#FF26B9',
      }

    },
  },
  plugins: [],
}

