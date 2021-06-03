lnagb.js Development Channel
============================

Changes to the source code (in [`src/`](src/)), the tests (in [`test/`](test/)),
or post-development utilities (in [`utils/`](utils/)) are made here before they
get merged into the `master` branch. Commits between each merge are related to
each other and solve a particular to-do in [Projects][projects].

[projects]: https://github.com/vecma-org/lnagb.js/projects

Source code
-----------

Structurally, lnagb.js is composed of 3 major modules (or components):
**Equations**, **Matrices**, and **Vectors**. The source code is organized
accordingly. Each component gets its dedicated directory where its sub-modules
are stored along with an `index.js` file which is itself a module that exports
all the sub-modules. Modules that do not fit in any of the 3 components (like
`Functions.js`) are stored at the root of the `src/` folder.

```
src
├── equations
│   ├── index.js
│   ├── LinearEquation2.js
│   ├── LinearEquation3.js
│   ├── LinearEquation.js
│   └── SystemOfLinearEquations.js
├── matrices
│   ├── AugmentedMatrix.js
│   ├── IdentityMatrix.js
│   ├── index.js
│   ├── Matrix2.js
│   ├── Matrix3.js
│   ├── Matrix4.js
│   ├── Matrix.js
│   ├── MatrixTranspose.js
│   └── SquareMatrix.js
├── vectors
│   ├── index.js
│   ├── Vector2.js
│   ├── Vector3.js
│   ├── Vector4.js
│   └── Vector.js
├── Functions.js
└── index.js  # This is the entry point of the whole library
```

Tests
-----

Unit tests have been written to validate linear algebra operations implemented
in the library. Every module (except for `index.js` files) is unit tested. Unit
tests are stored in [`test/unit/`](test/unit/) where they are stored exactly
like in `src/`. To run unit tests:

```
npm test
```

All tests must pass before changes get merged into the `master` branch.
