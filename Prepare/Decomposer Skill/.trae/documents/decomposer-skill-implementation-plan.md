# Decomposer TRAE Skill — Implementation Plan

## Summary

Create a TRAE Skill at `.trae/skills/decomposer/SKILL.md` that wraps the Decomposer cognitive protocol (PROTOCOL.md) into a callable skill. The SKILL.md is a thin wrapper — it does not duplicate the 5-step protocol, but references PROTOCOL.md by relative path. Three `references/` sub-files handle the routing and enforcement logic that PROTOCOL.md does not cover.

## Current State

The project has a complete, tested theory layer:
- `PROTOCOL.md` — 5-step cognitive operation protocol (core deliverable)
- `MANIFEST.md` — Philosophy and commitment
- `FIELD_GUIDE.md` — Application annotations (TRAE, Twitter, human self-execution)
- `README.md` — Project entry point
- `.gitignore` — Standard git ignore

There is no `.trae/skills/` directory. The TRAE Skill does not exist yet.

## Proposed Changes

**4 new files** in the `.trae/skills/decomposer/` directory. No existing files are modified.

### 1. `.trae/skills/decomposer/SKILL.md`

**What**: The main entry point for the TRAE Skill. A thin wrapper that references PROTOCOL.md for the core protocol logic.

**Why**: This is the required entry point for any TRAE Skill. It defines the trigger conditions, references the core protocol, and provides the skill-specific routing and enforcement logic.

**How**: Frontmatter with `name: decomposer` and a `description` under 200 chars that includes both functionality and trigger conditions. Body sections covering:
- Activation protocol (read PROTOCOL.md, identify cognitive position, identify output context)
- Step 1: Honesty Fuse (hard gate — no output before this step)
- Steps 2-4: Execution reference table (thin, references PROTOCOL.md)
- Step 5: Anti-Shell Self-Check (references `references/ANTI_SHELL_CHECKLIST.md`)
- Output format rules
- First action requirement

### 2. `.trae/skills/decomposer/references/COGNITIVE_POSITIONS.md`

**What**: Decision tree and mapping table for identifying the user's cognitive position and routing the protocol output accordingly.

**Why**: PROTOCOL.md describes the 4 positions conceptually but does not provide a detection mechanism. The SKILL.md needs a deterministic way to identify which position the user is in.

**How**: A 4-question decision tree (yes/no) that terminates in one of 4 positions: Technical Architect, Non-technical Founder, Decision-maker, Research Thinker. A 5-step × 4-position mapping table showing how each step's output changes per position. Manifestation examples (one sentence per position per step).

### 3. `.trae/skills/decomposer/references/OUTPUT_CONTEXTS.md`

**What**: Rendering rules for each of the 4 output contexts.

**Why**: The user requires "适配所有应用" — the skill must render its output differently for TRAE conversation, Twitter essays, team communication, and human self-execution.

**How**: A context detection table (trigger phrase → context → default render). Four sections, one per context, each defining format, structure, tone, and constraints:
- TRAE Conversation (default): Markdown dialogue block, conversation-native
- Twitter Essay: Narrative thread structure per FIELD_GUIDE.md Annotation 2
- Team Communication: Decision-friendly summary, "discovery targets" framing (original design, not in FIELD_GUIDE.md)
- Human Self-Execution: Physical action checklist per FIELD_GUIDE.md Annotation 3

### 4. `.trae/skills/decomposer/references/ANTI_SHELL_CHECKLIST.md`

**What**: The complete, executable anti-shell self-check with per-position variations and per-check failure recovery.

**Why**: PROTOCOL.md Step 5 describes the checks but does not provide a standalone, executable reference. The SKILL.md needs a file it can point to for the full checklist.

**How**: Five checks, each with: question, fail condition, bad/good examples, recovery instructions. A 5-check × 4-position adaptation table. A full resolution procedure mapping each check failure to the corresponding protocol step for correction.

## Execution Order

```
Phase 1 (parallel):
  1a. Create references/COGNITIVE_POSITIONS.md
  1b. Create references/OUTPUT_CONTEXTS.md
  1c. Create references/ANTI_SHELL_CHECKLIST.md

Phase 2 (sequential):
  2. Create directory .trae/skills/decomposer/references/
  3. Create SKILL.md

Phase 3 (verification):
  4. Run Anti-Shell Self-Check against SKILL.md
  5. Validate all relative reference paths
  6. Git commit with English message
```

## Assumptions & Decisions

- **No templates directory**: The output is conversation-native, not file-based. Templates would encourage file-generation behavior, which the skill explicitly avoids.
- **No scripts directory**: The protocol is cognitive, not computational.
- **SKILL.md is thin**: It references PROTOCOL.md by relative path (`../../PROTOCOL.md`) rather than duplicating the 5-step logic. This keeps the skill maintainable when PROTOCOL.md changes.
- **Team Communication context needs original design**: FIELD_GUIDE.md covers TRAE, Twitter, and human self-execution, but not team communication. This context's rendering rules are designed fresh in OUTPUT_CONTEXTS.md.
- **Cognitive position detection is explicit**: The skill asks or infers the user's position rather than assuming a default. This is more honest than silently assuming the user is a technical architect.

## Verification

1. Structural: `LS .trae/skills/decomposer/` shows SKILL.md + references/ with 3 files
2. Frontmatter: `name` and `description` are valid, description under 200 chars
3. Reference chain: Every relative path resolves to an existing file
4. Anti-Shell Self-Check against SKILL.md: all 5 checks pass
5. Git commit in English with message covering all 4 new files