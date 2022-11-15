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

export { Vector };
