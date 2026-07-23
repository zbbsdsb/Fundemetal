# Fundemetal — project memory

## Brand (locked convention)
- **Style:** 黑白手绘线条 (black & white, hand-drawn line). Monochrome only — no color ramps.
- **Logo:** γ (lowercase gamma), drawn as hand-drawn SVG stroke. Used in nav, hero, footer.
- **Aesthetic:** editorial / Swiss-minimal with sketch wobble (SVG `#sketch` turbulence+displacement filter). Caveat for handwriting labels, Newsreader for display, JetBrains Mono for meta.
- **License:** Repository = **CC0 1.0** (public-domain dedication). Individual skills retain their own MIT `LICENSE` (© CeaserZhao) where noted. Single author across handles: zbbsdsb / CeaserZhao / chkev.
- **Name:** "Fundemetal" is an *intentional pun* — *Fundamental, by design* (the metal underneath the fundamentals). The README first line states this; do **NOT** "correct" the spelling. (Decision made 2026-07-23.)

## Product definition
- "Fundemetal" = deep-level, methodological AI skill tools. Only ships **cognitive protocols, not task tools**.
- **23 skills** (5 core + 18 extended) in `skills/`, across formations: Build, Falsify, Evidence, Adversarial, Single, AI-native, Meta.
- Shared DNA: cognitive protocol (not tool) · anti-cheat hard gates · academic grounding · platform-agnostic **Markdown-first** · B&W aesthetic · CC0 (repo) / MIT (skills).
- Super-power sequence: Decomposer → Tension Mining → Great Expectations.
- **Measurement framework**: Each skill has an `evals/` dir with 3-category test suite (happy-path, false-positive, gate-gaming). Triggering (description) and quality (protocol body) are independent optimization loops — never mix fixes. See `MEASUREMENT.md`.

## Build notes
- Landing page (storefront) lives in `docs/` (`docs/index.html` + `docs/assets/`); deployed via GitHub Pages (`.github/workflows/pages.yml`). Skill library lives in `skills/`.
- Theme: 3-state (system/light/dark) via `data-theme` + localStorage; respects `prefers-color-scheme`.
