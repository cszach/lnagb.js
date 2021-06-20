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

/**
 * @module Matrix2
 * @author Nguyen Hoang Duong / <novakcgx@protonmail.com>
 * @description
 *
 * Contains the {@link module:Matrix2~Matrix2} class, which encodes 2 x 2
 * matrices in linear algebra.
 */

/**
 * Encodes 2 x 2 matrices.
 *
 * @see {@link module:Matrix~Matrix} for common properties
 */
class Matrix2 {

	/**
	 * All parameters are optional and default to 0.
	 *
	 * @param {number} a The (1, 1)-entry of the new 2 x 2 matrix
	 * @param {number} b The (1, 2)-entry
	 * @param {number} c The (2, 1)-entry
	 * @param {number} d The (2, 2)-entry
	 */
	constructor(
		a = 0, b = 0,
		c = 0, d = 0
	) {

		this.size = { rows: 2, columns: 2 };
		this.numberOfEntries = 4;
		this.elements = [ a, b, c, d ];

	}

	get rows() {

		let _ = this.elements;
		return [
			[ _[ 0 ], _[ 1 ] ],
			[ _[ 2 ], _[ 3 ] ]
		];

	}

	get columns() {

		let _ = this.elements;
		return [
			[ _[ 0 ], _[ 2 ] ],
			[ _[ 1 ], _[ 3 ] ]
		];

	}

	get mainDiagonal() {

		let _ = this.elements;
		return [ _[ 0 ], _[ 3 ] ];

	}

	clone() {

		return new this.constructor( ...this.elements );

	}

	equals( matrix ) {

		let mSize = matrix.size;

		if ( mSize.rows !== 2 || mSize.columns !== 2 ) return false;

		let _ = this.elements;
		let m = matrix.elements;

		return _[ 0 ] === m[ 0 ] && _[ 1 ] === m[ 1 ]
			&& _[ 2 ] === m[ 2 ] && _[ 3 ] === m[ 3 ];

	}

	entry( i, j ) {

		return this.elements[ i * 2 + j - 3 ];

	}

	row( r ) {

		let _ = this.elements;

		switch ( r ) {

			case 1:
				return [ _[ 0 ], _[ 1 ] ];
			case 2:
				return [ _[ 2 ], _[ 3 ] ];
			default:
				return undefined;

		}

	}

	column( c ) {

		let _ = this.elements;

		switch ( c ) {

			case 1:
				return [ _[ 0 ], _[ 2 ] ];
			case 2:
				return [ _[ 1 ], _[ 3 ] ];
			default:
				return undefined;

		}

	}

	leadingCoefficient( r ) {

		let _ = this.elements;

		switch ( r ) {

			case 1:
				return _[ 0 ] !== 0 ? _[ 0 ] : ( _[ 1 ] !== 0 ? _[ 1 ] : undefined );
			case 2:
				return _[ 2 ] !== 0 ? _[ 2 ] : ( _[ 3 ] !== 0 ? _[ 3 ] : undefined );
			default:
				return undefined;

		}

	}

	forEach( callback, thisArg ) {

		let _ = this.elements;
		let boundCallback = callback.bind( thisArg );

		boundCallback( _[ 0 ], 1, 1, 0, this );
		boundCallback( _[ 1 ], 1, 2, 1, this );
		boundCallback( _[ 2 ], 2, 1, 2, this );
		boundCallback( _[ 3 ], 2, 2, 3, this );

	}

	forEachRow( callback, thisArg ) {

		let _ = this.elements;
		let boundCallback = callback.bind( thisArg );

		boundCallback( [ _[ 0 ], _[ 1 ] ], 1, this );
		boundCallback( [ _[ 2 ], _[ 3 ] ], 2, this );

	}

	forEachColumn( callback, thisArg ) {

		let _ = this.elements;
		let boundCallback = callback.bind( thisArg );

		boundCallback( [ _[ 0 ], _[ 2 ] ], 1, this );
		boundCallback( [ _[ 1 ], _[ 3 ] ], 2, this );

	}

	/**
	 * Intercharges the two rows in this matrix.
	 *
	 * @returns {Matrix2} This matrix
	 */
	interchargeRows() {

		let _ = this.elements;
		[ _[ 0 ], _[ 2 ] ] = [ _[ 2 ], _[ 0 ] ];
		[ _[ 1 ], _[ 3 ] ] = [ _[ 3 ], _[ 1 ] ];

		return this;

	}

	multiplyRowByScalar( r, k ) {

		let _ = this.elements;

		switch ( r ) {

			case 1:
				_[ 0 ] *= k; _[ 1 ] *= k;
				return this;
			case 2:
				_[ 2 ] *= k; _[ 3 ] *= k;
				return this;
			default:
				return this;

		}

	}

	addRowTimesScalarToRow( r, s, k = 1 ) {

		let _ = this.elements;

		let rStart = r * 2 - 2;
		let sStart = s * 2 - 2;

		_[ rStart ] += ( _[ sStart ] * k );
		_[ rStart + 1 ] += ( _[ sStart + 1 ] * k );

		return this;

	}

	transpose() {

		let _ = this.elements;
		[ _[ 1 ], _[ 2 ] ] = [ _[ 2 ], _[ 1 ] ];

		return this;

	}

	multiplyScalar( k ) {

		let _ = this.elements;

		_[ 0 ] *= k; _[ 1 ] *= k;
		_[ 2 ] *= k; _[ 3 ] *= k;

		return this;

	}

	negate() {

		return this.multiplyScalar( - 1 );

	}

	add( matrix ) {

		let _ = this.elements;
		let m = matrix.elements;

		_[ 0 ] += m[ 0 ]; _[ 1 ] += m[ 1 ];
		_[ 2 ] += m[ 2 ]; _[ 3 ] += m[ 3 ];

		return this;

	}

	sub( matrix ) {

		let _ = this.elements;
		let m = matrix.elements;

		_[ 0 ] -= m[ 0 ]; _[ 1 ] -= m[ 1 ];
		_[ 2 ] -= m[ 2 ]; _[ 3 ] -= m[ 3 ];

		return this;

	}

