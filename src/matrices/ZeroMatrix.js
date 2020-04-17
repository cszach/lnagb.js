import { Matrix } from "./Matrix.js";

/**
 * @author Nguyen Hoang Duong / you_create@protonmail.com
 */

/**
 * Encodes read-only (in some sense) zero matrices.
 *
 * Matrices instanced from this class are meant to be zero matrices at all
 * times. Mutable methods inherited from `Matrix` no longer work on instances
 * of `ZeroMatrix` (except for `setDimensions`, `zero`, `sizeSwap`,
 * `transpose`).
 */
class ZeroMatrix extends Matrix {

	/**
	 * Constructs a `ZeroMatrix` instance.
	 *
	 * @param {string} name The name for the new instance
	 */
	constructor( name ) {

		super( name );

	}

	/**
	 * Checks if *o* encodes a zero matrix. An instance of `Matrix` carrying
	 * only zeros are also considered to be encoding a zero matrix.
	 *
	 * @param {object} o The object to check
	 * @return {boolean} `true` if *o* is a zero matrix, `false` otherwise
	 */
	static isIt( o ) {

		return Matrix.isIt( o ) && o.elements.every( ( e ) => e === 0 );

	}

	/**
	 * Same as the `copy` method in the base class, the only difference is that
	 * only zero matrices are allowed to be the first argument.
	 *
	 * @param {Matrix} m A zero matrix to copy from
	 * @param {boolean} copyName Set to `true` to copy the name of *m* also
	 * @return {Matrix} This matrix
	 */
	copy( m, copyName ) {

		if ( ! ZeroMatrix.isIt( m ) ) return this;

		this.size.rows = m.size.rows;
		this.size.columns = m.size.columns;
		this.elements = m.elements.slice();

		this.name = ( copyName ) ? m.name : this.name;

		return this;

	}

	set() {

		console.warn( "You cannot set elements for instances of ZeroMatrix" );
		return this;

	}

	zero() {

		return this;

	}

	interchargeRows() {

		console.warn( "Elementary operations are either useless or not allowed on instances of ZeroMatrix" );
		return this;

	}

	multiplyRowByScalar() {

		console.warn( "Elementary operations are either useless or not allowed on instances of ZeroMatrix" );
		return this;

	}

	addRowTimesScalarToRow() {

		console.warn( "Elementary operations are either useless or not allowed on instances of ZeroMatrix" );
		return this;

	}

	transpose() {

		this.sizeSwap();
		return this;

	}

	multiplyScalar() {

		console.warn( "Scalar multiplication is not allowed on instances of ZeroMatrix" );
		return this;

	}

	negate() {

		console.warn( "Negation is not allowed on instances of ZeroMatrix" );
		return this;

	}

	add() {

		console.warn( "Addition is not allowed on instances of ZeroMatrix" );
		return this;

	}

	subtract() {

		console.warn( "Subtraction is not allowed on instances of ZeroMatrix" );
		return this;

	}

	multiply() {

		console.warn( "Multiplication is not allowed on instances of ZeroMatrix" );
		return this;

	}

	multiply() {

		console.warn( "Pre-multiplication is not allowed on instances of ZeroMatrix" );
		return this;

	}

}

export { ZeroMatrix };
