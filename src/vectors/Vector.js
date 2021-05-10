/**
 * @author Nguyen Hoang Duong / <you_create@protonmail.com>
 */

/**
 * Encodes vectors and vector operations.
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
