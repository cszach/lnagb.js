/**
 * @author Nguyen Hoang Duong / you_create@protonmail.com / GitHub: you-create
 */

/**
 * Encodes linear equations in mathematics.
 *
 * If you only need to deal with linear equations with 3 variables or fewer,
 * see [`LinearEquations`](./LinearEquations).
 */
class LinearEquation {

	/**
	 * Constructs a `LinearEquation` instance.
	 *
	 * @param {string} name The name for the new instance
	 */
	constructor( name = "LinearEquation" ) {

		this.name = name;
		this.coefficients = [ 1 ];
		this.constant = 0;

	}

	/**
	 * Checks if *o* properly encodes a linear equation.
	 *
	 * Criteria:
	 * - The constructor or its prototype is `LinearEquation`
	 * - Has the `coefficients` property that is an array that stores a finite
	 *   amount of numbers
	 * - Has the `constant` property that is a number
	 *
	 * @param {object} o The object to check
	 * @return {boolean} `true` if *o* satisfies the criteria, `false` otherwise
	 */
	static isIt( o ) {

		return ( o.constructor.name === "LinearEquation"
			|| o.constructor.name === "LinearEquation1"
			|| o.constructor.name === "LinearEquation2"
			|| o.constructor.name === "LinearEquation3" )
			&& o.coefficients.every( ( coef ) => Number.isFinite( coef ) )
			&& Number.isFinite( o.constant );

	}

	/**
	 * @return {number} The number of coefficients/variables in this linear equation
	 */
	get numberOfVariables() {

		return this.coefficients.length;

	}

	/**
	 * Sets the coefficients and the constant for this linear equation.
	 *
	 * @param {number[]} coefficients The coefficients for this equation
	 * @param {number} constant The constant for this equation
	 * @return {LinearEquation} This linear equation (after setting values)
	 */
	set( coefficients, constant ) {

		this.setCoefficients( coefficients );
		this.setConstant( constant );

		return this;

	}

	/**
	 * Sets the coefficients for this linear equation. Arguments to this method
	 * are assumed to be the coefficients given in order from left to right.
	 *
	 * @return {LinearEquation} This linear equation (after setting the coefficients)
	 */
	setCoefficients() {

		this.coefficients = Array.from( arguments ).slice();
		return this;

	}

	/**
	 * Sets the constant for this linear equation.
	 *
	 * @param {number} constant The constant for this linear equation
	 * @return {LinearEquation} This linear equation (after setting the constant)
	 */
	setConstant( constant ) {

		this.constant = constant;
		return this;

	}

	/**
	 * Creates an instance of `LinearEquation` that is exactly the same as this
	 * instance.
	 *
	 * @return {LinearEquation} An exact copy of this instance
	 */
	clone() {

		return new this.constructor().copy( this );

	}

	/**
	 * Makes this linear equation exactly the same as another linear equation.
	 *
	 * @param {LinearEquation} equ The linear equation to copy from
	 * @return {LinearEquation} This linear equation (after copying)
	 */
	copy( equ ) {

		this.name = equ.name;
		this.coefficients = equ.coefficients.slice();
		this.constant = equ.constant;

		return this;

	}

	/**
	 * Adds a linear equation to this linear equation.
	 *
	 * @param {LinearEquation} equ The equation to add to this linear equation
	 * @return {LinearEquation} This linear equation
	 */
	add( equ ) {

		if ( equ.numberOfVariables !== this.numberOfVariables ) {

			console.warn( "The operand does not have the same number of variables as this linear equation" );
			return this;

		}

		this.coefficients = this.coefficients.map( ( coef, i ) => coef + equ[ i ] );
		this.constant += equ.constant;

		return this;

	}

	/**
	 * Subtracts a linear equation from this linear equation.
	 *
	 * @param {LinearEquation} equ The equation used to subtract
	 * @return {LinearEquation} This linear equation
	 */
	subtract( equ ) {

		if ( equ.numberOfVariables !== this.numberOfVariables ) {

			console.warn( "The operand does not have the same number of variables as this linear equation" );
			return this;

		}

		return this.add( equ.clone().multiplyScalar( - 1 ) );

	}

	/**
	 * Multiplies this linear equation with a scalar.
	 *
	 * @param {number} s The scalar to multiply this equation by
	 * @return {LinearEquation} This linear equation
	 */
	multiplyScalar( s ) {

		this.coefficients = this.coefficients.map( ( coef ) => coef * s );
		this.constant *= s;

		return this;

	}

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

}

export { LinearEquation };
