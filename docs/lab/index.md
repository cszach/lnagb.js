---
title: Lab
---

**Welcome to the lnagb.js Lab!**

<p>
	This is where you can try lnagb.js directly in your browser console.
	<span id="no-js">
		However, it seems that JavaScript has been disabled in your browser,
		which makes it impossible to load a JavaScript-based library like
		lnagb.js. Please enable JavaScript and then try again.
	</span>
</p>
<p id="success" hidden>
	lnagb.js has been loaded and is currently available on this web page under
	the namespace <code>lnagbjs</code>. <br/>
	Go ahead and play around with it in the browser console.
</p>

<script>

	document.getElementById( 'no-js' ).setAttribute( 'hidden', '' );

</script>
<script type="module">

	import * as lnagbjs from 'https://cdn.jsdelivr.net/gh/vecma-org/lnagb.js/src/index.js';

	window.lnagbjs = lnagbjs;
	window.a = new lnagbjs.Matrix( 2, 3, 3, 9, - 3, 10, 9, - 8 );
	window.b = new lnagbjs.Matrix( 3, 2, 2, - 1, - 9, 4, - 7, 6 );

	window.a.name = "A";
	window.b.name = "B";

</script>
<script>

	let suggestions = [

		"lnagbjs.Matrix.ZeroMatrix( 4, 5 )",
		"a.transpose()",
		"lnagbjs.Matrix.IdentityMatrix( 3 )",
		"b.multiply( a )",
		"new lnagbjs.Matrix( 3, 3, 4, 1, - 9, 7, 7, - 6 )",
		"a.multiplyScalar( - 1.5 )",
		"b.addRowTimesScalarToRow( 1, 2, 3 )"

	]

	console.log( "lnagb.js has been loaded as 'lnagbjs'." );
	console.log( "Two example matrices are available as variables a and b." );
	console.log( `Try typing '${suggestions[
		Math.floor( Math.random() * suggestions.length )
	]}'.` );

	document.getElementById( 'success' ).removeAttribute( 'hidden' );

</script>
