const withCss = require('@zeit/next-css')

// fix: prevents error when .css files are required by node
if (typeof require !== 'undefined') {
  require.extensions['.css'] = (file) => {}
}

const withImages = require('next-images')
module.exports = withImages()
module.exports = withCss()
