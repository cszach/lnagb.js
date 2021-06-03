import { AugmentedMatrix } from '../../../src/matrices/AugmentedMatrix.js';
import { Matrix } from '../../../src/matrices/Matrix.js';

describe( "AugmentedMatrix", function () {

	let a = new Matrix( 3, 3, [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ] );
	let b = new Matrix( 3, 2, [ 1, 2, 3, 4, 5, 6 ] );

	let c = new AugmentedMatrix( a, b );

	it( "Instancing", function () {

		assert.deepEqual( c.size, { rows: 3, columns: 5, left: 3, right: 2 } );
		assert.strictEqual( c.numberOfEntries, 15 );
		assert.deepEqual( c.elements, [
			1, 2, 3, 1, 2,
			4, 5, 6, 3, 4,
			7, 8, 9, 5, 6
		] );

		assert.isUndefined( c.transpose );
		assert.isUndefined( c.add );
		assert.isUndefined( c.sub );
		assert.isUndefined( c.multiply );

	} );

	it( "Getters", function () {

		assert.isTrue( c.leftMatrix.equals( a ) );
		assert.isTrue( c.rightMatrix.equals( b ) );

	} );

} );
