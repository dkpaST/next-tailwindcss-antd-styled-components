const NODE_ENV = process.env.NODE_ENV || 'development'
const isDev = NODE_ENV === 'development'

const tailwindcss = require('tailwindcss')
const autoprefixer = require('autoprefixer')


module.exports = {
  plugins: [
    tailwindcss(),
    autoprefixer(),
    !isDev
      ? [
          '@fullhuman/postcss-purgecss',
          {
            content: [
              './src/pages/*.js',
              './src/components/*.js',
              './src/atoms/*.js',
              './src/molecules/*.js',
              './src/layouts/*.js',
            ],
            defaultExtractor: content =>
              content.match(/[A-Za-z0-9-_:/]+/g) || [],
          },
        ]
      : null,
  ],
}
