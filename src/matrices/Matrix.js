import { loop, sameArrays } from '../utils.js';
import { MathUtils } from '../algebra/MathUtils.js';

/**
 * @author Nguyen Hoang Duong / you_create@protonmail.com
 */

/**
 * Encodes matrices *and* their operations.
 *
 * This class encodes a matrix by storing the elements of that matrix in
 * **row-major** order. Every instance of this class is an object that has the
 * following properties:
 * - `name`: The matrix's (optional) denotation, defaults to null (no name)
 * - `size`: An object that has the following properties:
 *     - `rows`: The number of rows in the encoded matrix
 *     - `columns`: The number of columns in the encoded matrix
 * - `elements`: A JavaScript array that stores the elements of the encoded
 *   matrix in **row-major** order
 *
 * **Note**: You can freely change the value of the `name` property, but `size`
 * and `elements` should only be changed using this class's methods.
 */
class Matrix {

	/**
	 * Constructs a new `Matrix` instance.
	 *
	 * The first 2 parameters are required. This matrix begins as a zero matrix.
	 * Use `set` to set elements for this matrix.
	 *
	 * @param {number} rows The number of rows in the new matrix
	 * @param {number} columns The number of columns in the new matrix
	 * @param {string} name The denotation for the new matrix
	 */
	constructor( rows, columns, name = null ) {

		/*
		 * These are the properties that every Matrix instance has.
		 *
		 * .name: The denotation of this matrix (default: null)
		 * .size.rows: The number of rows in this matrix
		 * .size.columns: The number of columns in this matrix
		 * .elements: Row-major-ordered array of elements in this matrix
		 *
		 * On the user-end, all of these properties should not be changed
		 * directly, but using methods (except for .name).
		 */

		this.name = name;
		this.size = { rows, columns };
		this.elements = new Array( this.numberOfElements ).fill( 0 );

	}

	/**
	 * Checks if object *o* is an instance of `Matrix` or a child class of
	 * `Matrix`.
	 *
	 * Note that methods inside the `Matrix` class do not check if their
	 * parameters are valid (including matrices).
	 *
	 * Criteria for being "valid":
	 * - The constructor or the constructor's proto is `Matrix`
	 * - Has the `size` property that has
	 *     - the `rows` property being a positive integer
	 *     - the `columns` property also being a positive integer
	 * - Has the `elements` property and it is a JavaScript array of numbers
	 *   and the number of elements must equal to the product of `.size.rows`
	 *   and `.size.columns`
	 *
	 * @example
	 * Matrix.isIt( a )
	 * // -> true
	 * Matrix.isIt( 5 )
	 * // -> false
	 * Matrix.isIt( [ 1, 1, 2, 0, - 1, 7 ] )
	 * // -> false
	 * Matrix.isIt( { name: "FakeMatrix", elements: [ 1, 1, 2, 0 ] } )
	 * // -> false
	 *
	 * @param {object} o The object to check
	 * @return {boolean} `true` if *o* encodes a matrix, `false` otherwise
	 */
	static isIt( o ) {

		return [
			"Matrix",
			"ZeroMatrix",
			"IdentityMatrix",
			"SquareMatrix",
			"AugmentedMatrix"
		].indexOf( o.constructor.name ) !== - 1
		&& o.elements.every( ( e ) => Number.isFinite( e ) )
		&& o.elements.length === o.numberOfElements;

	}

	/**
	 * Multiplies matrices *m* and *n* in that order.
	 *
	 * Multiplying 2 matrices require that the number of columns in the matrix
	 * on the left must equal to the number of rows in the matrix on the right.
	 * If *m* and *n* are not valid for their multiplication, return a clone of
	 * *m*.
	 *
	 * @param {Matrix} m The matrix on the left of the multiplication
	 * @param {Matrix} n The matrix on the right of the multiplication
	 * @return {Matrix} The result of the multiplication
	 */
	static multiplyMatrices( m, n ) {

		let result = m.clone();

		if ( m.size.columns !== n.size.rows ) {

			console.warn( "Input matrices cannot be multiplied" );
			return result;

		}

		result.setDimensions( result.size.rows, n.size.columns );
		result.elements = result.elements.map( ( e, i ) => {

			return MathUtils.linearCombination(
				m.row( i + 1 ),
				n.column( Math.ceil( ( i + 1 ) / m.size.rows ) )
			);

		} );

		return result;

	}

