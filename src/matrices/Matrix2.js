/**
 * @module Matrix2
 * @author Novak / <novakcgx@protonmail.com>
 * @description
 *
 * Contains the {@link module:Matrix2~Matrix2} class, which encodes 2 x 2
 * matrices in linear algebra.
 */

/**
 * Encodes 2 x 2 matrices.
 *
 * @see {@link module:Matrix~Matrix} for common properties
 */
class Matrix2 {

	/**
	 * All parameters are optional and default to 0.
	 *
	 * @param {number} a The (1, 1)-entry of the new 2 x 2 matrix
	 * @param {number} b The (1, 2)-entry
	 * @param {number} c The (2, 1)-entry
	 * @param {number} d The (2, 2)-entry
	 */
	constructor(
		a = 0, b = 0,
		c = 0, d = 0
	) {

		this.size = { rows: 2, columns: 2 };
		this.numberOfEntries = 4;
		this.elements = [ a, b, c, d ];

	}

	get rows() {

		let _ = this.elements;
		return [
			[ _[ 0 ], _[ 1 ] ],
			[ _[ 2 ], _[ 3 ] ]
		];

	}

	get columns() {

		let _ = this.elements;
		return [
			[ _[ 0 ], _[ 2 ] ],
			[ _[ 1 ], _[ 3 ] ]
		];

	}

	get mainDiagonal() {

		let _ = this.elements;
		return [ _[ 0 ], _[ 3 ] ];

	}

	clone() {

		return new this.constructor( ...this.elements );

	}

	equals( matrix ) {

		let mSize = matrix.size;

		if ( mSize.rows !== 2 || mSize.columns !== 2 ) return false;

		let _ = this.elements;
		let m = matrix.elements;

		return _[ 0 ] === m[ 0 ] && _[ 1 ] === m[ 1 ]
			&& _[ 2 ] === m[ 2 ] && _[ 3 ] === m[ 3 ];

	}

	entry( i, j ) {

		return this.elements[ i * 2 + j - 3 ];

	}

	row( r ) {

		let _ = this.elements;

		switch ( r ) {

			case 1:
				return [ _[ 0 ], _[ 1 ] ];
			case 2:
				return [ _[ 2 ], _[ 3 ] ];
			default:
				return undefined;

		}

	}

	column( c ) {

		let _ = this.elements;

		switch ( c ) {

			case 1:
				return [ _[ 0 ], _[ 2 ] ];
			case 2:
				return [ _[ 1 ], _[ 3 ] ];
			default:
				return undefined;

		}

	}

	leadingCoefficient( r ) {

		let _ = this.elements;

		switch ( r ) {

			case 1:
				return _[ 0 ] !== 0 ? _[ 0 ] : ( _[ 1 ] !== 0 ? _[ 1 ] : undefined );
			case 2:
				return _[ 2 ] !== 0 ? _[ 2 ] : ( _[ 3 ] !== 0 ? _[ 3 ] : undefined );
			default:
				return undefined;

		}

	}

	forEach( callback, thisArg ) {

		let _ = this.elements;
		let boundCallback = callback.bind( thisArg );

		boundCallback( _[ 0 ], 1, 1, 0, this );
		boundCallback( _[ 1 ], 1, 2, 1, this );
		boundCallback( _[ 2 ], 2, 1, 2, this );
		boundCallback( _[ 3 ], 2, 2, 3, this );

	}

	forEachRow( callback, thisArg ) {

		let _ = this.elements;
		let boundCallback = callback.bind( thisArg );

		boundCallback( [ _[ 0 ], _[ 1 ] ], 1, this );
		boundCallback( [ _[ 2 ], _[ 3 ] ], 2, this );

	}

	forEachColumn( callback, thisArg ) {

		let _ = this.elements;
		let boundCallback = callback.bind( thisArg );

		boundCallback( [ _[ 0 ], _[ 2 ] ], 1, this );
		boundCallback( [ _[ 1 ], _[ 3 ] ], 2, this );

	}

	/**
	 * Intercharges the two rows in this matrix.
	 *
	 * @returns {Matrix2} This matrix
	 */
	interchargeRows() {

		let _ = this.elements;
		[ _[ 0 ], _[ 2 ] ] = [ _[ 2 ], _[ 0 ] ];
		[ _[ 1 ], _[ 3 ] ] = [ _[ 3 ], _[ 1 ] ];

		return this;

	}

	multiplyRowByScalar( r, k ) {

		let _ = this.elements;

		switch ( r ) {

			case 1:
				_[ 0 ] *= k; _[ 1 ] *= k;
				return this;
			case 2:
				_[ 2 ] *= k; _[ 3 ] *= k;
				return this;
			default:
				return this;

		}

	}

	addRowTimesScalarToRow( r, s, k = 1 ) {

		let _ = this.elements;

		let rStart = r * 2 - 2;
		let sStart = s * 2 - 2;

		_[ rStart ] += ( _[ sStart ] * k );
		_[ rStart + 1 ] += ( _[ sStart + 1 ] * k );

		return this;

	}

	transpose() {

		let _ = this.elements;
		[ _[ 1 ], _[ 2 ] ] = [ _[ 2 ], _[ 1 ] ];

		return this;

	}

	multiplyScalar( k ) {

		let _ = this.elements;

		_[ 0 ] *= k; _[ 1 ] *= k;
		_[ 2 ] *= k; _[ 3 ] *= k;

		return this;

	}

	negate() {

		return this.multiplyScalar( - 1 );

	}

	add( matrix ) {

		let _ = this.elements;
		let m = matrix.elements;

		_[ 0 ] += m[ 0 ]; _[ 1 ] += m[ 1 ];
		_[ 2 ] += m[ 2 ]; _[ 3 ] += m[ 3 ];

		return this;

	}

	sub( matrix ) {

		let _ = this.elements;
		let m = matrix.elements;

		_[ 0 ] -= m[ 0 ]; _[ 1 ] -= m[ 1 ];
		_[ 2 ] -= m[ 2 ]; _[ 3 ] -= m[ 3 ];

		return this;

	}

	/**
	 * Multiplies this matrix by another 2 x 2 matrix.
	 *
	 * @param {matrix} matrix The 2 x 2 matrix to post-multiply this matrix to.
	 * @returns {Matrix2} This matrix
	 */
	multiply( matrix ) {

		let _ = this.elements;
		let m = matrix.elements;

		let _11 = _[ 0 ], _12 = _[ 1 ],
			_21 = _[ 2 ], _22 = _[ 3 ];

		let m11 = m[ 0 ], m12 = m[ 1 ],
			m21 = m[ 2 ], m22 = m[ 3 ];

		_[ 0 ] = _11 * m11 + _12 * m21;
		_[ 1 ] = _11 * m12 + _12 * m22;
		_[ 2 ] = _21 * m11 + _22 * m21;
		_[ 3 ] = _21 * m12 + _22 * m22;

		return this;

	}

}

export { Matrix2 };
