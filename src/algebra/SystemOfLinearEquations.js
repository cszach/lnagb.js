import { LinearEquation } from "./LinearEquation.js";
import { Matrix } from "../matrices/Matrix.js";
import { AugmentedMatrix } from "../matrices/AugmentedMatrix.js";

/**
 * @module SystemOfLinearEquations
 * @author Nguyen Hoang Duong / <you_create@protonmail.com>
 * @description
 *
 * Contains the {@link module:SystemOfLinearEquations~SystemOfLinearEquations}
 * class, which encodes systems of linear equations.
 *
 */

/**
 * Encodes systems of linear equations by storing instances of
 * {@link module:LinearEquation~LinearEquation}s in an array.
 *
 */
class SystemOfLinearEquations {

	/**
	 * Constructs a new instance of `SystemOfLinearEquations`, which encodes a
	 * system of linear equations.
	 *
	 * Calling the constructor without any argument will create an empty system.
	 *
	 * @param {LinearEquation[]} equations Instances of `LinearEquation` for
	 * the system (optional).
	 */
	constructor( equations ) {

		this.setFromArray( equations );

	}

	/* GETTERS */

	/**
	 * Returns the number of variables in this system.
	 *
	 * @return {number} Number of variables in this system of linear equations
	 */
	get numberOfVariables() {

		return this.equations[ 0 ].coefficients.length;

	}

	/**
	 * Returns the number of equations in this system.
	 *
	 * @return {number} Number of equations in this system of linear equations
	 */
	get numberOfEquations() {

		return this.equations.length;

	}

	/* COMMON METHODS */

	/**
	 * Makes this system the same as another system.
	 *
	 * @param {SystemOfLinearEquations} system The system to copy from.
	 * @return {SystemOfLinearEquations} This system
	 */
	copy( system ) {

		return this.setFromArray( system.equations );

	}

	/**
	 * Creates and returns a new instance that is the same as this instance.
	 *
	 * @return {SystemOfLinearEquations} A clone of this instance
	 */
	clone() {

		return new this.constructor( this.equations );

	}

	/* SETTERS */

	/**
	 * Sets the linear equations for this system using the
	 * {@link module:SystemOfLinearEquations~SystemOfLinearEquations#push} method.
	 *
	 * Arguments are assumed to be instances of `LinearEquation`. The arguments
	 * are iterated and the `push` method is invoked in every iteration.
	 *
	 * @return {SystemOfLinearEquations} This system
	 */
	set() {

		this.equations = []; // Reset

		Array.from( arguments ).forEach( ( equation ) => {

			this.push( equation );

		}, this );

		return this;

	}

	/**
	 * Sets this system's equations from an array of `LinearEquation`s.
	 *
	 * @param {LinearEquation[]} equations Array of `LinearEquation`s to set.
	 * @return {SystemOfLinearEquations} This system of linear equations
	 */
	setFromArray( equations ) {

		/**
		 * @member {LinearEquation[]}
		 * @description
		 *
		 * Array of instances of `LinearEquation` that encode the linear equations
		 * that this system consists of.
		 *
		 */
		let _equations = this.equations;
		let _n = _equations.length;

		_equations.length = 0; // Reset
		for ( let i = 0; i < _n; i ++ ) _equations.push( equations[ i ] );

		return this;

	}

	/* OPERATIONS */

	/**
	 * Adds a linear equation to this system by appending it to
	 * {@link module:SystemOfLinearEquations~SystemOfLinearEquations#equations}.
	 *
	 * @param {LinearEquation} equation A good instance of `LinearEquation`.
	 * @return {SystemOfLinearEquations} This system of linear equations
	 */
	push( equation ) {

		let _ = this.equations;
		let _nEqus = _.length;

		if ( _nEqus !== 0 && equation.numberOfVariables !== _[ 0 ].numberOfVariables )
			console.error( "An invalid linear equation was given" );
		else
			_.push( equation );

		return this;

	}

