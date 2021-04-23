const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin');
const devMode = process.env.NODE_ENV === 'production';
const webpack = require('webpack');

module.exports = {
  mode: devMode ? 'production' : 'development',
  devtool: devMode ? 'hidden-source-map' : 'eval',
  entry: './src/index.tsx',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: '[name].[hash].js',
    publicPath: '/',
  },

  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@svg': path.resolve(__dirname, 'assets/svg/index'),
    },
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ['babel-loader', 'ts-loader'],
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
    ],
  },

  devServer: {
    historyApiFallback: true,
    inline: true,
    port: 4000,
    hot: true,
    publicPath: '/',
  },

  plugins: [
    new webpack.ProvidePlugin({
      React: 'react',
    }),
    new webpack.HotModuleReplacementPlugin(),
    new ErrorOverlayPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
};
