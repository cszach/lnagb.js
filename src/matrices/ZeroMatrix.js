import { sameSize, equal } from './MatrixUtils';

/**
 * @author Nguyen Hoang Duong / <you_create@protonmail.com>
 */

/**
 * @readonly
 * Encodes read-only zero matrices.
 *
 * The properties only serve for compatibility with other classes. Methods
 * implemented in this class don't rely on the properties.
 *
 * @see {@link IdentityMatrix `IdentityMatrix`} (for a similar read-only matrix
 * class)
 */
class ZeroMatrix {

	/**
	 * Constructs a new `ZeroMatrix` instance, which encodes a zero matrix.
	 *
	 * @param {number} nRows Number of rows in the new matrix
	 * @param {number} nColumns Number of columns in the matrix
	 */
	constructor( nRows, nColumns ) {

		this.size = { rows: nRows, columns: nColumns };
		this.rank = 0; // The rank of this matrix, always 0

	}

	/* GETTERS */

	/**
	 * Returns the number of entries in this matrix.
	 *
	 * @return {number} Number of entries in this matrix
	 */
	get numberOfEntries() {

		let _size = this.size;

		return _size.rows * _size.columns;

	}

	/**
	 * Returns the entries in this matrix.
	 *
	 * @return {number[]} The entries in this matrix
	 */
	get elements() {

		return new Array( this.numberOfEntries ).fill( 0 );

	}

	/**
	 * Returns the rows of this matrix in an array.
	 *
	 * @return {Array[]} The rows in this matrix
	 */
	get rows() {

		let _size = this.size;

		return new Array( _size.rows ).fill(
			new Array( _size.columns ).fill( 0 )
		);

	}

	/**
	 * Returns the columns of this matrix in an array.
	 *
	 * @return {Array[]} The columns in this matrix
	 */
	get columns() {

		let _size = this.size;

		return new Array( _size.columns ).fill(
			new Array( _size.rows ).fill( 0 )
		);

	}

	/**
	 * Returns the negative of this zero matrix.
	 *
	 * @return {ZeroMatrix} This matrix
	 */
	get negative() {

		return this;

	}

	/**
	 * Returns the transpose of this matrix.
	 *
	 * @return {ZeroMatrix} This matrix
	 */
	get transpose() {

		let _size = this.size;

		return new this.constructor( _size.columns, _size.rows );

	}

	/* COMMON METHODS */

	/**
	 * Creates and returns a clone of this zero matrix instance.
	 *
	 * @return {ZeroMatrix} A clone of this instance
	 */
	clone() {

		let _size = this.size;

		return new this.constructor( _size.rows, _size.columns );

	}

	/* CHECKERS */

	/**
	 * Checks if this matrix has the same size as another matrix.
	 *
	 * @param {Matrix} matrix The matrix to check the size of this matrix against
	 * @return {boolean} `true` if the two matrices have the same size, `false`
	 * otherwise
	 */
	sameSize( matrix ) {

		return sameSize( this, matrix );

	}

	/**
	 * Checks if this matrix and another matrix are equal.
	 *
	 * @param {Matrix} matrix The matrix to compare this matrix to
	 * @return {boolean} `true` if the two matrices are the same, `false`
	 * otherwise
	 */
	equals( matrix ) {

		return equal( this, matrix );

	}

	/* ACCESSORS */

