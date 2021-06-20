**Welcome to the lnagb.js documentation!**

The goal of the documentation is to provide, in great details, information on
how to use all of lnagb.js's functions, classes, and their methods. The pages
in this documentation are generated from the docstrings placed along with the
source code of lnagb.js itself using [`jsdoc-to-markdown`][gh jsdoc2md]. The
documentation can be generated with

```bash
npm install # Install dependencies
npm run build-docs # Build the documentation
```

[gh jsdoc2md]: https://github.com/jsdoc2md/jsdoc-to-markdown

## Index

The whole lnagb.js library is composed of modules. Structurally, the library
contains 3 modules named **Equations**, **Matrices**, and **Vectors**, along
with minor modules such as `Functions.js`. Each of the major 3 modules contains
sub-modules, each containing a class that encodes the properties and operations
attributed to a mathematical symbol in linear algebra. (e.g. the `Vector`
sub-module of `Vectors` contains the `Vector` class, which encodes the
properties and operations of vector quantities).

### [Equations](./Equations.html)

This module contains sub-modules which have JavaScript classes for representing
linear equations and linear systems.

{% include index.html data=site.data.equations %}

### [Matrices](./Matrices.html)

This module contains sub-modules for working with matrices. Currently supported
operations include transposition, elementary row operations, and multiplication.

{% include index.html data=site.data.matrices %}

### [Vectors](./Vectors.html)

This module contains sub-modules that contain vector classes. Basic vector
operations such as addition, subtraction, and dot/cross multiplication are
implemented within these classes.

{% include index.html data=site.data.vectors %}

## Report

Found a mistake in the docs? Have questions? [Open an issue][gh new issue] or
[send an e-mail][e-mail].

[gh new issue]: https://github.com/cgcentral/lnagb.js/issues/new
[e-mail]: mailto:you_create@protonmail.com
