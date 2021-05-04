import { BaseMatrix } from './BaseMatrix.js';

/**
 * @author Nguyen Hoang Duong / <you_create@protonmail.com>
 */

/**
 * Encodes 1 x 1 matrices.
 */
class Matrix1 extends BaseMatrix {

	/**
	 * Constructs a `Matrix1` instance, which encodes a matrix of size 1 x 1.
	 *
	 * The matrix starts as a 1 x 1 identity matrix.
	 */
	constructor() {

		this.size = { rows: 1, columns: 1 };
		this.elements = [ 1 ];

		this.numberOfEntries = 1;

	}

	/* GETTERS */

	get rows() {

		return [[ this.elements[ 0 ] ]];

	}

	get columns() {

		return [[ this.elements[ 0 ] ]];

	}

	get rank() {

		return ( this.elements[ 0 ] === 0 ) ? 0 : 1;

	}

	get negative() {

		return this.clone().negate();

	}

	get transpose() {

		return this.clone().transpose();

	}

	/* COMMON METHODS */

	copy( matrix ) {

		this.elements[ 0 ] = matrix.elements[ 0 ];
		return this;

	}

	clone() {

		return new this.constructor().set( this.elements[ 0 ] );

	}

	/* SETTERS */

	set( _11 ) {

		this.elements[ 0 ] = _11;
		return this;

	}

	setEntry( i, j, value ) {

		this.elements[ 0 ] = value;
		return this;

	}

	zero() {

		this.elements[ 0 ] = 0;
		return this;

	}

	/* CHECKERS */

	sameSize( matrix ) {

		return sameSize( this, matrix );

	}

	equals( matrix ) {

		return equal( this, matrix );

	}

	/* ACCESSORS */



}

export { Matrix1 };
