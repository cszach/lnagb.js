import { LinearEquation } from '../../src/algebra/LinearEquation.js';

describe( "LinearEquation", function () {

	it( "Instancing", function () {

		let a = new LinearEquation( [ 1, 2, 3 ], 4 );

		assert.deepEqual( a.coefficients, [ 1, 2, 3 ] );
		assert.strictEqual( a.constant, 4 );
		assert.strictEqual( a.numberOfVariables, 3 );

	} );

	it( "clone", function () {

		let a = new LinearEquation( [ 1, 2, 3 ], 4 );
		let clone = a.clone();

		assert.deepEqual( clone.coefficients, a.coefficients );
		assert.strictEqual( clone.constant, a.constant );
		assert.strictEqual( clone.numberOfVariables, a.numberOfVariables );

	} );

	it( "add", function () {

		let a = new LinearEquation( [ 1, 2, 3 ], 4 );
		let b = new LinearEquation( [ 9, 8, 7 ], 6 );
		let c = new LinearEquation( [ 1, 2 ], 3 );

		a.add( b ).add( c );

		assert.deepEqual( a.coefficients, [ 10, 10, 10 ] );
		assert.strictEqual( a.constant, 10 );

	} );

	it( "subtract", function () {

		let a = new LinearEquation( [ 9, 8, 7 ], 6 );
		let b = new LinearEquation( [ 1, 2, 3 ], 4 );
		let c = new LinearEquation( [ 1, 2 ], 3 );

		a.subtract( b ).subtract( c );

		assert.deepEqual( a.coefficients, [ 8, 6, 4 ] );
		assert.strictEqual( a.constant, 2 );

	} );

	it( "multiplyScalar", function () {

		let a = new LinearEquation( [ 1, 2, 3 ], 4 );

		a.multiplyScalar( 5 ).multiplyScalar( - 0.5 );

		assert.deepEqual( a.coefficients, [ - 2.5, - 5, - 7.5 ] );
		assert.strictEqual( a.constant, - 10 );

	} );

	it( "negate", function () {

		let a = new LinearEquation( [ 1, 2, 3 ], 4 );

		a.negate();

		assert.deepEqual( a.coefficients, [ - 1, - 2, - 3 ] );
		assert.strictEqual( a.constant, - 4 );

	} );

} );
