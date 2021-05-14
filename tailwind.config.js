module.exports = {
  purge: ['./public/index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily:{
      'sans': ['Helvetica', 'Arial', 'sans-serif'],
    },
    extend: {
      alignContent: ['hover', 'focus'],
    },
  },
  variants: {
    
    extend: {
      animation: ['responsive', 'motion-safe', 'motion-reduce'],
    transitionProperty: ['responsive', 'motion-safe', 'motion-reduce'],
      backgroundColor: ['active','group-focus'],
    },
  },
  plugins: [],
}
