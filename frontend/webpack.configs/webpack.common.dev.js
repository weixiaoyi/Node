const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack'); // 用于访问内置插件
const common = require('./webpack.common.js');

module.exports = merge(common,{
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    hot: true,
  },
  plugins:[
    new webpack.HotModuleReplacementPlugin()
  ]
});
