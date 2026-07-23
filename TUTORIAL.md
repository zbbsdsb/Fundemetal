# γ Clara's Launch

## A field guide to not making the same mistakes.

> Follow one founder through a product launch. Watch her make every classic cognitive mistake.
> See how 7 formations of protocols catch each one — before it's too late.

---

## A note before we begin

This is not a spec. It is not a list of features. It is a **story about how thinking breaks** — and what happens when you have a protocol for it.

Every scenario in this guide is real. Not _this specific founder_ real, but _this exact failure mode_ real. I have watched every single one of these happen, in startups, in enterprises, in my own projects. The names are changed. The cognitive traps are not.

If you only read one thing in this repository, read this. It will teach you more about the 23 protocols than browsing 23 SKILL.md files ever will.

---

## The setup

Meet Clara.

Clara is smart. She has shipped before. She has a new idea — a B2B SaaS tool that helps engineering teams surface hidden dependencies in their microservice architecture.

It's a genuinely good idea. A few engineers have said "I'd use that." She has a wireframe. She has a 10-slide deck.

She is about to make seven mistakes in a row, and she won't see any of them coming.

---

## Act 1 — The unknown unknown

### What Clara did

Clara opened a Figma board and started designing screens.

"Auth flows first, then the dependency graph visualization, then the onboarding —"

She had a plan. The plan looked real. It had modules. It had milestones. It had swimlanes.

### What was actually happening

Clara was building a **shell**.

A shell looks like a plan. It has the shape of understanding — modules, phases, deliverables. But under the surface, every module is a placeholder. "User management" sounds concrete until you try to implement it and realize you don't know who your users are.

The shell is the most dangerous artifact in product development because **it feels like progress**. It feels like clarity. But the moment you try to act on it, you hit a wall that was invisible in the plan — a dependency nobody mentioned, an assumption that was false, a constraint that makes the entire architecture untenable.

The plan didn't warn you because the plan never saw the wall. It wasn't looking.

### The protocol

Clara ran **Decomposer**.

Decomposer doesn't ask her to build a better plan. It asks her to build an **uncertainty map**.

She stopped listing features and started classifying what she knows and doesn't know:

- **GREEN (known):** Microservices produce trace data that can be visualized. Several visualization libraries exist.
- **YELLOW (known unknown):** Do engineering teams *actually* use dependency graphs to debug? Or do they just grep logs? We don't have this data.
- **RED (unknown unknown):** We don't know how users will react to a recommendation that says "delete this service." Will they trust it? Will they ignore it?

The plan shrunk from 6 modules to 3 real nodes — but each node now has a **survival condition**.

> **Survival condition for the "Dependency Graph" node:** Alive if >40% of beta users click on a service node within the first session. Dead if users consistently close the visualization panel.

_A plan with survival conditions is honest. A plan without them is a wish._

---

## Act 2 — The conflict she almost ignored

### What Clara did

Clara interviewed 12 engineering leads.

5 said: "This is exactly what we need. Ship it."
4 said: "I don't think we'd use this. We know our dependencies."
3 said: "Interesting, but I'm not sure when we'd look at it."

Clara focused on the 5 who said yes. She wrote a PRD based on their feedback. She shared it with the team.

### What was actually happening

Clara was mining **confirmation**, not **tension**.

The 5 yeses were loud. The 4 noes were quiet. The 3 maybes were invisible. She was treating a polarized signal as consensus — the most common form of pseudoclarity in early-stage products.

But here's the thing: the disagreement **was the signal**.

If 5 teams say "we need this" and 4 teams say "we know our stuff" — that's not noise. That's the contour of the actual problem. The product doesn't serve teams that have perfect visibility into their dependencies. It serves teams that *think they do but don't*. The tension between "we know our system" and "we miss critical dependencies every quarter" is the seam where the product lives.

### The protocol

Clara ran **Tension Mining**.

