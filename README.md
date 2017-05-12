# Fulcrum Development

This is a bit hacky but is a relatively low cost way to create a development environment that works for basic page layout/design with browser-sync and hot reloading. The production Fulcrumapp.com site is built with Jekyll which takes a painfully long time to regenerate/re-render the site (30+ seconds at most or as little as 15 with the `jekyll serve --watch --limit_posts 1` command). The added benefit here is that this site can be deployed via Surge so that the basic functionality can be demonstrated without having to clone and run the site locally. If you DO want to run the site locally here is a basic setup.

## Installation:
- make sure you have [yarn](https://www.npmjs.com/package/yarn) installed
- `git clone` this repo
- `cd fulcrum-development`
- run `yarn` (which installs all of the necessary dependencies)
- open project in your editor of choice
- run `yarn start` to start the dev server running on **localhost:3000**
- hack away

## Workflow:
- copy necessary CSS files from fulcrumapp.com to similarly named file in `src/styles` directory but prepend the file name with an underscore and change to the `.scss` extension (e.g. `security.css` becomes `_security.scss`)
- Import the file into `screen.scss` which itself has all the basic styles from the `screen.css` file of fulcrumapp.com plus a few extra goodies.
- copy pasta the necessary HTML files or sections of files that you want to work with into index.html. There may be other `.html` files copied into source but only `index.html` is running live.
