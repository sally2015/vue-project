var webpack = require('webpack');
var path = require('path');
var config = require('config/index.js');
var projectRoot = path.resolve(__dirname,'../');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

	entry : [
		'webpack/hot/dev-server',
		'webpack-dev-server/client?http://localhost:8080',
		'src/app.js'
	],
	output:{
		path : config.build.assetsRoot,
		filename:'[name].js'
	},
	externals:{
		'zepto': 'Zepto',
    	'wx': 'jWeixin'
	},
	module:{
		loaders :[
			{
				 test: /\.vue$/,
        		loader: 'vue'
			},
			{
				test: /\.vue$/,
        		loader: 'vue'
			},
			{
		        test: /\.js$/,
		        loader: 'babel',
		        include: projectRoot,
		        exclude: /node_modules/
      		}

		]
	},
	plugins:[
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
		      filename: 'index.html',
		      template: 'index.html',
		      inject: true
		    })
	]

}