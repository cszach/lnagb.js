import { linearCombination } from '../algebra/MathUtils.js';

/**
 * @fileoverview
 * Set of functions used by lnagb.js to perform matrix operations better.
 *
 * @author Nguyen Hoang Duong / <you_create@protonmail.com>
 */

/**
 * Checks if two matrices have the same dimensions.
 *
 * @param {Matrix} m
 * @param {Matrix} n
 * @return {boolean} `true` if the two matrices have the same size,
 * `false` otherwise
 */
function sameSize( m, n ) {

	let mSize = m.size;
	let nSize = n.size;

	return mSize.rows === nSize.rows && mSize.columns === nSize.columns;

}

function equal( m, n ) {

	// Compare dimensions

	let mSize = m.size;
	let mSizeRows = mSize.rows;
	let mSizeCols = mSize.columns;
	let nSize = n.size;

	if ( mSizeRows !== nSize.rows || mSizeCols !== nSize.columns )
		return false;

	// Compare elements

	let M = m.elements;
	let N = n.elements;
	let _n = mSizeRows * mSizeCols;

	for ( let i = 0; i < _n; i ++ ) if ( M[ i ] !== N[ i ] ) return false;

	return true;

}

/**
 * Multiplies 2 matrices and returns the result's entries.
 *
 * @todo Optimize this method for efficiency
 *
 * @param {Matrix} leftMatrix The left matrix
 * @param {Matrix} rightMatrix The right matrix
 * @param {boolean} returnLeftOnError Return the left (or right) matrix on error?
 * @return {number[]} Entries of the product
 */
function multiplyMatrices( leftMatrix, rightMatrix, returnLeftOnError = true ) {

	/*
	 * APPROACH
	 *
	 * 1. Check if the matrices are compatible for matrix multiplication,
	 *    extracting the matrices' dimensions in the process
	 * 2. Create an array to store the elements of the result matrix
	 * 3. Create an array to store the columns of right matrix
	 * 4. Adds the columns of the right matrix to the array created in step 3
	 * 5. Run a loop from 1 to the number of rows in the left matrix, in the
	 *    loop:
	 *   5.1. Extract the row that corresponds to the iterator of the loop
	 *        in the left matrix and store the row's entries in an array
	 *   5.2. Run a loop from 0 to the number of columns in the right matrix minus
	 *        1, in the loop:
	 *     5.2.1. Extract the column at the iterator of the loop started in 5.2
	 *            from the matrix created in step 3
	 *     5.2.2. Treat the row extracted in 5.1 and the column extracted in 5.2.1
	 *            as 2 sets of numbers, compute their linear combination
	 *     5.2.2. Appends the linear combination to the array created in step 2
	 */

	// 1

	let lSize = leftMatrix.size;
	let lSizeRows = lSize.rows;
	let lSizeCols = lSize.columns;

	let rSize = rightMatrix.size;
	let rSizeRows = rSize.rows;
	let rSizeCols = rSize.columns;

	if ( lSizeCols !== rSizeRows ) {

		console.error( "Incompatible matrices for multiplication" );
		return ( returnLeftOnError ) ? leftMatrix : rightMatrix;

	}

	let left = leftMatrix.elements;
	let right = rightMatrix.elements;

	let _lSizeRows = lSizeRows + 1;
	let _rSizeCols = rSizeCols + 1;

	let result = []; // 2
	let rightMatrixColumns = []; // 3

	// 4

	for ( let c = 1, column = [], q = rSizeCols, p = - q;
		c < _rSizeCols; c ++, p ++ ) {

		for ( let r = 1, _rSizeRows = rSizeRows + 1; r < _rSizeRows; r ++ ) {

			column.push( right[ p + q ] );
			q += rSizeCols;

		}

		rightMatrixColumns.push( column );

	}

	for ( let r = 1; r < _lSizeRows; r ++ ) { // 3

		// 3.1 - Extract the corresponding row of the left matrix

		let row = [];
		let rowEnd = r * lSizeCols;
		let rowStart = rowEnd - lSizeCols;

		for ( let i = rowStart; i < rowEnd; i ++ ) row.push( left[ i ] );

		for ( let c = 0; c < rSizeCols; c ++ )
			result.push( linearCombination( row, rightMatrixColumns[ c ] ) );

	}

	return result; // 4

}

export { sameSize, equal, multiplyMatrices };
