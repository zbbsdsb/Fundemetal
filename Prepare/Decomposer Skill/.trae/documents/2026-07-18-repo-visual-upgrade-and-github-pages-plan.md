# Plan: Repository Visual Upgrade & GitHub Pages — Swiss Style

**Date**: 2026-07-18
**Scope**: Full visual overhaul of the Decomposer Skill repository to world-class standards, implementing Swiss Style (International Typographic Style) design language across all surfaces.

---

## Summary

Elevate the Decomposer Skill repository from functional but visually generic to a world-class open-source project presence. This covers: (1) visual identity/logo refinement, (2) a GitHub Pages site with strict Swiss Style (black/white, grid-driven, typography-first), (3) README redesign, (4) CONTRIBUTING.md upgrade with templates, (5) an interactive demo page, and (6) GitHub Actions CI/CD for deployment.

---

## Current State Analysis

| Surface | Current State | Problem |
|---------|--------------|---------|
| **Logo System** | `logo-horizontal.svg`, `logo-icon.svg`, `og-card.svg` | Basic SVGs, no brand system, no Swiss Style rigor |
| **docs/index.html** | Dark theme, Inter font, gradient effects, cards, emoji, glassmorphism — generic "dark SaaS" style | NOT Swiss Style. Over-designed decorative elements violate Swiss principles |
| **README.md** | Rich Markdown with emoji indicators (🚨🗺️🌳📊🔍), colored badges, dashed borders | Noisy, uses emoji as visual crutches, not Swiss |
| **CONTRIBUTING.md** | Exists, short, no templates, no examples | Functional but lacks professionalism and structure |
| **Demo/Example** | None | No dedicated interactive or visual demo page |
| **GitHub Pages** | None | No deployment, no CNAME, no Actions workflow, no `.nojekyll` |
| **GitHub Actions** | None | No CI/CD for the site |
| **.gitignore** | Basic | Missing `_site/` (Jekyll output), `Gemfile.lock` |

---

## Proposed Changes

### Change 1: Logo & Visual Identity System

**Files affected**: `assets/images/logo-horizontal.svg`, `assets/images/logo-icon.svg`, `assets/images/og-card.svg`, `assets/diagrams/protocol-flow.svg`

