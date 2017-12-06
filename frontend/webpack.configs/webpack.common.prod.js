const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common,{
  devtool: 'source-map',
  output: {
    filename: '[name].[chunkhash].js'
  },
  plugins:[
    new CleanWebpackPlugin(['dist']),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor' // 指定公共 bundle 的名称。
    }),
    new UglifyJSPlugin({
      sourceMap: true
    }),
  ]
});
