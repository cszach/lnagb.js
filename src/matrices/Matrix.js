import { loop, sameArrays } from '../utils.js';
import { linearCombination } from '../math/Core.js';

/**
 * @author Nguyen Hoang Duong / you_create@protonmail.com / GitHub: you-create
 */

/**
 * Class for matrices in Linear Algebra (excluding augmented matrices).
 *
 * A matrix is a set of numbers arranged in rows and columns.
 */
class Matrix {

	// CONSTRUCTOR

	/**
	 * Constructs a new `Matrix` instance.
	 *
	 * The first 2 parameters set the size of the matrix, the rest of the
	 * parameters are perceived as elements of the new matrix given in
	 * **row-major** order. Only the first 2 parameters are required.
	 *
	 * @param {number} row The number of rows for the new matrix
	 * @param {number} column The number of columns for the new matrix
	 */
	constructor( row, column ) {

		/*
		 * These are the properties that every Matrix instance has.
		 *
		 * .name: The name of this matrix, default to "Matrix"
		 * .size.row: The number of rows in this matrix
		 * .size.column: The number of columns in this matrix
		 * .elements: Row-major-ordered array of elements in this matrix
		 *
		 * On the user-end, all of these properties should not be changed
		 * directly, but using methods (except for .name).
		 */

		this.name = "Matrix";
		this.size = {
			row,
			column,
		};
		this.elements = Array.from( arguments ).slice( 2 );

	}

	// STATIC PROPERTIES / METHODS

	/**
	 * Checks if object *o* is a valid `Matrix` instance and return `true`
	 * if it is.
	 *
	 * Note that methods inside the `Matrix` class do not check if their
	 * parameters are valid (including matrices).
	 *
	 * Criteria for being "valid":
	 * - The constructor is `Matrix`
	 * - Has the `name` property
	 * - Has the `size` property that has
	 *     - the `row` property being a positive integer
	 *     - the `column` property also being a positive integer
	 * - Has the `elements` property and it is a JavaScript array of numbers
	 *   and the number of elements must equal to the product of `.size.row` and
	 *   `.size.column`
	 *
	 * @param {object} o The object to check
	 * @return {boolean} `true` if *o* is a `Matrix` instance, `false` otherwise
	 */
	static isMatrix( o ) {

		return o.constructor.name === "Matrix" && o.name
			&& o.elements.every( ( e ) => Number.isFinite( e ) )
			&& o.elements.length === o.size.row * o.size.column;

	}

	/**
	 * Creates and returns a zero matrix.
	 *
	 * A zero matrix is a matrix with all of its elements being 0.
	 *
	 * @param {number} row The number of rows for the zero matrix
	 * @param {number} column The number of columns for the zero matrix
	 * @return {object} A Matrix instance that represents the desired matrix
	 */
	static ZeroMatrix( row, column ) {

		let zero = new Matrix( row, column );

		zero.elements = new Array();
		loop( zero.numberOfElements(), function () {

			zero.elements.push( 0 );

		} );

		return zero.clone();

	}

	/**
	 * Creates and returns an identity matrix.
	 *
	 * An identity matrix is a square matrix where the elements on its main
	 * diagonal are all 1 and the rest are all 0.
	 *
	 * @param {number} size The size of the identity matrix
	 * @return {object} A Matrix instance that represents the desired matrix
	 */
	static IdentityMatrix( size ) {

		let identity = Matrix.ZeroMatrix( size, size );

		loop( size, function ( i ) {

			// Make the element at row i and column i (i.e. on the main
			// diagonal) one
			identity.elements[ identity.elementIndex( i, i ) ] = 1;

		} );

		return identity.clone();

	}

	/**
	 * Multiplies matrices *m* and *n* in that order and returns the result.
	 *
	 * Multiplying 2 matrices require that the number of columns in the matrix
	 * on the left must equal to the number of rows in the matrix on the right.
	 * If *m* and *n* are not valid for their multiplication, return a clone of
	 * *m*.
	 *
	 * @param {object} m The matrix on the left of the multiplication
	 * @param {object} n The matrix on the right of the multiplication
	 * @return {object} The result of the multiplication
	 */
	static multiplyMatrices( m, n ) {

		let result = m.clone();

		if ( m.size.column === n.size.row ) {

			result.size.column = n.size.column;
			result.elements = new Array();

			loop( m.size.row, function ( r ) {

				loop( n.size.column, function ( c ) {

					result.elements.push(
						linearCombination( m.row( r ), n.column( c ) )
					);

				} );

			} );

		} else {

			console.warn( "Input matrices cannot be multiplied" );

		}

		return result;

	}

