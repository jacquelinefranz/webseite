# Utility Components - Quick Start Guide

Schnelleinstieg für die neuen wiederverwendbaren Layout-Komponenten.

---

## 30-Sekunden Übersicht

Es gibt 4 neue Components für flexible Layouts:

```astro
<!-- 1. Sektions-Überschrift -->
<SectionHeading title="Titel" subtitle="Untertitel" />

<!-- 2. Zwei-Spalten Split -->
<SplitSection ratio="60-40">
  <Fragment slot="left">Text</Fragment>
  <Fragment slot="right">Bild</Fragment>
</SplitSection>

<!-- 3. Flexibles Grid -->
<GridSection columns={3}>
  <CardSection>Item 1</CardSection>
  <CardSection>Item 2</CardSection>
  <CardSection>Item 3</CardSection>
</GridSection>

<!-- 4. Card-Container -->
<CardSection padding="lg" elevated>
  Inhalt mit Card-Styling
</CardSection>
```

---

## Installation & Setup

Die Components sind bereits erstellt. Einfach importieren:

```astro
---
import SectionHeading from '@components/molecules/SectionHeading.astro';
import SplitSection from '@components/organisms/layout/SplitSection.astro';
import GridSection from '@components/organisms/layout/GridSection.astro';
import CardSection from '@components/organisms/layout/CardSection.astro';
---
```

---

## Häufigste Use Cases

### 1. Hero Section mit Bild

```astro
<section>
  <SectionHeading
    title="Willkommen"
    alignment="left"
  />

  <SplitSection ratio="60-40">
    <Fragment slot="left">
      <h2>Mein Text</h2>
      <p>Kurze Beschreibung...</p>
    </Fragment>
    <Fragment slot="right">
      <img src="/hero.jpg" alt="Hero" />
    </Fragment>
  </SplitSection>
</section>
```

### 2. Portfolio Grid

```astro
<section>
  <SectionHeading
    title="Mein Portfolio"
    subtitle="Projekte, die ich proud präsentiere"
  />

  <GridSection columns={3} gap="lg">
    <CardSection elevated>Projekt 1</CardSection>
    <CardSection elevated>Projekt 2</CardSection>
    <CardSection elevated>Projekt 3</CardSection>
  </GridSection>
</section>
```

### 3. Features/Services Grid

```astro
<section>
  <SectionHeading
    title="Services"
    alignment="left"
  />

  <GridSection columns="auto" gap="md">
    <CardSection padding="lg">
      <h3>Service 1</h3>
      <p>Beschreibung...</p>
    </CardSection>
    <CardSection padding="lg">
      <h3>Service 2</h3>
      <p>Beschreibung...</p>
    </CardSection>
  </GridSection>
</section>
```

---

## Props-Cheat Sheet

### SectionHeading

```typescript
title: string                      // Erforderlich!
subtitle?: string                  // Optional
alignment?: 'left' | 'center'     // Default: 'center'
class?: string                     // CSS-Klasse
```

### SplitSection

```typescript
ratio?: '50-50' | '60-40' | '40-60'  // Default: '50-50'
reverse?: boolean                     // Default: false
gap?: 'sm' | 'md' | 'lg' | 'xl'      // Default: 'lg'
class?: string
```

### GridSection

```typescript
columns?: 'auto' | 2 | 3 | 4 | 12    // Default: 'auto'
gap?: 'sm' | 'md' | 'lg' | 'xl'      // Default: 'lg'
minWidth?: string                     // Default: 'clamp(280px, 100%, 350px)'
class?: string
```

### CardSection

```typescript
padding?: 'sm' | 'md' | 'lg' | 'xl'           // Default: 'lg'
elevated?: boolean                             // Default: false
background?: 'surface' | 'elevated' | 'base'  // Default: 'surface'
class?: string
```

---

## Responsive Verhalten (Automatisch!)

Alle Components sind automatisch responsive:

