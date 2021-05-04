import { sameSize, equal } from './MatrixUtils.js';

/**
 * @module CommonMatrix
 * @author Nguyen Hoang Duong / <you_create@protonmail.com>
 * @description
 *
 * Contains the {@link module:CommonMatrix~CommonMatrix} class.
 *
 */

/**
 * Stores implementations of common matrix operations for reference in any
 * matrix class development.
 */
class CommonMatrix {

	/**
	 * Returns the number of entries in this matrix.
	 *
	 * @return {number} Number of entries in this matrix
	 */
	get numberOfEntries() {

		let _size = this.size;

		return _size.rows * _size.columns;

	}

	get rank() {

		let reduced = this.clone().reduce();
		let rank = 0;
		let r = 1;

		while ( reduced.leadingCoefficient( r ) ) {

			rank ++;
			r ++;

		}

		return rank;

	}

	get negative() {

		return this.clone().negate();

	}

	get transpose() {

		return this.clone().transpose();

	}

	zero() {

		this.elements.fill( 0 );
		return this;

	}

	/**
	 * Checks if this matrix has the same size as another matrix.
	 *
	 * @param {Matrix} matrix The matrix to check the size of this matrix against.
	 * @return {boolean} `true` if the two matrices have the same size, `false`
	 * otherwise
	 */
	sameSize( matrix ) {

		return sameSize( this, matrix );

	}

	/**
	 * Checks if this matrix and another matrix are equal.
	 *
	 * @param {Matrix} matrix The matrix to compare this matrix to.
	 * @return {boolean} `true` if the two matrices are the same, `false` otherwise
	 */
	equals( matrix ) {

		return equal( this, matrix );

	}

	entry( i, j ) {

		return this.elements[ this.entryIndex( i, j ) ];

	}

	entryIndex( i, j ) {

		let _nCols = this.size.columns;

		return i * _nCols + j - _nCols - 1;

	}

	/**
	 * Converts a 0-based index of an element in this matrix to its 1-indexed
	 * row number.
	 *
	 * @param {number} index The index to convert (0-based).
	 * @return {number} The index's row number (1-indexed)
	 */
	indexToRow( index ) {

		return Math.floor( index / this.size.columns ) + 1;

	}

	/**
	 * Converts a 0-based index of an element in this matrix to its 1-indexed
	 * column number.
	 *
	 * @param {number} index The index to convert (0-based).
	 * @return {number} The index's column number (1-indexed)
	 */
	indexToColumn( index ) {

		return ( index % this.size.columns ) + 1;

	}

}

export { CommonMatrix };
