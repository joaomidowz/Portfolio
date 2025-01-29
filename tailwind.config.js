/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], // Adiciona a fonte Poppins
      },
      fontSize: {
        'Header' : ['156px'],
        'Header2' : ['120px'],
        'Header3' : ['90px'],
      },
      colors: {
        primary: '#D9D9D9',
        secondary: '#32333D',
      },
      screens: {
        'tablet': '950px',
        'laptop': '1160px',
      },
    },
  },
  plugins: [],
};
