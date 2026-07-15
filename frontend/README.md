# Hair Design International — Frontend

A React single-page app for Hair Design International, a Hyde Park, Chicago salon (est. 1985). Built with
Vite, React Router, and Tailwind CSS, using the visual language from the `stitch/` mockups (Montserrat +
Inter, black/white with a safety-orange accent) and real content from `HDI_old/`.

## Stack

- **React 18** + **Vite** — app shell and dev/build tooling
- **React Router v6** — client-side routing across 5 pages
- **Tailwind CSS** — utility-first styling, themed via `tailwind.config.js` from the mockups' `DESIGN.md`
- **lucide-react** — icon set

## Pages

| Route | Page |
| --- | --- |
| `/` | Home — hero, hours/location bar, services teaser, hiring, CTA |
| `/services` | Full pricing menu grouped by category |
| `/contact` | Map, contact details, hours, inquiry form |
| `/covid-19` | Salon safety protocols |
| `/products` | Links to external retail partners (Salon Interactive, SalonHQ) |

## Getting started

```bash
npm install
npm run dev
```

The dev server runs at `http://localhost:5173`.

```bash
npm run build    # production build to dist/
npm run preview  # preview the production build locally
npm run lint      # lint the codebase
```

## Project structure

```
src/
  components/   Header, Footer, Button, ScrollToTop
  data/         site.js (contact info, hours, nav) and services.js (pricing)
  pages/        one file per route
  index.css     Tailwind entry + base styles
  App.jsx       routes
  main.jsx      React Router + app mount
```

Business content (address, phone, hours, service pricing, product retailer links, COVID-19 protocol
copy) is transcribed from `HDI_old/`. Update `src/data/site.js` and `src/data/services.js` to change it —
no HTML edits required.

## Known gaps before launch

- **Photography**: no licensed photos were available in this repo, so the hero and section backgrounds
  use color/gradient treatments instead of the lifestyle photography shown in the `stitch/` mockups. Drop
  real photos into `src/assets/` and swap them into `Home.jsx` when available.
- **Contact form**: the form on `/contact` is UI-only (per "no backend yet"). Wire `handleSubmit` in
  `src/pages/Contact.jsx` to a form service (Formspree, EmailJS) or a serverless function to actually
  deliver messages.
- **Booking**: "Book Now" buttons currently link to `/contact`. Swap in a real booking provider link when
  one is chosen.

## Deploying to Vercel

1. Push this repo to GitHub/GitLab/Bitbucket.
2. In Vercel, "Add New Project" and import the repo, setting the project root to `frontend/` if the repo
   contains more than this app.
3. Framework preset: **Vite**. Build command `npm run build`, output directory `dist` (Vercel detects
   these automatically).
4. `vercel.json` is included with a catch-all rewrite to `index.html` so client-side routes (e.g.
   `/services`) work on refresh and direct navigation.
5. Deploy. No environment variables are required for the current static build.

### Vercel CLI (optional)

```bash
npm i -g vercel
vercel        # preview deploy
vercel --prod # production deploy
```
