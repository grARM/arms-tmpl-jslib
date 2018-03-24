var $$app = require('./src/app.js');


$$app.init();

//对外暴露的方法
module.exports = {
	init: function(){console.log('\njs-lib init')}
};