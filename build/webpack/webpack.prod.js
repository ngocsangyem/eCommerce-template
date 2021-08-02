const { merge } = require('webpack-merge');
const { ESBuildMinifyPlugin, ESBuildPlugin } = require('esbuild-loader');

const { WebpackCommonConfig } = require('./webpack.common');

const WebpackProdConfig = merge(WebpackCommonConfig, {
	mode: 'production',
	devtool: false,

	// output: {
	// 	path: taskTarget,
	// 	publicPath: '/',
	// 	filename: 'js/[name].min.js',
	// },

	optimization: {
		minimize: true,
		minimizer: [
			new ESBuildMinifyPlugin({
				target: 'es2015',
			}),
		],
	},
	plugins: [new ESBuildPlugin()],
});

module.exports = { WebpackProdConfig };
