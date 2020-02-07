import { Matrix } from './Matrix.js';

/**
 * @author Nguyen Hoang Duong / you_create@protonmail.com / GitHub: you-create
 */

/**
 * Class for augmented matrices in Linear Algebra.
 *
 * An augmented matrix is a matrix obtained by appending the columns of two
 * matrices.
 */
class AugmentedMatrix {

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

		/*
		 * These are the properties that every AugmentedMatrix instance has.
		 *
		 * .name: The name of this matrix, default to "AugmentedMatrix"
		 * .elements: Array of matrices that this matrix is obtained from
		 */

		this.name = "AugmentedMatrix";
		this.elements = new Array( 2 );

		this.elements[ 0 ] = m.clone();
		this.elements[ 1 ] = n.clone();

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

}

export { AugmentedMatrix };
