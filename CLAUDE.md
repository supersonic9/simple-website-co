# CLAUDE.md

## Project Overview

Marketing website for Simple Web Co. Single-page React site — no routing, no backend.

## Stack

React 19 + Vite 7 + TypeScript (strict mode), plain CSS (no CSS-in-JS, no Tailwind). Mobile-first responsive (breakpoints: 320px / 768px / 1024px).

## CSS Architecture

Global styles imported in `src/main.tsx` in this order:
1. `src/styles/variables.css` — CSS custom properties
2. `src/styles/typography.css` — Font styles and headings
3. `src/styles/layout.css` — Container and grid utilities
4. `src/index.css` — Global resets/base styles

Component styles live in paired `.css` files alongside their `.tsx` files in `src/components/` (e.g. `Hero.tsx` + `Hero.css`). `App.css` is imported in `App.tsx` separately from the global chain.

## Design System

`design.json` is the source of truth for all design tokens. CSS variables in `variables.css` must stay in sync with it.

Key tokens: background `#F5F1ED`, text `#2C2C2C`, accent `#7BA7D9`, border-radius 16px, soft shadows.

**Known gap:** Many `design.json` colours are not yet in `variables.css` — secondary text (`#6B6B6B`), accent green/coral/yellow/purple/teal, and card background (`#FFFFFF`) are either hardcoded in component CSS or unused. These should be migrated to CSS variables as components are built.

**Note:** `design.json` still references the old project name "The Web Shed" — ignore that, the project is Simple Web Co.

## Development Plan

`scope.md` tracks the phased build plan. Currently in Phase 2 (Navigation & Hero).

## Assets

Public assets in `/public/`: `hero1.png`, `logo.png`. `index.html` still has default Vite title and favicon — needs updating.

## Lint

ESLint with `typescript-eslint`. `varsIgnorePattern: '^[A-Z_]'` — unused vars starting with uppercase or underscore are allowed.
