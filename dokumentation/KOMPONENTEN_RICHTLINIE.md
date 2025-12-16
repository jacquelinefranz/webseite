# Richtlinie: Eine Komponente erstellen

Anleitung zur Erstellung wiederverwendbarer UI-Komponenten.

> **Siehe auch:** [Onboarding > Eine neue UI-Komponente erstellen](./ONBOARDING.md#1-eine-neue-ui-komponente-erstellen)

---

### Schritt 1: Speicherort wählen (Atomic Design)

-   **Atom:** Grundlegendes Element (`/src/components/atoms/`)
-   **Molekül:** Gruppe von Atomen (`/src/components/molecules/`)
-   **Organismus:** Komplexer Seitenbereich (`/src/components/organisms/`)

### Schritt 2: Datei erstellen & Struktur

Erstelle die `.astro`-Datei im `PascalCase` (z.B. `MeineKomponente.astro`).

```astro
---
// 1. Props Interface mit JSDoc
interface Props {
    /** Der Titel der Komponente */
    titel: string;
}

const { titel } = Astro.props;
---

<!-- 2. Template -->
<div>
    <h2>{titel}</h2>
</div>
```

### Schritt 2.1: Semantisches HTML

Bevorzuge spezifische HTML-Tags gegenüber generischen `<div>`-Containern, um die Struktur für Screenreader und Suchmaschinen verständlicher zu machen.

*   **`<hgroup>`:** Für eine Überschrift (`h1`-`h6`) mit zugehörigem Untertitel oder Tagline (`p`).
*   **`<section>` / `<article>`:** Für inhaltlich abgegrenzte Bereiche.
*   **`<nav>` / `<aside>` / `<footer>`:** Für spezifische Layout-Bereiche.

### Schritt 3: Styling

Verwende ausschließlich **[Design Tokens](./DESIGN_TOKENS.md)** und **[Responsives Design](./RESPONSIVE_RICHTLINIE.md)**.

*   Nutze fluide Tokens für Schriftgrößen und Abstände (z.B. `var(--abstand-m)`).
*   Definiere Farben über Tokens.

```astro
<style>
    div {
        padding: var(--abstand-m); /* Skaliert automatisch */
        border: 1px solid var(--border-farbe-standard);
    }
</style>
```

### Schritt 4: Icons

Nutze das `astro-icon` Paket mit dem **Mingcute** Set.

1.  Import: `import { Icon } from 'astro-icon/components';`
2.  Nutzung: `<Icon name="mingcute:example-line" class="icon" />`
3.  Styling: Setze Größe über CSS (z.B. `width: 1.2em`).

### Schritt 4.1: Bildnutzung (Astro Image-Komponente)

Für die optimale Performance und automatische Bildoptimierung (z.B. WebP-Konvertierung, responsive Größen) sollten Bilder über die Astro `Image`-Komponente eingebunden werden.

1.  **Speicherort:** Platziere Bilder in `src/assets/` anstatt in `public/`.
2.  **Import:** Importiere das Bild in der `.astro`-Komponente. Dies generiert `ImageMetadata`.
    ```astro
    ---
    import { Image } from 'astro:assets';
    import type { ImageMetadata } from 'astro';
    import meinBild from '../../assets/meinBild.png';

    interface Props {
        /** Der Pfad zum Bild oder ImageMetadata */
        src?: string | ImageMetadata;
        /** Der Alternativtext für das Bild */
        alt: string;
    }

    const { src = meinBild, alt } = Astro.props;
    ---
    ```
3.  **Nutzung:** Verwende die `Image`-Komponente mit den importierten Metadaten.
    ```astro
    <Image 
        src={src} 
        alt={alt} 
        width={100} 
        height={100} 
        loading="lazy" 
    />
    ```
    Stelle sicher, dass `width` und `height` explizit gesetzt sind, um Layout-Shifts zu vermeiden.

### Schritt 5: Storybook

Erstelle eine Story gemäß der **[Storybook Richtlinie](./STORYBOOK_RICHTLINIE.md)**.

## Vermeidung

*   **Harte Pixelwerte:** Nutze keine `px` für Layout-Abstände oder Schriftgrößen.
*   **Inline-Styles:** Nutze den `<style>` Block.