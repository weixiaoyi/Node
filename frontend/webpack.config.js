const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack'); // 用于访问内置插件
const CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = {
  entry:'./wei_xiaoyi.com/index.js',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist/wei_xiaoyi.com/')
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader'
      }
    ],
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title:'前端主页'
    })
  ]
};
