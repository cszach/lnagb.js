document.querySelectorAll( '[onclick]' ).forEach( ( element ) => {

	element.style.cursor = 'pointer';

} );

function copyLink( id, button ) {

	let element = document.getElementById( id );
	let link = element.innerHTML.trim();
	let buttonOuterHTML = button.outerHTML;
	navigator.clipboard.writeText( link );
	button.innerHTML = "👍";
	button.style.cursor = 'none';
	setTimeout( () => {
		button.innerHTML = "📋";
		button.style.cursor = 'pointer';
	}, 600 );

}

function copySuperLink( id, download ) {

	let element = document.getElementById( id );
	let anchor = element.getElementsByTagName( 'a' )[ 0 ];
	let link = anchor.innerHTML.trim();
	navigator.clipboard.writeText( link );
	element.innerHTML = "Copied!";
	setTimeout( () => {
		element.innerHTML = ( download ) ? `<a href="${link}" download>${link}</a>`
										 : `<a href="${link}">${link}</a>`;
	}, 600 );

}

function copyCommand( id ) {

	let element = document.getElementById( id );
	let command = element.innerHTML.trim();
	navigator.clipboard.writeText( command );
	element.innerHTML = "Copied!";
	setTimeout( () => { element.innerHTML = command; }, 600 );

}
