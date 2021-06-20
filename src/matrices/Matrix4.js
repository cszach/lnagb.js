/**
 * @module Matrix4
 * @author Nguyen Hoang Duong / <novakcgx@protonmail.com>
 * @description
 *
 * Contains the {@link module:Matrix4~Matrix4} class, which encodes 4 x 4
 * matrices in linear algebra.
 */

/**
 * Encodes 4 x 4 matrices.
 *
 * @see {@link module:Matrix~Matrix} for common properties
 */
class Matrix4 {

	/**
	 * All parameters are optional and default to 0.
	 *
	 * @param {number} a The (1, 1)-entry of the new 4 x 4 matrix
	 * @param {number} b The (1, 2)-entry
	 * @param {number} c The (1, 3)-entry
	 * @param {number} d The (1, 4)-entry
	 * @param {number} e The (2, 1)-entry
	 * @param {number} f The (2, 2)-entry
	 * @param {number} g The (2, 3)-entry
	 * @param {number} h The (2, 4)-entry
	 * @param {number} i The (3, 1)-entry
	 * @param {number} j The (3, 2)-entry
	 * @param {number} k The (3, 3)-entry
	 * @param {number} l The (3, 4)-entry
	 * @param {number} m The (4, 1)-entry
	 * @param {number} n The (4, 2)-entry
	 * @param {number} o The (4, 3)-entry
	 * @param {number} p The (4, 4)-entry
	 */
	constructor(
		a = 0, b = 0, c = 0, d = 0,
		e = 0, f = 0, g = 0, h = 0,
		i = 0, j = 0, k = 0, l = 0,
		m = 0, n = 0, o = 0, p = 0
	) {

		this.size = { rows: 4, columns: 4 };
		this.numberOfEntries = 16;
		this.elements = [ a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p ];

	}

	get rows() {

		let _ = this.elements;
		return [
			[ _[ 0 ], _[ 1 ], _[ 2 ], _[ 3 ] ],
			[ _[ 4 ], _[ 5 ], _[ 6 ], _[ 7 ] ],
			[ _[ 8 ], _[ 9 ], _[ 10 ], _[ 11 ] ],
			[ _[ 12 ], _[ 13 ], _[ 14 ], _[ 15 ] ]
		];

	}

	get columns() {

		let _ = this.elements;
		return [
			[ _[ 0 ], _[ 4 ], _[ 8 ], _[ 12 ] ],
			[ _[ 1 ], _[ 5 ], _[ 9 ], _[ 13 ] ],
			[ _[ 2 ], _[ 6 ], _[ 10 ], _[ 14 ] ],
			[ _[ 3 ], _[ 7 ], _[ 11 ], _[ 15 ] ]
		];

	}

	get mainDiagonal() {

		let _ = this.elements;
		return [ _[ 0 ], _[ 5 ], _[ 10 ], _[ 15 ] ];

	}

	clone() {

		return new this.constructor( ...this.elements );

	}

	equals( matrix ) {

		let mSize = matrix.size;

		if ( mSize.rows !== 4 || mSize.columns !== 4 ) return false;

		let _ = this.elements;
		let m = matrix.elements;

		return _[ 0 ] === m[ 0 ] && _[ 1 ] === m[ 1 ] && _[ 2 ] === m[ 2 ] && _[ 3 ] === m[ 3 ]
			&& _[ 4 ] === m[ 4 ] && _[ 5 ] === m[ 5 ] && _[ 6 ] === m[ 6 ] && _[ 7 ] === m[ 7 ]
			&& _[ 8 ] === m[ 8 ] && _[ 9 ] === m[ 9 ] && _[ 10 ] === m[ 10 ] && _[ 11 ] === m[ 11 ]
			&& _[ 12 ] === m[ 12 ] && _[ 13 ] === m[ 13 ] && _[ 14 ] === m[ 14 ] && _[ 15 ] === m[ 15 ];

	}

	entry( i, j ) {

		return this.elements[ i * 4 + j - 5 ];

	}

