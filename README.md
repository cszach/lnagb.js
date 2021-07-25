<h1 align="center">lnagb.js</h1>

<p align="center">
    Educational linear algebra environment powered by the Web.
    <br/>
    <a href="https://cgcentral.github.io/lnagb.js/tutorial"><b>Tutorial</b></a>
    &mdash;
    <a href="https://cgcentral.github.io/lnagb.js/classroom"><b>Classroom</b></a>
    &mdash;
    <a href="https://cgcentral.github.io/lnagb.js/docs"><b>Documentation</b></a>
    &mdash;
    <a href="https://cgcentral.github.io/lnagb.js/examples"><b>Examples</b></a>
    &mdash;
    <a href="https://cgcentral.github.io/lnagb.js/lab"><b>Lab</b></a>
    &mdash;
    <a href="https://cgcentral.github.io/lnagb.js/builds"><b>Builds</b></a>
</p>

<p align="center">
    <a href="https://github.com/cgcentral/lnagb.js/actions/workflows/ci.yml">
        <img alt="CI" src="https://github.com/cgcentral/lnagb.js/actions/workflows/ci.yml/badge.svg?branch=dev" />
    </a>
    <a href="https://github.com/cgcentral/lnagb.js/actions/workflows/codeql-analysis.yml">
        <img alt="CodeQL" src="https://github.com/cgcentral/lnagb.js/actions/workflows/codeql-analysis.yml/badge.svg?branch=dev" />
    </a>
</p>

![](media/wordmark/png/wordmark-pad.png)

Started out as a bunch of JavaScript files coded to learn how linear equations
and matrices could be digitally represented, **lnagb.js** (<b>l</b>i<b>n</b>ear
<b>a</b>l<b>g</b>e<b>b</b>ra dot JS) has now evolved into a learning environment
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
git clone https://github.com/cgcentral/lnagb.js.git
```

[download]: https://github.com/cgcentral/lnagb.js/archive/master.zip

In the lnagb.js folder on your computer:
- `src` contains the source code, which can be studied if you're a computer
  science student who also wishes to create a linear algebra program.
- `test/unit` contains unit tests for the library.
- `lib` contains the compiled library, uncompressed and compressed.
- `doc` contains the formal detailed Markdown documentation of the library.
- `web` contains the whole website, which can normally be accessed online at
  <https://cgcentral.github.io/lnagb.js>, but since this is on your computer,
  you can access it even without an Internet connection.

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

[website]: https://cgcentral.github.io/lnagb.js

[Tutorial]: https://cgcentral.github.io/lnagb.js/tutorial
[Classroom]: https://cgcentral.github.io/lnagb.js/classroom
[Docs]: https://cgcentral.github.io/lnagb.js/docs
[Examples]: https://cgcentral.github.io/lnagb.js/examples
[Lab]: https://cgcentral.github.io/lnagb.js/lab

If you have a technical question or cannot find a specific piece of information
on the website, the [wiki][wiki] likely has the answer. If it doesn't, post your
question in [_Issues_][issues] and add the 'question' label to your post, or
contact the principal author by emailing to <novakcgx@protonmail.com>.

[wiki]: https://github.com/cgcentral/lnagb.js/wiki
[issues]: https://github.com/cgcentral/lnagb.js/issues

:sparkles: Example
------------------

This is a simple example of how you can perform matrix-vector multiplication
using lnagb.js.

```javascript
import { Matrix, Vector } from 'https://cgcentral.github.io/lnagb.js/builds/lnagb.js';

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

:dancers: Contribute to lnagb.js
--------------------------------

Join us and help build a community of linear algebraists! Whether you are a
coder, a designer, a writer, a math lover, or a student of computer science,
there are improvements you can help make! We do our best to surround our
contributors with help and support, so here are resources made for you:

- [Contributing guidelines](CONTRIBUTING.md)&mdash;**Read this first!** This
  document outlines the project so you can navigate around easier. Takes 5 mins
  to read.
- [Project boards](https://github.com/cgcentral/lnagb.js/projects) pin specific
  tasks you can help with by project component.
- The [wiki](https://github.com/cgcentral/lnagb.js/wiki) has further specific
  guidelines you should follow when making changes.

![](https://user-images.githubusercontent.com/29008608/124381854-c9bf0b80-dcee-11eb-8e88-d93412d3be37.png)

<sup>_Render by [HoangTheBoss](http://links.hoangtheboss.xyz/)._</sup>

:page_with_curl: License
------------------------

The work of lnagb.js is licensed under [The Unlicense](https://unlicense.org/).
This means you are free to use, copy, and share lnagb.js, all without having to
ask for permissions or taking credits (although that is very much appreciated).
The logo of lnagb.js (found in `media/logo`, `media/repository-social-preview`,
and `media/wordmark`) is not licensed and cannot be copied freely, however.

The lnagb.js project supports the public domain and education through software
freedom. Read about our missions [here][missions].

[missions]: https://github.com/cgcentral/lnagb.js/missions
