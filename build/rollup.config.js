import { terser } from 'rollup-plugin-terser';

export default {

	input: 'src/index.js',
	output: [
		{ file: 'lib/lnagb.js', format: 'esm' },
		{ file: 'lib/lnagb.min.js', format: 'esm', plugins: [ terser() ] }
	]

};