	row( r ) {

		let _ = this.elements;

		switch ( r ) {

			case 1:
				return [ _[ 0 ], _[ 1 ], _[ 2 ], _[ 3 ] ];
			case 2:
				return [ _[ 4 ], _[ 5 ], _[ 6 ], _[ 7 ] ];
			case 3:
				return [ _[ 8 ], _[ 9 ], _[ 10 ], _[ 11 ] ];
			case 4:
				return [ _[ 12 ], _[ 13 ], _[ 14 ], _[ 15 ] ];

		}

	}

	column( c ) {

		let _ = this.elements;

		switch ( c ) {

			case 1:
				return [ _[ 0 ], _[ 4 ], _[ 8 ], _[ 12 ] ];
			case 2:
				return [ _[ 1 ], _[ 5 ], _[ 9 ], _[ 13 ] ];
			case 3:
				return [ _[ 2 ], _[ 6 ], _[ 10 ], _[ 14 ] ];
			case 4:
				return [ _[ 3 ], _[ 7 ], _[ 11 ], _[ 15 ] ];

		}

	}

	leadingCoefficient( r ) {

		let _ = this.elements;
		let row;

		switch ( r ) {

			case 1:
				row = [ _[ 0 ], _[ 1 ], _[ 2 ], _[ 3 ] ];
				break;
			case 2:
				row = [ _[ 4 ], _[ 5 ], _[ 6 ], _[ 7 ] ];
				break;
			case 3:
				row = [ _[ 8 ], _[ 9 ], _[ 10 ], _[ 11 ] ];
				break;
			case 4:
				row = [ _[ 12 ], _[ 13 ], _[ 14 ], _[ 15 ] ];
				break;
			default:
				return undefined;

		}

		return row.find( ( n ) => n !== 0 );

	}

	forEach( callback, thisArg ) {

		let _ = this.elements;
		let boundCallback = callback.bind( thisArg );

		boundCallback( _[ 0 ], 1, 1, 0, this );
		boundCallback( _[ 1 ], 1, 2, 1, this );
		boundCallback( _[ 2 ], 1, 3, 2, this );
		boundCallback( _[ 3 ], 1, 4, 3, this );
		boundCallback( _[ 4 ], 2, 1, 4, this );
		boundCallback( _[ 5 ], 2, 2, 5, this );
		boundCallback( _[ 6 ], 2, 3, 6, this );
		boundCallback( _[ 7 ], 2, 4, 7, this );
		boundCallback( _[ 8 ], 3, 1, 8, this );
		boundCallback( _[ 9 ], 3, 2, 9, this );
		boundCallback( _[ 10 ], 3, 3, 10, this );
		boundCallback( _[ 11 ], 3, 4, 11, this );
		boundCallback( _[ 12 ], 4, 1, 12, this );
		boundCallback( _[ 13 ], 4, 2, 13, this );
		boundCallback( _[ 14 ], 4, 3, 14, this );
		boundCallback( _[ 15 ], 4, 4, 15, this );

	}

	forEachRow( callback, thisArg ) {

		let _ = this.elements;
		let boundCallback = callback.bind( thisArg );

		boundCallback( [ _[ 0 ], _[ 1 ], _[ 2 ], _[ 3 ] ], 1, this );
		boundCallback( [ _[ 4 ], _[ 5 ], _[ 6 ], _[ 7 ] ], 2, this );
		boundCallback( [ _[ 8 ], _[ 9 ], _[ 10 ], _[ 11 ] ], 3, this );
		boundCallback( [ _[ 12 ], _[ 13 ], _[ 14 ], _[ 15 ] ], 4, this );

	}

	forEachColumn( callback, thisArg ) {

		let _ = this.elements;
		let boundCallback = callback.bind( thisArg );

		boundCallback( [ _[ 0 ], _[ 4 ], _[ 8 ], _[ 12 ] ], 1, this );
		boundCallback( [ _[ 1 ], _[ 5 ], _[ 9 ], _[ 13 ] ], 2, this );
		boundCallback( [ _[ 2 ], _[ 6 ], _[ 10 ], _[ 14 ] ], 3, this );
		boundCallback( [ _[ 3 ], _[ 7 ], _[ 11 ], _[ 15 ] ], 4, this );

	}

