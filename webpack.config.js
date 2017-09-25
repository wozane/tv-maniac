const HtmlWebpackPlugin = require ('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: './dist/bundle-[hash].js',
  },
  plugins: [new HtmlWebpackPlugin({
    template: './src/index.html',
  })],
  devtool: 'source-map',
  devServer: {
    contentBase:'./src',
    // noInfo: true,
  },
}
