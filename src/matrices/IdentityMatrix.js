/**
 * @module IdentityMatrix
 * @author Nguyen Hoang Duong / <novakcgx@protonmail.com>
 * @description
 *
 * Contains the {@link module:IdentityMatrix~IdentityMatrix} class, which
 * encodes read-only identity matrices.
 *
 */

/**
 * Encodes *read-only* identity matrices and their operations. Being read-only
 * means instances of this class cannot have their elements modified (e.g. by
 * matrix addition or row operations).
 *
 * Properties are encoded similarly to {@link module:Matrix~Matrix}. Many
 * methods in `Matrix` are absent in this class. Some are implemented
 * differently. The `elements` property of an `IdentityMatrix` instance only
 * serves for compatibility with other matrix classes; `IdentityMatrix` class
 * methods don't rely on it themselves.
 *
 * While `rows` and `columns` are getters in the `Matrix` class, they are
 * properties here. For this reason, if you want to assign a variable to either
 * of them, you should add `.slice()` to clone, avoiding any unwanted problems
 * with pointers.
 */
class IdentityMatrix {

	/**
	 * Constructs a new `IdentityMatrix` instance, which encodes an identity
	 * matrix.
	 *
	 * @param {number} size Number of rows (or columns) in the new identity
	 * matrix.
	 */
	constructor( size ) {

		// These are the properties that a `Matrix` instance also has

		this.size = { rows: size, columns: size };
		this.numberOfEntries = size * size;
		this.elements = new Array( this.numberOfEntries ).fill( 0 );

		for ( let index = 0, _size = size + 1, _n = this.numberOfEntries;
			index < _n; index += _size ) this.elements[ index ] = 1;

		// These are what in `Matrix` would be getters, but are properties here
		// for efficiency.

		this.rank = size;
		this.rows = [];

		for ( let i = 0; i < size; i ++ ) {

			let row = new Array( size ).fill( 0 ); row[ i ] = 1;
			this.rows.push( row );

		}

		this.columns = this.rows.slice();
		this.mainDiagonal = new Array( size ).fill( 1 );

	}

	/* COMMON METHODS */

	/**
	 * Creates and returns a clone of this identity matrix instance.
	 *
	 * @returns {IdentityMatrix} A clone of this instance
	 */
	clone() {

		return new this.constructor( this.size.rows );

	}

	/**
	 * Checks if this matrix and another matrix are equal.
	 *
	 * @param {module:Matrix~Matrix} matrix The matrix to compare this matrix to.
	 * @returns {boolean} `true` if the two matrices are equal, `false` otherwise
	 */
	equals( matrix ) {

		let _size = this.size.rows;
		let mSize = matrix.size;

		if ( _size !== mSize.rows || _size !== mSize.columns )
			return false;

		let _ = this.elements;
		let m = matrix.elements;
		let _n = _size * _size;

		for ( let i = 0; i < _n; i ++ ) if ( _[ i ] !== m[ i ] ) return false;

		return true;

	}

	/* ACCESSORS */

	/**
	 * Returns the entry in the specified row and column in this matrix.
	 *
	 * @param {number} r The row that contains the entry (1-indexed).
	 * @param {number} c The column that contains the entry (1-indexed).
	 * @returns {number} The entry
	 */
	entry( r, c ) {

		return ( r === c ) ? 1 : 0;

	}

	/**
	 * Returns a row in this matrix as a JavaScript array.
	 *
	 * @param {number} r Row number (1-indexed).
	 * @returns {number[]} The row's entries
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
	 * @param {number} c Column number (1-indexed).
	 * @returns {number[]} The column's entries
	 */
	column( c ) {

		return this.row( c );

	}

	/**
	 * Returns the leading coefficient of a row, which is always 1 since this is
	 * an identity matrix.
	 *
	 * @param {number} r Row number (1-indexed) (this will be disregarded).
	 * @returns {number} The leading coefficient of the row
	 */
	leadingCoefficient( r ) { // eslint-disable-line no-unused-vars

		return 1;

	}

	/* ITERATORS */

	/**
	 * Executes a function for each entry in this matrix.
	 *
	 * @param {module:IdentityMatrix~IdentityMatrix~forEach} callback The function
	 * to execute per iteration.
	 * @param {object} thisArg The argument to use as `this` in the function.
	 */
	forEach( callback, thisArg ) {

		let matrix = this;
		let _size = this.size;
		let _nCols = _size.columns;
		let _n = _nCols * _nCols;
		let boundCallback = callback.bind( thisArg );
		let i = 1, j = 1;

		for ( let index = 0; index < _n; index ++ ) {

			let entry = ( i === j ) ? 1 : 0;
			boundCallback( entry, i, j, index, matrix );
			j ++;

			if ( j > _nCols ) ( j = 1, i ++ );

		}

	}

	/**
	 * Executes a function for each row in this matrix.
	 *
	 * @param {module:IdentityMatrix~IdentityMatrix~forEachRow} callback The
	 * function to execute per iteration.
	 * @param {object} thisArg The argument to use as `this` in the function.
	 */
	forEachRow( callback, thisArg ) {

		let matrix = this;
		let _nRows = this.size.rows;
		let boundCallback = callback.bind( thisArg );

		for ( let i = 0; i < _nRows; i ++ ) {

			let r = i + 1;
			let row = new Array( _nRows ).fill( 0 );
			row[ i ] = 1;

			boundCallback( row, r, matrix );

		}

	}

	/**
	 * Executes a function for each column in this matrix.
	 *
	 * @param {module:IdentityMatrix~IdentityMatrix~forEachColumn} callback The
	 * function to execute per iteration.
	 * @param {object} thisArg The argument to use as `this` in the function.
	 */
	forEachColumn( callback, thisArg ) {

		this.forEachRow( callback, thisArg ); // yeah...

	}

}

/**
 * @callback module:IdentityMatrix~IdentityMatrix~forEach
 * @param {number} entry The current entry being processed.
 * @param {number} i The entry's row number (1-indexed).
 * @param {number} j The entry's column number (1-indexed).
 * @param {number} index The index of the entry in `this.elements` (0-indexed).
 * @param {IdentityMatrix} matrix The instance that this method was called upon.
 */

/**
 * @callback module:IdentityMatrix~IdentityMatrix~forEachRow
 * @param {number[]} row The current row being processed (with its entries).
 * @param {number} r Current row number (1-indexed).
 * @param {IdentityMatrix} matrix The instance that this method was called upon.
 */

/**
 * @callback module:IdentityMatrix~IdentityMatrix~forEachColumn
 * @param {number[]} column The current column being processed (with its entries).
 * @param {number} c Current column number (1-indexed).
 * @param {IdentityMatrix} matrix The instance that this method was called upon.
 */

export { IdentityMatrix };
