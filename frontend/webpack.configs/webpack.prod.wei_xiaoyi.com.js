const path = require('path');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const prod = require('./webpack.common.prod.js');

module.exports = merge(prod,{
  entry:{
    main:  '../wei_xiaoyi.com/index.js',
    //vendor: ['']
  },
  output: {
    path: path.resolve(__dirname, '../../dist/wei_xiaoyi.com/')
  },
  plugins:[
    new HtmlWebpackPlugin({
      title:'前端主页'
    })
  ]
});
