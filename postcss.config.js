const NODE_ENV = process.env.NODE_ENV || "development";
const isDev = NODE_ENV === "development";

const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');
const postcssimport = require('postcss-import');

module.exports = {
  plugins: [
    tailwindcss(),
    autoprefixer(),
    postcssimport(),
    !isDev
      ? [
        "@fullhuman/postcss-purgecss",
        {
          content: [
            "./src/pages/*.js",
            "./src/components/*.js",
            './src/layouts/*.js',
          ],
          defaultExtractor: (content) =>
            content.match(/[A-Za-z0-9-_:/]+/g) || []
        }
      ]
      : null
  ]
};
