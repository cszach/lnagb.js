/**
 * @module LinearEquation
 * @description
 *
 * Contains the {@link module:LinearEquation~LinearEquation} class, which encodes
 * linear equations of any number of variables.
 *
 * @author Novak / <novakcgx@protonmail.com>
 */

/**
 * Encodes linear equations by storing coefficients in an array and the constant
 * term. Coefficients are stored left-to-right.
 */
class LinearEquation {

	/**
	 * Constructs a `LinearEquation` instance, which encodes a linear equation.
	 *
	 * @param {number[]} coefficients The coefficients of the linear equation.
	 * @param {number} constant The constant term of the linear equation.
	 */
	constructor( coefficients, constant ) {

		/**
		 * @member {number[]}
		 * @description Array of this equation's coefficients.
		 */
		this.coefficients = coefficients; // Default

		/**
		 * @member {number}
		 * @description The constant term of this linear equation.
		 */
		this.constant = constant;

		/**
		 * @member {number}
		 * @description The number of variables in this linear equation.
		 */
		this.numberOfVariables = coefficients.length;

	}

	/**
	 * Returns an instance of `LinearEquation` that is exactly the same as this
	 * instance.
	 *
	 * @returns {LinearEquation} An exact copy of this instance
	 */
	clone() {

		return new this.constructor( this.coefficients, this.constant );

	}

	/**
	 * Multiplies this linear equation with a scalar.
	 *
	 * @param {number} k The scalar to multiply this equation by.
	 * @returns {LinearEquation} This linear equation
	 */
	multiplyScalar( k ) {

		let _coefs = this.coefficients;

		for ( let i = 0, _n = this.numberOfVariables; i < _n; i ++ ) _coefs[ i ] *= k;
		this.constant *= k;

		return this;

	}

	/**
	 * Negates this equation.
	 *
	 * @returns {LinearEquation} This linear equation
	 */
	negate() {

		return this.multiplyScalar( - 1 );

	}

	/**
	 * Adds a linear equation to this linear equation.
	 *
	 * @param {LinearEquation} equation The equation to add to this equation. Both
	 * equations must have the same number of coefficients.
	 * @returns {LinearEquation} This linear equation
	 */
	add( equation ) {

		let _n = this.numberOfVariables;

		if ( _n !== equation.numberOfVariables ) {

			console.error( "Incompatible equations for addition" );
			return this;

		}

		let _ = this.coefficients;
		let e = equation.coefficients;

		for ( let i = 0; i < _n; i ++ ) _[ i ] += e[ i ];
		this.constant += equation.constant;

		return this;

	}

	/**
	 * Subtracts a linear equation from this linear equation.
	 *
	 * @param {LinearEquation} equation The equation to subtract this equation to.
	 * Both equations must have the same number of coefficients.
	 * @returns {LinearEquation} This linear equation
	 */
	subtract( equation ) {

		let _n = this.numberOfVariables;

		if ( equation.numberOfVariables !== _n ) {

			console.error( "Incompatible equations for subtraction" );
			return this;

		}

		let _ = this.coefficients;
		let e = equation.coefficients;

		for ( let i = 0; i < _n; i ++ ) _[ i ] -= e[ i ];
		this.constant -= equation.constant;

		return this;

	}

	/**
	 * Returns an array containing the coefficients from left to right and the
	 * constant. Helpful in converting to a row or column vector.
	 *
	 * @returns {number[]} The array representation of this linear equation
	 */
	toArray() {

		return [ ...this.coefficients, this.constant ];

	}

}

export { LinearEquation };
