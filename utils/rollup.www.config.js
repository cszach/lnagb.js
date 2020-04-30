let components = [ 'matrices', 'algebra' ];
let exports = [
	{
		input: "src/index.js",
		output: {
			name: "lnagbjs",
			file: "docs/builds/lnagb.js",
			format: "umd"
		}
	},
	{
		input: "src/index.js",
		output: {
			file: "docs/builds/lnagb.module.js",
			format: "esm"
		}
	}
];

components.forEach( ( component ) => {

	exports.push(
		{
			input: `src/${component}/index.js`,
			output: {
				name: "lnagbjs",
				file: `docs/builds/${component}/lnagb.${component}.js`,
				format: "umd"
			}
		},
		{
			input: `src/${component}/index.js`,
			output: {
				file: `docs/builds/${component}/lnagb.${component}.module.js`,
				format: "esm"
			}
		}
	);

} );

export default exports;
