import * as MatrixUtils from './MatrixUtils.js';

/**
 * @author Nguyen Hoang Duong / <you_create@protonmail.com>
 */

/**
 * Low-level, speed-prioritized class that encodes matrices and their operations.
 *
 * This class encodes a matrix by storing the elements of that matrix in an array.
 * Every instance of this class is an object that has the following properties:
 * - `size`: An object that has the following properties:
 *     - `rows`: The number of rows in the encoded matrix;
 *     - `columns`: The number of columns in the encoded matrix.
 * - `elements`: A JavaScript array that stores the elements of the encoded
 *    matrix in **row-major** order.
 *
 * This class prioritizes speed efficiency and is preferred for large matrices.
 * For small matrices, see {@link Matrix1 `Matrix1`}, {@link Matrix2 `Matrix2`}
 * {@link Matrix3 `Matrix3`}, {@link Matrix4 `Matrix4`},
 * {@link Matrix2x3 `Matrix2x3`}, {@link Matrix3x2 `Matrix3x2`}. In additional,
 * this class's methods do not validate arguments' types, so be careful when you
 * use it.
 */
class Matrix {

	/**
	 * Constructs a new `Matrix` instance, which encodes a matrix.
	 *
	 * Arguments are optional. If you give the constructor arguments, make sure
	 * they are valid, because the constructor won't validate them. If you don't
	 * provide arguments, a 2 x 3 zero matrix will be created.
	 *
	 * @param {number} nRows Number of rows in the new matrix
	 * @param {number} nColumns Number of columns in the matrix
	 * @param {number[]} entries Entries of the matrix in row-major order
	 */
	constructor( nRows, nColumns, entries ) {

		/*
		 * These are the properties that every Matrix instance has.
		 *
		 * .size.rows: The number of rows in this matrix
		 * .size.columns: The number of columns in this matrix
		 * .elements: Row-major-ordered array of elements in this matrix
		 *
		 * On the user-end, all of these properties should not be changed
		 * directly, but using methods.
		 */

		this.size = { rows: nRows || 2, columns: nColumns || 3 };
		this.elements = entries || new Array( nRows * nColumns ).fill( 0 );

	}

	/* GETTERS */

	/**
	 * Returns the number of entries in this matrix.
	 *
	 * @return {number} The number of entries in this matrix
	 */
	get numberOfEntries() {

		let _size = this.size;

		return _size.rows * _size.columns;

	}

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
	 * Returns the rank of this matrix by cloning the matrix and reducing the
	 * clone, removing the risk of manipulating the current matrix.
	 *
	 * @return {number} The rank of this matrix
	 */
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

	/* COMMON METHODS */

	/**
	 * Makes this instance the same as another `Matrix` instance.
	 *
	 * This method assumes the given matrix has the same dimensions as this
	 * matrix.
	 *
	 * @param {Matrix} matrix The instance to copy from
	 * @return {Matrix} This matrix
	 */
	copy( matrix ) {

		let _ = this.elements;
		let _size = this.size;
		let _nRows = _size.rows;
		let _nCols = _size.columns;
		let _n = _nRows * _nCols;

		let m = matrix.elements;
		let mSize = matrix.size;

		_size.rows = mSize.rows;
		_size.columns = mSize.columns;

		for ( let i = 0; i < _n; i ++ ) _[ i ] = m[ i ];

		return this;

	}

	/**
	 * Creates and returns a clone of this matrix instance.
	 *
	 * @return {Matrix} A clone of this instance
	 */
	clone() {

		let _size = this.size;
		let _nRows = _size.rows;
		let _nColumns = _size.columns;

		return new this.constructor( _nRows, _nColumns ).copy( this );

	}

	/* SETTERS */

	/**
	 * Sets the dimensions for this matrix.
	 *
	 * @param {number} nRows New number of rows
	 * @param {number} nColumns New number of columns
	 * @return {Matrix} This matrix
	 */
	setDimensions( nRows, nColumns ) {

		let _size = this.size;

		_size.rows = nRows;
		_size.columns = nColumns;

		this.elements = new Array( nRows * nColumns ).fill( 0 );

		return this;

	}

