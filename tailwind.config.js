module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        99: 500,
        100: 600,  
        200: 900,
        250: 950,
        300: 1200,
        350: 1300,
        400: 1500,
        500: 1800,
        600: 2100
    }
    },
  },
  variants: {
    extend: {
      brightness: ['hover'],
      grayscale: ['hover'],
      textOpacity: ['hover'],
      contrast: ['hover', 'focus'],
    },
  },
  plugins: [
    require('tailwind-filter-utilities'),
  ],
}
