# Referenz: Design Tokens

Dieses Dokument ist eine Kurzanleitung zur Verwendung von Design Tokens.

> **Zuerst lesen:** [Onboarding > Das globale Design anpassen](./ONBOARDING.md#3-das-design-anpassen)

---

### 1. Was sind Design Tokens?

Design Tokens sind zentral definierte CSS-Variablen, die das visuelle Erscheinungsbild der gesamten Anwendung steuern (z.B. Farben, Abstände).

### 2. Wo sind sie definiert?

Alle Tokens sind in einer einzigen Datei deklariert:
`/src/styles/tokens.css`

### 3. Wie werden sie benannt?

Die Benennung folgt einem semantischen Muster, das den Zweck beschreibt, nicht den Wert.

-   **Format:** `--[Kategorie]-[Eigenschaft]-[Variante]`
-   **Kategorien:** `farben`, `hintergrund`, `abstand`, `schriftgroesse`, `schriftgewicht`
-   **Beispiele:**
    -   `--farben-primär`
    -   `--abstand-m`
    -   `--schriftgewicht-semi-bold`

### 4. Wie werden sie verwendet?

Tokens werden in den `<style>`-Blöcken von Komponenten mit der `var()`-Funktion aufgerufen.

```css
.beispiel {
    /* Richtig: Verwendung eines Tokens */
    padding: var(--abstand-m);
    color: var(--farben-primär);

    /* Falsch: "Hard-codierter" Wert */
    /* padding: 16px; */
}
```

Das Styling von Komponenten ist in der **[Komponenten-Richtlinie](./KOMPONENTEN_RICHTLINIE.md#schritt-3-styling-mit-design-tokens)** genauer beschrieben.