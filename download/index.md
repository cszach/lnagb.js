Downloadable items
------------------

1. [The lnagb.js environment](#the-lnagbjs-environment)
2. [The lnagb.js library](#the-lnagbjs-library)
3. [Standalone library components](#standalone-library-components)
4. [The wiki](#the-wiki)
5. [Legacy lnagb.js](#legacy-lnagbjs)

The lnagb.js environment
------------------------

The complete lnagb.js environment contains the compiled lnagb.js library, the
source code, the website, and development tools. If you're looking forward to
the full experience or contributing to the project, you should download the full
environment using Git:

{% include command.html
	language='shell'
	id='clone-repo'
	code='git clone https://github.com/cszach/lnagb.js'
%}

If you don't want to download using Git, you can download the ZIP files instead.
Because the website's source code is stored in a separated branch, you'd need to
download 2 ZIP files for the full experience. Left click on the links to
download, right click to copy.

{% include superlink.html
	id="master"
	download=true
	link="https://github.com/cszach/lnagb.js/archive/refs/heads/master.zip"
%}

{% include superlink.html
	id="gh-pages"
	download=true
	link="https://github.com/cszach/lnagb.js/archive/refs/heads/gh-pages.zip"
%}

The `master.zip` file contains the `master` branch, which contains the source
code, the Markdown documentation, and the compiled library. `gh-pages.zip`
contains the website.

The lnagb.js library
--------------------

The lnagb.js JavaScript library is ready to be used in your applications. The
first link points to the uncompressed format, while the second points to the
compressed (minified) format. Left click to download, right click to copy.

{% include superlink.html
	id="full"
	download=true
	link="https://cszach.github.io/lnagb.js/lib/lnagb.js"
%}

{% include superlink.html
	id="full-min"
	download=true
	link="https://cszach.github.io/lnagb.js/lib/lnagb.min.js"
%}

> Being "uncompressed" means the code is readable and can be inspected, and is
> best for the development of the library. The compressed format provides better
> performance, on the other hand, and is best for use in production or with real
> applications.

Standalone library components
-----------------------------

If you only want to use a specific component of the lnagb.js library, refer to
these links instead. Click on the link to download, or click on the clipboard
icon (📋) next to it to copy the link.

{% assign components = 'equations,matrices,vectors' | split: ',' %}
{% assign lib = '/lib' | absolute_url %}

<table>
	<thead>
		<tr>
			<th></th>
			<th>Uncompressed</th>
			<th></th>
			<th>Compressed</th>
			<th></th>
		</tr>
	</thead>
	<tbody>
		{% for component in components %}
			<tr>
				<td><b>{{ component | capitalize }}</b></td>
				<td>
					<code>
						<a id="{{ component }}"
						   href="{{ lib }}/lnagb.{{ component }}.js"
						   download>{{ lib }}/lnagb.{{ component }}.js</a>
					</code>
				</td>
				<td style="text-align: center">
					<a onclick="copyLink( '{{ component }}', this )">📋</a>
				</td>
				<td>
					<code>
						<a id="{{ component }}-min"
						   href="{{ lib }}/lnagb.{{ component }}.min.js"
						   download>{{ lib }}/lnagb.{{ component }}.min.js</a>
					</code>
				</td>
				<td style="text-align: center">
					<a onclick="copyLink( '{{ component }}-min', this )">📋</a>
				</td>
			</tr>
		{% endfor %}
	</tbody>
</table>

The wiki
--------

The lnagb.js wiki contains Markdown documents with information especially useful
for project contributors. To download the wiki, clone it using Git:

{% include command.html
	language='shell'
	id='clone-wiki'
	code='git clone https://github.com/cszach/lnagb.js.wiki.git'
%}

Legacy lnagb.js
---------------

The lnagb.js library used to be distributed in ESM and UMD. However, the project
[dropped support for UMD](https://github.com/cszach/lnagb.js/pull/56) on June
22, 2021. This was done to encourage the use of ESM—a more portable, convenient,
and modern format. However, the project still builds lnagb.js into UMD for those
interested.

{% include superlink.html
	id="full-umd"
	download=true
	link="https://cszach.github.io/lnagb.js/lib/umd/lnagb.js"
%}

{% include superlink.html
	id="full-min-umd"
	download=true
	link="https://cszach.github.io/lnagb.js/lib/umd/lnagb.min.js"
%}

> For more information on library formats, see
> [this wiki page](https://github.com/cszach/lnagb.js/wiki/Library-formats).

<script src="{{ '/assets/js/copy.js' | absolute_url }}"></script>
