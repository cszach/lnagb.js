import { IdentityMatrix } from '../../src/matrices/IdentityMatrix.js';

describe( "IdentityMatrix", function () {

	it( "Instancing", function () {

		let a = new IdentityMatrix( 3 );

		assert.deepEqual( a.size, { rows: 3, columns: 3 } );
		assert.strictEqual( a.numberOfEntries, 9 );
		assert.deepEqual( a.elements, [ 1, 0, 0, 0, 1, 0, 0, 0, 1 ] );
		assert.strictEqual( a.rank, 3 );
		assert.deepEqual( a.rows, [[ 1, 0, 0 ], [ 0, 1, 0 ], [ 0, 0, 1 ]] );
		assert.deepEqual( a.columns, [[ 1, 0, 0 ], [ 0, 1, 0 ], [ 0, 0, 1 ]] );
		assert.deepEqual( a.mainDiagonal, [ 1, 1, 1 ] );

	} );

	it( "clone", function () {

		let a = new IdentityMatrix( 3 );
		let clone = a.clone();

		assert.instanceOf( clone, IdentityMatrix );
		assert.deepEqual( clone.size, a.size );
		assert.strictEqual( clone.numberOfEntries, a.numberOfEntries );
		assert.deepEqual( clone.elements, a.elements );
		assert.strictEqual( clone.rank, a.rank );
		assert.deepEqual( clone.rows, a.rows );
		assert.deepEqual( clone.columns, a.columns );

	} );

	it( "equals", function () {

		let a = new IdentityMatrix( 3 );
		let b = new IdentityMatrix( 3 );
		let c = new IdentityMatrix( 2 );
		let d = {
			size: { rows: 3, columns: 3 },
			elements: [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
		};

		assert.isTrue( a.equals( b ) );
		assert.isFalse( a.equals( c ) );
		assert.isFalse( c.equals( a ) );
		assert.isFalse( a.equals( d ) );

	} );

	it( "entry", function () {

		let a = new IdentityMatrix( 3 );

		assert.strictEqual( a.entry( 1, 1 ), 1 );
		assert.strictEqual( a.entry( 1, 2 ), 0 );
		assert.strictEqual( a.entry( 1, 3 ), 0 );
		assert.strictEqual( a.entry( 2, 1 ), 0 );
		assert.strictEqual( a.entry( 2, 2 ), 1 );
		assert.strictEqual( a.entry( 2, 3 ), 0 );
		assert.strictEqual( a.entry( 3, 1 ), 0 );
		assert.strictEqual( a.entry( 3, 2 ), 0 );
		assert.strictEqual( a.entry( 3, 3 ), 1 );

	} );

	it( "row", function () {

		let a = new IdentityMatrix( 3 );

		assert.deepEqual( a.row( 1 ), [ 1, 0, 0 ] );
		assert.deepEqual( a.row( 2 ), [ 0, 1, 0 ] );
		assert.deepEqual( a.row( 3 ), [ 0, 0, 1 ] );

	} );

	it( "column", function () {

		let a = new IdentityMatrix( 3 );

		assert.deepEqual( a.column( 1 ), [ 1, 0, 0 ] );
		assert.deepEqual( a.column( 2 ), [ 0, 1, 0 ] );
		assert.deepEqual( a.column( 3 ), [ 0, 0, 1 ] );

	} );

	it( "leadingCoefficient", function () {

		let a = new IdentityMatrix( 3 );

		assert.strictEqual( a.leadingCoefficient( 1 ), 1 );
		assert.strictEqual( a.leadingCoefficient( 2 ), 1 );
		assert.strictEqual( a.leadingCoefficient( 3 ), 1 );

	} );

	it( "forEach", function () {

		let a = new IdentityMatrix( 3 );
		let entries = [], _i = [], _j = [], indices = [], matrices = [];

		a.forEach( ( entry, i, j, index, matrix ) => {

			entries.push( entry );
			_i.push( i );
			_j.push( j );
			indices.push( index );
			matrices.push( matrix );

		} );

		assert.deepEqual( entries, [ 1, 0, 0, 0, 1, 0, 0, 0, 1 ] );
		assert.deepEqual( _i, [ 1, 1, 1, 2, 2, 2, 3, 3, 3 ] );
		assert.deepEqual( _j, [ 1, 2, 3, 1, 2, 3, 1, 2, 3 ] );
		assert.deepEqual( indices, [ 0, 1, 2, 3, 4, 5, 6, 7, 8 ] );
		assert.deepEqual( matrices, [ a, a, a, a, a, a, a, a, a ] );

	} );

	it( "forEachRow", function () {

		let a = new IdentityMatrix( 3 );
		let rows = [], rowNumbers = [], matrices = [];

		a.forEachRow( ( row, r, matrix ) => {

			rows.push( row );
			rowNumbers.push( r );
			matrices.push( matrix );

		} );

		assert.deepEqual( rows, [[ 1, 0, 0 ], [ 0, 1, 0 ], [ 0, 0, 1 ]] );
		assert.deepEqual( rowNumbers, [ 1, 2, 3 ] );
		assert.deepEqual( matrices, [ a, a, a ] );

	} );

	it( "forEachColumn", function () {

		let a = new IdentityMatrix( 3 );
		let columns = [], columnNumbers = [], matrices = [];

		a.forEachColumn( ( column, c, matrix ) => {

			columns.push( column );
			columnNumbers.push( c );
			matrices.push( matrix );

		} );

		assert.deepEqual( columns, [[ 1, 0, 0 ], [ 0, 1, 0 ], [ 0, 0, 1 ]] );
		assert.deepEqual( columnNumbers, [ 1, 2, 3 ] );
		assert.deepEqual( matrices, [ a, a, a ] );

	} );

} );