	/**
	 * Sets the elements for this matrix.
	 *
	 * Arguments are assumed to be the elements given in row-major order.
	 *
	 * @return {Matrix} This matrix
	 */
	set() {

		let _n = this.numberOfEntries;
		let elements = Array.from( arguments );

		if ( elements.length !== _n )
			console.error( "Invalid number of arguments" );
		else
			for ( let i = 0, _ = this.elements; i < _n; i ++ )
				_[ i ] = elements[ i ];

		return this;

	}

	/**
	 * Sets a value for an entry in this matrix.
	 *
	 * @param {number} r Row number (1-indexed)
	 * @param {number} c Column number (1-indexed)
	 * @param {number} value Value for the entry in the specified row and column
	 * @return {Matrix} This matrix
	 */
	setEntry( r, c, value ) {

		this.elements[ this.entryIndex( r, c ) ] = value;
		return this;

	}

	/**
	 * Makes this matrix a zero matrix.
	 *
	 * @return {Matrix} This matrix
	 */
	zero() {

		this.elements.fill( 0 );
		return this;

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

		return MatrixUtils.sameSize( this, matrix );

	}

	/**
	 * Checks if this matrix and another matrix are equal.
	 *
	 * @param {Matrix} matrix The matrix to compare this matrix to
	 * @return {boolean} `true` if the two matrices are the same, `false`
	 * otherwise
	 */
	equals( matrix ) {

		return MatrixUtils.equal( this, matrix );

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

		return this.elements[ this.entryIndex( r, c ) ];

	}