	/**
	 * Multiplies this matrix by another 2 x 2 matrix.
	 *
	 * @param {matrix} matrix The 2 x 2 matrix to post-multiply this matrix to.
	 * @returns {Matrix2} This matrix
	 */
	multiply( matrix ) {

		let _ = this.elements;
		let m = matrix.elements;

		let _11 = _[ 0 ], _12 = _[ 1 ],
			_21 = _[ 2 ], _22 = _[ 3 ];

		let m11 = m[ 0 ], m12 = m[ 1 ],
			m21 = m[ 2 ], m22 = m[ 3 ];

		_[ 0 ] = _11 * m11 + _12 * m21;
		_[ 1 ] = _11 * m12 + _12 * m22;
		_[ 2 ] = _21 * m11 + _22 * m21;
		_[ 3 ] = _21 * m12 + _22 * m22;

		return this;

	}

}

/**
 * @module Matrix3
 * @author Nguyen Hoang Duong / <novakcgx@protonmail.com>
 * @description
 *
 * Contains the {@link module:Matrix3~Matrix3} class, which encodes 3 x 3
 * matrices in linear algebra.
 */

/**
 * Encodes 3 x 3 matrices.
 *
 * @see {@link module:Matrix~Matrix} for common properties
 */
class Matrix3 {

	/**
	 * All parameters are optional and default to 0.
	 *
	 * @param {number} a The (1, 1)-entry of the new 3 x 3 matrix
	 * @param {number} b The (1, 2)-entry
	 * @param {number} c The (1, 3)-entry
	 * @param {number} d The (2, 1)-entry
	 * @param {number} e The (2, 2)-entry
	 * @param {number} f The (2, 3)-entry
	 * @param {number} g The (3, 1)-entry
	 * @param {number} h The (3, 2)-entry
	 * @param {number} i The (3, 3)-entry
	 */
	constructor(
		a = 0, b = 0, c = 0,
		d = 0, e = 0, f = 0,
		g = 0, h = 0, i = 0
	) {

		this.size = { rows: 3, columns: 3 };
		this.numberOfEntries = 9;
		this.elements = [ a, b, c, d, e, f, g, h, i ];

	}

	get rows() {

		let _ = this.elements;
		return [
			[ _[ 0 ], _[ 1 ], _[ 2 ] ],
			[ _[ 3 ], _[ 4 ], _[ 5 ] ],
			[ _[ 6 ], _[ 7 ], _[ 8 ] ]
		];

	}

	get columns() {

		let _ = this.elements;
		return [
			[ _[ 0 ], _[ 3 ], _[ 6 ] ],
			[ _[ 1 ], _[ 4 ], _[ 7 ] ],
			[ _[ 2 ], _[ 5 ], _[ 8 ] ]
		];

	}

	get mainDiagonal() {

		let _ = this.elements;
		return [ _[ 0 ], _[ 4 ], _[ 8 ] ];

	}

	clone() {

		return new this.constructor( ...this.elements );

	}

	equals( matrix ) {

		let mSize = matrix.size;

		if ( mSize.rows !== 3 || mSize.columns !== 3 ) return false;

		let _ = this.elements;
		let m = matrix.elements;

		return _[ 0 ] === m[ 0 ] && _[ 1 ] === m[ 1 ] && _[ 2 ] === m[ 2 ]
			&& _[ 3 ] === m[ 3 ] && _[ 4 ] === m[ 4 ] && _[ 5 ] === m[ 5 ]
			&& _[ 6 ] === m[ 6 ] && _[ 7 ] === m[ 7 ] && _[ 8 ] === m[ 8 ];

	}

	entry( i, j ) {

		return this.elements[ i * 3 + j - 4 ];

	}

	row( r ) {

		let _ = this.elements;

		switch ( r ) {

			case 1:
				return [ _[ 0 ], _[ 1 ], _[ 2 ] ];
			case 2:
				return [ _[ 3 ], _[ 4 ], _[ 5 ] ];
			case 3:
				return [ _[ 6 ], _[ 7 ], _[ 8 ] ];
			default:
				return undefined;

		}

	}

	column( c ) {

		let _ = this.elements;

		switch ( c ) {

			case 1:
				return [ _[ 0 ], _[ 3 ], _[ 6 ] ];
			case 2:
				return [ _[ 1 ], _[ 4 ], _[ 7 ] ];
			case 3:
				return [ _[ 2 ], _[ 5 ], _[ 8 ] ];
			default:
				return undefined;

		}

	}

	leadingCoefficient( r ) {

		let _ = this.elements;

		switch ( r ) {

			case 1:
				return _[ 0 ] !== 0 ? _[ 0 ] : ( _[ 1 ] !== 0 ? _[ 1 ] : ( _[ 2 ] !== 0 ? _[ 2 ] : undefined ) );
			case 2:
				return _[ 3 ] !== 0 ? _[ 3 ] : ( _[ 4 ] !== 0 ? _[ 4 ] : ( _[ 5 ] !== 0 ? _[ 5 ] : undefined ) );
			case 3:
				return _[ 6 ] !== 0 ? _[ 6 ] : ( _[ 7 ] !== 0 ? _[ 7 ] : ( _[ 8 ] !== 0 ? _[ 8 ] : undefined ) );
			default:
				return undefined;

		}

	}

	forEach( callback, thisArg ) {

		let _ = this.elements;
		let boundCallback = callback.bind( thisArg );

		boundCallback( _[ 0 ], 1, 1, 0, this );
		boundCallback( _[ 1 ], 1, 2, 1, this );
		boundCallback( _[ 2 ], 1, 3, 2, this );
		boundCallback( _[ 3 ], 2, 1, 3, this );
		boundCallback( _[ 4 ], 2, 2, 4, this );
		boundCallback( _[ 5 ], 2, 3, 5, this );
		boundCallback( _[ 6 ], 3, 1, 6, this );
		boundCallback( _[ 7 ], 3, 2, 7, this );
		boundCallback( _[ 8 ], 3, 3, 8, this );

	}

