/**
 * @module Vector2
 * @author Nguyen Hoang Duong / <you_create@protonmail.com>
 * @description
 *
 * Contains the {@link module:Vector2~Vector2} class, which encodes 2-vectors.
 */

/**
 * Encodes 2-vectors, which are vectors that have 2 entries.
 *
 * @see {@link module:Vector3~Vector3}, {@link module:Vector4~Vector4}
 */
class Vector2 {

	constructor( x = 0, y = 0 ) {

		this.x = x;
		this.y = y;
		this.elements = [ x, y ];
		this.size = { rows: 2, columns: 1 };
		this.numberOfEntries = 2;

	}

	clone() {

		return new this.constructor( this.x, this.y );

	}

	equals( vector ) {

		let _ = this.elements;
		let v = vector.elements;

		return this.numberOfEntries === vector.numberOfEntries
			&& _[ 0 ] === v[ 0 ] && _[ 1 ] === v[ 1 ];

	}

	multiplyScalar( k ) {

		let _ = this.elements;

		_[ 0 ] *= k; this.x = _[ 0 ];
		_[ 1 ] *= k; this.y = _[ 1 ];

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

		return this;

	}

	subtract( vector ) {

		let _ = this.elements;
		let v = vector.elements;

		_[ 0 ] -= v[ 0 ]; this.x = _[ 0 ];
		_[ 1 ] -= v[ 1 ]; this.y = _[ 1 ];

		return this;

	}

	dot( vector ) {

		let _ = this.elements;
		let v = vector.elements;

		return _[ 0 ] * v[ 0 ] + _[ 1 ] * v[ 1 ];

	}

}

export { Vector2 };
