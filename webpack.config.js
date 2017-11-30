const path = require('path');

var webpack = require("webpack");

module.exports = {
  context: path.join(__dirname, 'src'),
  entry: [
    './main.jsx',
  ],
  output: {
    path: path.join(__dirname, 'www'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ],
  },
  resolve: {
    modules: [
      path.join(__dirname, 'node_modules'),
    ],
    extensions: ['.js', '.jsx', '*']
  },
};