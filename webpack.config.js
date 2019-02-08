// import path from 'path'
// import webpack from 'webpack'
// import MiniCss from 'mini-css-extract-plugin';
const path = require('path')
const MiniCss = require('mini-css-extract-plugin');
const webpack = require('webpack');


const config = {
	mode: 'development',
    entry: './frontend/index.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },

    module: {
        rules: [
            // {
			// 	test: /\.js$/,
			// 	exclude: [
			// 		/node_modules/
			// 	],
			// 	use: 'babel-loader'
			// },
			{
				test:/\.scss$/,
				use: [
					MiniCss.loader,
					'css-loader',
					'sass-loader',
				]
			},
			{
				test: /\.(jpg|gif|svg|png)$/,
				use: [
					{
						loader: 'file-loader'
					}
				]
			},
			{
				test: /.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
				use: {
					loader: 'file-loader',
					options: {
						name: 'fonts/[name].[ext]'
					}
				}
			},
        ]
    },
    plugins: [
		new MiniCss({
			filename: '[name].css'
		})

	],
}

module.exports = config;