/**
 * @module MatrixTranspose
 * @description
 *
 * Contains the {@link module:MatrixTranspose~MatrixTranspose} class, which
 * storage-efficiently encodes transpositions.
 *
 * @author Nguyen Hoang Duong / <novakcgx@protonmail.com>
 */

/**
 * Encodes accessors for the transposition of a matrix and avoids the need of
 * actually computing the transpose's elements.
 *
 * The main purpose of this class is to make dealing with transpositions
 * syntactically clearer and to avoid using additional storage.
 */
class MatrixTranspose {

	/**
	 * Constructs a new `MatrixTranspose` instance and assigns a matrix to it.
	 * The instance will then represent the transpose of the assigned matrix
	 * (also referred to as the _original matrix_).
	 *
	 * @param {module:Matrix~Matrix} matrix The matrix to assign.
	 */
	constructor( matrix ) {

		/**
		 * @member {module:Matrix~Matrix}
		 * @description The original matrix assigned to this transpose.
		 */
		this._ = matrix;

	}

	/**
	 * Returns the `size` property of the transpose of the original matrix. This
	 * is computed dynamically.
	 *
	 * @returns {object} An object of the form `{ rows, columns }`
	 */
	get size() {

		let _size = this._.size;

		return {
			rows: _size.columns,
			columns: _size.rows
		};

	}

	/**
	 * Returns the rows of this transpose in an array, which are the columns of
	 * the original matrix.
	 *
	 * @returns {Array[]} The rows in this transpose
	 */
	get rows() {

		return this._.columns;

	}

	/**
	 * Returns the columns of this transpose in an array, which are the rows of
	 * the original matrix.
	 *
	 * @returns {Array[]} The columns in this transpose
	 */
	get columns() {

		return this._.rows;

	}

	/**
	 * Returns the main diagonal of this transpose, which is the same as the main
	 * diagonal of the original matrix.
	 *
	 * @returns {number[]} The entries in the main diagonal of this transpose
	 */
	get mainDiagonal() {

		return this._.mainDiagonal;

	}

	/**
	 * Computes the entries of the transpose of the original matrix, stores them
	 * in an array, and stores the array as the `elements` property of this
	 * instance.
	 *
	 * The indices of the transposed entries in the new row-major-ordered array
	 * are computed using Cate & Twigg's permutation formula, devised in 1977.
	 *
	 * **Note**: The `elements` property, after being created for this particular
	 * instance, won't be dynamic (e.g. it won't be in sync with the entries of
	 * the original matrix). After modifying the entries of the original matrix,
	 * call this method again should you need to compute the updated entries of
	 * the transpose.
	 *
	 * @see {@link https://en.wikipedia.org/wiki/In-place_matrix_transposition#Properties_of_the_permutation Wikipedia, _In-place matrix transposition_, section _Properties of the permutation_}
	 *
	 * @returns {number[]} The entries of the transpose (row-major ordered)
	 */
	computeElements() {

		let _ = this._.elements;

		// Original matrix's size, not the transpose's
		let _size = this._.size;
		let _nRows = _size.rows, _nCols = _size.columns;
		let _n = _nRows * _nCols, __n = _n - 1;

		let elements = new Array( _n );

		// Neglect using the Cate & Twigg's permutation for the first and last
		// entries since their indices won't be changed anyways.
		elements[ 0 ] = _[ 0 ];
		elements[ __n ] = _[ __n ];

		for ( let index = 1; index < __n; index ++ )
			elements[ ( index * _nRows ) % __n ] = _[ index ]; // Cate & Twigg

		this.elements = elements;

		return elements;

	}

	/**
	 * Returns the entry in the specified row and column in the transpose of the
	 * original matrix.
	 *
	 * @param {number} i The row that contains the entry (1-indexed position).
	 * @param {number} j The column that contains the entry (1-indexed position).
	 * @returns {number} The entry
	 */
	entry( i, j ) {

		return this._.entry( j, i );

	}

	/**
	 * Returns a row in the transpose of the original matrix.
	 *
	 * @param {number} r Row number (1-indexed).
	 * @returns {number[]} The row's entries
	 */
	row( r ) {

		return this._.column( r );

	}

	/**
	 * Returns a column in the transpose of the original matrix.
	 *
	 * @param {number} c Column number (1-indexed).
	 * @returns {number[]} The column's entries
	 */
	column( c ) {

		return this._.row( c );

	}

