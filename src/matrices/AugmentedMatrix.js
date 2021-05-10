/**
 * @module AugmentedMatrix
 * @author Nguyen Hoang Duong / <you_create@protonmail.com>
 * @description
 *
 * Contains the {@link module:AugmentedMatrix~AugmentedMatrix} class, which
 * encodes augmented matrices.
 *
 */

/**
 * Encodes augmented matrices and their operations in Linear Algebra.
 *
 */
class AugmentedMatrix {

	/**
	 * Constructs an `AugmentedMatrix` instance, which encodes an augmented matrix.
	 * Input matrices are cloned and assumed to have equal number of rows.
	 *
	 * @param {module:Matrix~Matrix} left The left part of the augmented matrix.
	 * @param {module:Matrix~Matrix} right The right part of the augmented matrix.
	 */
	constructor( left, right ) {

		/**
		 * @member {object}
		 * @description The left part of this augmented matrix.
		 */
		this.left = left.clone();

		/**
		 * @member {object}
		 * @description The right part of this augmented matrix.
		 */
		this.right = right.clone();

		let leftSize = left.size;
		let rightSize = right.size;

		this.size = {
			rows: leftSize.rows,
			columns: leftSize.columns + rightSize.columns
		};

		this.numberOfEntries = left.numberOfEntries + right.numberOfEntries;

	}

	/**
	 * Creates and returns a clone of this augmented matrix instance.
	 *
	 * @returns {AugmentedMatrix} A clone of this instance
	 */
	clone() {

		return new this.constructor( this.left, this.right );

	}

}

export { AugmentedMatrix };
