/**
 * @author Nguyen Hoang Duong / <you_create@protonmail.com>
 */

class Vector2 {

	constructor( x, y ) {

		this.x = x;
		this.y = y;

	}

	get length() {

		return Math.sqrt( this.x * this.x + this.y * this.y );

	}

	get negative() {

		return new Vector2( - this.x, - this.y );

	}

	copy( v ) {

		this.x = v.x;
		this.y = v.y;

		return this;

	}

	clone() {

		return new this.constructor( this.x, this.y );

	}

	set( x, y ) {

		this.x = x;
		this.y = y;

	}

}

export { Vector2 };
