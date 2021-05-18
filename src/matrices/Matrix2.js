/**
 * @module Matrix2
 * @author Nguyen Hoang Duong / <you_create@protonmail.com>
 * @description
 *
 * Contains the {@link module:Matrix2~Matrix2} class, which encodes 2 x 2
 * matrices in linear algebra.
 */

/**
 * Encodes 2 x 2 matrices. Has speed advantage over {@link module:Matrix~Matrix}.
 *
 * @see {@link module:Matrix~Matrix} for common properties
 */
class Matrix2 {

	constructor( entries ) {

		this.size = { rows: 2, columns: 2 };
		this.numberOfEntries = 4;
		this.elements = entries || new Array( 4 ).fill( 0 );

	}

	get rows() {

		let _ = this.elements;
		return [[ _[ 0 ], _[ 1 ] ], [ _[ 2 ], _[ 3 ] ]];

	}

	get columns() {

		let _ = this.elements;
		return [[ _[ 0 ], _[ 2 ] ], [ _[ 1 ], _[ 3 ] ]];

	}

	get mainDiagonal() {

		let _ = this.elements;
		return [ _[ 0 ], _[ 3 ] ];

	}

	clone() {

		return new this.constructor( this.elements.slice() );

	}

	equals( matrix ) {

		let mSize = matrix.size;

		if ( mSize.rows !== 2 || mSize.columns !== 2 ) return false;

		let _ = this.elements;
		let m = matrix.elements;

		return _[ 0 ] === m[ 0 ] && _[ 1 ] === m[ 1 ] && _[ 2 ] === m[ 2 ]
			&& _[ 3 ] === m[ 3 ];

	}

	entry( i, j ) {

		return this.elements[ i * 2 + j - 3 ];

	}

	row( r ) {

		let _ = this.elements;

		return ( r === 1 ) ? [ _[ 0 ], _[ 1 ] ] : [ _[ 2 ], _[ 3 ] ];

	}

	column( c ) {

		let _ = this.elements;

		return ( c === 1 ) ? [ _[ 0 ], _[ 2 ] ] : [ _[ 1 ], _[ 3 ] ];

	}

	leadingCoefficient( r ) {

		let _ = this.elements;

		return ( r === 1 )
			? ( ( _[ 0 ] !== 0 ) ? _[ 0 ] : ( ( _[ 1 ] !== 0 ) ? _[ 1 ] : undefined ) )
			: ( ( _[ 2 ] !== 0 ) ? _[ 2 ] : ( ( _[ 3 ] !== 0 ) ? _[ 3 ] : undefined ) );

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
		[ _[ 1 ], _[ 2 ] ] = [ _[ 2 ], _[ 1 ] ];

		return this;

	}

	multiplyScalar( k ) {

		let _ = this.elements;

		_[ 0 ] *= k;
		_[ 1 ] *= k;
		_[ 2 ] *= k;
		_[ 3 ] *= k;

		return this;

	}

	negate() {

		let _ = this.elements;

		_[ 0 ] = - _[ 0 ];
		_[ 1 ] = - _[ 1 ];
		_[ 2 ] = - _[ 2 ];
		_[ 3 ] = - _[ 3 ];

		return this;

	}

	add( matrix ) {

		let _ = this.elements;
		let m = matrix.elements;

		_[ 0 ] += m[ 0 ];
		_[ 1 ] += m[ 1 ];
		_[ 2 ] += m[ 2 ];
		_[ 3 ] += m[ 3 ];

		return this;

	}

	sub( matrix ) {

		let _ = this.elements;
		let m = matrix.elements;

		_[ 0 ] -= m[ 0 ];
		_[ 1 ] -= m[ 1 ];
		_[ 2 ] -= m[ 2 ];
		_[ 3 ] -= m[ 3 ];

		return this;

	}

	/**
	 * Multiplies this matrix by another 2 x 2 matrix.
	 *
	 * @param {Matrix} matrix The 2 x 2 matrix to post-multiply this matrix to.
	 * @returns {Matrix2} This matrix
	 */
	multiply( matrix ) {

		let _ = this.elements;
		let m = matrix.elements;

		let _11 = _[ 0 ];
		let _12 = _[ 1 ];
		let _21 = _[ 2 ];
		let _22 = _[ 3 ];

		_[ 0 ] = _11 * m[ 0 ] + _12 * m[ 2 ];
		_[ 1 ] = _11 * m[ 1 ] + _12 * m[ 3 ];
		_[ 2 ] = _21 * m[ 0 ] + _22 * m[ 2 ];
		_[ 3 ] = _21 * m[ 1 ] + _22 * m[ 3 ];

		return this;

	}

}

export { Matrix2 };
