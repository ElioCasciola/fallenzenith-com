# Fallen Zenith

React + Vite website for Fallen Zenith, with React Router for navigation.

## Development

Run these commands from this directory:

```sh
npm install
npm run dev
```

Run `npm run lint` to check JavaScript and JSX with the same ESLint configuration
and development dependency ranges as `eliocasciola-dev`.

## Production

```sh
npm run build
npm run preview
```

Vite outputs a single `dist/index.html`, matching `eliocasciola-dev`.
React Router handles `/updates/`, `/contatti/`, and `/button-styles/` in the browser.

Configure production hosting with an SPA fallback: serve `index.html` for page
routes that do not match a static file. This makes direct visits and refreshes
work. `npm run dev` and `npm run preview` provide this fallback locally.

## Structure

The project follows the folder conventions of `eliocasciola-dev`:

```text
public/                  Icons, robots.txt and hosting cache headers
src/
  assets/                Imported logo, button frame, responsive backgrounds, provenance
  components/            Navbar, Footer, SiteLayout and their colocated CSS
  pages/                 Home, Updates, Contacts and the button showcase
  App.jsx                Routes and navigation title/focus handling
  index.css              Global styles, shared page styles and backgrounds
  main.jsx               React entry point
```

Page and component styles live beside their JSX, matching the reference project.
The button showcase keeps its CSS Module to isolate the variation styles.
Images used by JSX and CSS live in `src/assets/` and are processed by Vite;
`public/` contains the icons referenced by `index.html`, `robots.txt`, and the
same `_headers` cache rules as the reference project. `_headers` applies on
hosting platforms that support that file; it does not configure the SPA fallback.

The homepage uses the still logo with animated CSS embers. Reduced-motion
preferences disable the embers. Background and button artwork provenance is
documented in `src/assets/README.md`.

Content and data folders can be added when needed for updates, following the
reference project's pattern.

`dist/` is generated; edit `src/` and `public/` instead.
