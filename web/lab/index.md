**Welcome to the lnagb.js Lab!**

<p>
	This is where you can try lnagb.js directly in your browser console.
	<noscript>
		However, it seems that JavaScript has been disabled in your browser,
		which makes it impossible to load a JavaScript-based library like
		lnagb.js. Please enable JavaScript and then try again.
	</noscript>
	<span id="load-failed" hidden>
		However, it seems that lnagb.js could not be loaded. Please follow the
		troubleshooting steps below to resolve this problem.
	</span>
</p>

<p id="success" hidden>
	lnagb.js has been loaded and is currently available on this web page under
	the namespace <code id="namespace"></code>.<br />
	Go ahead and play around with it in the browser console.<br />
</p>

<form id="form" action="" method="get" hidden>
	<label for="namespace">Use a different name for the namespace:</label>
	<input type="text" id="namespace-input" name="namespace" size="15" required />
	<button type="submit">Go!</button>
</form>

## Troubleshooting

lnagb.js is not available in the browser console? Try these troubleshooting
steps before reporting.

- Make sure that you've typed the namespace's name correctly.
- If JavaScript is disabled in your browser, you have to enable it in order to
  play with lnagb.js in your browser console. Consult the web if you don't know
  how to enable JavaScript. Additionally, check if any of your browser's add-ons
  is disabling JavaScript (globally or site-specific).

## Report

Having troubles with the Lab? [Open an issue on GitHub][gh new issue] or
[send an e-mail][e-mail].

[gh new issue]: https://github.com/cgcentral/lnagb.js/issues/new
[e-mail]: mailto:you_create@protonmail.com

<script>

	document.getElementById( 'load-failed' ).removeAttribute( 'hidden' );

</script>
<script type="module">

	window.a = null;
	window.b = null;

	const DEFAULT_NAMESPACE_NAME = 'lnagbjs';

	let url = new URL( window.location.href );
	let namespaceName = url.searchParams.get( 'namespace' ) || DEFAULT_NAMESPACE_NAME;
	let matchResult = namespaceName.match( /[a-zA-Z_][0-9a-zA-Z_]*/ );

	// Namespace's name validity

	if ( ! matchResult || matchResult[ 0 ].length !== namespaceName.length
		|| Object.keys( window ).some( ( key ) => key === namespaceName ) ) {

		console.error( "Invalid custom name for the namespace" );
		console.info( "Falling back to the default name..." );

		namespaceName = DEFAULT_NAMESPACE_NAME;

	}

	import * as lnagbjs from '../builds/lnagb.esm.js';

	if ( lnagbjs ) {

		window[ namespaceName ] = lnagbjs;

		window.a = new lnagbjs.Matrix( 2, 3, [ 1, 2, 3, 4, 5, 6 ] );
		window.b = new lnagbjs.Matrix( 3, 2, [ 7, 8, 9, 10, 11, 12 ] );

		window.a.name = "A";
		window.b.name = "B";

		document.getElementById( 'namespace' ).innerHTML = namespaceName;

		let suggestions = [

			"a.transpose()",
			`new ${ namespaceName }.IdentityMatrix( 3 )`,
			"b.multiply( a )",
			`new ${ namespaceName }.Matrix( 3, 3, [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ] )`,
			"a.multiplyScalar( 2 )",
			"b.addRowTimesScalarToRow( 1, 2, 3 )"

		];

		console.log( `lnagb.js has been loaded as '${ namespaceName }'.` );
		console.log( "Two example matrices are available as variables a and b." );
		console.log( `Try typing '${ suggestions[
			Math.floor( Math.random() * suggestions.length )
		] }'.` );

		document.getElementById( 'load-failed' ).setAttribute( 'hidden', '' );
		document.getElementById( 'success' ).removeAttribute( 'hidden' );
		document.getElementById( 'form' ).removeAttribute( 'hidden' );

	}

</script>
