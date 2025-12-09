# Projektstruktur

Dieses Projekt folgt einer klaren und skalierbaren Ordnerstruktur, die sich an den Prinzipien des **Atomic Design** orientiert. Dies erleichtert die Wartbarkeit, Wiederverwendbarkeit und das allgemeine Verständnis des Codes.

## Hauptverzeichnisse

-   **/public:** Enthält statische Assets, die nicht vom Build-Prozess verarbeitet werden müssen (z.B. `favicon.svg`, Bilder, Schriftarten).
-   **/src:** Der Haupt-Quellcode der Anwendung.
    -   **/components:** Hier leben alle wiederverwendbaren UI-Komponenten, unterteilt nach dem Atomic Design Prinzip.
    -   **/pages:** Jede Datei hier wird zu einer Route auf der Webseite. Astro's file-based routing wird hier genutzt.
    -   **/styles:** Globale CSS-Dateien, insbesondere die `tokens.css` für die Design Tokens.
    -   **/layouts:** (Noch nicht vorhanden, aber für die Zukunft vorgesehen) Beinhaltet wiederverwendbare Seitenlayouts, wie z.B. ein `BasisLayout.astro`, das von allen Seiten genutzt wird. *Anmerkung: Das `BasisLayout.astro` befindet sich aktuell noch unter `src/components/templates`, was wir zukünftig nach `src/layouts` verschieben sollten, um der Astro-Konvention zu folgen.*
-   **/dokumentation:** Enthält übergreifende, konzeptionelle Dokumentation wie diese Datei oder die `DESIGN_TOKENS.md`.

## Atomic Design in `/src/components`

Die Komponenten sind in drei Ebenen unterteilt:

### 1. `atoms`
Die kleinsten, unteilbaren Bausteine der UI. Sie haben keine eigene Funktionalität und werden verwendet, um größere Komponenten zu bauen.
-   **Beispiele:** `Link.astro`, `Absatz.astro`, `Ueberschrift1.astro`

### 2. `molecules`
Gruppen von Atomen, die zusammen eine kleine, spezifische Funktion erfüllen.
-   **Beispiele:** `EmailLink.astro` (kombiniert Text und einen Link), `BlogpostVorschau.astro` (kombiniert einen Titel-Link in einem Listenelement).

### 3. `organisms`
Komplexere UI-Bereiche, die aus einer Kombination von Atomen und Molekülen bestehen und einen ganzen Abschnitt einer Seite darstellen.
-   **Beispiele:** `HauptNavigation.astro`, `IntroSektion.astro`, `KontaktSektion.astro`.

*(Die Ebenen `templates` und `pages` sind die letzten beiden Stufen des Atomic Designs, wobei Astro die `pages` in seinem eigenen `/src/pages`-Verzeichnis verwaltet.)*
