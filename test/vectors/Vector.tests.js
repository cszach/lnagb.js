import { Vector } from '../../src/vectors/Vector.js';

describe( "Vector", function () {

	it( "Instancing", function () {

		let a = new Vector( [ 1, 2, 3 ] );

		assert.deepEqual( a.elements, [ 1, 2, 3 ] );
		assert.deepEqual( a.size, { rows: 3, columns: 1 } );
		assert.strictEqual( a.numberOfEntries, 3 );

	} );

	it( "clone", function () {

		let a = new Vector( [ 1, 2, 3 ] );
		let clone = a.clone();

		assert.deepEqual( clone.elements, [ 1, 2, 3 ] );
		assert.deepEqual( clone.size, { rows: 3, columns: 1 } );
		assert.strictEqual( clone.numberOfEntries, 3 );

	} );

	it( "multiplyScalar", function () {

		let a = new Vector( [ 1, 2, 3 ] );

		a.multiplyScalar( 5 ).multiplyScalar( - 0.5 );
		assert.deepEqual( a.elements, [ - 2.5, - 5, - 7.5 ] );

	} );

	it( "negate", function () {

		let a = new Vector( [ 1, - 2, 3 ] );

		a.negate();
		assert.deepEqual( a.elements, [ - 1, 2, - 3 ] );

	} );

	it( "add", function () {

		let a = new Vector( [ 1, 2, 3 ] );
		let b = new Vector( [ 9, 8, 7 ] );
		let c = new Vector( [ 4, 5 ] );

		a.add( b ).add( c );
		assert.deepEqual( a.elements, [ 10, 10, 10 ] );

	} );

	it( "subtract", function () {

		let a = new Vector( [ 9, 8, 7 ] );
		let b = new Vector( [ 1, 2, 3 ] );
		let c = new Vector( [ 4, 5 ] );

		a.subtract( b ).subtract( c );
		assert.deepEqual( a.elements, [ 8, 6, 4 ] );

	} );

	it( "dot", function () {

		let a = new Vector( [ 1, 2, 3 ] );
		let b = new Vector( [ 4, 5, 6 ] );
		let c = new Vector( [ 7, 8 ] );

		assert.strictEqual( a.dot( b ), 32 );
		assert.isUndefined( a.dot( c ) );

	} );

} );
