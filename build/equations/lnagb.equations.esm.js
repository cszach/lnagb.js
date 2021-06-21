/**
 * @module LinearEquation
 * @description
 *
 * Contains the {@link module:LinearEquation~LinearEquation} class, which encodes
 * linear equations of any number of variables.
 *
 * @author Nguyen Hoang Duong / <novakcgx@protonmail.com>
 */

/**
 * Encodes linear equations by storing coefficients in an array and the constant
 * term. Coefficients are stored left-to-right.
 */
class LinearEquation {

	/**
	 * Constructs a `LinearEquation` instance, which encodes a linear equation.
	 *
	 * @param {number[]} coefficients The coefficients of the linear equation.
	 * @param {number} constant The constant term of the linear equation.
	 */
	constructor( coefficients, constant ) {

		/**
		 * @member {number[]}
		 * @description Array of this equation's coefficients.
		 */
		this.coefficients = coefficients; // Default

		/**
		 * @member {number}
		 * @description The constant term of this linear equation.
		 */
		this.constant = constant;

		/**
		 * @member {number}
		 * @description The number of variables in this linear equation.
		 */
		this.numberOfVariables = coefficients.length;

	}

	/**
	 * Returns an instance of `LinearEquation` that is exactly the same as this
	 * instance.
	 *
	 * @returns {LinearEquation} An exact copy of this instance
	 */
	clone() {

		return new this.constructor( this.coefficients, this.constant );

	}

	/**
	 * Multiplies this linear equation with a scalar.
	 *
	 * @param {number} k The scalar to multiply this equation by.
	 * @returns {LinearEquation} This linear equation
	 */
	multiplyScalar( k ) {

		let _coefs = this.coefficients;

		for ( let i = 0, _n = this.numberOfVariables; i < _n; i ++ ) _coefs[ i ] *= k;
		this.constant *= k;

		return this;

	}

	/**
	 * Negates this equation.
	 *
	 * @returns {LinearEquation} This linear equation
	 */
	negate() {

		return this.multiplyScalar( - 1 );

	}

	/**
	 * Adds a linear equation to this linear equation.
	 *
	 * @param {LinearEquation} equation The equation to add to this equation. Both
	 * equations must have the same number of coefficients.
	 * @returns {LinearEquation} This linear equation
	 */
	add( equation ) {

		let _n = this.numberOfVariables;

		if ( _n !== equation.numberOfVariables ) {

			console.error( "Incompatible equations for addition" );
			return this;

		}

		let _ = this.coefficients;
		let e = equation.coefficients;

		for ( let i = 0; i < _n; i ++ ) _[ i ] += e[ i ];
		this.constant += equation.constant;

		return this;

	}

	/**
	 * Subtracts a linear equation from this linear equation.
	 *
	 * @param {LinearEquation} equation The equation to subtract this equation to.
	 * Both equations must have the same number of coefficients.
	 * @returns {LinearEquation} This linear equation
	 */
	subtract( equation ) {

		let _n = this.numberOfVariables;

		if ( equation.numberOfVariables !== _n ) {

			console.error( "Incompatible equations for subtraction" );
			return this;

		}

		let _ = this.coefficients;
		let e = equation.coefficients;

		for ( let i = 0; i < _n; i ++ ) _[ i ] -= e[ i ];
		this.constant -= equation.constant;

		return this;

	}

	/**
	 * Returns an array containing the coefficients from left to right and the
	 * constant. Helpful in converting to a row or column vector.
	 *
	 * @returns {number[]} The array representation of this linear equation
	 */
	toArray() {

		return [ ...this.coefficients, this.constant ];

	}

}

/**
 * @module LinearEquation2
 * @description
 *
 * Contains the {@link module:LinearEquation2~LinearEquation2} class, which
 * encodes linear equations with 2 variables.
 */

/**
 * Encodes linear equations of 2 variables.
 *
 * @see {@link module:LinearEquation~LinearEquation} for common properties
 */
class LinearEquation2 {

