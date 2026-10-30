# Personal website

Personal site with a docs feel: a short readme about me, the work on its own
page, and the Saverr privacy policy. Built with [Astro](https://astro.build).
No UI framework and no JavaScript at all — three static HTML pages, one CSS
file.

## Commands

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
npm run preview  # serve dist/ locally
```

## Structure

```
src/
  layouts/Docs.astro          html shell, file-tree rail, page crumb
  pages/index.astro           readme — title, about, now, contact
  pages/work.astro            work — Saverr + smaller tools
  pages/saverr/privacy.astro  Saverr privacy policy (unlinked, noindex)
  pages/saverr/support.astro  Saverr support (unlinked, noindex)
  styles/docs.css             the whole theme (colours, type, layout)
public/
  image/apps/                 Saverr screenshots
  image/                      project screenshots
  favicon.ico
```

Routes: `/`, `/work`, plus `/saverr/privacy` and `/saverr/support`
(unlinked and noindex — these exist for the app stores).

### Editing content

- **Copy** lives in the page files: `index.astro` for the readme, `work.astro`
  for the apps, `saverr/privacy.astro` for the policy.
- **Navigation** (the file tree in the rail) is in `layouts/Docs.astro`.
- **Colours, type and spacing** are CSS variables at the top of
  `styles/docs.css`. The theme is dark only, on purpose.

## Deploy

Pushing to `main` triggers `.github/workflows/deployment-workflow.yml`, which
builds the site and publishes `dist/` to GitHub Pages.

Assets are referenced from the site root (`/image/...`), so the site expects to
be served from a domain root (the Pages custom domain, currently configured in
the repo's Pages settings — see the old CNAME entries in git history, e.g.
`bxuwebsite.link`). If you ever deploy it under a subpath such as
`https://<user>.github.io/home/`, set `base: "/home"` in `astro.config.mjs`
and make the image paths base-aware.

- The DNS resolver is linked to a Route53 resolver on AWS (there is an A record
  pointed at GitHub Pages' IPs).
- The SSL certificate is provisioned by GitHub Pages (managed through click
  ops). TODO: use IaC to deploy AWS templates (private GitHub repo + vault
  setup tbd).
