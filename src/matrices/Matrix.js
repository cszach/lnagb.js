/**
 * @module Matrix
 * @author Nguyen Hoang Duong / <you_create@protonmail.com>
 * @description
 *
 * Contains the {@link module:Matrix~Matrix} class, which encodes basic matrices
 * in linear algebra.
 *
 * @see {@link module:IdentityMatrix~IdentityMatrix}
 *
 */

/**
 * Low-level, speed-prioritized class that encodes matrices and their operations.
 * A matrix is encoded by storing its elements - in **row-major** order for
 * lnagb.js - and its dimensions (see instance properties
 * {@link module:Matrix~Matrix#elements} and {@link module:Matrix~Matrix#size}).
 *
 * This class should be used to work with large matrices of arbitrary dimensions.
 * For small matrices, see {@link module:Matrix1~Matrix1},
 * {@link module:Matrix2~Matrix2}, {@link module:Matrix3~Matrix3},
 * {@link module:Matrix4~Matrix4}, {@link module:Matrix2x3~Matrix2x3},
 * {@link module:Matrix3x2~Matrix3x2}.
 */
class Matrix {

	/**
	 * Constructs a new `Matrix` instance, which encodes a matrix. To create a
	 * zero matrix, leave `entries` `undefined`. To create an identity matrix,
	 * see {@link module:IdentityMatrix~IdentityMatrix}.
	 *
	 * @param {number} nRows Number of rows in the new matrix.
	 * @param {number} nColumns Number of columns in the matrix.
	 * @param {number[]} entries Entries of the matrix in row-major order.
	 */
	constructor( nRows, nColumns, entries ) {

		/**
		 * @member {object}
		 * @description Contains the dimensions of this matrix as an object in the
		 * form `{ rows, columns }`.
		 */
		this.size = {
			rows: nRows,
			columns: nColumns
		};

		/**
		 * @member {number}
		 * @description The number of entries in this matrix.
		 */
		this.numberOfEntries = nRows * nColumns;

		/**
		 * @member {number[]}
		 * @description Stores the elements of this matrix in **row-major** order.
		 */
		this.elements = entries || new Array( this.numberOfEntries ).fill( 0 );

	}

	/* GETTERS */

	/**
	 * Returns the rows of this matrix in an array.
	 *
	 * @return {Array[]} The rows in this matrix
	 */
	get rows() {

		let rows = [];
		let _ = this.elements;
		let _size = this.size, _nRows = _size.rows, _nCols = _size.columns;

		let i = 0;

		for ( let r = 0; r < _nRows; r ++, i ++ ) {

			let row = [];
			for ( let c = 0; c < _nCols; c ++, i ++ ) row.push( _[ i ] );
			rows.push( row );
			i --;

		}

		return rows;

	}

	/**
	 * Returns the columns of this matrix in an array.
	 *
	 * @return {Array[]} The columns in this matrix
	 */
	get columns() {

		let columns = [];

		let _ = this.elements;
		let _size = this.size;
		let _nRows = _size.rows, __nRows = _nRows + 1;
		let _nCols = _size.columns, __nCols = _nCols + 1;

		let p = - _nCols;

		for ( let c = 1; c < __nCols; c ++ ) {

			let column = [];
			let q = _nCols;

			for ( let r = 1; r < __nRows; r ++ ) {

				// q + p is a reduced form of r * _nCols + c - _nCols - 1 in
				// favor of speed optimization.
				column.push( _[ q + p ] );
				q += _nCols;

			}

			columns.push( column );
			p ++;

		}

		return columns;

	}

	/**
	 * Returns the main diagonal of this matrix.
	 *
	 * @return {number[]} The entries in the main diagonal of this matrix
	 */
	get mainDiagonal() {

		let _ = this.elements;
		let _size = this.size;
		let _nRows = _size.rows;
		let _nCols = _size.columns;

		let mainDiagonal = [];
		let end = ( ( _nRows < _nCols ) ? _nRows : _nCols ) + 1;

		let p = - 1;

		for ( let i = 1; i < end; i ++ ) {

			mainDiagonal.push( _[ p + i ] );
			p += _nCols;

		}

		return mainDiagonal;

	}

