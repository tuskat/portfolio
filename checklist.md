# Portfolio Launch Checklist

## Content
- [ ] Replace `public/assets/photo.svg` with actual photo
- [ ] Write real About text (current draft is a starting point — make it yours)
- [ ] Confirm availability badge wording ("Open to opportunities" — update when no longer true)
- [ ] Make R0D3nt, Teddy's Crew, Road to Dakar repos public on GitHub
- [ ] Update GitHub links per game in `Projects.astro` (currently placeholders)
- [ ] Update itch.io links per game to their individual pages (currently all point to profile root)
- [ ] Replace all 5 project placeholder SVGs with actual screenshots or cover art
- [ ] Decide on OttlerStudio store links — leave as website-only or add App Store / Play Store when live

## CV
- [ ] Regenerate CV PDFs after any future content changes (`node export_cv.mjs dark` / `light`)
- [ ] Keep `public/assets/` PDFs in sync with `resume/` source (copy after each export)

## Tech / Code
- [ ] Add real `og:image` (a screenshot or custom card — currently missing)
- [ ] Add favicon that matches the brand (current one is Astro default)
- [ ] Verify all external links open correctly (`target="_blank"` + `rel="noopener"`)
- [ ] Check mobile layout on an actual phone (Nav links hidden on small screens — confirm that's acceptable or add a hamburger menu)
- [ ] Test scroll-reveal animations don't break on reduced-motion preference (add `@media (prefers-reduced-motion)` if needed)
- [ ] Check the sticky nav blur works on Safari (webkit prefix is in, double-check)

## SEO / Meta
- [ ] Set real `og:image` URL once hosted
- [ ] Add `og:locale` (`en_US`)
- [ ] Confirm canonical URL matches deployed domain (`cedricmarcellin.dev`)
- [ ] Add `<meta name="author">` tag

## Deployment
- [ ] Choose hosting (Vercel / Netlify / Cloudflare Pages — all support Astro out of the box)
- [ ] Point `cedricmarcellin.dev` DNS to host
- [ ] Confirm `resume/` subfolder is accessible at `cedricmarcellin.dev/resume/` or decide if it should redirect somewhere
- [ ] Test PDF download links work in production (not just local)
- [ ] Run Lighthouse audit after deploy — fix anything below 90

## Nice-to-have (not blocking)
- [ ] NFT-era projects — add as a small secondary row in Projects when ready
- [ ] Add OttlerStudio apps individually once they're in the store
- [ ] Consider a `sitemap.xml` (Astro has an integration for this)
- [ ] Dark/light toggle for the portfolio (currently dark-only — fine for now)
