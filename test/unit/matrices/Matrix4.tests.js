import { Matrix } from '../../../src/matrices/Matrix.js';
import { Matrix4 } from '../../../src/matrices/Matrix4.js';

describe( "Matrix4", function () {

	it( "Instancing", function () {

		let a = new Matrix4();

		assert.deepEqual( a.size, { rows: 4, columns: 4 } );
		assert.strictEqual( a.numberOfEntries, 16 );
		assert.deepEqual( a.elements, [
			0, 0, 0, 0,
			0, 0, 0, 0,
			0, 0, 0, 0,
			0, 0, 0, 0
		] );

		let b = new Matrix4( 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16 );

		assert.deepEqual( b.size, { rows: 4, columns: 4 } );
		assert.strictEqual( b.numberOfEntries, 16 );
		assert.deepEqual( b.elements, [
			1, 2, 3, 4,
			5, 6, 7, 8,
			9, 10, 11, 12,
			13, 14, 15, 16 ] );

	} );

	it( "Getters", function () {

		let a = new Matrix4( 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16 );

		assert.deepEqual( a.rows, [
			[ 1, 2, 3, 4 ],
			[ 5, 6, 7, 8 ],
			[ 9, 10, 11, 12 ],
			[ 13, 14, 15, 16 ]
		] );
		assert.deepEqual( a.columns, [
			[ 1, 5, 9, 13 ],
			[ 2, 6, 10, 14 ],
			[ 3, 7, 11, 15 ],
			[ 4, 8, 12, 16 ]
		] );
		assert.deepEqual( a.mainDiagonal, [ 1, 6, 11, 16 ] );

	} );

	it( "clone", function () {

		let a = new Matrix4( 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16 );
		let clone = a.clone();

		assert.instanceOf( clone, Matrix4 );
		assert.deepEqual( clone.size, a.size );
		assert.strictEqual( clone.numberOfEntries, a.numberOfEntries );
		assert.deepEqual( clone.elements, a.elements );

	} );

	it( "equals", function () {

		let a = new Matrix4(
			1, 2, 3, 4,
			5, 6, 7, 8, 9,
			10, 11, 12, 13,
			14, 15, 16
		);
		let b = new Matrix( 4, 4, [
			- 1, 2, 3, 4,
			5, 6, 7, 8,
			9, 10, 11, 12,
			13, 14, 15, 16 ] );
		let c = new Matrix( 1, 16, [
			1, 2, 3, 4,
			5, 6, 7, 8,
			9, 10, 11, 12,
			13, 14, 15, 16
		] );

		assert.isFalse( a.equals( b ) );
		assert.isFalse( a.equals( c ) );

		b.elements = [
			1, 2, 3, 4,
			5, 6, 7, 8,
			9, 10, 11, 12,
			13, 14, 15, 16
		];
		c.size = { rows: 4, columns: 4 };

		assert.isTrue( a.equals( b ) );
		assert.isTrue( a.equals( c ) );

	} );

	it( "entry", function () {

		let a = new Matrix4( 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16 );

		assert.strictEqual( a.entry( 1, 1 ), 1 );
		assert.strictEqual( a.entry( 1, 2 ), 2 );
		assert.strictEqual( a.entry( 1, 3 ), 3 );
		assert.strictEqual( a.entry( 1, 4 ), 4 );
		assert.strictEqual( a.entry( 2, 1 ), 5 );
		assert.strictEqual( a.entry( 2, 2 ), 6 );
		assert.strictEqual( a.entry( 2, 3 ), 7 );
		assert.strictEqual( a.entry( 2, 4 ), 8 );
		assert.strictEqual( a.entry( 3, 1 ), 9 );
		assert.strictEqual( a.entry( 3, 2 ), 10 );
		assert.strictEqual( a.entry( 3, 3 ), 11 );
		assert.strictEqual( a.entry( 3, 4 ), 12 );
		assert.strictEqual( a.entry( 4, 1 ), 13 );
		assert.strictEqual( a.entry( 4, 2 ), 14 );
		assert.strictEqual( a.entry( 4, 3 ), 15 );
		assert.strictEqual( a.entry( 4, 4 ), 16 );

	} );

	it( "row", function () {

		let a = new Matrix4( 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16 );

		assert.deepEqual( a.row( 1 ), [ 1, 2, 3, 4 ] );
		assert.deepEqual( a.row( 2 ), [ 5, 6, 7, 8 ] );
		assert.deepEqual( a.row( 3 ), [ 9, 10, 11, 12 ] );
		assert.deepEqual( a.row( 4 ), [ 13, 14, 15, 16 ] );
		assert.isUndefined( a.row( 5 ) );

	} );

	it( "column", function () {

		let a = new Matrix4( 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16 );

		assert.deepEqual( a.column( 1 ), [ 1, 5, 9, 13 ] );
		assert.deepEqual( a.column( 2 ), [ 2, 6, 10, 14 ] );
		assert.deepEqual( a.column( 3 ), [ 3, 7, 11, 15 ] );
		assert.deepEqual( a.column( 4 ), [ 4, 8, 12, 16 ] );
		assert.isUndefined( a.column( 5 ) );

	} );

	it( "leadingCoefficient", function () {

		let a = new Matrix4( 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16 );
		let b = new Matrix4( 0, 2, 0, 0, 0, 6, 0, 0, 0, 10, 0, 0, 0, 14, 0, 0 );
		let c = new Matrix4( 0, 0, 3, 0, 0, 0, 7, 0, 0, 0, 11, 0, 0, 0, 15, 0 );
		let d = new Matrix4( 0, 0, 0, 4, 0, 0, 0, 8, 0, 0, 0, 12, 0, 0, 0, 16 );
		let e = new Matrix4();

		assert.strictEqual( a.leadingCoefficient( 1 ), 1 );
		assert.strictEqual( a.leadingCoefficient( 2 ), 5 );
		assert.strictEqual( a.leadingCoefficient( 3 ), 9 );
		assert.strictEqual( a.leadingCoefficient( 4 ), 13 );
		assert.strictEqual( b.leadingCoefficient( 1 ), 2 );
		assert.strictEqual( b.leadingCoefficient( 2 ), 6 );
		assert.strictEqual( b.leadingCoefficient( 3 ), 10 );
		assert.strictEqual( b.leadingCoefficient( 4 ), 14 );
		assert.strictEqual( c.leadingCoefficient( 1 ), 3 );
		assert.strictEqual( c.leadingCoefficient( 2 ), 7 );
		assert.strictEqual( c.leadingCoefficient( 3 ), 11 );
		assert.strictEqual( c.leadingCoefficient( 4 ), 15 );
		assert.strictEqual( d.leadingCoefficient( 1 ), 4 );
		assert.strictEqual( d.leadingCoefficient( 2 ), 8 );
		assert.strictEqual( d.leadingCoefficient( 3 ), 12 );
		assert.strictEqual( d.leadingCoefficient( 4 ), 16 );
		assert.isUndefined( e.leadingCoefficient( 1 ) );
		assert.isUndefined( e.leadingCoefficient( 2 ) );
		assert.isUndefined( e.leadingCoefficient( 3 ) );
		assert.isUndefined( e.leadingCoefficient( 4 ) );
		assert.isUndefined( e.leadingCoefficient( 5 ) );

	} );

	it( "forEach", function () {

		let a = new Matrix4( 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16 );
		let entries = [], _i = [], _j = [], indices = [], matrices = [];

		a.forEach( ( entry, i, j, index, matrix ) => {

			entries.push( entry );
			_i.push( i );
			_j.push( j );
			indices.push( index );
			matrices.push( matrix );

		} );

		assert.deepEqual( entries, [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16 ] );
		assert.deepEqual( _i, [ 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4 ] );
		assert.deepEqual( _j, [ 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4 ] );
		assert.deepEqual( indices, [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 ] );
		assert.deepEqual( matrices, [ a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a ] );

	} );

	it( "forEachRow", function () {

		let a = new Matrix4( 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16 );
		let rows = [], rowNumbers = [], matrices = [];

		a.forEachRow( ( row, r, matrix ) => {

			rows.push( row );
			rowNumbers.push( r );
			matrices.push( matrix );

		} );

		assert.deepEqual( rows, [
			[ 1, 2, 3, 4 ],
			[ 5, 6, 7, 8 ],
			[ 9, 10, 11, 12 ],
			[ 13, 14, 15, 16 ]
		] );
		assert.deepEqual( rowNumbers, [ 1, 2, 3, 4 ] );
		assert.deepEqual( matrices, [ a, a, a, a ] );

	} );

	it( "forEachColumn", function () {

		let a = new Matrix4( 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16 );
		let columns = [], columnNumbers = [], matrices = [];

		a.forEachColumn( ( column, c, matrix ) => {

			columns.push( column );
			columnNumbers.push( c );
			matrices.push( matrix );

		} );

		assert.deepEqual( columns, [
			[ 1, 5, 9, 13 ],
			[ 2, 6, 10, 14 ],
			[ 3, 7, 11, 15 ],
			[ 4, 8, 12, 16 ]
		] );
		assert.deepEqual( columnNumbers, [ 1, 2, 3, 4 ] );
		assert.deepEqual( matrices, [ a, a, a, a ] );

	} );

	it( "interchargeRows", function () {

		let a = new Matrix4(
			1, 2, 3, 4,
			5, 6, 7, 8,
			9, 10, 11, 12,
			13, 14, 15, 16
		);
		let _a = a.elements;

		a.interchargeRows( 1, 2 );
		assert.deepEqual( _a, [
			5, 6, 7, 8,
			1, 2, 3, 4,
			9, 10, 11, 12,
			13, 14, 15, 16
		] );

		a.interchargeRows( 1, 3 );
		assert.deepEqual( _a, [
			9, 10, 11, 12,
			1, 2, 3, 4,
			5, 6, 7, 8,
			13, 14, 15, 16
		] );

		a.interchargeRows( 1, 4 );
		assert.deepEqual( _a, [
			13, 14, 15, 16,
			1, 2, 3, 4,
			5, 6, 7, 8,
			9, 10, 11, 12
		] );

		a.interchargeRows( 2, 3 );
		assert.deepEqual( _a, [
			13, 14, 15, 16,
			5, 6, 7, 8,
			1, 2, 3, 4,
			9, 10, 11, 12
		] );

		a.interchargeRows( 2, 4 );
		assert.deepEqual( _a, [
			13, 14, 15, 16,
			9, 10, 11, 12,
			1, 2, 3, 4,
			5, 6, 7, 8
		] );

		a.interchargeRows( 3, 4 );
		assert.deepEqual( _a, [
			13, 14, 15, 16,
			9, 10, 11, 12,
			5, 6, 7, 8,
			1, 2, 3, 4
		] );

		a.interchargeRows( 2, 1 );
		assert.deepEqual( _a, [
			9, 10, 11, 12,
			13, 14, 15, 16,
			5, 6, 7, 8,
			1, 2, 3, 4
		] );

		a.interchargeRows( 3, 1 );
		assert.deepEqual( _a, [
			5, 6, 7, 8,
			13, 14, 15, 16,
			9, 10, 11, 12,
			1, 2, 3, 4
		] );

		a.interchargeRows( 4, 1 );
		assert.deepEqual( _a, [
			1, 2, 3, 4,
			13, 14, 15, 16,
			9, 10, 11, 12,
			5, 6, 7, 8
		] );

		a.interchargeRows( 3, 2 );
		assert.deepEqual( _a, [
			1, 2, 3, 4,
			9, 10, 11, 12,
			13, 14, 15, 16,
			5, 6, 7, 8
		] );

		a.interchargeRows( 4, 2 );
		assert.deepEqual( _a, [
			1, 2, 3, 4,
			5, 6, 7, 8,
			13, 14, 15, 16,
			9, 10, 11, 12
		] );

		a.interchargeRows( 4, 3 );
		assert.deepEqual( _a, [
			1, 2, 3, 4,
			5, 6, 7, 8,
			9, 10, 11, 12,
			13, 14, 15, 16
		] );

	} );

	it( "multiplyRowByScalar", function () {

		let a = new Matrix4( 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16 );

		a.multiplyRowByScalar( 1, 1 )
		 .multiplyRowByScalar( 2, 2 )
		 .multiplyRowByScalar( 3, 3 )
		 .multiplyRowByScalar( 4, 4 )
		 .multiplyRowByScalar( 5, 5 );

		assert.deepEqual( a.elements, [
			1, 2, 3, 4,
			10, 12, 14, 16,
			27, 30, 33, 36,
			52, 56, 60, 64
		] );

	} );

	it( "addRowTimesScalarToRow", function () {

		let a = new Matrix4(
			1, 2, 3, 4,
			5, 6, 7, 8,
			9, 10, 11, 12,
			13, 14, 15, 16
		);

		a.addRowTimesScalarToRow( 1, 2 )
		 .addRowTimesScalarToRow( 2, 3, 2 )
		 .addRowTimesScalarToRow( 3, 4, 3 )
		 .addRowTimesScalarToRow( 4, 1, 4 );

		assert.deepEqual( a.elements, [
			6, 8, 10, 12,
			23, 26, 29, 32,
			48, 52, 56, 60,
			37, 46, 55, 64
		] );

	} );

	it( "transpose", function () {

		let a = new Matrix4( 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16 );

		a.transpose();

		assert.deepEqual( a.elements, [
			1, 5, 9, 13,
			2, 6, 10, 14,
			3, 7, 11, 15,
			4, 8, 12, 16
		] );

	} );

	it( "multiplyScalar", function () {

		let a = new Matrix4( 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16 );

		a.multiplyScalar( 2 );

		assert.deepEqual( a.elements, [
			2, 4, 6, 8,
			10, 12, 14, 16,
			18, 20, 22, 24,
			26, 28, 30, 32
		] );

	} );

	it( "negate", function () {

		let a = new Matrix4( 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16 );

		a.negate();

		assert.deepEqual( a.elements, [
			- 1, - 2, - 3, - 4,
			- 5, - 6, - 7, - 8,
			- 9, - 10, - 11, - 12,
			- 13, - 14, - 15, - 16
		] );

	} );

	it( "add", function () {

		let a = new Matrix4(
			2, 3, 5, 7,
			11, 13, 17, 19,
			23, 29, 31, 37,
			41, 43, 47, 53
		);
		let b = new Matrix4(
			59, 61, 67, 71,
			73, 79, 83, 89,
			97, 101, 103, 107,
			109, 113, 127, 131
		);

		a.add( b );

		assert.deepEqual( a.elements, [
			61, 64, 72, 78,
			84, 92, 100, 108,
			120, 130, 134, 144,
			150, 156, 174, 184
		] );

	} );

	it( "sub", function () {

		let a = new Matrix4(
			2, 3, 5, 7,
			11, 13, 17, 19,
			23, 29, 31, 37,
			41, 43, 47, 53
		);
		let b = new Matrix4(
			- 59, - 61, - 67, - 71,
			- 73, - 79, - 83, - 89,
			- 97, - 101, - 103, - 107,
			- 109, - 113, - 127, - 131
		);

		a.sub( b );

		assert.deepEqual( a.elements, [
			61, 64, 72, 78,
			84, 92, 100, 108,
			120, 130, 134, 144,
			150, 156, 174, 184
		] );

	} );

	it( "multiply", function () {

		let a = new Matrix4(
			2, 3, 5, 7,
			11, 13, 17, 19,
			23, 29, 31, 37,
			41, 43, 47, 53
		);
		let b = new Matrix4(
			59, 61, 67, 71,
			73, 79, 83, 89,
			97, 101, 103, 107,
			109, 113, 127, 131
		);

		a.multiply( b );

		assert.deepEqual( a.elements, [
			1585, 1655, 1787, 1861,
			5318, 5562, 5980, 6246,
			10514, 11006, 11840, 12378,
			15894, 16634, 17888, 18710
		] );
		assert.deepEqual( b.elements, [
			59, 61, 67, 71,
			73, 79, 83, 89,
			97, 101, 103, 107,
			109, 113, 127, 131
		] );

	} );

	it( "Chainability", function () {

		let a = new Matrix4(
			2, 3, 5, 7,
			11, 13, 17, 19,
			23, 29, 31, 37,
			41, 43, 47, 53
		);
		let b = new Matrix4(
			59, 61, 67, 71,
			73, 79, 83, 89,
			97, 101, 103, 107,
			109, 113, 127, 131
		);

		a
		 .interchargeRows()
		 .multiplyRowByScalar( 1, 1 )
		 .addRowTimesScalarToRow( 1, 2 )
		 .transpose()
		 .multiplyScalar( 1 )
		 .negate()
		 .add( b )
		 .sub( b )
		 .multiply( b );

		assert.instanceOf( a, Matrix4 );

	} );

} );
