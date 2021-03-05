const lint = require('@fundamend/config-rehype-lint');
const retext = require('@fundamend/config-rehype-retext');

const plugins = [lint, retext];
const settings = {};

module.exports = {
	plugins: plugins,
	settings: settings,
};
