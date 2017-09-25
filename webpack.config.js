const HtmlWebpackPlugin = require ('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: './dist/bundle-[hash].js',
  },
  plugins: [new HtmlWebpackPlugin({
    title: 'Tv Maniac',
  })],
  devtool: 'source-map',
  devServer: {
    contentBase:'./src',
    // noInfo: true,
  },
}
