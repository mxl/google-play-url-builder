const path = require('path');

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  mode: 'production',
  output: {
    filename: 'index.js',
    globalObject: 'this',
    library: require('./package').name,
    libraryTarget: 'umd',
    path: path.resolve(__dirname, 'dist')
  }
};