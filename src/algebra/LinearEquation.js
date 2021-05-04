/**
 * @module LinearEquation
 * @description
 *
 * Contains the {@link module:LinearEquation~LinearEquation} class, which encodes
 * linear equations. This class supports linear equations of any number of
 * variables. See also {@link module:LinearEquations}.
 *
 * @author Nguyen Hoang Duong / <you_create@protonmail.com>
 */

/**
 * Encodes linear equations in mathematics.
 *
 * An instance of this class stores coefficients in an array and the constant
 * term.
 *
 * If you only have to deal with linear equations of 3 variables or fewer, you
 * might want {@link module:LinearEquations~LinearEquation1},
 * {@link module:LinearEquations~LinearEquation2},
 * or {@link module:LinearEquations~LinearEquation3} instead.
 */
class LinearEquation {

	/**
	 * Constructs a `LinearEquation` instance, which encodes a linear equation.
	 *
	 * Arguments are optional. The constructor does not validate arguments if
	 * presented.
	 *
	 * @param {number[]} coefficients The coefficients of the linear equation.
	 * @param {number} constant The constant term of the linear equation.
	 *
	 * @example
	 * ```javascript
	 * let equation = new LinearEquation( [ 25, - 7, 8 ], 14 )
	 * console.log( equation )
	 * // -> LinearEquation { coefficients: [ 25, -7, 8 ], constant: 14 }
	 * ```
	 */
	constructor( coefficients, constant ) {

		/**
		 * @member {number[]}
		 * @description Array of this equation's coefficients in left-to-right order.
		 * @example
		 * ```javascript
		 * console.log( equation.coefficients ) // -> [ 25, -7, 8 ]
		 * ```
		 */
		this.coefficients = [ 1 ]; // Default

		/**
		 * @member {number}
		 * @description The constant term of this linear equation.
		 * @example
		 * ```javascript
		 * console.log( equation.constant ) // -> 14
		 * ```
		 */
		this.constant = constant || 0;

		if ( coefficients ) this.setCoefficientsFromArray( coefficients );

	}

	/* GETTERS */

	/**
	 * Returns the number of variables in this linear equation.
	 *
	 * @return {number} The number of variables in this linear equation
	 *
	 * @example
	 * ```javascript
	 * console.log( equation.numberOfVariables ) // -> 3
	 * ```
	 */
	get numberOfVariables() {

		return this.coefficients.length;

	}

	/* COMMON METHODS */

	/**
	 * Creates an instance of `LinearEquation` that is exactly the same as this
	 * instance.
	 *
	 * @return {LinearEquation} An exact copy of this instance
	 *
	 * @example
	 * ```javascript
	 * console.log( equation.clone() )
	 * // -> LinearEquation { coefficients: [ 25, -7, 8 ], constant: 14 }
	 * // This is a different instance that is exactly the same as 'equation'.
	 * ```
	 */
	clone() {

		return new this.constructor( this.coefficients, this.constant );

	}

	/**
	 * Makes this linear equation exactly the same as another linear equation.
	 *
	 * @param {LinearEquation} equation The linear equation to copy from.
	 * @return {LinearEquation} This linear equation (after copying)
	 *
	 * @example
	 * ```javascript
	 * let anotherEquation = new LinearEquation( [ 17, - 3, 5 ], 8 )
	 * equation.copy( anotherEquation )
	 * console.log( equation )
	 * // -> LinearEquation { coefficients: [ 17, -3, 5 ], constant: 8 }
	 * // 'equation' is now the same as 'anotherEquation' (but it is NOT a
	 * // reference to 'anotherEquation').
	 * ```
	 */
	copy( equation ) {

		return this
			.setCoefficientsFromArray( equation.coefficients )
			.setConstant( equation.constant );

	}

	/* SETTERS */

	/**
	 * Sets the coefficients and the constant for this linear equation.
	 *
	 * @param {number[]} coefficients The coefficients for this equation.
	 * @param {number} constant The constant for this equation.
	 * @return {LinearEquation} This linear equation
	 *
	 * @example
	 * ```javascript
	 * equation.set( [ 11, 8 ], 3 )
	 * console.log( equation )
	 * // -> LinearEquation { coefficients: [ 11, 8 ], constant: 3 }
	 * ```
	 */
	set( coefficients, constant ) {

		return this
			.setCoefficientsFromArray( coefficients )
			.setConstant( constant );

	}

	/**
	 * Sets a value for a coefficient in this linear equation.
	 *
	 * @param {number} index The 0-based index of the coefficient.
	 * @param {number} value The value for the coefficient.
	 * @return {LinearEquation} This linear equation
	 *
	 * @example
	 * ```javascript
	 * equation.setCoefficient( 1, - 8 )
	 * console.log( equation )
	 * // -> LinearEquation { coefficients: [ 11, -8 ], constant: 3 }
	 * ```
	 */
	setCoefficient( index, value ) {

		this.coefficients[ index ] = value;
		return this;

	}

	/**
	 * Sets the coefficients for this linear equation.
	 *
	 * @param {...number} coefficient The coefficients in order from left to right
	 * for this equation.
	 * @return {LinearEquation} This linear equation
	 *
	 * @example
	 * ```javascript
	 * equation.setCoefficients( 22, 33, - 11 )
	 * console.log( equation )
	 * // -> LinearEquation { coefficients: [ 22, 33, -11 ], constant: 3 }
	 * ```
	 */
	setCoefficients( coefficient ) { // eslint-disable-line no-unused-vars

		this.coefficients = Array.from( arguments );
		return this;

	}

