import { LinearEquation2 } from '../../../src/equations/LinearEquation2.js';

describe( "LinearEquation2", function () {

	it( "Instancing", function () {

		let a = new LinearEquation2( 1, 2, 3 );

		assert.strictEqual( a.a, 1 );
		assert.strictEqual( a.b, 2 );
		assert.strictEqual( a.c, 3 );
		assert.deepEqual( a.coefficients, [ 1, 2 ] );
		assert.strictEqual( a.constant, 3 );
		assert.strictEqual( a.numberOfVariables, 2 );

	} );

	it( "clone", function () {

		let a = new LinearEquation2( 1, 2, 3 );
		let clone = a.clone();

		assert.strictEqual( clone.a, a.a );
		assert.strictEqual( clone.b, a.b );
		assert.strictEqual( clone.c, a.c );
		assert.deepEqual( clone.coefficients, a.coefficients );
		assert.strictEqual( clone.constant, a.constant );
		assert.strictEqual( clone.numberOfVariables, a.numberOfVariables );

	} );

	it( "multiplyScalar", function () {

		let a = new LinearEquation2( 1, 2, 3 );

		a.multiplyScalar( 5 ).multiplyScalar( - 0.5 );

		assert.strictEqual( a.a, - 2.5 );
		assert.strictEqual( a.b, - 5 );
		assert.strictEqual( a.c, - 7.5 );
		assert.deepEqual( a.coefficients, [ - 2.5, - 5 ] );
		assert.strictEqual( a.constant, - 7.5 );

	} );

	it( "negate", function () {

		let a = new LinearEquation2( 1, 2, 3 );

		a.negate();

		assert.strictEqual( a.a, - 1 );
		assert.strictEqual( a.b, - 2 );
		assert.strictEqual( a.c, - 3 );
		assert.deepEqual( a.coefficients, [ - 1, - 2 ] );
		assert.strictEqual( a.constant, - 3 );

	} );

	it( "add", function () {

		let a = new LinearEquation2( 1, 2, 3 );
		let b = new LinearEquation2( 9, 8, 7 );

		a.add( b );

		assert.strictEqual( a.a, 10 );
		assert.strictEqual( a.b, 10 );
		assert.strictEqual( a.c, 10 );
		assert.deepEqual( a.coefficients, [ 10, 10 ] );
		assert.strictEqual( a.constant, 10 );

	} );

	it( "subtract", function () {

		let a = new LinearEquation2( 9, 8, 7 );
		let b = new LinearEquation2( 1, 2, 3 );

		a.subtract( b );

		assert.strictEqual( a.a, 8 );
		assert.strictEqual( a.b, 6 );
		assert.strictEqual( a.c, 4 );
		assert.deepEqual( a.coefficients, [ 8, 6 ] );
		assert.strictEqual( a.constant, 4 );

	} );

} );
