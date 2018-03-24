const path = require('path');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
	// context: path.resolve(__dirname, './src'),
	entry: {
		app: './index.js'
	},
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: 'js-lib.js',
		publicPath: '/',
		library: 'js-lib',
		libraryTarget: 'umd'
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader'
				]
			}//,
			// {
			// 	test: /\.ejs$/,
			// 	use: 'raw-loader'
			// }
		]
	},
	externals: {
		"jquery": 'jQuery',
		"QT": "QT",
	},
	//devtool: 'inline-source-map',
	devServer: {
		contentBase: path.join(__dirname, "dist"),
		compress: true,
		host: "0.0.0.0",
		port: 9000,
		proxy: {
			"/api": {target: "http://app.translator.qq.com", changeOrigin: true}
		}
	}
};
