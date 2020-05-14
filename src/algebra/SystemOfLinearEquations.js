/**
 * @author Nguyen Hoang Duong / you_create@protonmail.com / GitHub: you-create
 */

import { LinearEquation } from "./LinearEquation.js";
import { Matrix } from "../matrices/Matrix.js";
import { AugmentedMatrix } from "../matrices/AugmentedMatrix.js";

/**
 * Encodes systems of linear equations by storing the following information:
 * - Equations, as the `equations` property, an array of instances of `LinearEquation`
 * - Denotation, as the `name` property (optional)
 */
class SystemOfLinearEquations {

	/**
	 * Constructs a new system of linear equations.
	 *
	 * @param {string} name The name for this instance
	 */
	constructor( name = null ) {

		this.name = name;
		this.equations = new Array();

	}

	/**
	 * Checks if an object encodes a system of linear equations.
	 *
	 * Criteria:
	 * - The constructor of the object is `SystemOfLinearEquations`
	 * - Has the `equations` property that is an array of valid instances of
	 *   `LinearEquation` (see also `LinearEquation.isIt`)
	 *
	 * @param {object} o The object to check
	 * @return {boolean} `true` if the object fulfills the criteria, `false`
	 * otherwise
	 */
	static isIt( o ) {

		return o.constructor.name === "SystemOfLinearEquations"
			&& o.equations.every( ( equ ) => LinearEquation.isIt( equ ) );

	}

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

	/**
	 * Returns the coefficient matrix of this system.
	 *
	 * @return {Matrix} The coefficient matrix of this system
	 */
	get coefficientMatrix() {

		let m = new Matrix( this.numberOfVariables, this.numberOfEquations );

		this.forEach( ( equation, i ) => {

			m.elements.splice(
				this.numberOfVariables * i,
				this.numberOfVariables,
				...equation.coefficients
			);

		}, this );

		return m;

	}

	/**
	 * Returns the constant matrix of this system.
	 *
	 * @return {Matrix} The constant matrix of this system
	 */
	get constantMatrix() {

		return new Matrix( this.numberOfEquations, 1 )
			.set( ...this.equations.reduce(
				( a, e ) => [ ...a, e.constant ], []
			) );

	}

	/**
	 * Returns the augmented matrix of this system.
	 *
	 * @return {Matrix} The augmented matrix of this system
	 */
	get augmentedMatrix() {

		return new AugmentedMatrix(
			this.coefficientMatrix,
			this.constantMatrix
		);

	}

	/**
	 * Sets the linear equations for this system using the `push` method.
	 *
	 * Arguments are assumed to be instances of `LinearEquation`. The arguments
	 * are iterated and the `push` method is invoked in every iteration.
	 *
	 * @return {SystemOfLinearEquations} This system
	 */
	set() {

		this.equations = new Array();

		Array.from( arguments ).forEach( ( equ ) => {

			this.push( equ );

		}, this );

		return this;

	}

	clone() {

		return new this.constructor(
			this.name
		).set( ...this.equations.slice() );

	}

	/**
	 * Adds a linear equation to this system by appending it to `equations`.
	 *
	 * @param {LinearEquation} equ A valid instance of `LinearEquation`
	 * @return {SystemOfLinearEquations} This system of linear equations
	 */
	push( equ ) {

		if ( ! LinearEquation.isIt( equ ) ) {

			console.error( "An invalid linear equation was given" );
			return this;

		}

		if ( this.numberOfEquations !== 0
			&& equ.numberOfVariables !== this.equations[ 0 ].numberOfVariables ) {

			console.error( "An invalid linear equation was given" );
			return this;

		}

		this.equations.push( equ );

		return this;

	}

	/**
	 * Removes the last linear equation stored in `equations`.
	 *
	 * @return {LinearEquation} The removed equation
	 */
	pop() {

		return this.equations.pop();

	}

	/**
	 * Removes a linear equation from this system of linear equations.
	 *
	 * @param {number} index The position of the equation in `equations` (1-indexed)
	 * @return {LinearEquation} The removed equation
	 */
	remove( index ) {

		return this.equations.splice( index - 1, 1 )[ 0 ];

	}

	/**
	 * Sets this system of linear equations according to an augmented matrix.
	 *
	 * @param {AugmentedMatrix} m The augmented matrix to emulate
	 * @return {SystemOfLinearEquations} This system
	 */
	fromAugmentedMatrix( m ) {

		if ( m.size.r !== 1 ) {

			console.error( "An invalid augmented matrix was given" );
			return this;

		}

		this.equations = new Array();

		m.forEachRow( ( row ) => {

			this.push(
				new LinearEquation().set(
					row.slice( 0, - 1 ),
					row.slice( - 1 )[ 0 ]
				)
			);

		}, this );

		return this;

	}

	/**
	 * Executes a function for each equation in this system.
	 *
	 * @param {SystemOfLinearEquations~forEachCallback} callback The function to
	 * execute per iteration
	 * @param {object} thisArg The argument to use as `this` in the function
	 */
	forEach( callback, thisArg ) {

		this.equations.forEach( ( equation, i ) => {

			callback.bind( thisArg )( equation, i );

		} );

	}

	/**
	 * Solves this system of linear equations using Gauss-Jordan elimination and
	 * returns the solution.
	 *
	 * @return {} The solutions to this system of linear equations
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

		if ( m.leftMatrix.rank < m.rightMatrix.rank ) {

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

}

/**
 * @callback SystemOfLinearEquations~forEachCallback
 * @param {LinearEquation} equation The current equation being processed
 * @param {number} i The position of `equation` in this system
 */

export { SystemOfLinearEquations };
