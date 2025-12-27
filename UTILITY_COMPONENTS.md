# Utility Components - Dokumentation

Diese Dokumentation beschreibt die wiederverwendbaren Utility-Components für alle 3 Design Token-Varianten.

## Übersicht

Es wurden 4 wiederverwendbare Components erstellt:

1. **SectionHeading** - Überschriften-Komponente für Sektionen
2. **SplitSection** - Zwei-Spalten Layout
3. **GridSection** - Flexibles Grid-Layout
4. **CardSection** - Card-Container

Alle Components:
- ✅ Nutzen Design Tokens (keine hardcodierten Farben/Abstände)
- ✅ Funktionieren mit ALLEN 3 Token-Varianten
- ✅ Haben TypeScript Props mit JSDoc
- ✅ Verwenden Semantic HTML
- ✅ Sind responsive
- ✅ Haben optionale Medien Queries nur wo nötig

---

## 1. SectionHeading

**Datei:** `/src/components/molecules/SectionHeading.astro`

Wiederverwendbare Überschriften-Komponente mit optionalem Untertitel und variabler Ausrichtung.

### Features

- ✅ Haupttitel mit automatischer Unterstreichungs-Dekoration
- ✅ Optionaler Untertitel
- ✅ Zwei Ausrichtungs-Modi: `left` und `center`
- ✅ Slot für varianten-spezifische Dekoration
- ✅ Nutzt `--font-size-h2`, `--color-primary`, `--border-width-thick`

### Props

```typescript
interface Props {
  title: string;           // Haupttitel (erforderlich)
  subtitle?: string;       // Optionaler Untertitel
  alignment?: 'left' | 'center';  // Text-Ausrichtung (default: 'center')
  class?: string;          // CSS-Klasse
}
```

### Verwendungsbeispiele

**Zentriert mit Untertitel:**
```astro
---
import SectionHeading from '@components/molecules/SectionHeading.astro';
---

<SectionHeading
  title="Meine Skills & Erfahrungen"
  subtitle="Werkzeuge und Technologien, mit denen ich arbeite"
  alignment="center"
/>
```

**Links-ausgerichtet ohne Untertitel:**
```astro
<SectionHeading
  title="Über mich"
  alignment="left"
/>
```

**Mit Custom Dekoration:**
```astro
<SectionHeading
  title="Portfolio"
  alignment="center"
>
  <div class="custom-decoration">
    <!-- Variant-spezifische Dekoration -->
  </div>
</SectionHeading>
```

### Token-Abhängigkeiten

```css
--font-size-h2              /* Überschriftsgröße (fluid) */
--font-weight-heading       /* Gewicht (600 oder 800) */
--line-height-tight         /* Zeilenhöhe (1.2) */
--color-text-primary        /* Titel-Farbe */
--color-text-secondary      /* Untertitel-Farbe */
--color-primary             /* Unterstreichungs-Farbe */
--spacing-md                /* Abstände */
--border-width-thick        /* Unterstreichungs-Dicke (4px) */
--border-radius-full        /* Rundung (9999px) */
```

---

## 2. SplitSection

**Datei:** `/src/components/organisms/layout/SplitSection.astro`

Flexibles Zwei-Spalten Layout mit konfigurierbarem Verhältnis.

### Features

- ✅ 3 Spalten-Verhältnisse: 50/50, 60/40, 40/60
- ✅ Konfigurierbare Abstände (sm, md, lg, xl)
- ✅ Optional umkehrbar (reverse)
- ✅ Responsive: stacked auf Mobile (< 768px)
- ✅ Slots für flexiblen Inhalt

### Props

```typescript
interface Props {
  ratio?: '50-50' | '60-40' | '40-60';  // Spalten-Verhältnis (default: '50-50')
  reverse?: boolean;                     // Spalten umkehren (default: false)
  gap?: 'sm' | 'md' | 'lg' | 'xl';      // Abstand (default: 'lg')
  class?: string;                        // CSS-Klasse
}
```

### Slots

```astro
<Fragment slot="left">
  <!-- Inhalt linke Spalte -->
</Fragment>

<Fragment slot="right">
  <!-- Inhalt rechte Spalte -->
</Fragment>
```

### Verwendungsbeispiele

**Standard 50/50 Split:**
```astro
---
import SplitSection from '@components/organisms/layout/SplitSection.astro';
---

<SplitSection ratio="50-50" gap="lg">
  <Fragment slot="left">
    <h2>Über mich</h2>
    <p>Kurze Beschreibung...</p>
  </Fragment>

  <Fragment slot="right">
    <img src="/profile.jpg" alt="Profil" />
  </Fragment>
</SplitSection>
```

**60/40 Split mit Bild rechts:**
```astro
<SplitSection ratio="60-40" gap="xl">
  <Fragment slot="left">
    <h2>Meine Journey</h2>
    <p>Detaillierte Erklärung...</p>
    <ul>
      <li>Punkt 1</li>
      <li>Punkt 2</li>
    </ul>
  </Fragment>

  <Fragment slot="right">
    <img src="/journey.jpg" alt="Journey" />
  </Fragment>
</SplitSection>
```