	/**
	 * Returns the rank of this matrix without manipulating it, by cloning the
	 * matrix and reducing the clone.
	 *
	 * @return {number} The rank of this matrix
	 */
	get rank() {

		let reduced = this.clone().reduce();
		let rank = 0;
		let r = 1;

		while ( reduced.leadingCoefficient( r ) ) {

			rank ++; r ++;

		}

		return rank;

	}

	/**
	 * Returns the negative of this matrix.
	 *
	 * @return {Matrix} The negative of this matrix
	 */
	get negative() {

		return this.clone().negate();

	}

	/**
	 * Returns the transpose of this matrix.
	 *
	 * @return {Matrix} The transpose of this matrix
	 */
	get transpose() {

		return this.clone().transpose();

	}

	/* BASIC METHODS */

	/**
	 * Creates and returns a clone of this matrix instance.
	 *
	 * @return {Matrix} A clone of this instance
	 */
	clone() {

		let _size = this.size;
		let _nRows = _size.rows;
		let _nCols = _size.columns;
		let _ = this.elements;

		let clone = new this.constructor( _nRows, _nCols );

		for ( let i = 0, _n = _nRows * _nCols; i < _n; i ++ ) clone[ i ] = _[ i ];

		return clone;

	}

	/**
	 * Checks if this matrix and another matrix are equal.
	 *
	 * @param {Matrix} matrix The matrix to compare this matrix to.
	 * @return {boolean} `true` if the two matrices are equal, `false` otherwise
	 */
	equals( matrix ) {

		let _size = this.size;
		let _sizeRows = _size.rows;
		let _sizeCols = _size.columns;
		let mSize = matrix.size;

		if ( _sizeRows !== mSize.rows || _sizeCols !== mSize.columns )
			return false;

		let _ = this.elements;
		let m = matrix.elements;
		let _n = _sizeRows * _sizeCols;

		for ( let i = 0; i < _n; i ++ ) if ( _[ i ] !== m[ i ] ) return false;

		return true;

	}

	/* ACCESSORS */

	/**
	 * Returns the entry in the specified row and column in this matrix.
	 *
	 * @param {number} r The row that contains the entry (1-indexed).
	 * @param {number} c The column that contains the entry (1-indexed).
	 * @return {number} The entry
	 */
	entry( r, c ) {

		let _size = this.size;

		return this.elements[ r * _size.columns + c - _size.columns - 1 ];

	}

	/**
	 * Returns a row in this matrix as a JavaScript array.
	 *
	 * @param {number} r Row number (1-indexed).
	 * @return {number[]} The row's entries
	 */
	row( r ) {

		let _ = this.elements;
		let _nCols = this.size.columns;

		let end = r * _nCols;
		let start = end - _nCols;

		let row = [];

		for ( let i = start; i < end; i ++ ) row.push( _[ i ] );

		return row;

	}

	/**
	 * Returns a column in this matrix as a JavaScript array.
	 *
	 * @param {number} c Column number (1-indexed).
	 * @return {number[]} The column's entries
	 */
	column( c ) {

		let _ = this.elements;
		let _size = this.size;
		let _nRows = _size.rows;
		let _nCols = _size.columns, __nCols = _nCols + 1;
		let column = [];

		let end = _nRows + 1;

		let p = c - __nCols;
		let q = _nCols;

		for ( let r = 1; r < end; r ++ ) {

			// Same as column.push( _[ this.entryIndex( r, c ) ] )
			// but more speed-efficient
			column.push( _[ q + p ] );
			q += _nCols;

		}

		return column;

	}