	// GETTERS

	/**
	 * Returns the number of elements in this matrix.
	 *
	 * @return {number} The number of elements in this matrix
	 */
	get numberOfElements() {

		return this.size.rows * this.size.columns;

	}

	/**
	 * Returns the rows of this matrix in an array.
	 *
	 * @return {Array[]} The rows in this matrix
	 */
	get rows() {

		let rows = [];

		this.forEachRow( ( row ) => {

			rows.push( row );

		} );

		return rows;

	}

	/**
	 * Returns the columns of this matrix in an array.
	 *
	 * @return {Array[]} The columns in this matrix
	 */
	get columns() {

		let columns = [];

		this.forEachColumn( ( column ) => {

			columns.push( column );

		} );

		return columns;

	}

	/**
	 * @return {boolean} `true` if this matrix is in row-echelon form, `false`
	 * otherwise
	 */
	get isInRowEchelonForm() {

		// METHOD
		//
		// Iterate through each row, starting from the first row, in this
		// matrix. During each iteration, extract the *position* of the leading
		// coefficient in the particular row, and store the position in an
		// array. Finally, compare that array to its sorted version. If two
		// arrays match, this matrix is in row-echelon form.

		let leadingCoefsPos = [], leadingCoef, leadingCoefPos;

		for ( let r = 1; r <= this.size.rows; r ++ ) {

			leadingCoef = this.leadingCoefficient( r );

			if ( leadingCoef && leadingCoef !== 1 ) {

				// If the leading coefficient is not 1, this matrix is not in
				// row-echelon form.
				return false;

			}

			leadingCoefPos = ( leadingCoef ) ? this.row( r ).indexOf( leadingCoef )
											 : Infinity;

			if ( leadingCoefPos !== Infinity
				&& leadingCoefsPos.indexOf( leadingCoefPos ) !== - 1 ) {

				// If a previous row's leading coefficient has the same position
				// as this one, this matrix is not in row-echelon form because
				// of the staircase rule.
				return false;

			} else {

				leadingCoefsPos.push( leadingCoefPos );

			}

		}

		return sameArrays( leadingCoefsPos, leadingCoefsPos.slice().sort() );

	}

	/**
	 * @return {boolean} `true` if this matrix is in reduced row-echelon form,
	 * `false` otherwise
	 */
	get isInReducedRowEchelonForm() {

		let leadingCoefsPos = [], leadingCoef, leadingCoefPos;

		for ( let r = 1; r <= this.size.rows; r ++ ) {

			leadingCoef = this.leadingCoefficient( r );

			if ( leadingCoef && leadingCoef !== 1 ) {

				// If the leading coefficient is not 1, this matrix is not in
				// reduced row-echelon form.
				return false;

			}

			leadingCoefPos = ( leadingCoef ) ? this.row( r ).indexOf( leadingCoef )
											 : Infinity;

			if ( leadingCoefPos !== Infinity
				&& leadingCoefsPos.indexOf( leadingCoefPos ) !== - 1 ) {

				// If a previous row's leading coefficient has the same position
				// as this one, this matrix is not in row-echelon form because
				// of the staircase rule.
				return false;

			}

			if ( leadingCoefPos !== Infinity ) {

				// If this row has a leading coefficient, iterate through the
				// rows above this row and check if for each of those rows, the
				// entry at the position of this row's leading coefficient is 0.
				// If it is not 0, this matrix is certainly not in reduced
				// row-echelon form.

				for ( let s = 1; s < r; s ++ ) {

					if ( this.row( s )[ leadingCoefPos ] !== 0 ) {

						return false;

					}

				}

			}

			leadingCoefsPos.push( leadingCoefPos );

		}

		return sameArrays( leadingCoefsPos, leadingCoefsPos.slice().sort() );

	}

	/**
	 * Returns the rank of this matrix without reducing it in place.
	 *
	 * @return {number} The rank of this matrix
	 */
	get rank() {

		return this.clone().reduce().rows.reduce(
			( _n, row ) => (
				( row.some( ( e ) => e !== 0 ) ? _n + 1 : _n )
			), 0 );

	}

