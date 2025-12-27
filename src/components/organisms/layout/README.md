# Layout Components

Wiederverwendbare Layout-Komponenten für Sektionen und Container. Alle Components nutzen Design Tokens und funktionieren mit allen 3 Token-Varianten.

## Components

### SplitSection

Zwei-Spalten Layout mit konfigurierbarem Verhältnis. Responsive: stacked auf Mobile.

**Props:**
- `ratio?: '50-50' | '60-40' | '40-60'` - Spalten-Verhältnis (default: '50-50')
- `reverse?: boolean` - Spalten umkehren (default: false)
- `gap?: 'sm' | 'md' | 'lg' | 'xl'` - Abstand zwischen Spalten (default: 'lg')
- `class?: string` - CSS-Klasse

**Slots:**
- `left` - Inhalt der linken Spalte
- `right` - Inhalt der rechten Spalte

**Beispiel:**
```astro
---
import SplitSection from '@components/organisms/layout/SplitSection.astro';
---

<SplitSection ratio="60-40" gap="lg">
  <Fragment slot="left">
    <h2>Linke Seite</h2>
    <p>Inhalte mit 60% Breite</p>
  </Fragment>

  <Fragment slot="right">
    <img src="/image.jpg" alt="Bild" />
  </Fragment>
</SplitSection>
```

### GridSection

Flexibles Grid-Layout mit verschiedenen Spalten-Konfigurationen. Responsive mit auto-fit.

**Props:**
- `columns?: 'auto' | 2 | 3 | 4 | 12` - Spalten-Konfiguration (default: 'auto')
- `gap?: 'sm' | 'md' | 'lg' | 'xl'` - Abstand zwischen Items (default: 'lg')
- `minWidth?: string` - Min. Item-Breite für auto-fit (default: 'clamp(280px, 100%, 350px)')
- `class?: string` - CSS-Klasse

**Beispiel:**
```astro
---
import GridSection from '@components/organisms/layout/GridSection.astro';
import Card from '@components/molecules/Card.astro';
---

<GridSection columns={3} gap="md">
  <Card>Item 1</Card>
  <Card>Item 2</Card>
  <Card>Item 3</Card>
</GridSection>
```

### CardSection

Card-Container mit einheitlichem Styling. Nutzt Card-Design-Tokens.

**Props:**
- `padding?: 'sm' | 'md' | 'lg' | 'xl'` - Padding-Größe (default: 'lg')
- `elevated?: boolean` - Erhöhter Schatten für Depth-Effekt (default: false)
- `background?: 'surface' | 'elevated' | 'base'` - Hintergrundfarbe (default: 'surface')
- `class?: string` - CSS-Klasse

**Beispiel:**
```astro
---
import CardSection from '@components/organisms/layout/CardSection.astro';
---

<CardSection padding="lg" elevated>
  <h3>Card Titel</h3>
  <p>Card Inhalt mit erhöhtem Schatten</p>
</CardSection>
```

## Design Tokens

Alle Components nutzen folgende Token-Variablen:

### Spacing
- `--spacing-sm`, `--spacing-md`, `--spacing-lg`, `--spacing-xl`
- `--spacing-section-vertical`, `--spacing-section-horizontal`

### Colors
- `--color-background-surface`
- `--color-background-elevated`
- `--color-background-base`
- `--color-text-primary`
- `--color-border`

### Layout
- `--layout-grid-columns` - Grid-Spalten-Konfiguration
- `--layout-grid-gap` - Grid-Abstand
- `--layout-card-border-radius` - Card Border-Radius
- `--layout-card-padding` - Card Padding

### Shadows
- `--shadow-sm`, `--shadow-md`, `--shadow-lg`, `--shadow-xl`

### Border & Radius
- `--border-width-thin`
- `--border-radius-sm`, `--border-radius-md`, `--border-radius-lg`

## Responsive Breakpoints

Alle Components sind responsive:
- **Mobile**: < 768px (single-column layouts)
- **Tablet**: 769px - 1024px (adjusted spacing)
- **Desktop**: > 1024px (full layouts)

## Token-Varianten Kompatibilität

✅ Alle Components funktionieren mit:
- Variante 1: Warm & Hands-on
- Variante 2: Bold & Kreativ
- Variante 3: Modern & Tech-Forward

Keine hardcodierten Farben oder Abstände - 100% Token-basiert!
