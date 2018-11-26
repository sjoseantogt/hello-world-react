const config = {
	mode: 'development',
	output: {
		publicPath:'/dist'
	},
	module :{
		rules: [{
				test: /\.jsx?$/,
				use: ['babel-loader']
		}]
	}
}
module.exports = config