	// METHODS

	/**
	 * Makes this matrix the same as matrix *m*.
	 *
	 * @param {Matrix} m The instance to copy from
	 * @param {boolean} copyName Set to `true` to copy the denotation of *m*
	 * @return {Matrix} This matrix
	 */
	copy( m, copyName = false ) {

		this.size.rows = m.size.rows;
		this.size.columns = m.size.columns;
		this.elements = m.elements.slice();

		this.name = ( copyName ) ? m.name : this.name;

		return this;

	}

	/**
	 * Creates and returns a clone of this matrix instance.
	 *
	 * @return {Matrix} A clone of this matrix
	 */
	clone() {

		return new Matrix(
			this.size.rows,
			this.size.columns
		).copy( this, true );

	}

	/**
	 * Sets the dimensions for this matrix.
	 *
	 * Using this method will change the dimensions of this matrix and reset all
	 * elements back to 0.
	 *
	 * @param {number} rows Number of rows
	 * @param {number} columns Number of columns
	 * @return {Matrix} This matrix
	 */
	setDimensions( rows, columns ) {

		this.size = { rows, columns };
		this.elements = new Array( this.numberOfElements ).fill( 0 );

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

		if ( arguments.length !== this.numberOfElements ) {

			console.error( "Not enough arguments were provided for the elements of this matrix" );
			return this;

		}

		this.elements = Array.from( arguments ).slice();

		return this;

	}

	/**
	 * Checks if this matrix has the same size as *m*.
	 *
	 * @param {Matrix} m The matrix to check the size of this matrix against
	 * @return {boolean} `true` if the two matrices have the same size, `false`
	 * otherwise
	 */
	sameSize( m ) {

		return this.size.rows === m.size.rows && this.size.columns === m.size.columns;

	}

	/**
	 * Makes this matrix a zero matrix.
	 *
	 * @return {Matrix} This matrix
	 */
	zero() {

		return this.setDimensions( this.size.rows, this.size.columns );

	}

	/**
	 * Checks if this matrix and the given matrix *m* are equal.
	 *
	 * @param {Matrix} m The matrix to compare this matrix to
	 * @return {boolean} `true` if the two matrices are the same, `false`
	 * otherwise
	 */
	equals( m ) {

		return this.sameSize( m ) && sameArrays( this.elements, m.elements );

	}

	/**
	 * Returns the element in row *r* and column *c* in this matrix.
	 *
	 * @param {number} r The row that contains the element (1-indexed)
	 * @param {number} c The column that contains the element (1-indexed)
	 * @return {number} The element in row *r* and column *c*
	 */
	element( r, c ) {

		return this.elements[ this.elementIndex( r, c ) ];

	}

	/**
	 * Returns the 0-indexed position of the element in row *r* and column *c*
	 * within `elements`.
	 *
	 * If *r* and *c* are not within the dimensions of this matrix, returns -1.
	 *
	 * @param {number} r The row that contains the element (1-indexed)
	 * @param {number} c The column that contains the element (1-indexed)
	 * @return {number} The position of the element in `.elements` (0-indexed)
	 */
	elementIndex( r, c ) {

		if ( 1 <= r && r <= this.size.rows && 1 <= c && c <= this.size.columns ) {

			return r * this.size.columns + c - this.size.columns - 1;

		} else {

			return - 1;

		}

	}

	/**
	 * Returns a row in this matrix as a JavaScript array.
	 *
	 * @param {number} r The position of the row (1-indexed)
	 * @return {number[]} The array that contains the elements in the row
	 */
	row( r ) {

		return this.elements.slice(

			r * this.size.columns - this.size.columns,
			r * this.size.columns

		);

	}

	/**
	 * Returns a column in this matrix as a JavaScript array.
	 *
	 * @param {number} c The position of the column (1-indexed)
	 * @return {number[]} The array that contains the elements in the column
	 */
	column( c ) {

		return this.elements.filter( function ( e, i ) {

			return ( i - c + 1 ) % this.size.columns === 0;

		}, this );

	}

