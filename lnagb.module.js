/**
 * lnagb.module.js
 *
 * Linear Algebra operations implemented in JavaScript
 *
 * @author Nguyen Hoang Duong / you_create@protonmail.com / GitHub: you-create
 * @license https://unlicense.org/
 */

/*
 * DEVELOPER NOTES
 *
 * o This is a JavaScript module, which means it has to be imported using the
 *   keyword 'import'
 * o For shorter and concise code, many parameters and variables are named after
 *   single letters, specifically...
 *   - i : Index of an element in a JavaScript array
 *   - o : A JavaScript object
 *   - a : A JavaScript array
 *   - e : A JavaScript array element
 *   - m : A Matrix class's instance
 *   - r : (matrix) A row's position
 *   - c : (matrix) A column's position
 *   - a, b : A pair of arbitrary scalar
 *   - m, n : A pair of arbitrary matrices
 *   - p, q : A pair of arbitrary number sequences
 * o Matrix class:
 *   - Row-major ordering is used, column-major ordering is not supported
 *   - Positions of rows and columns are 1-indexed
 */

/**
 * Extension of the Number class: Create a loop that runs from 1 to this number
 * (inclusive), executing a given function every iteration
 *
 * @param {function} userDefinedFunction The function to run for every iteration
 */
Number.prototype.toLoop = function ( userDefinedFunction ) {

	for ( let i = 1; i < this + 1; i ++ ) {

		userDefinedFunction( i );

	}

};

/**
 * Extension of the Array class: Check if this array is the same as array *a*
 *
 * Two arrays are the same when...
 *   o they have the same number of elements; and
 *   o every element of this array is strictly the same as the element of the
 *     other array at the same index
 *
 * @param {object} a The array to compare this array against
 * @return {boolean} true if the two arrays are the same, false otherwise
 */
Array.prototype.sameAs = function ( a ) {

	return this.length === a.length && this.every( ( e, i ) => e === a[ i ] );

};

/**
 * Compute and return the result of the linear combination of *p* and *q*,
 * two sequences of numbers
 *
 * The sequences must have the same number of numbers
 *
 * This is useful in multiplying matrices
 *
 * @param {object} p First sequence of numbers as a JS array
 * @param {object} q Second sequence of numbers as a JS array
 */
let linearCombination = function ( p, q ) {

	return p.reduce( ( result, v, i ) => result + p[ i ] * q[ i ], 0 );

};

/**
 *
 * Class for a matrix of any type in Linear Algebra (excluding augmented matrix)
 *
 * Parameters are required to create a new matrix using the class's constructor.
 * The matrix can then be transformed (e.g. have its elements or its size
 * changed) via methods.
 */
class Matrix {

	// CONSTRUCTOR

