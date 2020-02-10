import { loop } from '../utils.js';
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

		/*
		 * These are the properties that every AugmentedMatrix instance has.
		 *
		 * .name: The name of this matrix, default to "AugmentedMatrix"
		 * .size: The size of the matrix
		 * .elements: Elements of the matrix in row-major ordering
		 */

		this.name = "AugmentedMatrix";
		this.elements = new Array();

		if ( m.size.row !== n.size.row ) {

			console.error( "Matrices are not valid to construct an augmented matrix" );
			return;

		}

		this.size = {
			row: m.size.row,
			column: m.size.column + n.size.column
		};

		loop( this.size.row, function ( i ) {

			this.elements.push( ...m.row( i ), ...n.row( i ) );

		} );

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
