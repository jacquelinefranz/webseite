# Design-Varianten Dokumentation

## Übersicht

Die Website verfügt über 3 Design-Varianten, die unterschiedliche Aspekte der Persönlichkeit und Journey von der Werkstatt ins Digitale zeigen.

## Token-System Architektur

### Shared Token Structure

Alle 3 Varianten nutzen **identische Token-Namen** aber unterschiedliche Werte. Dies ermöglicht:
- Wiederverwendbare Components ohne Code-Duplikation
- Einfacher Wechsel zwischen Varianten
- Konsistente Entwickler-Experience

### Token-Dateien

```
src/styles/tokens/
├── variant-1.css  # Warm & Hands-on
├── variant-2.css  # Bold & Kreativ
└── variant-3.css  # Modern & Tech-Forward
```

## Variante 1: Warm & Hands-on

**Visuelle Identität:** Brücke zwischen Werkstatt und Digital

**Stimmung:** Authentisch, handwerklich, vertrauenswürdig

**Farbpalette:**
- Primary: `#c2693d` (Kupfer/Terra)
- Background Base: `#faf8f5` (Warmes Weiß)
- Background Surface: `#ffffff` (Reines Weiß)
- Text Primary: `#2d2520` (Dunkles Erdbraun)
- Accent: `#d4a574` (Sand/Beige)

**Charakteristik:**
- Erdige, warme Töne
- Weiche Kontraste
- Einladende Atmosphäre

## Variante 2: Bold & Kreativ

**Visuelle Identität:** Unkonventionelle Journey, Mut zum Quereinstieg

**Stimmung:** Mutig, kreativ, kontrastreich

**Farbpalette:**
- Primary: `#b83d9e` (Magenta/Violet)
- Background Base: `#0f0a0d` (Tiefes Schwarz)
- Background Surface: `#1a1317` (Dunkles Grau)
- Text Primary: `#f5f0f3` (Helles Rosa-Weiß)
- Accent: `#2d9d9c` (Petrol)

**Charakteristik:**
- Hohe Kontraste (Dark Mode)
- Lebendige Akzentfarben
- Energetische Ausstrahlung

## Variante 3: Modern & Tech-Forward

**Visuelle Identität:** Product Owner, UX-affin, Future-oriented

**Stimmung:** Systematisch, innovativ, präzise

**Farbpalette:**
- Primary: `#14b8a6` (Teal)
- Background Base: `#f8fafc` (Kühles Weiß)
- Background Surface: `#ffffff` (Reines Weiß)
- Text Primary: `#0f172a` (Tiefes Slate)
- Accent: `#6366f1` (Indigo)

**Charakteristik:**
- Kühle, technische Farben
- Klare Strukturen
- Moderne Professionalität

## Verwendung in Components

### Import der Token-Datei

Jede Varianten-Seite importiert ihr spezifisches Token-Set:

```astro
---
// In variant-1.astro
import '../styles/tokens/variant-1.css';
---
```

### Verwendung der Tokens

Components nutzen die Token-Namen (nicht die Werte):

```css
.button {
  background-color: var(--color-primary);
  color: var(--color-background-surface);
  padding: var(--spacing-md);
  font-size: var(--font-size-base);
  border-radius: var(--border-radius-md);
  transition: var(--transition-background);
}

.button:hover {
  background-color: var(--color-primary-hover);
}
```

## Fluid Responsive Design

Alle Token für Typography und Spacing nutzen `clamp()` für fluid scaling:

```css
/* Automatische Skalierung zwischen Mobile und Desktop */
--font-size-h1: clamp(2.5rem, 2.14rem + 1.8vw, 3.5rem);
--spacing-xl: clamp(2rem, 4vw + 1rem, 3.5rem);
```

**Vorteile:**
- Keine harten Breakpoints für Größen
- Smooth scaling auf allen Bildschirmgrößen
- Bessere UX durch kontinuierliche Anpassung

## Token-Kategorien

### Color Tokens
- `--color-primary`, `--color-primary-hover`, `--color-primary-active`
- `--color-background-base`, `--color-background-surface`
- `--color-text-primary`, `--color-text-secondary`, `--color-text-subtle`
- `--color-accent`, `--color-accent-light`
- `--color-border`, `--color-divider`

### Typography Tokens
- `--font-size-xs` bis `--font-size-lg`
- `--font-size-h1` bis `--font-size-h4`
- `--font-weight-normal`, `--font-weight-medium`, etc.
- `--line-height-tight`, `--line-height-normal`, `--line-height-relaxed`

### Spacing Tokens
- `--spacing-xs` bis `--spacing-3xl`
- `--spacing-section-vertical`, `--spacing-section-horizontal`
- `--container-max-width`, `--container-padding`

### Border & Radius
- `--border-width-thin`, `--border-width-medium`, `--border-width-thick`
- `--border-radius-sm` bis `--border-radius-xl`, `--border-radius-full`

### Shadow Tokens
- `--shadow-sm`, `--shadow-md`, `--shadow-lg`, `--shadow-xl`

### Transition Tokens
- `--transition-fast`, `--transition-base`, `--transition-slow`
- `--transition-color`, `--transition-background`, `--transition-transform`

## Entwicklungs-Richtlinien

### ✅ DO

- Nutze immer Token-Namen in Components
- Verwende fluid Typography und Spacing
- Halte die Token-Struktur konsistent über alle Varianten
- Nutze semantic naming (`--color-primary` nicht `--copper`)

### ❌ DON'T

- Keine hard-coded Werte in Components (`padding: 16px`)
- Keine Inline-Styles
- Keine direkten Farb-Codes (`color: #c2693d`)
- Keine statischen Breakpoints für Font-Sizes
