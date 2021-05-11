import { Vector } from '../../src/vectors/Vector.js';
import { Vector2 } from '../../src/vectors/Vector2.js';

describe( "Vector2", function () {

	it( "Instancing", function () {

		let a = new Vector2( 1, 2 );
		let b = new Vector2();

		assert.strictEqual( a.x, 1 );
		assert.strictEqual( a.y, 2 );
		assert.deepEqual( a.elements, [ 1, 2 ] );
		assert.deepEqual( a.size, { rows: 2, columns: 1 } );
		assert.strictEqual( a.numberOfEntries, 2 );

		assert.strictEqual( b.x, 0 );
		assert.strictEqual( b.y, 0 );
		assert.deepEqual( b.elements, [ 0, 0 ] );
		assert.deepEqual( b.size, { rows: 2, columns: 1 } );
		assert.strictEqual( b.numberOfEntries, 2 );

	} );

	it( "clone", function () {

		let a = new Vector2( 1, 2 );
		let clone = a.clone();

		assert.instanceOf( clone, Vector2 );
		assert.deepEqual( clone.elements, a.elements );
		assert.deepEqual( clone.size, a.size );
		assert.strictEqual( clone.numberOfEntries, a.numberOfEntries );

	} );

	it( "equals", function () {

		let a = new Vector2( 1, 2 );
		let b = new Vector( [ - 1, 2 ] );
		let c = new Vector( [ 1, 2, 3 ] );

		assert.isFalse( a.equals( b ) );
		assert.isFalse( a.equals( c ) );

		b.elements = [ 1, 2 ];

		assert.isTrue( a.equals( b ) );

	} );

	it( "multiplyScalar", function () {

		let a = new Vector2( 1, 2 );

		a.multiplyScalar( 5 ).multiplyScalar( - 0.5 );

		assert.strictEqual( a.x, - 2.5 );
		assert.strictEqual( a.y, - 5 );
		assert.deepEqual( a.elements, [ - 2.5, - 5 ] );

	} );

	it( "negate", function () {

		let a = new Vector2( 1, - 2 );

		a.negate();

		assert.strictEqual( a.x, - 1 );
		assert.strictEqual( a.y, 2 );
		assert.deepEqual( a.elements, [ - 1, 2 ] );

	} );

	it( "add", function () {

		let a = new Vector2( 1, 2 );
		let b = new Vector2( 9, 8 );

		a.add( b );

		assert.strictEqual( a.x, 10 );
		assert.strictEqual( a.y, 10 );
		assert.deepEqual( a.elements, [ 10, 10 ] );

	} );

	it( "subtract", function () {

		let a = new Vector2( 9, 8 );
		let b = new Vector2( 1, 2 );

		a.subtract( b );

		assert.strictEqual( a.x, 8 );
		assert.strictEqual( a.y, 6 );
		assert.deepEqual( a.elements, [ 8, 6 ] );

	} );

	it( "dot", function () {

		let a = new Vector2( 1, 2 );
		let b = new Vector2( 3, 4 );

		assert.strictEqual( a.dot( b ), 11 );

	} );

} );
