# Measurement Framework — how Fundemetal improves over time

Derived from the insight: **triggering and quality are independent optimization problems.**
Mixing them is the most common optimization mistake in cognitive-protocol skills.

## Core distinction

| Axis | What it controls | Where to change | How to measure |
|------|-----------------|-----------------|----------------|
| **Triggering** | *Does it fire when it should (and stay silent when it shouldn't)?* | `description` frontmatter + `## When to run` section | Trigger rate on a known test set |
| **Quality** | *When it fires, does it produce protocol-compliant output?* | `## The protocol` body (phases, gates, output contract) | Pass/fail score on the same set, conditioned on trigger |

Never fix both in the same edit. If you change the description and the protocol body simultaneously and the score moves, you won't know which caused it.

## Test categories (three, not one)

Every skill's `evals/tests.yaml` must cover:

1. **Happy path** (2–4 tests) — should trigger AND pass. The skill working as designed.
2. **False positive** (2–4 tests) — should NOT trigger. Tests description precision. If it fires here, the description is over-broad.
3. **Gate-gaming** (2–4 tests) — should trigger but should FAIL the gates if the output is hollow. These are the most important tests for Fundemetal's brand promise (anti-cheat).

Target: **8–12 tests per skill**, run 3× each per version.

## The improvement loop

```
1. Run current eval suite (baseline) → trigger rate + pass rate
2. Identify the skill with the biggest gap
3. Classify the gap as triggering or quality
4. Fix only that one thing
5. Re-run the FULL suite (regression check)
6. If pass, commit. If not, revert or narrow the fix.
```

## Diagnosis: symptom → lever

| Symptom | Likely root | Lever |
|---------|-------------|-------|
| Skill never fires | Description too narrow / weak | Add trigger scenarios, push phrasing |
| Skill fires on everything | Description over-broad | Add exclusion scenarios to description + When to run |
| Fires but output is shallow | Protocol body: gates too weak | Add a falsifiable mechanical check (count, regex, condition) |
| Fires but output is too heavy for simple cases | Protocol overhead too high | Narrow trigger conditions; add a light-path for low-stakes cases |
| One fix improves scores but another skill regresses | Cross-skill interference | Run full suite every change; accept regression = revert |

## The flagship

Start with **Sycophancy Breaker** (the strongest brand hook, the one with the most obvious "I've seen this failure mode" recognition). Its eval suite (`skills/sycophancy-breaker/evals/`) has 11 tests across all three categories. Once the format is validated, replicate to the other 17 skills.

## Judge problem

LLM-as-judge has its own sycophancy bias. Mitigations:
- Make gates mechanically checkable (G1–G4 conditions that can be regex/rule-checked for existence, not just "feels right")
- For semantic scoring, use a panel of 3 judges (majority vote) not one
- Run Sycophancy Breaker on the judge before each eval session (yes, self-referentially)

## Discipline

- **Resulting**: one good run is not a better version. Run 3×.
- **Outside View**: prompt optimizations shift scores by a few points, not doubles. Don't chase 2% swings.
- **Stopping Rule**: pre-commit to a saturation score per skill. "When this skill hits 85% pass on its suite across 3 runs, we stop tuning it."
- **Curator**: v2 must pass the same admission gate as v1. If v2 can't demo cleanly or its gates are gamed, don't ship it.

## Eval directory structure

```
skills/<slug>/
├── SKILL.md
├── README.md
├── MANIFEST.yaml
└── evals/
    ├── MANIFEST.yaml      # suite metadata (test count, breakdown, status)
    └── tests.yaml          # all test cases
```

Copy `skills/evals-TEMPLATE.yaml` into each skill's `evals/` and adapt.
