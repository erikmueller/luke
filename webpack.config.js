const path = require('path')
const webpack = require('webpack')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const plugins = [
  new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
  }),
]

if (process.env.NODE_ENV === 'production') {
  plugins.push(new UglifyJsPlugin({ sourceMap: true }))
}

module.exports = {
  entry: {
    app: './web/static/main.js',
    vendor: ['react-dom', 'react-router', 'react-router-dom', 'react'],
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'priv', 'static'),
  },
  plugins,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
}
