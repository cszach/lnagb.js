import { Matrix } from './Matrix.js';

/**
 * @author Nguyen Hoang Duong / you_create@protonmail.com / GitHub: you-create
 */

/**
 * Encodes square matrices.
 *
 * Instaces of this class only encode square matrices, and the default state
 * is identity instead of zero like `Matrix`'s instances.
 */
class SquareMatrix extends Matrix {

	/**
	 * Constructs a `SquareMatrix` instance.
	 *
	 * @param {string} name The denotation for the new matrix
	 */
	constructor( size, name = null ) {

		super( size, size, name );

	}

	/**
	 * Checks if *o* is a square matrix and returns `true` if it is.
	 *
	 * @param {object} o The object to check
	 * @return {boolean} `true` if *o* encodes a square matrix, `false` otherwise
	 */
	static isIt( o ) {

		return Matrix.isIt( o ) && o.size.row === o.size.column;

	}

	/**
	 * Same as the `copy` method in the base class, the only difference is that
	 * only square matrices are allowed to be the first argument.
	 *
	 * @param {Matrix} m A square matrix to copy from
	 * @param {boolean} copyName Set to `true` to copy the denotation of *m*
	 * @return {Matrix} This matrix
	 */
	copy( m, copyName = false ) {

		if ( ! SquareMatrix.isIt( m ) ) return this;

		this.size.rows = m.size.rows;
		this.size.columns = m.size.columns;
		this.elements = m.elements.slice();

		this.name = ( copyName ) ? m.name : this.name;

		return this;

	}

	/**
	 * Sets the dimensions for and makes this matrix an identity matrix.
	 *
	 * @param {number} dimension The number of rows/columns for this matrix
	 * @return {SquareMatrix} This matrix
	 */
	setDimensions( dimension ) {

		this.size = { rows: dimension, columns: dimension };
		this.elements = new Array( this.numberOfEntries ).fill( 0 );

		return this.identity();

	}

	/**
	 * Resets this matrix back to an identity matrix.
	 *
	 * @return {SquareMatrix} This matrix
	 */
	identity() {

		let dimension = this.size.rows;

		for ( let i = 1; i < dimension + 1; i ++ ) {

			this.elements[ i * dimension + i - dimension - 1 ] = 1;

		}

		return this;

	}

}

export { SquareMatrix };
