# Integration Plan — the 18 generated skills batch

> Status: **EXECUTED**. Decisions applied: **D1 = import all 18** · **D2 = keep meta docs as `docs/` assets**. All 18 skills canonicalized (`MANIFEST.yaml` + `README.md` + `SKILL.md` footer→CC0, H1 numbering stripped). Site/README/copy refreshed to 23 skills. Committed locally; push + enable Pages pending.

## 1. What actually landed (accurate inventory)

A generator run dumped **18 unique new skills** plus 3 meta docs. The same content is duplicated in **3 locations** (scratch), so the first job is dedupe, not import.

**The 18 unique skills** (verified via frontmatter `name:`):

| # | formation | slug | one-liner |
|---|-----------|------|-----------|
| 1 | Falsify | `pre-mortem` | Assume the plan is dead; write the obituary (≥5 mechanisms, ≥1 self-inflicted) |
| 2 | Falsify | `outside-view` | Base rates before "we're different" |
| 3 | Falsify | `resulting` | Separate decision quality from outcome quality |
| 4 | Evidence | `source-ledger` | Tag every load-bearing claim; >40% assumed → no conclusion |
| 5 | Evidence | `disconfirmation-hunt` | Name what would prove you wrong, then hunt it |
| 6 | Adversarial | `crux-finder` | Locate the one belief whose flip changes the conclusion |
| 7 | Adversarial | `red-cell` | Install a licensed adversary; force author to recite conceded hits |
| 8 | Adversarial | `silent-start` | Everyone writes before anyone speaks (kill info cascade) |
| 9 | Single | `question-autopsy` | Dissect the question before answering |
| 10 | Single | `quantity-quota` | 30 candidates before any evaluation |
| 11 | Single | `trade-off-ledger` | Every benefit must name its cost |
| 12 | Single | `second-order` | Model the reaction, and the reaction to the reaction |
| 13 | Single | `steelman-forge` | State their view so well they'd sign it, then refute |
| 14 | Single | `stopping-rule` | The protocol that tells you to stop thinking |
| 15 | AI-native | `sycophancy-breaker` | Markdown file that stops the model agreeing by default *(flagship)* |
| 16 | AI-native | `goal-anchor` | Re-anchor to the verbatim original when the agent drifts |
| 17 | Meta | `taboo` | Ban the buzzword |
| 18 | Meta | `curator` | The admission gate every skill must pass |

**Meta docs** (in `skills/files/`): `ROSTER.md` (full-library index), `FAILURE-MODES.md` (a "thinking OWASP"), `GRAVEYARD.md` (rejected ideas). `skills/files/SKILL.md` is just sycophancy-breaker (duplicate of #15).

**Where each copy lives:**
- `skills/files/mnt/user-data/outputs/Fundemetal/skills/<slug>/SKILL.md` — 17 skills (ALL except `disconfirmation-hunt`). ← the canonical generator output
- `skills/SKILL.md` + `skills/SKILL (1).md … (16).md` — flat re-dump of the same 17 (missing `disconfirmation-hunt`). ← scratch
- `skills/files/SKILL.md` — sycophancy-breaker duplicate. ← scratch

All 18 are English-only, zero Chinese. ✅

## 2. Conflicts this batch creates (must resolve before import)

1. **Brand scope creep.** Repo identity is *"we ship only ONE kind of skill: deep-level cognitive protocols — not task tools"* and a curated, focused library. Going 5 → 23 skills flatly contradicts that. Tellingly, the generator's own `ROSTER.md` says *"Curation is the product"* and *"A library is defined by what it refuses."* So even its philosophy says: **do not import all 18 blindly.**
2. **Convention mismatch.** Our skeleton = `skills/<slug>/{MANIFEST.yaml, SKILL.md, README.md}`. Generated skills have **only `SKILL.md`** (no MANIFEST, no README) and sit in a throwaway `mnt/...` path.
3. **Numbering collision.** Generated `SKILL.md` self-number (`# 04 · Pre-Mortem`), but `04`/`05` are already Insight Crystallizer / Shoulders of Giants. Need a coherent order.
4. **License footer.** Generated files end `MIT © zbbsdsb`. We just standardized the repo to **CC0 1.0** (skills keep MIT **© CeaserZhao**). Contradiction.
5. **Scratch paths.** `skills/files/` and the loose `skills/SKILL (n).md` are tool working-dir artifacts — they must **not** be committed as-is.
6. **Stale internal links.** `ROSTER.md` links to `skills/curator/`, `docs/FAILURE-MODES.md`, etc. — none exist yet.

## 3. Proposed plan (phased)

### P0 — Cleanup & dedupe (no judgment calls)
- Extract 18 canonical `SKILL.md` → `skills/<slug>/SKILL.md`.
- Delete `skills/files/` (entire `mnt/...` dump) and `skills/SKILL*.md` (loose scratch).
- Park the 3 meta docs as **candidate marketing assets** at `docs/` (`docs/ROSTER.md`, `docs/FAILURE-MODES.md`, `docs/GRAVEYARD.md`) — fix their links + license footer. (Drop if Decision 2 = scrap.)

### P1 — Curation gate (DECISION 1)
Not all 18 clear the "fundamental / methodological" bar. Proposed tiers:
- **Tier A — keep (on-brand, fill the ASSESS/LEARN loop we diagnosed as missing):** `pre-mortem`, `outside-view`, `resulting`, `source-ledger`, `disconfirmation-hunt`, `crux-finder`, `red-cell`, `sycophancy-breaker`, `goal-anchor`, `taboo`, `curator`. (~11)
- **Tier B — borderline (useful but more "tool-ish"/niche):** `silent-start`, `question-autopsy`, `quantity-quota`, `trade-off-ledger`, `second-order`, `steelman-forge`, `stopping-rule`. (~7)
- Rejected ones go to `GRAVEYARD.md` (the generator already built that narrative — use it).

### P2 — Canonicalize each admitted skill
For every kept `skills/<slug>/`:
- Add `MANIFEST.yaml` (order, type `cognitive-protocol`, grounding, gates, tags).
- Add `README.md` (Fundemetal voice).
- Rewrite license footer → `CC0 1.0 (repo) · MIT © CeaserZhao` convention.
- Strip the self-number from the H1 (order lives in MANIFEST only).

### P3 — Ordering
Formation-based numbering continuing from the current 5:
`06-08` Falsify · `09-10` Evidence · `11-13` Adversarial · `14-20` Single · `21-22` AI-native · `23-24` Meta. (Exact numbers depend on Decision 1.)

### P4 — Evidence (your highest-leverage ask)
Each skill already has an `## Eval` trap-prompt with fail/pass. Convert those into **before/after README demos** (Claude without skill vs. with) — this directly answers the credibility gap you flagged. Ship one demo per admitted skill.

### P5 — Site & copy refresh
- `docs/index.html`: fix the "Five skills" count, add cards + use-links for admitted skills.
- Root `README.md`: update the skills table + the "super-power sequence" note.
- **Fix `PROMOTION.md` / `X-COPY.md`** which still say *"three cognitive protocols"* — must reflect the real count before any distribution.

### P6 — Commit + push + enable GitHub Pages
All staged together once curated set is canonicalized and demoed.

## 4. Decisions needed from you

- **D1 — Scope:** (A) Curate to Tier A (~11, recommended) · (B) Import all 18 · (C) Import all but split "core 5" vs "extended library".
- **D2 — Meta docs:** (A) Keep ROSTER + FAILURE-MODES + GRAVEYARD as `docs/` assets (recommended) · (B) Scrap them.

Execution starts after you pick. My default if you say "go": **D1=A, D2=A**.
