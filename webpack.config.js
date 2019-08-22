const path = require('path');
const hwp = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'build.js',
        path: path.join(__dirname, '/dist')
    },
    module:{
        rules:[{
            test: /\.js$/,
	    exclude: /node_modules/,
	    use:{
		 loader: 'babel-loader'
	}
      }]
    },
    plugins:[
        new hwp({
		template: './src/index.html'
	})
    ]
}
