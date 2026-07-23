# zoegame1 — Agent Guide

> Single source of truth for *how to work on this repo*. Claude and Antigravity both read this (`CLAUDE.md` → `@AGENTS.md`; `GEMINI.md` → pointer). Keep it short. *(Auto-generated 2026-07-09; edit freely — re-runs won't overwrite an existing AGENTS.md.)*

**Brain note (goals, backlog, full context):** [zoegame1.md](file:///H:/My%20Drive/Brain2_backup/Projects/zoegame1.md)
**GitHub:** https://github.com/p3ji/zoegame1.git
**Stack (detected):** Node.js / JavaScript

## Run / build / test
- Install: `npm install`
- Run: `npm start`

## Conventions & gotchas
- Offline-first PWA: **bump the cache version** in `index.html` / `sw.js` after changing assets or logic.

## Do NOT
- Commit secrets (`.env`) or large build artifacts.
