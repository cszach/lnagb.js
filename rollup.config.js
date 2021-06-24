import { terser } from 'rollup-plugin-terser';

export default [
	{
		input: 'src/index.js',
		output: [
			{ file: 'lib/lnagb.js', format: 'esm' },
			{ file: 'lib/lnagb.min.js', format: 'esm', plugins: [ terser() ] },
		]
	},
	{
		input: 'src/equations/index.js',
		output: [
			{ file: 'lib/lnagb.equations.js', format: 'esm' },
			{ file: 'lib/lnagb.equations.min.js', format: 'esm', plugins: [ terser() ] },
		]
	},
	{
		input: 'src/matrices/index.js',
		output: [
			{ file: 'lib/lnagb.matrices.js', format: 'esm' },
			{ file: 'lib/lnagb.matrices.min.js', format: 'esm', plugins: [ terser() ] },
		]
	},
	{
		input: 'src/vectors/index.js',
		output: [
			{ file: 'lib/lnagb.vectors.js', format: 'esm' },
			{ file: 'lib/lnagb.vectors.min.js', format: 'esm', plugins: [ terser() ] },
		]
	},
	{
		input: 'src/index.js',
		output: [
			{ file: 'lib/umd/lnagb.js', format: 'umd', name: 'lnagb' },
			{ file: 'lib/umd/lnagb.min.js', format: 'umd', name: 'lnagb', plugins: [ terser() ] },
		]
	}
];
