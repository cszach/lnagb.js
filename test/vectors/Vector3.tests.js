import { Vector } from '../../src/vectors/Vector.js';
import { Vector3 } from '../../src/vectors/Vector3.js';

describe( "Vector3", function () {

	it( "Instancing", function () {

		let a = new Vector3( 1, 2, 3 );
		let b = new Vector3();

		assert.strictEqual( a.x, 1 );
		assert.strictEqual( a.y, 2 );
		assert.strictEqual( a.z, 3 );
		assert.deepEqual( a.elements, [ 1, 2, 3 ] );
		assert.deepEqual( a.size, { rows: 3, columns: 1 } );
		assert.strictEqual( a.numberOfEntries, 3 );

		assert.strictEqual( b.x, 0 );
		assert.strictEqual( b.y, 0 );
		assert.strictEqual( b.z, 0 );
		assert.deepEqual( b.elements, [ 0, 0, 0 ] );
		assert.deepEqual( b.size, { rows: 3, columns: 1 } );
		assert.strictEqual( b.numberOfEntries, 3 );

	} );

	it( "clone", function () {

		let a = new Vector3( 1, 2, 3 );
		let clone = a.clone();

		assert.instanceOf( clone, Vector3 );
		assert.deepEqual( clone.elements, a.elements );
		assert.deepEqual( clone.size, a.size );
		assert.strictEqual( clone.numberOfEntries, a.numberOfEntries );

	} );

	it( "equals", function () {

		let a = new Vector3( 1, 2, 3 );
		let b = new Vector( [ - 1, 2, 3 ] );
		let c = new Vector( [ 1, 2 ] );

		assert.isFalse( a.equals( b ) );
		assert.isFalse( a.equals( c ) );

		b.elements = [ 1, 2, 3 ];

		assert.isTrue( a.equals( b ) );

	} );

	it( "multiplyScalar", function () {

		let a = new Vector3( 1, 2, 3 );

		a.multiplyScalar( 5 ).multiplyScalar( - 0.5 );

		assert.strictEqual( a.x, - 2.5 );
		assert.strictEqual( a.y, - 5 );
		assert.strictEqual( a.z, - 7.5 );
		assert.deepEqual( a.elements, [ - 2.5, - 5, - 7.5 ] );

	} );

	it( "negate", function () {

		let a = new Vector3( 1, - 2, 3 );

		a.negate();

		assert.strictEqual( a.x, - 1 );
		assert.strictEqual( a.y, 2 );
		assert.strictEqual( a.z, - 3 );
		assert.deepEqual( a.elements, [ - 1, 2, - 3 ] );

	} );

	it( "add", function () {

		let a = new Vector3( 1, 2, 3 );
		let b = new Vector3( 9, 8, 7 );

		a.add( b );

		assert.strictEqual( a.x, 10 );
		assert.strictEqual( a.y, 10 );
		assert.strictEqual( a.z, 10 );
		assert.deepEqual( a.elements, [ 10, 10, 10 ] );

	} );

	it( "subtract", function () {

		let a = new Vector3( 9, 8, 7 );
		let b = new Vector3( 1, 2, 3 );

		a.subtract( b );

		assert.strictEqual( a.x, 8 );
		assert.strictEqual( a.y, 6 );
		assert.strictEqual( a.z, 4 );
		assert.deepEqual( a.elements, [ 8, 6, 4 ] );

	} );

	it( "dot", function () {

		let a = new Vector3( 1, 2, 3 );
		let b = new Vector3( 4, 5, 6 );

		assert.strictEqual( a.dot( b ), 32 );

	} );

	it( "cross", function () {

		let a = new Vector3( 1, 2, 3 );
		let b = new Vector3( 4, 5, 6 );
		let expected = new Vector3( - 3, 6, - 3 );

		assert.isTrue( a.cross( b ).equals( expected ) );

	} );

} );
