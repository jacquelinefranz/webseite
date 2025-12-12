# Richtlinie: Komponenten-Stories mit Astrobook

Jede wiederverwendbare Komponente wird mit "Astrobook" visuell dokumentiert und getestet. Dies ist ein obligatorischer Schritt.

> **Siehe auch:** [Komponenten-Richtlinie](./KOMPONENTEN_RICHTLINIE.md)

---

### 1. Story-Datei erstellen

Erstelle für jede Komponente (z.B. `MeineKomponente.astro`) eine zugehörige Story-Datei im selben Verzeichnis: `MeineKomponente.stories.ts`.

### 2. Meta-Konfiguration

Der `default`-Export konfiguriert, wie die Komponente in Astrobook angezeigt wird.

-   **title:** Gibt die Hierarchie in der Astrobook-Navigation an. Das Format ist `Kategorie/KomponentenName` (z.B. `"Atom/Button"`).
-   **component:** Der Import der Astro-Komponente selbst.

```typescript
import MeineKomponente from "./MeineKomponente.astro";

const meta = { // Keine explizite Typisierung mit Meta/StoryObj erforderlich
  title: "Atom/MeineKomponente",
  component: MeineKomponente,
};

export default meta;
```

### 3. Stories definieren

Jeder `export` eines Objekts stellt einen bestimmten Zustand oder eine Variante der Komponente dar.

-   **`Standard`:** Jede Komponente sollte mindestens eine `Standard`-Story haben.
-   **`args`:** Über das `args`-Objekt werden die Props für den jeweiligen Zustand der Komponente definiert.

```typescript
// Eine "Story", die einen Anwendungsfall der Komponente zeigt
export const Standard = { // Keine explizite Typisierung mit StoryObj erforderlich
  args: {
    // Hier die Props für diese Story definieren
    titel: "Standard Titel",
  },
};

// Eine weitere Variante
export const Hervorgehoben = { // Keine explizite Typisierung mit StoryObj erforderlich
  args: {
    titel: "Ein hervorgehobener Titel",
    // weitere props...
  },
};
```
