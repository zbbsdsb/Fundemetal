# Fundemetal — Repository Appearance Optimization Plan

**Goal:** Make the GitHub repo + landing site read as a serious, curated, "world's most special" product — while protecting the core identity: **black & white, hand-drawn line, γ logo, methodological depth.**

**Status legend:** ✅ done this pass · 🔲 planned (needs your go-ahead)

---

## 0. Current state (audit)
| Item | State |
|---|---|
| Landing site | ✅ single-page, premium, **now fully English** (`index.html` + `assets/`) |
| Favicon | ✅ `favicon.svg` (γ on paper) added + `<link>` in head |
| OG / social meta | 🔲 `<meta property="og:">` tags added, but `og-cover.png` not yet generated |
| Root `README.md` | 🔲 only 2 lines ("Fundemetal / Deep-level AI SKILL tools") |
| GitHub repo settings | 🔲 description / topics / website / social preview not configured |
| Deploy | 🔲 GitHub Pages not enabled |
| Skill docs (`Prepare/`) | 🔲 still Chinese (Decomposer / Tension Mining / Great Expectations) |

---

## 1. Identity assets — the γ system 🔲
- **`og-cover.png`** (1280×640): B&W hand-drawn social card — giant γ + "Fundemetal" wordmark + one-line tagline. Build as on-brand SVG→PNG (not AI-generated, so the γ matches exactly). Used as GitHub social preview **and** `og:image`.
- **Avatar / monogram:** a square γ lockup derived from `favicon.svg` for profile/social use.
- Keep everything monochrome; no color ramps.

## 2. Root README overhaul 🔲 (the repo's real front door)
Rewrite `README.md` (English) to:
1. γ mark + one-line positioning.
2. **What Fundemetal is / is not** (methodology, not task tools).
3. **The trilogy** — 3 skills, one-line each, linking into `Prepare/`.
4. **Shared DNA** — the 6 hard constraints.
5. **How to use a skill** — copy the Markdown into your agent (Claude / TRAE / Cursor / Windsurf); show a 3-line example.
6. **The sequence** — why order (Decomposer → Tension Mining → Great Expectations) matters.
7. License + author + links. Minimal monochrome shields (MIT / stars / last-commit).

## 3. GitHub repo settings 🔲
- **Description:** "Deep-level, methodological AI skill tools. Three cognitive protocols, one discipline."
- **Website:** `https://zbbsdsb.github.io/Fundemetal/`
- **Topics:** `ai`, `llm`, `prompt-engineering`, `agent`, `methodology`, `skills`, `cognitive`, `markdown`
- **Social preview:** `og-cover.png`
- **About** section tightened.

## 4. Landing-site polish 🔲
- **"Star on GitHub" CTA** in nav + hero (drives repo gravity).
- **"Use a skill" micro-section** — a copy-paste snippet that shows the product in one glance.
- Optional **Manifesto / Selection-criteria page** — "what counts as a Fundemetal-grade skill." Doubles as the brand's constitution.
- Optional JSON-LD structured data (low priority).

## 5. Deploy 🔲
- Enable **GitHub Pages** on `main`, root `/`, no build step.
- Verify live URL, favicon, OG, theme toggle, responsive, Lighthouse.

## 6. (Optional) Skill-docs localization 🔲
Translate the three `SKILL.md` / `README.md` under `Prepare/` to English for full consistency. Larger effort — decide after the above lands.

---

## Quick wins (high impact, low effort)
favicon ✅ · `og-cover.png` · README · repo settings · deploy.

## Suggested execution order
1. `og-cover.png` → 2. README → 3. repo settings + deploy → 4. site polish (star CTA, use-skill) → 5. optional manifesto page → 6. optional skill-doc translation.

## Open questions for you
- Translate the three `Prepare/` skill docs to English now, or keep them and do it later?
- Want the **Manifesto / selection-criteria** page as part of this pass, or separate?
- OK to **enable GitHub Pages** and set the repo description/topics on `zbbsdsb/Fundemetal`?