	/**
	 * Returns the 0-indexed position of the entry in the specified row and
	 * column in `this.elements`.
	 *
	 * This is a low-level method and is often used internally.
	 *
	 * @param {number} r The row that contains the entry (1-indexed)
	 * @param {number} c The column that contains the entry (1-indexed)
	 * @return {number} The index of the entry in `this.elements` (0-indexed)
	 */
	entryIndex( r, c ) {

		let _size = this.size;

		return r * _size.columns + c - _size.columns - 1;

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
	 * @param {number} c Column number (1-indexed)
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
	 * Returns the main diagonal of this matrix.
	 *
	 * @return {number[]} The entries in the main diagonal of this matrix
	 */
	mainDiagonal() {

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
	 * Returns the leading coefficient of a row, or `undefined` if the row does
	 * not have a leading coefficient.
	 *
	 * @param {number} r Row number (1-indexed)
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

	/**
	 * Returns the column number of the leading coefficient of a row, or
	 * `undefined` if the row does not have a leading coefficient.
	 *
	 * @deprecated This will not be implemented in other matrix classes and will
	 * likely be removed in a near future version.
	 *
	 * @param {number} r Row number (1-indexed)
	 * @return {number} Column number of the row's leading coefficient
	 * (1-indexed)
	 */
	leadingCoefficientIndex( r ) {

		let _ = this.elements;
		let _nCols = this.size.columns;

		let end = r * _nCols;
		let start = end - _nCols;

		for ( let i = start, entry; i < end; i ++ ) {

			entry = _[ i ];
			if ( entry !== 0 ) return ( i % _nCols ) + 1;

		}

		return undefined;

	}

	/* ACCESSORS FOR THE TRANSPOSED */

	/**
	 * Returns the entry in the specified row and column in the transpose of this
	 * matrix, without actually transposing it.
	 *
	 * Arguments should be indices of the desired element in the transpose.
	 *
	 * @param {number} r The row that contains the entry (1-indexed)
	 * @param {number} c The column that contains the entry (1-indexed)
	 * @return {number} The entry
	 */
	transposedEntry( r, c ) {

		return this.entry( c, r );

	}

	/**
	 * Returns a row in the transpose of this matrix as a JavaScript array.
	 *
	 * @param {number} r Row number (in the transpose) (1-indexed)
	 * @return {number[]} The row's entries
	 */
	transposedRow( r ) {

		return this.column( r );

	}

	/**
	 * Returns a column in the transpose of this matrix as a JavaScript array.
	 *
	 * @param {number} c Column number (in the transpose) (1-indexed)
	 * @return {number[]} The column's entries
	 */
	transposedColumn( c ) {

		return this.row( c );

	}

	/* ITERATORS */

	/**
	 * Executes a function for each entry in this matrix.
	 *
	 * @param {Matrix~forEach} callback The function to execute per iteration
	 * @param {object} thisArg The argument to use as `this` in the function
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
	 * @param {number} entry The current entry being processed
	 * @param {number} r The entry's row number (1-indexed)
	 * @param {number} c The entry's column number (1-indexed)
	 * @param {number} index The index of the entry in `this.elements` (0-indexed)
	 * @param {Matrix} matrix The instance that this method was called upon
	 */

	/**
	 * Executes a function for each row in this matrix.
	 *
	 * @param {Matrix~forEachRow} callback The function to execute per iteration
	 * @param {object} thisArg The argument to use as `this` in the function
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
	 * @param {number[]} row The current row being processed (with its entries)
	 * @param {number} r Current row number (1-indexed)
	 * @param {Matrix} matrix The instance that this method was called upon
	 */

	/**
	 * Executes a function for each column in this matrix.
	 *
	 * @param {Matrix~forEachColumn} callback The function to execute per iteration
	 * @param {object} thisArg The argument to use as `this` in the function
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
	 * @param {number[]} column The current column being processed (with its entries)
	 * @param {number} c Current column number (1-indexed)
	 * @param {Matrix} matrix The instance that this method was called upon
	 */

	/* ELEMENTARY ROW OPERATIONS */

	/**
	 * Intercharges two rows in this matrix (elementary row operation type I).
	 *
	 * @param {number} r First row number (1-indexed)
	 * @param {number} s Second row number (1-indexed)
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
	 * Multiplies a row in this matrix by a scalar (elementary row operation
	 * type II).
	 *
	 * The scalar must not be 0. If it is, the row will remain the same.
	 *
	 * @param {number} r Row number (1-indexed)
	 * @param {number} k The scalar to multiply the row by
	 * @return {Matrix} This matrix
	 */
	multiplyRowByScalar( r, k ) {

		if ( k === 0 ) {

			console.error( "Input scalar must not be 0" );
			return this;

		}

		let _ = this.elements;
		let _nCols = this.size.columns;

		let end = r * _nCols;
		let start = end - _nCols;

		for ( let i = start; i < end; i ++ ) _[ i ] *= k;

		return this;

	}

	/**
	 * Adds multiples of a row to another row in this matrix (elementary row
 	 * operation type III).
	 *
	 * @param {number} r The row that gets added (1-indexed position)
	 * @param {number} s The row to multiply the scalar by and then add to row
	 * `r` (1-indexed position)
	 * @param {number} k The scalar to multiply row `s` by
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
	 * Transposes this matrix in place (inefficiently).
	 *
	 * @todo Optimize this method by removing the need of creating a medium
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
	 * @param {number} k The scalar to multiply this matrix by
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
	 * @param {Matrix} matrix The matrix to add to this matrix
	 * @return {Matrix} This matrix
	 */
	add( matrix ) {

		if ( ! this.sameSize( matrix ) ) {

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
	 * @param {Matrix} matrix The matrix to subtract this matrix to
	 * @return {Matrix} This matrix
	 */
	subtract( matrix ) {

		if ( ! this.sameSize( matrix ) ) {

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
	 * Post-multiplies this matrix by another matrix.
	 *
	 * @param {Matrix} matrix The matrix to post-multiply this matrix to
	 * @return {Matrix} This matrix
	 */
	multiply( matrix ) {

		this.elements = MatrixUtils.multiplyMatrices( this, matrix );
		this.size.columns = matrix.size.columns;

		return this;

	}

	/**
	 * Pre-multiplies this matrix by another matrix.
	 *
	 * @param {Matrix} matrix The matrix to pre-multiply this matrix to
	 * @return {Matrix} This matrix
	 */
	premultiply( matrix ) {

		this.elements = MatrixUtils.multiplyMatrices( matrix, this );
		this.size.rows = matrix.size.rows;

		return this;

	}

	/**
	 * Reduces this matrix to its row-echelon form in place.
	 *
	 * @todo Implement an efficient algorithm for matrix reduction
	 *
	 * @param {boolean} canonical Set to `true` to reduce to reduced row-echelon
	 * @return {Matrix} This matrix after reduction
	 */
	reduce( canonical = false ) {

		console.warn( "Matrix reduction is not yet implemented, stay tuned" );
		return this;

	}

}

export { Matrix };
