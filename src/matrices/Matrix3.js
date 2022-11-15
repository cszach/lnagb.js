/**
 * @module Matrix3
 * @author Zach / <cszach@proton.me>
 * @description
 *
 * Contains the {@link module:Matrix3~Matrix3} class, which encodes 3 x 3
 * matrices in linear algebra.
 */

/**
 * Encodes 3 x 3 matrices.
 *
 * @see {@link module:Matrix~Matrix} for common properties
 */
class Matrix3 {

	/**
	 * All parameters are optional and default to 0.
	 *
	 * @param {number} a The (1, 1)-entry of the new 3 x 3 matrix
	 * @param {number} b The (1, 2)-entry
	 * @param {number} c The (1, 3)-entry
	 * @param {number} d The (2, 1)-entry
	 * @param {number} e The (2, 2)-entry
	 * @param {number} f The (2, 3)-entry
	 * @param {number} g The (3, 1)-entry
	 * @param {number} h The (3, 2)-entry
	 * @param {number} i The (3, 3)-entry
	 */
	constructor(
		a = 0, b = 0, c = 0,
		d = 0, e = 0, f = 0,
		g = 0, h = 0, i = 0
	) {

		this.size = { rows: 3, columns: 3 };
		this.numberOfEntries = 9;
		this.elements = [ a, b, c, d, e, f, g, h, i ];

	}

	get rows() {

		let _ = this.elements;
		return [
			[ _[ 0 ], _[ 1 ], _[ 2 ] ],
			[ _[ 3 ], _[ 4 ], _[ 5 ] ],
			[ _[ 6 ], _[ 7 ], _[ 8 ] ]
		];

	}

	get columns() {

		let _ = this.elements;
		return [
			[ _[ 0 ], _[ 3 ], _[ 6 ] ],
			[ _[ 1 ], _[ 4 ], _[ 7 ] ],
			[ _[ 2 ], _[ 5 ], _[ 8 ] ]
		];

	}

	get mainDiagonal() {

		let _ = this.elements;
		return [ _[ 0 ], _[ 4 ], _[ 8 ] ];

	}

	clone() {

		return new this.constructor( ...this.elements );

	}

	equals( matrix ) {

		let mSize = matrix.size;

		if ( mSize.rows !== 3 || mSize.columns !== 3 ) return false;

		let _ = this.elements;
		let m = matrix.elements;

		return _[ 0 ] === m[ 0 ] && _[ 1 ] === m[ 1 ] && _[ 2 ] === m[ 2 ]
			&& _[ 3 ] === m[ 3 ] && _[ 4 ] === m[ 4 ] && _[ 5 ] === m[ 5 ]
			&& _[ 6 ] === m[ 6 ] && _[ 7 ] === m[ 7 ] && _[ 8 ] === m[ 8 ];

	}

	entry( i, j ) {

		return this.elements[ i * 3 + j - 4 ];

	}

	row( r ) {

		let _ = this.elements;

		switch ( r ) {

			case 1:
				return [ _[ 0 ], _[ 1 ], _[ 2 ] ];
			case 2:
				return [ _[ 3 ], _[ 4 ], _[ 5 ] ];
			case 3:
				return [ _[ 6 ], _[ 7 ], _[ 8 ] ];
			default:
				return undefined;

		}

	}

	column( c ) {

		let _ = this.elements;

		switch ( c ) {

			case 1:
				return [ _[ 0 ], _[ 3 ], _[ 6 ] ];
			case 2:
				return [ _[ 1 ], _[ 4 ], _[ 7 ] ];
			case 3:
				return [ _[ 2 ], _[ 5 ], _[ 8 ] ];
			default:
				return undefined;

		}

	}

