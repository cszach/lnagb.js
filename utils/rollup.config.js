export default [
	{
		input: "src/index.js",
		output: {
			name: "lnagbjs",
			file: "build/lnagb.js",
			format: "umd"
		}
	},
	{
		input: "src/index.js",
		output: {
			file: "build/lnagb.module.js",
			format: "esm"
		}
	},
];
