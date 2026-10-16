# Soojan Basu — Developer Portfolio

[![Live Demo](https://img.shields.io/badge/Live%20Demo-soojan--basu.netlify.app-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)](https://soojan-basu.netlify.app/)
[![React](https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-8.1-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vite.dev/)
[![Accessibility](https://img.shields.io/badge/WCAG%202.1-AA%2FAAA-green?style=for-the-badge&logo=w3c&logoColor=white)](https://www.w3.org/WAI/standards-guidelines/wcag/)

A high-performance, accessible, and beautifully crafted personal engineering portfolio. Built with a tunable blue-green HSL design system, zero external third-party requests, and strict bundle size performance budgets.

🌐 **Production Deployment**: **[https://soojan-basu.netlify.app/](https://soojan-basu.netlify.app/)**

---

## ✨ Highlights & Architecture

* **Structured Deliverables Grid**: The AI Product internship experience is organized into a scannable 2-column architecture grid covering *Competitive Analysis Pipelines*, *Concurrent Async Scoring*, *Multi-Engine Fallbacks*, *Custom Full-Stack CMS*, and *AWS Edge Cloud Delivery*.
* **Tunable HSL Design System**: Procedural palette anchored on `--hue-blue: 216` and `--hue-green: 168`. Light mode is softened to a calming silver-slate surface (`hsl(216, 20%, 89%)`) to eliminate harsh white glare while preserving $> 11:1$ typographic contrast.
* **Floating Command-Bar Navbar**: Glassmorphic floating island dock with tactile pill links, glowing wordmark accent, smooth hover states, and keyboard-trapped mobile drawer.
* **Zero External Network Dependencies**: All fonts, SVGs, and resume documents are self-hosted and bundled locally. Zero CDNs, tracker scripts, or external telemetry.
* **Strict Performance Budgets**:
  * Decoded CSS: **29.94 kB** (strict budget $\le$ 30 KiB)
  * Decoded JavaScript: **211.74 kB** (strict budget $\le$ 250 KiB)
  * Third-party requests: **0**
* **Accessibility First**: Axe WCAG 2.1 AA/AAA compliant across light/dark modes and mobile/desktop viewports, featuring accessible skip navigation and `@media (prefers-reduced-motion: reduce)` support.

---

## 📚 In-Depth Documentation

Comprehensive technical documentation is organized in the [`docs/`](docs/) directory:

| Document | Description |
| :--- | :--- |
| **[System Architecture](docs/architecture.md)** | Architectural principles, component hierarchy, zero-flash theme engine, and HSL tokens. |
| **[Technology Stack](docs/tech_stack.md)** | Complete dependency breakdown, performance budgets, and project layout. |
| **[Mastering GitHub Actions](docs/github_actions.md)** | **Deep-dive CI/CD handbook**: workflow triggers, caching, concurrency, security, and production YAML pipelines. |
| **[Developer Workflow](docs/workflow.md)** | Operational guide covering branch management, resume syncing, photo/link customization, and Netlify deployment. |
| **[Future Plans & Roadmap](docs/future_plans.md)** | Planned portfolio upgrades, project links backlog, technical goals, and career milestones. |

---

## 🚀 Quick Start

### Prerequisites
* **Node.js**: `v24 LTS` (recommended via nvm: `nvm use`).
* **npm**: `v10+`.

```bash
# 1. Clone repository
git clone https://github.com/MasterSoojan/Soojan-Basu.git
cd Soojan-Basu

# 2. Install dependencies cleanly
npm ci

# 3. Start local development server
npm run dev
```

Visit [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🧪 Verification & Quality Commands

```bash
# Fast static analysis (< 35ms)
npm run lint

# Compile-time TypeScript validation
npm run typecheck

# Production build & tree-shaking
npm run build

# Preview production build locally on port 4173
npm run preview

# Run full end-to-end Playwright & Axe accessibility suite (18 tests)
npm test

# Run full pipeline audit (lint + typecheck + build + test)
npm run check
```

---

## 🔄 Deployment

The repository is configured with **continuous deployment** via Netlify:
* Pushing to `main` automatically triggers a build (`npm run build`).
* Output directory `dist/` is deployed to Netlify's global edge network.
* Live at: **[https://soojan-basu.netlify.app/](https://soojan-basu.netlify.app/)**

---

## 📄 License & Content

Portfolio content, project contributions, and resume information are property of **Soojan Basu**. Source code structure is open for reference.
