var path = require('path');

module.exports = {
	build:{
		env : require('./prod.env.js'),
		index : path.resolve(__dirname,'../dist/index.html'),
		assetsRoot : path.resolve(__dirname,'../dist'),
		assetsSubDirectiory : 'static',
		assetsPublicPath:'/',
		productionSourceMap:false,
		productionGzip:false,
		productionGzipExtensions: ['js', 'css']
	},
	dev:{
		env : require('./dev.env.js'),
		port:8888,
		proxyTable:{}
	}
}


/*
	path.resolve方法
	从源地址from到目的地址to的绝对路径
	可以理解为cd XXX
	如果某个 from 或 to 参数是绝对路径（比如 'E:/abc'，或是以“/”开头的路径）

	栗子：
	var url4 = path.resolve('abc', 'vajoy', 'ok.gif');
	E:\github\nodeAPI\path\abc\vajoy\ok.gif
	var url2 = path.resolve('..', 'testFiles', 'a.txt');
	console.log('url2:',url2);  // E:\github\nodeAPI\testFiles\a.txt
*/