	/**
	 * Returns the entry in the specified row and column in this matrix.
	 *
	 * @param {number} r The row that contains the entry (1-indexed)
	 * @param {number} c The column that contains the entry (1-indexed)
	 * @return {number} The entry
	 */
	entry( r, c ) { // eslint-disable-line no-unused-vars

		return 0;

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

	/**
	 * Returns a row in this matrix as a JavaScript array.
	 *
	 * @param {number} r Row number (1-indexed)
	 * @return {number[]} The row's entries
	 */
	row( r ) { // eslint-disable-line no-unused-vars

		return new Array( this.size.columns ).fill( 0 );

	}

	/**
	 * Returns a column in this matrix as a JavaScript array.
	 *
	 * @param {number} c Column number (1-indexed)
	 * @return {number[]} The column's entries
	 */
	column( c ) { // eslint-disable-line no-unused-vars

		return new Array( this.size.rows ).fill( 0 );

	}

	/**
	 * Returns the main diagonal of this matrix.
	 *
	 * @return {number[]} The entries in the main diagonal of this matrix
	 */
	mainDiagonal() {

		let _size = this.size;
		let _nRows = _size.rows;
		let _nCols = _size.columns;

		return new Array( ( _nRows > _nCols ) ? _nCols : _nRows ).fill( 0 );

	}

	/**
	 * Returns the leading coefficient of a row, which is always undefined since
	 * there is no non-zero entry in this (zero) matrix.
	 *
	 * @param {number} r Row number (1-indexed) (this will be disregarded anyways)
	 * @return {number} The leading coefficient of the row
	 */
	leadingCoefficient( r ) { // eslint-disable-line no-unused-vars

		return undefined;

	}

	/* ITERATORS */

	/**
	 * Executes a function for each entry in this matrix.
	 *
	 * @param {ZeroMatrix~forEach} callback The function to execute per iteration
	 * @param {object} thisArg The argument to use as `this` in the function
	 */
	forEach( callback, thisArg ) {

		let matrix = this;
		let _size = this.size;
		let _nCols = _size.columns;
		let _n = _size.rows * _nCols;
		let r = 1, c = 1;
		let entry = 0; // Since every entry is 0

		for ( let index = 0; index < _n; index ++ ) {

			callback.bind( thisArg )( entry, r, c, index, matrix );
			c ++;

			if ( c > _nCols ) ( c = 1, r ++ );

		}

	}

	/**
	 * @callback ZeroMatrix~forEach
	 * @param {number} entry The current entry being processed
	 * @param {number} r The entry's row number (1-indexed)
	 * @param {number} c The entry's column number (1-indexed)
	 * @param {number} index The index of the entry in `this.elements` (0-indexed)
	 * @param {ZeroMatrix} matrix The instance that this method was called upon
	 */

	/**
	 * Executes a function for each row in this matrix.
	 *
	 * @param {ZeroMatrix~forEachRow} callback The function to execute per iteration
	 * @param {object} thisArg The argument to use as `this` in the function
	 */
	forEachRow( callback, thisArg ) {

		let matrix = this;
		let _size = this.size;
		let _nRows = _size.rows, __nRows = _nRows + 1;
		let _nCols = _size.columns;

		for ( let r = 1; r < __nRows; r ++ ) {

			let row = new Array( _nCols ).fill( 0 );
			callback.bind( thisArg )( row, r, matrix );

		}

	}

	/**
	 * @callback ZeroMatrix~forEachRow
	 * @param {number[]} row The current row being processed (with its entries)
	 * @param {number} r Current row number (1-indexed)
	 * @param {ZeroMatrix} matrix The instance that this method was called upon
	 */

	/**
	 * Executes a function for each column in this matrix.
	 *
	 * @param {ZeroMatrix~forEachColumn} callback The function to execute per iteration
	 * @param {object} thisArg The argument to use as `this` in the function
	 */
	forEachColumn( callback, thisArg ) {

		let matrix = this;
		let _size = this.size;
		let _nRows = _size.rows;
		let _nCols = _size.columns, __nCols = _nCols + 1;

		for ( let c = 1; c < __nCols; c ++ ) {

			let column = new Array( _nRows ).fill( 0 );
			callback.bind( thisArg )( column, c, matrix );

		}

	}

	/**
	 * @callback ZeroMatrix~forEachColumn
	 * @param {number[]} column The current column being processed (with its entries)
	 * @param {number} c Current column number (1-indexed)
	 * @param {ZeroMatrix} matrix The instance that this method was called upon
	 */

}

export { ZeroMatrix };
