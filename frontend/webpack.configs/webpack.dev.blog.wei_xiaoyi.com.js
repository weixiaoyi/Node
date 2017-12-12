const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const dev = require('./webpack.common.dev.js');

module.exports = merge(dev,{
  entry:'../blog.wei_xiaoyi.com/index.js',
  devServer: {
    port: 9001
  },
  plugins:[
    new HtmlWebpackPlugin({
      template: '../blog.wei_xiaoyi.com/index.html'
    })
  ]
});
