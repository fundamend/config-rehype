# config-rehype

_config-rehype_ is a configuration preset for [rehype-cli] used by the [fundamend.dev] ecosystem.

## Installation

Use your favorite Node.js package manager, for example [npm], like so:

    npm install --save-dev @fundamend/config-rehype

... or [yarn], like so:

    yarn add --dev @fundamend/config-rehype

## Usage

In your [.rehyperc.js], import _config-rehype_ and add it to the plugins array, like so:

```js
const fundamend = require('@fundamend/config-rehype');

const plugins = [fundamend];
const settings = {};

module.exports = {
	plugins: plugins,
	settings: settings
};
```

You can extend the imported preset by adding additional [plugins] to the plugin array or [configuration options] to the exported settings object, for example like this:

```js
const fundamend = require('@fundamend/config-rehype');
const inlineSVG = require('@jsdevtools/rehype-inline-svg');

const plugins = [fundamend, inlineSVG];
const settings = {};

module.exports = {
	plugins: plugins,
	settings: settings
};
```

Settings that already exist in the configuration preset will be overwritten.

## License

[MIT]

[configuration options]: https://github.com/unifiedjs/unified-engine/blob/master/doc/configure.md
[fundamend.dev]: https://fundamend.dev
[mit]: https://choosealicense.com/licenses/mit/
[npm]: https://www.npmjs.com/
[plugins]: https://github.com/rehypejs/rehype/blob/master/doc/plugins.md
[rehype-cli]: https://github.com/rehypejs/rehype/tree/master/packages/rehype-cli
[.rehyperc.js]: https://github.com/unifiedjs/unified-engine/blob/master/doc/configure.md
[yarn]: https://yarnpkg.com/
