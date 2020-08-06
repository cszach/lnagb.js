/**
 * @author Nguyen Hoang Duong / <you_create@protonmail.com>
 */

/**
 * Encodes accessors for the transposition of a matrix without actually
 * performing any transposition.
 *
 * The main purpose of this class is to make dealing with transpositions
 * syntactically clearer and to avoid using additional storage.
 */
class MatrixTranspose {

	/**
	 * Assigns a matrix to a new instance.
	 *
	 * @param {Matrix} matrix The matrix to assign
	 */
	constructor( matrix ) {

		this._ = matrix;

	}

	/**
	 * Returns the `size` property of the transpose of the assigned matrix.
	 *
	 * @return {object} An object of the form { rows, columns }
	 */
	get size() {

		let _size = this._.size;

		return {
			rows: _size.columns,
			column: _size.rows
		};

	}

	/**
	 * Returns the entries of the transpose of the assigned matrix as an array.
	 * The array is dynamically computed so it might be preferred depending on the
	 * usage situation to cache the result.
	 *
	 * @return {number[]} Entries in the transpose of the assigned matrix
	 */
	get elements() {

		let _ = this._.elements;

		// Matrix's size, not transpose's
		let _size = this._.size;
		let _nRows = _size.rows, _nCols = _size.columns;
		let _n = _nRows * _nCols, __n = _n - 1;

		let elements = new Array( _n );
		elements[ 0 ] = _[ 0 ];
		elements[ __n ] = _[ __n ];

		for ( let index = 1; index < __n; index ++ )
			elements[ ( index * _nRows ) % __n ] = _[ index ]; // Cate & Twigg

		return elements;

	}

	/**
	 * Returns the entry in the specified row and column in the transpose of the
	 * assigned matrix.
	 *
	 * @param {number} i The row that contains the entry (1-based index)
	 * @param {number} j The column that contains the entry (1-based index)
	 * @return {number} The entry
	 */
	entry( i, j ) {

		return this._.entry( j, i );

	}

	/**
	 * Returns a row in the transpose of the assigned matrix.
	 *
	 * @param {number} i Row number (1-indexed)
	 * @return {number[]} The row's entries
	 */
	row( i ) {

		return this._.column( i );

	}

	/**
	 * Returns a column in the transpose of the assigned matrix.
	 *
	 * @param {number} j Column number (1-indexed)
	 * @return {number[]} The column's entries
	 */
	column( j ) {

		return this._.row( j );

	}

	/**
	 * Executes a function for each entry in the transpose of the assigned matrix.
	 * The entries are iterated in row-major order.
	 *
	 * @param {Matrix~forEach} callback The function to execute per iteration,
	 * see {@link ./Matrix#Matrix..forEach Matrix~forEach}
	 * @param {object} thisArg The argument to use as `this` in the function
	 */
	forEach( callback, thisArg ) {

		let matrix = this._;
		let _ = matrix.elements;
		let _size = matrix.size;
		let _nRows = _size.rows, _nCols = _size.columns;
		let _n = _nRows * _nCols, __n = _n - 1;
		let i = 1, j = 1;

		for ( let index = 0; index < _n; index ++ ) {

			// Cate & Twigg's inverse permutation, 1977
			let c = ( index !== __n ) ? ( index * _nCols ) % __n : __n;
			let entry = _[ c ];
			callback.bind( thisArg )( entry, i, j, index, matrix );
			j ++;

			if ( j > _nRows ) ( j = 1, i ++ );

		}

	}

	/**
	 * Executes a function for each row in the transpose of the assigned matrix.
	 *
	 * @param {Matrix~forEachRow} callback The function to execute per iteration,
	 * see {@link ./Matrix#Matrix..forEachRow Matrix~forEachRow}
	 * @param {object} thisArg The argument to use as `this` in the function
	 */
	forEachRow( callback, thisArg ) {

		return this._.forEachColumn( callback, thisArg );

	}

	/**
	 * Executes a function for each column in the transpose of the assigned matrix.
	 *
	 * @param {Matrix~forEachColumn} callback The function to execute per iteration,
	 * see {@link ./Matrix#Matrix..forEachColumn Matrix~forEachColumn}
	 * @param {object} thisArg The argument to use as `this` in the function
	 */
	forEachColumn( callback, thisArg ) {

		return this._.forEachRow( callback, thisArg );

	}

}

export { MatrixTranspose };
