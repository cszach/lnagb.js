**Welcome to the lnagb.js project's home page!**

![lnagb.js wordmark logo](./media/wordmark/png/wordmark-pad.png)

**lnagb.js** is an educational JavaScript library project originally created to
learn how mathematical operations in linear algebra can be implemented using
code. It follows the object-oriented programming model and features a set of
classes that encode linear algebra quantities (such as vectors and matrices) and
their operations, such as matrix reduction, Gaussian elimination, matrix
multiplication, elementary row operations, transposition, and more.

**lnagb.js is free software.** Its source code can be browsed [here][repo].

[repo]: https://github.com/novakcgx/lnagb.js

Site map
--------

<table>
  <thead>
    <tr>
      <th style="text-align: center">Page</th>
      <th style="text-align: left">Description</th>
    </tr>
  </thead>
  <tbody>
    {% for section in site.data.sitemap %}
      <tr>
        <td style="text-align: center">
          <a href="{{ section.name | replace: ' ', '-' | downcase }}">
            <b>{{ section.name }}</b>
          </a>
        </td>
        <td style="text-align: left">
          {{ section.description }}
        </td>
      </tr>
    {% endfor %}
  </tbody>
</table>

License
-------

The code, the documents, and the materials are all licensed under
[The Unlicense](https://unlicense.org/), which means this is a work dedicated to
the Public Domain. You are free to do anything with it while not having to give
credits (although that is appreciated).

About the principal author
--------------------------

[**Novak**](https://novakcgx.github.io) is an aspiring computer graphics
scientist and free software advocate who is going to major in computer science
at the University of Rochester. He loves JavaScript, the Web, and using software
freedom to empower learning and sharing—and lnagb.js allows him to combine all
of that together. This is currently his biggest and most invested personal
project.

You can check out his projects on GitHub [@novakcgx][github] or visit his
[website][website].

[github]: https://github.com/novakcgx
[website]: https://novakcgx.me

About this website
------------------

This website is generated thanks to [GitHub Pages](https://pages.github.com/)
and [Jekyll](https://jekyllrb.com/). Files that are used to compile this website
can be browsed [here](https://github.com/novakcgx/lnagb.js/tree/gh-pages).
