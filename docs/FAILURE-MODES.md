# ⛒ The Failure-Mode Registry

> **OWASP for thinking.** A catalog of the ways minds — human and machine — reliably break. Each failure mode (FM) is a known vulnerability. Each Fundemetal skill is a patch.

If [`skills/`](../skills/) is the patch set, this is the vulnerability database. Skills are how you *fix* a failure mode; this registry is how you *name* one. The two are decoupled on purpose: **anyone can file a failure mode (open contribution), but patches stay curated (admission via [Curator](../skills/curator/SKILL.md)).** That resolves the usual tension — open bug reports, closed merge bar.

## How to read an entry

```
FM-NNN · Name
  Layer:     where in the thinking pipeline it strikes
  Bug:       the failure, in one line
  Affects:   humans / models / both
  Patched by: the skill(s) that address it
  Anchor:    the validated framework it comes from
```

## The pipeline (where thinking dies)

Thinking fails at six layers. The registry is organized by layer, not by skill — because one failure mode may be patched by several skills, and one skill may patch several failure modes.

`QUESTION → EVIDENCE → GENERATION → JUDGMENT → COLLECTIVE → META`

---

## QUESTION layer — the problem itself is wrong

**FM-001 · Wrong-Question Fluency**
Bug: answering the wrong question brilliantly and convincingly.
Affects: both · Patched by: `question-autopsy` · Anchor: Getzels & Csikszentmihalyi (problem-finding)

**FM-002 · Constraint Fossilization**
Bug: treating a habitual wall as a law of physics.
Affects: both · Patched by: `question-autopsy` · Anchor: Duncker (functional fixedness), Goldratt (TOC)

**FM-003 · Smuggled Premise**
Bug: a question carries an unexamined assumption as if it were given.
Affects: both · Patched by: `question-autopsy` · Anchor: Wittgenstein (dissolving vs. answering)

---

## EVIDENCE layer — the inputs are contaminated

**FM-010 · Assumption Laundering**
Bug: a claim repeated loses its hedge and becomes "fact".
Affects: both · Patched by: `source-ledger` · Anchor: Heuer (intelligence analysis)

**FM-011 · Hallucinated Certainty**
Bug: invented claims arrive in the same confident font as grounded ones.
Affects: models (acutely) · Patched by: `source-ledger` · Anchor: ACH

**FM-012 · Confirmation Search**
Bug: querying only for evidence that supports the belief.
Affects: both · Patched by: `disconfirmation-hunt` · Anchor: Wason 2-4-6, Popper

**FM-013 · Unfalsifiable Belief**
Bug: a "hypothesis" that no observation could refute.
Affects: both · Patched by: `disconfirmation-hunt` · Anchor: Popper, Platt (strong inference)

**FM-014 · Strawman Substitution**
Bug: rebutting the weakest version of an opposing view.
Affects: both · Patched by: `steelman-forge` · Anchor: Rapoport/Dennett, Caplan (ideological Turing test)

---

## GENERATION layer — the option space collapses too early

**FM-020 · Premature Convergence**
Bug: the first workable idea anchors the search and it stops.
Affects: both · Patched by: `quantity-quota` · Anchor: Osborn (deferred judgment)

**FM-021 · Single-Frame Lock**
Bug: generating N variations of one idea and calling it exploring.
Affects: both · Patched by: `quantity-quota` · Anchor: Simonton (equal-odds rule)

**FM-022 · Unknown Unknowns**
Bug: the risks that kill you are the ones you never thought to name.
Affects: both · Patched by: `decomposer`, `pre-mortem` · Anchor: Cynefin, Klein (premortem)

---

## JUDGMENT layer — the weighing is rigged

**FM-030 · Free-Lunch Illusion**
Bug: a plan presented as pure upside; costs hidden or deferred.
Affects: both · Patched by: `trade-off-ledger` · Anchor: Frederick et al. (opportunity-cost neglect)

**FM-031 · Static-Board Fallacy**
Bug: modeling the world as frozen while you act on it.
Affects: both · Patched by: `second-order` · Anchor: Schelling, Merton (unintended consequences)

**FM-032 · Metric Capture**
Bug: agents optimize the proxy you set, not the outcome you meant.
Affects: both · Patched by: `second-order`, `goal-anchor` · Anchor: Goodhart's Law

**FM-033 · Resulting**
Bug: judging decision quality by outcome quality.
Affects: both · Patched by: `resulting` · Anchor: Annie Duke, Fischhoff (hindsight bias)

**FM-034 · Planning Fallacy**
Bug: forecasts built from the inside view, systematically optimistic.
Affects: both · Patched by: `outside-view` · Anchor: Kahneman & Tversky, Flyvbjerg

**FM-035 · Analysis Paralysis**
Bug: more thinking used as a substitute for deciding.
Affects: both · Patched by: `stopping-rule` · Anchor: Simon (satisficing), value of information

---

## COLLECTIVE layer — many minds, dumber than one

**FM-040 · Information Cascade**
Bug: the first voice anchors everyone after it; independence collapses.
Affects: both (multi-agent acutely) · Patched by: `silent-start` · Anchor: Bikhchandani et al., Asch

**FM-041 · Groupthink**
Bug: cohesion suppresses dissent; the plan sails through unchallenged.
Affects: both · Patched by: `red-cell` · Anchor: Janis; Nemeth (authentic vs. assigned dissent)

**FM-042 · Crux Blindness**
Bug: arguing for hours without locating the actual point of divergence.
Affects: both · Patched by: `crux-finder` · Anchor: CFAR (double crux)

---

## META layer — thinking about thinking goes wrong

**FM-050 · Sycophancy**
Bug: the model agrees by default; confidence in → agreement out.
Affects: models (acutely) · Patched by: `sycophancy-breaker` · Anchor: Sharma et al. (Anthropic, 2023)

**FM-051 · Goal Drift**
Bug: in long tasks, sub-goals detach from the original objective.
Affects: models (acutely), both · Patched by: `goal-anchor` · Anchor: specification-gaming literature

**FM-052 · Buzzword Camouflage**
Bug: abstract jargon standing in for an unformed thought.
Affects: both · Patched by: `taboo` · Anchor: Feynman, Orwell (operationalization)

**FM-053 · Library Rot**
Bug: a curated collection bloating into an unfiltered list by accretion.
Affects: both (institutions) · Patched by: `curator` · Anchor: curation-as-refusal

---

## Coverage map

| Layer | FMs registered | Skills patching |
|---|---|---|
| Question | FM-001–003 | question-autopsy |
| Evidence | FM-010–014 | source-ledger, disconfirmation-hunt, steelman-forge |
| Generation | FM-020–022 | quantity-quota, decomposer, pre-mortem |
| Judgment | FM-030–035 | trade-off-ledger, second-order, resulting, outside-view, stopping-rule |
| Collective | FM-040–042 | silent-start, red-cell, crux-finder |
| Meta | FM-050–053 | sycophancy-breaker, goal-anchor, taboo, curator |

## Contributing a failure mode

Open an issue titled `FM: <name>`. Include: the layer, the one-line bug, whether it affects humans / models / both, and a validated anchor (a named framework or study — no folk psychology). Filing an FM is open to anyone. Whether a *patch* (skill) gets merged is decided by Curator. Unpatched FMs are welcome — a named-but-unpatched vulnerability is more honest than a hidden one.

---
CC0 1.0 · MIT © CeaserZhao · part of **Fundemetal**.
