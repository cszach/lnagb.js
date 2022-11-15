"use strict";

/**
 * @description
 *
 * Builds the lnagb.js documentation from docstrings in its source code using
 * jsdoc-to-markdown.
 *
 * @see https://github.com/jsdoc2md/jsdoc-to-markdown
 */

const jsdoc2md = require( 'jsdoc-to-markdown' );
const fs = require( 'fs' );

let files = 'src/**/*.js';
let outputDir = 'doc';

let modules;

fs.mkdirSync( outputDir, { recursive: true } );
jsdoc2md.getTemplateData( { files, "no-cache": true } ).then( processData );

/**
 * Process and render Markdown documents.
 *
 * @param {object[]} data The JSDoc data collected from files.
 */
function processData( data ) {

	// Fetch modules

	modules = data.reduce( ( modules, identifier ) => {

		if ( identifier.kind === 'module' ) modules.push( identifier.name );
		return modules;

	}, [] );

	// Render each module's documentation

	modules.forEach( ( module ) => {

		let template = `{{#module name="${module}"}}{{>doc}}{{/module}}`;
		let options = { data, template, separators: true };

		jsdoc2md.render( options ).then( ( output ) => {

			// Post-process the output

			// Because jsdoc2md outputs to a single file, all links of symbols
			// point to sections within the same file. Even when we are trying to
			// compile the documentation into multiple files, the links'
			// behaviors still don't change. We need to prepend links that point
			// to symbols defined outside the current module with the names of
			// the symbols' respective files.
			//
			// e.g. current processing module is SystemOfLinearEquations
			// -> Prepend all links that point to the Matrix module with
			// './Matrix'

			let _modules = modules.slice();
			let processedOutput = output;

			_modules.splice( modules.indexOf( module ), 1 );
			_modules.forEach( ( _module ) => {

				let searchFor = `#module_${_module}`;
				let replaceWith = `./${_module}` + searchFor;
				let searchRegex = new RegExp( searchFor, 'g' );

				processedOutput = processedOutput.replace( searchRegex, replaceWith );

			} );

			// Write final output to file

			fs.writeFileSync( `${outputDir}/${module}.md`, processedOutput );

		} );

	} );

}
