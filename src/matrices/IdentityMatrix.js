import { sameSize, equal } from './MatrixUtils';

/**
 * @author Nguyen Hoang Duong / <you_create@protonmail.com>
 */

/**
 * @readonly
 * Encodes read-only identity matrices.
 *
 * This class is basically the same as the {@link Matrix `Matrix`} class in the
 * way properties are encoded. Many methods are absent in this class compared to
 * `Matrix`. Some methods of `Matrix` are presented here but are implemented
 * differently. The `elements` property of an `IdentityMatrix` instance only
 * serves for compatibility with other classes; `IdentityMatrix` class methods
 * don't rely on it.
 *
 * To avoid taking up storage space, the entries in this matrix are stored
 * dynamically in a getter. Be sure to cache the getter's return value if you need
 * the entries as an array.
 */
class IdentityMatrix {

	/**
	 * Constructs a new `IdentityMatrix` instance, which encodes an identity
	 * matrix.
	 *
	 * @param {number} size Number of rows (or columns) in the new identity matrix
	 */
	constructor( size ) {

		this.size = { rows: size, columns: size };

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

		let size = this.size.rows;
		let _n = size * size;
		let elements = new Array( _n ).fill( 0 );

		for ( let index = 0, _size = size + 1; index < _n; index += _size )
			elements[ index ] = 1;

		return elements;

	}

	/**
	 * Returns the rows of this identity matrix in an array.
	 *
	 * @return {Array[]} The rows in this matrix
	 */
	get rows() {

		let rows = [];
		let size = this.size.rows;

		for ( let i = 0; i < size; i ++ ) {

			let row = new Array( size ).fill( 0 ); row[ i ] = 1;
			rows.push( row );

		}

		return rows;

	}

	/**
	 * Returns the columns of this identity matrix in an array.
	 *
	 * @return {Array[]} The columns in this matrix
	 */
	get columns() {

		return this.rows;

	}

	/**
	 * Returns the rank of this matrix.
	 *
	 * @return {number} The rank of this matrix
	 */
	get rank() {

		return this.size.rows;

	}

	/**
	 * Returns the negative of this identity matrix.
	 *
	 * @return {Matrix} The negative of this matrix
	 */
	get negative() {

		return this.toMatrix().negate();

	}

	/**
	 * Returns the transpose of this identity matrix (which equals to itself
 	 * anyways) as an instance of `Matrix`.
	 *
	 * @return {IdentityMatrix} The transpose of this matrix
	 */
	get transpose() {

		return this.toMatrix();

	}

	/* COMMON METHODS */

	/**
	 * Creates and returns a clone of this identity matrix instance.
	 *
	 * @return {IdentityMatrix} A clone of this instance
	 */
	clone() {

		return new this.constructor( this.size.rows );

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
	entry( r, c ) {

		return ( r === c ) ? 1 : 0;

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
	row( r ) {

		let size = this.size.rows;
		let row = new Array( size ).fill( 0 );
		row[ r - 1 ] = 1;

		return row;

	}

	/**
	 * Returns a column in this matrix as a JavaScript array.
	 *
	 * @param {number} c Column number (1-indexed)
	 * @return {number[]} The column's entries
	 */
	column( c ) {

		return this.row( c );

	}

	/**
	 * Returns the main diagonal of this matrix. Since this is an identity matrix,
	 * the main diagonal consists of only 1s.
	 *
	 * @return {number[]} The entries in the main diagonal of this matrix
	 */
	mainDiagonal() {

		return new Array( this.size.rows ).fill( 1 );

	}

	/**
	 * Returns the leading coefficient of a row, which is always 1 since this is
	 * an identity matrix.
	 *
	 * @param {number} r Row number (1-indexed) (this will be disregarded anyways)
	 * @return {number} The leading coefficient of the row
	 */
	leadingCoefficient( r ) { // eslint-disable-line no-unused-vars

		return 1;

	}

	/* ITERATORS */

	/**
	 * Executes a function for each entry in this matrix.
	 *
	 * @param {IdentityMatrix~forEach} callback The function to execute per iteration
	 * @param {object} thisArg The argument to use as `this` in the function
	 */
	forEach( callback, thisArg ) {

		let matrix = this;
		let _size = this.size;
		let _nCols = _size.columns;
		let _n = _size.rows * _nCols;
		let r = 1, c = 1;

		for ( let index = 0; index < _n; index ++ ) {

			let entry = ( r === c ) ? 1 : 0;
			callback.bind( thisArg )( entry, r, c, index, matrix );
			c ++;

			if ( c > _nCols ) ( c = 1, r ++ );

		}

	}

	/**
	 * @callback IdentityMatrix~forEach
	 * @param {number} entry The current entry being processed
	 * @param {number} r The entry's row number (1-indexed)
	 * @param {number} c The entry's column number (1-indexed)
	 * @param {number} index The index of the entry in `this.elements` (0-indexed)
	 * @param {IdentityMatrix} matrix The instance that this method was called upon
	 */

	/**
	 * Executes a function for each row in this matrix.
	 *
	 * @param {IdentityMatrix~forEachRow} callback The function to execute per iteration
	 * @param {object} thisArg The argument to use as `this` in the function
	 */
	forEachRow( callback, thisArg ) {

		let matrix = this;
		let _nRows = this.size.rows;

		for ( let i = 0; i < _nRows; i ++ ) {

			let r = i + 1;
			let row = new Array( _nRows ).fill( 0 );
			row[ i ] = 1;

			callback.bind( thisArg )( row, r, matrix );

		}

	}

	/**
	 * @callback IdentityMatrix~forEachRow
	 * @param {number[]} row The current row being processed (with its entries)
	 * @param {number} r Current row number (1-indexed)
	 * @param {IdentityMatrix} matrix The instance that this method was called upon
	 */

	/**
	 * Executes a function for each column in this matrix.
	 *
	 * @param {IdentityMatrix~forEachColumn} callback The function to execute per iteration
	 * @param {object} thisArg The argument to use as `this` in the function
	 */
	forEachColumn( callback, thisArg ) {

		this.forEachRow( callback, thisArg ); // yeah...

	}

	/**
	 * @callback IdentityMatrix~forEachColumn
	 * @param {number[]} column The current column being processed (with its entries)
	 * @param {number} c Current column number (1-indexed)
	 * @param {IdentityMatrix} matrix The instance that this method was called upon
	 */

}

export { IdentityMatrix };
