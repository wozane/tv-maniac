const HtmlWebpackPlugin = require ('html-webpack-plugin')

module.exports = {
  entry: './src/index.jsx',
  output: {
    filename: './dist/bundle-[hash].js',
  },
  module: {
    loaders: [
      { test: /\.jsx$/, use: 'babel-loader' },
      { test: /\.scss$/, use: ['style-loader','css-loader','sass-loader'] },
    ],
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
