# Portfolio — Plan
**cedricmarcellin.dev**

---

## Design direction

- Shares the CV's design language: dark bg (`#2a2a28`), teal (`#3bbfa0`), Raleway, wave motifs, teal bars as section dividers
- Single scrolling page, full-width sections with generous padding
- Much airier than the CV — larger type, more whitespace, sections breathe
- Subtle scroll-driven animations (fade/slide in on enter) — lightweight, no library needed
- Dark only for now (no light toggle needed here)

---

## Sections (in order)

### 1. Hero
**Goal:** answer "who is this and should I keep reading?" in 3 seconds.

- Name large, thin weight (same vibe as CV header)
- Title: Senior Frontend Developer
- One punchy line — the career summary compressed to ~15 words:
  > "10+ years building web products people actually use. Rails, React, Vue — whatever it takes."
- Two CTAs side by side:
  - `View my work ↓` (anchors to Projects)
  - `Download CV` (links to the PDF)
- Availability badge: small pill — "Open to opportunities" / "Currently busy" (easy to swap)
- Subtle wave at the bottom of the hero bleeding into the next section

### 2. About
**Goal:** be a human, not a LinkedIn profile.

- 2–3 short paragraphs, written in first person, more personality than the CV
- Paragraph 1: the work — where you've been, what you've built (ExpressVPN, 10 years, breadth)
- Paragraph 2: the side of you that isn't work — Flutter with OttlerStudio, indie games at tuskat.itch.io, illustration
- Paragraph 3 (optional): what you're looking for / what kind of team you thrive in
- Small photo or avatar (optional — can be a stylised illustration since you do digital art)

### 3. Skills
**Goal:** fast scanability for tech recruiters.

- Not a list — styled tag chips or a clean grid
- Group by category:
  - **Frontend:** JavaScript, TypeScript, Vue.js, React, Angular, Astro
  - **Backend:** Node.js, Ruby on Rails, Express.js
  - **Other:** Flutter, Unity/C#, .NET
  - **Tools:** Git, Crowdin, REST APIs, (etc.)
- Keep it honest — only things you'd accept a live coding question on

### 4. Projects
**Goal:** show range without wall-of-text.

Project cards, 2-col grid on desktop, 1-col on mobile. Each card:
- Project name + short tagline (1 line)
- 2–3 sentence description
- Tech stack tags
- Links: `GitHub` | `Live` | `itch.io` (show only what applies)
- Optional: screenshot or cover image

**Suggested projects to include:**
- ExpressVPN work (mention NDA, no screenshots — describe scope/scale)
- Router firmware UI (Vue.js)
- OttlerStudio mobile apps (Flutter) — note "available on request" if store links aren't live
- tuskat.itch.io games (Unity/C#) — itch.io link works
- Any open source or personal web projects on GitHub

### 5. Testimonials
**Goal:** let others say what you won't.

Same `rec-block` style as the CV — teal left border, subtle background.
Use the same two recommendations + optionally a third if you get one.
- George Safta — ExpressVPN
- Mark Ray-Smith — FLO Capital

### 6. Contact
**Goal:** remove all friction. No form — just click.

- Email (mailto link)
- LinkedIn
- GitHub: github.com/tuskat
- Illustration: cara.app/tuskat
- Games: tuskat.itch.io
- Studio: ottlerstudio.com
- Small note: preferred contact method (email? LinkedIn?)

---

## Things you hadn't listed but worth including

| Item | Why |
|---|---|
| **CV download button** (hero + contact) | Recruiters want the PDF, give it to them immediately |
| **Availability status badge** | "Open to opportunities" is a silent CTA. Easy to update one line |
| **Skills section** | Projects show *what* you built; skills show *how* you'll fit a JD |
| **Anchor nav** | Single-page with 6 sections needs a sticky mini-nav or at least smooth scroll anchors |
| **Meta / OG tags** | If the URL ever gets shared, `og:title`, `og:description`, `og:image` make it look intentional |
| **Mobile layout** | Recruiters absolutely open portfolios on their phone |
| **Project screenshots/covers** | Even placeholder art from your illustration side increases engagement dramatically |
| **"Currently working on"** (optional) | A one-liner in the hero or about that shows you're active — good signal |

---

## Tech stack for the portfolio itself

Given the CV is already raw HTML/CSS/JS and works well:
- Same stack: HTML + CSS + vanilla JS
- No framework needed for a single page
- Could use Astro if you want components/templating without a runtime — fits your stack
- Assets: keep it lightweight, no heavy JS bundles

---

## File structure (proposed)

```
portfolio/
  index.html
  style.css
  script.js
  assets/
    cv_dark.pdf
    cv_light.pdf
    projects/        ← screenshots
  resume/
    index.html
    style.css
    script.js
  export_cv.mjs
```

---

## Decisions

1. **About photo:** yes, real photo
2. **Projects:** 3 itch.io games (repos going public on tuskat), OttlerStudio mobile apps. Old GitHub repos exist but aren't featured — fine if people dig
3. **Nav:** sticky
4. **Stack:** Astro
5. **Other projects:** none — itch.io games + OttlerStudio only

---

## Projects list (final)

### Professional
- **ExpressVPN web estate** — NDA. Describe scope: 10 years, Rails → React migrations, CLP, CMS, router firmware UI, password manager extension. No screenshots.
- *(Router firmware UI is part of the above)*

### Games (tuskat)
- **R0D3nt** — Phaser 2 / JS platformer. Too many enemies to fight — lead them into traps and off cliffs. Survive.
- **Teddy's Crew** — Phaser 3 / TypeScript / Vue.js. Top-down arcade, endless waves, simple controls.
- **Road to Dakar** — Unity / C#. Endless racer inspired by Outrun, but with full 3D terrain and real car controls (not a side-scroller on rails).

### Studio (OttlerStudio)
- **Utility apps (Flutter)** — Password Generator, Cooking Timer, Flashlight, etc. Focus on single-purpose apps with better UX than what's on the market. WIP — not yet in stores. Link to ottlerstudio.com.

> NFT-era projects: add later as a separate mini-row if desired.

---

## About tone

Not corporate, not desperate. Language that signals:
- Craftsmanship and long-term thinking over shipping velocity
- Cares about the "why", not just the "when"
- Wants to work with people who are invested in the work, not just the quarter
- Doesn't need to say "no toxic startups" — the language does it implicitly

Draft opener:
> "I've spent a decade building things meant to last. The best work happened in teams where *why* mattered as much as *when* — where the person next to you was as invested in the craft as you were. That's the kind of place I do my best work."
