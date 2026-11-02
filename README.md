# CECAN Ltd website

This repository contains the CECAN Ltd website. The site describes the
company's consultancy, evaluation, systems thinking and training work, and
includes information about the team, case studies, Participatory Systems
Mapping, contact details, the privacy policy and the carbon reduction plan.

## Technology

- [Astro](https://astro.build/) for the site and its pages
- The Astro Cloudflare adapter and [Wrangler](https://developers.cloudflare.com/workers/wrangler/) for Cloudflare Workers deployment
- Astro components, Markdown pages, and static assets in `src/` and `public/`

The Cloudflare Worker and static asset configuration is in `wrangler.jsonc`.

## Requirements

- Node.js 22.12.0 or later
- npm

## Getting started

Install dependencies and start the local development server:

```sh
npm ci
npm run dev
```

Astro prints the local URL when the development server starts.

## Available commands

Run these commands from the repository root:

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Astro development server |
| `npm run build` | Build the site for production into `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run astro -- <command>` | Run an Astro CLI command |
| `npm run generate-types` | Generate Cloudflare Worker types with Wrangler |

## Project structure

```text
public/          Static files served as-is
src/
  components/    Shared Astro components
  images/        Images used by the site
  layouts/       Shared page layouts
  pages/         Site pages and Markdown content
  scripts/       Browser-side scripts
  styles/        Site-wide styles
astro.config.mjs Astro and Cloudflare adapter configuration
wrangler.jsonc   Cloudflare Worker and static asset configuration
```

Pages are defined in `src/pages/`: the home page, About, What We Do, Case
Studies, Contact, Carbon Reduction Plan, Participatory Systems Mapping, and
Privacy Policy.