	leadingCoefficient( r ) {

		let _ = this.elements;

		switch ( r ) {

			case 1:
				return _[ 0 ] !== 0 ? _[ 0 ] : ( _[ 1 ] !== 0 ? _[ 1 ] : ( _[ 2 ] !== 0 ? _[ 2 ] : undefined ) );
			case 2:
				return _[ 3 ] !== 0 ? _[ 3 ] : ( _[ 4 ] !== 0 ? _[ 4 ] : ( _[ 5 ] !== 0 ? _[ 5 ] : undefined ) );
			case 3:
				return _[ 6 ] !== 0 ? _[ 6 ] : ( _[ 7 ] !== 0 ? _[ 7 ] : ( _[ 8 ] !== 0 ? _[ 8 ] : undefined ) );
			default:
				return undefined;

		}

	}

	forEach( callback, thisArg ) {

		let _ = this.elements;
		let boundCallback = callback.bind( thisArg );

		boundCallback( _[ 0 ], 1, 1, 0, this );
		boundCallback( _[ 1 ], 1, 2, 1, this );
		boundCallback( _[ 2 ], 1, 3, 2, this );
		boundCallback( _[ 3 ], 2, 1, 3, this );
		boundCallback( _[ 4 ], 2, 2, 4, this );
		boundCallback( _[ 5 ], 2, 3, 5, this );
		boundCallback( _[ 6 ], 3, 1, 6, this );
		boundCallback( _[ 7 ], 3, 2, 7, this );
		boundCallback( _[ 8 ], 3, 3, 8, this );

	}

	forEachRow( callback, thisArg ) {

		let _ = this.elements;
		let boundCallback = callback.bind( thisArg );

		boundCallback( [ _[ 0 ], _[ 1 ], _[ 2 ] ], 1, this );
		boundCallback( [ _[ 3 ], _[ 4 ], _[ 5 ] ], 2, this );
		boundCallback( [ _[ 6 ], _[ 7 ], _[ 8 ] ], 3, this );

	}

	forEachColumn( callback, thisArg ) {

		let _ = this.elements;
		let boundCallback = callback.bind( thisArg );

		boundCallback( [ _[ 0 ], _[ 3 ], _[ 6 ] ], 1, this );
		boundCallback( [ _[ 1 ], _[ 4 ], _[ 7 ] ], 2, this );
		boundCallback( [ _[ 2 ], _[ 5 ], _[ 8 ] ], 3, this );

	}

	interchargeRows( r, s ) {

		let _ = this.elements;

		switch ( r + s ) {

			case 3: // Intercharge row 1 and row 2
				[ _[ 0 ], _[ 3 ] ] = [ _[ 3 ], _[ 0 ] ];
				[ _[ 1 ], _[ 4 ] ] = [ _[ 4 ], _[ 1 ] ];
				[ _[ 2 ], _[ 5 ] ] = [ _[ 5 ], _[ 2 ] ];

				return this;
			case 4: // Intercharge row 1 and row 3
				[ _[ 0 ], _[ 6 ] ] = [ _[ 6 ], _[ 0 ] ];
				[ _[ 1 ], _[ 7 ] ] = [ _[ 7 ], _[ 1 ] ];
				[ _[ 2 ], _[ 8 ] ] = [ _[ 8 ], _[ 2 ] ];

				return this;
			case 5: // Intercharge row 2 and row 3
				[ _[ 3 ], _[ 6 ] ] = [ _[ 6 ], _[ 3 ] ];
				[ _[ 4 ], _[ 7 ] ] = [ _[ 7 ], _[ 4 ] ];
				[ _[ 5 ], _[ 8 ] ] = [ _[ 8 ], _[ 5 ] ];

				return this;
			default:
				return this;

		}

	}

	multiplyRowByScalar( r, k ) {

		let _ = this.elements;

		switch ( r ) {

			case 1:
				_[ 0 ] *= k; _[ 1 ] *= k; _[ 2 ] *= k;
				return this;
			case 2:
				_[ 3 ] *= k; _[ 4 ] *= k; _[ 5 ] *= k;
				return this;
			case 3:
				_[ 6 ] *= k; _[ 7 ] *= k; _[ 8 ] *= k;
				return this;
			default:
				return this;

		}

	}