	/**
	 * Returns the diagonal in this matrix that contains the element in row *r*
	 * and column *c*.
	 *
	 * If *r* and *c* are not within the dimensions of this matrix, returns an
	 * empty array.
	 *
	 * @param {number} r The row that contains the element (1-indexed)
	 * @param {number} c The column that contains the element (1-indexed)
	 * @return {number[]} The diagonal that contains the element
	 */
	diagonal( r, c ) {

		let diagonal = new Array();

		if ( 1 <= r && r <= this.size.rows && 1 <= c && c <= this.size.columns ) {

			// Travel to where the first element of the diagonal is
			while ( r > 1 && c > 1 ) {

				r --;
				c --;

			}

			// Iterate through the diagonal, increasing *row* and *column* by
			// one at each iteration since that is the pattern of elements in
			// diagonals
			while ( r <= this.size.rows && c <= this.size.columns ) {

				diagonal.push( this.element( r, c ) );
				r ++;
				c ++;

			}

		}

		return diagonal.slice();

	}

	/**
	 * Returns the leading coefficient of a row
	 *
	 * @param {number} r The row to consider (1-indexed)
	 * @return {number} The leading coefficient of the row, or undefined if it
	 * does not have one
	 */
	leadingCoefficient( r ) {

		return this.row( r ).filter( ( e ) => e !== 0 )[ 0 ];

	}

	/**
	 * Executes a function for each element in this matrix.
	 *
	 * The function accepts any of the following arguments (in order):
	 * 1. `e` (`number`): The current element in the matrix being processed
	 * 2. `i` (`number`): The position of `element` in this matrix
	 *
	 * @param {function} callback The function to execute per iteration
	 * @param {object} thisArg The argument to use as `this` in the function
	 */
	forEach( callback, thisArg ) {

		this.elements.forEach( ( e, i ) => {

			callback.bind( thisArg )( e, i );

		} );

	}

	/**
	 * Executes a function for each row in this matrix.
	 *
	 * The function accepts any of the following arguments (in order):
	 * 1. (`Array.<number>`) The current row in the matrix being processed
	 * 2. `r` (`number`) The position of the row in this matrix (1-indexed)
	 *
	 * @param {function} callback The function to execute per iteration
	 * @param {object} thisArg The argument to use as `this` in the function
	 */
	forEachRow( callback, thisArg ) {

		loop( this.size.rows, ( r ) => {

			callback.bind( thisArg )( this.row( r ), r );

		}, this );

	}

	/**
	 * Executes a function for each column in this matrix.
	 *
	 * The function accepts any of the following arguments (in order):
	 * 1. (`Array.<number>`) The current column in the matrix being processed
	 * 2. `r` (`number`) The position of the column in this matrix (1-indexed)
	 *
	 * @param {function} callback The function to execute per iteration
	 * @param {object} thisArg The argument to use as `this` in the function
	 */
	forEachColumn( callback, thisArg ) {

		loop( this.size.columns, ( c ) => {

			callback.bind( thisArg )( this.column( c ), c );

		}, this );

	}

	/**
	 * Returns the main diagonal of this matrix.
	 *
	 * @return {number[]} The main diagonal of this matrix
	 */
	mainDiagonal() {

		return this.diagonal( 1, 1 );

	}

	/**
	 * Swaps the dimensions of this matrix.
	 *
	 * **Note**: This may be used by this class's other methods such as
	 * `transpose`, but it should not be called manually.
	 */
	sizeSwap() {

		this.size.rows += this.size.columns;
		this.size.columns = this.size.rows - this.size.columns;
		this.size.rows -= this.size.columns;

	}

	// Elementary row operations

	/**
	 * Intercharges row *r* with row *s* in place.
	 *
	 * @param {number} r The row to intercharge with *s* (1-indexed)
	 * @param {number} s The row to intercharge with *r* (1-indexed)
	 * @return {Matrix} This matrix
	 */
	interchargeRows( r, s ) {

		if ( r > this.size.rows || r < 1 || s > this.size.rows || s < 1 ) {

			console.error( "Input row number is invalid" );
			return this;

		}

		// Save the original rows

		let rowR = this.row( r );
		let rowS = this.row( s );

		// Intercharge two rows by recalling elements from the original rows

		loop( this.size.columns, function ( i ) {

			this.elements[ this.elementIndex( r, i ) ] = rowS[ i - 1 ];
			this.elements[ this.elementIndex( s, i ) ] = rowR[ i - 1 ];

		}, this );

		return this;

	}

