/* eslint-disable */

const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlgin = require('html-webpack-plugin');

const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
  entry: './root/index.tsx',
  devtool: 'inline-source-map',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(js)$/,
        use: 'babel-loader',
        exclude: path.resolve(__dirname, 'node_modules/'),
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
    ],
  },
  resolve: {
    modules: [path.resolve('./node_modules')],
    alias: {
      'react-dom': '@hot-loader/react-dom',
      styles: path.resolve(__dirname, 'root/styles'),
      components: path.resolve(__dirname, 'root/components'),
      app: path.resolve(__dirname, 'root/app'),
      utils: path.resolve(__dirname, 'root/utils')
    },
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    path: path.resolve(__dirname, 'dist/'),
    publicPath: './',
    filename: 'bundle.js',
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'root/'),
    },
    port: 1984,
    hot: true,
    historyApiFallback: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlgin({
      template: 'root/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],
};
