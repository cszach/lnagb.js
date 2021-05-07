/**
 * @module Algebra
 * @description
 *
 * JavaScript code defined under this umbrella encodes mathematical concepts and
 * operations (including the ones that are not solely attributed to the subject
 * of Linear Algebra) that are not tied to matrices or vectors. However, they
 * may be used in several operations of matrices and/or vectors (linear
 * combination being an example).
 *
 */

/**
 * @name Algebra
 * @see {@link module:Algebra}
 * @member
 * @kind export
 * @description
 *
 * Contains algebraic operations and several functions for dealing with algebra.
 * Helpful for the lnagb.js library itself as well as potential users.
 *
 */

/**
 * @name LinearEquation
 * @see {@link module:LinearEquation}
 * @member
 * @kind export
 * @description
 *
 * Contains the {@link module:LinearEquation~LinearEquation} class, which encodes
 * linear equations. This class supports linear equations of any number of
 * variables. See also {@link module:LinearEquations}.
 *
 */

/**
 * @name LinearEquations
 * @see {@link module:LinearEquations}
 * @member
 * @kind export
 * @description
 *
 * Contains classes that encode linear equations of 1, 2, and 3 variables. You
 * should use these instead of {@link module:LinearEquation~LinearEquation}
 * whenever possible.
 *
 */

/**
 * @name SystemOfLinearEquations
 * @see {@link module:SystemOfLinearEquations}
 * @member
 * @kind export
 * @description
 *
 * Contains the {@link module:SystemOfLinearEquations~SystemOfLinearEquations}
 * class, which encodes systems of linear equations.
 *
 */

export * from './Algebra.js';
export * from './LinearEquation.js';
export * from './LinearEquations.js';
export * from './SystemOfLinearEquations.js';
