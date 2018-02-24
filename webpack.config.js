module.exports = {
  entry: ["./src/index.jsx", "./src/style.scss"],
  output: { filename: "./bundle.js" },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
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
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
};