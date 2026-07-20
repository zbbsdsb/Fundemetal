# γ Fundemetal

**Deep-level, methodological AI skill tools.** We ship only one kind of AI skill: cognitive protocols that force AI (and humans) into the right thinking discipline. Not task tools — *methods*.

> Built for thinking itself.

![Fundemetal](docs/og-cover.png)

## What it is

Fundemetal is a small, curated collection of **cognitive protocols** — plain Markdown skill files you drop into your agent (Claude, TRAE, Cursor, Windsurf). Each one attacks a specific failure mode in how we think, plan, and decompose problems. The output isn't a task done for you; it's a better-shaped problem and a sharper plan.

## The trilogy

| # | Skill | One line |
|---|---|---|
| 01 | **Decomposer** | Surface the unknown unknowns — turn *"I don't know what I don't know"* into actionable known unknowns. |
| 02 | **Tension Mining** | Find the force in the system — mine irreducible tensions → cross-domain invariants → mechanisms. |
| 03 | **Great Expectations** | Anti-consensus, anti-template planning with BANI + integrity gates. |

Each skill lives in [`skills/`](skills/).

## Shared DNA

Six hard constraints every skill obeys:

1. **Cognitive protocol, not a tool** — forces a thinking discipline, not a single action.
2. **Anti-cheat hard gates** — red flags, banned words, acceptance metrics that stop hollow output.
3. **Academic grounding** — Kahneman, Kuhn, Cynefin, BANI — standing on validated frameworks.
4. **Platform-agnostic** — pure Markdown; plug into any agent, no build step.
5. **Swiss B&W aesthetic** — minimal, high-contrast, fast, accessible.
6. **MIT, open source** — by `zbbsdsb`. Fork it, cite it, remix it.

## Use a skill

Copy a skill folder (e.g. `skills/decomposer/`) into your agent's skills directory, or paste its `SKILL.md` into your system prompt. No dependencies, no build.

```markdown
# In your agent, reference the protocol:
"Follow the Decomposer protocol in SKILL.md before proposing any plan."
```

## The sequence

**Decomposer → Tension Mining → Great Expectations.** Each is strong alone; run them in sequence and you get something no other tool can give you — honest unknowns, the underlying force, then a genuinely original plan.

## License

MIT © `zbbsdsb`.
