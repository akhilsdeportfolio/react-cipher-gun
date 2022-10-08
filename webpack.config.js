/** @format */

const path = require('path');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const PUBLIC_FOLDER = path.resolve(__dirname, 'public');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    chunkFilename: '[id].js',
    publicPath: '',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.less$/i,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                strictMath: true,
              },
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.(jpe?g|png|gif|woff|woff2|otf|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1000,
              name: 'assets/img/[name].[ext]',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [{ from: './public/*' }],
    }),
    new HtmlWebpackPlugin({
      template: __dirname + '/src/index.ejs',
      filename: 'index.html',
      inject: 'body',
    }),
  ],
};
