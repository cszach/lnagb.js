/**
 * @module LinearEquation2
 * @description
 *
 * Contains the {@link module:LinearEquation2~LinearEquation2} class, which
 * encodes linear equations with 2 variables.
 */

/**
 * Encodes linear equations of 2 variables.
 *
 * @see {@link module:LinearEquation~LinearEquation}
 */
class LinearEquation2 {

	constructor( a, b, c ) {

		this.a = a;
		this.b = b;
		this.c = c;
		this.coefficients = [ a, b ];
		this.constant = c;
		this.numberOfVariables = 2;

	}

	clone() {

		return new this.constructor( this.a, this.b, this.c );

	}

	multiplyScalar( k ) {

		let _ = this.coefficients;

		this.a = _[ 0 ] *= k;
		this.b = _[ 1 ] *= k;
		this.c = this.constant *= k;

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
		this.c = this.constant += equation.constant;

		return this;

	}

	subtract( equation ) {

		let _ = this.coefficients;
		let e = equation.coefficients;

		this.a = _[ 0 ] -= e[ 0 ];
		this.b = _[ 1 ] -= e[ 1 ];
		this.c = this.constant -= equation.constant;

		return this;

	}

}

export { LinearEquation2 };
