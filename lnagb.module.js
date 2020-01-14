/**
 * lnagb.js
 *
 * Linear Algebra operations implemented in JavaScript
 *
 * @author Nguyen Hoang Duong / you_create@protonmail.com / GitHub: you-create
 * @license https://unlicense.org/
 */

/**
 * Extension of the Number class: Create a loop that runs from 0 to this number
 * (exclusive), executing a given function every iteration
 *
 * @param {function} userDefinedFunction The function to run for every iteration
 */
Number.prototype.toLoop = function ( userDefinedFunction ) {

	for ( let i = 0; i < this; i ++ ) {

		userDefinedFunction( i );

	}

};

const _ROW = 1; // Used by the Matrix class's methods, simply means "row-major"
const _COLUMN = 0; // Used by the Matrix class's methods, simply means "column-major"

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

	return p.reduce( function ( accumulator, value, index ) {

		return accumulator + p[ index ] * q[ index ];

	}, 0 );

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

	// Class Static Properties / Methods

	static get ROW() {

		return _ROW;

	}

	static get COLUMN() {

		return _COLUMN;

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
		zero.numberOfElements.toLoop( function () {

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
			identity.elements[ identity.elementIndex( i + 1, i + 1 ) ] = 1;

		} );

		return identity.clone();

	}

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

		this.name = "Matrix";
		this.size = {
	        row,
	        column,
	    }; // The size of the matrix
	    this.numberOfElements = this.size.row * this.size.column; // The number of elements in this matrix
	    this.major = Matrix.ROW; // How this.elements (an array) stores elements
	    this.elements = Array.from( arguments ).slice( 2 ); // The array that contains the elements of the matrix

	}

	// Class Methods

	/**
     * Copy all properties of a given Matrix instance into this matrix instance
     *
     * @param {object} m The Matrix instance to copy from
     */
	copy( m ) {

		this.name = m.name;
		this.size.row = m.size.row;
		this.size.column = m.size.column;
		this.numberOfElements = m.numberOfElements;
		this.major = m.major;
		this.elements = m.elements.slice();

	}

	/**
     * Mathematically speaking, make this matrix the same as matrix *m*
     *
     * This means the .size and .elements attributes are copied, but other
     * properties like .major remain intact
     *
     * @param {object} m The Matrix instance to copy from
     */
	shallowCopy( m ) {

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
	 * Being "equal" here is mathematical; this function does not check
	 * properties like .major
     *
     * @param {object} m The matrix to compare this matrix to
     * @return {boolean} true if the two matrices are the same, false otherwise
     */
	equals( m ) {

		return this.sameSize( m )
			&& this.elements.every( function ( element, index ) {

            	return element === m.elements[ index ];

			} );

	}

	/**
	 * Access the element at the given position in this matrix
	 *
	 * @param {number} row The row that contains the element (1-indexed)
	 * @param {number} column The column that contains the element (1-indexed)
	 * @return {number} The element in row *row* and column *column*
	 */
	element( row, column ) {

		return this.elements[ this.elementIndex( row, column ) ];

	}

	/**
	 * Similar to element() but return the index of the element within .elements
	 * instead of the element itself
	 *
	 * @param {number} row The row that contains the element (1-indexed)
	 * @param {number} column The column that contains the element (1-indexed)
	 * @return {number} The index of the element in row *row* and column *column*
	 */
	elementIndex( row, column ) {

		return ( this.major == Matrix.ROW )
			? row * this.size.column + column - this.size.column - 1
			: column * this.size.row + row - this.size.row - 1;

	}

	/**
	 * Get a row in this matrix as an array
	 *
	 * @param {number} row The position of the row (1-indexed, top-to-bottom)
	 * @return {object} The array that contains the elements in the specified row
	 */
	row( row ) {

		let sizeRow = this.size.row;

		return ( this.major == Matrix.ROW )
			? this.elements.slice(

				row * this.size.column - this.size.column,
				row * this.size.column

			)
			: this.elements.filter( function ( element, index ) {

				return ( index - row + 1 ) % sizeRow === 0;

			} );

	}

	/**
	 * Get a column in this matrix as an array
	 *
	 * @param {number} column The position of the column (1-indexed, left-to-right)
	 * @return {object} The array that contains the elements in the specified column
	 */
	column( column ) {

		let sizeColumn = this.size.column;

		return ( this.major == Matrix.ROW )
			? this.elements.filter( function ( element, index ) {

				return ( index - column + 1 ) % sizeColumn === 0;

			} )
			: this.elements.slice(

				column * this.size.row - this.size.row,
				column * this.size.row

			);

	}

	/**
	 * Return the diagonal in this matrix that contains the element in the
	 * specified row and column
	 *
	 * @param {number} row The row that contains the element (1-indexed)
	 * @param {number} column The column that contains the element (1-indexed)
	 * @return {object} The diagonal (as an array) that contains the element
	 */
	diagonal( row, column ) {

		let diagonal = new Array();

		// Travel to where the first element of the diagonal is
		while ( row > 1 && column > 1 ) {

			row --;
			column --;

		}

		// Iterate through the diagonal, increasing *row* and *column* by one
		// at each iteration since that is the pattern of elements in diagonals
		while ( row <= this.size.row && column <= this.size.column ) {

			diagonal.push( this.element( row, column ) );
			row ++;
			column ++;

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
	 * (mutable) Safely switch this matrix's ordering mode to row-major if it
	 * is column-major and vice-versa
	 */
	majorSwap() {

		this.transpose().sizeSwap();

	}

	/**
     * (mutable) Transpose this matrix in place and return the tranposed matrix
     */
	transpose() {

		let org = this.clone();
		this.elements = new Array();

		switch ( this.major ) {

			case Matrix.ROW:
				for ( let column = 0; column < org.size.column; column ++ ) {

					this.elements = this.elements.concat( org.column( column + 1 ) );

				}
				break;
			case Matrix.COLUMN:
				for ( let row = 0; row < org.size.column; row ++ ) {

					this.elements = this.elements.concat( org.column( row + 1 ) );

				}
				break;

		}

		this.sizeSwap();
		return this;

	}

	/**
     * (mutable) Multiply this matrix by scalar *s* and return the result
	 *
	 * Multiplying a matrix by a scalar means multiplying every element in that
	 * matrix by the scalar
     *
     * @param {number} s The scalar to multiply this matrix by
     * @return {object} The result of the multiplication
     */
	multiplyScalar( s ) {

		this.elements = this.elements.map( element => element * s ).slice();
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
		if ( this.major !== m.major ) mClone.majorSwap();

		this.elements = this.elements.map(

			( element, index ) => element += mClone.elements[ index ]

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
	 * (mutable) Post-multiply this matrix by *m* and return the result
	 *
	 *
	 */
	multiply( m ) {



	}

}

export { linearCombination, Matrix };
