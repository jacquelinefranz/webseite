# Richtlinie: Responsives Design

Nutzung von CSS-Funktionen für fließende Layouts ohne unnötige Breakpoints.

## Fluid Typography & Spacing

Nutze `clamp()` als Standard für Schriftgrößen und Abstände in der `src/styles/tokens.css`.

### Funktion `clamp(MIN, PREFERRED, MAX)`
Skaliert einen Wert fließend zwischen einem Minimum und Maximum basierend auf der Viewport-Breite.

*   **Beispiel H1:** `--schriftgroesse-h1: clamp(2.5rem, 2.14rem + 1.5vw, 3rem);`
*   **Beispiel Abstand:** `--abstand-m: clamp(1rem, 2vw + 0.5rem, 1.5rem);`

### Grenzen mit `min()` und `max()`
*   **`min()`**: Definiert Obergrenzen (z.B. Container-Breite).
    *   `width: min(100%, 800px);` (Maximal 800px, sonst 100%)
*   **`max()`**: Definiert Untergrenzen (z.B. sicheres Padding).
    *   `padding: max(1rem, 5vw);` (Mindestens 1rem)

## Design Tokens

Definiere alle responsiven Werte zentral in `tokens.css`.
Nutze die Variablen (`var(--...)`) in den Komponenten.

## Einsatz von Media Queries

Nutze Media Queries (`@media`) ausschließlich für:
*   Layout-Änderungen (z.B. Grid: 1 Spalte zu 3 Spalten).
*   Änderung der Navigations-Struktur (Burger-Menü vs. Liste).
*   Sichtbarkeit von Elementen (Ausblenden auf Mobile).

## Vermeidung

*   **Statische Breakpoints für Schriftgrößen:** Vermeide das Umschreiben von `font-size` innerhalb von Media Queries.
*   **Magische Zahlen:** Vermeide `clamp()`-Berechnungen direkt in der Komponente. Nutze Tools wie **Utopia.fyi** und speichere den Wert in `tokens.css`.
*   **Präfixe:** Verzichte auf Kennzeichnungen wie `fluid-` im Variablennamen. Fluides Verhalten ist der Standard.
