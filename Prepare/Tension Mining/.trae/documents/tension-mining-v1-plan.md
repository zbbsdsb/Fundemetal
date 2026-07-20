# Tension Mining v1.0 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Transform Tension Mining from a concept README repo into a professional research methodology repository with Santa Fe Institute x Anthropic Research x Indie Research Lab quality.

**Architecture:** Directory-based skill structure following Anthropic Agent Skills Specification with YAML Frontmatter, progressive disclosure (metadata -> instructions -> resources), and cross-referenced atlases, examples, and templates.

**Tech Stack:** Markdown, YAML Frontmatter, ASCII art, Mermaid diagrams (GitHub-native)

---

## Summary

This plan transforms the current Tension Mining repo (2 files with content, 5 empty files) into a complete research methodology infrastructure with 18 deliverables. The repo will serve dual purposes: (1) a human-readable philosophy of tension-driven discovery, and (2) an AI-executable skill protocol. All content is in English. All 7 case studies will be completed at paper-level depth (1500-2500 words each).

## Current State Analysis

| File | Status | Issue |
|------|--------|-------|
| `README.md` | Has content | Lacks ASCII workflow diagram, not philosophy-forward enough, no visual symbol |
| `SKILL.md` | Has content | Missing YAML Frontmatter, not Agent Skills Spec compliant, no directory structure |
| `tension-atlas.md` | Empty | Needs core catalog of 20+ tensions |
| `invariant-atlas.md` | Empty | Needs core catalog of 12+ invariants |
| `examples/agent-organization.md` | Empty | Needs 7 complete case studies |
| `templates/npc-society.md` | Empty | Needs 5 professional templates |
| `LICENSE` | Complete (MIT) | OK |

