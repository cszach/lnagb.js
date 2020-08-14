import { LinearEquation } from "./LinearEquation.js";

/**
 * @module LinearEquations
 * @description
 *
 * Contains classes that encode linear equations of 1, 2, and 3 variables. You
 * should use these instead of {@link module:LinearEquation~LinearEquation}
 * whenever possible.
 *
 * @see {@link module:LinearEquation}
 * @author Nguyen Hoang Duong / <you_create@protonmail.com>
 */

/**
 * Encodes linear equations of 1 variable.
 *
 * @extends {module:LinearEquation~LinearEquation}
 */
class LinearEquation1 extends LinearEquation {

	/**
	 * Constructs a `LinearEquation1` instance, which encodes a linear equation
	 * with 1 variable.
	 *
	 * @param {number} a The coefficient that accompanies the variable.
	 * @param {number} b The constant term.
	 */
	constructor( a, b ) {

		super( [ a ], b );

	}

	/**
	 * Returns the first (and only) coefficient of this equation.
	 *
	 * @return {number} The first (and only) coefficient of this equation
	 */
	get a() {

		return this.coefficients[ 0 ];

	}

	/**
	 * Sets the coefficients for this linear equation.
	 *
	 * @param {number} a The first coefficient for this equation.
	 * @return {LinearEquation} This equation
	 */
	setCoefficients( a ) {

		this.coefficients[ 0 ] = a;
		return this;

	}

}

/**
 * Encodes linear equations of 2 variables.
 *
 * @extends {module:LinearEquation~LinearEquation}
 */
class LinearEquation2 extends LinearEquation {

	/**
	 * Constructs a `LinearEquation2` instance, which encodes a linear equation
	 * with 2 variables.
	 *
	 * @param {number} a The first coefficient.
	 * @param {number} b The second coefficient.
	 * @param {number} c The constant term.
	 */
	constructor( a, b, c ) {

		super( [ a, b ], c );

	}

	/**
	 * Returns the first coefficient of this equation (usually denoted *a*).
	 *
	 * @return {number} The first coefficient of this equation
	 */
	get a() {

		return this.coefficients[ 0 ];

	}

	/**
	 * Returns the second coefficient of this equation (usually denoted *b*).
	 *
	 * @return {number} The second coefficient of this equation
	 */
	get b() {

		return this.coefficients[ 1 ];

	}

	/**
	 * Sets the coefficients for this linear equation.
	 *
	 * @param {number} a The first coefficient for this equation.
	 * @param {number} b The second coefficient for this equation.
	 * @return {LinearEquation} This equation
	 */
	setCoefficients( a, b ) {

		let _coefs = this.coefficients;

		_coefs[ 0 ] = a; _coefs[ 1 ] = b;
		return this;

	}

}

/**
 * Encodes linear equations of 3 variables.
 *
 * @extends {module:LinearEquation~LinearEquation}
 */
class LinearEquation3 extends LinearEquation {

	/**
	 * Constructs a `LinearEquation3` instance, which encodes a linear equation
	 * with 3 variables.
	 *
	 * @param {number} a The first coefficient.
	 * @param {number} b The second coefficient.
	 * @param {number} c The third coefficient.
	 * @param {number} d The constant term.
	 */
	constructor( a, b, c, d ) {

		super( [ a, b, c ], d );

	}

	/**
	 * Returns the first coefficient of this equation (usually denoted *a*).
	 *
	 * @return {number} The first coefficient of this equation
	 */
	get a() {

		return this.coefficients[ 0 ];

	}

	/**
	 * Returns the second coefficient of this equation (usually denoted *b*).
	 *
	 * @return {number} The second coefficient of this equation
	 */
	get b() {

		return this.coefficients[ 1 ];

	}

	/**
	 * Returns the third coefficient of this equation (usually denoted *c*).
	 *
	 * @return {number} The third coefficient of this equation
	 */
	get c() {

		return this.coefficients[ 2 ];

	}

	/**
	 * Sets the coefficients for this linear equation.
	 *
	 * @param {number} a The first coefficient for this equation.
	 * @param {number} b The second coefficient for this equation.
	 * @param {number} c The third coefficient for this equation.
	 * @return {LinearEquation} This equation
	 */
	setCoefficients( a, b, c ) {

		let _coefs = this.coefficients;

		_coefs[ 0 ] = a; _coefs[ 1 ] = b; _coefs[ 2 ] = c;
		return this;

	}

}

export { LinearEquation1, LinearEquation2, LinearEquation3 };
