# Richtlinie: Responsives Design mit Fluid Typography & Spacing

Diese Richtlinie beschreibt den bevorzugten Ansatz für responsives Design im Projekt, insbesondere die Nutzung von CSS-Funktionen wie `clamp()`, `min()` und `max()` zur Implementierung von Fluid Typography und Spacing. Ziel ist es, die Abhängigkeit von statischen Media Queries zu reduzieren und ein nahtloseres Benutzererlebnis über verschiedene Bildschirmgrößen hinweg zu gewährleisten.

## Prinzipien

### 1. Fluid statt statisch

Wir streben an, dass Schriftgrößen und Abstände fließend auf die Viewport-Größe reagieren, anstatt sprunghaft bei bestimmten Breakpoints zu wechseln. Dies führt zu einem ästhetisch ansprechenderen und konsistenteren Layout.

### 2. `clamp()` als Standard für Typography und Spacing

Die CSS-Funktion `clamp(MIN, PREFERRED, MAX)` ist unser primäres Werkzeug für fluide Größen:
-   **`MIN`**: Der absolute Minimalwert, den die Eigenschaft annehmen soll (z.B. `1rem`).
-   **`PREFERRED`**: Der bevorzugte Wert, der auf der Viewport-Breite basiert (z.B. `2vw` für 2% der Viewport-Breite). Dieser Wert skaliert fließend.
-   **`MAX`**: Der absolute Maximalwert, den die Eigenschaft annehmen soll (z.B. `2rem`).

**Beispiel:** Eine Überschrift, die von 2.5rem auf 3rem skaliert:
`font-size: clamp(2.5rem, 5vw + 1rem, 3rem);`

**Vorteile:**
-   Reduziert die Notwendigkeit manueller Media Queries für jeden Wert.
-   Verbessert die Lesbarkeit und das Layout auf Zwischengrößen von Bildschirmen.
-   Erhöht die Wartbarkeit durch zentrale Definitionen.

### 3. `min()` und `max()` für spezifische Anwendungsfälle

-   **`min(VAL1, VAL2, ...)`**: Wählt den kleinsten Wert aus einer Liste von Werten. Nützlich, um sicherzustellen, dass ein Element nie größer als ein bestimmter Wert wird, aber flexibel schrumpfen kann.
    **Beispiel:** Ein Container, der maximal 800px breit sein soll, aber auch kleiner werden kann: `max-width: min(800px, 90vw);`
-   **`max(VAL1, VAL2, ...)`**: Wählt den größten Wert aus einer Liste von Werten. Nützlich, um sicherzustellen, dass ein Element nie kleiner als ein bestimmter Wert wird, aber flexibel wachsen kann.
    **Beispiel:** Ein Padding, das mindestens `1rem` groß ist: `padding-left: max(1rem, 5vw);`

### 4. Integration in Design Tokens (`tokens.css`)

Alle fluid definierten Größen (Schriftgrößen, Abstände, Linienhöhen) sollten als CSS-Variablen in `src/styles/tokens.css` definiert werden. Dies gewährleistet Konsistenz und einfache Wartung.
**Beispiel:**
`--fluid-heading-1: clamp(2.5rem, 5vw + 1rem, 3rem);`
`--fluid-abstand-m: clamp(1rem, 2vw + 0.5rem, 1.5rem);`

### 5. Wann Media Queries weiterhin nutzen?

Media Queries sind weiterhin notwendig für:
-   Komplexe Layout-Änderungen (z.B. Spaltenanzahl in einem Grid).
-   Änderungen an der Navigationsstruktur.
-   Spezifische Komponenten-Varianten, die nur auf bestimmten Bildschirmgrößen sinnvoll sind.

## Werkzeuge

-   **Utopia.fyi**: Ein ausgezeichnetes Online-Tool, um `clamp()`-Werte für Schriftgrößen und Spacing basierend auf einem Start- und End-Viewport sowie einer Start- und End-Größe zu generieren. Es hilft, konsistente und mathematisch korrekte fluide Skalen zu erstellen.

## Vorgehen beim Erstellen einer Komponente

-   Beim Styling immer prüfen, ob statische Werte durch fluide Tokens ersetzt werden können.
-   Bevorzugt `var(--fluid-...)` anstelle von festen `rem`-Werten für responsive Eigenschaften.
-   Nur wenn eine Eigenschaft *nicht* fließend skalieren soll (z.B. die Mindestgröße eines Interaktionselements), feste `rem`-Werte verwenden.

---
[Zurück zum Onboarding-Dokument](../_ONBOARDING.md)