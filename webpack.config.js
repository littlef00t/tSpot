const path = require('path');

module.exports = {
  context: __dirname,
  entry: "./frontend/t_spot.jsx",
  // output: {
  //   path: path.join(__dirname, 'app', 'assets', 'javascripts'),
  //   filename: "bundle.js",
  //   devtoolModuleFilenameTemplate: '[resourcePath]',
  //   devtoolFallbackModuleFilenameTemplate: '[resourcePath]?[hash]'
  // },
  output: {
    path: "./",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: [/\.jsx?$/, /\.js?$/],
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  },
  resolve: {
    extensions: ["", ".js", ".jsx"]
  },
  devtool: 'source-map'
};
