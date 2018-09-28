const withCSS = require('@zeit/next-css')
/* Without CSS Modules, with PostCSS */

if (typeof require !== 'undefined') {
  require.extensions['.css'] = file => {}
}

module.exports = withCSS()

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
