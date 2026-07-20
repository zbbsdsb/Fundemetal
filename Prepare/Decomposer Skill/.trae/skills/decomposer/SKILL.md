---
name: "decomposer"
description: "Cognitive protocol that converts unknown unknowns into known unknowns. Invoke for large/ambiguous goals, or when user asks for honest breakdown, decomposition, or avoiding empty plans."
---

# Decomposer

A five-step cognitive operation protocol for transforming any large, ambiguous, or aspirational goal into an actionable uncertainty map where every node has a survival condition.

---

## Description

The Decomposer is not a project management tool or a template library. It is a **transferable cognitive protocol** — a repeatable, five-step process for decomposing ambiguity into actionable uncertainty. It enforces two metrics: **honesty** (explicit admission of limits) and **actionability** (the user can name the first concrete step).

The protocol is domain-agnostic — same five steps for software, startups, research, or life decisions.

---

## Usage Scenarios

### When to use this skill

- The user describes a large, ambiguous, or aspirational goal (e.g., "I want to build a platform like X", "I want to start a company in Y space")
- The user explicitly asks for an honest breakdown, decomposition, or uncertainty mapping
- The user is planning something and wants to identify blind spots before committing resources
- The user says "I don't know where to start" or "I'm not sure if this is feasible"
- The user asks to avoid empty plans, wishful thinking, or premature structure

### Do NOT use this skill when

- The user asks a simple, well-defined question with a known answer (e.g., "How do I center a div?", "What is the time complexity of quicksort?")
- The user is already executing a well-understood plan and just needs help with a specific task
- The user explicitly asks for a standard project plan, Gantt chart, or task list without uncertainty analysis
- The user is debugging an existing system or fixing a specific bug

---

## Instructions

### Before Execution

Determine two things before executing the protocol steps:

**1. Cognitive Position** — Use the decision tree in `references/COGNITIVE_POSITIONS.md` (relative to project root). Ask the four questions in order. The first "yes" determines the position. If ambiguous, default to Non-technical Founder.

**2. Output Context** — Use the trigger phrase detection in `references/OUTPUT_CONTEXTS.md` (relative to project root). For TRAE conversations, the default context is "TRAE Conversation" — Markdown dialogue within the conversation flow.

### Execution Flow

Execute the five steps in order. The protocol is iterative — Step 3 may reveal elements that belong in Step 2, which may require revisiting Step 1. Do not fight these loops.

---

### Step 1: The Honesty Fuse

**Hard stop before any decomposition.** The first output is not analysis or structure — it is a confession of limits.

**Three mandatory declarations:**

1. **What I can actually engage with.** — Specifically what *I* (the entity executing this protocol) can meaningfully address given the information provided. Not what the project "involves."

2. **Where I am blind.** — Concrete statements about specific missing information. Not vague hedging. "I do not know who your users are." "I do not know whether the physics permits this."

3. **How this thing most likely dies.** — The single most probable collapse mode if we proceed without resolving the blind spots. Stated plainly, without hedging.

**What this step forbids:** No module lists. No feature breakdowns. No solution proposals. No architectural suggestions. No "this is ambitious but achievable." No false comfort of any kind.

**Failure handling:** If the user reacts negatively (e.g., "this is not helpful"), do not switch to providing structure. Explain that the first honest act is refusing premature reassurance. If the user insists, exit the protocol and provide standard assistance.

---

### Step 2: Uncertainty Mapping

**Classify every identifiable element** into one of three zones.

**What is an element?** The smallest unit of uncertainty that can be independently assigned a zone. A claim-that-needs-testing, not a component or task. Rules of thumb:
- If you can write a survival condition for it, it is an element.
- If it contains a hidden assumption, it is an element.
- If removing it does not change the meaning, it is not an element.

**The three zones:**

| Zone | Meaning | Signal |
|------|---------|--------|
| **Green** — Known-Known | Could act on this right now and be confident the action is correct | "I know what to do next" |
| **Yellow** — Known-Unknown | Know a question exists; cannot answer it yet | "I know what I need to figure out" |
| **Red** — Unknown-Unknown | Cannot even formulate the question | "I'm not sure what question to ask" |

**The 70% Rule:** If Green exceeds 70% of all mapped elements, the mapping is dishonest. Return to Step 1. (This is an empirical heuristic, not a calibrated metric.)

**Quick test for each element:** "Could I write down the next action for this right now, and be confident it's correct?" Yes → Green. I know what to figure out but haven't → Yellow. Not even sure what question to ask → Red.

**Output format:** Render as a Markdown table with columns: Element, Zone, Rationale.

---

### Step 3: Hierarchical Decomposition

**Transform the flat map into a cognitive dependency tree.** This is epistemic decomposition, not functional decomposition.

**Critical distinction:** Functional decomposition asks "What are the parts?" Cognitive decomposition asks "What do I need to know first?"

**Transition procedure (flat map → tree):**