**Umgekehrte Spalten:**
```astro
<SplitSection ratio="60-40" reverse>
  <Fragment slot="left">
    <img src="/image.jpg" alt="Bild" />
  </Fragment>

  <Fragment slot="right">
    <h2>Text auf der rechten Seite</h2>
    <p>Der Text wird wegen `reverse` tatsächlich links angezeigt</p>
  </Fragment>
</SplitSection>
```

### Responsive Verhalten

| Breakpoint | Verhalten |
|-----------|-----------|
| Mobile < 768px | Stacked (single column) |
| Tablet 769-1024px | Adjusted spacing (var(--spacing-lg)) |
| Desktop > 1024px | Full layout mit konfig. Verhältnis |

### Token-Abhängigkeiten

```css
--spacing-sm, --spacing-md, --spacing-lg, --spacing-xl  /* Abstände */
--spacing-section-vertical                               /* Mobile Stack */
```

---

## 3. GridSection

**Datei:** `/src/components/organisms/layout/GridSection.astro`

Flexibles Grid-Layout mit verschiedenen Spalten-Konfigurationen.

### Features

- ✅ Auto-fit mit Minimum-Breite (responsive)
- ✅ Feste Spalten: 2, 3, 4 oder 12-column System
- ✅ Konfigurierbare Abstände
- ✅ Responsive auf Mobile (single column)
- ✅ Nutzt `--layout-grid-columns` Token

### Props

```typescript
interface Props {
  columns?: 'auto' | 2 | 3 | 4 | 12;    // Spalten (default: 'auto')
  gap?: 'sm' | 'md' | 'lg' | 'xl';      // Abstand (default: 'lg')
  minWidth?: string;                     // Min. Breite (default: 'clamp(280px, 100%, 350px)')
  class?: string;                        // CSS-Klasse
}
```

### Verwendungsbeispiele

**Auto-fit (responsive Anzahl):**
```astro
---
import GridSection from '@components/organisms/layout/GridSection.astro';
import Card from '@components/molecules/Card.astro';
---

<GridSection columns="auto" gap="lg" minWidth="clamp(280px, 100%, 350px)">
  <Card>Item 1</Card>
  <Card>Item 2</Card>
  <Card>Item 3</Card>
  <Card>Item 4</Card>
</GridSection>
```

**3 Spalten Layout:**
```astro
<GridSection columns={3} gap="md">
  {items.map(item => (
    <Card>{item.title}</Card>
  ))}
</GridSection>
```

**12-Column System (Advanced):**
```astro
<GridSection columns={12} gap="md">
  <Card class="col-span-6">Große Card (6 Spalten)</Card>
  <Card class="col-span-3">Kleine Card (3 Spalten)</Card>
  <Card class="col-span-3">Kleine Card (3 Spalten)</Card>
</GridSection>
```

### Responsive Verhalten

| Breakpoint | Verhalten |
|-----------|-----------|
| Mobile < 768px | 1 Spalte, gap: var(--spacing-sm) |
| Tablet 769-1024px | auto-fit mit adjustiertem gap |
| Desktop > 1024px | Konfigurierte Spalten |

### Token-Abhängigkeiten

```css
--layout-grid-columns      /* Grid-Spalten-Konfiguration */
--layout-grid-gap          /* Grid-Abstand */
--spacing-sm, --spacing-md, --spacing-lg, --spacing-xl
```

---

## 4. CardSection

**Datei:** `/src/components/organisms/layout/CardSection.astro`

Card-Container mit einheitlichem Styling basierend auf Design Tokens.

### Features

- ✅ 4 Padding-Größen (sm, md, lg, xl)
- ✅ Optionaler Elevated-Style (erhöhter Schatten)
- ✅ 3 Hintergrundfarben-Optionen
- ✅ Border und Border-Radius aus Tokens
- ✅ Smooth Transitions

### Props

```typescript
interface Props {
  padding?: 'sm' | 'md' | 'lg' | 'xl';           // Padding (default: 'lg')
  elevated?: boolean;                             // Elevated Shadow (default: false)
  background?: 'surface' | 'elevated' | 'base';  // Background (default: 'surface')
  class?: string;                                 // CSS-Klasse
}
```

### Verwendungsbeispiele

**Standard Card:**
```astro
---
import CardSection from '@components/organisms/layout/CardSection.astro';
---

<CardSection padding="lg">
  <h3>Card Titel</h3>
  <p>Card Inhalt...</p>
</CardSection>
```

**Elevated Card mit großem Padding:**
```astro
<CardSection padding="xl" elevated background="surface">
  <h2>Featured Card</h2>
  <p>Mit erhöhtem Schatten für Hervorhebung</p>
</CardSection>
```

**Mit erhöhtem Hintergrund:**
```astro
<CardSection padding="md" background="elevated">
  <p>Card mit leicht erhöhtem Hintergrund</p>
</CardSection>
```

