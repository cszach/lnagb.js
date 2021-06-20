/**
 * @module Vector3
 * @author Nguyen Hoang Duong / <novakcgx@protonmail.com>
 * @description
 *
 * Contains the {@link module:Vector3~Vector3} class, which encodes 3-vectors.
 */

/**
 * Encodes 3-vectors, which are vectors that have 3 entries. Has all the class
 * methods of {@link module:Vector~Vector} plus a method for computing cross
 * products. See also {@link module:Vector2~Vector2} &
 * {@link module:Vector4~Vector4}.
 *
 * @see {@link module:Vector~Vector} for common properties
 */
class Vector3 {

	constructor( x = 0, y = 0, z = 0 ) {

		this.x = x;
		this.y = y;
		this.z = z;
		this.elements = [ x, y, z ];
		this.size = { rows: 3, columns: 1 };
		this.numberOfEntries = 3;

	}

	clone() {

		return new this.constructor( this.x, this.y, this.z );

	}

	equals( vector ) {

		let _ = this.elements;
		let v = vector.elements;

		return this.numberOfEntries === vector.numberOfEntries
			&& _[ 0 ] === v[ 0 ] && _[ 1 ] === v[ 1 ] && _[ 2 ] === v[ 2 ];

	}

	multiplyScalar( k ) {

		let _ = this.elements;

		_[ 0 ] *= k; this.x = _[ 0 ];
		_[ 1 ] *= k; this.y = _[ 1 ];
		_[ 2 ] *= k; this.z = _[ 2 ];

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

		return this;

	}

	subtract( vector ) {

		let _ = this.elements;
		let v = vector.elements;

		_[ 0 ] -= v[ 0 ]; this.x = _[ 0 ];
		_[ 1 ] -= v[ 1 ]; this.y = _[ 1 ];
		_[ 2 ] -= v[ 2 ]; this.z = _[ 2 ];

		return this;

	}

	dot( vector ) {

		let _ = this.elements;
		let v = vector.elements;

		return _[ 0 ] * v[ 0 ] + _[ 1 ] * v[ 1 ] + _[ 2 ] * v[ 2 ];

	}

	/**
	 * Returns the cross product of this 3-vector and another 3-vector. This
	 * vector remains intact.
	 *
	 * @param {Vector3} vector The vector to perform a cross product with.
	 * @returns {Vector3} The cross product of the 2 vectors
	 */
	cross( vector ) {

		let _ = this.elements;
		let v = vector.elements;

		return new this.constructor(
			_[ 1 ] * v[ 2 ] - _[ 2 ] * v[ 1 ],
			_[ 2 ] * v[ 0 ] - _[ 0 ] * v[ 2 ],
			_[ 0 ] * v[ 1 ] - _[ 1 ] * v[ 0 ]
		);

	}

}

export { Vector3 };
