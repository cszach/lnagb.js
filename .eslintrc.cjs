module.exports = {
	"env": {
		"es6": true,
		"shared-node-browser": true
	},
	"extends": [ 'mdcs', 'plugin:jsdoc/recommended' ],
	"globals": {
		"Atomics": "readonly",
		"SharedArrayBuffer": "readonly"
	},
	"parserOptions": {
		"ecmaVersion": 2018,
		"sourceType": "module",
	},
	"rules": {
	},
	"overrides": [
		{
			files: "test/unit/**/*.tests.js",
			"env": {
				"mocha": true
			},
			globals: {
				"assert": "readonly"
			}
		}
	]
};
