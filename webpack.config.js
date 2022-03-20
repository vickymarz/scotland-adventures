const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const buildPath = path.resolve(__dirname, 'dist')

module.exports = {
	mode: 'production',
	devtool: 'source-map',
	entry: {
		index: './src/index.js',
		users: './src/dashboard/users.js',
		admin: './src/admin/admin.js',
		adminDashboard: './src/admin/dashboard.js',
		newAdmin: './src/admin/newAdmin.js',
	},
	devServer: {
		static: 'dist',
		historyApiFallback: true,
	},
	output: {
		filename: '[name].[fullhash].js',
		path: buildPath,
	},
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: 'asset/resource',
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				type: 'asset/inline',
			},
		],
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			template: './src/index.html',
			inject: 'body',
			chunks: ['index'],
			filename: 'index.html',
		}),
		new HtmlWebpackPlugin({
			template: './src/dashboard/users.html',
			inject: 'body',
			chunks: ['users'],
			filename: 'users.html',
		}),
		new HtmlWebpackPlugin({
			template: './src/admin/admin.html',
			inject: 'body',
			chunks: ['admin'],
			filename: 'admin.html',
		}),
		new HtmlWebpackPlugin({
			template: './src/admin/dashboard.html',
			inject: 'body',
			chunks: ['adminDashboard'],
			filename: 'dashboard.html',
		}),
		new HtmlWebpackPlugin({
			template: './src/admin/admin-register.html',
			inject: 'body',
			chunks: ['newAdmin'],
			filename: 'admin-register.html',
		}),
	],
}
