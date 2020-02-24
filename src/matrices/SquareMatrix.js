import { Matrix } from './Matrix.js';

/**
 * @author Nguyen Hoang Duong / you_create@protonmail.com / GitHub: you-create
 */

/**
 * Dedicated class for square matrices in Linear Algebra.
 *
 * This class is a child class of `Matrix`. See the base [`Matrix`](./Matrix)
 * class for common properties and methods.
 */
class SquareMatrix extends Matrix {

	/**
	 * Constructs a `SquareMatrix` instance.
	 *
	 * The first parameter sets the size of the matrix. The rest of the
	 * parameters are perceived as elements of the new matrix given in
	 * **row-major** order.
	 *
	 * @param {number} size The number of rows (or columns) for the new matrix
	 */
	constructor( size ) {

		super( size, size, ...Array.from( arguments ).slice(
			1,
			1 + size * size
		) );

	}

	/**
	 * Checks if `o` is a square matrix and returns `true` if it is.
	 *
	 * @param {object} o The object to check
	 * @return {boolean} `true` if `o` encodes a square matrix, `false` otherwise
	 */
	static isSquareMatrix( o ) {

		return Matrix.isSquareMatrix( o ) && o.size.row === o.size.column;

	}

}

export { SquareMatrix };
