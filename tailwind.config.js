const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'plants': "url('/assets/images/plants.png')"
      }
    },
    fontFamily: {
      display: ['Inter', 'sans-serif'],
      sans: ['Lato', 'sans-serif'],
      serif: ['Merriweather', 'serif']
    },
    colors:{
      'primary': '#10E063',
      'secondary': '#1A73E8',
      'background': '#111',
      ...colors
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