	// METHODS

	/**
	 * Makes this matrix the same as matrix *m*.
	 *
	 * @param {object} m The `Matrix` instance to copy from
	 */
	copy( m ) {

		this.size.row = m.size.row;
		this.size.column = m.size.column;
		this.elements = m.elements.slice();

	}

	/**
	 * Creates and returns a clone of this matrix instance.
	 *
	 * @return {object} A clone of this matrix
	 */
	clone() {

		let clone = new Matrix( 1, 1 );
		clone.copy( this );

		return clone;

	}

	/**
	 * Computes and returns the number of elements in this matrix.
	 *
	 * @return {number} The number of elements in this matrix
	 */
	numberOfElements() {

		return this.size.row * this.size.column;

	}

	/**
	 * Checks if this matrix has the same size as *m*.
	 *
	 * @param {object} m The matrix to check the size of this matrix against
	 * @return {boolean} `true` if the two matrices have the same size, `false`
	 * otherwise
	 */
	sameSize( m ) {

		return this.size.row === m.size.row && this.size.column === m.size.column;

	}

	/**
	 * Checks if this matrix and the given matrix *m* are equal.
	 *
	 * @param {object} m The matrix to compare this matrix to
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
	 * within `.elements`.
	 *
	 * If *r* and *c* are not within the dimensions of this matrix, returns -1.
	 *
	 * @param {number} r The row that contains the element (1-indexed)
	 * @param {number} c The column that contains the element (1-indexed)
	 * @return {number} The position of the element in `.elements` (0-indexed)
	 */
	elementIndex( r, c ) {

		if ( 1 <= r && r <= this.size.row && 1 <= c && c <= this.size.column ) {

			return r * this.size.column + c - this.size.column - 1;

		} else {

			return - 1;

		}

	}

	/**
	 * Returns a row in this matrix as a JavaScript array.
	 *
	 * @param {number} r The position of the row (1-indexed)
	 * @return {object} The array that contains the elements in the row
	 */
	row( r ) {

		return this.elements.slice(

			r * this.size.column - this.size.column,
			r * this.size.column

		);

	}