	forEachRow( callback, thisArg ) {

		let _ = this.elements;
		let boundCallback = callback.bind( thisArg );

		boundCallback( [ _[ 0 ], _[ 1 ], _[ 2 ] ], 1, this );
		boundCallback( [ _[ 3 ], _[ 4 ], _[ 5 ] ], 2, this );
		boundCallback( [ _[ 6 ], _[ 7 ], _[ 8 ] ], 3, this );

	}

	forEachColumn( callback, thisArg ) {

		let _ = this.elements;
		let boundCallback = callback.bind( thisArg );

		boundCallback( [ _[ 0 ], _[ 3 ], _[ 6 ] ], 1, this );
		boundCallback( [ _[ 1 ], _[ 4 ], _[ 7 ] ], 2, this );
		boundCallback( [ _[ 2 ], _[ 5 ], _[ 8 ] ], 3, this );

	}

	interchargeRows( r, s ) {

		let _ = this.elements;

		switch ( r + s ) {

			case 3: // Intercharge row 1 and row 2
				[ _[ 0 ], _[ 3 ] ] = [ _[ 3 ], _[ 0 ] ];
				[ _[ 1 ], _[ 4 ] ] = [ _[ 4 ], _[ 1 ] ];
				[ _[ 2 ], _[ 5 ] ] = [ _[ 5 ], _[ 2 ] ];

				return this;
			case 4: // Intercharge row 1 and row 3
				[ _[ 0 ], _[ 6 ] ] = [ _[ 6 ], _[ 0 ] ];
				[ _[ 1 ], _[ 7 ] ] = [ _[ 7 ], _[ 1 ] ];
				[ _[ 2 ], _[ 8 ] ] = [ _[ 8 ], _[ 2 ] ];

				return this;
			case 5: // Intercharge row 2 and row 3
				[ _[ 3 ], _[ 6 ] ] = [ _[ 6 ], _[ 3 ] ];
				[ _[ 4 ], _[ 7 ] ] = [ _[ 7 ], _[ 4 ] ];
				[ _[ 5 ], _[ 8 ] ] = [ _[ 8 ], _[ 5 ] ];

				return this;
			default:
				return this;

		}

	}

	multiplyRowByScalar( r, k ) {

		let _ = this.elements;

		switch ( r ) {

			case 1:
				_[ 0 ] *= k; _[ 1 ] *= k; _[ 2 ] *= k;
				return this;
			case 2:
				_[ 3 ] *= k; _[ 4 ] *= k; _[ 5 ] *= k;
				return this;
			case 3:
				_[ 6 ] *= k; _[ 7 ] *= k; _[ 8 ] *= k;
				return this;
			default:
				return this;

		}

	}

	addRowTimesScalarToRow( r, s, k = 1 ) {

		let _ = this.elements;

		let rStart = r * 3 - 3;
		let sStart = s * 3 - 3;

		_[ rStart ] += ( _[ sStart ] * k );
		_[ rStart + 1 ] += ( _[ sStart + 1 ] * k );
		_[ rStart + 2 ] += ( _[ sStart + 2 ] * k );

		return this;

	}

	transpose() {

		let _ = this.elements;

		[ _[ 1 ], _[ 3 ] ] = [ _[ 3 ], _[ 1 ] ];
		[ _[ 2 ], _[ 6 ] ] = [ _[ 6 ], _[ 2 ] ];
		[ _[ 5 ], _[ 7 ] ] = [ _[ 7 ], _[ 5 ] ];

		return this;

	}

	multiplyScalar( k ) {

		let _ = this.elements;

		_[ 0 ] *= k; _[ 1 ] *= k; _[ 2 ] *= k;
		_[ 3 ] *= k; _[ 4 ] *= k; _[ 5 ] *= k;
		_[ 6 ] *= k; _[ 7 ] *= k; _[ 8 ] *= k;

		return this;

	}

	negate() {

		return this.multiplyScalar( - 1 );

	}

	add( matrix ) {

		let _ = this.elements;
		let m = matrix.elements;

		_[ 0 ] += m[ 0 ]; _[ 1 ] += m[ 1 ]; _[ 2 ] += m[ 2 ];
		_[ 3 ] += m[ 3 ]; _[ 4 ] += m[ 4 ]; _[ 5 ] += m[ 5 ];
		_[ 6 ] += m[ 6 ]; _[ 7 ] += m[ 7 ]; _[ 8 ] += m[ 8 ];

		return this;

	}

	sub( matrix ) {

		let _ = this.elements;
		let m = matrix.elements;

		_[ 0 ] -= m[ 0 ]; _[ 1 ] -= m[ 1 ]; _[ 2 ] -= m[ 2 ];
		_[ 3 ] -= m[ 3 ]; _[ 4 ] -= m[ 4 ]; _[ 5 ] -= m[ 5 ];
		_[ 6 ] -= m[ 6 ]; _[ 7 ] -= m[ 7 ]; _[ 8 ] -= m[ 8 ];

		return this;

	}

	/**
	 * Multiplies this matrix by another 3 x 3 matrix.
	 *
	 * @param {matrix} matrix The 3 x 3 matrix to post-multiply this matrix to.
	 * @returns {Matrix3} This matrix
	 */
	multiply( matrix ) {

		let _ = this.elements;
		let m = matrix.elements;

		let _11 = _[ 0 ], _12 = _[ 1 ], _13 = _[ 2 ],
			_21 = _[ 3 ], _22 = _[ 4 ], _23 = _[ 5 ],
			_31 = _[ 6 ], _32 = _[ 7 ], _33 = _[ 8 ];

		let m11 = m[ 0 ], m12 = m[ 1 ], m13 = m[ 2 ],
			m21 = m[ 3 ], m22 = m[ 4 ], m23 = m[ 5 ],
			m31 = m[ 6 ], m32 = m[ 7 ], m33 = m[ 8 ];

		_[ 0 ] = _11 * m11 + _12 * m21 + _13 * m31;
		_[ 1 ] = _11 * m12 + _12 * m22 + _13 * m32;
		_[ 2 ] = _11 * m13 + _12 * m23 + _13 * m33;
		_[ 3 ] = _21 * m11 + _22 * m21 + _23 * m31;
		_[ 4 ] = _21 * m12 + _22 * m22 + _23 * m32;
		_[ 5 ] = _21 * m13 + _22 * m23 + _23 * m33;
		_[ 6 ] = _31 * m11 + _32 * m21 + _33 * m31;
		_[ 7 ] = _31 * m12 + _32 * m22 + _33 * m32;
		_[ 8 ] = _31 * m13 + _32 * m23 + _33 * m33;

		return this;

	}

}

