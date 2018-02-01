const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
var CompressionPlugin = require('compression-webpack-plugin');
var Visualizer = require('webpack-visualizer-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './src/js/index.js'
  },
  module: {
    loaders: [{
      test: /\.modernizrrc.js$/,
      exclude: /(node_modules)/,
      loader: 'modernizr-loader',

    },{
      test: /\.modernizrrc(\.json)?$/,
      exclude: /(node_modules)/,
      loader: [ 'modernizr-loader', 'json-loader' ],

    },{
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel-loader',
      query: {
        plugins: ['lodash'],
        presets: [['env', { 'targets': { 'node': 4 } }]]
      }
    },
    {
      test: /\.scss$/,
      exclude: /node_modules/,
      use: ExtractTextPlugin.extract({
        fallback: "style-loader",
        use: [{
          loader: "css-loader"
        }, {
          loader: "sass-loader"
        }],
      })
    },
    {
      test: /\.(png|svg|jpg|gif)$/,
      use: [
        'file-loader'
      ]
    },
    {
      test: /\.(woff|woff2|eot|ttf|otf)$/,
      use: [
        'file-loader'
      ]
    }
    ]
  },
  resolve: {
    alias: {
      modernizr$: path.resolve(__dirname, ".modernizrrc")
    }
  },
  devServer: {
    historyApiFallback: true,
  },

  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      template: '!html-webpack-plugin/lib/loader!src/index.html',
      filename: 'index.html'
    }),
    new ExtractTextPlugin({ filename: 'styles.css', disable: false, allChunks: true }),

  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};