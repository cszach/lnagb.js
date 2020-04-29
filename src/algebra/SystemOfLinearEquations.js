/**
 * @author Nguyen Hoang Duong / you_create@protonmail.com / GitHub: you-create
 */

import { LinearEquation } from "./LinearEquation.js";
import { Matrix } from "../matrices/Matrix.js";
import { AugmentedMatrix } from "../matrices/AugmentedMatrix.js";

/**
 * Encodes systems of linear equations by storing the following information:
 * - Name, as the `name` property
 * - Equations, as the `equations` property, an array of instances of `LinearEquation`
 */
class SystemOfLinearEquations {

	/**
	 * Constructs a new system of linear equations.
	 *
	 * @param {string} name The name for this instance
	 */
	constructor( name = "SystemOfLinearEquations" ) {

		this.name = name;
		this.equations = new Array();

	}

	/**
	 * Checks if *o* encodes a system of linear equations.
	 *
	 * Criteria:
	 * - The constructor of *o* is `SystemOfLinearEquations`
	 * - Has the `equations` property that is an array of valid instances of
	 *   `LinearEquation` (see also `LinearEquation.isIt`)
	 *
	 * @param {object} o The object to check
	 * @return {boolean} `true` if *o* fulfills the criteria, `false` otherwise
	 */
	static isIt( o ) {

		return o.constructor.name === "SystemOfLinearEquations"
			&& o.equations.every( ( equ ) => LinearEquation.isIt( equ ) );

	}

	get numberOfVariables() {

		return this.equations[ 0 ].coefficients.length;

	}

	get numberOfEquations() {

		return this.equations.length;

	}

	getCoefficientMatrix() {

		let m = new Matrix( "CoefficientMatrix" );

		m.setDimensions( this.numberOfVariables, this.numberOfEquations );

		this.forEach( ( equation, i ) => {

			m.elements.splice(
				this.numberOfVariables * i,
				this.numberOfVariables,
				...equation.coefficients
			);

		}, this );

		return m;

	}

	getConstantMatrix() {

		return new Matrix( "ConstantMatrix" )
			.setDimensions( this.numberOfEquations, 1 )
			.set(
				new Array( this.numberOfEquations ).map(
					( e, i ) => this.equations[ i ].constant
				)
			);

	}

	getAugmentedMatrix() {

		return new AugmentedMatrix(
			this.getCoefficientMatrix(),
			this.getConstantMatrix()
		);

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
	 * @param {number} index The position of the equation in `equations` (**1-indexed**)
	 * @return {LinearEquation} The removed equation, or null if *index* is invalid
	 */
	remove( index ) {

		return ( index > 0 && index <= this.numberOfEquations && Number.isInteger( index ) )
			? this.equations.splice( index - 1, 1 )[ 0 ]
			: null;

	}

	/**
	 * Executes a function for each equation in this system.
	 *
	 * The function accepts any of the following arguments (in order):
	 * 1. `equation` (`LinearEquation`) The current equation being processed
	 * 2. `index` (`number`) The position of `equation` in this system
	 *
	 * @param {function} callback The function to execute per iteration
	 * @param {object} thisArg The argument to use as `this` in the function
	 */
	forEach( callback, thisArg ) {

		this.equations.forEach( ( equation, i ) => {

			callback.bind( thisArg )( equation, i );

		} );

	}

}

export { SystemOfLinearEquations };