Tension Mining doesn't resolve conflict. It **holds** the conflict and asks: "What invariant is true on both sides of this tension?"

She surfaced:

> **Tension:** Teams believe they understand their architecture **AND** teams are surprised by production incidents caused by unknown dependencies.
>
> **Invariant:** The gap between perceived knowledge and actual knowledge grows with system complexity.

This is not a feature. This is a **truth about the world** — one that the product can stand on. The feature (a dependency graph) is just the delivery mechanism for this truth. If she had built for the 5 yeses, she would have built a nice dashboard. By mining the tension, she built a **corrective lens** — and teams that don't think they need it are precisely the ones who need it most.

---

## Act 3 — The 50-page lie

### What Clara did

Clara wrote a comprehensive PRD.

It had 12 sections. It had acceptance criteria. It had an executive summary. It had a competitive analysis. It was 50 pages. Everyone who read it said "impressive."

### What was actually happening

Clara had built a **BANI-incompatible plan**.

BANI stands for **B**rittle, **A**nxious, **N**onlinear, **I**ncomprehensible. It's the successor to VUCA, and it describes the actual texture of reality — not the tidy world that linear plans assume.

- **Brittle:** Her timeline assumed no dependencies on external team throughput. The timeline would shatter on contact with reality.
- **Anxious:** She had no "revert" condition for each major bet. Every decision was framed as one-way.
- **Nonlinear:** The plan assumed 2 weeks of integration → immediate results. Real integration curves are logistic, not linear.
- **Incomprehensible:** 50 pages, no survival condition. Nobody could tell which parts were real and which were filler.

Her plan looked comprehensive because it was long. It was actually comprehensive because it was **long — and therefore uncheckable**.

### The protocol

Clara ran **Great Expectations**.

Great Expectations is a planning protocol with seven integrity gates. The most important one is:

> **Gate 4 — No unowned risk.** Every element in the plan must name who owns it, what "good" looks like, and when they'll know.

After the protocol, Clara's plan collapsed from 50 pages to 5.

But the 5 pages were **true**.

Each of the 5 remaining items had: a survival condition, a falsification date, an owner, a BANI classification, and an anti-consensus test case. The plan was smaller and more frightening. It was also the first honest plan she'd ever written.

---

## Act 4 — They found the body before the launch

### What Clara did

Clara was ready to commit. The 5-page plan was solid. The team was on board. They set a launch date.

Then someone said: "What if the whole thing fails?"

Clara said: "Let's do a pre-mortem."

### The protocol

She ran **Pre-Mortem**.

Pre-Mortem is deceptively simple: *Assume it's 6 months from now, and the product is dead. Write the obituary. Name ≥5 concrete mechanisms that killed it.*

The team wrote the obituary.

Mechanism 1: A competitor ships first (external).
Mechanism 2: Users try it once and never return (retention gap).
Mechanism 3: Integration takes too long per customer (sales friction).
Mechanism 4: **We built what the founder found interesting, not what retention data pointed to** (self-inflicted).
Mechanism 5: Key engineer leaves halfway through (bus factor).

Mechanism 4 hit hard. Clara had been prioritizing the visualization layer — the fun part — over the integration layer — the boring but critical part. The plan had assumed both were equally important. The pre-mortem revealed that the visualization was optional and the integration was existential.

She changed the roadmap that afternoon.

She also ran **Outside View** and **Resulting**:

- **Outside View** — "What's the base-rate success rate for B2B SaaS dependency tools after 2 years?" Answer: ~12%. This made the 18-month timeline look naive. She adjusted expectations and became more aggressive about early validation.
- **Resulting** — "If it works, will we credit the right causes?" She set up a decision journal before launch, so she couldn't rewrite history after the outcome.

---

## Act 5 — The debate that couldn't end

### What Clara did

The team hit a crossroads: build or buy for the graph visualization layer.

Engineering said: "We should build. Existing tools don't handle our scale."
Product said: "We should buy. Building distracts from our core value prop."

