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
 * see [`LinearEquations`](./LinearEquations).
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

		this.coefficients = coefficients || [ 1 ];
		this.constant = constant || 0;

	}

	/**
	 * Checks if an object is a good instance of `LinearEquation`.
	 *
	 * Criteria:
	 * - The constructor is `LinearEquation`;
	 * - Has the `coefficients` property that is an array that stores a finite
	 *   amount of numbers; and
	 * - Has the `constant` property that is a number
	 *
	 * @param {object} o The object to check
	 * @return {boolean} `true` if the object satisfies the criteria,
	 * `false` otherwise
	 */
	static isIt( o ) {

		return o.constructor.name === "LinearEquation"
			&& o.coefficients.every( ( coef ) => Number.isFinite( coef ) )
			&& Number.isFinite( o.constant );

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

		this.coefficients = [];
		coefficients.forEach( ( coef ) => {

			this.coefficients.push( coef );

		}, this );

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

			let tCoefs = this.coefficients;
			let eCoefs = equation.coefficients;

			for ( let i = 0; i < _n; i ++ ) tCoefs[ i ] += eCoefs[ i ];
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

			let tCoefs = this.coefficients;
			let eCoefs = equation.coefficients;

			for ( let i = 0; i < _n; i ++ ) tCoefs[ i ] -= eCoefs[ i ];
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

		let tCoefs = this.coefficients;
		let _n = this.numberOfVariables;

		for ( let i = 0; i < _n; i ++ ) tCoefs[ i ] *= k;
		this.constant *= k;

		return this;

	}

	// IMPORT & EXPORT

	/**
	 * Writes the coefficients and the constant term of this equation to a new
	 * array in that order.
	 *
	 * @return {number[]} The array containing the coefficients and the constant
	 * of this matrix
	 */
	toArray() {

		return [ ...this.coefficients, this.constant ];

	}

	/**
	 * Imports the coefficients and the constant term of another linear equation
	 * stored in an array.
	 *
	 * @param {number[]} a The array to import from
	 * @return {LinearEquation} This linear equation
	 */
	fromArray( a ) {

		let _nVar = a.length - 1;

		this.setCoefficientsFromArray( a.slice( 0, _nVar ) )
			.setConstant( a[ _nVar ] );

		return this;

	}

}

export { LinearEquation };