**What**: Redesign all SVG assets to strict Swiss Style — pure black outlines, no fills (except the center dot), strict geometric precision, Helvetica/Inter typography. Remove all gray tones from the logo; use only black (#000000) and white (#FFFFFF).

**Why**: The current logos are functional but not distinctive. A Swiss Style logo system is the foundation of the visual identity.

**How**:
- `logo-icon.svg`: The concentric circles + arrow motif. Keep the concept, refine geometry — use exact 1px strokes, precise mathematical proportions. The center dot is the only filled element.
- `logo-horizontal.svg`: Icon + "DECOMPOSER" in all caps, with a thin horizontal rule and "UNKNOWN → KNOWN" in spaced small caps below.
- `og-card.svg`: Full redesign — pure black border frame, logo centered, all caps headline, thin rule separator, tagline in spaced small caps. No gray tones.
- `protocol-flow.svg`: Keep the existing structure but convert to strict black/white, remove all mid-gray fills, use thin hairline borders, all caps labels.

---

### Change 2: GitHub Pages Site — Swiss Style (docs/)

**Files affected**: `docs/index.html` (rewrite), `docs/404.html` (new), `docs/.nojekyll` (new), `docs/CNAME` (optional, new)

**What**: Rewrite the entire `docs/index.html` as a Swiss Style site. This is the most significant change.

**Design specifications**:
- **Color**: Strict B&W. Background: `#FFFFFF` (white). Text: `#000000` (black). Secondary: `#666666` (gray 50%). Dividers: `#CCCCCC` (gray 20%). No colors, no gradients, no shadows.
- **Typography**: `Helvetica Neue`, `Helvetica`, `Arial`, sans-serif (no Inter for the Swiss look — Helvetica is the canonical Swiss typeface). All navigation labels in ALL CAPS with loose letter-spacing.
- **Grid**: 12-column CSS Grid, 8px atomic unit, max-width 1200px. Asymmetrical layout — content blocks offset across columns.
- **No decorative elements**: No cards. No rounded corners. No shadows. No gradients. No emoji. No icons in navigation. Content hierarchy is created through typography (size, weight, spacing) and grid positioning, not boxes or backgrounds.
- **Navigation**: Fixed top bar, white background, thin 1px bottom border. Logo left, nav links right (ALL CAPS, spaced). No hamburger menu on desktop.
- **Hero**: Full-width, no background gradient. Large headline in bold (72-96px), left-aligned, followed by a short subheadline. A thin horizontal rule separates the headline from the tagline. Below: two CTAs as outlined buttons (black border, no fill, ALL CAPS).
- **Sections**: Each section introduced by a small ALL CAPS label (e.g., "THE PROBLEM") with generous letter-spacing. Section title in bold. Content in a 2-column or 3-column grid layout. Use vertical spacing (48px/64px/96px) to separate sections, not dividers.
- **Protocol diagram**: Full-width, thin border, no shadow.
- **Comparison table**: Two-column grid, no card backgrounds, just thin borders and typography. No colored tags — use black-on-white text labels.
- **Metrics**: Two columns, no card backgrounds, just a thin border and bold label.
- **Adapters**: Four-column grid, each item is just text + underline on hover. No card boxes, no emoji.
- **Footer**: Thin top border, centered text, social links as text-only (no icons).
- **Responsive**: Single column on mobile, same typographic hierarchy.

**Pages**:
- `docs/index.html` — Main site (rewrite)
- `docs/404.html` — Custom 404 page, same Swiss Style
- `docs/.nojekyll` — Empty file to bypass Jekyll processing (GitHub Pages requirement)
- `docs/CNAME` — Optional: if a custom domain is configured

---

### Change 3: README.md — Swiss Style Redesign

**Files affected**: `README.md`

**What**: Remove all emoji from the README. Replace emoji indicators (🚨🗺️🌳📊🔍) with Swiss Style typographic markers — use ALL CAPS labels, thin rules, or numeric indicators. Replace the five-step table with a cleaner list. Remove the ASCII comparison box (doesn't render well on GitHub). Keep the same information but present it with typographic discipline.

**Why**: The README is the front door of the repository. Emoji and ASCII art violate the Swiss Style principle of "form follows function" — they are decoration, not information.

**How**:
- Remove all emoji from headers, tables, and badges.
- Replace the step table with a clean numbered list: `**01** Honesty Fuse` format.
- Replace the ASCII comparison box with a Markdown table.
- Replace the colored badges with simple text labels "MIT · ALPHA · AGNOSTIC".
- Remove the Twitter share link (it's noisy).
- Keep the logo, the problem statement, the core claim, and the protocol description.
- Add a "GitHub Pages" badge/link pointing to the docs site.

---

### Change 4: CONTRIBUTING.md — Upgrade with Templates

**Files affected**: `CONTRIBUTING.md`, `.github/ISSUE_TEMPLATE/bug_report.md` (new), `.github/ISSUE_TEMPLATE/feature_request.md` (new), `.github/PULL_REQUEST_TEMPLATE.md` (new)

**What**: Upgrade the CONTRIBUTING.md to include:
1. A clear code of conduct reference
2. Issue templates (bug report, protocol improvement, adapter request)
3. PR template with checklist
4. A worked example of a good contribution
5. Development setup instructions (for testing the site locally)

**Why**: The current CONTRIBUTING.md is too short and lacks the structure that signals a professional open-source project. Issue/PR templates enforce quality standards.

**How**:
- CONTRIBUTING.md: Restructure into sections: "Getting Started", "What We Accept", "What We Don't Accept", "How to Contribute" (step-by-step), "Development Setup", "Style Guide", "Pull Request Process", "License".
- ISSUE templates: YAML frontmatter, structured form with required fields.
- PR template: Checklist referencing the Anti-Shell Self-Check.

---

### Change 5: Demo/Example Page

**Files affected**: `docs/demo.html` (new), `docs/demo/` (optional, new directory for assets)

**What**: Create a standalone interactive demo page at `docs/demo.html` that walks through the "Build the Next TikTok" example from PROTOCOL.md. This is NOT a web app — it's a static, beautifully typeset page that presents the full worked example in the Swiss Style.

**Sections**:
1. The Request: "I want to build a short-video platform like TikTok..."
2. Step 1: Honesty Fuse — displayed as a blockquote, left-aligned
3. Step 2: Uncertainty Map — rendered as a strict typographic table
4. Step 3: Decomposition — rendered as an ASCII tree or CSS-styled tree
5. Step 4: Error Budget — rendered as a table with Alive/Dead conditions
6. Step 5: Self-Check — rendered as a checklist
7. The First Step — highlighted in bold

**Why**: A concrete worked example is the most effective way to demonstrate the protocol's value. Newcomers can see the entire flow in a single page.

**How**: Same Swiss Style as the main site. Black/white, Helvetica, grid, no decoration. The example content already exists in PROTOCOL.md — this is a reformatting exercise.

---

### Change 6: GitHub Actions CI/CD

**Files affected**: `.github/workflows/deploy-pages.yml` (new), `.gitignore` (update)

**What**: Create a GitHub Actions workflow that deploys the `docs/` directory to GitHub Pages on every push to `main`.

**Why**: GitHub Pages requires either a `gh-pages` branch or a GitHub Actions workflow. The Actions approach is the modern standard and avoids branch management overhead.

**How**:
- Workflow: `actions/upload-pages-artifact@v3` + `actions/deploy-pages@v4` (the modern GitHub Pages deployment action).
- Trigger: `push` to `main`, paths: `docs/**`.
- `.gitignore`: Add `_site/` (Jekyll output, though we're not using Jekyll, it's good practice), `Gemfile.lock`.
- GitHub Pages settings: Set to deploy from GitHub Actions (not from a branch).

---

### Change 7: .gitignore Update

**Files affected**: `.gitignore`

**What**: Add entries for GitHub Pages artifacts and build outputs.

**How**: Add:
```
# GitHub Pages
_site/
.sass-cache/
.jekyll-cache/
.jekyll-metadata
Gemfile.lock
```

---

## Files Changed Summary

| File | Action | Type |
|------|--------|------|
| `assets/images/logo-horizontal.svg` | Modify | Visual |
| `assets/images/logo-icon.svg` | Modify | Visual |
| `assets/images/og-card.svg` | Modify | Visual |
| `assets/diagrams/protocol-flow.svg` | Modify | Visual |
| `docs/index.html` | Rewrite | Site |
| `docs/404.html` | Create | Site |
| `docs/.nojekyll` | Create | Config |
| `docs/demo.html` | Create | Site |
| `README.md` | Modify | Docs |
| `CONTRIBUTING.md` | Rewrite | Docs |
| `.github/ISSUE_TEMPLATE/bug_report.md` | Create | Config |
| `.github/ISSUE_TEMPLATE/feature_request.md` | Create | Config |
| `.github/PULL_REQUEST_TEMPLATE.md` | Create | Config |
| `.github/workflows/deploy-pages.yml` | Create | CI/CD |
| `.gitignore` | Modify | Config |

---

## Assumptions & Decisions

| Decision | Rationale |
|----------|-----------|
| **Use Helvetica Neue over Inter** | Helvetica is the canonical Swiss typeface. Inter is a modern alternative but lacks the historical authenticity. |
| **No Jekyll** | The site is a single-page static HTML. Adding Jekyll introduces complexity (Ruby, Gemfile, build step) for no benefit. `.nojekyll` disables Jekyll processing. |
| **GitHub Actions deployment** | The modern recommended approach. Avoids maintaining a `gh-pages` branch. |
| **No custom domain** | Unless the user has one. CNAME is optional. |
| **Demo is static HTML, not interactive** | A beautifully typeset static page demonstrates the protocol better than an interactive app. The protocol is a thinking tool, not a software tool. |
| **Remove all emoji from README/docs** | Emoji is decoration. Swiss Style values information over decoration. |
| **No CSS framework** | Pure CSS. The site is simple enough that a framework adds overhead without benefit. |

---

## Verification Steps

1. **Logo verification**: Open each SVG in a browser. Confirm they render at pure black-on-white, with no gray tones or fills (except the center dot).
2. **Site visual verification**: Open `docs/index.html` in a browser. Confirm:
   - No colors, no gradients, no shadows
   - All text is Helvetica/Helvetica Neue/Arial
   - Navigation uses ALL CAPS with letter-spacing
   - Grid layout is clean and aligned
   - Responsive at 320px, 768px, 1200px
3. **Demo page verification**: Open `docs/demo.html`. Confirm the full worked example is readable and the typographic hierarchy is clear.
4. **404 page verification**: Confirm `docs/404.html` renders correctly.
5. **GitHub Pages verification**: After push, confirm the site is live at `https://zbbsdsb.github.io/Decomposer-Skill/`.
6. **README verification**: Confirm no emoji remains, the structure is clean.
7. **CONTRIBUTING verification**: Confirm all templates render correctly on GitHub.
8. **GitHub Actions verification**: Confirm the workflow runs successfully after push.