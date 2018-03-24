var webpack  = require('webpack');
var webpackProdConfig = require('./webpack.prod.js');

console.log('NODE_ENV:  ',process.env.NODE_ENV);

webpack(webpackProdConfig, function (err, stats){
	if(err){
		console.log('\n编译失败err: ', err);
	}else{
		console.log('\n编译成功！');
	}
});