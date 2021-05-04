import { sameArrays } from './utils.js';

/**
 * A module for checking various attributes of Linear Algebra's quantities.
 *
 * @module is
 * @author Nguyen Hoang Duong / <you_create@protonmail.com>
 */

/**
 * Checks for matrices (e.g. symmetry, row-echelon form, idempotent, etc.).
 *
 * @alias is:matrix
 */
let matrix = {

	/**
	 * Checks if a matrix is in row-echelon form.
	 *
	 * @param {Matrix} m The matrix to check
	 * @return {boolean} `true` if the matrix is in row-echelon form, `false`
	 * otherwise
	 */
	inRowEchelonForm: function ( m ) {

		// METHOD
		//
		// Iterate through each row, starting from the first row, in this
		// matrix. During each iteration, extract the *position* of the leading
		// coefficient in the particular row, and store the position in an
		// array. Finally, compare that array to its sorted version. If two
		// arrays match, this matrix is in row-echelon form.

		let leadingCoefsPos = [], leadingCoef, leadingCoefPos;

		for ( let r = 1; r <= m.size.rows; r ++ ) {

			leadingCoef = m.leadingCoefficient( r );

			if ( leadingCoef && leadingCoef !== 1 ) {

				// If the leading coefficient is not 1, this matrix is not in
				// row-echelon form.
				return false;

			}

			leadingCoefPos = ( leadingCoef ) ? m.row( r ).indexOf( leadingCoef )
											 : Infinity;

			if ( leadingCoefPos !== Infinity
				&& leadingCoefsPos.indexOf( leadingCoefPos ) !== - 1 ) {

				// If a previous row's leading coefficient has the same position
				// as this one, this matrix is not in row-echelon form because
				// of the staircase rule.
				return false;

			} else {

				leadingCoefsPos.push( leadingCoefPos );

			}

		}

		return sameArrays( leadingCoefsPos, leadingCoefsPos.slice().sort() );

	},

	/**
	 * Checks if a matrix is in reduced row-echelon form.
	 *
	 * @param {Matrix} m The matrix to check
	 * @return {boolean} `true` if this matrix is in reduced row-echelon form,
	 * `false` otherwise
	 */
	inReducedRowEchelonForm: function ( m ) {

		let leadingCoefsPos = [], leadingCoef, leadingCoefPos;

		for ( let r = 1; r <= m.size.rows; r ++ ) {

			leadingCoef = m.leadingCoefficient( r );

			if ( leadingCoef && leadingCoef !== 1 ) {

				// If the leading coefficient is not 1, this matrix is not in
				// reduced row-echelon form.
				return false;

			}

			leadingCoefPos = ( leadingCoef ) ? m.row( r ).indexOf( leadingCoef )
											 : Infinity;

			if ( leadingCoefPos !== Infinity
				&& leadingCoefsPos.indexOf( leadingCoefPos ) !== - 1 ) {

				// If a previous row's leading coefficient has the same position
				// as this one, this matrix is not in row-echelon form because
				// of the staircase rule.
				return false;

			}

			if ( leadingCoefPos !== Infinity ) {

				// If this row has a leading coefficient, iterate through the
				// rows above this row and check if for each of those rows, the
				// entry at the position of this row's leading coefficient is 0.
				// If it is not 0, this matrix is certainly not in reduced
				// row-echelon form.

				for ( let s = 1; s < r; s ++ ) {

					if ( m.row( s )[ leadingCoefPos ] !== 0 ) {

						return false;

					}

				}

			}

			leadingCoefsPos.push( leadingCoefPos );

		}

		return sameArrays( leadingCoefsPos, leadingCoefsPos.slice().sort() );

	}

};

export { matrix };
