# Debaprakash Portfolio

This repository is a React + TypeScript + Vite portfolio site. I added CI, tests, e2e, and SEO improvements to prepare for production.

## Quick commands

- Install deps: `npm ci`
- Start dev server: `npm run dev`
- Run lint: `npm run lint`
- Run unit tests: `npm run test`
- Run tests (CI mode): `npm run test:ci`
- Run e2e tests (Playwright): `npm run test:e2e`
- Build for production: `npm run build`
- Preview production build: `npm run preview`

## What I added

- GitHub Actions CI: lint, tests, build, and audit (`.github/workflows/ci.yml`) ✅
- Unit testing with Vitest and React Testing Library ✅
- Playwright e2e scaffold and a simple smoke test ✅
- Husky pre-commit hook with lint-staged for formatting and linting ✅
- SEO updates: meta tags, Twitter card, `manifest.json`, `robots.txt` and `sitemap.xml` ✅
- Favicon files and PWA manifest ✅

## Notes

- ESLint `react-refresh/only-export-components` rule is enabled globally and **some complex component files** have a file-level disable because refactoring them into submodules would be a larger change. Consider splitting large UI files to satisfy this rule for stricter enforcement.
- `@testing-library/react` has peer dependency expectations for React 18 — I've installed compatible testing packages and avoided breaking upgrades. If you want, I can migrate the project to React 18 or update test libraries when they officially support React 19.

---

If you'd like, I can now:
- add more component tests (unit + snapshot) ✅
- add Playwright CI to run e2e on merges ✅
- add sitemap generation and dynamic OG images ✅
