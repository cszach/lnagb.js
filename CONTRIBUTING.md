Hello there, splendid! :wave:
=============================

[new issue]: https://github.com/cgcentral/lnagb.js/issues/new/choose
[new pr]: https://github.com/cgcentral/lnagb.js/compare

Yes, that's what you are!

**Thank you for taking your time to contribute to lnagb.js**! It is a big
project and we need your help! Whether you are a coder, a designer, a writer, or
simply a math lover, there is a place for you! **When you contribute, your name
will appear on our website!**

This document gives you a good outline of the project so you can sort things out
as well as guidelines that ensure consistency throughout the project. If you
have a question, don't hesitate to [open a new issue][new issue]! And if you
have a suggestion for this document itself, don't hesitate to
[create a pull request][new pr]!

> You can skim this document by only reading section headings, text in bold,
> and tables. It takes 5-8 minutes to read the full text, and 2 minutes to skim.

Before you contribute, you are encouraged to do the following if you haven't
already:

1. **Read the readme** ([`README.md`][readme]) to have a basic sense of what
   lnagb.js is.
2. **Use the lnagb.js library** and try different modules of it.
3. **Familiarize yourself with the basics of Git and GitHub** such as pull
   requests, issues, branches, etc.

[readme]: https://github.com/cgcentral/lnagb.js#readme

Content
-------

