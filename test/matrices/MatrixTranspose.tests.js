import { Matrix } from '../../src/matrices/Matrix.js';
import { MatrixTranspose } from '../../src/matrices/MatrixTranspose.js';

describe( "MatrixTranspose", function () {

	let a = new Matrix( 2, 3, [ 1, 2, 3, 4, 5, 6 ] );
	let aT = new MatrixTranspose( a );

	it( "Instancing", function () {

		assert.deepEqual( aT._, a );

	} );

	it( "Getters", function () {

		assert.deepEqual( aT.size, { rows: 3, columns: 2 } );
		assert.deepEqual( aT.rows, [[ 1, 4 ], [ 2, 5 ], [ 3, 6 ]] );
		assert.deepEqual( aT.columns, [[ 1, 2, 3 ], [ 4, 5, 6 ]] );
		assert.deepEqual( aT.mainDiagonal, [ 1, 5 ] );

	} );

	it( "computeElements", function () {

		aT.computeElements();
		assert.deepEqual( aT.elements, [ 1, 4, 2, 5, 3, 6 ] );

	} );

	it( "entry", function () {

		assert.strictEqual( aT.entry( 1, 1 ), 1 );
		assert.strictEqual( aT.entry( 1, 2 ), 4 );
		assert.strictEqual( aT.entry( 2, 1 ), 2 );
		assert.strictEqual( aT.entry( 2, 2 ), 5 );
		assert.strictEqual( aT.entry( 3, 1 ), 3 );
		assert.strictEqual( aT.entry( 3, 2 ), 6 );

	} );

	it( "row", function () {

		assert.deepEqual( aT.row( 1 ), [ 1, 4 ] );
		assert.deepEqual( aT.row( 2 ), [ 2, 5 ] );
		assert.deepEqual( aT.row( 3 ), [ 3, 6 ] );

	} );

	it( "column", function () {

		assert.deepEqual( aT.column( 1 ), [ 1, 2, 3 ] );
		assert.deepEqual( aT.column( 2 ), [ 4, 5, 6 ] );

	} );

	it( "forEach", function () {

		let entries = [], _i = [], _j = [], indices = [],
		    transposes = [], matrices = [];

		aT.forEach( ( entry, i, j, index, transpose, matrix ) => {

			entries.push( entry );
			_i.push( i );
			_j.push( j );
			indices.push( index );
			transposes.push( transpose );
			matrices.push( matrix );

		} );

		assert.deepEqual( entries, [ 1, 4, 2, 5, 3, 6 ] );
		assert.deepEqual( _i, [ 1, 1, 2, 2, 3, 3 ] );
		assert.deepEqual( _j, [ 1, 2, 1, 2, 1, 2 ] );
		assert.deepEqual( indices, [ 0, 1, 2, 3, 4, 5 ] );
		assert.deepEqual( transposes, [ aT, aT, aT, aT, aT, aT ] );
		assert.deepEqual( matrices, [ a, a, a, a, a, a ] );

	} );

	it( "forEachComputed", function () {

		let entries = [], _i = [], _j = [], indices = [],
		    transposes = [], matrices = [];

		aT.forEachComputed( ( entry, i, j, index, transpose, matrix ) => {

			entries.push( entry );
			_i.push( i );
			_j.push( j );
			indices.push( index );
			transposes.push( transpose );
			matrices.push( matrix );

		} );

		assert.deepEqual( entries, [ 1, 4, 2, 5, 3, 6 ] );
		assert.deepEqual( _i, [ 1, 1, 2, 2, 3, 3 ] );
		assert.deepEqual( _j, [ 1, 2, 1, 2, 1, 2 ] );
		assert.deepEqual( indices, [ 0, 1, 2, 3, 4, 5 ] );
		assert.deepEqual( transposes, [ aT, aT, aT, aT, aT, aT ] );
		assert.deepEqual( matrices, [ a, a, a, a, a, a ] );

	} );

	it( "forEachRow", function () {

		let rows = [], rowNumbers = [], matrices = [];

		aT.forEachRow( ( row, r, matrix ) => {

			rows.push( row );
			rowNumbers.push( r );
			matrices.push( matrix );

		} );

		assert.deepEqual( rows, [[ 1, 4 ], [ 2, 5 ], [ 3, 6 ]] );
		assert.deepEqual( rowNumbers, [ 1, 2, 3 ] );
		assert.deepEqual( matrices, [ a, a, a ] );

	} );

	it( "forEachColumn", function () {

		let columns = [], columnNumbers = [], matrices = [];

		aT.forEachColumn( ( column, c, matrix ) => {

			columns.push( column );
			columnNumbers.push( c );
			matrices.push( matrix );

		} );

		assert.deepEqual( columns, [[ 1, 2, 3 ], [ 4, 5, 6 ]] );
		assert.deepEqual( columnNumbers, [ 1, 2 ] );
		assert.deepEqual( matrices, [ a, a ] );

	} );

} );
