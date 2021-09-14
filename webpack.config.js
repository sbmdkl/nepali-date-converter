const path = require('path');

module.exports = () => {
	return {
		target: 'web',
		mode: 'production',
		entry: path.resolve(__dirname, 'src', 'index.js'),
		output: {
			filename: 'index.js',
			path: path.resolve(__dirname, 'umd'),
			library: {
				type: 'umd',
			},
			globalObject: 'this',
		},
		module: {
			rules: [
				{
					test: /(\.jsx|\.js)$/,
					use: 'babel-loader',
					exclude: /node_modules/,
				},
			],
		},
	};
};