	/**
	 * Removes the last linear equation stored in
	 * {@link module:SystemOfLinearEquations~SystemOfLinearEquations#equations}.
	 *
	 * @return {LinearEquation} The removed equation
	 */
	pop() {

		return this.equations.pop();

	}

	/**
	 * Removes a linear equation from this system of linear equations.
	 *
	 * @param {number} index Equation number (1-indexed).
	 * @return {LinearEquation} The removed equation
	 */
	remove( index ) {

		return this.equations.splice( index - 1, 1 )[ 0 ];

	}

	/**
	 * Computes the coefficient matrix of this system of linear equations and
	 * assigns the matrix to the
	 * {@link module:SystemOfLinearEquations~SystemOfLinearEquations#coefficientMatrix}
	 * property.
	 *
	 * @return {module:Matrix~Matrix} The coefficient matrix of this system
	 * (reference to `this.coefficientMatrix`)
	 */
	computeCoefficientMatrix() {

		let coefficients = []; // Array of coefficients for the matrix

		// Cache

		let _ = this.equations;
		let _nVars = this.numberOfVariables;
		let _nEqus = this.numberOfEquations;

		// For every equation, iterate through the equation's coefficients,
		// adding the coefficients to the array

		for ( let e = 0, equCoefs = _[ e ].coefficients; e < _nEqus; e ++ )
			for ( let c = 0; c < _nVars; c ++ )
				coefficients.push( equCoefs[ c ] );

		/**
		 * @member {module:Matrix~Matrix}
		 * @description
		 *
		 * The coefficient matrix of this system of linear equations, obtained by
		 * calling {@link module:SystemOfLinearEquations~SystemOfLinearEquations#computeCoefficientMatrix}.
		 *
		 * This property is not automatically updated if the system of linear
		 * equations is modified.
		 *
		 */
		this.coefficientMatrix = new Matrix( _nEqus, _nVars, coefficients );

		return this.coefficientMatrix;

	}

	/**
	 * Computes the constant matrix of this system of linear equations and
	 * assigns the matrix to the
	 * {@link module:SystemOfLinearEquations~SystemOfLinearEquations#constantMatrix}
	 * property.
	 *
	 * @return {module:Matrix~Matrix} The constant matrix of this system
	 * (reference to `this.constantMatrix`)
	 */
	computeConstantMatrix() {

		let constants = []; // Array of constant terms for the matrix

		// Cache

		let _ = this.equations;
		let _nEqus = _.length;

		// For each equation, add its constant to the array

		for ( let i = 0; i < _nEqus; i ++ ) constants.push( _[ i ].constant );

		/**
		 * @member {module:Matrix~Matrix}
		 * @description
		 *
		 * The constant matrix of this system of linear equations, obtained by
		 * calling {@link module:SystemOfLinearEquations~SystemOfLinearEquations#computeConstantMatrix}.
		 *
		 * This property is not automatically updated if the system of linear
		 * equations is modified.
		 *
		 */
		this.constantMatrix = new Matrix( _nEqus, 1, constants );

		return this.constantMatrix;

	}

	/**
	 * Computes the augmented matrix of this system of linear equations and
	 * assigns the matrix to the
	 * {@link module:SystemOfLinearEquations~SystemOfLinearEquations#augmentedMatrix}
	 * property.
	 *
	 * @return {module:AugmentedMatrix~AugmentedMatrix} The augmented matrix of
	 * this system (reference to `this.augmentedMatrix`)
	 */
	computeAugmentedMatrix() {

		let _ = this.equations;
		let _nEqus = _.length;
		let _nVars = _[ 0 ].coefficients.length;

		let coefficients = [];
		let constants = [];

		for ( let i = 0; i < _nEqus; i ++ ) {

			let equation = _[ i ];
			let coefs = equation.coefficients;

			for ( let j = 0; j < _nVars; j ++ ) coefficients.push( coefs[ j ] );
			constants.push( equation.constant );

		}

		/**
		 * @member {module:AugmentedMatrix~AugmentedMatrix}
		 * @description
		 *
		 * The augmented matrix of this system of linear equations, obtained by
		 * calling {@link module:SystemOfLinearEquations~SystemOfLinearEquations#computeAugmentedMatrix}.
		 *
		 * This property is not automatically updated if the system of linear
		 * equations is modified.
		 *
		 */
		this.augmentedMatrix = new AugmentedMatrix(
			new Matrix( _nEqus, _nVars, coefficients ),
			new Matrix( _nEqus, 1, constants )
		);

		return this.augmentedMatrix;

	}

