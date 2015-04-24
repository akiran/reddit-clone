var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: {
    'app.js': './client/js/app.jsx'
  },
  output: {
    path: path.join(__dirname, 'build', 'js'),
    filename: '[name]',
  },
  module: {
    loaders: [
      {test: /\.jsx$/, loaders: ['babel']},
    ],
  },
  resolve : {
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
    
  ]
};