The debate went for three meetings. Everyone repeated their position. Nobody changed their mind. The team was getting frustrated.

### What was actually happening

This was not a debate. This was **two people looking at different evidence**.

Engineering was looking at technical debt. Product was looking at time-to-market. They weren't disagreeing about the *solution* — they were disagreeing about which *dimension* to optimize. And they didn't know it, because nobody had said "what dimension are we optimizing?"

### The protocol

Clara ran **Crux Finder**.

Crux Finder locates the one belief whose reversal flips the conclusion.

She asked each person: "What would have to be true for you to change your mind?"

- Engineering: "If an existing library can handle 10K services without performance degradation, I'd reconsider buying."
- Product: "If building would push launch past Q2, I'd reconsider building."

**The crux was throughput.** Not technology. Not cost. Throughput.

Once the crux was visible, the debate collapsed into a single question: "Can we reach 10K-service performance by Q2?" The answer was "probably not" — which meant buy was the right call. The decision took 10 minutes instead of 3 meetings.

She also ran:

- **Source Ledger** — Engineering's claim about "existing tools don't handle our scale" was based on a 2-year-old benchmark, not current data. The claim was tagged as "reported, not verified."
- **Red Cell** — She assigned someone to argue *against* whatever the group chose, with veto power to force reconsideration. This prevented groupthink in the decision.
- **Silent Start** — Before the final decision meeting, everyone wrote their position independently. The initial casual poll turned out to be wrong: two people who'd nodded along actually disagreed. Writing before speaking surfaced the real distribution.

---

## Act 6 — The launch that didn't kill them

### What Clara did

Launch day.

Everything was ready — or as ready as it was going to be. Clara had been iterating for weeks. There was always one more fix, one more test, one more edge case.

"Should we delay?"

### The protocol

Clara ran **Stopping Rule**.

Stopping Rule is the single most undervalued protocol in the entire library. It's not a protocol that tells you what to do. It's a protocol that tells you **when to stop doing things**.

She had committed to her saturation point two weeks earlier: "When the integration test suite passes at 95% and three beta users confirm the setup takes under 15 minutes, we ship."

Both conditions were met on Tuesday. It was now Thursday. The team had found six edge cases since then, and was making no progress on any of them.

The stopping rule said: ship.

She shipped.

---

## Act 7 — The aftermath

### What Clara did

Launch results were mixed.

- 40 signups in the first week (target: 100).
- 8 teams completed onboarding (target: 15).
- 2 teams sent an email saying "this is exactly what we needed" (target: 5).
- 0 teams churned (target: N/A — a win).

Clara's immediate instinct: "The product isn't good enough. We need more features."

### What was actually happening

Clara was **resulting** — judging the decision by the outcome instead of the process.

The outcome (40 signups) felt disappointing. She wanted to change the strategy. But the process was sound:

- The pre-mortem had correctly identified that integration friction was the bottleneck.
- The decision to buy the visualization layer was validated.
- The launch was on time and technically flawless.
- The goal of 100 signups was an estimate, not a commitment.

### The protocol

Clara ran **Resulting** — on herself.

Resulting separates **decision quality** from **outcome quality**. A good decision can produce a bad outcome (the roulette table). A bad decision can produce a good outcome (the roulette table).

| | Good Outcome | Bad Outcome |
|---|---|---|
| **Good Decision** | Deserved success ✅ | Unlucky failure ✅ (learn?) |
| **Bad Decision** | Lucky success 🚨 | Deserved failure ✅ |

Clara's launch was a **good decision with a mixed outcome**. The 40 signups were lower than hoped, but the zero churn and the glowing emails from 2 teams suggested that the product was viable — it just needed more time.

If she had resulted, she would have pivoted to more features, which would have been exactly wrong. What she actually needed was more *distribution*, not more *product*.

---

## Epilogue — The library

