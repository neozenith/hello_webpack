const path = require('path');
const webpack = require('webpack');

// TODO: const stripLoad = require('strip-loader');
// //Removes console.log for prod builds

module.exports = {

  //// ENTRY ////
  entry: './src/index.js',

  //// OUTPUT ////
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },

  //// MODULE ////
  module: {
    rules: [
      {
        test: [/\.jsx?$/, /\.es6$/],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'react']
          }
        }
      }
    ]
  },

  //// RESOLVE ////
  resolve: {
    extensions: ['.js', '.jsx', '.es6']
  },

  //// PLUGINS ////
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      Popper: ['popper.js', 'default']
    })
  ]
};
