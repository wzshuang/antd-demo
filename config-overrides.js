const { injectBabelPlugin } = require('react-app-rewired');

module.exports = function overrides(config, env) {
	confit = injectBabelPlugin(['import', { libraryName: 'antd', libraryDirectory: 'es', style: 'css'}], config);
	return config;
}