const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const path = require('path');

const files = {
  test: /\.ico$/i,
  use: [
    {
      loader: 'file?name=[name].[ext]',
    },
  ],
};

const fonts = {
  test: /\.(woff|woff2|eot|ttf|otf)$/i,
  use: [
    {
      loader: 'file-loader',
      options: {
        name: '[name].[ext]',
        outputPath: 'assets/fonts',
        publicPath: '../assets/fonts',
      },
    },
  ],
};

const images = {
  test: /\.(png|svg|jpg|jpeg|gif)$/i,
  use: [
    {
      loader: 'url-loader',
      options: {
        limit: 8000,
        name: '[name].[ext]',
        outputPath: 'assets/img',
        publicPath: '../assets/img',
      },
    },
  ],
};

const styles = {
  test: /\.s[ac]ss$/i,
  use: [
    MiniCssExtractPlugin.loader,
    'css-loader',
    'postcss-loader',
    'sass-loader',
    {
      loader: 'sass-resources-loader',
      options: {
        resources: [
          path.join(__dirname, '..', 'src/assets/styles/variables.sass'),
          path.join(__dirname, '..', 'src/assets/styles/mixins.sass'),
          path.join(__dirname, '..', 'src/assets/styles/mq.sass'),
        ],
      },
    },
  ],
};

const typescript = {
  test: /\.(ts|tsx)?$/,
  use: [
    {
      loader: 'ts-loader',
      options: {
        transpileOnly: true,
      },
    },
  ],
  exclude: /node_modules/,
};

module.exports = [files, fonts, images, styles, typescript];
