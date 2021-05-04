export default [
	{
		input: "src/index.js",
		output: {
			name: "lnagbjs",
			file: "build/lnagb.cjs",
			format: "umd"
		}
	},
	{
		input: "src/index.js",
		output: {
			file: "build/lnagb.esm.js",
			format: "esm"
		}
	},
];
