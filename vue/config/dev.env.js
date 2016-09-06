var merge = require('webpack-merge');
var prodEnv = require('./prod.env');
//webpack-merge 用于开发环境和生产环境的web pack配置文件的配置合并

module.exports = merge(prodEnv, {
	NODE_ENV: '"development"'
});