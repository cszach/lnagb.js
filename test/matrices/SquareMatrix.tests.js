import { SquareMatrix } from '../../src/matrices/SquareMatrix.js';

describe( "SquareMatrix", function () {

	it( "Instancing", function () {

		let a = new SquareMatrix( 3 );
		let _a = a.elements;

		assert.deepEqual( a.size, { rows: 3, columns: 3 } );
		assert.strictEqual( a.numberOfEntries, 9 );
		assert.deepEqual( _a, [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ] );

		let b = new SquareMatrix( 3, [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ] );
		let _b = b.elements;

		assert.deepEqual( b.size, { rows: 3, columns: 3 } );
		assert.strictEqual( b.numberOfEntries, 9 );
		assert.deepEqual( _b, [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ] );

	} );

	it( "identity", function () {

		let a = new SquareMatrix( 3, [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ] );
		a.identity();

		assert.deepEqual( a.size, { rows: 3, columns: 3 } );
		assert.deepEqual( a.elements, [ 1, 0, 0, 0, 1, 0, 0, 0, 1 ] );

	} );

} );
