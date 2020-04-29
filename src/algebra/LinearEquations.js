import { LinearEquation } from "./LinearEquation.js";

/**
 * @fileoverview
 * These classes encode linear equations of 1, 2, and 3 variables. You should
 * use these instead of `LinearEquation` whenever possible.
 *
 * These are all child classes of `LinearEquation`.
 *
 * @author Nguyen Hoang Duong / you_create@protonmail.com
 */

/**
 * Encodes linear equations of 1 variable.
 */
class LinearEquation1 extends LinearEquation {

	/**
	 * Constructs a `LinearEquation1` instance.
	 *
	 * @param {string} name The name for the new instance
	 */
	constructor( name = "LinearEquation1" ) {

		super( name );

	}

	/**
	 * Checks if *o* properly encodes a linear equation of 1 variable.
	 *
	 * Criteria:
	 * - [`LinearEquation.isIt( o )`][1] returns `true`
	 * - The `coefficients` property is an array with only 1 element
	 *
	 * [1]: LinearEquation#LinearEquation.isIt
	 */
	static isIt( o ) {

		return LinearEquation.isIt( o ) && o.coefficients.length === 1;

	}

	/**
	 * @return {number} The first (and only) coefficient of this equation
	 */
	get a() {

		return this.coefficients[ 0 ];

	}

}

/**
 * Encodes linear equations of 2 variables.
 */
class LinearEquation2 extends LinearEquation {

	/**
	 * Constructs a `LinearEquation2` instance.
	 *
	 * @param {string} name The name for the new instance
	 */
	constructor( name = "LinearEquation2" ) {

		super( name );
		this.coefficients = [ 1, 1 ];

	}

	/**
	 * Checks if *o* properly encodes a linear equation of 2 variables.
	 *
	 * Criteria:
	 * - [`LinearEquation.isIt( o )`][1] returns `true`
	 * - The `coefficients` property is an array with 2 elements
	 *
	 * [1]: LinearEquation#LinearEquation.isIt
	 */
	static isIt( o ) {

		return LinearEquation.isIt( o ) && o.coefficients.length === 2;

	}

	/**
	 * @return {number} The first coefficient of this equation (usually denoted *a*)
	 */
	get a() {

		return this.coefficients[ 0 ];

	}

	/**
	 * @return {number} The second coefficient of this equation (usually denoted *b*)
	 */
	get b() {

		return this.coefficients[ 1 ];

	}

}

/**
 * Encodes linear equations of 3 variables.
 */
class LinearEquation3 extends LinearEquation {

	/**
	 * Constructs a `LinearEquation3` instance.
	 *
	 * @param {string} name The name for the new instance
	 */
	constructor( name = "LinearEquation3" ) {

		super( name );
		this.coefficients = [ 1, 1, 1 ];

	}

	/**
	 * Checks if *o* properly encodes a linear equation of 3 variables.
	 *
	 * Criteria:
	 * - [`LinearEquation.isIt( o )`][1] returns `true`
	 * - The `coefficients` property is an array with 3 elements
	 *
	 * [1]: LinearEquation#LinearEquation.isIt
	 */
	static isIt( o ) {

		return LinearEquation.isIt( o ) && o.coefficients.length === 3;

	}

	/**
	 * @return {number} The first coefficient of this equation (usually denoted *a*)
	 */
	get a() {

		return this.coefficients[ 0 ];

	}

	/**
	 * @return {number} The second coefficient of this equation (usually denoted *b*)
	 */
	get b() {

		return this.coefficients[ 1 ];

	}

	/**
	 * @return {number} The third coefficient of this equation (usually denoted *c*)
	 */
	get c() {

		return this.coefficients[ 2 ];

	}

}

export { LinearEquation1, LinearEquation2, LinearEquation3 };