1. [About the project](#about-the-project)
2. [Components of the project](#components-of-the-project)
    - [The library](#the-library)
    - [The website](#the-website)
3. [What you can contribute as](#what-you-can-contribute-as)
4. [General tasks](#general-tasks)
5. [Project boards](#project-boards)
6. [Branches and workflow](#branches-and-workflow)
    - [Branches](#branches)
    - [Workflow](#workflow)
    - [Notes to outside contributors](#notes-to-outside-contributors)
7. [Labels](#labels)
8. [Further notes](#further-notes)

About the project
-----------------

**lnagb.js** was a library, but now it is an environment. Things have changed! I
initially drafted the library as a way to learn how linear algebra concepts such
as linear equations and matrices could be implemented using code (or JavaScript
in this case), but I have figured out that I also want to share my learning with
others! To do this, there is no better medium than the Web!

The website originally contained only the documentation for the library's APIs,
but now, more exciting content is scheduled to be released soon and being worked
on (maybe you can help!), such as the _Lab_ and the _Classroom_. This drafts the
future of **lnagb.js** as a project: **an environment for learners where they
can ask and discuss about fundamental linear algebra as well as enrich
themselves with freely accessible learning resources**. Computer science and
math students alike will enjoy **lnagb.js** as well as other work being done by
the [Division of Mathematics][cgc math] at the [Computer Graphics Central][cgc].

[cgc]: https://cgcentral.github.io
[cgc math]: https://cgcentral.github.io/mathematics

Components of the project
-------------------------

**The lnagb.js project has 8 components belonging to _the lnagb.js library_
(or _the library_) and _the lnagb.js website_ (or _the website_).** Each
component has a branch scope and a path scope, which together define where the
source code and source files for that component are.

It is important to keep in mind the map of these components. As a contributor,
you should work on one component at a time.

### The library

**Development of the library happens exclusively in the [dev][dev] branch.**

|   Component    |Path scope                    |Description                                                       |
|     :---:      |:---                          |:---                                                              |
|  Source code   |[`/src`][src]                 |ECMAScript modules that collectively compose the lnagb.js library.|
|     Extras     |[`/extras`][extras]           |Extra ECMAScript modules integrable with the source code.         |
|   Unit tests   |[`/test/unit`][unit]          |Unit tests for the modules.                                       |
|Benchmark suites|[`/test/benchmark`][benchmark]|Speed benchmark suites useful for testing different algorithms.   |

[dev]: https://github.com/cgcentral/lnagb.js/tree/dev
[src]: https://github.com/cgcentral/lnagb.js/tree/dev/src
[extras]: https://github.com/cgcentral/lnagb.js/tree/dev/extras
[unit]: https://github.com/cgcentral/lnagb.js/tree/dev/test/unit
[benchmark]: https://github.com/cgcentral/lnagb.js/tree/dev/test/benchmark

### The website

**Development of the website happens in the [gh-pages][gh-pages] branch.** The
wiki is an exception, since it is hosted and rendered on GitHub, but is fully
integrable with the website.

**The website is built with Jekyll** and hosted on GitHub Pages.

|Component|Path scope               |Description                                                        |
|  :---:  |:---                     |:---                                                               |
|Tutorial |[`/tutorial`][tutorial]  |A step-by-step multi-article introduction to the lnagb.js library. |
|Classroom|[`/classroom`][classroom]|A learning hub where free linear algebra materials are distributed.|
|   Lab   |[`/lab`][lab]            |An interactive playground for the library.                         |
|  Wiki   |[_Wiki_][wiki]           |In-depth materials for code contributors.                          |

[gh-pages]: https://github.com/cgcentral/lnagb.js/tree/gh-pages
[tutorial]: https://github.com/cgcentral/lnagb.js/tree/gh-pages/tutorial
[classroom]: https://github.com/cgcentral/lnagb.js/tree/gh-pages/classroom
[lab]: https://github.com/cgcentral/lnagb.js/tree/gh-pages/lab
[wiki]: https://github.com/cgcentral/lnagb.js/wiki

What you can contribute as
--------------------------

You can contribute to our project as a...

- **developer**&mdash;making changes to the lnagb.js library and writing unit
  tests and benchmark suites.
- **designer**&mdash;designing new logos, drawing diagrams, creating a sleek web
  interface, and more!
- **writer**&mdash;working with Markdown documents and writing linear algebra
  lectures, web content, the wiki, and more!
- **web developer**&mdash;working with Jekyll and JavaScript for the lnagb.js
  website.

Of course, our results are not credited to only 4 types of contributors.
Contributions of any kind from anyone are equally appreciated, because they help
make lnagb.js what it is today.

General tasks
-------------

These are what developers, designers, and writers do with each component in
general. Specific tasks (to-do's) are displayed in project boards, which will
be introduced after this.

|   Component    |Developers                                       |Designers        |Writers                    |
|     :---:      |:---                                             |:---             |:---                       |
|  Source code   |Implement algorithms and APIs.                   |Design APIs.     |Help with JSDoc.           |
|     Extras     |Implement algorithms and APIs.                   |Design APIs.     |Help with JSDoc.           |
|   Unit tests   |Write unit tests.                                |                 |                           |
|Benchmark suites|Create benchmark suites.                         |                 |                           |
|    Tutorial    |                                                 |Design web UI/UX.|Write tutorial articles.   |
|   Classroom    |Implement client-side interface and interactions.|Design web UI/UX.|Write lessons and articles.|
|      Lab       |Implement client-side interface and interactions.|Design web UI/UX.|                           |
|      Wiki      |                                                 |                 |Write wiki articles.       |

Project boards
--------------

**[Project boards][boards] drive progression.** This is where ideas are
written down in text before they are implemented. Each project board has 3
columns, which from left to right are:

1. _To do_, where each card is a specific task to do and describes briefly how
   the task should be done;
2. _In progress_, where to-do items from the previous column are moved to when
   they are being worked on; and
3. _Done_, where completed tasks reside.

[boards]: https://github.com/cgcentral/lnagb.js/projects

**Each project component has a project board.** There are also several more
project boards for other goals which speak for themselves. **Using project
boards, you can quickly know what specific tasks you can help with as a
contributor.**

Issues and pull requests also drive progression, but they ultimately point to
project boards. For example, when you open a new issue, we will turn it into a
card in its respective project board so it becomes an actionable task. And when
you make a pull request, we ask that you specify what issue or task in the
project boards you are trying to resolve.

To conclude, this project is oriented by project boards. **Everything we do,
every commit we make, every issue, and every pull request ultimately help
resolve tasks pinned in the project boards**, with the exception of quick fixes
and minor changes.

Branches and workflow
---------------------

### Branches

There are 3 Git branches in our GitHub repository, which are

- [**master**][master], where changes in the dev branch are merged into;
- [**dev**][dev], where developers make changes to code; and
- [**gh-pages**][gh-pages], where web developers, designers, and writers work
  on the website as well as the content on it.

[master]: https://github.com/cgcentral/lnagb.js/tree/master
[dev]: https://github.com/cgcentral/lnagb.js/tree/dev

### Workflow

The workflow, illustrated above, is simple enough:

1. Developers work on the lnagb.js library in the dev branch. **When a new
   version of the lnagb.js library is finished, it is compiled into `/lib` and
   its documentation is compiled into `/doc`. These changes then get merged into
   the gh-pages branch.**
2. Web developers, designers, and writers then work in the gh-pages branch to
   update changes that reflect the new version of the library. When the work is
   done, **the website is built into `/_site` (which is gitignored) and the
   content of this directory gets merged into the `/web` directory in the dev
   branch**.
3. Even without new changes to the lnagb.js library, web developers, designers,
   and writers can still work on any component of the website (e.g. update the
   user interface). When a new version of the website is ready, it is built into
   `/_site` and merged into `/web` in the dev branch.
4. Steps 1 to 3 are repeated until a new release of the lnagb.js _environment_
   is ready.
5. **When a new release of the lnagb.js environment is ready, a pull request is
   created, and the dev branch gets merged into the master branch.** Before
   merging, the code must pass all unit tests and code scanning. Once merged, a
   workflow cycle is completed.

### Notes to outside contributors

The workflow is important to principal authors and core contributors, who can
make actual commits and pulls within the repository. Outside contributors help
by forking the repository and creating a pull request, so they do not have to
follow the workflow.

If you are an outside contributor, **please request to merge into the dev branch
or the gh-pages branch**, depending on what you have worked on (e.g. the library
or the website). The master branch only changes when the dev branch is merged
into it, and is not a place for making direct changes.

Labels
------

**Our project uses labels to categorize issues and pull requests.** You can take
a look through them [here](https://github.com/cgcentral/lnagb.js/labels). Labels
are not hard to use; we have generic labels (such as _bug_, _enhancement_, and
_good first issue_), one label for each component of the project, the _design_
label to label issues that designers can tackle, and the _learner question_
label so our learners can ask a question about math or computer science in
_Issues_.

**A single issue or pull request can have multiple labels.** For example, if an
issue asks for enhancement of the lnagb.js _Lab_'s user interface, it can be
labeled _Lab_, _designer_, and _enhancement_.

Further notes
-------------

You have just read the general contributing guidelines! Awesome! Now depending
on what you want to contribute as (i.e. developer, designer, or writer), there
are some more notes specific to your task. **Head over to [the wiki][wiki] and
you will find further navigation there.**

Happy hacking!
