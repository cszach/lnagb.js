import { linearCombination } from '../../src/Functions.js';

describe( "Algebra", function () {

	it( "linearCombination", function () {

		let p = [ 1, 2, 3 ];
		let q = [ - 9, - 8, - 7 ];

		assert.strictEqual( linearCombination( p, q ), - 46 );

	} );

} );