	/**
	 * Returns the leading coefficient of a row, or `undefined` if the row does
	 * not have a leading coefficient.
	 *
	 * @param {number} r Row number (1-indexed).
	 * @return {number} The leading coefficient of the row
	 */
	leadingCoefficient( r ) {

		let _ = this.elements;
		let _nCols = this.size.columns;

		let end = r * _nCols;
		let start = end - _nCols;

		for ( let i = start, entry; i < end; i ++ ) {

			entry = _[ i ];
			if ( entry !== 0 ) return entry;

		}

		return undefined;

	}

	/* ITERATORS */

	/**
	 * Executes a function for each entry in this matrix. Entries are iterated in
	 * row-major order.
	 *
	 * @param {Matrix~forEach} callback The function to execute per iteration.
	 * @param {object} thisArg The argument to use as `this` in the function.
	 */
	forEach( callback, thisArg ) {

		let matrix = this;
		let _ = this.elements;
		let _n = _.length;
		let _nCols = this.size.columns;
		let r = 1, c = 1;

		for ( let index = 0; index < _n; index ++ ) {

			let entry = _[ index ];
			callback.bind( thisArg )( entry, r, c, index, matrix );
			c ++;

			if ( c > _nCols ) ( c = 1, r ++ );

		}

	}

	/**
	 * @callback Matrix~forEach
	 * @param {number} entry The current entry being processed.
	 * @param {number} r The entry's row number (1-indexed).
	 * @param {number} c The entry's column number (1-indexed).
	 * @param {number} index The index of the entry in `this.elements` (0-indexed).
	 * @param {Matrix} matrix The instance that this method was called upon.
	 */

	/**
	 * Executes a function for each row in this matrix.
	 *
	 * @param {Matrix~forEachRow} callback The function to execute per iteration.
	 * @param {object} thisArg The argument to use as `this` in the function.
	 */
	forEachRow( callback, thisArg ) {

		// Basically the same as getter rows

		let matrix = this;
		let _ = this.elements;
		let _size = this.size, _nRows = _size.rows, _nCols = _size.columns;

		let i = 0;

		for ( let r = 1, __nRows = _nRows + 1; r < __nRows; r ++, i ++ ) {

			let row = [];
			for ( let c = 0; c < _nCols; c ++, i ++ ) row.push( _[ i ] );
			i --;

			callback.bind( thisArg )( row, r, matrix );

		}

	}

	/**
	 * @callback Matrix~forEachRow
	 * @param {number[]} row The row being processed (with its entries).
	 * @param {number} r The row's number (1-indexed).
	 * @param {Matrix} matrix The instance that this method was called upon.
	 */

	/**
	 * Executes a function for each column in this matrix.
	 *
	 * @param {Matrix~forEachColumn} callback The function to execute per iteration.
	 * @param {object} thisArg The argument to use as `this` in the function.
	 */
	forEachColumn( callback, thisArg ) {

		// Basically the same as getter columns

		let matrix = this;
		let _ = this.elements;
		let _size = this.size;
		let _nRows = _size.rows, __nRows = _nRows + 1;
		let _nCols = _size.columns, __nCols = _nCols + 1;

		let p = - _nCols;

		for ( let c = 1; c < __nCols; c ++ ) {

			let column = [];
			let q = _nCols;

			for ( let r = 1; r < __nRows; r ++ ) {

				column.push( _[ q + p ] );
				q += _nCols;

			}

			callback.bind( thisArg )( column, c, matrix );
			p ++;

		}

	}

	/**
	 * @callback Matrix~forEachColumn
	 * @param {number[]} column The column being processed.
	 * @param {number} c The's column number (1-indexed).
	 * @param {Matrix} matrix The instance that this method was called upon.
	 */

	/* ELEMENTARY ROW OPERATIONS */

	/*
	 * lnagb.js supports all 3 elementary row operations:
	 *   I. Intercharge two rows.
	 *   II. Multiply one row by a nonzero number.
	 *   III. Add a multiple of one row to a different row.
	 *
	 */

