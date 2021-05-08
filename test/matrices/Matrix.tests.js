import { Matrix } from '../../src/matrices/Matrix.js';

describe( "Matrix", function () {

	it( "Instancing", function () {

		let a = new Matrix( 2, 3 );

		assert.deepEqual( a.size, { rows: 2, columns: 3 } );
		assert.strictEqual( a.numberOfEntries, 6 );
		assert.deepEqual( a.elements, [ 0, 0, 0, 0, 0, 0 ] );

		let b = new Matrix( 3, 2, [ 1, 2, 3, 4, 5, 6 ] );

		assert.deepEqual( b.size, { rows: 3, columns: 2 } );
		assert.strictEqual( b.numberOfEntries, 6 );
		assert.deepEqual( b.elements, [ 1, 2, 3, 4, 5, 6 ] );

	} );

	it( "Getters", function () {

		let a = new Matrix( 2, 3, [ 1, 2, 3, 4, 5, 6 ] );
		let b = new Matrix( 3, 2, [ 1, 2, 3, 4, 5, 6 ] );

		assert.deepEqual( a.rows, [[ 1, 2, 3 ], [ 4, 5, 6 ]] );
		assert.deepEqual( a.columns, [[ 1, 4 ], [ 2, 5 ], [ 3, 6 ]] );
		assert.deepEqual( a.mainDiagonal, [ 1, 5 ] );
		assert.deepEqual( b.mainDiagonal, [ 1, 4 ] );

	} );

	it( "clone", function () {

		let a = new Matrix( 2, 3, [ 1, 2, 3, 4, 5, 6 ] );
		let clone = a.clone();

		assert.instanceOf( clone, Matrix );
		assert.deepEqual( clone.size, a.size );
		assert.strictEqual( clone.numberOfEntries, a.numberOfEntries );
		assert.deepEqual( clone.elements, a.elements );

	} );

	it( "equals", function () {

		let a = new Matrix( 2, 3, [ 1, 2, 3, 4, 5, 6 ] );
		let b = new Matrix( 2, 3, [ - 1, 2, 3, 4, 5, 6 ] );

		assert.isFalse( a.equals( b ) );
		assert.isFalse( b.equals( a ) );

		b.size = { rows: 3, columns: 2 };
		b.elements = [ 1, 2, 3, 4, 5, 6 ];

		assert.isFalse( a.equals( b ) );
		assert.isFalse( b.equals( a ) );

		b.size = { rows: 2, columns: 3 };

		assert.isTrue( a.equals( b ) );
		assert.isTrue( b.equals( a ) );

	} );

	it( "entry", function () {

		let a = new Matrix( 2, 3, [ 1, 2, 3, 4, 5, 6 ] );

		assert.strictEqual( a.entry( 1, 1 ), 1 );
		assert.strictEqual( a.entry( 1, 2 ), 2 );
		assert.strictEqual( a.entry( 1, 3 ), 3 );
		assert.strictEqual( a.entry( 2, 1 ), 4 );
		assert.strictEqual( a.entry( 2, 2 ), 5 );
		assert.strictEqual( a.entry( 2, 3 ), 6 );

	} );

	it( "row", function () {

		let a = new Matrix( 2, 3, [ 1, 2, 3, 4, 5, 6 ] );

		assert.deepEqual( a.row( 1 ), [ 1, 2, 3 ] );
		assert.deepEqual( a.row( 2 ), [ 4, 5, 6 ] );

	} );

	it( "column", function () {

		let a = new Matrix( 2, 3, [ 1, 2, 3, 4, 5, 6 ] );

		assert.deepEqual( a.column( 1 ), [ 1, 4 ] );
		assert.deepEqual( a.column( 2 ), [ 2, 5 ] );
		assert.deepEqual( a.column( 3 ), [ 3, 6 ] );

	} );

	it( "leadingCoefficient", function () {

		let a = new Matrix( 2, 3, [ 1, 2, 3, 4, 5, 6 ] );
		let b = new Matrix( 2, 3, [ 0, 1, 2, 0, 0, 0 ] );

		assert.strictEqual( a.leadingCoefficient( 1 ), 1 );
		assert.strictEqual( a.leadingCoefficient( 2 ), 4 );
		assert.strictEqual( b.leadingCoefficient( 1 ), 1 );
		assert.isUndefined( b.leadingCoefficient( 2 ) );

	} );

	it( "forEach", function () {

		let a = new Matrix( 2, 3, [ 1, 2, 3, 4, 5, 6 ] );
		let entries = [], _i = [], _j = [], indices = [], matrices = [];

		a.forEach( ( entry, i, j, index, matrix ) => {

			entries.push( entry );
			_i.push( i );
			_j.push( j );
			indices.push( index );
			matrices.push( matrix );

		} );

		assert.deepEqual( entries, [ 1, 2, 3, 4, 5, 6 ] );
		assert.deepEqual( _i, [ 1, 1, 1, 2, 2, 2 ] );
		assert.deepEqual( _j, [ 1, 2, 3, 1, 2, 3 ] );
		assert.deepEqual( indices, [ 0, 1, 2, 3, 4, 5 ] );
		assert.deepEqual( matrices, [ a, a, a, a, a, a ] );

	} );

	it( "forEachRow", function () {

		let a = new Matrix( 2, 3, [ 1, 2, 3, 4, 5, 6 ] );
		let rows = [], rowNumbers = [], matrices = [];

		a.forEachRow( ( row, r, matrix ) => {

			rows.push( row );
			rowNumbers.push( r );
			matrices.push( matrix );

		} );

		assert.deepEqual( rows, [[ 1, 2, 3 ], [ 4, 5, 6 ]] );
		assert.deepEqual( rowNumbers, [ 1, 2 ] );
		assert.deepEqual( matrices, [ a, a ] );

	} );

	it( "forEachColumn", function () {

		let a = new Matrix( 2, 3, [ 1, 2, 3, 4, 5, 6 ] );
		let columns = [], columnNumbers = [], matrices = [];

		a.forEachColumn( ( column, c, matrix ) => {

			columns.push( column );
			columnNumbers.push( c );
			matrices.push( matrix );

		} );

		assert.deepEqual( columns, [[ 1, 4 ], [ 2, 5 ], [ 3, 6 ]] );
		assert.deepEqual( columnNumbers, [ 1, 2, 3 ] );
		assert.deepEqual( matrices, [ a, a, a ] );

	} );

	it( "interchargeRows", function () {

		let a = new Matrix( 2, 3, [ 1, 2, 3, 4, 5, 6 ] );
		let _a = a.elements;

		a.interchargeRows( 1, 2 );
		assert.deepEqual( _a, [ 4, 5, 6, 1, 2, 3 ] );

		a.interchargeRows( 1, 2 );
		assert.deepEqual( _a, [ 1, 2, 3, 4, 5, 6 ] );

		let b = new Matrix( 3, 2, [ 1, 2, 3, 4, 5, 6 ] );
		let _b = b.elements;

		b.interchargeRows( 1, 3 );
		assert.deepEqual( _b, [ 5, 6, 3, 4, 1, 2 ] );

		b.interchargeRows( 3, 2 );
		assert.deepEqual( _b, [ 5, 6, 1, 2, 3, 4 ] );

	} );

	it( "multiplyRowByScalar", function () {

		let a = new Matrix( 3, 2, [ 1, 2, 3, 4, 5, 6 ] );

		a.multiplyRowByScalar( 1, 3 )
		 .multiplyRowByScalar( 2, - 2.5 )
		 .multiplyRowByScalar( 3, 0 );

		assert.deepEqual( a.elements, [ 3, 6, - 7.5, - 10, 5, 6 ] );

	} );

	it( "addRowTimesScalarToRow", function () {

		let a = new Matrix( 3, 2, [ 1, 2, 3, 4, 5, 6 ] );

		a.addRowTimesScalarToRow( 1, 2 )
		 .addRowTimesScalarToRow( 3, 1, - 0.5 )
		 .addRowTimesScalarToRow( 2, 3, 0 );

	    assert.deepEqual( a.elements, [ 4, 6, 3, 4, 3, 3 ] );

	} );

	it( "transpose", function () {

		let a = new Matrix( 2, 3, [ 1, 2, 3, 4, 5, 6 ] );
		a.transpose();

		assert.deepEqual( a.size, { rows: 3, columns: 2 } );
		assert.deepEqual( a.elements, [ 1, 4, 2, 5, 3, 6 ] );

	} );

	it( "multiplyScalar", function () {

		let a = new Matrix( 2, 3, [ 1, 2, 3, 4, 5, 6 ] );

		a.multiplyScalar( 5 ).multiplyScalar( - 0.5 );
		assert.deepEqual( a.elements, [ - 2.5, - 5, - 7.5, - 10, - 12.5, - 15 ] );

	} );

	it( "negate", function () {

		let a = new Matrix( 2, 3, [ 1, - 2, 3, - 4, 5, - 6 ] );

		a.negate();
		assert.deepEqual( a.elements, [ - 1, 2, - 3, 4, - 5, 6 ] );

	} );

	it( "add", function () {

		let a = new Matrix( 2, 3, [ 1, 2, 3, 4, 5, 6 ] );
		let b = new Matrix( 2, 3, [ 6, 5, 4, 3, 2, 1 ] );
		let c = new Matrix( 3, 2, [ 1, 2, 3, 4, 5, 6 ] );

		a.add( b ).add( c );
		assert.deepEqual( a.elements, [ 7, 7, 7, 7, 7, 7 ] );

	} );

	it( "sub", function () {

		let a = new Matrix( 2, 3, [ 1, 2, 3, 4, 5, 6 ] );
		let b = new Matrix( 2, 3, [ - 6, - 5, - 4, - 3, - 2, - 1 ] );
		let c = new Matrix( 3, 2, [ 1, 2, 3, 4, 5, 6 ] );

		a.sub( b ).sub( c );
		assert.deepEqual( a.elements, [ 7, 7, 7, 7, 7, 7 ] );

	} );

	it( "multiply", function () {

		let a = new Matrix( 2, 3, [ 1, 2, 3, 4, 5, 6 ] );
		let b = new Matrix( 3, 2, [ 1, 2, 3, 4, 5, 6 ] );

		a.multiply( b );
		assert.deepEqual( a.size, { rows: 2, columns: 2 } );
		assert.strictEqual( a.numberOfEntries, 4 );
		assert.deepEqual( a.elements, [ 22, 28, 49, 64 ] );
		assert.deepEqual( b.elements, [ 1, 2, 3, 4, 5, 6 ] );

		a.multiply( b );
		assert.deepEqual( a.elements, [ 22, 28, 49, 64 ] );

	} );

} );
