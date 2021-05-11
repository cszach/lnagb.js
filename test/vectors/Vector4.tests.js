import { Vector } from '../../src/vectors/Vector.js';
import { Vector4 } from '../../src/vectors/Vector4.js';

describe( "Vector4", function () {

	it( "Instancing", function () {

		let a = new Vector4( 1, 2, 3, 4 );
		let b = new Vector4();

		assert.strictEqual( a.x, 1 );
		assert.strictEqual( a.y, 2 );
		assert.strictEqual( a.z, 3 );
		assert.strictEqual( a.w, 4 );
		assert.deepEqual( a.elements, [ 1, 2, 3, 4 ] );
		assert.deepEqual( a.size, { rows: 4, columns: 1 } );
		assert.strictEqual( a.numberOfEntries, 4 );

		assert.strictEqual( b.x, 0 );
		assert.strictEqual( b.y, 0 );
		assert.strictEqual( b.z, 0 );
		assert.strictEqual( b.w, 0 );
		assert.deepEqual( b.elements, [ 0, 0, 0, 0 ] );
		assert.deepEqual( b.size, { rows: 4, columns: 1 } );
		assert.strictEqual( b.numberOfEntries, 4 );

	} );

	it( "clone", function () {

		let a = new Vector4( 1, 2, 3, 4 );
		let clone = a.clone();

		assert.instanceOf( clone, Vector4 );
		assert.deepEqual( clone.elements, a.elements );
		assert.deepEqual( clone.size, a.size );
		assert.strictEqual( clone.numberOfEntries, a.numberOfEntries );

	} );

	it( "equals", function () {

		let a = new Vector4( 1, 2, 3, 4 );
		let b = new Vector( [ - 1, 2, 3, 4 ] );
		let c = new Vector( [ 1, 2, 3 ] );

		assert.isFalse( a.equals( b ) );
		assert.isFalse( a.equals( c ) );

		b.elements = [ 1, 2, 3, 4 ];

		assert.isTrue( a.equals( b ) );

	} );

	it( "multiplyScalar", function () {

		let a = new Vector4( 1, 2, 3, 4 );

		a.multiplyScalar( 5 ).multiplyScalar( - 0.5 );

		assert.strictEqual( a.x, - 2.5 );
		assert.strictEqual( a.y, - 5 );
		assert.strictEqual( a.z, - 7.5 );
		assert.strictEqual( a.w, - 10 );
		assert.deepEqual( a.elements, [ - 2.5, - 5, - 7.5, - 10 ] );

	} );

	it( "negate", function () {

		let a = new Vector4( 1, - 2, 3, - 4 );

		a.negate();

		assert.strictEqual( a.x, - 1 );
		assert.strictEqual( a.y, 2 );
		assert.strictEqual( a.z, - 3 );
		assert.strictEqual( a.w, 4 );
		assert.deepEqual( a.elements, [ - 1, 2, - 3, 4 ] );

	} );

	it( "add", function () {

		let a = new Vector4( 1, 2, 3, 4 );
		let b = new Vector4( 9, 8, 7, 6 );

		a.add( b );

		assert.strictEqual( a.x, 10 );
		assert.strictEqual( a.y, 10 );
		assert.strictEqual( a.z, 10 );
		assert.strictEqual( a.w, 10 );
		assert.deepEqual( a.elements, [ 10, 10, 10, 10 ] );

	} );

	it( "subtract", function () {

		let a = new Vector4( 9, 8, 7, 6 );
		let b = new Vector4( 1, 2, 3, 4 );

		a.subtract( b );

		assert.strictEqual( a.x, 8 );
		assert.strictEqual( a.y, 6 );
		assert.strictEqual( a.z, 4 );
		assert.strictEqual( a.w, 2 );
		assert.deepEqual( a.elements, [ 8, 6, 4, 2 ] );

	} );

	it( "dot", function () {

		let a = new Vector4( 1, 2, 3, 4 );
		let b = new Vector4( 5, 6, 7, 8 );

		assert.strictEqual( a.dot( b ), 70 );

	} );

} );
