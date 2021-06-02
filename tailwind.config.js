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
      colors: {
        brand: '#64B549',
        btncolor: '#F5F5F5'
      },
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
