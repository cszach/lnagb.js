/**
 * lnagb.js
 *
 * Linear Algebra operations implemented in JavaScript
 *
 * @author Nguyen Hoang Duong / you_create@protonmail.com / GitHub: you-create
 * @license https://unlicense.org/
 */

const _ROW = 1; // Used by the Matrix class's methods, simply means "row-major"
const _COLUMN = 0; // Used by the Matrix class's methods, simply means "column-major"

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

/**
 *
 * Class for a matrix of any type in Linear Algebra (excluding augmented matrix)
 *
 * Parameters are required to create a new matrix. The matrix can then be
 * transformed (e.g. have its elements or its size change) via methods.
 *
 * The first two parameters set the number of rows and columns for the matrix,
 * respectively. The rest of the parameters are assumed to be the matrix's
 * elements given in ROW-MAJOR order.
 *
 * @param {number} row The number of rows of the matrix
 * @param {number} column The number of columns of the matrix
 * @param {number} * Elements of the matrix in row-major order
 *
 */
class Matrix {

	// Constructor

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

	// Class Static Properties / Methods

	static get ROW() {

		return _ROW;

	}
	static get COLUMN() {

		return _COLUMN;

	}

	/**
	 * Create and return a *row* x *column* zero matrix
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
	 * Create and return a *size* x *size* identity matrix
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

	// Class Methods

	/**
     * Copy all properties of a given Matrix instance into this matrix instance
     *
     * @param {object} matrix The Matrix instance to copy from
     */
	copy( matrix ) {

		this.name = matrix.name;
		this.size.row = matrix.size.row;
		this.size.column = matrix.size.column;
		this.numberOfElements = matrix.numberOfElements;
		this.major = matrix.major;
		this.elements = matrix.elements.slice();

	}

	/**
     * Mathematically speaking, make this matrix the same as a given matrix
     *
     * This means the .size and .elements attributes are copied, but other
     * properties like .major remain intact
     *
     * @param {object} matrix The Matrix instance to copy from
     */
	shallowCopy( matrix ) {

		this.size.row = matrix.size.row;
		this.size.column = matrix.size.column;
		this.elements = matrix.elements.slice();

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
     * Compare this matrix and a given matrix to see if they are mathematically
	 * the same (i.e. this function does not compare properties like .major)
     * The given matrix must be an instance of the Matrix class
     *
     * @param {object} matrix The matrix to compare this matrix to
     * @return {boolean} true if the two matrices are the same, false otherwise
     */
	equal( matrix ) {

		return this.size.row === matrix.size.row
            && this.size.column === matrix.size.column
            && this.elements.every( function ( element, index ) {

            	return element === matrix.elements[ index ];

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

		while ( row > 1 && column > 1 ) {

			row --;
			column --;

		}

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
	 * @return {object} The main diagonal (as an array) of this matrix
	 */
	mainDiagonal() {

		return this.diagonal( 1, 1 );

	}

	/**
	 * (mutable) Swap the values of .size.row and .size.column
	 */
	sizeSwap() {

		this.size.row += this.size.column;
		this.size.column = this.size.row - this.size.column;
		this.size.row -= this.size.column;

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
		return this.clone();

	}

	/**
     * (mutable) Multiply every element of this matrix by a given scalar and
     * return a copy of this matrix after the multiplication is done
     *
     * @param {number} scalar The scalar to multiply this matrix by
     * @return {object} A copy of the instance of the matrix after multiplying
     */
	multiplyScalar( scalar ) {

		this.elements = this.elements.map( element => element * scalar ).slice();
		return this.clone();

	}

	/**
     * (mutable) Multiply every element of this matrix by -1 and return a copy
     * of this matrix after the multiplication is done
     *
     * @return {object} A copy of the instance of the matrix after negating
     */
	negate() {

		return this.multiplyScalar( - 1 );

	}

}

export { Matrix };
