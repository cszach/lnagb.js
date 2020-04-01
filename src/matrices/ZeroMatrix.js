import { Matrix } from './Matrix.js';

/**
 * @author Nguyen Hoang Duong / you_create@protonmail.com / GitHub: you-create
 */

/**
 * Class for creating matrices that start off being zero matrices.
 *
 * Note that, as said above, instances of this class start as zero matrices.
 * They can be transformed into non-zero matrices using methods inherited from
 * the base `Matrix` class.
 *
 * This class is a child class of `Matrix`. See the base [`Matrix`](./Matrix)
 * class for common properties and methods.
 */
class ZeroMatrix extends Matrix {

	/**
	 * Constructs a `ZeroMatrix` instance.
	 *
	 * The instance initially encodes a zero matrix.
	 *
	 * @param {number} row The number of rows for the new matrix
	 * @param {number} column The number of columns for the new matrix
	 */
	constructor( row, column ) {

		super( row, column, ...( new Array( row * column ).fill( 0 ) ) );

	}

	/**
	 * Checks if `o` encodes a zero matrix and returns `true` if it does.
	 *
	 * @param {object} o The object to check
	 * @return {boolean} `true` if `o` is a zero matrix, `false` otherwise
	 */
	static isZeroMatrix( o ) {

		return Matrix.isMatrix( o ) && o.elements.every( ( e ) => e === 0 );

	}

}

export { ZeroMatrix };