1. **Identify root unknowns.** — Among the mapped elements, find those that, if resolved, would make other elements more knowable. These are root candidates.

2. **Apply the dependency test.** — For every pair (A, B): "If A remains unknown, can B still be meaningfully addressed?" If no, A is a dependency of B.

3. **Prune the tree.** — Any element with no dependencies and nothing depending on it is either an independent leaf (keep) or noise (delete).

**For each element, ask three questions:**
- What must be true for this to survive? (Survival Condition)
- If this dies, what else dies with it? (Lethality)
- Can this remain unresolved forever, and the project still partially survive?

**Three node states:**
- **Executable**: Survival conditions met. Act now.
- **Pending Validation**: Know what information would resolve this. Needs a concrete probe.
- **Blind Zone**: Cannot formulate what "resolved" looks like. Resolve adjacent nodes first.

**Output format:** Render as a Markdown tree/indentation diagram showing dependencies. Annotate each node with its zone color.

---

### Step 4: Error Budget Assignment

**Attach concrete confidence, survival conditions, and lethality to every node.**

**Three attributes per node:**

| Attribute | Definition | Options |
|-----------|-----------|---------|
| **Confidence** | "If this node is wrong, how quickly would I find out?" | High (hours/days), Medium (weeks), Low (months), Zero (guessing) |
| **Survival Condition** | "Alive if: [measurable state]. Dead if: [measurable state]." | A pair of concrete, falsifiable statements |
| **Lethality** | Specific list of downstream nodes that die if this node dies | A list of node names |

**Hard constraint:** A node with "High" confidence but no written survival condition is automatically downgraded to "Low." No exceptions.

**Output format:** Render as an annotated Markdown table with columns: Node, Confidence, Survival Condition, Lethality. Include at least 3 key nodes fully assigned.

---

### Step 5: Anti-Shell Self-Check

**Five hard checks.** If any fails, return to the corresponding step and correct. Re-run all five checks. Repeat until all pass.

| # | Check | Fail Condition | Return to Step |
|---|-------|---------------|----------------|
| 1 | **Survival Condition** | Any node lacks "Alive if" / "Dead if" pair | Step 2 or 3 |
| 2 | **Jargon** | Output contains phrases that consume space without creating knowledge (e.g., "leverage best practices", "robust architecture") | Step 3 |
| 3 | **Uncertainty Ratio** | Yellow + Red < 30% of all nodes | Step 1 |
| 4 | **Honesty** | No explicit, unhidden "I don't know" in the output | Step 1 |
| 5 | **Actionability** | Cannot name the very first concrete step in one sentence | Step 3 or 4 |

**Per-position adaptation:** See `references/ANTI_SHELL_CHECKLIST.md` (relative to project root) for position-specific check criteria.

**Output format:** Render as a checklist with pass/fail indicators. For each failure, state the corrective action and which step to return to.

---

### TRAE-Specific Considerations

1. **Output is conversation-native** — Render the uncertainty map as Markdown tables and trees within the dialogue. Do not generate files unless the user explicitly requests it.
2. **Hard-gate enforcement** — Do not skip the Honesty Fuse or produce module lists before the mapping is complete.
3. **Self-check** — Run the five checks from the references above. If any fails, return to the corresponding step.

---

### First Action Requirement

After completing the protocol, the very first thing you must do is state the first actionable step in one sentence. If you cannot do this, the protocol has failed and you must re-execute it.

---

## Reference Files

All paths resolve relative to the project root.

| File | Purpose |
|------|---------|
| `PROTOCOL.md` | Full five-step protocol definition with end-to-end example |
| `SKILL.md` | Universal (platform-agnostic) skill definition |
| `references/COGNITIVE_POSITIONS.md` | Position detection decision tree and 5x4 mapping |
| `references/OUTPUT_CONTEXTS.md` | Context-specific rendering rules (TRAE, Twitter, Team, Human) |
| `references/ANTI_SHELL_CHECKLIST.md` | Executable self-check with per-position adaptation |
| `adapters/trae/SKILL.md` | TRAE-specific adapter (supplementary detail) |
| `references/PROBE_TOOLKIT.md` | Standalone probe toolkit |
| `references/FALSIFIABILITY_WHITEPAPER_TEMPLATE.md` | Falsifiability Whitepaper fill-in template (MIT Scholar) |
| `references/ERROR_BUDGET_SPEC_TEMPLATE.md` | Error Budget Specification fill-in template (MIT Scholar) |
| `references/ZERO_CODE_VALIDATION_TEMPLATE.md` | Zero-code validation template (Non-technical Founder) |
| `references/SEVEN_DAY_TEST_CHAIN_TEMPLATE.md` | 7-day lethal test chain template (Non-technical Founder) |
| `references/DECISION_CARDS_WORKSHEET.md` | Three decision cards worksheet (Decision-maker) |
| `references/QUICK_REFERENCE_CARD.md` | Single-page protocol cheat sheet |