const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// 拼接__dirname
const joinDirname = (dir) => path.join(__dirname, `src/${dir}`);

module.exports = {
  entry: path.resolve(__dirname, './src/main.ts'),
  mode: 'development',
  output: {
    filename: 'js/[name].[contenthash:8].js',
    path: path.join(__dirname, './dist'),
  },
  resolve: {
    alias: {
      '@': path.resolve('src'),
      '@compoonent': joinDirname('component'),
      '@pages': joinDirname('pages'),
      '@router': joinDirname('router'),
      '@stores': joinDirname('stores'),
      '@assets': joinDirname('assets')
    },
    extensions: ['.tsx', '.ts', '.js', '.vue', 'jsx'],
  },
  devtool: false,
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              appendTsSuffixTo: ['\\.vue$'],
            },
          },
        ],

        exclude: /node_modules/,
      },
      {
        test: /\.vue$/,
        use: 'vue-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          // 取代style-loader的原因是将css抽离成单独文件
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpe?g|gif|webp)(\?.*)?$/,
        type: 'asset',
        generator: { filename: 'img/[contenthash:8][ext][query]' },
      },
    ],
  },
  optimization: {
    usedExports: true,
  },
  devServer: {
    port: 8080,
    historyApiFallback: true, // 支持浏览器回车history模式
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
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
    }),
  ],
};
