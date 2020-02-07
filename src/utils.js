/**
 * Creates a loop that runs from 1 to *count*, executing a given function for
 * every iteration.
 *
 * @param {number} count How many times the function is executed
 * @param {function} func The function to execute in each iteration
 * @param {object} thisArg What to use as `this` inside `func`
 */
let loop = function ( count, func, thisArg ) {

	for ( let i = 1; i < count + 1; i ++ ) {

		func.bind( thisArg )( i );

	}

};

/**
 * Checks if arrays `p` and `q` are the same and returns `true` if they are
 *
 * Two arrays are the same when...
 * - they have the same number of elements; and
 * - every element of this array is *strictly* the same as the element of the
 *   other array at the same index
 *
 * @return {boolean} `true` if arrays *p* and *q* are the same, `false`
 * otherwise
 */
let sameArrays = function ( p, q ) {

	return p.length === q.length && p.every( ( e, i ) => e === q[ i ] );

};

export { loop, sameArrays };