/**
 * @module Matrix4
 * @author Nguyen Hoang Duong / <novakcgx@protonmail.com>
 * @description
 *
 * Contains the {@link module:Matrix4~Matrix4} class, which encodes 4 x 4
 * matrices in linear algebra.
 */

/**
 * Encodes 4 x 4 matrices.
 *
 * @see {@link module:Matrix~Matrix} for common properties
 */
class Matrix4 {

	/**
	 * All parameters are optional and default to 0.
	 *
	 * @param {number} a The (1, 1)-entry of the new 4 x 4 matrix
	 * @param {number} b The (1, 2)-entry
	 * @param {number} c The (1, 3)-entry
	 * @param {number} d The (1, 4)-entry
	 * @param {number} e The (2, 1)-entry
	 * @param {number} f The (2, 2)-entry
	 * @param {number} g The (2, 3)-entry
	 * @param {number} h The (2, 4)-entry
	 * @param {number} i The (3, 1)-entry
	 * @param {number} j The (3, 2)-entry
	 * @param {number} k The (3, 3)-entry
	 * @param {number} l The (3, 4)-entry
	 * @param {number} m The (4, 1)-entry
	 * @param {number} n The (4, 2)-entry
	 * @param {number} o The (4, 3)-entry
	 * @param {number} p The (4, 4)-entry
	 */
	constructor(
		a = 0, b = 0, c = 0, d = 0,
		e = 0, f = 0, g = 0, h = 0,
		i = 0, j = 0, k = 0, l = 0,
		m = 0, n = 0, o = 0, p = 0
	) {

		this.size = { rows: 4, columns: 4 };
		this.numberOfEntries = 16;
		this.elements = [ a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p ];

	}

	get rows() {

		let _ = this.elements;
		return [
			[ _[ 0 ], _[ 1 ], _[ 2 ], _[ 3 ] ],
			[ _[ 4 ], _[ 5 ], _[ 6 ], _[ 7 ] ],
			[ _[ 8 ], _[ 9 ], _[ 10 ], _[ 11 ] ],
			[ _[ 12 ], _[ 13 ], _[ 14 ], _[ 15 ] ]
		];

	}

	get columns() {

		let _ = this.elements;
		return [
			[ _[ 0 ], _[ 4 ], _[ 8 ], _[ 12 ] ],
			[ _[ 1 ], _[ 5 ], _[ 9 ], _[ 13 ] ],
			[ _[ 2 ], _[ 6 ], _[ 10 ], _[ 14 ] ],
			[ _[ 3 ], _[ 7 ], _[ 11 ], _[ 15 ] ]
		];

	}

	get mainDiagonal() {

		let _ = this.elements;
		return [ _[ 0 ], _[ 5 ], _[ 10 ], _[ 15 ] ];

	}

	clone() {

		return new this.constructor( ...this.elements );

	}

	equals( matrix ) {

		let mSize = matrix.size;

		if ( mSize.rows !== 4 || mSize.columns !== 4 ) return false;

		let _ = this.elements;
		let m = matrix.elements;

		return _[ 0 ] === m[ 0 ] && _[ 1 ] === m[ 1 ] && _[ 2 ] === m[ 2 ] && _[ 3 ] === m[ 3 ]
			&& _[ 4 ] === m[ 4 ] && _[ 5 ] === m[ 5 ] && _[ 6 ] === m[ 6 ] && _[ 7 ] === m[ 7 ]
			&& _[ 8 ] === m[ 8 ] && _[ 9 ] === m[ 9 ] && _[ 10 ] === m[ 10 ] && _[ 11 ] === m[ 11 ]
			&& _[ 12 ] === m[ 12 ] && _[ 13 ] === m[ 13 ] && _[ 14 ] === m[ 14 ] && _[ 15 ] === m[ 15 ];

	}

	entry( i, j ) {

		return this.elements[ i * 4 + j - 5 ];

	}

	row( r ) {

		let _ = this.elements;

		switch ( r ) {

			case 1:
				return [ _[ 0 ], _[ 1 ], _[ 2 ], _[ 3 ] ];
			case 2:
				return [ _[ 4 ], _[ 5 ], _[ 6 ], _[ 7 ] ];
			case 3:
				return [ _[ 8 ], _[ 9 ], _[ 10 ], _[ 11 ] ];
			case 4:
				return [ _[ 12 ], _[ 13 ], _[ 14 ], _[ 15 ] ];

		}

	}

	column( c ) {

		let _ = this.elements;

		switch ( c ) {

			case 1:
				return [ _[ 0 ], _[ 4 ], _[ 8 ], _[ 12 ] ];
			case 2:
				return [ _[ 1 ], _[ 5 ], _[ 9 ], _[ 13 ] ];
			case 3:
				return [ _[ 2 ], _[ 6 ], _[ 10 ], _[ 14 ] ];
			case 4:
				return [ _[ 3 ], _[ 7 ], _[ 11 ], _[ 15 ] ];

		}

	}

	leadingCoefficient( r ) {

		let _ = this.elements;
		let row;

		switch ( r ) {

			case 1:
				row = [ _[ 0 ], _[ 1 ], _[ 2 ], _[ 3 ] ];
				break;
			case 2:
				row = [ _[ 4 ], _[ 5 ], _[ 6 ], _[ 7 ] ];
				break;
			case 3:
				row = [ _[ 8 ], _[ 9 ], _[ 10 ], _[ 11 ] ];
				break;
			case 4:
				row = [ _[ 12 ], _[ 13 ], _[ 14 ], _[ 15 ] ];
				break;
			default:
				return undefined;

		}

		return row.find( ( n ) => n !== 0 );

	}