**Key gaps:**
- No visual symbol (like OODA loop's Observe-Orient-Decide-Act)
- No executable AI protocol (missing YAML Frontmatter)
- No populated atlases (the "periodic table" promise is unfulfilled)
- No case studies demonstrating the 7-phase workflow
- No templates for immediate reuse

## Proposed Changes

### Task 1: Reconstruct README.md

**Files:**
- Modify: `README.md`

**What:** Transform from descriptive doc to philosophy manifesto with ASCII workflow diagram as visual symbol.

**Why:** The repo's core value is a research philosophy, not a framework. README must communicate this immediately. The ASCII diagram will become the repo's iconic visual symbol (like OODA loop).

**How:**
- Open with one-liner: "Most people search for solutions. Great researchers search for tensions."
- Add ASCII workflow diagram (5-layer vertical flow: Reality -> Phenomena -> Tensions -> Invariants -> Mechanisms -> Algorithms)
- Philosophy section: why tensions matter (PageRank, Bitcoin, Wikipedia, Transformer origin stories)
- Core idea table: domain/tension pairs
- Workflow overview with key questions per phase
- "What This Is Not" section (not prompt collection, not brainstorming template, not productivity framework)
- Navigation map pointing to SKILL.md, tension-atlas.md, invariant-atlas.md, examples/, templates/
- Footer with license and attribution

---

### Task 2: Reconstruct SKILL.md (Agent Skills Spec Compliant)

**Files:**
- Modify: `SKILL.md`

**What:** Convert to executable AI protocol with YAML Frontmatter, progressive disclosure, and relative path references.

**Why:** Without Agent Skills Spec compliance, this repo is an article, not a skill. AI agents cannot discover or execute it.

**How:**
- Add YAML Frontmatter:
  ```yaml
  ---
  name: tension-mining
  description: >
    Discover invariants hidden inside complex systems by mining tensions across reality,
    phenomena, and mechanisms. Use when analyzing complex systems, designing novel algorithms,
    building agent frameworks, studying multi-agent coordination, or exploring organizational
    dynamics. Not for simple optimization tasks or known-solution problems.
  license: MIT
  compatibility: Designed for research-oriented AI agents with markdown output capabilities
  metadata:
    author: CeaserZhao
    version: "1.0"
    domain: complex-systems-research
    methodology: tension-driven-discovery
  ---
  ```
- Restructure body into: Core Principle -> 7-Phase Overview -> Phase Execution Instructions -> Output Specification -> File References
- Keep body under 500 lines (detailed phase guides go to references/)
- Use relative paths for all external references (`./tension-atlas.md`, `./examples/`, etc.)
- Add "When NOT to Use" boundary conditions

---

### Task 3: Create tension-atlas.md

**Files:**
- Create: `tension-atlas.md`

**What:** Catalog of 20+ persistent tensions across 5 domains, each with full definition, cross-domain examples, over-optimization consequences, and linked invariants.

**Why:** This is the "force catalog" -- the most valuable long-term asset. With 200+ tensions, this becomes a research dataset.

**How:**
- Structure: Introduction -> Usage Guide -> 5 Domain Sections -> Extension Guide
- 5 domains: Cognition & Information, Society & Organization, Computation & Systems, Life & Evolution, Design & Product
- Each tension entry contains:
  - Force A / Force B
  - One-sentence definition
  - Why the tradeoff is ineliminable (1 paragraph)
  - Cross-domain examples (2-3)
  - Consequences of over-optimizing Force A
  - Consequences of over-optimizing Force B
  - Related invariants (links to invariant-atlas.md)
- Use [CORE] tag for tensions validated in multiple cases
- Include ID system for cross-referencing (e.g., `T-AUT-001` for Autonomy vs Control)

---

### Task 4: Create invariant-atlas.md

**Files:**
- Create: `invariant-atlas.md`

**What:** Catalog of 12+ cross-domain invariants across 4 abstraction layers, each with supporting phenomena, mechanism explanation, mathematical intuition, boundary conditions, and linked tensions.

**Why:** If tension-atlas is "forces", invariant-atlas is "laws". Together they approach a Complex Systems Handbook.

**How:**
- Structure: Introduction -> Usage Guide -> 4 Abstraction Layers -> Extension Guide
- 4 layers: Information, Identity & Boundaries, Networks & Flows, Evolution & Adaptation
- Each invariant entry contains:
  - Precise statement (1 sentence)
  - Supporting phenomena (3+ cross-domain examples)
  - Mechanism explanation (why this principle holds)
  - Mathematical intuition (where applicable)
  - Boundary conditions (when it does NOT apply)
  - Related tensions (links to tension-atlas.md)
  - Related cases (links to examples/)
- Use [CORE] tag for invariants validated in 3+ cases
- Include ID system (e.g., `I-LCG-001` for Local Creates Global)

---

### Task 5: Create examples/page-rank.md

**Files:**
- Create: `examples/page-rank.md`

**What:** Complete 7-phase tension mining case study for PageRank (~1500-2500 words).

**Why:** PageRank is the perfect entry case -- everyone knows it, but few know it began with a question about "importance".

**How:**
- Phase 1: Phenomena (citation networks, social status, academic impact, recommendation systems, neural activation)
- Phase 2: Tensions (Importance vs Computability, Local vs Global, Static vs Dynamic)
- Phase 3: Invariants (Local Creates Global, Preferential Attachment, Flow Finds Gradient)
- Phase 4: Mechanisms (Random walk, Eigenvector centrality, Markov chains)
- Phase 5: System Model (graph + random surfer + convergence)
- Phase 6: Algorithm (PageRank equation, power iteration, damping factor)
- Phase 7: Destruction (link farms, manipulation, topic drift, personalization failure)
- Cross-reference tension-atlas.md and invariant-atlas.md entries by ID

---

### Task 6: Create examples/transformer.md

**Files:**
- Create: `examples/transformer.md`

**What:** Complete 7-phase case study for Transformer architecture (~1500-2500 words).

**Why:** Transformer began with "whether recurrence was necessary at all" -- a pure tension question.

**How:**
- Phase 1: Phenomena (language hierarchy, music structure, visual attention, human reading patterns, information retrieval)
- Phase 2: Tensions (Recurrence vs Parallelism, Context vs Computation, Global vs Local, Generality vs Efficiency)
- Phase 3: Invariants (Relevant Information is Sparse, Gradients Drive Movement, Attention as Selective Focus)
- Phase 4: Mechanisms (Self-attention, Multi-head attention, Positional encoding, Feed-forward networks)
- Phase 5: System Model (query-key-value + softmax + residual connections)
- Phase 6: Algorithm (Attention mechanism, scaled dot-product, layer stacking)
- Phase 7: Destruction (quadratic complexity, context length limits, hallucination, attention sink)

---

### Task 7: Create examples/bitcoin.md

**Files:**
- Create: `examples/bitcoin.md`

**What:** Complete 7-phase case study for Bitcoin (~1500-2500 words).

**Why:** The canonical tension story -- decentralization vs trust, solved by proof-of-work.

**How:**
- Phase 1: Phenomena (gold as store of value, banking systems, Byzantine generals, peer-to-peer networks, digital scarcity)
- Phase 2: Tensions (Decentralization vs Trust, Anonymity vs Accountability, Scarcity vs Utility, Security vs Efficiency)
- Phase 3: Invariants (Identity Drives Cooperation, Boundaries Shape Behavior, Consensus Requires Cost)
- Phase 4: Mechanisms (Proof-of-work, Longest chain rule, Cryptographic hashing, Economic incentives)
- Phase 5: System Model (blockchain + miners + difficulty adjustment + halving)
- Phase 6: Algorithm (SHA-256 mining, difficulty retargeting, UTXO model)
- Phase 7: Destruction (51% attack, energy consumption, scalability trilemma, quantum computing threat)

---

### Task 8: Create examples/git.md

**Files:**
- Create: `examples/git.md`

**What:** Complete 7-phase case study for Git version control (~1500-2500 words).

**Why:** Git solves divergence vs convergence tension in distributed collaboration.

**How:**
- Phase 1: Phenomena (text evolution, collaborative writing, code branching, merge conflicts, snapshot systems)
- Phase 2: Tensions (Divergence vs Convergence, History vs Flexibility, Local vs Global State, Simplicity vs Power)
- Phase 3: Invariants (Boundaries Shape Behavior, Identity Drives Cooperation, Local Rules Create Global Order)
- Phase 4: Mechanisms (Directed acyclic graph, Content-addressable storage, Three-way merge, Rebase vs merge)
- Phase 5: System Model (objects + references + plumbing + porcelain)
- Phase 6: Algorithm (Merkle tree, diff/patch, fast-forward merge, conflict resolution)
- Phase 7: Destruction (merge hell, history rewriting dangers, submodule complexity, large file handling)

---

### Task 9: Create examples/wikipedia.md

**Files:**
- Create: `examples/wikipedia.md`

**What:** Complete 7-phase case study for Wikipedia (~1500-2500 words).

**Why:** Openness vs reliability tension solved by emergent governance mechanisms.

**How:**
- Phase 1: Phenomena (encyclopedias, open source, edit wars, expert communities, knowledge markets)
- Phase 2: Tensions (Openness vs Reliability, Speed vs Accuracy, Consensus vs Truth, Scale vs Quality)
- Phase 3: Invariants (Feedback Loops Stabilize, Identity Drives Cooperation, Variation Enables Selection)
- Phase 4: Mechanisms (Edit history, Talk pages, Admin hierarchy, Revert rules, Citation requirements)
- Phase 5: System Model (open editing + transparent history + community governance + quality norms)
- Phase 6: Algorithm (Page protection, Vandalism detection, Featured article process, Consensus algorithms)
- Phase 7: Destruction (systemic bias, deletionism vs inclusionism, expert flight, disinformation campaigns)

---

### Task 10: Create examples/npc-society.md

**Files:**
- Create: `examples/npc-society.md`

**What:** Complete 7-phase case study for NPC society design in games (~1500-2500 words).

**Why:** Directly relevant to the user's AI/Agent interests; shows methodology applied to synthetic systems.

**How:**
- Phase 1: Phenomena (ant colonies, human cities, MMO economies, The Sims, Dwarf Fortress)
- Phase 2: Tensions (Survival vs Exploration, Individual vs Collective, Emergence vs Design, Variety vs Performance)
- Phase 3: Invariants (Local Rules Create Global Order, Gradients Drive Movement, Variation Enables Selection)
- Phase 4: Mechanisms (Need-based AI, Utility systems, Social networks, Economic simulation, Event propagation)
- Phase 5: System Model (agents + needs + relationships + environment + events)
- Phase 6: Algorithm (Behavior trees, GOAP, Utility AI, Emergent narrative systems)
- Phase 7: Destruction (player exploitation, emergent racism/sexism, economy collapse, narrative incoherence)

---

### Task 11: Create examples/agent-organization.md

**Files:**
- Create: `examples/agent-organization.md`

**What:** Complete 7-phase case study for AI agent organization design (~1500-2500 words).

**Why:** The most forward-looking case -- applying tension mining to the design space the user is actively working in.

**How:**
- Phase 1: Phenomena (human organizations, bee hives, immune systems, distributed systems, market economies)
- Phase 2: Tensions (Autonomy vs Coordination, Specialization vs Resilience, Hierarchy vs Network, Trust vs Verification)
- Phase 3: Invariants (Tradeoffs Are Inescapable, Identity Drives Cooperation, Feedback Loops Stabilize)
- Phase 4: Mechanisms (Message passing, Role assignment, Reputation systems, Consensus protocols, Hierarchical delegation)
- Phase 5: System Model (agents + roles + communication topology + coordination protocol + failure model)
- Phase 6: Algorithm (Multi-agent reinforcement learning, Swarm intelligence, Hierarchical RL, Market-based control)
- Phase 7: Destruction (cascading failures, alignment drift, coordination collapse, adversarial manipulation)

---

### Task 12: Create templates/ai-agent.md

**Files:**
- Create: `templates/ai-agent.md`

**What:** Fill-in-the-blank template for AI Agent design using Tension Mining.

**Why:** Templates are what make the methodology immediately usable. This is where "skill" becomes "tool".

**How:**
- Usage instructions (when to use this template)
- Pre-filled phenomenon library (LLM limitations, tool use patterns, memory mechanisms, reasoning traces)
- Pre-filled tension checklist (Autonomy vs Control, Capability vs Alignment, Latency vs Quality, General vs Specialized)
- Pre-filled invariant checklist (Relevant Information is Sparse, Feedback Loops Stabilize, Boundaries Shape Behavior)
- Pre-filled mechanism library (ReAct, Chain-of-thought, RAG, Multi-agent debate)
- 7-phase workflow with fill-in prompts
- Standardized output format

---

### Task 13: Create templates/npc-society.md

**Files:**
- Create: `templates/npc-society.md`

**What:** Fill-in-the-blank template for NPC society construction.

**How:**
- Usage instructions
- Pre-filled phenomenon library (Maslow's hierarchy, social stratification, economic systems, cultural evolution)
- Pre-filled tension checklist (Survival vs Exploration, Individual vs Collective, Emergence vs Design)
- Pre-filled invariant checklist (Local Rules Create Global Order, Gradients Drive Movement, Identity Drives Cooperation)
- Pre-filled mechanism library (Need-based AI, Utility systems, Social networks, Economic simulation)
- 7-phase workflow with fill-in prompts
- Standardized output format

---

### Task 14: Create templates/organization.md

**Files:**
- Create: `templates/organization.md`

**What:** Fill-in-the-blank template for organizational design.

**How:**
- Usage instructions
- Pre-filled phenomenon library (Dunbar's number, Conway's law, Parkinson's law, agile teams, holacracy)
- Pre-filled tension checklist (Freedom vs Efficiency, Innovation vs Stability, Centralization vs Decentralization)
- Pre-filled invariant checklist (Identity Drives Cooperation, Boundaries Shape Behavior, Tradeoffs Are Inescapable)
- Pre-filled mechanism library (Hierarchical delegation, Cross-functional teams, OKRs, Retrospectives)
- 7-phase workflow with fill-in prompts
- Standardized output format

---

### Task 15: Create templates/protocol-design.md

**Files:**
- Create: `templates/protocol-design.md`

**What:** Fill-in-the-blank template for distributed protocol design.

**How:**
- Usage instructions
- Pre-filled phenomenon library (TCP/IP, Byzantine consensus, CAP theorem, gossip protocols, blockchain)
- Pre-filled tension checklist (Consistency vs Availability, Security vs Performance, Complexity vs Usability)
- Pre-filled invariant checklist (Consensus Requires Cost, Boundaries Shape Behavior, Feedback Loops Stabilize)
- Pre-filled mechanism library (Leader election, Quorum consensus, Cryptographic verification, Timeout/retry)
- 7-phase workflow with fill-in prompts
- Standardized output format

---

### Task 16: Create templates/algorithm-discovery.md

**Files:**
- Create: `templates/algorithm-discovery.md`

**What:** Fill-in-the-blank template for novel algorithm discovery.

**How:**
- Usage instructions
- Pre-filled phenomenon library (sorting, graph traversal, optimization, approximation, randomized algorithms)
- Pre-filled tension checklist (Exact vs Approximate, Time vs Space, General vs Specialized, Deterministic vs Randomized)
- Pre-filled invariant checklist (Compression Reveals Structure, Gradients Drive Movement, Local Creates Global)
- Pre-filled mechanism library (Divide and conquer, Dynamic programming, Greedy selection, Local search)
- 7-phase workflow with fill-in prompts
- Standardized output format

---

### Task 17: Create references/methodology-primer.md

**Files:**
- Create: `references/methodology-primer.md`

**What:** Extended reading for users who want deeper understanding of the methodology.

**Why:** SKILL.md must stay under 500 lines. Detailed methodology explanation goes here for users who want depth.

**How:**
- Comparison with related methodologies (Design Thinking, Systems Dynamics, First Principles, OODA Loop)
- Historical case studies of tension-driven breakthroughs
- Common pitfalls and how to avoid them (premature algorithmization, confirmation bias, domain myopia)
- Glossary of terms with precise definitions
- Recommended reading (Santa Fe Institute papers, complexity science classics)
- FAQ

---

## Assumptions & Decisions

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Language | English only | Research methodology international standard; user's explicit choice |
| Case depth | Paper-level (1500-2500 words each) | User's explicit choice; enables serious research reference |
| Case scope | All 7 cases | User's explicit choice; full completeness from launch |
| ID system | Yes (`T-XXX-NNN` for tensions, `I-XXX-NNN` for invariants) | Enables precise cross-referencing across all files |
| ASCII art | Yes (instead of images) | Pure text, universally compatible, fits research methodology aesthetic |
| License | MIT (keep existing) | Maximum academic and commercial usability |
| SKILL.md line limit | Under 500 lines | Anthropic Agent Skills Spec recommendation |
| Directory structure | Flat (no deep nesting) | Agent Skills Spec best practice; avoids broken relative paths |

## Verification Steps

1. **Structure validation**: All 18 files exist and are non-empty. No "TODO", "FIXME", or "coming soon" placeholders anywhere.
2. **Spec compliance**: SKILL.md has valid YAML Frontmatter with `name`, `description` (includes trigger conditions), `license`. Body is under 500 lines. All external references use relative paths.
3. **Cross-reference integrity**: Every case study references tension-atlas entries by ID. Every case study references invariant-atlas entries by ID. Tension-atlas and invariant-atlas have bidirectional links.
4. **Completeness check**: Each of the 7 case studies completes all 7 phases without skipping. Each template has all 5 pre-filled libraries and a complete 7-phase workflow.
5. **Consistency check**: Terminology is uniform across all files (e.g., "Phenomenon" vs "Phenomena" usage, "Tension" definition consistent).
6. **Readability test**: ASCII diagram renders correctly in GitHub preview. All tables align properly. All links are valid relative paths.

---

## Deliverables

| # | File Path | Description |
|---|-----------|-------------|
| 1 | `README.md` | Philosophy manifesto + ASCII workflow diagram + repo navigation |
| 2 | `SKILL.md` | Agent Skills Spec compliant AI-executable protocol |
| 3 | `tension-atlas.md` | 20+ core tensions, 5 domains, with IDs and cross-references |
| 4 | `invariant-atlas.md` | 12+ core invariants, 4 layers, with IDs and cross-references |
| 5 | `examples/page-rank.md` | Complete 7-phase case study |
| 6 | `examples/transformer.md` | Complete 7-phase case study |
| 7 | `examples/bitcoin.md` | Complete 7-phase case study |
| 8 | `examples/git.md` | Complete 7-phase case study |
| 9 | `examples/wikipedia.md` | Complete 7-phase case study |
| 10 | `examples/npc-society.md` | Complete 7-phase case study |
| 11 | `examples/agent-organization.md` | Complete 7-phase case study |
| 12 | `templates/ai-agent.md` | Fill-in-the-blank template |
| 13 | `templates/npc-society.md` | Fill-in-the-blank template |
| 14 | `templates/organization.md` | Fill-in-the-blank template |
| 15 | `templates/protocol-design.md` | Fill-in-the-blank template |
| 16 | `templates/algorithm-discovery.md` | Fill-in-the-blank template |
| 17 | `references/methodology-primer.md` | Extended methodology reference |
| 18 | `LICENSE` | MIT license (existing) |
