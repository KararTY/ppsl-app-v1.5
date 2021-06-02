module.exports = {
  mode: 'jit',
  purge: [
    './src/**/*.svelte',
    './src/**/*.js',
    './public/**/*.html'
  ],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter']
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [
    require('@tailwindcss/forms')
  ]
}