	interchargeRows( r, s ) {

		let _ = this.elements;
		let p = r * 4 - 4;
		let q = s * 4 - 4;

		for ( let c = 0; c < 4; c ++ ) {

			[ _[ p ++ ], _[ q ++ ] ] = [ _[ q ], _[ p ] ];

		}

		return this;

	}

	multiplyRowByScalar( r, k ) {

		let _ = this.elements;

		switch ( r ) {

			case 1:
				_[ 0 ] *= k; _[ 1 ] *= k; _[ 2 ] *= k; _[ 3 ] *= k;
				return this;
			case 2:
				_[ 4 ] *= k; _[ 5 ] *= k; _[ 6 ] *= k; _[ 7 ] *= k;
				return this;
			case 3:
				_[ 8 ] *= k; _[ 9 ] *= k; _[ 10 ] *= k; _[ 11 ] *= k;
				return this;
			case 4:
				_[ 12 ] *= k; _[ 13 ] *= k; _[ 14 ] *= k; _[ 15 ] *= k;
				return this;
			default:
				return this;

		}

	}

	addRowTimesScalarToRow( r, s, k = 1 ) {

		let _ = this.elements;

		let rStart = r * 4 - 4;
		let sStart = s * 4 - 4;

		_[ rStart ] += ( _[ sStart ] * k );
		_[ rStart + 1 ] += ( _[ sStart + 1 ] * k );
		_[ rStart + 2 ] += ( _[ sStart + 2 ] * k );
		_[ rStart + 3 ] += ( _[ sStart + 3 ] * k );

		return this;

	}

	transpose() {

		let _ = this.elements;

		[ _[ 1 ], _[ 4 ] ] = [ _[ 4 ], _[ 1 ] ];
		[ _[ 2 ], _[ 8 ] ] = [ _[ 8 ], _[ 2 ] ];
		[ _[ 3 ], _[ 12 ] ] = [ _[ 12 ], _[ 3 ] ];
		[ _[ 6 ], _[ 9 ] ] = [ _[ 9 ], _[ 6 ] ];
		[ _[ 7 ], _[ 13 ] ] = [ _[ 13 ], _[ 7 ] ];
		[ _[ 11 ], _[ 14 ] ] = [ _[ 14 ], _[ 11 ] ];

		return this;

	}

	multiplyScalar( k ) {

		let _ = this.elements;

		_[ 0 ] *= k; _[ 1 ] *= k; _[ 2 ] *= k; _[ 3 ] *= k;
		_[ 4 ] *= k; _[ 5 ] *= k; _[ 6 ] *= k; _[ 7 ] *= k;
		_[ 8 ] *= k; _[ 9 ] *= k; _[ 10 ] *= k; _[ 11 ] *= k;
		_[ 12 ] *= k; _[ 13 ] *= k; _[ 14 ] *= k; _[ 15 ] *= k;

		return this;

	}

	negate() {

		return this.multiplyScalar( - 1 );

	}

	add( matrix ) {

		let _ = this.elements;
		let m = matrix.elements;

		_[ 0 ] += m[ 0 ]; _[ 1 ] += m[ 1 ]; _[ 2 ] += m[ 2 ]; _[ 3 ] += m[ 3 ];
		_[ 4 ] += m[ 4 ]; _[ 5 ] += m[ 5 ]; _[ 6 ] += m[ 6 ]; _[ 7 ] += m[ 7 ];
		_[ 8 ] += m[ 8 ]; _[ 9 ] += m[ 9 ]; _[ 10 ] += m[ 10 ]; _[ 11 ] += m[ 11 ];
		_[ 12 ] += m[ 12 ]; _[ 13 ] += m[ 13 ]; _[ 14 ] += m[ 14 ]; _[ 15 ] += m[ 15 ];

		return this;

	}

