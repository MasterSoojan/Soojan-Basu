# Developer Workflow & Operational Guide

A step-by-step operational handbook for maintaining, updating, testing, and deploying the portfolio.

---

## 1. Local Development Setup

### Prerequisites
* **Node.js**: `v24 LTS` (recommended via nvm: `nvm use`).
* **npm**: `v10+`.
* **Git**: Installed and configured.

### Initial Setup
```bash
# Clone the repository
git clone https://github.com/MasterSoojan/Soojan-Basu.git
cd Soojan-Basu

# Clean install dependencies
npm ci

# Start the Vite development server
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser. Any changes to TypeScript, TSX, or CSS will hot-reload instantly.

---

## 2. Branching & Git Strategy

We maintain three active branches:

```text
main           ───●───●───────●─── (Production: triggers Netlify build)
                   \         /
testing             ●───●───●     (Feature sandbox: UI tweaks, reviews)
                     \
humanize_UI           ●───●       (HumanizeTech brand UI: Royal Blue & Lime Green)
```

* **`main`**: Production branch. Every push to `main` automatically triggers Netlify's build and deploys to [soojan-basu.netlify.app](https://soojan-basu.netlify.app/).
* **`testing`**: Sandbox branch for standard executive cyber/clean UI.
* **`humanize_UI`**: Specialized design branch adopting the [humanizetech.ai](https://www.humanizetech.ai/) design system (Royal Blue `#1460d0` to Lime Green `#7ec500` brand gradients, topbar 2px accent line, and accent-bar eyebrows).

### Switching Between Branches
```bash
# Work on new ideas
git checkout testing

# Test, lint, and build
npm run lint && npm run build

# Merge into main when ready
git checkout main
git merge testing
```
*(Remember: Never push or commit without explicit review!)*

---

## 3. Resume Synchronization Workflow

Whenever your resume is updated (new internship, new project, new certifications, updated CGPA):

1. **Replace PDF & Source Documents**:
   * Copy the newly exported PDF to both `public/Soojan_Basu_Resume.pdf` and root `Updated_Resume.pdf`.
   * Update `Updated_Resume.docx` if needed.
2. **Update the Content Module ([`src/content/portfolio.ts`](../src/content/portfolio.ts))**:
   * Update `profile`: role, location, or summary narrative.
   * Update `experience`: add or update internship entries, deliverables, and technology tags.
   * Update `projects`: update descriptions or add new contributions.
   * Update `skills`: append newly acquired languages, tools, or libraries.
   * Update `education`: update graduation status or coursework.
3. **Verify Locally**:
   ```bash
   # Run linter and typechecker
   npm run lint
   npm run typecheck

   # Test production build
   npm run build
   ```

---

## 4. Customizing Personal Assets

### Adding Your Personal Headshot / Photo
1. Place your square or portrait photo in `public/` (e.g. `public/soojan_basu.jpg`).
2. Open [`src/content/portfolio.ts`](../src/content/portfolio.ts) and set the `avatarUrl` field:
   ```typescript
   export const profile: Profile = {
     // ...
     avatarUrl: "/soojan_basu.jpg",
   };
   ```
3. The component in [`src/components/Hero.tsx`](../src/components/Hero.tsx) will automatically switch from displaying the initials monogram (`SB`) to displaying your photo with a sleek rounded frame and glowing border.

### Adding Project Repository & Live URLs
1. Open [`src/content/portfolio.ts`](../src/content/portfolio.ts).
2. Add repo and demo links to project entries (or update [`src/components/Projects.tsx`](../src/components/Projects.tsx) with action buttons).

### Tuning Theme Colors (HSL System)
Open [`src/index.css`](../src/index.css#L16-L19) and tweak the two root numbers:
```css
:root {
  --hue-blue: 216;   /* Change blue hue: 200 = Sky, 220 = Cobalt, 240 = Indigo */
  --hue-green: 168;  /* Change green hue: 150 = Emerald, 170 = Mint, 185 = Cyan */
}
```
All surfaces, gradients, glows, cards, and borders in both dark and light modes will re-harmonize automatically.

---

## 5. Continuous Deployment via Netlify

The live site is hosted at:
**[https://soojan-basu.netlify.app/](https://soojan-basu.netlify.app/)**

### How Netlify Deployment Works
1. Netlify is connected to your GitHub repository `MasterSoojan/Soojan-Basu`.
2. When code is pushed to `main`, Netlify automatically triggers a webhook.
3. Netlify spins up a cloud build runner, executes `npm run build`, and copies `dist/` directly to its global Edge CDN.
4. Deployment completes in $< 45\text{ seconds}$ with atomic, zero-downtime rollouts.