	constructor( a, b, c ) {

		this.a = a;
		this.b = b;
		this.c = c;
		this.coefficients = [ a, b ];
		this.constant = c;
		this.numberOfVariables = 2;

	}

	clone() {

		return new this.constructor( this.a, this.b, this.c );

	}

	multiplyScalar( k ) {

		let _ = this.coefficients;

		this.a = _[ 0 ] *= k;
		this.b = _[ 1 ] *= k;
		this.c = this.constant *= k;

		return this;

	}

	negate() {

		return this.multiplyScalar( - 1 );

	}

	add( equation ) {

		let _ = this.coefficients;
		let e = equation.coefficients;

		this.a = _[ 0 ] += e[ 0 ];
		this.b = _[ 1 ] += e[ 1 ];
		this.c = this.constant += equation.constant;

		return this;

	}

	subtract( equation ) {

		let _ = this.coefficients;
		let e = equation.coefficients;

		this.a = _[ 0 ] -= e[ 0 ];
		this.b = _[ 1 ] -= e[ 1 ];
		this.c = this.constant -= equation.constant;

		return this;

	}

}

/**
 * @module LinearEquation3
 * @description
 *
 * Contains the {@link module:LinearEquation3~LinearEquation3} class, which
 * encodes linear equations with 3 variables.
 */

/**
 * Encodes linear equations of 3 variables.
 *
 * @see {@link module:LinearEquation~LinearEquation} for common properties
 */
class LinearEquation3 {

	constructor( a, b, c, d ) {

		this.a = a;
		this.b = b;
		this.c = c;
		this.d = d;
		this.coefficients = [ a, b, c ];
		this.constant = d;
		this.numberOfVariables = 3;

	}

	clone() {

		return new this.constructor( this.a, this.b, this.c, this.d );

	}

	multiplyScalar( k ) {

		let _ = this.coefficients;

		this.a = _[ 0 ] *= k;
		this.b = _[ 1 ] *= k;
		this.c = _[ 2 ] *= k;
		this.d = this.constant *= k;

		return this;

	}

	negate() {

		return this.multiplyScalar( - 1 );

	}

	add( equation ) {

		let _ = this.coefficients;
		let e = equation.coefficients;

		this.a = _[ 0 ] += e[ 0 ];
		this.b = _[ 1 ] += e[ 1 ];
		this.c = _[ 2 ] += e[ 2 ];
		this.d = this.constant += equation.constant;

		return this;

	}

	subtract( equation ) {

		let _ = this.coefficients;
		let e = equation.coefficients;

		this.a = _[ 0 ] -= e[ 0 ];
		this.b = _[ 1 ] -= e[ 1 ];
		this.c = _[ 2 ] -= e[ 2 ];
		this.d = this.constant -= equation.constant;

		return this;

	}

}

