/**
 * @module Algebra
 * @author Nguyen Hoang Duong / <you_create@protonmail.com>
 * @description
 *
 * Contains algebraic operations and several functions for dealing with algebra.
 * Helpful for the lnagb.js library itself as well as potential users.
 *
 */

function Algebra() {}

/**
 * Computes and returns the result of the linear combination of 2 sequences
 * of numbers. The sequences must have the same number of terms.
 *
 * This is useful in multiplying matrices.
 *
 * @param {number[]} p First sequence of numbers.
 * @param {number[]} q Second sequence of numbers.
 * @return {number} The result of the linear combination of the two sequences
 *
 * @example
 * ```javascript
 * let p = [ 1, 2, 3 ]
 * let q = [ - 9, - 8, - 7 ]
 * let result = linearCombination( p, q )
 *
 * console.log( result ) // -> -46
 * // ( 1 * - 9 ) + ( 2 * - 8 ) + ( 3 * - 7 ) = - 46
 * ```
 */
Algebra.linearCombination = function ( p, q ) {

	return p.reduce( ( result, v, i ) => result + p[ i ] * q[ i ], 0 );

};

export { Algebra };