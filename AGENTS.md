# LAWS OF AGILE - PROJECT KNOWLEDGE BASE

**Generated:** 2026-01-14T05:00:00Z
**Commit:** 591cb0c
**Branch:** main

## OVERVIEW

Static React site displaying software engineering heuristics ("Laws") organized by DevOps Three Ways. React 19 + Vite 6 + TypeScript 5.8 + Tailwind CSS 3.

## STRUCTURE

```
lawsofagile/
├── App.tsx             # Root: custom routing + theme context
├── index.tsx           # React entry point (imports index.css)
├── index.css           # Tailwind directives + custom CSS vars
├── tailwind.config.js  # Tailwind configuration
├── postcss.config.js   # PostCSS for Vite
├── types.ts            # All type definitions (Law, Route, etc.)
├── data.ts             # Exports: categories, laws, ways, contributors
├── content/
│   └── laws.ts         # Law content as YAML frontmatter + markdown body
├── utils/
│   └── markdown.ts     # parseLaw(): YAML frontmatter parser
├── components/         # Presentational (10 files)
├── pages/              # Home, Info, LawDetail
├── index.html          # Entry HTML (fonts only, no CDN)
└── vite.config.ts      # Path alias: @/* -> root
```

## WHERE TO LOOK

| Task | Location | Notes |
|------|----------|-------|
| Add new law | `content/laws.ts` | Add markdown string to `lawsContent[]` array |
| Modify law schema | `types.ts` → `Law` interface | Update `parseLaw()` if frontmatter changes |
| Change routing | `App.tsx` | Custom context-based, no react-router |
| Dark mode logic | `App.tsx` | `darkMode` state, toggles `dark` class on `<html>` |
| Primary color | `index.css` | CSS var `--color-primary` |
| Tailwind config | `tailwind.config.js` | Standard config file |
| Icons | `components/Icon.tsx` | Google Material Symbols Outlined |

## CONVENTIONS

### Routing (NON-STANDARD)
- **No react-router**. Custom `NavigationContext` in `App.tsx`
- Routes: `{ page: 'home' | 'info' | 'law', lawId?: string }`
- Navigate: `navigateTo({ page: 'law', lawId: 'conways-law' })`

### Content Model
- Laws stored as template literal strings in `content/laws.ts`
- Format: YAML frontmatter (`---`) + markdown body
- Parsed by `utils/markdown.ts` using `js-yaml`

### Styling
- Tailwind CSS 3 via npm (postcss + autoprefixer)
- Config in `tailwind.config.js`
- CSS in `index.css` with `@tailwind` directives
- Dark mode: `darkMode: "class"` strategy
- Typography: Inter font (Google Fonts CDN)
- Primary colors: Blue (#0000FF light / #60A5FA dark) via CSS variables in `index.css`

### File Headers
Many files have header comments:
```typescript
// Author: Senior Frontend Engineer
// OS support: Mac/Linux/Windows
// Description: ...
```
Pattern is optional but present in core files.

### Path Aliases
```typescript
import { Law } from '@/types';  // @ = project root
```

## ANTI-PATTERNS

| DO NOT | REASON |
|--------|--------|
| Use Tailwind CDN | Project uses npm-based Tailwind with tree-shaking |
| Add react-router | Custom routing intentional, context-based |
| Modify frontmatter without updating `Law` type | Runtime parse errors |

## COMMANDS

```bash
npm install          # Install dependencies
npm run dev          # Dev server on port 3000
npm run build        # Production build (includes Tailwind purge)
npm run preview      # Preview production build
npx tsc --noEmit     # Type check
```

## NOTES

- **No tests** - No testing framework configured
- **No CI/CD** - No `.github/workflows`
- **No linting** - No eslint/prettier configs
- **AI Studio origin** - Originally generated via Google AI Studio
- **GEMINI_API_KEY** - Referenced in vite.config.ts but not used in current code
- **React 19** - Uses latest React with StrictMode
