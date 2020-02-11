import { Matrix } from './Matrix.js';

/**
 * Class for zero matrices in Linear Algebra.
 *
 * Note that this class is very similar to the class `Matrix`, the only
 * different is that the constructor of this class requires exactly 2 arguments
 * and the new instance starts off being a zero matrix.
 */
class ZeroMatrix extends Matrix {

	constructor( row, column ) {

		super( row, column );
		this.elements = new Array( row * column ).fill( 0 );

	}

	/**
	 * Checks if the matrix *m* is a zero matrix.
	 *
	 * Note that this function assumes the argument to be an instance of
	 * `Matrix`.
	 *
	 * @param {object} m The matrix to check
	 * @return {boolean} `true` if `m` is a zero matrix, false otherwise
	 */
	static isZeroMatrix( m ) {

		return m.elements.every( ( e ) => e === 0 );

	}

}

export { ZeroMatrix };
