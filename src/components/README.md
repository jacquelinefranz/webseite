# Component Library - Atomic Design

Diese Component Library folgt dem **Atomic Design** Prinzip und nutzt ausschließlich **Design Tokens** für konsistente Gestaltung.

## 📁 Struktur

```
src/components/
├── atoms/           # Grundlegende Bausteine
├── molecules/       # Kombinationen von Atoms
├── organisms/       # Komplexe Seitenbereiche
└── templates/       # Seitenlayouts
```

## 🎨 Design Tokens

Alle Komponenten nutzen ausschließlich Design Tokens aus `/src/styles/tokens/`:
- `variant-1.css` - Warm & Hands-on (Terra, Kupfer, Sand)
- `variant-2.css` - [weitere Variante]
- `variant-3.css` - [weitere Variante]

### Wichtig
- **Keine hard-coded Werte** (keine px, keine Hex-Farben)
- **Fluid Responsive** mit clamp() (bereits in Tokens)
- **Semantisches HTML** (hgroup, section, article)

## 🧱 Atoms

### Button.astro
Primärer und sekundärer Button mit Icon-Support.

```astro
import Button from '@/components/atoms/Button.astro';

<Button variant="primary" href="/kontakt" icon="mingcute:mail-line">
  Kontaktiere mich
</Button>

<Button variant="secondary" type="button">
  Mehr erfahren
</Button>
```

**Props:**
- `variant`: 'primary' | 'secondary'
- `type`: 'button' | 'submit' | 'reset'
- `href`: string (macht Button zum Link)
- `icon`: string (Icon-Name aus Mingcute Set)
- `iconPosition`: 'left' | 'right'
- `disabled`: boolean

---

### Heading.astro
Semantische Überschriften mit automatischer Typografie.

```astro
import Heading from '@/components/atoms/Heading.astro';

<Heading level={1}>Hauptüberschrift</Heading>
<Heading level={2} centered>Zentrierte Überschrift</Heading>
<Heading level={3}>Unterüberschrift</Heading>
```

**Props:**
- `level`: 1 | 2 | 3 | 4
- `centered`: boolean

---

### Text.astro
Paragraphen mit verschiedenen Größen und Farben.

```astro
import Text from '@/components/atoms/Text.astro';

<Text size="lg" color="primary">Großer Text</Text>
<Text size="base" color="secondary">Standard-Text</Text>
<Text size="sm" color="subtle">Kleiner Text</Text>
```

**Props:**
- `size`: 'xs' | 'sm' | 'base' | 'md' | 'lg'
- `color`: 'primary' | 'secondary' | 'subtle'
- `centered`: boolean
- `as`: 'p' | 'span' | 'div'

---

### Badge.astro
Kleine Labels für Skills oder Tags.

```astro
import Badge from '@/components/atoms/Badge.astro';

<Badge variant="accent">TypeScript</Badge>
<Badge variant="success">Aktiv</Badge>
```

**Props:**
- `variant`: 'default' | 'accent' | 'success' | 'warning'

---

## 🧬 Molecules

### TimelineItem.astro
Einzelne Station einer Timeline.

```astro
import TimelineItem from '@/components/molecules/TimelineItem.astro';

<TimelineItem
  year="2024"
  title="Senior Developer"
  description="Entwicklung von Webanwendungen mit modernen Technologien."
  isCurrent={true}
/>
```

**Props:**
- `year`: string
- `title`: string
- `description`: string
- `isCurrent`: boolean

---

### SkillCard.astro
Karte für einen Skill mit Icon.

```astro
import SkillCard from '@/components/molecules/SkillCard.astro';

<SkillCard
  icon="mingcute:code-line"
  label="TypeScript"
/>
```

**Props:**
- `icon`: string (Mingcute Icon-Name)
- `label`: string

---

### CTAButton.astro
Button mit animierter Hover-Effekt.

```astro
import CTAButton from '@/components/molecules/CTAButton.astro';

<CTAButton
  variant="primary"
  href="/projekte"
  icon="mingcute:arrow-right-line"
>
  Projekte ansehen
</CTAButton>
```

**Props:**
- `variant`: 'primary' | 'secondary'
- `href`: string
- `icon`: string
- `iconPosition`: 'left' | 'right'

---

## 🏗️ Organisms

### HeroVariant.astro
Hero-Sektion mit Headline, Tagline und CTAs.

