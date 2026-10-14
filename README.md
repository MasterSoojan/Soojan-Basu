# Soojan Basu — portfolio

The maintained portfolio: React, TypeScript, Vite, and a blue/cyan visual system with light and dark themes. Content comes from the supplied resume. No backend, credentials, or environment variables are required.

## Develop and verify

Use Node.js 24 LTS and npm (`.nvmrc`). Node 26 also passed the local checks.

```sh
npm ci
npm run dev
npm run check
```

For first-time browser testing, run `npx playwright install chromium`. `check` runs Oxlint, TypeScript (including tests and tool configuration), the production build, one content/component regression and 17 browser journeys against the development server (18 tests total). Check the built site separately (Bash/POSIX syntax):

```sh
npm run build
PLAYWRIGHT_USE_PRODUCTION=true npm test
```

Tests start their own development/preview server on port 4173; keep that port free. The production mode serves the existing `dist/`, so rebuild after source changes and never rebuild during a production test run. Screenshots and traces go in ignored `test-results/`. No test needs credentials or activates external profile links.

## Content and architecture

- `src/content/portfolio.ts`: profile, experience, project contributions, skills, and education. Update this when the resume changes. The Hero's split name, current-role/company summary and graduation year read this module too; keep the current experience entry first. Static search/social metadata in `index.html` remains a separate HTML entry-point concern and should be reviewed with an identity change.
- `src/components/`: one component per section; `App.tsx` assembles the page.
- `src/index.css`: shared semantic theme tokens and responsive section styles.
- `index.html`: metadata and a small pre-render theme initializer; `src/hooks/useTheme.ts`: system, explicit choice and cross-tab preference handling. Local storage is optional: failed writes preserve the chosen theme for the current mounted visit, not across reloads. Clearing the preference in another tab restores system-following behavior.
- `SiteHeader`: navigation and keyboard focus. Opening the mobile menu focuses its first link; choosing a section focuses that destination, and Escape closes an open menu and returns focus to its toggle. Sections use negative tab indices, not extra stops in the normal Tab order.
- `Updated_Resume.docx`: editable resume source. `Updated_Resume.pdf`: supplied export.
- `public/Soojan_Basu_Resume.pdf`: public download. Replace this alongside the exported PDF.
- `tests/portfolio.spec.ts`: a component regression that changes synthetic content to detect hard-coded Hero facts, plus navigation, mobile layout, theme persistence/failure/system/cross-tab behavior, pre-render theme selection, keyboard access, PDF/no-JavaScript fallback, local links/resources, and axe WCAG 2 A/AA + 2.1 A/AA checks in both themes at 375px and 1440px. Automated checks are not a complete accessibility audit.

Projects describe the contributions in the supplied resume, including historical versions of Credify and DisasterReady. They do not claim that the present workspace uses those historical stacks. Project demo/repository buttons are omitted until their URLs and versions are confirmed. Profile social links come from the DOCX hyperlinks. Personal telephone/address details are not repeated on the page; the downloadable resume is the supplied document.

## Performance and link review

Production tests cap initial loaded JavaScript at **250 KiB** and CSS at **30 KiB**, measured as decoded response bytes, and verify that page loading makes no third-party requests. These are bundle-size regression budgets, not real-device performance guarantees. The resume is fetched on demand rather than loaded with the page.

For a [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview) review, build and run `npm run preview`, then audit that localhost URL in Chrome DevTools using mobile and desktop settings. Repeat with light and dark system preferences, confirming the actual theme after each navigation. Record results, browser/tool versions and limitations in the root Project Pulse; do not commit generated reports. A localhost audit does not test hosting latency, caching/security headers, indexing, real visitor Core Web Vitals or screen-reader usability. Unused React code and the CSS request can remain diagnostic suggestions even with a high performance score; do not rewrite the app solely to remove those suggestions.

The public `robots.txt` allows crawling; it is not access control. Add canonical/site-map metadata only after the actual deployment URL is confirmed. A reachable profile or similarly named public repository does not establish that it is the intended historical project version. Keep project buttons absent until that mapping is approved; automated LinkedIn blocking is not proof of a broken profile.

## Deployment

`npm run build` produces `dist/`; deploy it to a static host such as Vercel or Netlify, with build command `npm run build` and output directory `dist`. There are no client-side routes requiring rewrite rules. This configuration assumes deployment at the domain root. Run `npm run preview` to check the build locally.

The old Next.js portfolio remains frozen in `../(Archived) RESUME`. Maintain this application only. To review the design, check both themes, keyboard focus, 375px and desktop widths, reduced motion, and the download. No simulated loading screen or hidden project content is used.
