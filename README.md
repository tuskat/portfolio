# cedricmarcellin.dev

Personal portfolio and CV for Cédric Marcellin, Senior Frontend Developer.

Built with [Astro](https://astro.build), deployed to GitHub Pages via GitHub Actions.

## Stack

- Astro (static site)
- Vanilla CSS with custom properties
- EN/FR i18n via JSON + CSS class toggle (`body.lang-en` / `body.lang-fr`)
- Scroll-reveal animations via IntersectionObserver
- CV export to pixel-perfect PDF via Puppeteer (`export_cv.mjs`)

## Structure

```
src/
  components/    # Hero, Nav, Work, About, Skills, Projects, Testimonials, Contact
  i18n/          # en.json, fr.json
  layouts/       # Layout.astro (global styles, meta)
  pages/         # index.astro
resume/          # Standalone HTML/CSS/JS CV (dark + light modes)
public/assets/   # Project images, CV PDFs
export_cv.mjs    # Puppeteer PDF export script
```

## Dev

```sh
npm install
npm run dev       # localhost:4321
npm run build     # production build to ./dist
```

## CV Export

```sh
node export_cv.mjs light   # cedric_marcellin_cv_light.pdf
node export_cv.mjs dark    # cedric_marcellin_cv_dark.pdf
```

## License

See [LICENSE](./LICENSE).
