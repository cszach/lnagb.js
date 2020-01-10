lnagb.js
========

This repository contains Linear Algebra operations implemented in JavaScript,
such as adding vectors, reducing matrices, matrix transformations, etc. APIs are
named similarly to those of matrix classes in [three.js](https://threejs.org).

`lnagb.js` evolves as I ([@you_create][gh yc]) learn Linear Algebra. I hope one
day I will make a website out of this project. There was a similar project that
I worked on called [`pylnagb`][gh pylnagb], but I've decided to let it sit in
the corner of my garage (for now) because I'm currently not so used to using
Python.

`lnagb.js` is meant to be educational. I could have kept this script secret
in my computer with a bunch of GNU and FSF images, but I thought maybe making
it open-source would benefit others. But if this project ever helps anyone at
all, I'll be very surprised.

[gh yc]: https://github.com/you-create
[gh pylnagb]: https://github.com/vecma-org/pylnagb

:pushpin: TODO
--------------

- [ ] Create the `lnagb.js` library (currently `lnagb.js` is only available as
  a JavaScript module)
- [ ] Create `lnagb.opt.js` - basically an optimized version of `lnagb.js`,
  where only row-major ordering is supported and class functions are independent
  of each other
- [ ] Produce `lnagb.min.js` (minified `lnagb.js`)

:page_with_curl: License
------------------------

Licensed under [The Unlicense](https://unlicense.org/). Basically, you can do
anything with it, and taking credits is not compulsory.
