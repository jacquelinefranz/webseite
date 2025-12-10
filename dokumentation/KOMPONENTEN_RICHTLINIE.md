# Richtlinie: Eine Komponente erstellen

Dies ist eine Schritt-für-Schritt-Anleitung zur Erstellung einer neuen, wiederverwendbaren UI-Komponente.

> **Zuerst lesen:** [Onboarding > Eine neue UI-Komponente erstellen](./ONBOARDING.md#1-eine-neue-ui-komponente-erstellen)

---

### Schritt 1: Speicherort wählen

Ordne die neue Komponente nach dem **Atomic Design** Prinzip ein:

-   **Atom:** Ein grundlegendes UI-Element? (`/src/components/atoms/`)
-   **Molekül:** Eine Gruppe von Atomen? (`/src/components/molecules/`)
-   **Organismus:** Ein komplexer Seitenbereich? (`/src/components/organisms/`)

### Schritt 2: Datei erstellen & Grundstruktur anlegen

Erstelle die `.astro`-Datei im `PascalCase`-Format (z.B. `MeineKomponente.astro`). Jede Komponente enthält drei Bereiche:

1.  **Script (`---`):** Für Props und Logik.
2.  **Props-Interface:** Eine `interface Props` mit JSDoc-Kommentaren für jede Eigenschaft.
3.  **Template (HTML):** Das Markup der Komponente.

```astro
---
// 2. Props-Interface definieren
/**
 * Definiert die Eigenschaften für die Beispiel-Komponente.
 */
interface Props {
    /** Der Titel, der angezeigt werden soll. */
    titel: string;
}

// 1. Script-Bereich
const { titel } = Astro.props;
---

{* 3. Template-Bereich *}
<div>
    <h2>{titel}</h2>
</div>
```

### Schritt 3: Styling mit Design Tokens

Füge einen `<style>`-Block hinzu und verwende ausschließlich **[Design Tokens](./DESIGN_TOKENS.md)** für Farben, Abstände, Schriftarten etc.

```astro
<style>
    div {
        padding: var(--abstand-m);
        border: 1px solid var(--border-farbe-standard);
    }
</style>
```

### Schritt 4: Story für Astrobook anlegen

Um eine Story für Astrobook anzulegen, folge der **[Richtlinie: Komponenten-Stories mit Astrobook](./STORYBOOK_RICHTLINIE.md)**.

