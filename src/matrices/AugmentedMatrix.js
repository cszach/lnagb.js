import { loop } from '../utils.js';
import { Matrix } from './Matrix.js';

/**
 * @author Nguyen Hoang Duong / you_create@protonmail.com / GitHub: you-create
 */

/**
 * Encodes augmented matrices in Linear Algebra.
 *
 * This class constructs instances similar to those of the `Matrix` class, with
 * one difference: The `size` property has two additional properties:
 *   - `l`: The number of columns of the matrix on the left
 *   - `r`: The number of columns of the matrix on the right
 *
 * **Note**: You can freely change the value of the `name` property, but `size`
 * and `elements` should only be changed using this class's methods.
 */
class AugmentedMatrix extends Matrix {

	// CONSTRUCTOR

	/**
	 * Constructs an `AugmentedMatrix` instance, which encodes an augmented
	 * matrix.
	 *
	 * @param {Matrix} m The matrix on the left side of the augmented matrix
	 * @param {Matrix} n The matrix on the right side of the augmented matrix
	 * @param {string} name The denotation for the new matrix
	 */
	constructor( m, n, name = null ) {

		if ( m.size.rows !== n.size.rows ) {

 			console.error( "Matrices are not valid to construct an augmented matrix" );
 			return;

 		}

		super( name );

		this.size.l = m.size.columns;
		this.size.r = n.size.columns;

		loop( this.size.rows, function ( i ) {

			this.elements.push( ...m.row( i ), ...n.row( i ) );

		}, this );

	}

	// STATIC PROPERTIES / METHODS

	/**
	 * Checks if object *o* is a valid `AugmentedMatrix` instance.
	 *
	 * Note that methods inside the `AugmentedMatrix` class do not check if
	 * their parameters are valid (including matrices).
	 *
	 * Criteria for being "valid":
	 * - The constructor is `AugmentedMatrix`
	 * - Has the `size` property that has
	 *     - the `row` property being a positive integer
	 *     - the `column` property also being a positive integer
	 *     - the `l` and `r` properties that sum to the `column` property
	 * - Has the `elements` property and it is a JavaScript array of numbers
	 *   and the number of elements must equal to the product of `.size.rows`
	 *   and `.size.columns`
	 *
	 * @param {object} o The object to check
	 * @return {boolean} `true` if *o* is an `AugmentedMatrix` instance,
	 * `false` otherwise
	 */
	static isAugmentedMatrix( o ) {

		return o.constructor.name === "AugmentedMatrix"
			&& o.elements.every( ( e ) => Number.isFinite( e ) )
			&& o.elements.length === o.numberOfElements
			&& o.size.columns === o.size.l + o.size.r;

	}

	// GETTERS

	/**
	 * Obtains the matrix on the left side of this augmented matrix.
	 *
	 * @return {Matrix} The matrix on the left of this augmented matrix
	 */
	get leftMatrix() {

		let result = new Matrix( this.size.rows, this.size.l );

		loop( this.size.rows, function ( i ) {

			result.elements.push( ...this.row( i ).slice( 0, this.size.l ) );

		}, this );

		return result;

	}

	/**
	 * Obtains the matrix on the right side of this augmented matrix.
	 *
	 * @return {Matrix} The matrix on the right of this augmented matrix
	 */
	get rightMatrix() {

		let result = new Matrix( this.size.rows, this.size.r );

		loop( this.size.rows, function ( i ) {

			result.elements.push( ...this.row( i ).slice( this.size.l ) );

		}, this );

		return result;

	}

	// RE-IMPLEMENT METHODS FROM THE MATRIX CLASS THAT MUST WORK DIFFERENTLY
	// IN THIS CLASS

	/**
	 * Makes this augmented matrix the same as augmented matrix *m*.
	 *
	 * @param {AugmentedMatrix} m The instance to copy from
	 * @param {boolean} copyName Set to `true` to copy the denotation of *m*
	 * @return {AugmentedMatrix} This matrix
	 */
	copy( m, copyName = false ) {

		this.size.rows = m.size.rows;
		this.size.columns = m.size.columns;
		this.size.l = m.size.l;
		this.size.r = m.size.r;
		this.elements = m.elements.slice();

		this.name = ( copyName ) ? m.name : this.name;

		return this;

	}

 	/**
	 * Creates and returns a clone of this instance.
	 *
	 * @return {AugmentedMatrix} A clone of this matrix
	 */
	clone() {

		return new AugmentedMatrix().copy( this, true );

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
