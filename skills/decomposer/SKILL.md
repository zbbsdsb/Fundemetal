# Decomposer Skill

A cognitive operation protocol for transforming unknown unknowns into known unknowns. Platform-agnostic. Application adapters reside in `adapters/`.

---

## What This Is

The Decomposer is not a project management tool, not an AI feature, not a template library. It is a **transferable cognitive protocol** — a repeatable, teachable five-step process for decomposing any large, ambiguous, or aspirational goal into an actionable uncertainty map where every node has a survival condition.

It can be executed by:
- An AI assistant (via platform-specific adapters)
- A human alone with a whiteboard and sticky notes
- A team in a meeting room
- A writer composing a public essay

---

## Core Deliverables

| File | Purpose |
|------|---------|
| `PROTOCOL.md` | The five-step cognitive operation protocol (core) |
| `MANIFEST.md` | Philosophy and commitment |
| `FIELD_GUIDE.md` | Application annotations |
| `references/COGNITIVE_POSITIONS.md` | Position detection decision tree and mapping |
| `references/OUTPUT_CONTEXTS.md` | Context-specific rendering rules |
| `references/ANTI_SHELL_CHECKLIST.md` | Executable self-check with per-position adaptation |

---

## The Five-Step Protocol (Summary)

**Step 1 — Honesty Fuse**: Before any decomposition, declare: (1) what you can actually engage with, (2) where you are blind, (3) how this thing most likely dies.

**Step 2 — Uncertainty Mapping**: Classify every element as Green (Known-Known), Yellow (Known-Unknown), or Red (Unknown-Unknown). Green must not exceed 70%.

**Step 3 — Hierarchical Decomposition**: Transform the flat map into a cognitive dependency tree. This is epistemic decomposition, not functional decomposition.

**Step 4 — Error Budget Assignment**: For each node, assign: Confidence (detection speed), Survival Condition (Alive if / Dead if), Lethality (downstream nodes that die).

**Step 5 — Anti-Shell Self-Check**: Five checks. If any fails, return to the corresponding step and correct. Repeat until all pass.

See `PROTOCOL.md` for the full specification.

---

## Application Adapters

The protocol is universal; its rendering is contextual. Each adapter in `adapters/` defines how the protocol is discovered, invoked, and formatted for a specific platform.

| Adapter | Path | Purpose |
|---------|------|---------|
| TRAE | `adapters/trae/SKILL.md` | TRAE IDE skill discovery and invocation |
| Twitter | `adapters/twitter/` | Long-form essay structural template |
| Team | `adapters/team/` | Decision-friendly meeting brief format |
| Human | `adapters/human/` | Pen-and-paper physical checklist |

---

## Hard-Gate Enforcement Rules

These rules are non-negotiable regardless of platform:

1. **No module lists before Step 1 is complete.** The first output must be a confession of limits, not a structure.
2. **No node without a survival condition.** If a node cannot be assigned "Alive if" / "Dead if", it must be deleted.
3. **No jargon without translation.** Every phrase must be convertible to a concrete action or measurable outcome.
4. **No output without an explicit "I don't know."** If the output reads as confident throughout, it has failed.
5. **No actionability gap.** The user must be able to name the first concrete step in one sentence. If not, the protocol has not completed.

---

## First Action Requirement

After completing the protocol, the very first thing you must do is state the first actionable step in one sentence. If you cannot do this, the protocol has failed and you must re-execute it.