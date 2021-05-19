import { LinearEquation3 } from '../../../src/algebra/LinearEquation3.js';

describe( "LinearEquation3", function () {

	it( "Instancing", function () {

		let a = new LinearEquation3( 1, 2, 3, 4 );

		assert.strictEqual( a.a, 1 );
		assert.strictEqual( a.b, 2 );
		assert.strictEqual( a.c, 3 );
		assert.strictEqual( a.d, 4 );
		assert.deepEqual( a.coefficients, [ 1, 2, 3 ] );
		assert.strictEqual( a.constant, 4 );
		assert.strictEqual( a.numberOfVariables, 3 );

	} );

	it( "clone", function () {

		let a = new LinearEquation3( 1, 2, 3, 4 );
		let clone = a.clone();

		assert.strictEqual( clone.a, a.a );
		assert.strictEqual( clone.b, a.b );
		assert.strictEqual( clone.c, a.c );
		assert.strictEqual( clone.d, a.d );
		assert.deepEqual( clone.coefficients, a.coefficients );
		assert.strictEqual( clone.constant, a.constant );
		assert.strictEqual( clone.numberOfVariables, a.numberOfVariables );

	} );

	it( "multiplyScalar", function () {

		let a = new LinearEquation3( 1, 2, 3, 4 );

		a.multiplyScalar( 5 ).multiplyScalar( - 0.5 );

		assert.strictEqual( a.a, - 2.5 );
		assert.strictEqual( a.b, - 5 );
		assert.strictEqual( a.c, - 7.5 );
		assert.strictEqual( a.d, - 10 );
		assert.deepEqual( a.coefficients, [ - 2.5, - 5, - 7.5 ] );
		assert.strictEqual( a.constant, - 10 );

	} );

	it( "negate", function () {

		let a = new LinearEquation3( 1, 2, 3, 4 );

		a.negate();

		assert.strictEqual( a.a, - 1 );
		assert.strictEqual( a.b, - 2 );
		assert.strictEqual( a.c, - 3 );
		assert.strictEqual( a.d, - 4 );
		assert.deepEqual( a.coefficients, [ - 1, - 2, - 3 ] );
		assert.strictEqual( a.constant, - 4 );

	} );

	it( "add", function () {

		let a = new LinearEquation3( 1, 2, 3, 4 );
		let b = new LinearEquation3( 9, 8, 7, 6 );

		a.add( b );

		assert.strictEqual( a.a, 10 );
		assert.strictEqual( a.b, 10 );
		assert.strictEqual( a.c, 10 );
		assert.strictEqual( a.d, 10 );
		assert.deepEqual( a.coefficients, [ 10, 10, 10 ] );
		assert.strictEqual( a.constant, 10 );

	} );

	it( "subtract", function () {

		let a = new LinearEquation3( 9, 8, 7, 6 );
		let b = new LinearEquation3( 1, 2, 3, 4 );

		a.subtract( b );

		assert.strictEqual( a.a, 8 );
		assert.strictEqual( a.b, 6 );
		assert.strictEqual( a.c, 4 );
		assert.strictEqual( a.d, 2 );
		assert.deepEqual( a.coefficients, [ 8, 6, 4 ] );
		assert.strictEqual( a.constant, 2 );

	} );

} );
