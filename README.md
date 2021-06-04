<h1 align="center">lnagb.js</h1>

<p align="center">
    Educational linear algebra environment powered by the Web.
    <br/>
    <a href="https://vecma-org.github.io/lnagb.js/tutorial"><b>Tutorial</b></a>
    &mdash;
    <a href="https://vecma-org.github.io/lnagb.js/classroom"><b>Classroom</b></a>
    &mdash;
    <a href="https://vecma-org.github.io/lnagb.js/docs"><b>Documentation</b></a>
    &mdash;
    <a href="https://vecma-org.github.io/lnagb.js/examples"><b>Examples</b></a>
    &mdash;
    <a href="https://vecma-org.github.io/lnagb.js/lab"><b>Lab</b></a>
    &mdash;
    <a href="https://vecma-org.github.io/lnagb.js/builds"><b>Builds</b></a>
</p>

<p align="center">
    <a href="https://github.com/vecma-org/lnagb.js/actions/workflows/ci.yml">
        <img alt="CI" src="https://github.com/vecma-org/lnagb.js/actions/workflows/ci.yml/badge.svg?branch=dev" />
    </a>
    <a href="https://github.com/vecma-org/lnagb.js/actions/workflows/codeql-analysis.yml">
        <img alt="CodeQL" src="https://github.com/vecma-org/lnagb.js/actions/workflows/codeql-analysis.yml/badge.svg?branch=dev" />
    </a>
</p>

![](media/wordmark/png/wordmark-pad.png)

Started out as a bunch of JavaScript files coded to learn how linear equations
and matrices could be digitally represented, **lnagb.js** (<b>l</b>i<b>n</b>ear
<b>a</b>l<b>g</b>e<b>b</b>ra dot JS) has now evolved into a learning ecosystem
where math and computer science students alike can come and study linear algebra
as well as how it can be programmed on a computer.

The project comes bundled with the lnagb.js JavaScript library as its core along
with detailed documentation, a step-by-step tutorial, linear algebra lectures,
a digital playground, and more! With the JavaScript library, you can create
linear algebra quantities (e.g. vectors, linear systems, matrices) digitally and
perform operations with them, such as matrix-vector multiplication, Gaussian
elimination, matrix reduction, cross multiplication, and transposition, just to
name a few.

:point_right: First steps
-------------------------

Download [the ZIP archive][download] onto your computer and extract it. You then
have the complete lnagb.js environment which is ready to be accessed anytime,
anywhere, even when you don't have an Internet connection. Alternatively, you
can use Git to clone lnagb.js onto your computer:

```shell
git clone https://github.com/vecma-org/lnagb.js.git
```

[download]: https://github.com/vecma-org/lnagb.js/archive/master.zip

In the lnagb.js folder on your computer:
- `src` contains the source code, which can be studied if you're a computer
  science student who also wishes to create a linear algebra program.
- `web` contains the whole website, which can normally be accessed online at
  <https://vecma-org.github.io/lnagb.js>, but since this is on your computer,
  you access it even without an Internet connection.
- `web/builds` contains the lnagb.js JavaScript library.
- `web/examples` contains example JavaScript files that use the library.

To access the website offline, you need to start a local server. If you have
Python 3 installed, you can move into the `web` directory and execute:

```shell
python3 -m http.server
```

and then go to <http://localhost:8000> in your web browser. The website has all
the information you need: a step-by-step tutorial to get you started, linear
algebra lectures in _Classroom_, a live playground in _Lab_, the detailed
documentation that helps you dive deep, and examples of the lnagb.js JavaScript
library in use.

:monocle_face: What's next?
---------------------------

[The website][website] has all the information you need, including...
- a [step-by-step tutorial][Tutorial] to get you started,
- [linear algebra lectures][Classroom],
- detailed formal [documentation][Docs] of the lnagb.js JavaScript library,
- [examples][Examples] of the library in use, and
- a [playground][Lab] where you can try the library in your browser console.

Remember that if you have done the installation steps in the previous section,
you can access all of this anytime, anywhere, without an Internet connection.

[website]: https://vecma-org.github.io/lnagb.js

[Tutorial]: https://vecma-org.github.io/lnagb.js/tutorial
[Classroom]: https://vecma-org.github.io/lnagb.js/classroom
[Docs]: https://vecma-org.github.io/lnagb.js/docs
[Examples]: https://vecma-org.github.io/lnagb.js/examples
[Lab]: https://vecma-org.github.io/lnagb.js/lab

If you have a technical question or cannot find a specific piece of information
on the website, the [wiki][wiki] likely has the answer. If it doesn't, post your
question in [_Issues_][issues] and add the 'question' label to your post, or
contact the principal author by emailing to <you_create@protonmail.com>.

[wiki]: https://github.com/vecma-org/lnagb.js/wiki
[issues]: https://github.com/vecma-org/lnagb.js/issues

:sparkles: Example
------------------

This is a simple example of how you can perform matrix-vector multiplication
using lnagb.js.

```javascript
import { Matrix, Vector } from 'https://vecma-org.github.io/lnagb.js/builds/lnagb.esm.js';

// Construct a 3 x 4 matrix
let matrix = new Matrix( 3, 4, [
    2, - 1, 3, 5,
    0, 2, - 3, 1,
    - 3, 4, 1, 2
] );

// Construct a vector with 4 entries
let vector = new Vector( [
    2,
    1,
    0,
    - 2
] );

// Multiply the matrix with the vector and print the entries of the product to
// the console
let product = matrix.multiply( vector );
console.log( product.elements ); // [ - 7, 0, - 6 ]
```

:page_with_curl: License
------------------------

The work of lnagb.js is licensed under [The Unlicense](https://unlicense.org/).
This means you are free to use, copy, and share lnagb.js, all without having to
ask for permissions or taking credits (although that is very much appreciated).
The logo of lnagb.js (found in `media/logo`, `media/repository-social-preview`,
and `media/wordmark`) is not licensed and cannot be copied freely, however.

The lnagb.js project supports the public domain and education through software
freedom. Read about our missions [here][missions].

[missions]: https://github.com/vecma-org/lnagb.js/missions