Three months later, Clara's product has 220 teams on it. It's not a unicorn. It's a solid, growing company.

But something else happened.

The morning after the Stopping Rule told her to ship, she realized: **the sequence of protocols itself was a reusable methodology.** She had used it not just for this launch, but for the architecture decision, the hiring plan, the partnership negotiation.

She ran **Insight Crystallizer**:

- **Recognize** — "I keep using the same protocol sequence in different contexts."
- **Articulate** — "Surface unknowns → find the tension → set falsifiable expectations → pre-mortem → check base rates → find the crux → stop when saturated."
- **Crystallize** — She wrote a new skill. It's in the library now.

It passed **Curator** because it had: a clear before/after, falsifiable gates, a domain it doesn't apply to, and at least one case where a real practitioner failed by not having it.

---

## What the protocols actually did

If you read 23 SKILL.md files, you would know what each protocol *looks like*. But you wouldn't know what they *do*.

Here's what they do, in Clara's language:

| Problem | Protocol | What it caught |
|---------|----------|----------------|
| "I don't know what I don't know" | Decomposer | 3 unknown unknowns → 3 survival conditions |
| "The feedback is contradictory" | Tension Mining | The contradiction WAS the product insight |
| "My plan looks great" | Great Expectations | 50 pages → 5 pages of truth |
| "We're about to commit" | Pre-Mortem | We were building the wrong part |
| "What are the odds?" | Outside View | 12% base rate → realistic expectations |
| "It worked, so we're good" | Resulting | 40 signups ≠ bad decision |
| "This claim is everywhere" | Source Ledger | "handles scale" → 2-year-old benchmark |
| "Prove me wrong" | Disconfirmation Hunt | The evidence that would falsify the thesis |
| "We keep going in circles" | Crux Finder | The real disagreement was throughput |
| "Everyone agreed in the meeting" | Silent Start | Two silent dissenters |
| "I need an adversary" | Red Cell | Groupthink prevented |
| "When do we ship?" | Stopping Rule | Shipped on time instead of chasing ghosts |
| "Did we just get lucky?" | Resulting (v2) | Zero churn → keep building, don't pivot |
| "This sequence is reusable" | Insight Crystallizer | A new protocol born from practice |

---

## How to use this guide

1. **If you're new to Fundemetal**, read this story once. You will not remember all 23 protocols — but you will remember what they *feel like*. That's enough for the first pass.

2. **If you're about to make a decision**, scan the table above. Which row looks most like your current situation? Go read that SKILL.md.

3. **If you've just made a decision and it went badly**, don't blame yourself. Read **Resulting**. Then read **Disconfirmation Hunt** on your own reasoning.

4. **If you teach these protocols to someone**, use this story. People remember stories about Clara. They don't remember bullet lists of protocol names.

5. **If you want to contribute a skill**, read **Insight Crystallizer**. Then read **Curator** — because the hardest gate is the one that tells you your idea isn't ready yet. (Yes, this protocol has to pass Curator too. It did.)

---

## Why this matters

Clara is not a real person. But every mistake she made is real. I have made each of them. You have too.

The difference between a cognitive protocol library and a collection of "great prompts" is this: prompts tell you what to say. Protocols tell you **how to think** — and they enforce it with gates that the AI cannot bluff through.

Sycophancy Breaker stops the model from agreeing with you when you're wrong. Great Expectations stops you from building a plan that looks good on paper and disintegrates on contact. Pre-Mortem forces you to look at the body before you've killed the patient.

They are not magic. They are **discipline in Markdown files**.

And they work whether you're launching a startup, writing a research paper, or deciding whether to refactor that legacy module. Because the failure modes of thinking don't care about your domain. They recur. They are predictable. And they are falsifiable.

_Clara would tell you this herself, but she's busy running her company — and running the protocol sequence one more time on her next product._

---

CC0 1.0 · MIT © CeaserZhao · part of **Fundemetal** — cognitive protocols for thinking itself.