	forEach( callback, thisArg ) {

		let _ = this.elements;
		let boundCallback = callback.bind( thisArg );

		boundCallback( _[ 0 ], 1, 1, 0, this );
		boundCallback( _[ 1 ], 1, 2, 1, this );
		boundCallback( _[ 2 ], 1, 3, 2, this );
		boundCallback( _[ 3 ], 1, 4, 3, this );
		boundCallback( _[ 4 ], 2, 1, 4, this );
		boundCallback( _[ 5 ], 2, 2, 5, this );
		boundCallback( _[ 6 ], 2, 3, 6, this );
		boundCallback( _[ 7 ], 2, 4, 7, this );
		boundCallback( _[ 8 ], 3, 1, 8, this );
		boundCallback( _[ 9 ], 3, 2, 9, this );
		boundCallback( _[ 10 ], 3, 3, 10, this );
		boundCallback( _[ 11 ], 3, 4, 11, this );
		boundCallback( _[ 12 ], 4, 1, 12, this );
		boundCallback( _[ 13 ], 4, 2, 13, this );
		boundCallback( _[ 14 ], 4, 3, 14, this );
		boundCallback( _[ 15 ], 4, 4, 15, this );

	}

	forEachRow( callback, thisArg ) {

		let _ = this.elements;
		let boundCallback = callback.bind( thisArg );

		boundCallback( [ _[ 0 ], _[ 1 ], _[ 2 ], _[ 3 ] ], 1, this );
		boundCallback( [ _[ 4 ], _[ 5 ], _[ 6 ], _[ 7 ] ], 2, this );
		boundCallback( [ _[ 8 ], _[ 9 ], _[ 10 ], _[ 11 ] ], 3, this );
		boundCallback( [ _[ 12 ], _[ 13 ], _[ 14 ], _[ 15 ] ], 4, this );

	}

	forEachColumn( callback, thisArg ) {

		let _ = this.elements;
		let boundCallback = callback.bind( thisArg );

		boundCallback( [ _[ 0 ], _[ 4 ], _[ 8 ], _[ 12 ] ], 1, this );
		boundCallback( [ _[ 1 ], _[ 5 ], _[ 9 ], _[ 13 ] ], 2, this );
		boundCallback( [ _[ 2 ], _[ 6 ], _[ 10 ], _[ 14 ] ], 3, this );
		boundCallback( [ _[ 3 ], _[ 7 ], _[ 11 ], _[ 15 ] ], 4, this );

	}

	interchargeRows( r, s ) {

		let _ = this.elements;
		let p = r * 4 - 4;
		let q = s * 4 - 4;

		for ( let c = 0; c < 4; c ++ ) {

			[ _[ p ++ ], _[ q ++ ] ] = [ _[ q ], _[ p ] ];

		}

		return this;

	}

	multiplyRowByScalar( r, k ) {

		let _ = this.elements;

		switch ( r ) {

			case 1:
				_[ 0 ] *= k; _[ 1 ] *= k; _[ 2 ] *= k; _[ 3 ] *= k;
				return this;
			case 2:
				_[ 4 ] *= k; _[ 5 ] *= k; _[ 6 ] *= k; _[ 7 ] *= k;
				return this;
			case 3:
				_[ 8 ] *= k; _[ 9 ] *= k; _[ 10 ] *= k; _[ 11 ] *= k;
				return this;
			case 4:
				_[ 12 ] *= k; _[ 13 ] *= k; _[ 14 ] *= k; _[ 15 ] *= k;
				return this;
			default:
				return this;

		}

	}

	addRowTimesScalarToRow( r, s, k = 1 ) {

		let _ = this.elements;

		let rStart = r * 4 - 4;
		let sStart = s * 4 - 4;

		_[ rStart ] += ( _[ sStart ] * k );
		_[ rStart + 1 ] += ( _[ sStart + 1 ] * k );
		_[ rStart + 2 ] += ( _[ sStart + 2 ] * k );
		_[ rStart + 3 ] += ( _[ sStart + 3 ] * k );

		return this;

	}

	transpose() {

		let _ = this.elements;

		[ _[ 1 ], _[ 4 ] ] = [ _[ 4 ], _[ 1 ] ];
		[ _[ 2 ], _[ 8 ] ] = [ _[ 8 ], _[ 2 ] ];
		[ _[ 3 ], _[ 12 ] ] = [ _[ 12 ], _[ 3 ] ];
		[ _[ 6 ], _[ 9 ] ] = [ _[ 9 ], _[ 6 ] ];
		[ _[ 7 ], _[ 13 ] ] = [ _[ 13 ], _[ 7 ] ];
		[ _[ 11 ], _[ 14 ] ] = [ _[ 14 ], _[ 11 ] ];

		return this;

	}

	multiplyScalar( k ) {

		let _ = this.elements;

		_[ 0 ] *= k; _[ 1 ] *= k; _[ 2 ] *= k; _[ 3 ] *= k;
		_[ 4 ] *= k; _[ 5 ] *= k; _[ 6 ] *= k; _[ 7 ] *= k;
		_[ 8 ] *= k; _[ 9 ] *= k; _[ 10 ] *= k; _[ 11 ] *= k;
		_[ 12 ] *= k; _[ 13 ] *= k; _[ 14 ] *= k; _[ 15 ] *= k;

		return this;

	}

	negate() {

		return this.multiplyScalar( - 1 );

	}

