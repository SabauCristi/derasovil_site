/** @type {import('tailwindcss').Config} */
export default {
  plugins: [require('daisyui')],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [],
  },
  theme: {
    extend: {
      colors: {
        'primary': '#FDFFFC',
        'secondary': '#264653',
        'brick': '#E76F51',
        'cyan': '#2A9D8F',
        'orange': '#F4A261',
      },
      fontFamily: {
        'signika' : ['Signika'],
      },
      backgroundImage: {
        'right_arrow': "url('/assets/Right_Arrow.svg')",
        'left_arrow': "url('./assets/Left_Arrow.svg')",
      }
    },
    
  },
}