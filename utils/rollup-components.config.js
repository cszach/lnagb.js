let components = [ 'matrices', 'algebra' ];
let exports = [];

components.forEach( ( component ) => {

	exports.push(
		{
			input: `src/${component}/index.js`,
			output: {
				name: "lnagbjs",
				file: `build/components/${component}/lnagb.${component}.js`,
				format: "umd"
			}
		},
		{
			input: `src/${component}/index.js`,
			output: {
				file: `build/components/${component}/lnagb.${component}.module.js`,
				format: "esm"
			}
		}
	);

} );

export default exports;
