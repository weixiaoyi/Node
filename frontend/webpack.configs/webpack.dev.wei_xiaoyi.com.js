const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const dev = require('./webpack.common.dev.js');

module.exports = merge(dev,{
  entry:'../wei_xiaoyi.com/index.js',
  devServer: {
    port: 9000
  },
  plugins:[
    new HtmlWebpackPlugin({
      title:'前端主页'
    })
  ]
});
