<!-- Project-specific Copilot / AI agent instructions -->
# Guidance for AI coding agents working on this repository

This file contains concise, actionable notes to help an AI coding assistant be productive immediately in this React + TypeScript + Vite codebase.

Key facts
- Project type: React + TypeScript app scaffolded for Vite (see `package.json` and `vite.config.ts`).
- Entry: `src/main.tsx` mounts `App` -> routing defined in `src/App.tsx`.
- Data: central in-memory dataset located at `src/data.ts` (exports `apps`, `aiModels`, `allApps`). Treat `allApps` as the canonical source of items shown in UI.
- Routing: React Router v6 nested routes. Main routes:
  - `/` -> `HomePage`
  - `/category/:categoryId` -> `CategoryPage`
  - `/product/:productId` -> `ProductPage`

Architecture and important patterns
- Single-page client app with no backend in this repo. All product data is static in `src/data.ts` (arrays of App objects). Changes to content should usually edit that file.
- Components are small, presentational, and CSS-driven. Key components to reference:
  - `src/components/Layout.tsx` — global layout, keyboard shortcut for search (Ctrl+K) and an `Outlet` for nested routes.
  - `src/components/Header.tsx`, `Footer.tsx`, `SearchModal.tsx` — header and search UX. Search filtering is implemented client-side by string matching in `SearchModal.tsx` (see how `apps` and `aiModels` are filtered).
  - `src/components/AppCard.tsx` — canonical card used across category and product listings; follow its structure when adding new cards.
- Styling: global CSS files under `src/` and per-component CSS alongside components (e.g. `AppCard.css`, `HomePage.css`). Keep class names consistent; many styles rely on CSS custom properties (see `index.css`, `App.css`).

Conventions and examples
- Data shape: `src/data.ts` defines the `App` and `SubModel` interfaces at top — follow these fields when adding items. Example item: `id`, `name`, `logoUrl`, `size`, `rating`, `officialPrice`, `ourPrice`, `features`, `healthCheck`, `category`, optional `subModels`.
- Navigation: use `useNavigate()` or `Link` from `react-router-dom`. Example: `onClick={() => navigate(`/product/${app.id}`)}` (see `AppCard.tsx`).
- Search: `SearchModal` filters across `apps` and `aiModels` by lowercased substring checks against `name`, `category`, `features`, and `bestFor`.
- Keyboard shortcuts: Layout listens for Ctrl+K to open search and Escape to close. If adding global shortcuts, wire them in `Layout.tsx` to keep behavior consistent.

Developer workflows (how-to)
- Run dev server: `npm run dev` (uses Vite with HMR).
- Build: `npm run build` (runs `tsc -b && vite build`). Note: project uses a TypeScript build step via `tsc -b`; keep types consistent to avoid build failures.
- Preview production build: `npm run preview`.
- Lint: `npm run lint` (ESLint configured via `eslint.config.js`).

Testing and validation guidance for agents
- There are no unit tests in the repo. Quick checks an agent should perform after edits:
  - Type-check: run `npx tsc -b` (this repo references `tsconfig.app.json` and `tsconfig.node.json`).
  - Dev run: `npm run dev` to verify UI changes in the browser.
  - Lint: `npm run lint` to catch stylistic issues.

Integration points & external dependencies
- External libs in `package.json`: `react`, `react-dom`, `react-router-dom`, `lucide-react` (icons), Vite + React plugin, ESLint + TypeScript. No server, API keys, or CI workflows present in this repo.
- Payments & support flows are simulated in UI (e.g., `ProductPage` builds an M-Pesa message and opens `https://wa.me/` links). These are static and purely client-side.

Common change patterns for PRs
- Content updates: prefer editing `src/data.ts`. Keep ids stable when possible.
- UI additions: add component + CSS side-by-side in `src/components/` and import where needed. Follow patterns used in `AppCard` and `SearchModal` for props & navigation.
- Accessibility: inputs use native input elements; preserve focus behavior (e.g., `SearchModal` focuses the input on mount).

Edge cases agents should watch for
- Many strings in `src/data.ts` include emoji, multi-part categories (commas), and trailing whitespace—use exact equality only when intentional.
- Category names are matched verbatim (`app.category === categoryId`) — when adding categories, ensure route-encoded links match exact category strings used in data.

If you modify build or dependencies
- Update `package.json` and don't remove the `tsc -b` build step. If adding devDependencies, ensure `npm install` will work in the environment.

Files worth reading for context (examples to cite)
- `src/data.ts` — canonical data model and app catalog
- `src/App.tsx` — routing
- `src/components/Layout.tsx` — global keyboard & search behavior
- `src/components/SearchModal.tsx` — search/filter logic
- `src/components/AppCard.tsx` and `src/pages/ProductPage.tsx` — card layout and product purchase flow

When in doubt
- Prefer small, local changes. For content fixes, edit `src/data.ts`. For UI behavior, follow patterns in `Layout` + `SearchModal`.

If you need clarification or want me to include examples or code snippets for a specific task, tell me which file or change and I will update this guidance.
