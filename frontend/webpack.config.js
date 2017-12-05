const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack'); // 用于访问内置插件
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = {
  entry:'./wei_xiaoyi.com/index.js',
  devtool: 'inline-source-map',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist/wei_xiaoyi.com/')
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    hot: true,
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
        use: ['style-loader','css-loader']
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title:'前端主页'
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
    // new UglifyJSPlugin()
  ]
};
