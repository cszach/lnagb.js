let components = [ 'equations', 'matrices', 'vectors' ];
let exports = [];

components.forEach( ( component ) => {

	exports.push(
		{
			input: `src/${component}/index.js`,
			output: {
				name: "lnagbjs",
				file: `build/${component}/lnagb.${component}.cjs`,
				format: "umd"
			}
		},
		{
			input: `src/${component}/index.js`,
			output: {
				file: `build/${component}/lnagb.${component}.esm.js`,
				format: "esm"
			}
		}
	);

} );

export default exports;
