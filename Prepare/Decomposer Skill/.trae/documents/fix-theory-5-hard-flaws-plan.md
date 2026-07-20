# Fix Plan: 5 Structural Issues in Decomposer Theory Layer

## Summary

Five hard flaws were identified by running the Decomposer protocol's own Anti-Shell Self-Check against MANIFEST.md, PROTOCOL.md, and FIELD_GUIDE.md. All three documents need targeted fixes before the theory layer is stable enough to support a TRAE Skill implementation.

## Current State Analysis

- **MANIFEST.md**: Contains an absolute promise ("exactly") that violates the protocol's own honesty principle.
- **PROTOCOL.md**: Has well-structured steps but lacks an end-to-end example, a standalone definition of "Survival Condition," a documented transition from Step 2 to Step 3, and a definition of the atomic "Element" unit.
- **FIELD_GUIDE.md**: Missing human self-execution annotation, making the protocol appear AI-dependent.
- Metrics: 70%/30% rules are stated as hard facts but are uncalibrated heuristics. Three decision cards appear in a manifestation context without clarifying their relationship to the protocol.

## Proposed Changes

### 1. MANIFEST.md — Fix absolute promise (Hard Flaw 5)

**File**: `MANIFEST.md`
**Line**: ~70 (the final promise paragraph)

**What**: Replace three instances of "exactly" with a term that preserves conviction without claiming false precision.

**Why**: The protocol's core thesis is that honest uncertainty is superior to fabricated certainty. An absolute promise ("exactly what you know") contradicts that thesis. The fix must be concrete enough to survive the Honesty Check.

**How**: Change "exactly" → "roughly" (three occurrences). This signals residual uncertainty while keeping the promise meaningful.

### 2. PROTOCOL.md — Define "Element" as atomic unit (Hard Flaw 4)

**File**: `PROTOCOL.md`
**Section**: Step 2, between `### What It Is` and `### The Three Zones`

**What**: Add a new subsection `### What Is an Element?` that defines the atomic unit of mapping.

**Why**: Without a definition, different readers decompose the same request into different granularities, producing incomparable maps. The protocol's repeatability depends on this.

**How**: Define element as "a claim-that-needs-testing, not a component or a task." Provide three rules of thumb and a correct/incorrect example.

### 3. PROTOCOL.md — Define "Survival Condition" as a standalone concept (Hard Flaw 2)

**File**: `PROTOCOL.md`
**Section**: Before Step 3, as a new subsection `### Core Concept: Survival Condition`

**What**: Add a standalone definition of "Survival Condition" as a pair of falsifiable statements ("Alive if" / "Dead if").

**Why**: The term appears ~20 times across Steps 3, 4, and 5 but is never independently defined. Readers infer different meanings.

**How**: Write a definition paragraph with 2-3 examples. Update Step 3 and Step 4 references to point to this definition rather than re-describing it inline.

### 4. PROTOCOL.md — Document Step 2-to-3 transition (Hard Flaw 3)

**File**: `PROTOCOL.md`
**Section**: Between Step 2 and Step 3, as a new subsection under Step 3

**What**: Add a subsection `### The Transition: From Flat Map to Hierarchical Tree` that explains how to convert a flat zone-classified list into a cognitive dependency tree.

**Why**: This is the most operationally difficult step in the protocol. The current text provides three questions to ask but no procedure for applying them.

**How**: Describe a three-step procedure: (1) Identify root unknowns, (2) Apply the dependency test to every pair of elements, (3) Prune the tree. Include a 4-element mini-example.

### 5. PROTOCOL.md — Add end-to-end worked example (Hard Flaw 1)

**File**: `PROTOCOL.md`
**Section**: After `## The Ultimate Test`, before `## Protocol Constraints`

**What**: Add a new section `## End-to-End Worked Example: "Build the Next TikTok"` that runs a single request through all five steps.

**Why**: The protocol's core claim is "you can read this and apply it." Without a complete example, that claim is unverifiable.

**How**: Write a ~150-line example using a recognizable project (short-video platform). Each step output is in a blockquote. The example shows the Honesty Fuse declaration, a flat map with 8-10 elements, a hierarchical tree, error budget assignments for 2-3 nodes, and the self-check catching a failure.

### 6. PROTOCOL.md — Mark 70%/30% rules as empirical heuristics (Minor Issue A)

**File**: `PROTOCOL.md`
**Locations**: `### The 70% Rule` (Step 2) and `**3. Uncertainty Ratio Check**` (Step 5, Check 3)

**What**: Add a parenthetical note to both locations stating these thresholds are empirical heuristics, not calibrated metrics.

**Why**: Presenting uncalibrated numbers as hard rules is itself a form of false precision. The protocol must model the honesty it demands.

**How**: Add one sentence to each location.

### 7. PROTOCOL.md — Clarify three decision cards position (Minor Issue B)

**File**: `PROTOCOL.md`
**Section**: Step 3, "How It Manifests Across Contexts" → Decision-maker

**What**: Add a parenthetical note explaining that the three cards are a role-specific rendering of Step 3's output, not a separate protocol output.

**Why**: The cards appear as a concrete deliverable in the decision-maker context but are never referenced elsewhere, creating ambiguity about whether they are part of the protocol or an application-layer artifact.

**How**: Add one parenthetical sentence.

### 8. FIELD_GUIDE.md — Add human self-execution annotation (Minor Issue C)

**File**: `FIELD_GUIDE.md`
**Section**: After `## Annotation 2: Twitter Long-Form Essays`

**What**: Add `## Annotation 3: Human Self-Execution (Pen and Paper)`.

**Why**: The field guide covers AI-assisted and Twitter contexts but has no annotation for a person executing the protocol alone. This makes the protocol look AI-dependent.

**How**: Describe a 1-hour human workflow using whiteboard, sticky notes, and colored markers. Each step maps to a physical action. No tools, no AI, no software.

## Execution Order

```
1. MANIFEST.md fix (independent, 1 line change)
2. PROTOCOL.md Step 2 — add "Element" definition (no dependencies)
3. PROTOCOL.md Step 3 concept — add "Survival Condition" definition (depends on "Element" being clear)
4. PROTOCOL.md Step 2→3 — add transition subsection (depends on both definitions existing)
5. PROTOCOL.md end-to-end example (depends on all definitions and transition existing)
6. PROTOCOL.md 70%/30% heuristic notes (independent)
7. PROTOCOL.md decision cards clarification (independent)
8. FIELD_GUIDE.md human self-execution annotation (independent)
```

## Commit

Single commit with English message. All changes are to text documents; no code.

```
fix: resolve 5 structural issues in protocol documents

- MANIFEST.md: replace absolute promise ("exactly") with honest qualifier
- PROTOCOL.md: add explicit definition of "Element" as atomic mapping unit
- PROTOCOL.md: add standalone definition of "Survival Condition" core concept
- PROTOCOL.md: document the Step 2-to-3 flat-map-to-tree transition
- PROTOCOL.md: add full end-to-end worked example spanning Steps 1-5
- PROTOCOL.md: tag 70%/30% rules as empirical heuristics (uncalibrated)
- PROTOCOL.md: clarify three decision cards as role-specific rendering
- FIELD_GUIDE.md: add human self-execution annotation (pen and paper)
```

## Verification

1. Read each modified file after editing to confirm no structural damage.
2. Run the Anti-Shell Self-Check against the final state: all five checks must pass.
3. Confirm the commit message is in English and covers all changes.