```astro
import HeroVariant from '@/components/organisms/HeroVariant.astro';

<HeroVariant
  headline="Willkommen auf meiner Website"
  tagline="Entwicklerin mit Leidenschaft für sauberen Code"
  primaryCTA="Projekte ansehen"
  primaryCTAHref="/projekte"
  secondaryCTA="Über mich"
  secondaryCTAHref="/ueber-mich"
/>
```

**Props:**
- `headline`: string
- `tagline`: string
- `primaryCTA`: string
- `primaryCTAHref`: string
- `secondaryCTA`: string (optional)
- `secondaryCTAHref`: string (optional)

---

### JourneyTimeline.astro
Komplette Timeline mit mehreren Stationen.

```astro
import JourneyTimeline from '@/components/organisms/JourneyTimeline.astro';

<JourneyTimeline
  title="Meine Reise"
  description="Von der Werkstatt zum Code"
  stations={[
    {
      year: "2024",
      title: "Senior Developer",
      description: "Entwicklung moderner Webanwendungen",
      isCurrent: true
    },
    {
      year: "2022",
      title: "Full-Stack Developer",
      description: "Arbeit mit React und Node.js"
    },
    // weitere Stationen...
  ]}
/>
```

**Props:**
- `title`: string (optional)
- `description`: string (optional)
- `stations`: Array<TimelineStation>

---

### SkillsGrid.astro
Grid-Layout für Skills.

```astro
import SkillsGrid from '@/components/organisms/SkillsGrid.astro';

<SkillsGrid
  title="Skills & Technologien"
  description="Werkzeuge, mit denen ich arbeite"
  skills={[
    { icon: "mingcute:code-line", label: "TypeScript" },
    { icon: "mingcute:react-line", label: "React" },
    { icon: "mingcute:nodejs-line", label: "Node.js" },
    // weitere Skills...
  ]}
/>
```

**Props:**
- `title`: string (optional)
- `description`: string (optional)
- `skills`: Array<Skill>

---

## 🎯 Verwendungsbeispiel

```astro
---
import HeroVariant from '@/components/organisms/HeroVariant.astro';
import JourneyTimeline from '@/components/organisms/JourneyTimeline.astro';
import SkillsGrid from '@/components/organisms/SkillsGrid.astro';
---

<HeroVariant
  headline="Hallo, ich bin Jacqueline"
  tagline="Von der Werkstatt zum Code – eine Developer-Reise"
  primaryCTA="Projekte ansehen"
  primaryCTAHref="/projekte"
  secondaryCTA="Kontakt"
  secondaryCTAHref="/kontakt"
/>

<JourneyTimeline
  stations={[
    {
      year: "2024",
      title: "Senior Full-Stack Developer",
      description: "Entwicklung moderner Webanwendungen mit TypeScript, React und Node.js",
      isCurrent: true
    },
    {
      year: "2022",
      title: "Karrierewechsel in die IT",
      description: "Umschulung zur Fachinformatikerin Anwendungsentwicklung"
    },
    {
      year: "2015",
      title: "Meisterin im Handwerk",
      description: "Führung eines eigenen Betriebs mit Fokus auf Qualität und Präzision"
    },
    {
      year: "2010",
      title: "Ausbildung zur Tischlerin",
      description: "Grundstein für handwerkliches Verständnis und Detailgenauigkeit"
    },
    {
      year: "2008",
      title: "Die Reise beginnt",
      description: "Erste Berührung mit der Arbeit am Material"
    }
  ]}
/>

<SkillsGrid
  skills={[
    { icon: "mingcute:code-line", label: "TypeScript" },
    { icon: "mingcute:react-line", label: "React" },
    { icon: "mingcute:nodejs-line", label: "Node.js" },
    { icon: "mingcute:astro-line", label: "Astro" },
    { icon: "mingcute:git-line", label: "Git" },
    { icon: "mingcute:docker-line", label: "Docker" }
  ]}
/>
```

## 🛠️ Entwicklung

### Icons
Alle Icons kommen aus dem **Mingcute Icon Set** via `astro-icon`:
- Browse Icons: https://www.mingcute.com/
- Verwendung: `mingcute:[icon-name]-line` oder `mingcute:[icon-name]-fill`

### Design Tokens
Siehe `/dokumentation/DESIGN_TOKENS.md` für die vollständige Token-Referenz.

### Richtlinien
- `/dokumentation/KOMPONENTEN_RICHTLINIE.md` - Komponenten erstellen
- `/dokumentation/RESPONSIVE_RICHTLINIE.md` - Responsive Design
- `/dokumentation/STORYBOOK_RICHTLINIE.md` - Stories erstellen
