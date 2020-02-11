import { Matrix } from './Matrix.js';
import { loop } from '../utils.js';

/**
 * Class for creating matrices that start off being identity matrices.
 *
 * Note that this class is very similar to the class `Matrix`, the only
 * difference is that the constructor of this class requires exactly 1 argument
 * and the new instance starts off being an identity matrix.
 */
class IdentityMatrix extends Matrix {

	constructor( size ) {

		super( size, size );

		this.elements = new Array( size * size ).fill( 0 );
		loop( size, function ( i ) {

			this.elements[ this.elementIndex( i, i ) ] = 1;

		}, this );

	}

	/**
	 * Checks if the matrix *m* is an identity matrix.
	 *
	 * Note that this function assumes the argument to be an instance of
	 * `Matrix`.
	 *
	 * @param {object} m The matrix to check
	 * @return {boolean} `true` if `m` is an identity matrix, false otherwise
	 */
	static isIdentityMatrix( m ) {

		return m.elements.every( function ( e, i ) {

			let r = Math.floor( i / this.size.row ) + 1;
			return e === ( ( i === this.elementIndex( r, r ) ) ? 1 : 0 );

		}, m );

	}

}

export { IdentityMatrix };
