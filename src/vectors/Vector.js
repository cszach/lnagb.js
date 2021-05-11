/**
 * @module Vector
 * @author Nguyen Hoang Duong / <you_create@protonmail.com>
 * @description
 *
 * Contains the {@link module:Vector~Vector} class, which encodes vector
 * quantities in linear algebra.
 */

/**
 * Encodes vectors and vector operations. Compatible for use with matrices (e.g.
 * for matrix-vector multiplications).
 *
 * For optimal performance, use {@link module:Vector2~Vector2},
 * {@link module:Vector3~Vector3}, {@link module:Vector4~Vector4} if possible.
 */
class Vector {

	constructor( entries ) {

		this.elements = entries;
		this.size = { rows: entries.length, columns: 1 }; // For compatibility with matrices
		this.numberOfEntries = entries.length;

	}

	clone() {

		return new this.constructor( this.elements.slice() );

	}

	multiplyScalar( k ) {

		let _ = this.elements;

		for ( let i = 0, _n = this.numberOfEntries; i < _n; i ++ ) _[ i ] *= k;

		return this;

	}

	negate() {

		return this.multiplyScalar( - 1 );

	}

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