| Device | SplitSection | GridSection | CardSection |
|--------|-------------|-------------|------------|
| Mobile | Stacked (1 Spalte) | 1 Spalte | Kleines Padding |
| Tablet | Spalten angepasst | Auto-fit | Normal |
| Desktop | Volle Konfiguration | Volle Konfiguration | Volle Größe |

Du musst NICHTS manuelle machen!

---

## Token-Farben automatisch angepasst

Die Components nutzen automatisch die richtige Farbe basierend auf der Theme-Variante:

```css
/* Variante 1: Kupfer -->
primary: #c2693d

/* Variante 2: Magenta -->
primary: #b83d9e

/* Variante 3: Teal -->
primary: #14b8a6
```

Keine hardcodierten Farben!

---

## Fehler vermeiden

### ❌ FALSCH

```astro
<!-- Props falsch geschrieben -->
<SectionHeading title="Test" align="center" />

<!-- Fehlender Title -->
<SectionHeading />

<!-- Falsche Padding-Größe -->
<CardSection padding="extra-large">
```

### ✅ RICHTIG

```astro
<!-- Korrekte Props -->
<SectionHeading title="Test" alignment="center" />

<!-- Title ist erforderlich -->
<SectionHeading title="Test" />

<!-- Gültige Größe -->
<CardSection padding="xl">
```

---

## Spezielle Tipps

### Split mit Bild

Immer `ratio="60-40"` für Text + Bild:

```astro
<SplitSection ratio="60-40">
  <Fragment slot="left">
    <!-- Text bekommt 60% -->
    <h2>Titel</h2>
  </Fragment>
  <Fragment slot="right">
    <!-- Bild bekommt 40% -->
    <img src="/image.jpg" />
  </Fragment>
</SplitSection>
```

### Grid mit variabler Größe

`columns="auto"` ist Standard und passt sich an:

```astro
<!-- Diese Grid passen sich automatisch an -->
<GridSection columns="auto">
  <CardSection>Wird automatisch responsive</CardSection>
  <CardSection>Auf Mobile stacked</CardSection>
  <CardSection>Auf Desktop 3+ Spalten</CardSection>
</GridSection>
```

### Elevated Cards für Fokus

`elevated={true}` für wichtige Cards:

```astro
<GridSection columns={3}>
  <CardSection>Normal</CardSection>
  <CardSection elevated>Wichtig!</CardSection>
  <CardSection>Normal</CardSection>
</GridSection>
```

---

## Debugging

### Component wird nicht angezeigt?

1. **Import kontrollieren:**
   ```astro
   import GridSection from '@components/organisms/layout/GridSection.astro';
   ```

2. **Props-Syntax:**
   ```astro
   <!-- Attribute ohne Klammern -->
   <CardSection padding="lg" elevated>

   <!-- Props mit Werten: mit Klammern -->
   <CardSection padding="lg" elevated={true}>
   ```

3. **Slot-Namen checken:**
   ```astro
   <!-- SplitSection braucht slot names -->
   <Fragment slot="left">...</Fragment>
   <Fragment slot="right">...</Fragment>
   ```

---

## Weitere Ressourcen

Detaillierte Dokumentation:
- **UTILITY_COMPONENTS.md** - Alle Details
- **COMPONENT_INTEGRATION_EXAMPLES.md** - 7 Beispiele
- **src/components/organisms/layout/README.md** - Layout-Guide

Stories ansehen:
```bash
npm run astrobook
```

---

## Performance

- ✅ **0 JavaScript** - Reine Astro-Components
- ✅ **100% Static** - Werden zu HTML generiert
- ✅ **Schnelle Rendering** - Keine Runtime-Overhead
- ✅ **SEO-freundlich** - Semantisches HTML

---

## Support

Bei Fragen:
1. Siehe UTILITY_COMPONENTS.md
2. Schau in COMPONENT_INTEGRATION_EXAMPLES.md
3. Check die Stories im Astrobook
4. Lesen Sie den Code - es ist einfach!

---

Glückliches Layout-Bauen! 🚀

Version: 1.0.0 (2025-12-25)