/**
 * @module Matrix
 * @author Nguyen Hoang Duong / <novakcgx@protonmail.com>
 * @description
 *
 * Contains the {@link module:Matrix~Matrix} class, which encodes basic matrices
 * of any size in linear algebra.
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
	 * @returns {Array[]} The rows in this matrix
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
	 * @returns {Array[]} The columns in this matrix
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
	 * @returns {number[]} The entries in the main diagonal of this matrix
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

	/* BASIC METHODS */

	/**
	 * Creates and returns a clone of this matrix instance.
	 *
	 * @returns {Matrix} A clone of this instance
	 */
	clone() {

		let _size = this.size;
		let _nRows = _size.rows;
		let _nCols = _size.columns;

		return new this.constructor( _nRows, _nCols, this.elements.slice() );

	}

	/**
	 * Checks if this matrix and another matrix are equal.
	 *
	 * @param {Matrix} matrix The matrix to compare this matrix to.
	 * @returns {boolean} `true` if the two matrices are equal, `false` otherwise
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
	 * @param {number} i The row that contains the entry (1-indexed).
	 * @param {number} j The column that contains the entry (1-indexed).
	 * @returns {number} The entry
	 */
	entry( i, j ) {

		let _size = this.size;

		return this.elements[ i * _size.columns + j - _size.columns - 1 ];

	}

	/**
	 * Returns a row in this matrix as a JavaScript array.
	 *
	 * @param {number} r Row number (1-indexed).
	 * @returns {number[]} The row's entries
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
	 * @returns {number[]} The column's entries
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

			// Speed-efficient entry index
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
	 * @returns {number} The leading coefficient of the row
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
	 * @param {module:Matrix~Matrix~forEach} callback The function to execute per
	 * iteration.
	 * @param {object} thisArg The argument to use as `this` in the function.
	 */
	forEach( callback, thisArg ) {

		let matrix = this;
		let _ = this.elements;
		let _n = _.length;
		let _nCols = this.size.columns;
		let boundCallback = callback.bind( thisArg );
		let i = 1, j = 1;

		for ( let index = 0; index < _n; index ++ ) {

			let entry = _[ index ];
			boundCallback( entry, i, j, index, matrix );
			j ++;

			if ( j > _nCols ) ( j = 1, i ++ );

		}

	}

	/**
	 * @callback module:Matrix~Matrix~forEach
	 * @param {number} entry The current entry being processed.
	 * @param {number} i The entry's row number (1-indexed).
	 * @param {number} j The entry's column number (1-indexed).
	 * @param {number} index The index of the entry in `this.elements` (0-indexed).
	 * @param {Matrix} matrix The instance that this method was called upon.
	 */

	/**
	 * Executes a function for each row in this matrix.
	 *
	 * @param {module:Matrix~Matrix~forEachRow} callback The function to execute
	 * per iteration.
	 * @param {object} thisArg The argument to use as `this` in the function.
	 */
	forEachRow( callback, thisArg ) {

		// Basically the same as getter rows

		let matrix = this;
		let _ = this.elements;
		let _size = this.size, _nRows = _size.rows, _nCols = _size.columns;
		let boundCallback = callback.bind( thisArg );

		let i = 0;

		for ( let r = 1, __nRows = _nRows + 1; r < __nRows; r ++, i ++ ) {

			let row = [];
			for ( let c = 0; c < _nCols; c ++, i ++ ) row.push( _[ i ] );
			i --;

			boundCallback( row, r, matrix );

		}

	}

	/**
	 * @callback module:Matrix~Matrix~forEachRow
	 * @param {number[]} row The row being processed (with its entries).
	 * @param {number} r The row's number (1-indexed).
	 * @param {Matrix} matrix The instance that this method was called upon.
	 */

	/**
	 * Executes a function for each column in this matrix.
	 *
	 * @param {module:Matrix~Matrix~forEachColumn} callback The function to execute
	 * per iteration.
	 * @param {object} thisArg The argument to use as `this` in the function.
	 */
	forEachColumn( callback, thisArg ) {

		// Basically the same as getter columns

		let matrix = this;
		let _ = this.elements;
		let _size = this.size;
		let _nRows = _size.rows, __nRows = _nRows + 1;
		let _nCols = _size.columns, __nCols = _nCols + 1;
		let boundCallback = callback.bind( thisArg );

		let p = - _nCols;

		for ( let c = 1; c < __nCols; c ++ ) {

			let column = [];
			let q = _nCols;

			for ( let r = 1; r < __nRows; r ++ ) {

				column.push( _[ q + p ] );
				q += _nCols;

			}

			boundCallback( column, c, matrix );
			p ++;

		}

	}

	/**
	 * @callback module:Matrix~Matrix~forEachColumn
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
	 * @returns {Matrix} This matrix
	 */
	interchargeRows( r, s ) {

		let _ = this.elements;
		let _nCols = this.size.columns;
		let __nCols = _nCols + 1;

		// Cache
		let p = r * _nCols + 1 - __nCols;
		let q = s * _nCols + 1 - __nCols;

		for ( let c = 1; c < __nCols; c ++ ) {

			// Swap values
			[ _[ p ++ ], _[ q ++ ] ] = [ _[ q ], _[ p ] ];

		}

		return this;

	}

	/**
	 * Multiplies a row in this matrix by a nonzero scalar.
	 *
	 * @param {number} r Row number (1-indexed).
	 * @param {number} k The nonzero scalar to multiply the row by.
	 * @returns {Matrix} This matrix
	 */
	multiplyRowByScalar( r, k ) {

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
	 * @returns {Matrix} This matrix
	 */
	addRowTimesScalarToRow( r, s, k = 1 ) {

		let _ = this.elements;
		let _nCols = this.size.columns;

		let rEnd = r * _nCols;
		let rStart = rEnd - _nCols;
		let sEnd = s * _nCols;
		let sStart = sEnd - _nCols;

		for ( let i = rStart, j = sStart; j < sEnd; i ++, j ++ )
			_[ i ] += ( _[ j ] * k );

		return this;

	}

	/* COMMON MATRIX OPERATIONS */

	/**
	 * Transposes this matrix *in place*.
	 *
	 * @todo Optimize this method by removing the medium
	 *
	 * @returns {Matrix} This matrix
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
	 * @returns {Matrix} This matrix
	 */
	multiplyScalar( k ) {

		let _ = this.elements;

		for ( let i = 0, _n = this.numberOfEntries; i < _n; i ++ ) _[ i ] *= k;

		return this;

	}

	/**
	 * Multiplies this matrix by -1.
	 *
	 * @returns {Matrix} This matrix
	 */
	negate() {

		return this.multiplyScalar( - 1 );

	}

	/**
	 * Adds a matrix to this matrix.
	 *
	 * @param {Matrix} matrix The matrix to add to this matrix.
	 * @returns {Matrix} This matrix
	 */
	add( matrix ) {

		let _size = this.size;
		let mSize = matrix.size;

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
	 * @returns {Matrix} This matrix
	 */
	sub( matrix ) {

		let _size = this.size;
		let mSize = matrix.size;

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
	 * @returns {Matrix} This matrix
	 */
	multiply( matrix ) {

		let _size = this.size;
		let _sizeRows = _size.rows;
		let _sizeCols = _size.columns;

		let mSize = matrix.size;
		let mSizeRows = mSize.rows;
		let mSizeCols = mSize.columns;

		if ( _sizeCols !== mSizeRows ) {

			console.error( "Input matrix is incompatible for multiplication" );
			return this;

		}

		let _ = this.elements;
		let m = matrix.elements;
		let result = [];

		// Cache
		let __sizeRows = _sizeRows + 1;
		let __sizeCols = _sizeCols + 1;
		let _mSizeCols = mSizeCols + 1;

		for ( let i = 1; i < __sizeRows; i ++ )
			for ( let j = 1; j < _mSizeCols; j ++ ) {

				let sum = 0;

				for ( let k = 1; k < __sizeCols; k ++ )
					sum += ( _[ i * _sizeCols + k - __sizeCols ] * m[ k * mSizeCols + j - _mSizeCols ] );

				result.push( sum );

			}

		this.elements = result;
		this.size.columns = mSizeCols;
		this.numberOfEntries = _sizeRows * mSizeCols;

		return this;

	}

}

/**
 * @module AugmentedMatrix
 * @author Nguyen Hoang Duong / <novakcgx@protonmail.com>
 * @description
 *
 * Contains the {@link module:AugmentedMatrix~AugmentedMatrix} class, which
 * encodes augmented matrices.
 *
 */

/**
 * Encodes augmented matrices and their operations in Linear Algebra.
 *
 * This class inherits class methods from {@link module:Matrix~Matrix} with the
 * exception that `transpose`, `add`, `sub`, and `multiply` cannot be used.
 *
 * The `size` property has two more elements: `left`—which is the number of
 * columns of the left matrix—and `right`—that of the right matrix.
 *
 * @augments module:Matrix~Matrix
 * @see {@link module:Matrix~Matrix} for common properties
 */
class AugmentedMatrix extends Matrix {

	/**
	 * Constructs an `AugmentedMatrix` instance, which encodes an augmented matrix.
	 * Input matrices are cloned and assumed to have equal number of rows.
	 *
	 * @param {module:Matrix~Matrix} left The left part of the augmented matrix.
	 * @param {module:Matrix~Matrix} right The right part of the augmented matrix.
	 */
	constructor( left, right ) {

		let leftSize = left.size;
		let rightSize = right.size;

		let _nRows = leftSize.rows;
		let leftSizeCols = leftSize.columns;
		let rightSizeCols = rightSize.columns;

		let elements = [];

		for ( let i = 1, __nRows = _nRows + 1; i < __nRows; i ++ )
			elements.push( ...left.row( i ), ...right.row( i ) );

		super( _nRows, leftSizeCols + rightSizeCols, elements );

		this.size.left = leftSizeCols;
		this.size.right = rightSizeCols;

	}

	/**
	 * Returns the left matrix of this augmented matrix.
	 *
	 * @returns {module:Matrix~Matrix} The left matrix
	 */
	get leftMatrix() {

		let _size = this.size;
		let _nRows = _size.rows;
		let leftSizeCols = _size.left;

		let elements = [];

		for ( let i = 1; i <= _nRows; i ++ )
			for ( let j = 1; j <= leftSizeCols; j ++ )
				elements.push( this.entry( i, j ) );

		return new Matrix( _nRows, leftSizeCols, elements );

	}

	/**
	 * Returns the right matrix of this augmented matrix.
	 *
	 * @returns {module:Matrix~Matrix} The right matrix
	 */
	get rightMatrix() {

		let _size = this.size;
		let _nRows = _size.rows;
		let leftSizeCols = _size.left;
		let rightSizeCols = _size.right;

		let elements = [];

		for ( let i = 1; i <= _nRows; i ++ )
			for ( let j = 1; j <= rightSizeCols; j ++ )
				elements.push( this.entry( i, leftSizeCols + j ) );

		return new Matrix( _nRows, rightSizeCols, elements );

	}

}

// Disable these class methods for augmented matrices

AugmentedMatrix.prototype.transpose = undefined;
AugmentedMatrix.prototype.add = undefined;
AugmentedMatrix.prototype.sub = undefined;
AugmentedMatrix.prototype.multiply = undefined;

/**
 * @module SystemOfLinearEquations
 * @author Nguyen Hoang Duong / <novakcgx@protonmail.com>
 * @description
 *
 * Contains the {@link module:SystemOfLinearEquations~SystemOfLinearEquations}
 * class, which encodes systems of linear equations.
 */

/**
 * Encodes systems of linear equations by storing instances of
 * {@link module:LinearEquation~LinearEquation}s in an array.
 */
class SystemOfLinearEquations {

	/**
	 * Constructs a new instance of `SystemOfLinearEquations`, which encodes a
	 * system of linear equations.
	 *
	 * @param {LinearEquation[]} equations Instances of `LinearEquation` for
	 * the system.
	 */
	constructor( equations ) {

		/**
		 * @member {LinearEquation[]}
		 * @description Array of linear equations of this system.
		 */
		this.equations = equations;

		/**
		 * @member {number}
		 * @description The number of variables of this system.
		 */
		this.numberOfVariables = equations[ 0 ].numberOfVariables;

		/**
		 * @member {number}
		 * @description The number of linear equations in this system.
		 */
		this.numberOfEquations = equations.legnth;

	}

	/**
	 * Creates and returns a new instance that is the same as this instance.
	 *
	 * @returns {SystemOfLinearEquations} A clone of this instance
	 */
	clone() {

		return new this.constructor( this.equations.slice() );

	}

	/**
	 * Computes the coefficient matrix of this system of linear equations and
	 * assigns the matrix to the {@link module:SystemOfLinearEquations~SystemOfLinearEquations#coefficientMatrix}
	 * property.
	 */
	computeCoefficientMatrix() {

		let coefficients = []; // Array of coefficients for the matrix

		// Cache

		let _ = this.equations;
		let _nVars = this.numberOfVariables;
		let _nEqus = this.numberOfEquations;

		// For every equation, iterate through the equation's coefficients,
		// adding the coefficients to the array

		for ( let equIndex = 0, equCoefs = _[ equIndex ].coefficients;
			equIndex < _nEqus; equIndex ++ )
			for ( let coefIndex = 0; coefIndex < _nVars; coefIndex ++ )
				coefficients.push( equCoefs[ coefIndex ] );

		/**
		 * @member {module:Matrix~Matrix}
		 * @description
		 *
		 * The coefficient matrix of this system of linear equations, obtained by
		 * calling {@link module:SystemOfLinearEquations~SystemOfLinearEquations#computeCoefficientMatrix}.
		 */
		this.coefficientMatrix = new Matrix( _nEqus, _nVars, coefficients );

	}

	/**
	 * Computes the constant matrix of this system of linear equations and
	 * assigns the matrix to the {@link module:SystemOfLinearEquations~SystemOfLinearEquations#constantMatrix}
	 * property.
	 */
	computeConstantMatrix() {

		let constants = []; // Array of constant terms for the matrix

		// Cache

		let _ = this.equations;
		let _nEqus = this.numberOfEquations;

		// For each equation, add its constant to the array

		for ( let i = 0; i < _nEqus; i ++ ) constants.push( _[ i ].constant );

		/**
		 * @member {module:Matrix~Matrix}
		 * @description
		 *
		 * The constant matrix of this system of linear equations, obtained by
		 * calling {@link module:SystemOfLinearEquations~SystemOfLinearEquations#computeConstantMatrix}.
		 */
		this.constantMatrix = new Matrix( _nEqus, 1, constants );

	}

	/**
	 * Computes the augmented matrix of this system of linear equations and
	 * assigns the matrix to the {@link module:SystemOfLinearEquations~SystemOfLinearEquations#augmentedMatrix}
	 * property.
	 */
	computeAugmentedMatrix() {

		let coefficients = [];
		let constants = [];

		// Cache

		let _ = this.equations;
		let _nEqus = this.numberOfEquations;
		let _nVars = this.numberOfVariables;

		for ( let i = 0; i < _nEqus; i ++ ) {

			let equation = _[ i ];
			let coefs = equation.coefficients;

			for ( let j = 0; j < _nVars; j ++ ) coefficients.push( coefs[ j ] );
			constants.push( equation.constant );

		}

		/**
		 * @member {module:AugmentedMatrix~AugmentedMatrix}
		 * @description
		 *
		 * The augmented matrix of this system of linear equations, obtained by
		 * calling {@link module:SystemOfLinearEquations~SystemOfLinearEquations#computeAugmentedMatrix}.
		 */
		this.augmentedMatrix = new AugmentedMatrix(
			new Matrix( _nEqus, _nVars, coefficients ),
			new Matrix( _nEqus, 1, constants )
		);

	}

	/**
	 * Computes the augmented matrix of this system of linear equations and
	 * assigns the matrix to the {@link module:SystemOfLinearEquations~SystemOfLinearEquations#augmentedMatrix}
	 * property **provided that** the coefficient matrix and the constant matrix
	 * have been computed.
	 */
	lazyComputeAugmentedMatrix() {

		this.augmentedMatrix = new AugmentedMatrix(
			this.coefficientMatrix,
			this.constantMatrix
		);

	}

	/**
	 * Executes a function for each equation in this system.
	 *
	 * @param {module:SystemOfLinearEquations~SystemOfLinearEquations~forEach} callback
	 * The function to execute per iteration.
	 * @param {object} thisArg The argument to use as `this` in the function.
	 */
	forEach( callback, thisArg ) {

		let boundCallback = callback.bind( thisArg );

		this.equations.forEach( ( equation, i ) => {

			let coefficients = equation.coefficients;
			let constant = equation.constant;
			let index = i;
			let system = this;

			boundCallback( equation, coefficients, constant, index, system );

		}, this );

	}

}

export { LinearEquation, LinearEquation2, LinearEquation3, SystemOfLinearEquations };
