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
        hero: '120vh',
        card: '80vh'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
