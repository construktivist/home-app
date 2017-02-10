const path = require('path');
const DIST_DIR = path.resolve(__dirname, "./app.js")
const DIST_SRC = path.resolve(__dirname, "public")

module.exports = {
	entry: DIST_DIR,
	output: {
		path: DIST_SRC,
		filename: 'bundle.js',
		publicPath: "/"
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: "babel-loader",
				query: {
					presets: ["es2015", "react"]
				}
			},
			{
				test: /\.(mp4)$/,
				loader: "url-loader?limit=8192",
				query: {
					presets: ["es2015", "react"]
				}
			},
			{ test: /\.(jpe?g|png|gif|svg)$/i,
				loader: 'url?limit=10000!img?progressive=true',
			}
		]
	},
	// This lets us debug our react code in chrome dev tools. Errors will have lines and file names
	// Without this the console says all errors are coming from just coming from bundle.js
	devtool: "eval-source-map"
}
