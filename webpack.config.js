module.exports = {
  entry: [ "./src/index.js", "./src/style.scss"],
  output: { filename: "./bundle.js" },
  module: {
    loaders: [
      {
        loader: "babel-loader",
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'stage-1', 'react']
        }
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  }
}