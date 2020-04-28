import { SquareMatrix } from './SquareMatrix.js';

/**
 * @author Nguyen Hoang Duong / you_create@protonmail.com / GitHub: you-create
 */

/**
 * Encodes read-only identity matrices.
 *
 * Matrices instanced from this class are meant to be identity matrices at all
 * times. Mutable methods inherited from `SquareMatrix` (and `Matrix`) no longer
 * work on instances of `IdentityMatrix` (except for `setDimensions`).
 */
class IdentityMatrix extends SquareMatrix {

	/**
	 * Constructs an `IdentityMatrix` instance.
	 *
	 * The instance initially encodes a 2 x 2 identity matrix.
	 *
	 * @param {string} name The denotation for the new matrix
	 */
	constructor( name = null ) {

		super( name );

	}

	/**
	 * Checks if *o* encodes an identity matrix and returns `true` if it does.
	 *
	 * @param {object} o The object to check
	 * @return {boolean} `true` if *o* is an identity matrix, false otherwise
	 */
	static isIt( o ) {

		return SquareMatrix.isIt( o )
			&& o.elements.every( function ( e, i ) {

				let r = Math.floor( i / this.size.rows ) + 1; // Row number
				return e === ( ( i === this.elementIndex( r, r ) ) ? 1 : 0 );

			}, o );

	}

	/**
	 * Same as the `copy` method in the base class, the only difference is that
	 * only identity matrices are allowed to be the first argument.
	 *
	 * @param {Matrix} m An identity matrix to copy from
	 * @param {boolean} copyName Set to `true` to copy the denotation of *m*
	 * @return {Matrix} This matrix
	 */
	copy( m, copyName = false ) {

		if ( ! IdentityMatrix.isIt( m ) ) return this;

		this.size.rows = m.size.rows;
		this.size.columns = m.size.columns;
		this.elements = m.elements.slice();

		this.name = ( copyName ) ? m.name : this.name;

		return this;

	}

	set() {

		console.warn( "You cannot set elements for instances of IdentityMatrix" );
		return this;

	}

	zero() {

		console.warn( "You cannot make an instance of IdentityMatrix zero" );
		return this;

	}

	identity() {

		console.info( "This matrix is already an identity matrix" );
		return this;

	}

	interchargeRows() {

		console.warn( "Elementary operations are not allowed on instances of IdentityMatrix" );
		return this;

	}

	multiplyRowByScalar() {

		console.warn( "Elementary operations are not allowed on instances of IdentityMatrix" );
		return this;

	}

	addRowTimesScalarToRow() {

		console.warn( "Elementary operations are not allowed on instances of IdentityMatrix" );
		return this;

	}

	transpose() {

		console.warn( "Transposition is useless on identity matrices" );
		return this;

	}

	multiplyScalar() {

		console.warn( "Scalar multiplication is not allowed on instances of IdentityMatrix" );
		return this;

	}

	negate() {

		console.warn( "Negation is not allowed on instances of IdentityMatrix" );
		return this;

	}

	add() {

		console.warn( "Addition is not allowed on instances of IdentityMatrix" );
		return this;

	}

	subtract() {

		console.warn( "Subtraction is not allowed on instances of IdentityMatrix" );
		return this;

	}

	multiply() {

		console.warn( "Multiplication is not allowed on instances of IdentityMatrix" );
		return this;

	}

	multiply() {

		console.warn( "Pre-multiplication is not allowed on instances of IdentityMatrix" );
		return this;

	}

}

export { IdentityMatrix };
