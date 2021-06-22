import { Matrix } from './Matrix.js';

/**
 * @module AugmentedMatrix
 * @author Novak / <novakcgx@protonmail.com>
 * @description
 *
 * Contains the {@link module:AugmentedMatrix~AugmentedMatrix} class, which
 * encodes augmented matrices.
 *
 */

/**
 * Encodes augmented matrices and their operations in Linear Algebra.
 *
 * This class inherits class methods from {@link module:Matrix~Matrix} with the
 * exception that `transpose`, `add`, `sub`, and `multiply` cannot be used.
 *
 * The `size` property has two more elements: `left`—which is the number of
 * columns of the left matrix—and `right`—that of the right matrix.
 *
 * @augments module:Matrix~Matrix
 * @see {@link module:Matrix~Matrix} for common properties
 */
class AugmentedMatrix extends Matrix {

	/**
	 * Constructs an `AugmentedMatrix` instance, which encodes an augmented matrix.
	 * Input matrices are cloned and assumed to have equal number of rows.
	 *
	 * @param {module:Matrix~Matrix} left The left part of the augmented matrix.
	 * @param {module:Matrix~Matrix} right The right part of the augmented matrix.
	 */
	constructor( left, right ) {

		let leftSize = left.size;
		let rightSize = right.size;

		let _nRows = leftSize.rows;
		let leftSizeCols = leftSize.columns;
		let rightSizeCols = rightSize.columns;

		let elements = [];

		for ( let i = 1, __nRows = _nRows + 1; i < __nRows; i ++ )
			elements.push( ...left.row( i ), ...right.row( i ) );

		super( _nRows, leftSizeCols + rightSizeCols, elements );

		this.size.left = leftSizeCols;
		this.size.right = rightSizeCols;

	}

	/**
	 * Returns the left matrix of this augmented matrix.
	 *
	 * @returns {module:Matrix~Matrix} The left matrix
	 */
	get leftMatrix() {

		let _size = this.size;
		let _nRows = _size.rows;
		let leftSizeCols = _size.left;

		let elements = [];

		for ( let i = 1; i <= _nRows; i ++ )
			for ( let j = 1; j <= leftSizeCols; j ++ )
				elements.push( this.entry( i, j ) );

		return new Matrix( _nRows, leftSizeCols, elements );

	}

	/**
	 * Returns the right matrix of this augmented matrix.
	 *
	 * @returns {module:Matrix~Matrix} The right matrix
	 */
	get rightMatrix() {

		let _size = this.size;
		let _nRows = _size.rows;
		let leftSizeCols = _size.left;
		let rightSizeCols = _size.right;

		let elements = [];

		for ( let i = 1; i <= _nRows; i ++ )
			for ( let j = 1; j <= rightSizeCols; j ++ )
				elements.push( this.entry( i, leftSizeCols + j ) );

		return new Matrix( _nRows, rightSizeCols, elements );

	}

}

// Disable these class methods for augmented matrices

AugmentedMatrix.prototype.transpose = undefined;
AugmentedMatrix.prototype.add = undefined;
AugmentedMatrix.prototype.sub = undefined;
AugmentedMatrix.prototype.multiply = undefined;

export { AugmentedMatrix };
