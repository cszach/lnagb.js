import { Matrix } from './Matrix.js';

/**
 * @module SquareMatrix
 * @author Nguyen Hoang Duong / <you_create@protonmail.com>
 * @description
 *
 * Contains the {@link module:SquareMatrix~SquareMatrix} class, which is similar
 * to the {@link module:Matrix~Matrix} class but only encodes square matrices.
 *
 */

/**
 * Encodes square matrices.
 *
 * @extends module:Matrix~Matrix
 */
class SquareMatrix extends Matrix {

	/**
	 * Constructs a `SquareMatrix` instance.
	 *
	 * `entries` is optional. If not given, the constructor will create a zero
	 * square matrix.
	 *
	 * @param {number} size The number of rows (or columns) for the new matrix.
	 * @param {number[]} entries The entries in row-major order for the new matrix.
	 */
	constructor( size, entries ) {

		super( size, size, entries );

	}

	/**
	 * Makes this square matrix an identity matrix.
	 *
	 * @return {SquareMatrix} This matrix
	 */
	identity() {

		let _size = this.size.rows;
		let __size = _size + 1;

		this.elements = new Array( _size * _size ).fill( 0 );
		for ( let i = 0; i < _size; i ++ ) this.elements[ __size * i ] = 1;

		return this;

	}

}

export { SquareMatrix };
