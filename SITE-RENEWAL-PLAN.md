# Website Renewal Plan — most rigorous treatment

> Status: **draft**. All items are audited against the live `docs/index.html` (lines cited) and `README.md`. No item is guesswork — every finding is confirmed.

## Ground truth: what's on the page right now

| Section | Lines | Found issues |
|---------|-------|-------------|
| `<head>` meta / OG | 6–16 | OG description says *"Three deep-level methodological protocols"* — was true at 3 skills, false at 23 |
| Hero | 66–87 | Text still strong; no measurement/social proof |
| Filter bar | 103–112 | Works. Indentation inconsistent with rest of page |
| 23 skill cards | 114–342 | All present, all with correct `data-formation`. Glyphs: Core 5 have hand-drawn icons; 18 have monogram circles (acceptable but inconsistent) |
| DNA grid | 348–365 | 6 items, all current. **No mention of evals / measurement framework** |
| The Sequence (FLOW) | 367–395 | **Stale.** Shows only 3 steps (Decomposer→Tension Mining→Great Expectations). Twenty other skills, 5 formations, 2 meta-skills not referenced. "Super-power sequence" framing contradicts the library's breadth |
| Use a skill | 397–438 | Code block shows `cp -r "skills/decomposer/" ~/.claude/skills/` — single-platform, single-skill. All 23 links present and correct |
| Footer | 441–454 | Copyright `© 2026` — accurate; links correct |
| README.md | full file | "The sequence" section only mentions 3 core + IC/SoG. No evals/measurement mention. "Small, curated collection" phrasing is now dissonant at 23 skills |

## Phased plan

### P0 — Contradictions (fix before any new feature. These are the "hard truths" equivalent of the site)

1. **OG meta → stale count.** `index.html:10` — change `"Three deep-level methodological protocols"` to `"Deep-level AI skill tools — 5 core protocols, 18 extended skills, 113 measurement tests"`
2. **The Sequence section (FLOW) → no longer the whole story.** Replace with a **Formations** section that shows all 7 groups, or at minimum expand it to explain the full library structure. Current layout only shows 3/23 skills — that's a 13% accuracy rate.
3. **README "The sequence" section** — same problem. Must reflect the formation structure, or at minimum add a note that the sequence is *one* pattern among many.

### P1 — Content expansion (fills gaps, does not restructure)

4. **Add measurement/social-proof block** — a new section (or stat row in hero) showing:
   - `23 skills · 5 formations · 113 eval tests`
   - Ideally with a brief "every skill has falsifiable gates + a test suite" callout
   - This directly addresses the "evidence gap" from the user's earlier critique
5. **README alignment**:
   - Replace "small, curated collection" with "a systematic library"
   - Add a "## Measurement" section linking to `MEASUREMENT.md`
   - Update "The sequence" to note it's the core build chain; add a table of formations
6. **Install / quickstart expansion**:
   - Code block: add a 2nd example showing `skills/sycophancy-breaker/SKILL.md` (flagship)
   - Add a note: "Each skill ships with an `evals/` test suite — run them to verify your agent's compliance"
7. **Formations index on the site** — a compact table/legend below the filter bar showing which skills belong to which formation. Currently the filter bar IS the formation UI, but there's no text explaining what "Falsify" or "Evidence" means. Add a quick lookup.

### P2 — Premium UX (elevation, not repair)

8. **Next-gen filter animation** — currently `.card.hidden` is `display:none` (no transition). Replace with a staggered fade+scale transition using CSS `visibility` + `opacity` + `transform` — so cards slide out gracefully when filtering.
9. **Hero stat counter** — animated number that counts up on scroll (`0 → 23` for skills, `0 → 5` for formations, `0 → 113` for evals). Pure CSS/JS, no library.
10. **Card glyph consistency** — 5 core cards have hand-drawn icons, 18 have monogram circles. Decide: (A) draw 18 hand-drawn icons [~3h work], or (B) accept monogram as "second-tier" visual distinction. If (A), commission SVG paths per skill.
11. **"The Sequence" → "The Build Chain"** — rename the FLOW section and expand to show the full eco-system: Build chain (core 3) → then formations → then meta. Or keep it focused on the core 3 but frame it as "Start here" rather than "This is everything."
12. **Sticky nav on scroll** — current nav stays at top; consider a subtle shadow transition on scroll (already partially implemented via `var(--ink)` border). Enhance with a bottom border that fades in.

### P3 — Technical completeness

13. **OG image → absolute URL** — `og-cover.png` works locally but for Twitter/FB sharing, change to `https://zbbsdsb.github.io/Fundemetal/og-cover.png` (or use a `meta` tag with absolute URL injected at build/deploy time). Since there's no build step, hardcode the absolute URL.
14. **Print styles** — add `@media print` in CSS to hide filter bar, nav, footer links; keep cards readable.
15. **Focus / keyboard navigation** — audit all interactive elements (theme btn, filter btns, nav links, use-links) for visible `:focus-visible` outlines. Currently none visible (the CSS resets might hide them). Add a high-contrast outline for WCAG SC 2.4.7 compliance.
16. **Preconnect / preload** — Google Fonts already preconnected; `og-cover.png` can be preloaded as `image` for social crawlers. Low priority.
17. **Theme toggle edge case** — current 3-state (system/light/dark) is correct. Verify that `data-theme` transitions are smooth (they should be, since they change CSS vars on `:root`). Add a quick check: does switching themes mid-animation cause a visible flicker? Mitigated by `transition: background .3s` on `body`.

### P4 — Content refresh (LOEs noted)

18. **All 23 card descriptions** — review for tone consistency. The 5 core cards were hand-written; the 18 generated via script have shorter, punchier descriptions. Run a pass to align the tone (more editorial, less bullet-list).
19. **Tagline pass** — the hero tagline "AI Skills built for *thinking itself*" is a strong hook. Test it against alternatives like "Methods, not prompts" or "Cognitive protocols for AI." Consider A/B testing.
20. **Blog / changelog page** — optional. Add a `docs/blog/` or `docs/changelog/` page documenting updates. Low priority.

### P5 — Once-in-a-while (only if resources permit)

21. **Animated page transition** — a subtle sketch-line draw-in on page load (like the γ pathLength animation already in hero). Extend to logo, section titles.
22. **Three.js / Canvas background** — premium hero particle system (B&W dots that respond to scroll). This is the one place where a premium 3D effect would align with the "metal underneath" brand. But it must degrade gracefully — the site must be fully functional and beautiful without JS. (Given this is a static Markdown site, adding Three.js is debatable.)
23. **Dark-mode specific logo** — the gamma symbol in the hero uses `currentColor` which works in both themes. Already optimal.

---

## Recommended priority (if you want me to execute now)

```
P0 (1–3)  →  P1 (4–7)  →  P2 (8, 9, 11, 12)  →  P3 (13–17)  →  P4 (18–19)  →  P2 (10)  →  P5
```

I recommend starting with **P0 + P1** (the content contradictions and gap-fills) — those are the most visible to a first-time visitor and directly affect credibility. P2–P5 are polish that matters more after the content is solid.

Choose your order and I'll execute.
