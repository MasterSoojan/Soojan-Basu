# Technology Stack & Tooling

A detailed breakdown of the runtime dependencies, build pipeline, testing framework, and production deployment infrastructure powering the portfolio.

---

## 1. Core Stack

| Layer | Technology | Version | Rationale |
| :--- | :--- | :--- | :--- |
| **Framework** | [React](https://react.dev/) | `^19.2.7` | Modern functional component model, fast reconciler, zero boilerplate. |
| **Language** | [TypeScript](https://www.typescriptlang.org/) | `~6.0.2` | Strict compile-time type safety across data schemas and component props. |
| **Bundler & Dev Server** | [Vite](https://vite.dev/) | `^8.1.5` | Instant HMR in development, Rollup-based tree-shaking production builds. |
| **CSS & Design Tokens** | Vanilla CSS + [Tailwind CSS](https://tailwindcss.com/) | `^4.3.3` | Custom HSL design token architecture with zero CSS bloat. |
| **Linter** | [Oxlint](https://oxc.rs/docs/guide/usage/linter.html) | `^1.71.0` | Ultra-fast Rust-based linter executing 100+ rules in $< 35\text{ ms}$. |
| **Testing** | [Playwright](https://playwright.dev/) | `^1.63.0` | Full-fidelity headless browser testing across mobile and desktop viewports. |
| **Accessibility Engine** | [Axe Core Playwright](https://github.com/dequelabs/axe-core-npm/tree/develop/packages/playwright) | `^4.13.0` | Automated WCAG 2.1 AA/AAA accessibility rule verification. |
| **Hosting & CDN** | [Netlify](https://www.netlify.com/) | Live | Edge CDN global distribution with automated atomic git deployments. |

---

## 2. Production Performance Budgets

The build is constrained by strict automated test assertions (`tests/portfolio.spec.ts`):

```typescript
// Enforced in production test suite:
expect(scriptBytes).toBeLessThanOrEqual(250 * 1024); // <= 250 KiB
expect(styleBytes).toBeLessThanOrEqual(30 * 1024);   // <= 30 KiB
expect(externalRequests).toEqual([]);               // 0 third-party requests
```

### Measured Production Asset Sizes

| Asset | Uncompressed Size | Gzip Compressed | Budget Limit | Status |
| :--- | :--- | :--- | :--- | :--- |
| **JavaScript (`dist/assets/*.js`)** | ~211.74 kB | ~66.58 kB | 250.00 KiB | **PASSED (38.26 KiB Headroom)** |
| **CSS (`dist/assets/*.css`)** | ~29.94 kB | ~6.80 kB | 30.00 KiB | **PASSED (Headroom preserved)** |
| **HTML (`dist/index.html`)** | ~1.63 kB | ~0.75 kB | — | Lightweight entry point |

---

## 3. Directory Layout

```text
RESUME2/
├── docs/                       # Comprehensive documentation
│   ├── architecture.md         # Design principles, tokens & component tree
│   ├── tech_stack.md           # Tooling, dependencies & performance metrics
│   ├── github_actions.md       # Complete GitHub Actions & CI/CD guide
│   └── workflow.md             # Developer workflow, resume sync & deployment
├── public/                     # Static unbundled assets
│   ├── favicon.svg             # Neon cyan monogram brand icon
│   ├── robots.txt              # Search crawler directives
│   └── Soojan_Basu_Resume.pdf  # Downloadable PDF resume
├── src/
│   ├── assets/                 # Local media assets
│   ├── components/             # Focused UI components
│   │   ├── Contact.tsx         # CTA, direct email link & SiteFooter
│   │   ├── Education.tsx       # Degree, coursework & hackathons
│   │   ├── Experience.tsx      # Structured 2-column architecture cards
│   │   ├── Hero.tsx            # Headline, monogram/avatar & quick facts
│   │   ├── Personal.tsx        # Extracurriculars, chess & cricket
│   │   ├── Projects.tsx        # Project contributions & circuit art
│   │   ├── SectionHeading.tsx  # Shared accessible section headers
│   │   ├── SiteHeader.tsx      # Floating command-bar & mobile navigation
│   │   └── Skills.tsx          # Categorized technical capability chips
│   ├── content/
│   │   └── portfolio.ts        # Typed single source of truth for all data
│   ├── hooks/
│   │   └── useTheme.ts         # Resilient dark/light theme engine
│   ├── App.tsx                 # Root application composition & skip link
│   ├── index.css               # HSL design tokens, component styles & responsive queries
│   └── main.tsx                # React DOM entry point
├── tests/
│   └── portfolio.spec.ts       # 18 end-to-end integration & accessibility tests
├── index.html                  # HTML5 shell with pre-render theme bootstrap
├── package.json                # Project dependencies & scripts
├── playwright.config.ts        # Playwright test harness configuration
├── tsconfig.json               # TypeScript project reference settings
└── vite.config.ts              # Vite bundling & plugin configuration
```

---

## 4. Key Scripts & Commands

| Command | Action | Execution Details |
| :--- | :--- | :--- |
| `npm run dev` | Starts local dev server | Runs Vite on port `5173` with instant Hot Module Replacement (HMR). |
| `npm run lint` | Runs Oxlint linter | Analyzes all 16 TypeScript/TSX files in $< 35\text{ ms}$. |
| `npm run typecheck` | Type checks codebase | Executes `tsc -b` to validate strict typing without emitting files. |
| `npm run build` | Builds for production | Compiles and tree-shakes into `dist/` with minified CSS and JS. |
| `npm run preview` | Previews production build | Serves the `dist/` folder on local port `4173` to test production assets. |
| `npm test` | Runs Playwright tests | Runs 18 browser journeys and Axe accessibility checks against the build. |
| `npm run check` | Full pipeline audit | Sequentially runs linting, typechecking, building, and all 18 tests. |
