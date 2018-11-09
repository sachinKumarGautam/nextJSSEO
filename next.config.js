const withCSS = require('@zeit/next-css')
/* Without CSS Modules, with PostCSS */

if (typeof require !== 'undefined') {
  require.extensions['.css'] = file => {}
}

module.exports = withCSS()

module.exports = {
  exportPathMap: function () {
    return {
      '/': { page: '/' }
      // '/googled7d319937cff5e96.html': { page: '/googled7d319937cff5e96.html' },
      // '/robots.txt': { page: '/robots.txt' }
    }
  }
}

// module.exports = {
//     webpack: function (cfg) {
//       cfg.plugins = cfg.plugins.filter(plugin => {
//         return plugin.constructor.name !== 'UglifyJsPlugin';
//       });

//       return plugin
//     }
//   }

//   module.exports.optimization = {
//     minimize: false
//   };