	/* ITERATORS */

	/**
	 * Executes a function for each equation in this system.
	 *
	 * @param {module:SystemOfLinearEquations~SystemOfLinearEquations~forEach} callback
	 * The function to execute per iteration.
	 * @param {object} thisArg The argument to use as `this` in the function.
	 */
	forEach( callback, thisArg ) {

		this.equations.forEach( ( equation, i ) => {

			let coefficients = equation.coefficients;
			let constant = equation.constant;
			let index = i + 1;
			let system = this;

			callback.bind( thisArg )(
				equation,
				coefficients,
				constant,
				index,
				system
			);

		}, this );

	}

	/**
	 * @callback forEach
	 * @memberof module:SystemOfLinearEquations~SystemOfLinearEquations
	 * @inner
	 * @param {LinearEquation} equation The current equation being processed.
	 * @param {number[]} coefficients The coefficients of the equation.
	 * @param {number} constant The constant term of the equation.
	 * @param {number} index The 1-indexed position of `equation` in this system.
	 * @param {SystemOfLinearEquations} system The instance that this method was
	 * called upon.
	 */

	/* SOLVE */

	/**
	 * Solves this system of linear equations using Gauss-Jordan elimination and
	 * returns the solution. Before calling this method, call
	 * {@link module:SystemOfLinearEquations~SystemOfLinearEquations#computeAugmentedMatrix}.
	 *
	 * @return {null|module:Matrix~Matrix|module:AugmentedMatrix~AugmentedMatrix}
	 * The solutions to this system of linear equations
	 */
	solve() {

		/*
		 * Gauss-Jordan elimination:
   	     * 1. Reduce the augmented matrix of the system of equations to reduced
   	     *    row-echelon form.
   	     * 2. Check if the system is inconsistent (has no solution) by checking
   	     *    if a row [ 0 0 . . . 0 1 ] occurs.
   	     * 3. Otherwise, assign the nonleading variables (if any) as parameters,
   	     *    and solve for the leading variables in terms of the parameters.
		 */

		// First, fetch the augmented matrix of this system and reduce it to
		// reduced row-echelon form.

		let m = this.augmentedMatrix;
		m.reduce( true );

		// Access the rank of the augmented matrix to determine the solutions.

		if ( m.leftMatrix.rank < m.rank ) {

			// No solution / Inconsistent
			return null;

		} else if ( m.rank === this.numberOfVariables ) {

			// 1 solution
			return m.rightMatrix;

		} else {

			// Otherwise, this matrix has infinitely many solutions, so just
			// return the reduced augmented matrix.
			return m;

		}

	}

	/* IMPORT & EXPORT */

	/**
	 * Sets this system of linear equations according to an augmented matrix.
	 *
	 * @param {module:AugmentedMatrix~AugmentedMatrix} matrix The augmented matrix
	 * to set from.
	 * @return {SystemOfLinearEquations} This system
	 */
	fromAugmentedMatrix( matrix ) {

		this.equations = [];

		matrix.forEachRow( ( row ) => {

			this.push( new LinearEquation(
				row.slice( 0, - 1 ),
				row.slice( - 1 )[ 0 ] )
			);

		}, this );

		return this;

	}

}

export { SystemOfLinearEquations };
