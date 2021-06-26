module.exports = {
	"plugins": [ "eslint-plugin-html" ],
	"env": {
		"browser": true,
		"es6": true,
		"node": true
	},
	"extends": "mdcs",
	"globals": {
		"Atomics": "readonly",
		"SharedArrayBuffer": "readonly"
	},
	"parserOptions": {
		"ecmaVersion": 2018
	},
	"rules": {
	}
};
