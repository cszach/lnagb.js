This page indexes links to lnagb.js's builds as well as its components'. These
builds are served online and are ready to be loaded from.

## The entire library

You can load the full lnagb.js library using the `script` tag:

```html
<script src="https://vecma-org.github.io/lnagb.js/builds/lnagb.js"></script>
```

...or using the `import` statement, but note that this time the file being
imported ends with `.esm.js`:

```javascript
import * as lnagbjs from 'https://vecma-org.github.io/lnagb.js/builds/lnagb.esm.js';
```

## Standalone components

{% assign components = 'algebra,matrices' | split: ',' %}

Alternatively, if you only want to use a certain component, like _Algebra_, you
can use these links instead.

<ul>
{% for component in components %}
	<li>
		<b>{{ component | capitalize }}</b>:
		<ul>
			<li>
				UMD: <a href="./{{ component }}/lnagb.{{ component }}.js">
					https://vecma-org.github.io/builds/{{ component }}/lnagb.{{ component }}.js
				</a>
			</li>
			<li>
				ESM: <a href="./{{ component }}/lnagb.{{ component }}.esm.js">
					https://vecma-org.github.io/builds/{{ component }}/lnagb.{{ component }}.esm.js
				</a>
			</li>
		</ul>
	</li>
{% endfor %}
</ul>

> **Note**: _UMD_ is a format for JavaScript modules which can be loaded using
> the HTML `<script>` tag, or as an AMD or CommonJS module. Whereas _ESM_ is a
> format that should be loaded using the JavaScript `import` statement.
