# Amani Sadique — Portfolio (React + plain CSS)

This is a React rebuild of the portfolio site — same look and behavior,
but the markup is now componentized and the styling is a single hand-written
CSS file (`src/styles.css`) instead of Tailwind utility classes.

## Getting started

```bash
npm install
npm run dev       # local dev server with hot reload
npm run build     # production build → dist/
npm run preview   # preview the production build locally
```

## Project structure

```
src/
  main.jsx              entry point
  App.jsx                top-level layout, holds modal open/close state
  styles.css              all styling — no Tailwind, no CSS-in-JS
  data/
    projects.js           the 4 project entries shown in Work + the modal
  components/
    Nav.jsx                nav bar + mobile menu
    Hero.jsx                hero section
    Work.jsx                filter buttons + project grid
    ProjectCard.jsx          a single project card
    Capabilities.jsx         "Capabilities" 3-column section
    About.jsx                About section
    Testimonials.jsx         testimonial cards
    Contact.jsx              contact form (not wired to a backend yet)
    Footer.jsx               footer
    ProjectModal.jsx          case-study modal (UX + Full-Stack templates)
```

## Editing content

- **Project data** (titles, client/role, stack, write-up text, links):
  edit `src/data/projects.js`. Every placeholder string starts with
  "Add" or "Replace with" — search for those to find what still needs
  your real content.
- **Contact form**: currently shows a placeholder message on submit
  (see `handleSubmit` in `Contact.jsx`). Wire it up to Formspree, EmailJS,
  or your own API endpoint when ready.
- **Images**: project card/modal images come from `image` fields in
  `projects.js` — set to `null` for a text placeholder box, or a URL
  string to show a real image.

## Styling

All styles live in `src/styles.css`, organized by component (search for
`/* ---------- SectionName ---------- */` comments). Color tokens, fonts,
and easing curves are defined once as CSS custom properties at the top
of the file (`:root { ... }`) — change a value there to restyle
site-wide rather than hunting through every rule.

## Deploying

This is a completely standard Vite + React app. To deploy on Vercel:

```bash
npx vercel
```

Vercel auto-detects the Vite framework and builds/deploys `dist/`
automatically — no config needed.
