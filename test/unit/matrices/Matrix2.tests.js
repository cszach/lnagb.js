import { Matrix } from '../../../src/matrices/Matrix.js';
import { Matrix2 } from '../../../src/matrices/Matrix2.js';

describe( "Matrix2", function () {

	it( "Instancing", function () {

		let a = new Matrix2();

		assert.deepEqual( a.size, { rows: 2, columns: 2 } );
		assert.strictEqual( a.numberOfEntries, 4 );
		assert.deepEqual( a.elements, [ 0, 0, 0, 0 ] );

		let b = new Matrix2( 1, 2, 3, 4 );

		assert.deepEqual( b.size, { rows: 2, columns: 2 } );
		assert.strictEqual( b.numberOfEntries, 4 );
		assert.deepEqual( b.elements, [ 1, 2, 3, 4 ] );

	} );

	it( "Getters", function () {

		let a = new Matrix2( 1, 2, 3, 4 );

		assert.deepEqual( a.rows, [[ 1, 2 ], [ 3, 4 ]] );
		assert.deepEqual( a.columns, [[ 1, 3 ], [ 2, 4 ]] );
		assert.deepEqual( a.mainDiagonal, [ 1, 4 ] );

	} );

	it( "clone", function () {

		let a = new Matrix2( 1, 2, 3, 4 );
		let clone = a.clone();

		assert.instanceOf( clone, Matrix2 );
		assert.deepEqual( clone.size, a.size );
		assert.strictEqual( clone.numberOfEntries, a.numberOfEntries );
		assert.deepEqual( clone.elements, a.elements );

	} );

	it( "equals", function () {

		let a = new Matrix2( 1, 2, 3, 4 );
		let b = new Matrix( 2, 2, [ - 1, 2, 3, 4 ] );
		let c = new Matrix( 1, 4, [ 1, 2, 3, 4 ] );

		assert.isFalse( a.equals( b ) );
		assert.isFalse( a.equals( c ) );

		b.elements = [ 1, 2, 3, 4 ];
		c.size = { rows: 2, columns: 2 };

		assert.isTrue( a.equals( b ) );
		assert.isTrue( a.equals( c ) );

	} );

	it( "entry", function () {

		let a = new Matrix2( 1, 2, 3, 4 );

		assert.strictEqual( a.entry( 1, 1 ), 1 );
		assert.strictEqual( a.entry( 1, 2 ), 2 );
		assert.strictEqual( a.entry( 2, 1 ), 3 );
		assert.strictEqual( a.entry( 2, 2 ), 4 );

	} );

	it( "row", function () {

		let a = new Matrix2( 1, 2, 3, 4 );

		assert.deepEqual( a.row( 1 ), [ 1, 2 ] );
		assert.deepEqual( a.row( 2 ), [ 3, 4 ] );
		assert.isUndefined( a.row( 3 ) );

	} );

	it( "column", function () {

		let a = new Matrix2( 1, 2, 3, 4 );

		assert.deepEqual( a.column( 1 ), [ 1, 3 ] );
		assert.deepEqual( a.column( 2 ), [ 2, 4 ] );
		assert.isUndefined( a.column( 3 ) );

	} );

	it( "leadingCoefficient", function () {

		let a = new Matrix2( 1, 2, 3, 4 );
		let b = new Matrix2( 0, 2, 0, 4 );
		let c = new Matrix2();

		assert.strictEqual( a.leadingCoefficient( 1 ), 1 );
		assert.strictEqual( a.leadingCoefficient( 2 ), 3 );
		assert.strictEqual( b.leadingCoefficient( 1 ), 2 );
		assert.strictEqual( b.leadingCoefficient( 2 ), 4 );
		assert.isUndefined( c.leadingCoefficient( 1 ) );
		assert.isUndefined( c.leadingCoefficient( 2 ) );
		assert.isUndefined( c.leadingCoefficient( 3 ) );

	} );

	it( "forEach", function () {

		let a = new Matrix2( 1, 2, 3, 4 );
		let entries = [], _i = [], _j = [], indices = [], matrices = [];

		a.forEach( ( entry, i, j, index, matrix ) => {

			entries.push( entry );
			_i.push( i );
			_j.push( j );
			indices.push( index );
			matrices.push( matrix );

		} );

		assert.deepEqual( entries, [ 1, 2, 3, 4 ] );
		assert.deepEqual( _i, [ 1, 1, 2, 2 ] );
		assert.deepEqual( _j, [ 1, 2, 1, 2 ] );
		assert.deepEqual( indices, [ 0, 1, 2, 3 ] );
		assert.deepEqual( matrices, [ a, a, a, a ] );

	} );

	it( "forEachRow", function () {

		let a = new Matrix2( 1, 2, 3, 4 );
		let rows = [], rowNumbers = [], matrices = [];

		a.forEachRow( ( row, r, matrix ) => {

			rows.push( row );
			rowNumbers.push( r );
			matrices.push( matrix );

		} );

		assert.deepEqual( rows, [[ 1, 2 ], [ 3, 4 ]] );
		assert.deepEqual( rowNumbers, [ 1, 2 ] );
		assert.deepEqual( matrices, [ a, a ] );

	} );

	it( "forEachColumn", function () {

		let a = new Matrix2( 1, 2, 3, 4 );
		let columns = [], columnNumbers = [], matrices = [];

		a.forEachColumn( ( column, c, matrix ) => {

			columns.push( column );
			columnNumbers.push( c );
			matrices.push( matrix );

		} );

		assert.deepEqual( columns, [[ 1, 3 ], [ 2, 4 ]] );
		assert.deepEqual( columnNumbers, [ 1, 2 ] );
		assert.deepEqual( matrices, [ a, a ] );

	} );

	it( "interchargeRows", function () {

		let a = new Matrix2( 1, 2, 3, 4 );
		let _a = a.elements;

		a.interchargeRows();
		assert.deepEqual( _a, [ 3, 4, 1, 2 ] );

		a.interchargeRows();
		assert.deepEqual( _a, [ 1, 2, 3, 4 ] );

	} );

	it( "multiplyRowByScalar", function () {

		let a = new Matrix2( 1, 2, 3, 4 );

		a.multiplyRowByScalar( 1, 1 )
		 .multiplyRowByScalar( 2, 2 )
		 .multiplyRowByScalar( 3, 3 );

		assert.deepEqual( a.elements, [ 1, 2, 6, 8 ] );

	} );

	it( "addRowTimesScalarToRow", function () {

		let a = new Matrix2( 1, 2, 3, 4 );

		a.addRowTimesScalarToRow( 1, 2 )
		 .addRowTimesScalarToRow( 2, 1, 2 );

		assert.deepEqual( a.elements, [ 4, 6, 11, 16 ] );

	} );

	it( "transpose", function () {

		let a = new Matrix2( 1, 2, 3, 4 );

		a.transpose();

		assert.deepEqual( a.elements, [ 1, 3, 2, 4 ] );

	} );

	it( "multiplyScalar", function () {

		let a = new Matrix2( 1, 2, 3, 4 );

		a.multiplyScalar( 2 );

		assert.deepEqual( a.elements, [ 2, 4, 6, 8 ] );

	} );

	it( "negate", function () {

		let a = new Matrix2( 1, 2, 3, 4 );

		a.negate();

		assert.deepEqual( a.elements, [ - 1, - 2, - 3, - 4 ] );

	} );

	it( "add", function () {

		let a = new Matrix2( 2, 3, 5, 7 );
		let b = new Matrix2( 11, 13, 17, 19 );

		a.add( b );

		assert.deepEqual( a.elements, [ 13, 16, 22, 26 ] );

	} );

	it( "sub", function () {

		let a = new Matrix2( 2, 3, 5, 7 );
		let b = new Matrix2( - 11, - 13, - 17, - 19 );

		a.sub( b );

		assert.deepEqual( a.elements, [ 13, 16, 22, 26 ] );

	} );

	it( "multiply", function () {

		let a = new Matrix2( 2, 3, 5, 7 );
		let b = new Matrix2( 11, 13, 17, 19 );

		a.multiply( b );

		assert.deepEqual( a.elements, [ 73, 83, 174, 198 ] );
		assert.deepEqual( b.elements, [ 11, 13, 17, 19 ] );

	} );

	it( "Chainability", function () {

		let a = new Matrix2( 2, 3, 5, 7 );
		let b = new Matrix2( 11, 13, 17, 19 );

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

		assert.instanceOf( a, Matrix2 );

	} );

} );