	/**
	 * Intercharges two rows in this matrix.
	 *
	 * @param {number} r First row number (1-indexed).
	 * @param {number} s Second row number (1-indexed).
	 * @return {Matrix} This matrix
	 */
	interchargeRows( r, s ) {

		let _ = this.elements;
		let _nCols = this.size.columns;
		let __nCols = _nCols + 1;

		// Cache
		let p = r * _nCols;
		let q = s * _nCols;

		for ( let c = 1, t = 1 - __nCols; c < __nCols; c ++, t ++ ) {

			let i = p + t; // Index of element in row r
			let j = q + t; // Index of element in row s

			// Swap values
			[ _[ i ], _[ j ] ] = [ _[ j ], _[ i ] ];

		}

		return this;

	}

	/**
	 * Multiplies a row in this matrix by a nonzero scalar.
	 *
	 * @param {number} r Row number (1-indexed).
	 * @param {number} k The nonzero scalar to multiply the row by.
	 * @return {Matrix} This matrix
	 */
	multiplyRowByScalar( r, k ) {

		if ( k == 0 ) {

			console.error( "Input scalar must be nonzero" );
			return this.matrix;

		}

		let _ = this.elements;
		let _nCols = this.size.columns;

		let end = r * _nCols;
		let start = end - _nCols;

		for ( let i = start; i < end; i ++ ) _[ i ] *= k;

		return this;

	}

	/**
	 * Adds multiples of a row to another row in this matrix.
	 *
	 * @param {number} r The row that gets added (1-indexed position).
	 * @param {number} s The row to multiply the scalar by and then add to row
	 * `r` (1-indexed position).
	 * @param {number} k The scalar to multiply row `s` by.
	 * @return {Matrix} This matrix
	 */
	addRowTimesScalarToRow( r, s, k = 1 ) {

		let _ = this.elements;
		let _nCols = this.size.columns;

		let rEnd = r * _nCols;
		let rStart = rEnd - _nCols;
		let sEnd = s * _nCols;
		let sStart = sEnd - _nCols;

		for ( let i = rStart, j = sStart; i < rEnd, j < sEnd; i ++, j ++ )
			_[ i ] += ( _[ j ] * k );

		return this;

	}

	/* COMMON MATRIX OPERATIONS */

	/**
	 * Transposes this matrix *in place*.
	 *
	 * @todo Optimize this method by removing the medium
	 *
	 * @return {Matrix} This matrix
	 */
	transpose() {

		/*
		 * APPROACH
		 *
		 * 1. Create an empty array with this.numberOfEntries elements
		 * 2. Copy the elements in this array to the array created in step 1
		 *    according to Cate & Twigg's formula (1977)
		 * 3. Replace this.elements with the array
		 * 4. Return the matrix
		 */

		let _ = this.elements;
		let _size = this.size;
		let _nRows = _size.rows;
		let _nCols = _size.columns;
		let _n = _nRows * _nCols;
		let __n = _n - 1;

		let elements = new Array( _n );
		elements[ 0 ] = _[ 0 ];
		elements[ __n ] = _[ __n ];

		for ( let i = 1; i < __n; i ++ )
			elements[ ( i * _nRows ) % __n ] = _[ i ];

		this.elements = elements;
		[ _size.rows, _size.columns ] = [ _size.columns, _size.rows ];

		return this;

	}

	/**
	 * Multiplies this matrix by a scalar.
	 *
	 * @param {number} k The scalar to multiply this matrix by.
	 * @return {Matrix} This matrix
	 */
	multiplyScalar( k ) {

		let _ = this.elements;

		for ( let i = 0, _n = this.numberOfEntries; i < _n; i ++ ) _[ i ] *= k;

		return this;

	}

	/**
	 * Multiplies this matrix by -1.
	 *
	 * @return {Matrix} This matrix
	 */
	negate() {

		return this.multiplyScalar( - 1 );

	}

