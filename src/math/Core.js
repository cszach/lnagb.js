/**
 * @author Nguyen Hoang Duong / you_create@protonmail.com / GitHub: you-create
 */

/**
 * Computes and returns the result of the [linear combination][lncmb] of *p*
 * and *q*, two sequences of numbers. The sequences must have the same number of
 * terms.
 *
 * This is useful in multiplying matrices.
 *
 * [lncmb]: https://en.wikipedia.org/wiki/Linear_combination
 *
 * @param {object} p First sequence of numbers (as a JS array)
 * @param {object} q Second sequence of numbers (as a JS array)
 * @return {number} The result of the linear combination of *p* and *q*
 */
let linearCombination = function ( p, q ) {

	return p.reduce( ( result, v, i ) => result + p[ i ] * q[ i ], 0 );

};

export { linearCombination };
