module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#DF45EC",
          dark: "#3257DA"
        },
        secondary: {
          light: "#FFB443",
          dark: "#B213DA"
        }
      },
      borderRadius: {
        'custom': "14rem"
      },
      height: {
        hero: '50vh',
        card: '80vh',
        cardres: '60vh'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
