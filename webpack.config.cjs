const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, './src/index.js'),
  mode: 'development',
  output: {
    filename: 'js/[name].[contenthash].js',
    path: path.join(__dirname, './dist'),
  },
  devtool: false,
  optimization: {
    usedExports: true,
  },
  devServer: {
    port: 8080,
    static: {
      directory: path.join(__dirname, 'public'),
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'index.html'),
    }),
  ],
};