	/**
	 * Multiplies row *r* by a non-zero scalar *a* in place.
	 *
	 * @param {number} r The row to multiply the scalar by (1-indexed)
	 * @param {number} a The scalar to multiply the row by
	 * @return {Matrix} This matrix
	 */
	multiplyRowByScalar( r, a ) {

		if ( r > this.size.rows || r < 1 ) {

			console.error( "Input row number is invalid" );
			return this;

		}

		if ( a === 0 ) {

			console.error( "Input scalar must not be zero" );
			return this;

		}

		let elementIndex; // Cache

		loop( this.size.columns, function ( i ) {

			elementIndex = this.elementIndex( r, i );
			this.elements[ elementIndex ] = this.elements[ elementIndex ] * a;

		}, this );

		return this;

	}

	/**
	 * Adds *a* times row *s* to row *r* in place.
	 *
	 * @param {number} r The row that gets added (1-indexed)
	 * @param {number} s The row to multiply the scalar by and then add to row *r* (1-indexed)
	 * @param {number} a The scalar to multiply row *s* by
	 * @return {Matrix} This matrix
	 */
	addRowTimesScalarToRow( r, s, a = 1 ) {

		if ( r > this.size.rows || r < 1 || s > this.size.rows || s < 1 ) {

			console.error( "Input row number is invalid" );
			return this;

		}

		let rowS = this.row( s );
		let elementIndex;

		loop( this.size.columns, function ( i ) {

			elementIndex = this.elementIndex( r, i );
			this.elements[
				elementIndex
			] = this.elements[ elementIndex ] + rowS[ i - 1 ] * a;

		}, this );

		return this;

	}

	/**
	 * Transposes this matrix in place.
	 *
	 * @return {Matrix} This matrix
	 */
	transpose() {

		let org = this.clone();
		this.elements = new Array();

		for ( let c = 1; c < org.size.columns + 1; c ++ ) {

			this.elements = this.elements.concat( org.column( c ) );

		}

		this.sizeSwap();
		return this;

	}

