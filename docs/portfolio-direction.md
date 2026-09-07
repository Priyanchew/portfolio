# Priyanchew.dev — local portfolio design

## Visitor experience

The first screen answers who Priyanshu is, what he works on, and how to contact him. Compact work entries show the four meaningful chapters with month-level dates; each expands to explain ownership and engineering scope. The longer history is optional. Two interactive folders reveal the projects inside Orydle and Osvi, introduced with “The side projects became the main quest.” A short follow-up explains that side projects are still underway and links to GitHub experiments, including college work. The personal section uses conversational copy and a small Fred again.. wristband detail, followed by a short paragraph. There is no separate personal-lore disclosure.

The latest direction from Priyanshu is a small amount of personal character with an employer-friendly first impression. His Zain screenshot is the strongest reference for simplicity. The page is deliberately edited down from the much larger set of interests and stories he supplied.

## References explored

- Zain: user-provided screenshot; sparse text, direct introduction, generous space, inline links.
- [Ronish](https://ronish.dev/): inspected the live v5 page and source for all five branches in the adjacent ronish.dev clone. v1 is a compact dark Astro page; v2 uses disclosures and small interactions; v3 is text and MDX with a serif font; v4 is a small personal introduction and work list; v5 uses restrained prose, compact rows, and personal postcards. The clearest fit here is v5’s hierarchy and v3’s personal tone.
- [Tamish](https://www.tamishm.com/): viewed in the browser and interacted with its button. Personal narrative, a textured scrapbook, imagery and playful details. The useful influence is specificity and character, kept much quieter here.
- [Paco](https://paco.me/): concise work and writing with personal interests in the same voice.
- [Rauno](https://rauno.me/): compact identity and attention to interaction details.
- Current explorations also included [Shirley Xu](https://www.shirleyxu.dev/) and [Pablo Míguez](https://www.pablomiguez.dev/); their larger showcase structures are less suited to this brief.

## Facts and editorial choices

- Current role, public engineering descriptions, contact links, writing, dates, portrait and company marks came from [Priyanshu’s existing portfolio](https://www.priyanchew.dev/) and its public source repository. Priyanshu subsequently specified the current Osvi role as Founder’s office, which supersedes the old public-site title. He supplied six areas of work: Chat Agents (features, scaling, optimization), Conductor / AI Agent Builder, Agent Evals and simulations, tool libraries and MCP integrations, account/user lifecycle, and general reliability/performance. The portfolio uses these directly, without inventing scale metrics, and ends the Osvi detail with “And I’m not done yet.”
- Priyanshu clarified that Orydle did not work out, the move from college to Bengaluru changed his view of startups, he became an AO core contributor, and now builds at Osvi. He subsequently supplied Osvi’s May 2026 start, AO’s March 2026 start and continued non-technical involvement, and Orydle’s approximate April 2026 end. The month-level timeline displays these alongside the existing August 2025 Orydle start and July 2024–January 2025 Carbon Crunch dates.
- Priyanshu clarified that he built Carbon Crunch’s early core product and that watching its founders lead and care deeply about a problem drew him into entrepreneurship.
- [Carbon Crunch’s public site](https://www.carboncrunch.in/) and [company story](https://carboncrunch.in/about-us) describe ESG/BRSR reporting, data collection, validation, and sustainability workflows. This establishes company context, not personal attribution. Individual ownership comes from Priyanshu’s account and existing public portfolio. Current company metrics and newer product modules have not been attributed to him.
- Coding at 12 and emailing Sam Altman with a friend to ask for GPT-3 access are user-provided. At his request, the introduction now focuses on LLMs, agents, and the systems around them. The email anecdote remains only in the optional longer story, without claiming that access was granted or that Sam replied.
- Interests are drawn from the conversation. The wristband is a small original graphic expressing his Fred again.. preference; it does not represent a particular concert or function as an audio player. Daman appears only in the personal section, not the introduction or social image. “Once, I wrote” is his requested writing heading.
- UI/UX Pro Max was set aside at Priyanshu’s explicit request. Design choices follow the references above.

## Implementation

Local clone: `/Users/priyanchew/workspace/priyanchew.dev`, branch `new`.

Run with `pnpm dev` on port 3022; preview the static export with `pnpm start` on port 3023. See the repository README for setup, validation, and deployment.

Shared identity, work history, project content, and writing live in `src/data/portfolio.ts`. Homepage implementation lives in `src/components/portfolio/home.tsx`, with project folders in `projects.tsx`, personal content in `after-hours.tsx`, the small footer graphic in `objects.tsx`, global shell in `shell.tsx`, and styling in `src/app/portfolio.css`. The font and portrait are local, so the homepage does not fetch fonts or media from third parties. The writing page uses the same published-article data as the homepage. The unused local-MDX stub and legacy template components/assets were removed. Document routes remain in place, with the existing encryption and access flow preserved.

The repository’s existing production build requires `OSVI_DOCS_ACCESS_KEY` to encrypt its protected document export. `pnpm build:check` uses a random temporary key passed only to its build subprocesses and verifies the encrypted document export by decrypting it back to the original source. A deployment must use the existing deployment secret; the temporary test key is not a deployment configuration.

## Details worth refining before publishing

- Add exact scale or performance metrics only if Priyanshu supplies figures he wants to publish.
- Review the first-person wording. It is an editorial draft based on the conversation, not a direct quote.

## Validation

- Dependency versions for Next.js, React, and Tailwind are retained. Unused template dependencies are removed; `serve` provides local static-export previews. Node.js 22 and pnpm 10.33.0 are shared with CI.
- Production build and TypeScript checks passed; all pages exported and the existing protected document was encrypted.
- Repository checks are `pnpm check` (ESLint and TypeScript) and `pnpm build:check` (static build and encrypted-document export verification).
- Browser checks covered desktop and a 390px mobile viewport, no horizontal overflow, loaded images, light/dark themes, work disclosures, project folders, keyboard close/focus handling, the longer story, and navigation to the existing writing page. The latest revision also checks month-level dates at narrow widths and the new social/project links.
- Social preview export verified as a PNG. The new icon and existing blog/document pages are present in the static export.

The redesigned branch is `new`, published at `https://priyanchew.dev/new/` with `NEXT_PUBLIC_BASE_PATH=/new`. The existing `master` application is independently built at the domain root. Successful push checks on `new` trigger the shared deployment workflow from `master`; both outputs are assembled into one Pages artifact. The Pages environment remains restricted to deployments from `master`. Local development stays at port 3022 without a base path.
