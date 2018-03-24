var path = require('path')
var webpack = require('webpack');
var merge = require('webpack-merge');
var baseWebpackConfig = require('./webpack.config.js');
// const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

var modifiedDate = +(new Date());
var webpackConfig = merge(baseWebpackConfig, {
  devtool: false,
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.BannerPlugin('This file is modified at:' + modifiedDate)//,
    // new UglifyJSPlugin()
  ]
});

module.exports = webpackConfig