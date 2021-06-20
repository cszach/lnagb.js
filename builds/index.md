---
---
<p>
	This page indexes links to lnagb.js's builds as well as its components'. It
	is recommended that you save the files you need on your computer and load
	from the local files instead of ones served on GitHub. Click on the
	clipboard icon (📋) to copy a link instantly.
</p>

<p>
	lnagb.js is distributed in UMD and ESM. If these sound new for you, please
	read <a href="https://github.com/cgcentral/lnagb.js/wiki/Library-formats">
	this wiki page</a>.
</p>

<h2>The entire library</h2>

The full lnagb.js library contains all 3 major components and other modules.

<ul>
	<li>UMD:
		<a id="-umd" href="https://cgcentral.github.io/lnagb.js/builds/lnagb.cjs">
			https://cgcentral.github.io/lnagb.js/builds/lnagb.cjs
		</a>
		<a onclick="copyLink( '', 'umd' )">📋</a>
	</li>
	<li>ESM:
		<a id="-esm" href="https://cgcentral.github.io/lnagb.js/builds/lnagb.esm.js">
			https://cgcentral.github.io/lnagb.js/builds/lnagb.esm.js
		</a>
		<a onclick="copyLink( '', 'esm' )">📋</a>
	</li>
</ul>

<h2>Standalone components</h2>

<p>
	If you only want to use a specific component, refer to these links instead.
</p>

{% assign components = 'equations,matrices,vectors' | split: ',' %}

<table>
	<thead>
		<tr>
			<th>UMD</th>
			<th></th>
			<th>ESM</th>
			<th></th>
		</tr>
	</thead>
	<tbody>
		{% for component in components %}
			<tr>
				<td>
					<a id="{{ component }}-umd" href="./{{ component }}/lnagb.{{ component }}.cjs">
						https://cgcentral.github.io/lnagb.js/builds/{{ component }}/lnagb.{{ component }}.cjs
					</a>
				</td>
				<td>
					<a onclick="copyLink( '{{ component }}', 'umd' )">
						📋
					</a>
				</td>
				<td>
					<a id="{{ component }}-esm" href="./{{ component }}/lnagb.{{ component }}.esm.js">
						https://cgcentral.github.io/lnagb.js/builds/{{ component }}/lnagb.{{ component }}.esm.js
					</a>
				</td>
				<td>
					<a onclick="copyLink( '{{ component }}', 'esm' )">
						📋
					</a>
				</td>
			</tr>
		{% endfor %}
	</tbody>
</table>

<script>

let clipboardButtons = document.querySelectorAll( 'a[onclick]' );

clipboardButtons.forEach( ( element ) => {

	element.style.cursor = 'pointer';

} );

function copyLink( component, format ) {

	let anchor = document.getElementById( `${component}-${format}` );

	navigator.clipboard.writeText( anchor.innerHTML.trim() );

}

</script>
