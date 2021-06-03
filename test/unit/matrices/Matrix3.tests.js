import { Matrix } from '../../../src/matrices/Matrix.js';
import { Matrix3 } from '../../../src/matrices/Matrix3.js';

describe( "Matrix3", function () {

	it( "Instancing", function () {

		let a = new Matrix3();

		assert.deepEqual( a.size, { rows: 3, columns: 3 } );
		assert.strictEqual( a.numberOfEntries, 9 );
		assert.deepEqual( a.elements, [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ] );

		let b = new Matrix3( 1, 2, 3, 4, 5, 6, 7, 8, 9 );

		assert.deepEqual( b.size, { rows: 3, columns: 3 } );
		assert.strictEqual( b.numberOfEntries, 9 );
		assert.deepEqual( b.elements, [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ] );

	} );

	it( "Getters", function () {

		let a = new Matrix3( 1, 2, 3, 4, 5, 6, 7, 8, 9 );

		assert.deepEqual( a.rows, [[ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ]] );
		assert.deepEqual( a.columns, [[ 1, 4, 7 ], [ 2, 5, 8 ], [ 3, 6, 9 ]] );
		assert.deepEqual( a.mainDiagonal, [ 1, 5, 9 ] );

	} );

	it( "clone", function () {

		let a = new Matrix3( 1, 2, 3, 4, 5, 6, 7, 8, 9 );
		let clone = a.clone();

		assert.instanceOf( clone, Matrix3 );
		assert.deepEqual( clone.size, a.size );
		assert.strictEqual( clone.numberOfEntries, a.numberOfEntries );
		assert.deepEqual( clone.elements, a.elements );

	} );

	it( "equals", function () {

		let a = new Matrix3( 1, 2, 3, 4, 5, 6, 7, 8, 9 );
		let b = new Matrix( 3, 3, [ - 1, 2, 3, 4, 5, 6, 7, 8, 9 ] );
		let c = new Matrix( 1, 9, [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ] );

		assert.isFalse( a.equals( b ) );
		assert.isFalse( a.equals( c ) );

		b.elements = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
		c.size = { rows: 3, columns: 3 };

		assert.isTrue( a.equals( b ) );
		assert.isTrue( a.equals( c ) );

	} );

	it( "entry", function () {

		let a = new Matrix3( 1, 2, 3, 4, 5, 6, 7, 8, 9 );

		assert.strictEqual( a.entry( 1, 1 ), 1 );
		assert.strictEqual( a.entry( 1, 2 ), 2 );
		assert.strictEqual( a.entry( 1, 3 ), 3 );
		assert.strictEqual( a.entry( 2, 1 ), 4 );
		assert.strictEqual( a.entry( 2, 2 ), 5 );
		assert.strictEqual( a.entry( 2, 3 ), 6 );
		assert.strictEqual( a.entry( 3, 1 ), 7 );
		assert.strictEqual( a.entry( 3, 2 ), 8 );
		assert.strictEqual( a.entry( 3, 3 ), 9 );

	} );

	it( "row", function () {

		let a = new Matrix3( 1, 2, 3, 4, 5, 6, 7, 8, 9 );

		assert.deepEqual( a.row( 1 ), [ 1, 2, 3 ] );
		assert.deepEqual( a.row( 2 ), [ 4, 5, 6 ] );
		assert.deepEqual( a.row( 3 ), [ 7, 8, 9 ] );
		assert.isUndefined( a.row( 4 ) );

	} );

	it( "column", function () {

		let a = new Matrix3( 1, 2, 3, 4, 5, 6, 7, 8, 9 );

		assert.deepEqual( a.column( 1 ), [ 1, 4, 7 ] );
		assert.deepEqual( a.column( 2 ), [ 2, 5, 8 ] );
		assert.deepEqual( a.column( 3 ), [ 3, 6, 9 ] );
		assert.isUndefined( a.column( 4 ) );

	} );

	it( "leadingCoefficient", function () {

		let a = new Matrix3( 1, 2, 3, 4, 5, 6, 7, 8, 9 );
		let b = new Matrix3( 0, 2, 0, 0, 5, 0, 0, 8, 0 );
		let c = new Matrix3( 0, 0, 3, 0, 0, 6, 0, 0, 9 );
		let d = new Matrix3();

		assert.strictEqual( a.leadingCoefficient( 1 ), 1 );
		assert.strictEqual( a.leadingCoefficient( 2 ), 4 );
		assert.strictEqual( a.leadingCoefficient( 3 ), 7 );
		assert.strictEqual( b.leadingCoefficient( 1 ), 2 );
		assert.strictEqual( b.leadingCoefficient( 2 ), 5 );
		assert.strictEqual( b.leadingCoefficient( 3 ), 8 );
		assert.strictEqual( c.leadingCoefficient( 1 ), 3 );
		assert.strictEqual( c.leadingCoefficient( 2 ), 6 );
		assert.strictEqual( c.leadingCoefficient( 3 ), 9 );
		assert.isUndefined( d.leadingCoefficient( 1 ) );
		assert.isUndefined( d.leadingCoefficient( 2 ) );
		assert.isUndefined( d.leadingCoefficient( 3 ) );
		assert.isUndefined( d.leadingCoefficient( 4 ) );

	} );

	it( "forEach", function () {

		let a = new Matrix3( 1, 2, 3, 4, 5, 6, 7, 8, 9 );
		let entries = [], _i = [], _j = [], indices = [], matrices = [];

		a.forEach( ( entry, i, j, index, matrix ) => {

			entries.push( entry );
			_i.push( i );
			_j.push( j );
			indices.push( index );
			matrices.push( matrix );

		} );

		assert.deepEqual( entries, [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ] );
		assert.deepEqual( _i, [ 1, 1, 1, 2, 2, 2, 3, 3, 3 ] );
		assert.deepEqual( _j, [ 1, 2, 3, 1, 2, 3, 1, 2, 3 ] );
		assert.deepEqual( indices, [ 0, 1, 2, 3, 4, 5, 6, 7, 8 ] );
		assert.deepEqual( matrices, [ a, a, a, a, a, a, a, a, a ] );

	} );

	it( "forEachRow", function () {

		let a = new Matrix3( 1, 2, 3, 4, 5, 6, 7, 8, 9 );
		let rows = [], rowNumbers = [], matrices = [];

		a.forEachRow( ( row, r, matrix ) => {

			rows.push( row );
			rowNumbers.push( r );
			matrices.push( matrix );

		} );

		assert.deepEqual( rows, [[ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ]] );
		assert.deepEqual( rowNumbers, [ 1, 2, 3 ] );
		assert.deepEqual( matrices, [ a, a, a ] );

	} );

	it( "forEachColumn", function () {

		let a = new Matrix3( 1, 2, 3, 4, 5, 6, 7, 8, 9 );
		let columns = [], columnNumbers = [], matrices = [];

		a.forEachColumn( ( column, c, matrix ) => {

			columns.push( column );
			columnNumbers.push( c );
			matrices.push( matrix );

		} );

		assert.deepEqual( columns, [[ 1, 4, 7 ], [ 2, 5, 8 ], [ 3, 6, 9 ]] );
		assert.deepEqual( columnNumbers, [ 1, 2, 3 ] );
		assert.deepEqual( matrices, [ a, a, a ] );

	} );

	it( "interchargeRows", function () {

		let a = new Matrix3( 1, 2, 3, 4, 5, 6, 7, 8, 9 );
		let _a = a.elements;

		a.interchargeRows( 1, 2 );
		assert.deepEqual( _a, [ 4, 5, 6, 1, 2, 3, 7, 8, 9 ] );

		a.interchargeRows( 1, 3 );
		assert.deepEqual( _a, [ 7, 8, 9, 1, 2, 3, 4, 5, 6 ] );

		a.interchargeRows( 2, 3 );
		assert.deepEqual( _a, [ 7, 8, 9, 4, 5, 6, 1, 2, 3 ] );

		a.interchargeRows( 2, 1 );
		assert.deepEqual( _a, [ 4, 5, 6, 7, 8, 9, 1, 2, 3 ] );

		a.interchargeRows( 3, 1 );
		assert.deepEqual( _a, [ 1, 2, 3, 7, 8, 9, 4, 5, 6 ] );

		a.interchargeRows( 3, 2 );
		assert.deepEqual( _a, [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ] );

	} );

	it( "multiplyRowByScalar", function () {

		let a = new Matrix3( 1, 2, 3, 4, 5, 6, 7, 8, 9 );

		a.multiplyRowByScalar( 1, 1 )
		 .multiplyRowByScalar( 2, 2 )
		 .multiplyRowByScalar( 3, 3 )
		 .multiplyRowByScalar( 4, 4 );

		assert.deepEqual( a.elements, [ 1, 2, 3, 8, 10, 12, 21, 24, 27 ] );

	} );

	it( "addRowTimesScalarToRow", function () {

		let a = new Matrix3( 1, 2, 3, 4, 5, 6, 7, 8, 9 );

		a.addRowTimesScalarToRow( 1, 2 )
		 .addRowTimesScalarToRow( 2, 3, 2 )
		 .addRowTimesScalarToRow( 3, 1, 3 );

		assert.deepEqual( a.elements, [ 5, 7, 9, 18, 21, 24, 22, 29, 36 ] );

	} );

	it( "transpose", function () {

		let a = new Matrix3( 1, 2, 3, 4, 5, 6, 7, 8, 9 );

		a.transpose();

		assert.deepEqual( a.elements, [ 1, 4, 7, 2, 5, 8, 3, 6, 9 ] );

	} );

	it( "multiplyScalar", function () {

		let a = new Matrix3( 1, 2, 3, 4, 5, 6, 7, 8, 9 );

		a.multiplyScalar( 2 );

		assert.deepEqual( a.elements, [ 2, 4, 6, 8, 10, 12, 14, 16, 18 ] );

	} );

	it( "negate", function () {

		let a = new Matrix3( 1, 2, 3, 4, 5, 6, 7, 8, 9 );

		a.negate();

		assert.deepEqual( a.elements, [
			- 1, - 2, - 3,
			- 4, - 5, - 6,
			- 7, - 8, - 9
		] );

	} );

	it( "add", function () {

		let a = new Matrix3( 2, 3, 5, 7, 11, 13, 17, 19, 23 );
		let b = new Matrix3( 29, 31, 37, 41, 43, 47, 53, 59, 61 );

		a.add( b );

		assert.deepEqual( a.elements, [ 31, 34, 42, 48, 54, 60, 70, 78, 84 ] );

	} );

	it( "sub", function () {

		let a = new Matrix3( 2, 3, 5, 7, 11, 13, 17, 19, 23 );
		let b = new Matrix3(
			- 29, - 31, - 37,
			- 41, - 43, - 47,
			- 53, - 59, - 61
		);

		a.sub( b );

		assert.deepEqual( a.elements, [ 31, 34, 42, 48, 54, 60, 70, 78, 84 ] );

	} );

	it( "multiply", function () {

		let a = new Matrix3( 2, 3, 5, 7, 11, 13, 17, 19, 23 );
		let b = new Matrix3( 29, 31, 37, 41, 43, 47, 53, 59, 61 );

		a.multiply( b );

		assert.deepEqual( a.elements, [
			446, 486, 520,
			1343, 1457, 1569,
			2491, 2701, 2925
		] );
		assert.deepEqual( b.elements, [ 29, 31, 37, 41, 43, 47, 53, 59, 61 ] );

	} );

	it( "Chainability", function () {

		let a = new Matrix3( 2, 3, 5, 7, 11, 13, 17, 19, 23 );
		let b = new Matrix3( 29, 31, 37, 41, 43, 47, 53, 59, 61 );

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

		assert.instanceOf( a, Matrix3 );

	} );

} );
