/**
 * @module Vector4
 * @author Nguyen Hoang Duong / <you_create@protonmail.com>
 * @description
 *
 * Contains the {@link module:Vector4~Vector4} class, which encodes 4-vectors.
 */

/**
 * Encodes 4-vectors, which are vectors that have 4 entries. See also
 * {@link module:Vector2~Vector2} & {@link module:Vector3~Vector3}.
 *
 * @see {@link module:Vector~Vector} for common properties
 */
class Vector4 {

	constructor( x = 0, y = 0, z = 0, w = 0 ) {

		this.x = x;
		this.y = y;
		this.z = z;
		this.w = w;
		this.elements = [ x, y, z, w ];
		this.size = { rows: 4, columns: 1 };
		this.numberOfEntries = 4;

	}

	clone() {

		return new this.constructor( this.x, this.y, this.z, this.w );

	}

	equals( vector ) {

		let _ = this.elements;
		let v = vector.elements;

		return this.numberOfEntries === vector.numberOfEntries
			&& _[ 0 ] === v[ 0 ] && _[ 1 ] === v[ 1 ] && _[ 2 ] === v[ 2 ] && _[ 3 ] === v[ 3 ];

	}

	multiplyScalar( k ) {

		let _ = this.elements;

		_[ 0 ] *= k; this.x = _[ 0 ];
		_[ 1 ] *= k; this.y = _[ 1 ];
		_[ 2 ] *= k; this.z = _[ 2 ];
		_[ 3 ] *= k; this.w = _[ 3 ];

		return this;

	}

	negate() {

		return this.multiplyScalar( - 1 );

	}

	add( vector ) {

		let _ = this.elements;
		let v = vector.elements;

		_[ 0 ] += v[ 0 ]; this.x = _[ 0 ];
		_[ 1 ] += v[ 1 ]; this.y = _[ 1 ];
		_[ 2 ] += v[ 2 ]; this.z = _[ 2 ];
		_[ 3 ] += v[ 3 ]; this.w = _[ 3 ];

		return this;

	}

	subtract( vector ) {

		let _ = this.elements;
		let v = vector.elements;

		_[ 0 ] -= v[ 0 ]; this.x = _[ 0 ];
		_[ 1 ] -= v[ 1 ]; this.y = _[ 1 ];
		_[ 2 ] -= v[ 2 ]; this.z = _[ 2 ];
		_[ 3 ] -= v[ 3 ]; this.w = _[ 3 ];

		return this;

	}

	dot( vector ) {

		let _ = this.elements;
		let v = vector.elements;

		return _[ 0 ] * v[ 0 ] + _[ 1 ] * v[ 1 ] + _[ 2 ] * v[ 2 ] + _[ 3 ] * v[ 3 ];

	}

}

export { Vector4 };