	/**
	 * Adds a matrix to this matrix.
	 *
	 * @param {Matrix} matrix The matrix to add to this matrix.
	 * @return {Matrix} This matrix
	 */
	add( matrix ) {

		let _size = this.size;
		let mSize = m.size;

		if ( ! ( _size.rows === mSize.rows && _size.columns === mSize.columns ) ) {

			console.error( "Incompatible matrices for addition" );
			return this;

		}

		let _ = this.elements;
		let m = matrix.elements;
		let _n = this.numberOfEntries;

		for ( let i = 0; i < _n; i ++ ) _[ i ] += m[ i ];

		return this;

	}

	/**
	 * Subtracts a matrix from this matrix.
	 *
	 * @param {Matrix} matrix The matrix to subtract this matrix to.
	 * @return {Matrix} This matrix
	 */
	sub( matrix ) {

		let _size = this.size;
		let mSize = m.size;

		if ( ! ( _size.rows === mSize.rows && _size.columns === mSize.columns ) ) {

			console.error( "Incompatible matrices for subtraction" );
			return this;

		}

		let _ = this.elements;
		let m = matrix.elements;
		let _n = this.numberOfEntries;

		for ( let i = 0; i < _n; i ++ ) _[ i ] -= m[ i ];

		return this;

	}

	/**
	 * Multiplies this matrix by another matrix. If the input matrix is not
	 * compatible for multiplication, return this matrix unchanged.
	 *
	 * @param {Matrix} matrix The matrix to post-multiply this matrix to.
	 * @return {Matrix} This matrix
	 */
	multiply( matrix ) {

		/*
		 * APPROACH
		 *
		 * 1. Check if the matrices are compatible for matrix multiplication,
		 *    extracting the matrices' dimensions in the process
		 * 2. Create an array to store the elements of the result matrix
		 * 3. Create an array to store the columns of right matrix
		 * 4. Adds the columns of the right matrix to the array created in step 3
		 * 5. Run a loop from 1 to the number of rows in the left matrix, in the
		 *    loop:
		 *   5.1. Extract the row that corresponds to the iterator of the loop
		 *        in the left matrix and store the row's entries in an array
		 *   5.2. Run a loop from 0 to the number of columns in the right matrix minus
		 *        1, in the loop:
		 *     5.2.1. Extract the column at the iterator of the loop started in 5.2
		 *            from the matrix created in step 3
		 *     5.2.2. Treat the row extracted in 5.1 and the column extracted in 5.2.1
		 *            as 2 sets of numbers, compute their linear combination
		 *     5.2.2. Appends the linear combination to the array created in step 2
		 */

		let _size = this.size;
		let _sizeRows = _size.rows;
		let _sizeCols = _size.columns;

		let mSize = matrix.size;
		let mSizeRows = mSize.rows;
		let mSizeCols = mSize.columns;

		// 1

		if ( _sizeCols !== mSizeRows ) {

			console.error( "Input matrix is Incompatible for multiplication" );
			return this;

		}

		let left = this.elements;
		let right = matrix.elements;

		let __sizeRows = _sizeRows + 1;
		let _mSizeCols = mSizeCols + 1;

		let result = []; // 2
		let mColumns = []; // 3

		// 4

		for ( let c = 1, column = [], q = mSizeCols, p = - q;
			c < _mSizeCols; c ++, p ++ ) {

			for ( let r = 1, _mSizeRows = mSizeRows + 1; r < _mSizeRows; r ++ ) {

				column.push( right[ p + q ] );
				q += mSizeCols;

			}

			mColumns.push( column );

		}

		for ( let r = 1; r < __sizeRows; r ++ ) { // 5

			// 5.1

			let row = [];
			let rowEnd = r * _sizeCols;
			let rowStart = rowEnd - _sizeCols;

			for ( let i = rowStart; i < rowEnd; i ++ ) row.push( left[ i ] );

			for ( let c = 0; c < mSizeCols; c ++ )
				result.push( row.reduce(
					( result, v, i ) => result + row[ i ] * mColumns[ c ][ i ],
					0 ) );

		}

		this.elements = result;
		this.size.columns = mSizeCols;
		this.numberOfEntries = _sizeRows * mSizeCols;

	}

}

export { Matrix };
