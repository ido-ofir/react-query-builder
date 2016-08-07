const path = require('path');

module.exports = {
	entry: [
		'./demo/demo.js',
	],
	devServer: {
		contentBase: './demo/',
		hot: true,
	},
	output: {
		path: path.join(__dirname, 'demo'),
		filename: 'bundle.js',
	},
	resolveLoader: {
		modulesDirectories: ['node_modules'],
	},
	resolve: {
		extensions: ['', '.js'],
	},
	plugins: [
	],
	module: {
		loaders: [
			{
				test: /\.css$/,
				loaders: ['style', 'css'],
			},
			{
				test: /\.js$/,
				loader: 'babel',
				query: {
					presets: ['es2015', 'react'],
				},
			},
		],
	},
};
