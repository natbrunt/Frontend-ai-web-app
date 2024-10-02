

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: 
    {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },

      colors: {
        'custom-blue': '#4f38df',
        'custom-red': '#f23e62',
        'custom-purple': '#8234cf',
        'custom-gray': '#7f7f7f',
        'custom-blue-button': ' #0f73ff'
      },
      /* useful for images */
      maxHeight: {
          'sm': '26rem',
          'md': '24rem',
          'lg': '28rem',
          'xl': '32rem'
      },
      maxWidth: {
        'sm': '26rem',
        'md': '24rem',
        'lg': '28rem',
        'xl': '32rem'
    },
    },
  },
  plugins: [],
}

