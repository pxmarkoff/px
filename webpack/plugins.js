const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = [
  new HtmlWebpackPlugin({
    template: './public/index.html',
    favicon: './public/favicon.ico',
  }),
  new CleanWebpackPlugin(),
  new MiniCssExtractPlugin({
    filename: 'css/styles.css',
  }),
];