	add( matrix ) {

		let _ = this.elements;
		let m = matrix.elements;

		_[ 0 ] += m[ 0 ]; _[ 1 ] += m[ 1 ]; _[ 2 ] += m[ 2 ]; _[ 3 ] += m[ 3 ];
		_[ 4 ] += m[ 4 ]; _[ 5 ] += m[ 5 ]; _[ 6 ] += m[ 6 ]; _[ 7 ] += m[ 7 ];
		_[ 8 ] += m[ 8 ]; _[ 9 ] += m[ 9 ]; _[ 10 ] += m[ 10 ]; _[ 11 ] += m[ 11 ];
		_[ 12 ] += m[ 12 ]; _[ 13 ] += m[ 13 ]; _[ 14 ] += m[ 14 ]; _[ 15 ] += m[ 15 ];

		return this;

	}

	sub( matrix ) {

		let _ = this.elements;
		let m = matrix.elements;

		_[ 0 ] -= m[ 0 ]; _[ 1 ] -= m[ 1 ]; _[ 2 ] -= m[ 2 ]; _[ 3 ] -= m[ 3 ];
		_[ 4 ] -= m[ 4 ]; _[ 5 ] -= m[ 5 ]; _[ 6 ] -= m[ 6 ]; _[ 7 ] -= m[ 7 ];
		_[ 8 ] -= m[ 8 ]; _[ 9 ] -= m[ 9 ]; _[ 10 ] -= m[ 10 ]; _[ 11 ] -= m[ 11 ];
		_[ 12 ] -= m[ 12 ]; _[ 13 ] -= m[ 13 ]; _[ 14 ] -= m[ 14 ]; _[ 15 ] -= m[ 15 ];

		return this;

	}

	/**
	 * Multiplies this matrix by another 4 x 4 matrix.
	 *
	 * @param {matrix} matrix The 4 x 4 matrix to post-multiply this matrix to.
	 * @returns {Matrix4} This matrix
	 */
	multiply( matrix ) {

		let _ = this.elements;
		let m = matrix.elements;

		let _11 = _[ 0 ], _12 = _[ 1 ], _13 = _[ 2 ], _14 = _[ 3 ],
		    _21 = _[ 4 ], _22 = _[ 5 ], _23 = _[ 6 ], _24 = _[ 7 ],
			_31 = _[ 8 ], _32 = _[ 9 ], _33 = _[ 10 ], _34 = _[ 11 ],
			_41 = _[ 12 ], _42 = _[ 13 ], _43 = _[ 14 ], _44 = _[ 15 ];

		let m11 = m[ 0 ], m12 = m[ 1 ], m13 = m[ 2 ], m14 = m[ 3 ],
		    m21 = m[ 4 ], m22 = m[ 5 ], m23 = m[ 6 ], m24 = m[ 7 ],
			m31 = m[ 8 ], m32 = m[ 9 ], m33 = m[ 10 ], m34 = m[ 11 ],
			m41 = m[ 12 ], m42 = m[ 13 ], m43 = m[ 14 ], m44 = m[ 15 ];

		_[ 0 ] = _11 * m11 + _12 * m21 + _13 * m31 + _14 * m41;
		_[ 1 ] = _11 * m12 + _12 * m22 + _13 * m32 + _14 * m42;
		_[ 2 ] = _11 * m13 + _12 * m23 + _13 * m33 + _14 * m43;
		_[ 3 ] = _11 * m14 + _12 * m24 + _13 * m34 + _14 * m44;
		_[ 4 ] = _21 * m11 + _22 * m21 + _23 * m31 + _24 * m41;
		_[ 5 ] = _21 * m12 + _22 * m22 + _23 * m32 + _24 * m42;
		_[ 6 ] = _21 * m13 + _22 * m23 + _23 * m33 + _24 * m43;
		_[ 7 ] = _21 * m14 + _22 * m24 + _23 * m34 + _24 * m44;
		_[ 8 ] = _31 * m11 + _32 * m21 + _33 * m31 + _34 * m41;
		_[ 9 ] = _31 * m12 + _32 * m22 + _33 * m32 + _34 * m42;
		_[ 10 ] = _31 * m13 + _32 * m23 + _33 * m33 + _34 * m43;
		_[ 11 ] = _31 * m14 + _32 * m24 + _33 * m34 + _34 * m44;
		_[ 12 ] = _41 * m11 + _42 * m21 + _43 * m31 + _44 * m41;
		_[ 13 ] = _41 * m12 + _42 * m22 + _43 * m32 + _44 * m42;
		_[ 14 ] = _41 * m13 + _42 * m23 + _43 * m33 + _44 * m43;
		_[ 15 ] = _41 * m14 + _42 * m24 + _43 * m34 + _44 * m44;

		return this;

	}

}

/**
 * @module SquareMatrix
 * @author Nguyen Hoang Duong / <novakcgx@protonmail.com>
 * @description
 *
 * Contains the {@link module:SquareMatrix~SquareMatrix} class, which is similar
 * to the {@link module:Matrix~Matrix} class but only encodes square matrices.
 *
 */

/**
 * Encodes square matrices.
 *
 * @augments module:Matrix~Matrix
 */
class SquareMatrix extends Matrix {

	/**
	 * Constructs a `SquareMatrix` instance.
	 *
	 * `entries` is optional. If not given, the constructor will create a zero
	 * square matrix.
	 *
	 * @param {number} size The number of rows (or columns) for the new matrix.
	 * @param {number[]} entries The entries in row-major order for the new matrix.
	 */
	constructor( size, entries ) {

		super( size, size, entries );

	}

