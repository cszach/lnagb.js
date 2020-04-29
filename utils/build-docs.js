"use strict";

const jsdoc2md = require( 'jsdoc-to-markdown' );
const fs = require( 'fs' );

const INPUT_DIR = process.argv[ 2 ].replace( /\/*$/gi, '' ); // Where JavaScript source files are
const OUTPUT_DIR = process.argv[ 3 ].replace( /\/*$/gi, '' ); // Where to export

// +-------------------------------------------------------------------------+
// | HOW THIS SCRIPT WORKS                                                   |
// |                                                                         |
// | - It generates docs from files in INPUT_DIR and writes output to        |
// | OUTPUT_DIR.                                                             |
// | - JS files at the root of INPUT_DIR (INPUT_DIR/*.js) are ignored.       |
// | - For other JS files, each will be exported to a Markdown file with the |
// | same name, only the format differs (e.g. test.js -> test.md).           |
// | - Directory structure is kept. For example, if INPUT_DIR is 'src' and   |
// | OUTPUT_DIR is 'docs', then...                                           |
// |   + 'src/script.js' -> 'docs/script.js'                                 |
// |   + 'src/core/script.js' -> 'docs/core/script.js'                       |
// |   + 'src/algebra/trigonometry/script.js' ->                             |
// | 'docs/algebra/trigonometry/script.js'                                   |
// |   + ...and so on                                                        |
// | - jsdoc-to-markdown is used to convert JavaScript docstrings into       |
// | Markdown documents.                                                     |
// +-------------------------------------------------------------------------+

// Create output directory

fs.mkdirSync( OUTPUT_DIR, { recursive: true } );

// Process direct sub-directories of INPUT_DIR

let dirs = fs.readdirSync( INPUT_DIR, { withFileTypes: true } )
	.filter( ( dirent ) => dirent.isDirectory() )
	.map( dirent => dirent.name );

dirs.forEach( function ( dir ) {

	processDirectory( dir );

} );

/**
 * Processes files and sub-directories in a given directory.
 *
 * @param {string} directory The path of the directory (disregarding INPUT_DIR)
 */
function processDirectory( directory ) {

	// Create the directory
	fs.mkdirSync( `${OUTPUT_DIR}/${directory}`, { recursive: true } );

	// Process source files

	let sourceFiles = fs.readdirSync( `${INPUT_DIR}/${directory}`, { withFileTypes: true } )
		.filter( ( dirent ) => dirent.isFile() && dirent.name.endsWith( '.js' ) )
		.map( dirent => dirent.name );

	sourceFiles.forEach( function ( file ) {

		writeMd( file, file.replace( /\.js$/gi, ".md" ), directory );

	} );

	// Recursively process sub-directories of this directory

	let subDirs = fs.readdirSync( `${INPUT_DIR}/${directory}`, { withFileTypes: true } )
		.filter( ( dirent ) => dirent.isDirectory() )
		.map( dirent => directory + '/' + dirent.name );

	subDirs.forEach( function ( subDir ) {

		processDirectory( subDir );

	} );

}

/**
 * Writes a Markdown document from a given JavaScript source file.
 *
 * This will overwrite the Markdown file if it already exists.
 *
 * @param {string} inputFileName The input JavaScript file's name
 * @param {string} outputFileName The output Markdown file's name
 * @param {string} directory Nested sub-directories of the input file disregarding INPUT_DIR
 */
function writeMd( inputFileName, outputFileName, directory ) {

	let data = jsdoc2md.getTemplateDataSync( {
		files: `${INPUT_DIR}/${directory}/${inputFileName}`
	} );
	let output = jsdoc2md.renderSync( { data } );

	fs.writeFileSync( `${OUTPUT_DIR}/${directory}/${outputFileName}`, output );

}
