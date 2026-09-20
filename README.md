# Narayanan M S — Portfolio

Personal portfolio site built with React, Vite, Tailwind CSS and Framer Motion.
Live: https://narayanan-s-portfolio.netlify.app/

## Getting started

```bash
npm install
npm run dev      # local dev server
npm run build    # production build into dist/
npm run preview  # preview the production build
npm run lint     # eslint
```

## Add your profile photo

The hero shows an **NM** monogram until a photo exists. To use your own:

1. Download your photo (a square crop works best — at least 600×600).
2. Save it as `src/assets/profile.jpg` (`.jpeg`, `.png` and `.webp` also work).
3. Restart `npm run dev`.

Nothing else to change — [`ProfileImage.jsx`](src/components/ProfileImage.jsx) picks
the file up automatically and falls back to the monogram if it is missing.

## Contact form

Posts to Netlify Forms - see [DEPLOYMENT.md](DEPLOYMENT.md) for the one-time
notification setup. It only sends on a Netlify deploy; elsewhere it falls back to
opening the visitor's email app.

## Update your resume

Replace `src/assets/resume.pdf`. The Download Resume buttons in the navbar and
hero both link to it and are versioned by the build.

## Editing content

All text, links, projects, skills and experience live in one place:
[`src/data/portfolio.js`](src/data/portfolio.js). The components read from it, so
you can update the site without touching any JSX.

A few conventions in that file:

- A project's `link` or `github` set to `"#"` hides that icon on the card — fill
  in real URLs to make them appear.
- `featured: true` adds a star badge to a project.
- `type` must match one of the values in `projectFilters` for the filter tabs to work.

## Structure

```
src/
  components/    section components (Hero, About, Skills, ...)
  data/          portfolio.js — all site content
  hooks/         useTheme, useTypewriter, useActiveSection
  lib/           profilePhoto.js - resolves the photo for every avatar
  assets/        resume.pdf, profile.jpg, app icons
```
