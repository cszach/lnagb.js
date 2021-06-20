lnagb.js Website
================

Everything required to build the `lnagb.js` website (https://vecma-org.github.io/lnagb.js/)
is here. Hosted thanks to GitHub Pages. Powered by Jekyll.

See the website's progression [here][project].

[project]: https://github.com/vecma-org/lnagb.js/projects/1

Directory structure
-------------------

### Website

- `index.md`: Entry point of the website, the home page
- `404.md`: 404 page
- `docs/`: Contains pages for the lnagb.js documentation
- `learn/`: Contains pages for the Learning Area
- `lab/`: Contains pages for the lnagb.js Lab
- `builds/`: Contains lnagb.js builds and an index page

### Dev

- `Gemfile`: Lists gems required for the site
- `_config.yml`: Configuration file for Jekyll
- `.bundle/`: Contains `bundle`'s files and stuff

Local preview
-------------

### Build the site

```bash
bundle install # Install the required gems
bundle exec jekyll build # Build the site
```

### Serve it

```bash
bundle exec jekyll serve
```

...then go to `localhost:4000` in your web browser.
