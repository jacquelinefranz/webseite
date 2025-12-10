# Design Tokens

Dieses Dokument beschreibt die Verwendung und das Management von Design Tokens in diesem Projekt. Design Tokens sind die visuelle DNA unseres Designs und ermöglichen eine konsistente Gestaltung sowie effizientes Theming über die gesamte Anwendung hinweg.

## 1. Was sind Design Tokens?

Design Tokens sind die atomaren Einheiten unseres Designsystems. Sie repräsentieren visuelle Designentscheidungen wie Farben, Schriftgrößen, Abstände, Schatten und Animationen. Anstatt diese Werte direkt in Komponenten zu kodieren, werden sie als benannte Variablen (CSS Custom Properties) definiert und von allen UI-Elementen referenziert.

**Beispiel:** Statt `color: #007bff;` verwenden wir `color: var(--primärfarbe);`.

## 2. Wo sind sie definiert?

Alle globalen Design Tokens sind in der Datei `webseite/src/styles/tokens.css` zentralisiert. Diese Datei wird einmalig im `BasisLayout.astro` importiert und macht die Tokens global verfügbar.

```css
/* Beispiel aus tokens.css */
:root {
    --primärfarbe: #007bff;
    --textfarbe: #333333;
    --abstand-m: 1rem;
    /* ... weitere Tokens ... */
}
```

## 3. Benennungskonventionen

Wir folgen einer semantischen Benennungskonvention, um die Bedeutung und den Zweck eines Tokens klar zu kommunizieren, anstatt seinen reinen Wert zu beschreiben.

**Allgemeine Struktur:** `--[Kategorie]-[Eigenschaft]-[Variante]`

*   **Kategorien:** `farben`, `text`, `abstand`, `hintergrund`, `border`, `schriftgewicht`, `uebergang`
*   **Eigenschaften/Varianten:** `primär`, `sekundär`, `hintergrund`, `standard`, `hellgrau`, `m`, `xl`, `semi-bold`

**Beispiele:**
*   `--farben-primär`
*   `--abstand-m`
*   `--hintergrund-hellgrau`
*   `--schriftgewicht-semi-bold`

## 4. Wie werden sie verwendet?

Design Tokens werden als CSS Custom Properties (Variablen) in unseren Astro-Komponenten und Stylesheets verwendet.

**Beispiel in einer Astro-Komponente:**

```astro
<style>
    nav {
        background-color: var(--hintergrund-hellgrau);
        padding: var(--abstand-padding-vertikal) var(--abstand-padding-horizontal);
    }
    nav :global(a) {
        color: var(--textfarbe);
        font-weight: var(--schriftgewicht-semi-bold);
    }
</style>
```

## 5. Vorteile

*   **Konsistenz:** Garantiert ein einheitliches Erscheinungsbild über die gesamte Benutzeroberfläche.
*   **Theming-Fähigkeit:** Ermöglicht den einfachen Austausch ganzer Design-Themes durch Aktualisierung der Token-Werte in `tokens.css`.
*   **Wartbarkeit:** Änderungen an Designentscheidungen müssen nur an einer zentralen Stelle vorgenommen werden.
*   **Klarheit:** Schafft eine klare Trennung zwischen Designentscheidungen und deren Implementierung.
*   **Zusammenarbeit:** Verbessert die Kommunikation zwischen Designern und Entwicklern durch eine gemeinsame Sprache.

## 6. Nächste Schritte

*   Identifiziere weitere hardcodierte Werte in den Komponenten, die in Design Tokens umgewandelt werden können.
*   Erweitere `webseite/src/styles/tokens.css` entsprechend.
*   Passe die Komponenten an, um die neuen Tokens zu verwenden.