	/**
	 * Sets the coefficients for this linear equation from a given array.
	 *
	 * @param {number[]} coefficients Array of coefficients for this equation.
	 * @return {LinearEquation} This linear equation
	 *
	 * @example
	 * ```javascript
	 * let coefficients = [ 1, 3, - 4 ]
	 * equation.setCoefficientsFromArray( coefficients )
	 * console.log( equation )
	 * // -> LinearEquation { coefficients: [ 1, 3, -4 ], constant: 3 }
	 * ```
	 */
	setCoefficientsFromArray( coefficients ) {

		let _coefs = this.coefficients; _coefs.length = 0;

		for ( let i = 0, _length = coefficients.length; i < _length; i ++ )
			_coefs.push( coefficients[ i ] );

		return this;

	}

	/**
	 * Sets the constant term for this linear equation.
	 *
	 * @param {number} constant The constant for this linear equation.
	 * @return {LinearEquation} This linear equation
	 *
	 * @example
	 * ```javascript
	 * console.log( equation.setConstant( 10 ) )
	 * // -> LinearEquation { coefficients: [ 1, 3, -4 ], constant: 10 }
	 * //
	 * // This example also demonstrates that most of the class's instance methods
	 * // return the instance after applying the method's operations. In the
	 * // previous examples, notice how we call console.log on the 'equation'
	 * // alone, but in this example, console.log is invoked with 'equation' and
	 * // an instance method, showing that this method indeed returns the
	 * // 'equation'. This feature makes it possible to chain instance methods,
	 * // but note that not all instance methods of this class return the
	 * // instance.
	 * ```
	 */
	setConstant( constant ) {

		this.constant = constant;
		return this;

	}

	/* OPERATIONS */

	/**
	 * Adds a linear equation to this linear equation.
	 *
	 * @param {LinearEquation} equation The equation to add to this equation. Both
	 * equations must have the same number of coefficients.
	 * @return {LinearEquation} This linear equation
	 *
	 * @example
	 * ```javascript
	 * console.log( equation )
	 * // -> LinearEquation { coefficients: [ 1, 3, -4 ], constant: 10 }
	 *
	 * let a = new LinearEquation( [ 1, - 8, 5 ], - 5 )
	 * console.log( equation.add( a ) )
	 * // -> LinearEquation { coefficients: [ 2, -5, 1 ], constant: 5 }
	 *
	 * // In this situation below, we are trying to add a linear equation with 2
	 * // variables to an equation of 3. This is mathematically invalid, so an
	 * // error message will be given to the console and the original equation
	 * // will remain unchanged.
	 *
	 * let b = new LinearEquation( [ 1, 2 ], 3 )
	 * console.log( equation.add( b ) )
	 * // -> "The operand does not have the same number of variables as this
	 * // linear equation"
	 * // -> LinearEquation { coefficients: [ 2, -5, 1 ], constant: 5 }
	 * ```
	 */
	add( equation ) {

		let _n = this.numberOfVariables;

		if ( equation.numberOfVariables !== _n ) {

			console.error( "The operand does not have the same number of variables as this linear equation" );

		} else {

			let _coefs = this.coefficients;
			let coefs = equation.coefficients;

			for ( let i = 0; i < _n; i ++ ) _coefs[ i ] += coefs[ i ];
			this.constant += equation.constant;

		}

		return this;

	}

	/**
	 * Subtracts a linear equation from this linear equation.
	 *
	 * @see {@link module:LinearEquation~LinearEquation#add}
	 *
	 * @param {LinearEquation} equation The equation to subtract this equation to.
	 * Both equations must have the same number of coefficients.
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
	 * @param {number} k The scalar to multiply this equation by.
	 * @return {LinearEquation} This linear equation
	 *
	 * @example
	 * ```javascript
	 * console.log( equation )
	 * // -> LinearEquation { coefficients: [ 2, -5, 1 ], constant: 5 }
	 * console.log( equation.multiplyScalar( 8 ) )
	 * // -> LinearEquation { coefficients: [ 16, -40, 8 ], constant: 40 }
	 * console.log( equation.multiplyScalar( - 1 / 4 ) )
	 * // -> LinearEquation { coefficients: [ -4, 10, -2 ], constant: -10 }
	 * ```
	 */
	multiplyScalar( k ) {

		let _n = this.numberOfVariables;
		let _coefs = this.coefficients;

		for ( let i = 0; i < _n; i ++ ) _coefs[ i ] *= k;
		this.constant *= k;

		return this;

	}

	/* IMPORT & EXPORT */

	/**
	 * Writes the coefficients and the constant term of this equation to a new
	 * array in that order.
	 *
	 * @return {number[]} The coefficients and the constant term of this equation
	 *
	 * @example
	 * ```javascript
	 * console.log( equation.toArray() )
	 * // -> [ -4, 10, -2, -10 ]
	 * ```
	 */
	toArray() {

		return [ ...this.coefficients, this.constant ];

	}

	/**
	 * Imports the coefficients and the constant term of another linear equation
	 * stored in an array.
	 *
	 * @param {number[]} array The array to import from.
	 * @return {LinearEquation} This linear equation
	 *
	 * @example
	 * ```javascript
	 * equation.fromArray( [ 2, - 8, 9 ] )
	 * console.log( equation )
	 * // -> LinearEquation { coefficients: [ 2, -8 ], constant: 9 }
	 * ```
	 */
	fromArray( array ) {

		let n = array.length - 1;
		let _coefs = this.coefficients; _coefs.length = 0;
		let i;

		for ( i = 0; i < n; i ++ ) _coefs.push( array[ i ] );
		this.constant = array[ i ];

		return this;

	}

}

export { LinearEquation };
