const path = require('path')
const fs = require('fs')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

config = {
	entry: {
		main: path.resolve(__dirname, "src", "js", "index.js"),
		sponsors: path.resolve(__dirname, "src", "js", "sponsors.js")
	},
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "[name].js",
	},
	devtool: 'inline-source-map',
	mode: 'development',
	devServer: {
		contentBase: './dist',
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: [
					'babel-loader'
				],
				exclude: [
					/node_modules/
				]
			},
			{
				test: /\.scss$/,
				use: [
					"style-loader", // creates style nodes from JS strings
					"css-loader?sourceMap", // translates CSS into CommonJS
					"sass-loader?sourceMap" // compiles Sass to CSS
				]
			},
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"],
			},
			{
				test: /\.(png|svg|jpe?g|gif)$/,
				use: ['file-loader'],
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/,
				use: ['file-loader'],
			},
			{
				test: /\.html$/,
				use: ['html-loader'],
			}
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, "src", "sponsors.html"),
			filename: "sponsors.html",
			chunks: ['sponsors']
		}),
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, "src", "index.html"),
			inject: 'body',
			chunks: ['main']
		}),
	],
}

if (fs.existsSync(path.resolve(__dirname, "src", "static"))) {
	config.plugins.push(
		new CopyWebpackPlugin([
			{ from: 'src/static', to: 'static' }
		]),
	);
}

module.exports = config