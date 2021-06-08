const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const mode = process.env.NODE_ENV === 'production' ? 'production' : 'development';

module.exports = {
  mode,

  entry: './src/index.js',
  output: {
    filename: "main.js", // 빌드된 js파일 이름
    path: path.resolve(__dirname, 'dist'), // 빌드된 경로 이름
  },
  plugins: [new HtmlWebpackPlugin({
    template: "./assets/index.html",
  })],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          // without additional setting, this will reference .babelrc
          loader: "babel-loader",
        }
      }, {
        test: /\.css$/i,
        use: [
          "css-loader",
        ],
      }
    ]
  },

  devtool: 'source-map',

  devServer: {
    contentBase: './dist',
  }
}
