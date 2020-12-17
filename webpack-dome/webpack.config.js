'usr strict'

// import { Configuration } from 'webpack'

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpack = require("webpack")

// Configuration webpack 添加自能提示
/**
 * 
 * 
 * @type {Configuration}
 */

module.exports = {
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist')
  },
  mode: 'development',
  devServer: {
    hot: true,
    contentBase: './dist'
  },
  module: {
    rules: [
      {
        test: /\.md$/,
        use: ['./markdown-loader']
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin({}),
    new CleanWebpackPlugin({}),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './index.html'
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 9000
  }
}
