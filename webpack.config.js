const path = require('path');

module.exports = {
  entry: './src/js/app.jsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist/js')
  },
  module: {
    rules: [
      { 
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  },
  mode: 'development'
};