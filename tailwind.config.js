/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue': '#1D4ED8',
        'darkBlue':'#07226E',
        'lightBlue':'#F9FAFF',
        'lightGrey':'#F7F8FD',
        'blueNeutral':"#E9EFFF",
        'taleGreen':"#037092",
        'taleGreenNeutral':"#F3FAFC",
      },
    },
  },
  plugins: [],
}