	sub( matrix ) {

		let _ = this.elements;
		let m = matrix.elements;

		_[ 0 ] -= m[ 0 ]; _[ 1 ] -= m[ 1 ]; _[ 2 ] -= m[ 2 ]; _[ 3 ] -= m[ 3 ];
		_[ 4 ] -= m[ 4 ]; _[ 5 ] -= m[ 5 ]; _[ 6 ] -= m[ 6 ]; _[ 7 ] -= m[ 7 ];
		_[ 8 ] -= m[ 8 ]; _[ 9 ] -= m[ 9 ]; _[ 10 ] -= m[ 10 ]; _[ 11 ] -= m[ 11 ];
		_[ 12 ] -= m[ 12 ]; _[ 13 ] -= m[ 13 ]; _[ 14 ] -= m[ 14 ]; _[ 15 ] -= m[ 15 ];

		return this;

	}

	/**
	 * Multiplies this matrix by another 4 x 4 matrix.
	 *
	 * @param {matrix} matrix The 4 x 4 matrix to post-multiply this matrix to.
	 * @returns {Matrix4} This matrix
	 */
	multiply( matrix ) {

		let _ = this.elements;
		let m = matrix.elements;

		let _11 = _[ 0 ], _12 = _[ 1 ], _13 = _[ 2 ], _14 = _[ 3 ],
		    _21 = _[ 4 ], _22 = _[ 5 ], _23 = _[ 6 ], _24 = _[ 7 ],
			_31 = _[ 8 ], _32 = _[ 9 ], _33 = _[ 10 ], _34 = _[ 11 ],
			_41 = _[ 12 ], _42 = _[ 13 ], _43 = _[ 14 ], _44 = _[ 15 ];

		let m11 = m[ 0 ], m12 = m[ 1 ], m13 = m[ 2 ], m14 = m[ 3 ],
		    m21 = m[ 4 ], m22 = m[ 5 ], m23 = m[ 6 ], m24 = m[ 7 ],
			m31 = m[ 8 ], m32 = m[ 9 ], m33 = m[ 10 ], m34 = m[ 11 ],
			m41 = m[ 12 ], m42 = m[ 13 ], m43 = m[ 14 ], m44 = m[ 15 ];

		_[ 0 ] = _11 * m11 + _12 * m21 + _13 * m31 + _14 * m41;
		_[ 1 ] = _11 * m12 + _12 * m22 + _13 * m32 + _14 * m42;
		_[ 2 ] = _11 * m13 + _12 * m23 + _13 * m33 + _14 * m43;
		_[ 3 ] = _11 * m14 + _12 * m24 + _13 * m34 + _14 * m44;
		_[ 4 ] = _21 * m11 + _22 * m21 + _23 * m31 + _24 * m41;
		_[ 5 ] = _21 * m12 + _22 * m22 + _23 * m32 + _24 * m42;
		_[ 6 ] = _21 * m13 + _22 * m23 + _23 * m33 + _24 * m43;
		_[ 7 ] = _21 * m14 + _22 * m24 + _23 * m34 + _24 * m44;
		_[ 8 ] = _31 * m11 + _32 * m21 + _33 * m31 + _34 * m41;
		_[ 9 ] = _31 * m12 + _32 * m22 + _33 * m32 + _34 * m42;
		_[ 10 ] = _31 * m13 + _32 * m23 + _33 * m33 + _34 * m43;
		_[ 11 ] = _31 * m14 + _32 * m24 + _33 * m34 + _34 * m44;
		_[ 12 ] = _41 * m11 + _42 * m21 + _43 * m31 + _44 * m41;
		_[ 13 ] = _41 * m12 + _42 * m22 + _43 * m32 + _44 * m42;
		_[ 14 ] = _41 * m13 + _42 * m23 + _43 * m33 + _44 * m43;
		_[ 15 ] = _41 * m14 + _42 * m24 + _43 * m34 + _44 * m44;

		return this;

	}

}

export { Matrix4 };
