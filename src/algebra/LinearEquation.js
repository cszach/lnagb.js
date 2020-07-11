/**
 * @author Nguyen Hoang Duong / <you_create@protonmail.com>
 */

/**
 * Encodes linear equations in mathematics.
 *
 * An instance of this class stores coefficients in an array and the constant
 * term.
 *
 * If you only need to deal with linear equations with 3 variables or fewer,
 * see {@link LinearEquations `LinearEquations`}.
 */
class LinearEquation {

	/**
	 * Constructs a `LinearEquation` instance, which encodes a linear equation.
	 *
	 * Arguments are optional. The constructor does not validate arguments if
	 * presented.
	 *
	 * @param {number[]} coefficients The coefficients of the linear equation
	 * @param {number} constant The constant term of the linear equation
	 */
	constructor( coefficients, constant ) {

		this.coefficients = [ 1 ]; // Default
		this.constant = constant || 0;

		if ( coefficients ) this.setCoefficientsFromArray( coefficients );

	}

	// GETTERS

	/**
	 * Returns the number of variables in this linear equation
	 *
	 * @return {number} The number of variables in this linear equation
	 */
	get numberOfVariables() {

		return this.coefficients.length;

	}

	// COMMON METHODS

	/**
	 * Creates an instance of `LinearEquation` that is exactly the same as this
	 * instance.
	 *
	 * @return {LinearEquation} An exact copy of this instance
	 */
	clone() {

		return new this.constructor( this.coefficients, this.constant );

	}

	/**
	 * Makes this linear equation exactly the same as another linear equation.
	 *
	 * @param {LinearEquation} equation The linear equation to copy from
	 * @return {LinearEquation} This linear equation (after copying)
	 */
	copy( equation ) {

		return this
			.setCoefficientsFromArray( equation.coefficients )
			.setConstant( equation.constant );

	}

	// SETTERS

	/**
	 * Sets the coefficients and the constant for this linear equation.
	 *
	 * @param {number[]} coefficients The coefficients for this equation
	 * @param {number} constant The constant for this equation
	 * @return {LinearEquation} This linear equation
	 */
	set( coefficients, constant ) {

		return this
			.setCoefficientsFromArray( coefficients )
			.setConstant( constant );

	}

	/**
	 * Sets the coefficients for this linear equation.
	 *
	 * @return {LinearEquation} This linear equation
	 */
	setCoefficients() {

		this.coefficients = Array.from( arguments );
		return this;

	}

	/**
	 * Sets the coefficients for this linear equation from a given array.
	 *
	 * @param {number[]} coefficients Array of coefficients for this equation
	 * @return {LinearEquation} This linear equation
	 */
	setCoefficientsFromArray( coefficients ) {

		let _coefs = this.coefficients; _coefs = [];

		for ( let i = 0, _length = coefficients.length; i < _length; i ++ )
			_coefs.push( coefficients[ i ] );

		return this;

	}

	/**
	 * Sets the constant for this linear equation.
	 *
	 * @param {number} constant The constant for this linear equation
	 * @return {LinearEquation} This linear equation
	 */
	setConstant( constant ) {

		this.constant = constant;
		return this;

	}

	// OPERATIONS

	/**
	 * Adds a linear equation to this linear equation.
	 *
	 * @param {LinearEquation} equation The equation to add to this equation
	 * @return {LinearEquation} This linear equation
	 */
	add( equation ) {

		let _n = this.numberOfVariables;

		if ( equation.numberOfVariables !== _n ) {

			console.error( "The operand does not have the same number of variables as this linear equation" );

		} else {

			let _coefs = this.coefficients;
			let coefs = equation.coefficients;

			for ( let i = 0; i < _n; i ++ ) _coefs[ i ] += coefs[ i ];
			this.constant -= equation.constant;

		}

		return this;

	}

	/**
	 * Subtracts a linear equation from this linear equation.
	 *
	 * @param {LinearEquation} equation The equation to subtract this equation to
	 * @return {LinearEquation} This linear equation
	 */
	subtract( equation ) {

		let _n = this.numberOfVariables;

		if ( equation.numberOfVariables !== _n ) {

			console.error( "The operand does not have the same number of variables as this linear equation" );

		} else {

			let _coefs = this.coefficients;
			let coefs = equation.coefficients;

			for ( let i = 0; i < _n; i ++ ) _coefs[ i ] -= coefs[ i ];
			this.constant -= equation.constant;

		}

		return this;

	}

	/**
	 * Multiplies this linear equation with a scalar.
	 *
	 * @param {number} k The scalar to multiply this equation by
	 * @return {LinearEquation} This linear equation
	 */
	multiplyScalar( k ) {

		let _n = this.numberOfVariables;
		let _coefs = this.coefficients;

		for ( let i = 0; i < _n; i ++ ) _coefs[ i ] *= k;
		this.constant *= k;

		return this;

	}

	// IMPORT & EXPORT

	/**
	 * Writes the coefficients and the constant term of this equation to a new
	 * array in that order.
	 *
	 * @return {number[]} The coefficients and the constant term of this equation
	 */
	toArray() {

		return [ ...this.coefficients, this.constant ];

	}

	/**
	 * Imports the coefficients and the constant term of another linear equation
	 * stored in an array.
	 *
	 * @param {number[]} array The array to import from
	 * @return {LinearEquation} This linear equation
	 */
	fromArray( array ) {

		let n = array.length - 1;
		let _coefs = this.coefficients; _coefs = [];
		let i;

		for ( i = 0; i < n; i ++ ) _coefs.push( array[ i ] );
		this.constant = array[ i ];

		return this;

	}

}

export { LinearEquation };
