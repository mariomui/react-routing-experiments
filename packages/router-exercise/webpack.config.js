// Generated using webpack-cli https://github.com/webpack/webpack-cli
// @ts-check
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin')

const isProduction = process.env.NODE_ENV == 'production'

/** @type {import("webpack").Configuration} */
const config = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: ({ hash }) => '/',
    clean: true,
  },
  devServer: {
    open: true,
    host: 'localhost',
    historyApiFallback: true,
    port: 9999,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
    }),
    new NodePolyfillPlugin({ includeAliases: ['path', 'url'] }),
  ],
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/i,
        loader: 'babel-loader',
        exclude: ['/node_modules/'],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: 'asset',
      },

      // Add your rules for custom modules here
      // Learn more about loaders from https://webpack.js.org/loaders/
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
    alias: {
      '@lib': path.resolve(__dirname, 'src/lib'),
      '@features': path.resolve(__dirname, 'src/features'),
    },
  },
}

module.exports = () => {
  if (isProduction) {
    config.mode = 'production'
  } else {
    config.mode = 'development'
  }
  return config
}
