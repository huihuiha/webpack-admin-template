const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  entry: path.resolve(__dirname, './src/main.ts'),
  mode: 'development',
  output: {
    filename: 'js/[name].[contenthash].js',
    path: path.join(__dirname, './dist'),
  },
  resolve: {
    alias: {
      '@': path.resolve('src'),
    },
    extensions: ['.tsx', '.ts', '.js', '.vue', 'jsx'],
  },
  devtool: false,
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.vue?$/,
        use: 'vue-loader',
        exclude: /node_modules/,
      },
    ],
  },
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
    new VueLoaderPlugin(),
  ],
};
