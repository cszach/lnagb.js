import { LinearEquation } from "./LinearEquation.js";
import { Matrix } from "../matrices/Matrix.js";
import { AugmentedMatrix } from "../matrices/AugmentedMatrix.js";

/**
 * @module SystemOfLinearEquations
 * @author Zach / <cszach@proton.me>
 * @description
 *
 * Contains the {@link module:SystemOfLinearEquations~SystemOfLinearEquations}
 * class, which encodes systems of linear equations.
 */

/**
 * Encodes systems of linear equations by storing instances of
 * {@link module:LinearEquation~LinearEquation}s in an array.
 */
class SystemOfLinearEquations {

	/**
	 * Constructs a new instance of `SystemOfLinearEquations`, which encodes a
	 * system of linear equations.
	 *
	 * @param {LinearEquation[]} equations Instances of `LinearEquation` for
	 * the system.
	 */
	constructor( equations ) {

		/**
		 * @member {LinearEquation[]}
		 * @description Array of linear equations of this system.
		 */
		this.equations = equations;

		/**
		 * @member {number}
		 * @description The number of variables of this system.
		 */
		this.numberOfVariables = equations[ 0 ].numberOfVariables;

		/**
		 * @member {number}
		 * @description The number of linear equations in this system.
		 */
		this.numberOfEquations = equations.legnth;

	}

	/**
	 * Creates and returns a new instance that is the same as this instance.
	 *
	 * @returns {SystemOfLinearEquations} A clone of this instance
	 */
	clone() {

		return new this.constructor( this.equations.slice() );

	}

	/**
	 * Computes the coefficient matrix of this system of linear equations and
	 * assigns the matrix to the {@link module:SystemOfLinearEquations~SystemOfLinearEquations#coefficientMatrix}
	 * property.
	 */
	computeCoefficientMatrix() {

		let coefficients = []; // Array of coefficients for the matrix

		// Cache

		let _ = this.equations;
		let _nVars = this.numberOfVariables;
		let _nEqus = this.numberOfEquations;

		// For every equation, iterate through the equation's coefficients,
		// adding the coefficients to the array

		for ( let equIndex = 0, equCoefs = _[ equIndex ].coefficients;
			equIndex < _nEqus; equIndex ++ )
			for ( let coefIndex = 0; coefIndex < _nVars; coefIndex ++ )
				coefficients.push( equCoefs[ coefIndex ] );

		/**
		 * @member {module:Matrix~Matrix}
		 * @description
		 *
		 * The coefficient matrix of this system of linear equations, obtained by
		 * calling {@link module:SystemOfLinearEquations~SystemOfLinearEquations#computeCoefficientMatrix}.
		 */
		this.coefficientMatrix = new Matrix( _nEqus, _nVars, coefficients );

	}

	/**
	 * Computes the constant matrix of this system of linear equations and
	 * assigns the matrix to the {@link module:SystemOfLinearEquations~SystemOfLinearEquations#constantMatrix}
	 * property.
	 */
	computeConstantMatrix() {

		let constants = []; // Array of constant terms for the matrix

		// Cache

		let _ = this.equations;
		let _nEqus = this.numberOfEquations;

		// For each equation, add its constant to the array

		for ( let i = 0; i < _nEqus; i ++ ) constants.push( _[ i ].constant );

		/**
		 * @member {module:Matrix~Matrix}
		 * @description
		 *
		 * The constant matrix of this system of linear equations, obtained by
		 * calling {@link module:SystemOfLinearEquations~SystemOfLinearEquations#computeConstantMatrix}.
		 */
		this.constantMatrix = new Matrix( _nEqus, 1, constants );

	}

	/**
	 * Computes the augmented matrix of this system of linear equations and
	 * assigns the matrix to the {@link module:SystemOfLinearEquations~SystemOfLinearEquations#augmentedMatrix}
	 * property.
	 */
	computeAugmentedMatrix() {

		let coefficients = [];
		let constants = [];

		// Cache

		let _ = this.equations;
		let _nEqus = this.numberOfEquations;
		let _nVars = this.numberOfVariables;

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
		 */
		this.augmentedMatrix = new AugmentedMatrix(
			new Matrix( _nEqus, _nVars, coefficients ),
			new Matrix( _nEqus, 1, constants )
		);

	}

	/**
	 * Computes the augmented matrix of this system of linear equations and
	 * assigns the matrix to the {@link module:SystemOfLinearEquations~SystemOfLinearEquations#augmentedMatrix}
	 * property **provided that** the coefficient matrix and the constant matrix
	 * have been computed.
	 */
	lazyComputeAugmentedMatrix() {

		this.augmentedMatrix = new AugmentedMatrix(
			this.coefficientMatrix,
			this.constantMatrix
		);

	}

	/**
	 * Executes a function for each equation in this system.
	 *
	 * @param {module:SystemOfLinearEquations~SystemOfLinearEquations~forEach} callback
	 * The function to execute per iteration.
	 * @param {object} thisArg The argument to use as `this` in the function.
	 */
	forEach( callback, thisArg ) {

		let boundCallback = callback.bind( thisArg );

		this.equations.forEach( ( equation, i ) => {

			let coefficients = equation.coefficients;
			let constant = equation.constant;
			let index = i;
			let system = this;

			boundCallback( equation, coefficients, constant, index, system );

		}, this );

	}

}

/**
 * @callback module:SystemOfLinearEquations~SystemOfLinearEquations~forEach
 * @param {module:LinearEquation~LinearEquation} equation The current equation
 * being processed.
 * @param {number[]} coefficients The coefficients of the equation.
 * @param {number} constant The constant term of the equation.
 * @param {number} index The 0-based position of the equation in
 * `this.equations`.
 * @param {SystemOfLinearEquations} system The instance that this method was
 * called upon.
 */

export { SystemOfLinearEquations };
