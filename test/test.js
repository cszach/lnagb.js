import { Matrix } from "../src/matrices/Matrix.js";

describe( "Matrix", function () {

	it( "Add matrices", function () {

		let a = new Matrix( 2, 2, [ 1, 0, 1, 0 ] );
		let b = new Matrix( 2, 2, [ 0, 1, 0, 1 ] );

		let c = a.add( b );

		expect( c.elements ).to.deep.equal( [ 1, 1, 1, 1 ] );

		let d = new Matrix();
		let e = new Matrix();

		let f = d.add( e );

		expect( f.elements ).to.deep.equal( [ 0, 0, 0, 0, 0, 0 ] );

	} );

} );
