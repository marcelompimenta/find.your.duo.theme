/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html'
  ],
  theme: {
    fontFamily:{
      sans:['Inter', 'sans-serif']
    },
    extend: {
      backgroundImage:{
        galaxy: "url('./background-galaxy.png')",
        gradientText: 'linear-gradient(90.36deg, #9572FC 20.08%, #43E7AD 63.94%, #E1D55D 88.57%)', 
        gradientBox: 'linear-gradient(rgb(0, 0, 0, 0) 0%, rgb(0, 0, 0, 0.9) 69%)' 
      }
    },
  },
  plugins: [],
}
