import { Matrix } from './Matrix.js';
import { loop } from '../utils.js';

/**
 * Class for creating matrices that start off being identity matrices.
 *
 * Note that, as said above, instances of this class start as identity matrices.
 * They can be transformed into trivial matrices using methods inherited from
 * the base `Matrix` class.
 *
 * This class is a child class of `Matrix`. See the base [`Matrix`](./Matrix)
 * class for common properties and methods.
 */
class IdentityMatrix extends Matrix {

	/**
	 * Constructs an `IdentityMatrix` instance.
	 *
	 * The instance initially encodes an identity matrix.
	 *
	 * @param {number} size The number of rows/columns for the new matrix
	 */
	constructor( size ) {

		let elements = new Array( size * size ).fill( 0 );
		loop( size, function ( i ) {

			elements[ i * size + i - size - 1 ] = 1;

		} );

		super( size, size, ...elements );

	}

	/**
	 * Checks if `o` encodes an identity matrix and returns `true` if it does.
	 *
	 * @param {object} o The object to check
	 * @return {boolean} `true` if `o` is an identity matrix, false otherwise
	 */
	static isIdentityMatrix( o ) {

		return Matrix.isMatrix( o ) && o.elements.every( function ( e, i ) {

			let r = Math.floor( i / this.size.row ) + 1;
			return e === ( ( i === this.elementIndex( r, r ) ) ? 1 : 0 );

		}, o );

	}

}

export { IdentityMatrix };