	/**
	 * Multiplies this matrix by scalar *s*.
	 *
	 * @param {number} s The scalar to multiply this matrix by
	 * @return {Matrix} This matrix
	 */
	multiplyScalar( s ) {

		this.elements = this.elements.map( e => e * s ).slice();
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
	 * Adds matrix *m* to this matrix.
	 *
	 * If this matrix and *m* aren't of the same size, perform no addition.
	 *
	 * @param {Matrix} m The matrix to add to this matrix
	 * @return {Matrix} This matrix
	 */
	add( m ) {

		let mClone = m.clone();

		if ( this.sameSize( m ) ) {

			this.elements = this.elements.map(

				( e, i ) => e += mClone.elements[ i ]

			);

		}

		return this;

	}

	/**
	 * Subtracts *m* from this matrix.
	 *
	 * If this matrix and *m* aren't of the same size, perform no substraction.
	 *
	 * @param {Matrix} m The matrix to subtract this matrix to
	 * @return {Matrix} This matrix
	 */
	subtract( m ) {

		return this.add( m.clone().negate() );

	}

	/**
	 * Post-multiplies this matrix by *m*.
	 *
	 * @param {Matrix} m The matrix to post-multiply this matrix to
	 * @return {Matrix} This matrix
	 */
	multiply( m ) {

		this.copy( Matrix.multiplyMatrices( this, m ) );
		return this;

	}

	/**
	 * Pre-multiplies this matrix by *m*.
	 *
	 * @param {Matrix} m The matrix to pre-multiply this matrix to
	 * @return {Matrix} This matrix
	 */
	premultiply( m ) {

		this.copy( Matrix.multiplyMatrices( m, this ) );
		return this;

	}

	// Matrix reduction

	/**
	 * Checks if a row in this matrix is zero (contains only 0s).
	 *
	 * @param {number} r The row to consider (1-indexed)
	 * @return {boolean} `true` if the row is zero, `false` otherwise
	 */
	isZeroRow( r ) {

		return this.row( r ).every( ( e ) => e === 0 );

	}

	/**
	 * Reduces this matrix to its row-echelon form in place using Gaussian
	 * algorithm.
	 *
	 * @param {boolean} canonical Set to `true` to reduce to reduced row-echelon
	 * @return {Matrix} This matrix after reduction
	 */
	reduce( canonical = false ) {

		/*
		 * Gaussian algorithm:
		 *
		 *   1. Check if the matrix is in row-echelon form, if it is then abort.
		 *   2. Find the non-zero row with the left-most leading coefficient
		 *      (that has not been processed yet). If there are multiple rows
		 *      with leading coefficients being in the same column, pick any of
		 *      them.
		 *   3. Multiply it by 1 over the leading coefficient of that row.
		 *   4. Check for other rows with the leading coefficients being in the
		 *      same column as the current row. Use elementary row operation
		 *      III to eliminate them.
		 *   5. Swap the row with another row (if necessary) such that the
		 *      leading coefficient of the row is strictly on the right of the
		 *      leading coefficient of the row above it and the same but on the
		 *      left for the row below it.
		 *
		 * In addition, if canonical = true:
		 *
		 *   6. Check if the matrix is in reduced row-echelon form, if it is
		 *      then abort.
		 *   7. For each row, subtract it from the rows above it such that the
		 *      column containing its leading coefficient has the coefficient as
		 *      the column's only non-zero element.
		 */

		let i = 0; // Iterator

		while ( ! this.isInRowEchelonForm ) { // Step 1

			i ++;

			// Step 2

			// Constructs a reference for leading coefficients in this matrix.
			// ref indexes columns in this matrix that contain leading
			// coefficients. In each column indexed, even zero entries are
			// stored. ref ignores columns that have been previously working
			// columns (see more below).
			//
			// For example:
			// [ 1, 0, 3, 7                1: [ 1, 2, 3 ]
			//   2, 0, 1, 0     -->  ref = 3: [ 3, 1, -1 ]
			//   3, 0, -1, 3 ]             4: [ 7, 0, 3 ]

			let ref = new Map();

			this.columns.slice( i - 1 ).forEach( ( column, c0 ) => {

				if ( ! column.every( ( e ) => e === 0 ) ) {

					ref.set( c0 + 1, column );

				}

			} );

			// In each iteration, we deal with only one row. It is important to
			// also know what column the leading coefficient of that row is in,
			// so that we can conduct step 4. Let us call that column the
			// "working column", and the row the "working row".

			// NOTE: All indices below are 1-indexed

			let workingC = Array.from( ref.keys() )[ 0 ]; // The index of the working column
			let workingColumn = ref.get( workingC ); // The working column itself
			let workingR = i; // The index of the working row, initial value

			while ( workingColumn[ workingR - 1 ] === 0 ) {

				workingR ++;

			}

			// Step 3

			this.multiplyRowByScalar(
				workingR,
				1 / workingColumn[ workingR - 1 ]
			);

			// Step 4

			workingColumn.forEach( ( e, r0 ) => {

				let r = r0 + 1;

				if ( e === 0 || r <= workingR ) return;

				this.addRowTimesScalarToRow( r, workingR, - e );

			}, this );

			// Step 5

			this.interchargeRows( workingR, i );


			// Prevent infinite loop
			if ( i === this.size.columns ) break;

		}

		if ( canonical ) {

			let r = 2;

			while ( ! this.isInReducedRowEchelonForm ) { // Step 6

				if ( this.isZeroRow( r ) ) break;

				// Step 7

				let leadingCoef = this.leadingCoefficient( r );
				let leadingCoefPos = this.row( r ).indexOf( leadingCoef );

				loop( r - 1, ( s ) => {

					this.addRowTimesScalarToRow(
						s,
						r,
						- this.row( s )[ leadingCoefPos ]
					);

				} );


				// Prevent infinite loop
				if ( ++ r > this.size.rows ) break;

			}

		}

		return this;

	}

}

export { Matrix };