**Mit Custom Klasse:**
```astro
<CardSection padding="lg" class="custom-card">
  <slot />
</CardSection>
```

### Shadow Levels

- **Normal** (`elevated={false}`): `var(--shadow-sm)`
- **Elevated** (`elevated={true}`): `var(--shadow-lg)`

### Token-Abhängigkeiten

```css
--spacing-sm, --spacing-md, --spacing-lg, --spacing-xl   /* Padding */
--color-background-surface, --color-background-elevated, --color-background-base
--color-border                                            /* Border */
--layout-card-border-radius, --border-radius-md          /* Radius */
--shadow-sm, --shadow-lg                                 /* Shadows */
--transition-all                                          /* Transitions */
```

---

## Token-Kompatibilität

### Alle Components funktionieren mit diesen Varianten:

#### Variante 1: Warm & Hands-on
```css
--color-primary: #c2693d;           /* Kupfer */
--color-background-base: #faf8f5;  /* Warmes Beige */
--color-text-primary: #2d2520;      /* Dunkles Braun */
```

#### Variante 2: Bold & Kreativ
```css
--color-primary: #b83d9e;           /* Magenta */
--color-background-base: #0f0a0d;  /* Dunkles Violett */
--color-text-primary: #f5f0f3;      /* Helles Violett */
```

#### Variante 3: Modern & Tech-Forward
```css
--color-primary: #14b8a6;           /* Teal */
--color-background-base: #f8fafc;  /* Kühles Grau */
--color-text-primary: #0f172a;      /* Dunkles Slate */
```

---

## Best Practices

### 1. SectionHeading
- Immer `alignment="center"` für Haupt-Sektionen
- `alignment="left"` für Sub-Sektionen
- Nutze `subtitle` für Kontext

### 2. SplitSection
- `ratio="60-40"` für Text + Bild (Text 60%)
- `ratio="40-60"` für Bild + Text (Bild 60%)
- `gap="xl"` für großzügiges Spacing
- `reverse` für Layout-Variation ohne Code-Duplikation

### 3. GridSection
- `columns="auto"` als Standard für responsive Designs
- `columns={3}` für Card-Layouts (Portfolio, Skills)
- `columns={2}` für Blog-Listen
- `minWidth` anpassen basierend auf Content

### 4. CardSection
- `elevated={true}` nur für wichtige/feature-d Cards
- `background="elevated"` für subtile Unterscheidung
- `padding="lg"` als Standard
- Nutze `gap="md"` für Abstände zwischen Cards

---

## Datei-Struktur

```
src/components/
├── molecules/
│   ├── SectionHeading.astro
│   └── SectionHeading.stories.ts
└── organisms/
    └── layout/
        ├── README.md                    (Diese Komponenten-Doku)
        ├── SplitSection.astro
        ├── SplitSection.stories.ts
        ├── GridSection.astro
        ├── GridSection.stories.ts
        ├── CardSection.astro
        └── CardSection.stories.ts
```

---

## Testing in Astrobook

Alle Components haben Stories für das Astrobook-Dashboard:

```bash
npm run astrobook
```

Dann navigiere zu:
- **Molecules** → SectionHeading
- **Organisms** → Layout → SplitSection
- **Organisms** → Layout → GridSection
- **Organisms** → Layout → CardSection

---

## Häufige Fehler vermeiden

❌ **FALSCH:** Hardcodierte Farben/Abstände
```css
.card {
  padding: 20px;           /* ❌ Nicht responsive */
  background: #ffffff;     /* ❌ Keine Token */
}
```

✅ **RICHTIG:** Token-basiert
```css
.card {
  padding: var(--spacing-lg);        /* ✅ Responsive */
  background: var(--color-background-surface);  /* ✅ Token */
}
```

❌ **FALSCH:** Zu spezifische Props
```astro
<Card bg="rgb(255,255,255)" padding="1.5rem" />
```

✅ **RICHTIG:** Semantic Props
```astro
<Card background="surface" padding="lg" />
```

---

## Performance

- ✅ Kein JavaScript
- ✅ Statische HTML-Generierung
- ✅ CSS-basierte Layouts (kein Framework)
- ✅ Minimal CSS (nur nötig für Responsive)
- ✅ Fluide Typographie & Abstände (clamp())

---

## Support & Erweiterung

Die Components sind bewusst einfach und fokussiert gehalten:

**Wenn du etwas brauchst:**
1. Nutze die `class` Prop für Custom Styles
2. Nutze `gap` und `padding` Props für Customization
3. Bei häufigen Patterns → Neue dedizierte Komponente

**Beispiel Custom Styling:**
```astro
<SplitSection
  ratio="60-40"
  gap="lg"
  class="my-custom-split"
>
  <!-- Content -->
</SplitSection>

<style>
  :global(.my-custom-split) {
    /* Custom overrides */
  }
</style>
```

---

Zuletzt aktualisiert: 2025-12-25
Version: 1.0.0
