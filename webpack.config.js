const autoprefixer = require("autoprefixer");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = (env, argv) => {
	function isDevelopment() {
		return argv.mode === "development";
	}
	var config = {
		entry: {
			editor: "./src/editor.js",
			script: "./src/script.js"
		},
		output: {
			filename: "[name].js"
		},
		optimization: {
			minimizer: [
				new TerserPlugin({
					sourceMap: true
				}),
				new OptimizeCSSAssetsPlugin({
					cssProcessorOptions: {
						map: {
							inline: false,
							annotation: true
						}
					}
				})
			]
		},
		plugins: [
			new CleanWebpackPlugin(),
			new MiniCSSExtractPlugin({
				moduleFilename: chunk => {
					return chunk.name === "script"
						? "style.css"
						: "[name].css";
				}
			})
		],
		devtool: isDevelopment() ? "inline-cheap-source-map" : "source-map",
		module: {
			rules: [
				{
					test: /\.js$/,
					exclude: /node_modules/,
					use: [
						{
							loader: "babel-loader",
							options: {
								plugins: [
									"@babel/plugin-proposal-class-properties"
								],
								presets: [
									"@babel/preset-env",
									[
										"@babel/preset-react",
										{
											pragma:
												"wp.element.createElement",
											pragmaFrag:
												"wp.element.Fragment",
											development: isDevelopment()
										}
									]
								]
							}
						},
						"eslint-loader"
					]
				},
				{
					test: /\.(sa|sc|c)ss$/,
					use: [
						MiniCSSExtractPlugin.loader,
						"css-loader",
						{
							loader: "postcss-loader",
							options: {
								plugins: [autoprefixer()]
							}
						},
						"sass-loader"
					]
				},
				{
					test: /\.(png|jpe?g|gif)$/i,
					loader: "file-loader",
					options: {
						outputPath: "assets/images",
						name: "[name].[ext]"
					}
				},
				{
					test: /\.(eot|svg|ttf|woff|woff2)$/i,
					loader: "file-loader",
					options: {
						outputPath: "assets/fonts",
						name: "[name].[ext]"
					}
				}
			]
		},
		externals: {
			jquery: "jQuery",
			lodash: "lodash",
			"@wordpress/blocks": ["wp", "blocks"],
			"@wordpress/i18n": ["wp", "i18n"],
			"@wordpress/editor": ["wp", "editor"],
			"@wordpress/components": ["wp", "components"],
			"@wordpress/element": ["wp", "element"],
			"@wordpress/blog": ["wp", "blog"],
			"@wordpress/data": ["wp", "data"],
			"@wordpress/html-entities": ["wp", "htmlEntities"]
		}
	};
	return config;
};
