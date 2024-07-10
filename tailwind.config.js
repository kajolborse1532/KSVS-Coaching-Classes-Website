/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        restaurant:{
          background:"#131921",
          light_blue: "#232f3A",
          yellow:"#FEBD69",
          DEFAULT:"#FCFAF9",
        }
      }
    },
  },
  plugins: [],
}