	addRowTimesScalarToRow( r, s, k = 1 ) {

		let _ = this.elements;

		let rStart = r * 3 - 3;
		let sStart = s * 3 - 3;

		_[ rStart ] += ( _[ sStart ] * k );
		_[ rStart + 1 ] += ( _[ sStart + 1 ] * k );
		_[ rStart + 2 ] += ( _[ sStart + 2 ] * k );

		return this;

	}

	transpose() {

		let _ = this.elements;

		[ _[ 1 ], _[ 3 ] ] = [ _[ 3 ], _[ 1 ] ];
		[ _[ 2 ], _[ 6 ] ] = [ _[ 6 ], _[ 2 ] ];
		[ _[ 5 ], _[ 7 ] ] = [ _[ 7 ], _[ 5 ] ];

		return this;

	}

	multiplyScalar( k ) {

		let _ = this.elements;

		_[ 0 ] *= k; _[ 1 ] *= k; _[ 2 ] *= k;
		_[ 3 ] *= k; _[ 4 ] *= k; _[ 5 ] *= k;
		_[ 6 ] *= k; _[ 7 ] *= k; _[ 8 ] *= k;

		return this;

	}

	negate() {

		return this.multiplyScalar( - 1 );

	}

	add( matrix ) {

		let _ = this.elements;
		let m = matrix.elements;

		_[ 0 ] += m[ 0 ]; _[ 1 ] += m[ 1 ]; _[ 2 ] += m[ 2 ];
		_[ 3 ] += m[ 3 ]; _[ 4 ] += m[ 4 ]; _[ 5 ] += m[ 5 ];
		_[ 6 ] += m[ 6 ]; _[ 7 ] += m[ 7 ]; _[ 8 ] += m[ 8 ];

		return this;

	}

	sub( matrix ) {

		let _ = this.elements;
		let m = matrix.elements;

		_[ 0 ] -= m[ 0 ]; _[ 1 ] -= m[ 1 ]; _[ 2 ] -= m[ 2 ];
		_[ 3 ] -= m[ 3 ]; _[ 4 ] -= m[ 4 ]; _[ 5 ] -= m[ 5 ];
		_[ 6 ] -= m[ 6 ]; _[ 7 ] -= m[ 7 ]; _[ 8 ] -= m[ 8 ];

		return this;

	}

	/**
	 * Multiplies this matrix by another 3 x 3 matrix.
	 *
	 * @param {matrix} matrix The 3 x 3 matrix to post-multiply this matrix to.
	 * @returns {Matrix3} This matrix
	 */
	multiply( matrix ) {

		let _ = this.elements;
		let m = matrix.elements;

		let _11 = _[ 0 ], _12 = _[ 1 ], _13 = _[ 2 ],
			_21 = _[ 3 ], _22 = _[ 4 ], _23 = _[ 5 ],
			_31 = _[ 6 ], _32 = _[ 7 ], _33 = _[ 8 ];

		let m11 = m[ 0 ], m12 = m[ 1 ], m13 = m[ 2 ],
			m21 = m[ 3 ], m22 = m[ 4 ], m23 = m[ 5 ],
			m31 = m[ 6 ], m32 = m[ 7 ], m33 = m[ 8 ];

		_[ 0 ] = _11 * m11 + _12 * m21 + _13 * m31;
		_[ 1 ] = _11 * m12 + _12 * m22 + _13 * m32;
		_[ 2 ] = _11 * m13 + _12 * m23 + _13 * m33;
		_[ 3 ] = _21 * m11 + _22 * m21 + _23 * m31;
		_[ 4 ] = _21 * m12 + _22 * m22 + _23 * m32;
		_[ 5 ] = _21 * m13 + _22 * m23 + _23 * m33;
		_[ 6 ] = _31 * m11 + _32 * m21 + _33 * m31;
		_[ 7 ] = _31 * m12 + _32 * m22 + _33 * m32;
		_[ 8 ] = _31 * m13 + _32 * m23 + _33 * m33;

		return this;

	}

}

export { Matrix3 };
