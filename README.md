# priyanchew.dev

Priyanshu Choudhary’s personal portfolio: AI agents, product engineering, open source, and a little life outside work.

[Current site](https://priyanchew.dev) · [Redesign preview](https://priyanchew.dev/new/) · [Redesign branch](https://github.com/Priyanchew/portfolio/tree/new)

Built with Next.js 16, React 19, TypeScript, and Tailwind CSS 4. The site exports to static HTML for GitHub Pages. The portrait, font, company marks, and artwork are local assets.

## Run locally

Use Node.js 22 (see `.nvmrc`) and pnpm 10.33.0 (pinned in `package.json`).

```sh
git clone --branch new https://github.com/Priyanchew/portfolio.git
cd portfolio
corepack enable
pnpm install --frozen-lockfile
pnpm dev
```

Open [localhost:3022](http://localhost:3022). `corepack enable` is only needed if pnpm is not already available. The development server binds to this computer’s loopback address.

## Commands

| Command | Purpose |
| --- | --- |
| `pnpm dev` | Develop with live updates on port 3022. |
| `pnpm check` | Run ESLint and TypeScript checks. |
| `pnpm icons:generate` | Export the three favicon options, default browser/mobile icons, and comparison image. |
| `pnpm lint:fix` | Apply ESLint’s automatic fixes. |
| `pnpm build:check` | Build and verify the static export using an ephemeral document key. |
| `NEXT_PUBLIC_BASE_PATH=/new pnpm build:check` | Verify the deployment under `/new/`, including prefixed assets, links, and metadata. |
| `pnpm build` | Create the production export with `OSVI_DOCS_ACCESS_KEY` supplied in the environment. |
| `pnpm start` | Preview an existing `out/` export at [localhost:3023](http://localhost:3023). |

For a local production-style preview:

```sh
pnpm check
pnpm build:check
pnpm start
```

The static preview uses [serve](https://github.com/vercel/serve). Next.js’s server-mode `next start` is not used because this project exports static files.

## Edit the portfolio

| File | What to edit |
| --- | --- |
| [`src/data/portfolio.ts`](src/data/portfolio.ts) | Identity, social/contact links, work dates and descriptions, project folders, and writing links. Shared by the homepage, writing page, and metadata. |
| [`src/components/portfolio/home.tsx`](src/components/portfolio/home.tsx) | Introduction, longer story, section order, and contact copy. |
| [`src/components/portfolio/after-hours.tsx`](src/components/portfolio/after-hours.tsx) | Personal interests and the Fred again.. wristband. |
| [`src/components/portfolio/local-time.tsx`](src/components/portfolio/local-time.tsx) | Live local time, always formatted for `Asia/Kolkata` and labelled IST. |
| [`src/components/portfolio/projects.tsx`](src/components/portfolio/projects.tsx) | Project-folder interaction and side-project note. |
| [`src/components/portfolio/shell.tsx`](src/components/portfolio/shell.tsx) | Shared header, navigation, and theme toggle. |
| [`src/app/portfolio.css`](src/app/portfolio.css) | Colors, typography, responsive layouts, and component styles. |
| [`src/app/globals.css`](src/app/globals.css) | Tailwind theme mappings and shared base rules. |
| [`src/app/opengraph-image.tsx`](src/app/opengraph-image.tsx) | Generated social preview. |
| [`src/app/icon.svg`](src/app/icon.svg) | Site icon. |
| [`public/favicons/`](public/favicons/) | Monogram, coast, and pixel options. Edit the SVG sources, then run `pnpm icons:generate`. |
| [`src/lib/site-metadata.ts`](src/lib/site-metadata.ts) | Search descriptions, social cards, authorship, and icon metadata. |
| [`src/lib/structured-data.ts`](src/lib/structured-data.ts) | Profile/Person and writing collection JSON-LD, based on the visible content. |
| [`public/`](public/) | Portrait, font, company logos, custom domain, and document sources. |

The work dates and descriptions are maintained in one place. The old resume template, sample employers, unused UI components, and unused MDX pipeline have been removed. Writing currently links to published articles; add entries to `writing` in the shared data file. There are no local MDX article routes.

Design references and editorial decisions are recorded in [`docs/portfolio-direction.md`](docs/portfolio-direction.md).

## Routes

- `/` — portfolio, expandable work entries, project folders, personal section, and contact.
- `/blogs/` — published writing.
- `/docs/` — document index.
- `/docs/osvi/` — existing OSVI document access page.
- `/robots.txt` and `/sitemap.xml` — search metadata. OSVI documents are excluded from the sitemap and marked against indexing.

## Static export and documents

`next.config.mjs` enables static export, trailing-slash directory routes, and unoptimized images. Build output is written to `out/`. Upload the contents of that directory to a static host; dependencies and a Node server are not needed at runtime. `public/CNAME` contains `priyanchew.dev`, and `.nojekyll` is retained for GitHub Pages.

The production build runs [`scripts/protect-osvi-docs.mjs`](scripts/protect-osvi-docs.mjs) after Next.js. It encrypts the exported copies of `public/docs/osvi/*.html` and requires `OSVI_DOCS_ACCESS_KEY` in the build environment. Keep the existing production key in GitHub Actions secrets. Encryption applies to exported files; the source HTML remains in this Git repository.

`pnpm build:check` uses a random key that is never printed or saved. It checks the expected exported routes and verifies that every encrypted document decrypts back to its source. This is a validation build: use the production workflow to build an artifact with the real deployment key.

## Two versions on GitHub Pages

The deployment combines two independent builds into one Pages artifact:

- `master` at `https://priyanchew.dev/`.
- `new` at `https://priyanchew.dev/new/`.

The `new` build sets `NEXT_PUBLIC_BASE_PATH=/new`. Next.js handles route links; `src/lib/site-path.ts` prefixes public images and native document links. Local development keeps the base path empty, so the usual preview remains at `http://localhost:3022/`.

After a successful **push** check on `new`, the deployment workflow runs from `master`, builds both versions, and publishes them together. This keeps the Pages environment’s existing master-only deployment policy. A root update also rebuilds both versions. To deploy manually, dispatch the deployment workflow on `master`.

The workflow file is kept in sync on both branches. Deployments do not merge the redesigned application into `master`; its existing root application is built separately.

## Icons and search metadata

The default favicon is the olive `p.` monogram. [Compare all three options](docs/favicon-options.png). `pnpm icons:generate` exports SVG, PNG sizes from 16 to 512 pixels, a multi-size ICO, and an Apple touch icon. The master branch uses the same ICO because Google Search chooses one favicon per hostname.

Canonical and social URLs use `https://www.priyanchew.dev`, matching the domain redirect. Each public page has its own social title, description, and URL. The card is served at `/new/social-card.png` so GitHub Pages supplies `image/png`; the old `/new/opengraph-image` route remains available for existing links.

The manifest keeps icons and home-screen bookmarks under the deployment base path. The IST clock renders a neutral placeholder in the static export and updates in the browser, so the build time never appears as the current time.

The domain-level `public/robots.txt` and `public/sitemap.xml` live on **master**. The sitemap lists the root and `/new/` portfolios and their writing pages. The redesign also exports its own sitemap. Private document paths are excluded from the sitemap and blocked by the root crawler rules; the private index retains `noindex, nofollow`. Robots rules are crawler guidance, not access control.

## GitHub Actions

- [`checks.yml`](.github/workflows/checks.yml) validates both empty and `/new` base paths on `new`, `master`, `main`, and pull requests. It needs no production secrets.
- [`deploy.yml`](.github/workflows/deploy.yml) runs from `master` on a root push, a successful same-repository push check on `new`, or manual dispatch. Its root/new build jobs encrypt documents using the existing `OSVI_DOCS_ACCESS_KEY`, then assemble a single Pages artifact.
- CI uses Node.js 22, pnpm 10.33.0, and frozen lockfiles. Both versions must build successfully before deployment.

## License and attribution

[MIT](LICENSE). This project originated from [Dillion Verma’s portfolio](https://github.com/dillionverma/portfolio); the original license notice is retained. The current portfolio’s content, layout, and interactions are customized for Priyanshu.
