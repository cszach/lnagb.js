import { MathUtils } from '../algebra/MathUtils.js';

/**
 * @author Nguyen Hoang Duong / <you_create@protonmail.com>
 */

/**
 * Encodes vectors and vector operations.
 */
class Vector {

	constructor( entries ) {

		this.elements = entries

	}

	get numberOfEntries() {

		return this.elements.length;

	}

	get length() {

		return Math.sqrt( this.elements.reduce(
			( total, e ) => total + e * e ), 0
		);

	}

	get negative() {

		return this.clone().map( ( e ) => - e );

	}

	copy( v, copyName = false ) {

		this.elements = v.elements.slice();
		if ( copyName && v.name ) this.name = v.name;

		return this;

	}

	clone() {

		return new this.constructor().copy( this );

	}

	set() {

		this.elements = Array.from( arguments );
		return this;

	}

	map( callback ) {

		this.elements = this.elements.map( callback );
		return this;

	}

	add( v ) {

		if ( this.elements.length !== v.elements.length ) {

			console.error( "Vectors are incompatible for addition" );

		} else {

			let vE = v.elements;
			this.map( ( e, i ) => e + vE[ i ] );

		}

		return this;

	}

	addScalar( k ) {

		return this.map( ( e ) => e + k );

	}

	subtract( v ) {

		return this.add( v.negative() );

	}

	subtractScalar( k ) {

		return this.addScalar( - k );

	}

	dot( v ) {

		if ( this.numberOfEntries !== v.numberOfEntries ) {

			console.error( "Incompatible vectors for dot product" );
			return null;

		} else {

			return MathUtils.linearCombination( this.elements, v.elements );

		}

	}

}

export { Vector };
