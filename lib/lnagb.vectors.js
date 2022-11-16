/**
 * @module Vector
 * @author Zach / <cszach@proton.me>
 * @description
 *
 * Contains the {@link module:Vector~Vector} class, which encodes vector
 * quantities of any number of entries in linear algebra.
 */

/**
 * Encodes vectors and vector operations. Compatible for use with matrices (e.g.
 * for matrix-vector multiplications).
 *
 * For optimal performance, use {@link module:Vector2~Vector2},
 * {@link module:Vector3~Vector3}, {@link module:Vector4~Vector4} if possible.
 */
class Vector {

	/**
	 * Constructs a new `Vector` instance, which encodes a vector and its
	 * operations.
	 *
	 * @param {number[]} entries Entries of the new vector.
	 */
	constructor( entries ) {

		/**
		 * @member {number[]}
		 * @description Stores the entries of this vector in order.
		 */
		this.elements = entries;

		/**
		 * @member {object}
		 * @description Contains the dimensions of this vector as an object in the
		 * form `{ rows, columns }`. Serve for compatibility with matrix classes.
		 */
		this.size = { rows: entries.length, columns: 1 };

		/**
		 * @member {number}
		 * @description The number of entries in this vector.
		 */
		this.numberOfEntries = entries.length;

	}

	/**
	 * Creates and returns a clone of this vector instance.
	 *
	 * @returns {Vector} A clone of this vector
	 */
	clone() {

		return new this.constructor( this.elements.slice() );

	}

	/**
	 * Checks if this vector and another vector are equal.
	 *
	 * @param {Vector} vector The vector to compare this vector to.
	 * @returns {boolean} `true` if the two vectors are equal, `false` otherwise
	 */
	equals( vector ) {

		let _n = this.numberOfEntries;

		if ( _n !== vector.numberOfEntries ) return false;

		let _ = this.elements;
		let v = vector.elements;

		for ( let i = 0; i < _n; i ++ ) if ( _[ i ] !== v[ i ] ) return false;

		return true;

	}

	/**
	 * Multiplies this vector by a scalar.
	 *
	 * @param {number} k The scalar to multiply this vector by.
	 * @returns {Vector} This vector
	 */
	multiplyScalar( k ) {

		let _ = this.elements;

		for ( let i = 0, _n = this.numberOfEntries; i < _n; i ++ ) _[ i ] *= k;

		return this;

	}

	/**
	 * Multiplies this vector by -1.
	 *
	 * @returns {Vector} This vector
	 */
	negate() {

		return this.multiplyScalar( - 1 );

	}

	/**
	 * Adds a vector to this vector.
	 *
	 * @param {Vector} vector The vector to add to this vector.
	 * @returns {Vector} This vector
	 */
	add( vector ) {

		let _n = this.numberOfEntries;

		if ( _n !== vector.numberOfEntries ) {

			console.error( "Incompatible vectors for addition" );
			return this;

		}

		let _ = this.elements;
		let v = vector.elements;

		for ( let i = 0; i < _n; i ++ ) _[ i ] += v[ i ];

		return this;

	}

	/**
	 * Subtracts a vector from this vector.
	 *
	 * @param {Vector} vector The vector to subtract this vector to.
	 * @returns {Vector} This vector
	 */
	subtract( vector ) {

		let _n = this.numberOfEntries;

		if ( _n !== vector.numberOfEntries ) {

			console.error( "Incompatible vectors for substraction" );
			return this;

		}

		let _ = this.elements;
		let v = vector.elements;

		for ( let i = 0; i < _n; i ++ ) _[ i ] -= v[ i ];

		return this;

	}

	/**
	 * Returns the dot product of this vector and another vector.
	 *
	 * @param {Vector} vector The vector to perform a dot product with this vector.
	 * @returns {Vector} The dot product of this vector and the given vector
	 */
	dot( vector ) {

		if ( this.numberOfEntries !== vector.numberOfEntries ) {

			console.error( "Incompatible vectors for dot product" );
			return undefined;

		}

		let _ = this.elements;
		let v = vector.elements;

		return _.reduce( ( result, value, i ) => result + value * v[ i ], 0 );

	}

}

/**
 * @module Vector2
 * @author Zach / <cszach@proton.me>
 * @description
 *
 * Contains the {@link module:Vector2~Vector2} class, which encodes 2-vectors.
 */

/**
 * Encodes 2-vectors, which are vectors that have 2 entries. See also
 * {@link module:Vector3~Vector3} & {@link module:Vector4~Vector4}.
 *
 * @see {@link module:Vector~Vector} for common properties
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

/**
 * @module Vector3
 * @author Zach / <cszach@proton.me>
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

/**
 * @module Vector4
 * @author Zach / <cszach@proton.me>
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

export { Vector, Vector2, Vector3, Vector4 };
