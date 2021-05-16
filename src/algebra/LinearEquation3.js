/**
 * @module LinearEquation3
 * @description
 *
 * Contains the {@link module:LinearEquation3~LinearEquation3} class, which
 * encodes linear equations with 3 variables.
 */

/**
 * Encodes linear equations of 3 variables.
 *
 * @see {@link module:LinearEquation~LinearEquation} for common properties
 */
class LinearEquation3 {

	constructor( a, b, c, d ) {

		this.a = a;
		this.b = b;
		this.c = c;
		this.d = d;
		this.coefficients = [ a, b, c ];
		this.constant = d;
		this.numberOfVariables = 3;

	}

	clone() {

		return new this.constructor( this.a, this.b, this.c, this.d );

	}

	multiplyScalar( k ) {

		let _ = this.coefficients;

		this.a = _[ 0 ] *= k;
		this.b = _[ 1 ] *= k;
		this.c = _[ 2 ] *= k;
		this.d = this.constant *= k;

		return this;

	}

	negate() {

		return this.multiplyScalar( - 1 );

	}

	add( equation ) {

		let _ = this.coefficients;
		let e = equation.coefficients;

		this.a = _[ 0 ] += e[ 0 ];
		this.b = _[ 1 ] += e[ 1 ];
		this.c = _[ 2 ] += e[ 2 ];
		this.d = this.constant += equation.constant;

		return this;

	}

	subtract( equation ) {

		let _ = this.coefficients;
		let e = equation.coefficients;

		this.a = _[ 0 ] -= e[ 0 ];
		this.b = _[ 1 ] -= e[ 1 ];
		this.c = _[ 2 ] -= e[ 2 ];
		this.d = this.constant -= equation.constant;

		return this;

	}

}

export { LinearEquation3 };
