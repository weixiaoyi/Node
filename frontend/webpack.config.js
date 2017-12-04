const path = require('path');

module.exports = {
  entry: './wei_xiaoyi.com/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin()
  ]
};