	/**
	 * Makes this square matrix an identity matrix.
	 *
	 * @returns {SquareMatrix} This matrix
	 */
	identity() {

		let _size = this.size.rows;
		let __size = _size + 1;

		this.elements = new Array( _size * _size ).fill( 0 );
		for ( let i = 0; i < _size; i ++ ) this.elements[ __size * i ] = 1;

		return this;

	}

}

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
		let iT = 1, jT = 2;

		for ( let index = 1; index < __n; index ++ ) {

			// Cate & Twigg's inverse permutation, 1977
			let entry = _[ ( index * _nCols ) % __n ];
			boundCallback( entry, iT, jT, index, transpose, matrix );
 jT ++;
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

/**
 * @module Vector
 * @author Nguyen Hoang Duong / <novakcgx@protonmail.com>
 * @description
 *
 * Contains the {@link module:Vector~Vector} class, which encodes vector
 * quantities of any number of entries in linear algebra.
 */

/**
 * Encodes vectors and vector operations. Compatible for use with matrices (e.g.
 * for matrix-vector multiplications).
 *
 * For optimal performance, use {@link module:Vector2~Vector2},
 * {@link module:Vector3~Vector3}, {@link module:Vector4~Vector4} if possible.
 */
class Vector {

	/**
	 * Constructs a new `Vector` instance, which encodes a vector and its
	 * operations.
	 *
	 * @param {number[]} entries Entries of the new vector.
	 */
	constructor( entries ) {

		/**
		 * @member {number[]}
		 * @description Stores the entries of this vector in order.
		 */
		this.elements = entries;

		/**
		 * @member {object}
		 * @description Contains the dimensions of this vector as an object in the
		 * form `{ rows, columns }`. Serve for compatibility with matrix classes.
		 */
		this.size = { rows: entries.length, columns: 1 };

		/**
		 * @member {number}
		 * @description The number of entries in this vector.
		 */
		this.numberOfEntries = entries.length;

	}

	/**
	 * Creates and returns a clone of this vector instance.
	 *
	 * @returns {Vector} A clone of this vector
	 */
	clone() {

		return new this.constructor( this.elements.slice() );

	}

	/**
	 * Checks if this vector and another vector are equal.
	 *
	 * @param {Vector} vector The vector to compare this vector to.
	 * @returns {boolean} `true` if the two vectors are equal, `false` otherwise
	 */
	equals( vector ) {

		let _n = this.numberOfEntries;

		if ( _n !== vector.numberOfEntries ) return false;

		let _ = this.elements;
		let v = vector.elements;

		for ( let i = 0; i < _n; i ++ ) if ( _[ i ] !== v[ i ] ) return false;

		return true;

	}

	/**
	 * Multiplies this vector by a scalar.
	 *
	 * @param {number} k The scalar to multiply this vector by.
	 * @returns {Vector} This vector
	 */
	multiplyScalar( k ) {

		let _ = this.elements;

		for ( let i = 0, _n = this.numberOfEntries; i < _n; i ++ ) _[ i ] *= k;

		return this;

	}

	/**
	 * Multiplies this vector by -1.
	 *
	 * @returns {Vector} This vector
	 */
	negate() {

		return this.multiplyScalar( - 1 );

	}

	/**
	 * Adds a vector to this vector.
	 *
	 * @param {Vector} vector The vector to add to this vector.
	 * @returns {Vector} This vector
	 */
	add( vector ) {

		let _n = this.numberOfEntries;

		if ( _n !== vector.numberOfEntries ) {

			console.error( "Incompatible vectors for addition" );
			return this;

		}

		let _ = this.elements;
		let v = vector.elements;

		for ( let i = 0; i < _n; i ++ ) _[ i ] += v[ i ];

		return this;

	}

	/**
	 * Subtracts a vector from this vector.
	 *
	 * @param {Vector} vector The vector to subtract this vector to.
	 * @returns {Vector} This vector
	 */
	subtract( vector ) {

		let _n = this.numberOfEntries;

		if ( _n !== vector.numberOfEntries ) {

			console.error( "Incompatible vectors for substraction" );
			return this;

		}

		let _ = this.elements;
		let v = vector.elements;

		for ( let i = 0; i < _n; i ++ ) _[ i ] -= v[ i ];

		return this;

	}

	/**
	 * Returns the dot product of this vector and another vector.
	 *
	 * @param {Vector} vector The vector to perform a dot product with this vector.
	 * @returns {Vector} The dot product of this vector and the given vector
	 */
	dot( vector ) {

		if ( this.numberOfEntries !== vector.numberOfEntries ) {

			console.error( "Incompatible vectors for dot product" );
			return undefined;

		}

		let _ = this.elements;
		let v = vector.elements;

		return _.reduce( ( result, value, i ) => result + value * v[ i ], 0 );

	}

}

/**
 * @module Vector2
 * @author Nguyen Hoang Duong / <novakcgx@protonmail.com>
 * @description
 *
 * Contains the {@link module:Vector2~Vector2} class, which encodes 2-vectors.
 */

/**
 * Encodes 2-vectors, which are vectors that have 2 entries. See also
 * {@link module:Vector3~Vector3} & {@link module:Vector4~Vector4}.
 *
 * @see {@link module:Vector~Vector} for common properties
 */
class Vector2 {

	constructor( x = 0, y = 0 ) {

		this.x = x;
		this.y = y;
		this.elements = [ x, y ];
		this.size = { rows: 2, columns: 1 };
		this.numberOfEntries = 2;

	}

	clone() {

		return new this.constructor( this.x, this.y );

	}

	equals( vector ) {

		let _ = this.elements;
		let v = vector.elements;

		return this.numberOfEntries === vector.numberOfEntries
			&& _[ 0 ] === v[ 0 ] && _[ 1 ] === v[ 1 ];

	}

	multiplyScalar( k ) {

		let _ = this.elements;

		_[ 0 ] *= k; this.x = _[ 0 ];
		_[ 1 ] *= k; this.y = _[ 1 ];

		return this;

	}

	negate() {

		return this.multiplyScalar( - 1 );

	}

	add( vector ) {

		let _ = this.elements;
		let v = vector.elements;

		_[ 0 ] += v[ 0 ]; this.x = _[ 0 ];
		_[ 1 ] += v[ 1 ]; this.y = _[ 1 ];

		return this;

	}

	subtract( vector ) {

		let _ = this.elements;
		let v = vector.elements;

		_[ 0 ] -= v[ 0 ]; this.x = _[ 0 ];
		_[ 1 ] -= v[ 1 ]; this.y = _[ 1 ];

		return this;

	}

	dot( vector ) {

		let _ = this.elements;
		let v = vector.elements;

		return _[ 0 ] * v[ 0 ] + _[ 1 ] * v[ 1 ];

	}

}

/**
 * @module Vector3
 * @author Nguyen Hoang Duong / <novakcgx@protonmail.com>
 * @description
 *
 * Contains the {@link module:Vector3~Vector3} class, which encodes 3-vectors.
 */

/**
 * Encodes 3-vectors, which are vectors that have 3 entries. Has all the class
 * methods of {@link module:Vector~Vector} plus a method for computing cross
 * products. See also {@link module:Vector2~Vector2} &
 * {@link module:Vector4~Vector4}.
 *
 * @see {@link module:Vector~Vector} for common properties
 */
class Vector3 {

	constructor( x = 0, y = 0, z = 0 ) {

		this.x = x;
		this.y = y;
		this.z = z;
		this.elements = [ x, y, z ];
		this.size = { rows: 3, columns: 1 };
		this.numberOfEntries = 3;

	}

	clone() {

		return new this.constructor( this.x, this.y, this.z );

	}

	equals( vector ) {

		let _ = this.elements;
		let v = vector.elements;

		return this.numberOfEntries === vector.numberOfEntries
			&& _[ 0 ] === v[ 0 ] && _[ 1 ] === v[ 1 ] && _[ 2 ] === v[ 2 ];

	}

	multiplyScalar( k ) {

		let _ = this.elements;

		_[ 0 ] *= k; this.x = _[ 0 ];
		_[ 1 ] *= k; this.y = _[ 1 ];
		_[ 2 ] *= k; this.z = _[ 2 ];

		return this;

	}

	negate() {

		return this.multiplyScalar( - 1 );

	}

	add( vector ) {

		let _ = this.elements;
		let v = vector.elements;

		_[ 0 ] += v[ 0 ]; this.x = _[ 0 ];
		_[ 1 ] += v[ 1 ]; this.y = _[ 1 ];
		_[ 2 ] += v[ 2 ]; this.z = _[ 2 ];

		return this;

	}

	subtract( vector ) {

		let _ = this.elements;
		let v = vector.elements;

		_[ 0 ] -= v[ 0 ]; this.x = _[ 0 ];
		_[ 1 ] -= v[ 1 ]; this.y = _[ 1 ];
		_[ 2 ] -= v[ 2 ]; this.z = _[ 2 ];

		return this;

	}

	dot( vector ) {

		let _ = this.elements;
		let v = vector.elements;

		return _[ 0 ] * v[ 0 ] + _[ 1 ] * v[ 1 ] + _[ 2 ] * v[ 2 ];

	}

	/**
	 * Returns the cross product of this 3-vector and another 3-vector. This
	 * vector remains intact.
	 *
	 * @param {Vector3} vector The vector to perform a cross product with.
	 * @returns {Vector3} The cross product of the 2 vectors
	 */
	cross( vector ) {

		let _ = this.elements;
		let v = vector.elements;

		return new this.constructor(
			_[ 1 ] * v[ 2 ] - _[ 2 ] * v[ 1 ],
			_[ 2 ] * v[ 0 ] - _[ 0 ] * v[ 2 ],
			_[ 0 ] * v[ 1 ] - _[ 1 ] * v[ 0 ]
		);

	}

}

/**
 * @module Vector4
 * @author Nguyen Hoang Duong / <novakcgx@protonmail.com>
 * @description
 *
 * Contains the {@link module:Vector4~Vector4} class, which encodes 4-vectors.
 */

/**
 * Encodes 4-vectors, which are vectors that have 4 entries. See also
 * {@link module:Vector2~Vector2} & {@link module:Vector3~Vector3}.
 *
 * @see {@link module:Vector~Vector} for common properties
 */
class Vector4 {

	constructor( x = 0, y = 0, z = 0, w = 0 ) {

		this.x = x;
		this.y = y;
		this.z = z;
		this.w = w;
		this.elements = [ x, y, z, w ];
		this.size = { rows: 4, columns: 1 };
		this.numberOfEntries = 4;

	}

	clone() {

		return new this.constructor( this.x, this.y, this.z, this.w );

	}

	equals( vector ) {

		let _ = this.elements;
		let v = vector.elements;

		return this.numberOfEntries === vector.numberOfEntries
			&& _[ 0 ] === v[ 0 ] && _[ 1 ] === v[ 1 ] && _[ 2 ] === v[ 2 ] && _[ 3 ] === v[ 3 ];

	}

	multiplyScalar( k ) {

		let _ = this.elements;

		_[ 0 ] *= k; this.x = _[ 0 ];
		_[ 1 ] *= k; this.y = _[ 1 ];
		_[ 2 ] *= k; this.z = _[ 2 ];
		_[ 3 ] *= k; this.w = _[ 3 ];

		return this;

	}

	negate() {

		return this.multiplyScalar( - 1 );

	}

	add( vector ) {

		let _ = this.elements;
		let v = vector.elements;

		_[ 0 ] += v[ 0 ]; this.x = _[ 0 ];
		_[ 1 ] += v[ 1 ]; this.y = _[ 1 ];
		_[ 2 ] += v[ 2 ]; this.z = _[ 2 ];
		_[ 3 ] += v[ 3 ]; this.w = _[ 3 ];

		return this;

	}

	subtract( vector ) {

		let _ = this.elements;
		let v = vector.elements;

		_[ 0 ] -= v[ 0 ]; this.x = _[ 0 ];
		_[ 1 ] -= v[ 1 ]; this.y = _[ 1 ];
		_[ 2 ] -= v[ 2 ]; this.z = _[ 2 ];
		_[ 3 ] -= v[ 3 ]; this.w = _[ 3 ];

		return this;

	}

	dot( vector ) {

		let _ = this.elements;
		let v = vector.elements;

		return _[ 0 ] * v[ 0 ] + _[ 1 ] * v[ 1 ] + _[ 2 ] * v[ 2 ] + _[ 3 ] * v[ 3 ];

	}

}

export { AugmentedMatrix, IdentityMatrix, LinearEquation, LinearEquation2, LinearEquation3, Matrix, Matrix2, Matrix3, Matrix4, MatrixTranspose, SquareMatrix, SystemOfLinearEquations, Vector, Vector2, Vector3, Vector4 };