	/**
	 * Executes a function for each entry in the transpose of the original matrix.
	 * The entries are iterated in row-major order.
	 *
	 * This method does not compute the transposed array of entries. Instead, it
	 * uses Cate & Twigg's inverse permutation formula (devised in 1977) to locate
	 * the transposed entry itself in the original array given the entry's index
	 * within the transposed array.
	 *
	 * @see {@link https://en.wikipedia.org/wiki/In-place_matrix_transposition#Properties_of_the_permutation Wikipedia, _In-place matrix transposition_, section _Properties of the permutation_}
	 *
	 * @param {module:MatrixTranspose~MatrixTranspose~forEach} callback The
	 * function to execute per iteration.
	 * @param {object} thisArg The argument to use as `this` in the function.
	 */
	forEach( callback, thisArg ) {

		let transpose = this;
		let matrix = transpose._;
		let _ = matrix.elements;
		let _size = matrix.size;
		let _nRows = _size.rows,
		    _nCols = _size.columns;
		let _n = _nRows * _nCols,
		    __n = _n - 1;
		let tSizeCols = this.size.columns;
		let boundCallback = callback.bind( thisArg );

		// We run the callback for the first and last element of the matrix to avoid
		// the Cate and Twigg's formula's condition in the for loop, saving some
		// computational power.
		boundCallback( _[ 0 ], 1, 1, 0, transpose, matrix );

		let i = 1, j = 2;
		let iT = 1, jT = 2;

		for ( let index = 1; index < __n; index ++ ) {

			// Cate & Twigg's inverse permutation, 1977
			let entry = _[ ( index * _nCols ) % __n ];
			boundCallback( entry, iT, jT, index, transpose, matrix );
			j ++; jT ++;

			if ( j > _nCols ) ( j = 1, i ++ );
			if ( jT > tSizeCols ) ( jT = 1, iT ++ );

		}

		boundCallback( _[ __n ], _nCols, _nRows, __n, transpose, matrix );

	}

	/**
	 * @callback module:MatrixTranspose~MatrixTranspose~forEach
	 * @param {number} entry The current entry of the transpose being processed.
	 * @param {number} i The entry's row number in the transpose (1-indexed).
	 * @param {number} j The entry's column number in the transpose (1-indexed).
	 * @param {number} index The 0-based index of the entry in the transpose's
	 * array of row-major-ordered entries.
	 * @param {MatrixTranspose} transpose The instance that this method was called
	 * upon.
	 * @param {module:Matrix~Matrix} matrix The original matrix.
	 */

	/**
	 * Similar to the {@link #MatrixTranspose+forEach `forEach`} method above.
	 * However, this method iterates through the `elements` property of the
	 * instance. This, of course, assumes that you've called
	 * {@link #MatrixTranspose+computeElements `computeElements`} on this
	 * instance. Saves computational power.
	 *
	 * @param {module:MatrixTranspose~MatrixTranspose~forEach} callback The
	 * function to execute per iteration.
	 * @param {object} thisArg The argument to use as `this` in the function.
	 */
	forEachComputed( callback, thisArg ) {

		let transpose = this;
		let matrix = this._;
		let tElements = this.elements;
		let tSize = tElements.length;
		let tSizeCols = this.size.columns;
		let i = 1, j = 1;
		let boundCallback = callback.bind( thisArg );

		for ( let index = 0; index < tSize; index ++ ) {

			let entry = tElements[ index ];
			boundCallback( entry, i, j, index, transpose, matrix );
			j ++;

			if ( j > tSizeCols ) ( j = 1, i ++ );

		}

	}

	/**
	 * Executes a function for each row in the transpose.
	 *
	 * @param {module:Matrix~Matrix~forEachRow} callback The function to execute
	 * per iteration.
	 * @param {object} thisArg The argument to use as `this` in the function.
	 */
	forEachRow( callback, thisArg ) {

		this._.forEachColumn( callback, thisArg );

	}

	/**
	 * Executes a function for each column in the transpose.
	 *
	 * @param {module:Matrix~Matrix~forEachColumn} callback The function to execute
	 * per iteration.
	 * @param {object} thisArg The argument to use as `this` in the function.
	 */
	forEachColumn( callback, thisArg ) {

		this._.forEachRow( callback, thisArg );

	}

}

export { MatrixTranspose };
