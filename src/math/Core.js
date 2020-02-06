/**
 * @author Nguyen Hoang Duong / you_create@protonmail.com / GitHub: you-create
 */

/**
 * Compute and return the result of the linear combination of *p* and *q*,
 * two sequences of numbers
 *
 * The sequences must have the same number of numbers.
 *
 * This is useful in multiplying matrices.
 *
 * @param {object} p First sequence of numbers (as a JS array)
 * @param {object} q Second sequence of numbers (as a JS array)
 */
let linearCombination = function ( p, q ) {

	return p.reduce( ( result, v, i ) => result + p[ i ] * q[ i ], 0 );

};

export { linearCombination };
