import { loop } from '../utils.js';
import { Matrix } from './Matrix.js';

/**
 * @author Nguyen Hoang Duong / you_create@protonmail.com / GitHub: you-create
 */

/**
 * Class for augmented matrices in Linear Algebra.
 *
 * An augmented matrix is a matrix obtained by appending the columns of two
 * matrices. This class constructs instances similar to those of the `Matrix`
 * class, with 2 differences:
 * - The `name` property defaults to "_AugmentedMatrix_"
 * - The `size` property has two additional properties:
 *     - `l`: The number of columns of the matrix on the left
 *     - `r`: The number of columns of the matrix on the right
 *
 * **Note**: You can freely change the value of the `name` property, but `size`
 * and `elements` should only be changed using this class's methods.
 */
class AugmentedMatrix extends Matrix {

	// CONSTRUCTOR

	/**
	 * Constructs an `AugmentedMatrix` instance.
	 *
	 * An `AugmentedMatrix` instance is used to represent an augmented matrix.
	 *
	 * @param {number} row The number of rows for the new augmented matrix
	 * @param {object} m The matrix on the left side of the augmented matrix
	 * @param {object} n The matrix on the right side of the augmented matrix
	 */
	constructor( row, m, n ) {

		if ( m.size.row !== n.size.row || m.size.row !== row ) {

 			console.error( "Matrices are not valid to construct an augmented matrix" );
 			return;

 		}

		// (cache) Number of columns in this augmented matrix
		let numberOfColumns = m.size.column + n.size.column;

		super( row, numberOfColumns );

		this.name = "AugmentedMatrix";
		this.size.l = m.size.column;
		this.size.r = n.size.column;

		loop( this.size.row, function ( i ) {

			this.elements.push( ...m.row( i ), ...n.row( i ) );

		}, this );

	}

	// STATIC PROPERTIES / METHODS

	/**
	 * Checks if object *o* is a valid `AugmentedMatrix` instance
	 *
	 * Note that methods inside the `AugmentedMatrix` class do not check if
	 * their parameters are valid (including matrices).
	 *
	 * Criteria for being "valid":
	 * - The constructor is `AugmentedMatrix`
	 * - Has the `name` property
	 * - Has the `elements` property and it is a JavaScript array that...
	 *     - has a length of 2; and
	 *     - every element of it is a valid `Matrix` instance that has the same
	 *       number of rows as the other matrix
	 *
	 * @param {object} o The object to check
	 * @return {boolean} `true` if *o* is an `AugmentedMatrix` instance,
	 * `false` otherwise
	 */
	static isAugmentedMatrix( o ) {

		return o.constructor.name === "AugmentedMatrix" && o.name
			&& o.elements.every( ( e ) => Matrix.isMatrix( e ) )
			&& o.elements[ 0 ].size.row === o.elements[ 1 ].size.row;

	}

	// GETTERS

	/**
	 * Obtain the matrix on the left side of this augmented matrix.
	 *
	 * @return {object} The matrix on the left as an instance of `Matrix`
	 */
	get leftMatrix() {

		let result = new Matrix( this.size.row, this.size.l );

		loop( this.size.row, function ( i ) {

			result.elements.push( ...this.row( i ).slice( 0, this.size.l ) );

		}, this );

		return result;

	}

	/**
	 * Obtain the matrix on the right side of this augmented matrix.
	 *
	 * @return {object} The matrix on the right as an instance of `Matrix`
	 */
	get rightMatrix() {

		let result = new Matrix( this.size.row, this.size.r );

		loop( this.size.row, function ( i ) {

			result.elements.push( ...this.row( i ).slice( this.size.l ) );

		}, this );

		return result;

	}

	// RE-IMPLEMENT METHODS FROM THE MATRIX CLASS THAT MUST WORK DIFFERENTLY
	// IN THIS CLASS

	/**
	 * Makes this augmented matrix the same as augmented matrix *m*.
	 *
	 * @param {object} m The `AugmentedMatrix` instance to copy from
	 */
	copy( m ) {

		this.size.row = m.size.row;
		this.size.column = m.size.column;
		this.size.l = m.size.l;
		this.size.r = m.size.r;
		this.elements = m.elements.slice();

	}

 	/**
	 * Creates and returns a clone of this instance.
	 *
	 * @return {object} A clone of this matrix
	 */
	clone() {

		let clone = new AugmentedMatrix(
			this.size.row,
			this.leftMatrix,
			this.rightMatrix
		);

		clone.name = this.name;

		return clone;

	}

	// DISALLOW SOME METHODS FROM THE MATRIX CLASS

	sizeSwap() {

		console.error( "The sizeSwap method cannot be used with instances of AugmentedMatrix" );
		return;

	}

	transpose() {

		console.error( "Transposition is not allowed on augmented matrices" );
		return this;

	}

	add() {

		console.error( "Addition is not allowed on augmented matrices" );
		return this;

	}

	subtract() {

		console.error( "Subtraction is not allowed on augmented matrices" );
		return this;

	}

	multiply() {

		console.error( "Multiplication is not allowed on augmented matrices" );
		return this;

	}

	premultiply() {

		console.error( "Pre-multiplication is not allowed on augmented matrices" );
		return this;

	}

}

export { AugmentedMatrix };