	/**
	 * Returns a column in this matrix as a JavaScript array.
	 *
	 * @param {number} c The position of the column (1-indexed)
	 * @return {object} The array that contains the elements in the column
	 */
	column( c ) {

		return this.elements.filter( function ( e, i ) {

			return ( i - c + 1 ) % this.size.column === 0;

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
	 * @return {object} The diagonal (as an array) that contains the element
	 */
	diagonal( r, c ) {

		let diagonal = new Array();

		if ( 1 <= r && r <= this.size.row && 1 <= c && c <= this.size.column ) {

			// Travel to where the first element of the diagonal is
			while ( r > 1 && c > 1 ) {

				r --;
				c --;

			}

			// Iterate through the diagonal, increasing *row* and *column* by
			// one at each iteration since that is the pattern of elements in
			// diagonals
			while ( r <= this.size.row && c <= this.size.column ) {

				diagonal.push( this.element( r, c ) );
				r ++;
				c ++;

			}

		}

		return diagonal.slice();

	}

	/**
	 * Returns the main diagonal of this matrix.
	 *
	 * The main diagonal of a matrix is the diagonal that contains the element
	 * at row 1 and column 1 of that matrix.
	 *
	 * @return {object} The main diagonal (as an array) of this matrix
	 */
	mainDiagonal() {

		return this.diagonal( 1, 1 );

	}

	/**
	 * Swaps the values of `.size.row` and `.size.column` in this matrix.
	 */
	sizeSwap() {

		this.size.row += this.size.column;
		this.size.column = this.size.row - this.size.column;
		this.size.row -= this.size.column;

	}

	// Elementary row operations

	/**
	 * Intercharges row *r* with row *s* in place and returns this matrix.
	 *
	 * @param {number} r The row to intercharge with *s* (1-indexed)
	 * @param {number} s The row to intercharge with *r* (1-indexed)
	 * @return {object} This matrix
	 */
	interchargeRows( r, s ) {

		if ( r > this.size.row || r < 1 || s > this.size.row || s < 1 ) {

			console.error( "Input row number is invalid" );
			return this;

		}

		// Save the original rows

		let rowR = this.row( r );
		let rowS = this.row( s );

		// Intercharge two rows by recalling elements from the original rows

		loop( this.size.column, function ( i ) {

			this.elements[ this.elementIndex( r, i ) ] = rowS[ i - 1 ];
			this.elements[ this.elementIndex( s, i ) ] = rowR[ i - 1 ];

		}, this );

		return this;

	}

	/**
	 * Multiplies row *r* by a non-zero scalar *a* in place and returns this
	 * matrix.
	 *
	 * @param {number} r The row to multiply the scalar by (1-indexed)
	 * @param {number} a The scalar to multiply the row by
	 * @return {object} This matrix
	 */
	multiplyRowByScalar( r, a ) {

		if ( r > this.size.row || r < 1 ) {

			console.error( "Input row number is invalid" );
			return this;

		}

		if ( a === 0 ) {

			console.error( "Input scalar must not be zero" );
			return this;

		}

		let elementIndex; // Cache

		loop( this.size.column, function ( i ) {

			elementIndex = this.elementIndex( r, i );
			this.elements[ elementIndex ] = this.elements[ elementIndex ] * a;

		}, this );

		return this;

	}

	/**
	 * Adds *a* times row *s* to row *r* in place and returns this matrix.
	 *
	 * @param {number} r The row that gets added (1-indexed)
	 * @param {number} s The row to multiply the scalar by and then add to row *r*
	 * @param {number} a The scalar to multiply row *s* by
	 * @return {object} This matrix
	 */
	addRowTimesScalarToRow( r, s, a = 1 ) {

		if ( r > this.size.row || r < 1 || s > this.size.row || s < 1 ) {

			console.error( "Input row number is invalid" );
			return this;

		}

		let rowS = this.row( s );
		let elementIndex;

		loop( this.size.column, function ( i ) {

			elementIndex = this.elementIndex( r, i );
			this.elements[
				elementIndex
			] = this.elements[ elementIndex ] + rowS[ i - 1 ] * a;

		}, this );

		return this;

	}

	/**
	 * Transposes this matrix in place and returns this matrix.
	 */
	transpose() {

		let org = this.clone();
		this.elements = new Array();

		for ( let c = 1; c < org.size.column + 1; c ++ ) {

			this.elements = this.elements.concat( org.column( c ) );

		}

		this.sizeSwap();
		return this;

	}

	/**
	 * Multiplies this matrix by scalar *s* and returns this matrix.
	 *
	 * Multiplying a matrix by a scalar means multiplying every element in that
	 * matrix by the scalar.
	 *
	 * @param {number} s The scalar to multiply this matrix by
	 * @return {object} This matrix
	 */
	multiplyScalar( s ) {

		this.elements = this.elements.map( e => e * s ).slice();
		return this;

	}

	/**
	 * Multiplies this matrix by -1 and returns this matrix.
	 *
	 * @return {object} This matrix
	 */
	negate() {

		return this.multiplyScalar( - 1 );

	}

	/**
	 * Adds *m* to this matrix and returns this matrix
	 *
	 * If this matrix and *m* aren't of the same size, perform no addition.
	 *
	 * @param {object} matrix The matrix to add to this matrix
	 * @return {object} This matrix
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
	 * Substracts *m* from this matrix and returns this matrix.
	 *
	 * If this matrix and *m* aren't of the same size, perform no substraction.
	 *
	 * @param {object} m The matrix to subtract this matrix to
	 * @return {object} This matrix
	 */
	subtract( m ) {

		return this.add( m.clone().negate() );

	}

	/**
	 * Post-multiplies this matrix by *m* and returns this matrix.
	 *
	 * @param {object} m The matrix to post-multiply this matrix to
	 * @return {object} This matrix
	 */
	multiply( m ) {

		this.copy( Matrix.multiplyMatrices( this, m ) );
		return this;

	}

	/**
	 * Pre-multiplies this matrix by *m* and returns this matrix.
	 *
	 * @param {object} m The matrix to pre-multiply this matrix to
	 * @return {object} This matrix
	 */
	premultiply( m ) {

		this.copy( Matrix.multiplyMatrices( m, this ) );
		return this;

	}

}

export { Matrix };
