const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin');
const devMode = process.env.NODE_ENV === 'production';
const webpack = require('webpack');

module.exports = {
  mode: devMode ? 'production' : 'development',
  devtool: devMode ? 'cheap-module-source-map' : 'eval',
  entry: './src/index.tsx',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.[chunkhash].js',
  },
  resolve: {
    modules: ['node_modules'],
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
    host: 'localhost',
    compress: true,
    hot: true,
    port: 3000,
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
