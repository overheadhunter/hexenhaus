module.exports = {
  purge: {
    enabled: process.env.HUGO_ENV !== 'development',
    content: [
      './content/**/*.html',
      './content/**/*.md',
      './layouts/**/*.html',
    ],
    options: {
      whitelist: ['hover:border-light', 'hover:border-primary', 'border-transparent'],
    }
  },
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {
      colors: {
        'primary': '#133a24',
        'primary-light': '#20603C',
        'secondary': '#fdf9ec',
        'tertiary': '#005E71',
        'dark': '#3c2323',
        'light': '#fdf9ec',
      },
      fontSize: {
        '7xl': '5rem',
      },
    },
    fontFamily: {
      'body': 'Open Sans, sans-serif',
    },
    screens: {
      'md': { 'min': '768px' },
      'lg': { 'min': '1280px' },
    },
  },
  variants: {},
  future: {
    removeDeprecatedGapUtilities: true,
  },
}
