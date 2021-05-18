/**
 * @module Matrix3
 * @author Nguyen Hoang Duong / <you_create@protonmail.com>
 * @description
 *
 * Contains the {@link module:Matrix3~Matrix3} class, which encodes 3 x 3
 * matrices in linear algebra.
 */

/**
 * Encodes 3 x 3 matrices. Has speed advantage over {@link module:Matrix~Matrix}.
 *
 * @see {@link module:Matrix~Matrix} for common properties
 */
class Matrix3 {

	constructor( entries ) {

		this.size = { rows: 3, columns: 3 };
		this.numberOfEntries = 9;
		this.elements = entries || new Array( 9 ).fill( 0 );

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

		return new this.constructor( this.elements.slice() );

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

		return ( r === 1 )
			? [ _[ 0 ], _[ 1 ], _[ 2 ] ]
			: ( r === 2 ) ? [ _[ 3 ], _[ 4 ], _[ 5 ] ]
						  : [ _[ 6 ], _[ 7 ], _[ 8 ] ];

	}

	column( c ) {

		let _ = this.elements;

		return ( c === 1 )
			? [ _[ 0 ], _[ 3 ], _[ 6 ] ]
			: ( c === 2 ) ? [ _[ 1 ], _[ 4 ], _[ 7 ] ]
						  : [ _[ 2 ], _[ 5 ], _[ 8 ] ];

	}

	leadingCoefficient( r ) {

		let _ = this.elements;

		return (
			( r === 1 ) ? [ _[ 0 ], _[ 1 ], _[ 2 ] ]
				: ( r === 2 ) ? [ _[ 3 ], _[ 4 ], _[ 5 ] ]
					: [ _[ 6 ], _[ 7 ], _[ 8 ] ]
		).find( ( n ) => n !== 0 );

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
		boundCallback( [ _[ 6 ], _[ 7 ], _[ 7 ] ], 3, this );

	}

	forEachColumn( callback, thisArg ) {

		let _ = this.elements;
		let boundCallback = callback.bind( thisArg );

		boundCallback( [ _[ 0 ], _[ 3 ], _[ 6 ] ], 1, this );
		boundCallback( [ _[ 1 ], _[ 4 ], _[ 7 ] ], 2, this );
		boundCallback( [ _[ 2 ], _[ 5 ], _[ 8 ] ], 3, this );

	}

	interchargeRows( r, s ) {

		if ( r !== s ) {

			let _ = this.elements;
			[ _[ 0 ], _[ 2 ] ] = [ _[ 2 ], _[ 0 ] ];
			[ _[ 1 ], _[ 3 ] ] = [ _[ 3 ], _[ 1 ] ];

		}

		return this;

	}

	multiplyRowByScalar( r, k ) {

		if ( k == 0 ) {

			console.error( "Input scalar must be nonzero" );
			return this;

		}

		let _ = this.elements;

		if ( r === 1 ) {

			_[ 0 ] *= k; _[ 1 ] *= k;

		} else {

			_[ 2 ] *= k; _[ 3 ] *= k;

		}

		return this;

	}

	addRowTimesScalarToRow( r, s, k = 1 ) {

		let _ = this.elements;

		if ( r === 1 ) {

			_[ 0 ] += _[ 2 ] * k;
			_[ 1 ] += _[ 3 ] * k;

		} else {

			_[ 2 ] += _[ 0 ] * k;
			_[ 3 ] += _[ 1 ] * k;

		}

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

		let _ = this.elements;

		_[ 0 ] = - _[ 0 ]; _[ 1 ] = - _[ 1 ]; _[ 2 ] = - _[ 2 ];
		_[ 3 ] = - _[ 3 ]; _[ 4 ] = - _[ 4 ]; _[ 5 ] = - _[ 5 ];
		_[ 6 ] = - _[ 6 ]; _[ 7 ] = - _[ 7 ]; _[ 8 ] = - _[ 8 ];

		return this;

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
	 * @param {Matrix} matrix The 3 x 3 matrix to post-multiply this matrix to.
	 * @returns {Matrix3} This matrix
	 */
	multiply( matrix ) {

		let _ = this.elements;
		let m = matrix.elements;

		let _11 = _[ 0 ];
		let _12 = _[ 1 ];
		let _13 = _[ 2 ];
		let _21 = _[ 3 ];
		let _22 = _[ 4 ];
		let _23 = _[ 5 ];
		let _31 = _[ 6 ];
		let _32 = _[ 7 ];
		let _33 = _[ 8 ];

		_[ 0 ] = _11 * m[ 0 ] + _12 * m[ 3 ] + _13 * m[ 6 ];
		_[ 1 ] = _11 * m[ 1 ] + _12 * m[ 4 ] + _13 * m[ 7 ];
		_[ 2 ] = _11 * m[ 2 ] + _12 * m[ 5 ] + _13 * m[ 8 ];
		_[ 3 ] = _21 * m[ 0 ] + _22 * m[ 3 ] + _23 * m[ 6 ];
		_[ 4 ] = _21 * m[ 1 ] + _22 * m[ 4 ] + _23 * m[ 7 ];
		_[ 5 ] = _21 * m[ 2 ] + _22 * m[ 5 ] + _23 * m[ 8 ];
		_[ 6 ] = _31 * m[ 0 ] + _32 * m[ 3 ] + _33 * m[ 6 ];
		_[ 7 ] = _31 * m[ 1 ] + _32 * m[ 4 ] + _33 * m[ 7 ];
		_[ 8 ] = _31 * m[ 2 ] + _32 * m[ 5 ] + _33 * m[ 8 ];

		return this;

	}

}

export { Matrix3 };
