import { sameSize, equal } from './MatrixUtils.js';

/**
 * Stores implementations of operations that are shared across different matrix
 * classes.
 */
class BaseMatrix {

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

	sameSize( matrix ) {

		return sameSize( this, matrix );

	}

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
	 * @param {number} index The index to convert (0-based)
	 * @return {number} The index's row number (1-indexed)
	 */
	indexToRow( index ) {

		return Math.floor( index / this.size.columns ) + 1;

	}

	/**
	 * Converts a 0-based index of an element in this matrix to its 1-indexed
	 * column number.
	 *
	 * @param {number} index The index to convert (0-based)
	 * @return {number} The index's column number (1-indexed)
	 */
	indexToColumn( index ) {

		return ( index % this.size.columns ) + 1;

	}

}

export { BaseMatrix };
