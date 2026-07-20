# Design Spec: Decomposer Promo

## Palette
```yaml
background: "#FFFFFF"
foreground: "#000000"
text-secondary: "#666666"
grid: "#E5E5E5"
shell-void: "#1a1a1a"
zone-green: "#D4D4D4"
zone-yellow: "#999999"
zone-red: "#1a1a1a"
```

## Typography
```yaml
display: "Inter Black, sans-serif"
body: "Inter, sans-serif"
mono: "JetBrains Mono, monospace"
sizes:
  title: "72px"
  subtitle: "11px"
  section-title: "28px"
  body: "22px"
  label: "14px"
  small: "18px"
```

## Motion
```yaml
primary_ease: "power3.out"
secondary_ease: "sine.out"
entrance_duration: 0.4
transition_duration: 0.4
ambient_cycle: 2.0
```

## Layout
```yaml
grid: 12-column
margin: 80px
gutter: 24px
```

## Scene Structure
Each scene is a div with `data-duration` attribute. Scenes are numbered sequentially. Scene borders are hard-killed (opacity: 0, visibility: hidden) after their duration to prevent bleed.

## Animation Rules
1. Use `tl.fromTo()` not `tl.from()` for deterministic rendering
2. Ambient animations attach to the master timeline, not independent GSAP tweens
3. All transforms use `x`, `y`, `scaleX`, `scaleY` — never `top`, `left`, `width`, `height`
4. Text elements use `clip` or `textContent` splitting for typewriter effects