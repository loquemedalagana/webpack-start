module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          // without additional setting, this will reference .babelrc
          loader: "babel-loader",
        }
      }
    ]
  }
}