	/**
	 * Constructor of the Matrix class, used to create matrices' instances
	 *
	 * The first 2 parameters set the size of the matrix, the rest of the
	 * parameters are perceived as elements of the new matrix given in ROW-MAJOR
	 * order. Only the first 2 parameters are required.
	 *
	 * @param {number} row The number of rows for the new matrix
	 * @param {number} column The number of columns for the new matrix
	 */
	constructor( row, column ) {

		/*
		 * These are the properties that every Matrix instance has.
		 *
		 * .name: A string that is set to "Matrix" and should not be changed
		 * .size.row: The number of rows in this matrix
		 * .size.column: The number of columns in this matrix
		 * .elements: Row-major-ordered array of elements in this matrix
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
	 * Check if object *o* is a valid Matrix instance and return true if it is
	 *
	 * Note that methods inside the Matrix class do not check if their
	 * parameters are valid (including matrices)
	 *
	 * Criteria for being "valid":
	 *   o The constructor is Matrix
	 *   o Has the 'name' property and it is set to the string "Matrix"
	 *   o Has the 'size' property that has
	 *     o the 'row' property being a positive integer
	 *     o the 'column' property also being a positive integer
	 *   o Has the 'elements' property and it is a JavaScript array of numbers
	 *     and the number of elements must equal to the product of .size.row and
	 *     .size.column
	 *
	 * @param {object} o The object to check
	 * @return {boolean} true if *o* is a Matrix instance, false otherwise
	 */
	static isMatrix( o ) {

		return o.constructor.name === "Matrix" && o.name === "Matrix"
			&& o.elements.every( ( e ) => Number.isFinite( e ) )
			&& o.elements.length === o.size.row * o.size.column;

	}

	/**
	 * Create and return a zero matrix
	 *
	 * A zero matrix is a matrix with all of its elements being 0
	 *
	 * @param {number} row The number of rows for the zero matrix
	 * @param {number} column The number of columns for the zero matrix
	 * @return {object} A Matrix instance that represents the desired matrix
	 */
	static ZeroMatrix( row, column ) {

		let zero = new Matrix( row, column );

		zero.elements = new Array();
		zero.numberOfElements().toLoop( function () {

			zero.elements.push( 0 );

		} );

		return zero.clone();

	}

	/**
	 * Create and return an identity matrix
	 *
	 * An identity matrix is a square matrix where the elements on its main
	 * diagonal are all 1 and the rest are all 0.
	 *
	 * @param {number} size The size of the identity matrix
	 * @return {object} A Matrix instance that represents the desired matrix
	 */
	static IdentityMatrix( size ) {

		let identity = Matrix.ZeroMatrix( size, size );

		size.toLoop( function ( i ) {

			// Make the element at row i and column i (i.e. on the main
			// diagonal) one
			identity.elements[ identity.elementIndex( i, i ) ] = 1;

		} );

		return identity.clone();

	}

	/**
	 * Multiply matrices *m* and *n* in that order and return the result
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

			m.size.row.toLoop( function ( r ) {

				n.size.column.toLoop( function ( c ) {

					result.elements.push(

						linearCombination( m.row( r ), n.column( c ) )

					);

				} );

			} );

		}

		return result;

	}

	// METHODS

	/**
	 * Make this matrix the same as matrix *m*
	 *
	 * @param {object} m The Matrix instance to copy from
	 */
	copy( m ) {

		this.size.row = m.size.row;
		this.size.column = m.size.column;
		this.elements = m.elements.slice();

	}

	/**
	 * Create and return a clone of this matrix instance
	 */
	clone() {

		let clone = new Matrix( 1, 1 );
		clone.copy( this );

		return clone;

	}

	/**
	 * Compute and return the number of elements in this matrix
	 */
	numberOfElements() {

		return this.size.row * this.size.column;

	}

	/**
	 * Check if this matrix has the same size as *m* and return true if it does
	 *
	 * @param {object} m The matrix to check the size of this matrix against
	 * @return {boolean} true if the two matrices have the same size, false otherwise
	 */
	sameSize( m ) {

		return this.size.row === m.size.row && this.size.column === m.size.column;

	}

	/**
	 * Return true if this matrix and the given matrix *m* are equal
	 *
	 * @param {object} m The matrix to compare this matrix to
	 * @return {boolean} true if the two matrices are the same, false otherwise
	 */
	equals( m ) {

		return this.sameSize( m ) && this.elements.sameAs( m.elements );

	}

	/**
	 * Return the element in row *r* and column *c* in this matrix
	 *
	 * @param {number} r The row that contains the element (1-indexed)
	 * @param {number} c The column that contains the element (1-indexed)
	 * @return {number} The element in row *r* and column *c*
	 */
	element( r, c ) {

		return this.elements[ this.elementIndex( r, c ) ];

	}

	/**
	 * Return the 0-indexed position of the element in row *r* and column *c*
	 * within .elements
	 *
	 * @param {number} r The row that contains the element (1-indexed)
	 * @param {number} c The column that contains the element (1-indexed)
	 * @return {number} The index of the element in row *r* and column *c*
	 */
	elementIndex( r, c ) {

		return r * this.size.column + c - this.size.column - 1;

	}

	/**
	 * Return a row in this matrix as a JavaScript array
	 *
	 * @param {number} r The position of the row (1-indexed, top-to-bottom)
	 * @return {object} The array that contains the elements in the specified row
	 */
	row( r ) {

		return this.elements.slice(

			r * this.size.column - this.size.column,
			r * this.size.column

		);

	}

	/**
	 * Return a column in this matrix as a JavaScript array
	 *
	 * @param {number} c The position of the column (1-indexed, left-to-right)
	 * @return {object} The array that contains the elements in the specified column
	 */
	column( c ) {

		return this.elements.filter( function ( e, i ) {

			return ( i - c + 1 ) % this.size.column === 0;

		}, this );

	}

	/**
	 * Return the diagonal in this matrix that contains the element in the
	 * specified row and column
	 *
	 * @param {number} r The row that contains the element (1-indexed)
	 * @param {number} c The column that contains the element (1-indexed)
	 * @return {object} The diagonal (as an array) that contains the element
	 */
	diagonal( r, c ) {

		let diagonal = new Array();

		// Travel to where the first element of the diagonal is
		while ( r > 1 && c > 1 ) {

			r --;
			c --;

		}

		// Iterate through the diagonal, increasing *row* and *column* by one
		// at each iteration since that is the pattern of elements in diagonals
		while ( r <= this.size.row && c <= this.size.column ) {

			diagonal.push( this.element( r, c ) );
			r ++;
			c ++;

		}

		return diagonal.slice();

	}

	/**
	 * Return the main diagonal of this matrix
	 *
	 * The main diagonal of a matrix is the diagonal that contains the element
	 * at row 1 and column 1 of that matrix
	 *
	 * @return {object} The main diagonal (as an array) of this matrix
	 */
	mainDiagonal() {

		return this.diagonal( 1, 1 );

	}

	/**
	 * (mutable) Swap the values of .size.row and .size.column in this matrix
	 */
	sizeSwap() {

		this.size.row += this.size.column;
		this.size.column = this.size.row - this.size.column;
		this.size.row -= this.size.column;

	}

	/**
	 * (mutable) Transpose this matrix in place and return this matrix
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
	 * (mutable) Multiply this matrix by scalar *s* and return this matrix
	 *
	 * Multiplying a matrix by a scalar means multiplying every element in that
	 * matrix by the scalar
	 *
	 * @param {number} s The scalar to multiply this matrix by
	 * @return {object} The result of the multiplication
	 */
	multiplyScalar( s ) {

		this.elements = this.elements.map( e => e * s ).slice();
		return this;

	}

	/**
	 * (mutable) Multiply this matrix by -1 and return the result
	 *
	 * @return {object} The result of the multiplication
	 */
	negate() {

		return this.multiplyScalar( - 1 );

	}

	/**
	 * (mutable) Add *m* to this matrix and return the result
	 *
	 * If this matrix and *m* aren't of the same size, perform no addition and
	 * simply return the original matrix
	 *
	 * @param {object} matrix The matrix to add to this matrix
	 * @return {object} The result of the addition
	 */
	add( m ) {

		let mClone = m.clone();

		if ( ! this.sameSize( m ) ) return this;

		this.elements = this.elements.map(

			( e, i ) => e += mClone.elements[ i ]

		);

		return this;

	}

	/**
	 * (mutable) Substract *m* from this matrix and return the result
	 *
	 * If this matrix and *m* aren't of the same size, perform no substraction
	 * and simply return the original matrix
	 *
	 * @param {object} m The matrix to subtract this matrix to
	 * @return {object} The result of the subtraction
	 */
	subtract( m ) {

		return this.add( m.clone().negate() );

	}

	/**
	 * (mutable) Post-multiply this matrix by *m* and return this matrix
	 */
	multiply( m ) {

		this.copy( Matrix.multiplyMatrices( this, m ) );
		return this;

	}

	/**
	 * (mutable) Pre-multiply this matrix by *m* and return this matrix
	 */
	premultiply( m ) {

		this.copy( Matrix.multiplyMatrices( m, this ) );
		return this;

	}

}

class AugmentedMatrix {

}

export { linearCombination, Matrix, AugmentedMatrix };
