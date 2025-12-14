# Onboarding & Arbeitsabläufe

Dieses Dokument dient als zentraler Einstiegspunkt für typische Entwicklungsaufgaben.

## Was möchtest du tun?

-   **[Eine neue UI-Komponente erstellen](#1-eine-neue-ui-komponente-erstellen)**
-   **[Eine neue Seite zur Webseite hinzufügen](#2-eine-neue-seite-hinzufügen)**
-   **[Das globale Design anpassen (Farben, Schrift)](#3-das-design-anpassen)**
-   **[Einen neuen Blogpost verfassen](#4-einen-neuen-blogpost-verfassen)**
-   **[Allgemeine Richtlinien einsehen](#5-allgemeine-richtlinien)**

---

### 1. Eine neue UI-Komponente erstellen

Die Erstellung von Komponenten ist der häufigste Arbeitsablauf.

-   **Grundlagen:** Komponenten werden nach dem **Atomic Design** Prinzip in `Atome`, `Moleküle` und `Organismen` unterteilt und in `/src/components/` abgelegt.
-   **Anleitung:** Eine detaillierte Schritt-für-Schritt-Anleitung findest du in der **[Komponenten-Richtlinie](./KOMPONENTEN_RICHTLINIE.md)**.
-   **Icons integrieren:** Siehe **[Komponenten-Richtlinie > Schritt 3.5: Icons verwenden](./KOMPONENTEN_RICHTLINIE.md#schritt-35-icons-verwenden)**.

### 2. Eine neue Seite hinzufügen

Seiten sind `.astro`-Dateien, die im Verzeichnis `/src/pages/` erstellt werden. Astro nutzt File-Based-Routing, d.h. der Dateipfad wird zur URL.

-   **Beispiel:** Eine Datei `/src/pages/ueber-uns.astro` wird zur Seite `deine-domain.de/ueber-uns`.
-   **Struktur:** Eine Seite importiert in der Regel ein `BasisLayout` oder ein anderes Template und füllt es mit Organismen und Molekülen. Die Erstellung dieser Komponenten folgt der **[Komponenten-Richtlinie](./KOMPONENTEN_RICHTLINIE.md)**.

### 3. Das Design anpassen

Das globale Design (Farben, Abstände, Schriften) wird über **Design Tokens** gesteuert.

-   **Anleitung:** Informationen zur Definition, Benennung und Verwendung dieser Tokens sind in der **[Design Token Referenz](./DESIGN_TOKENS.md)** zusammengefasst.

### 4. Einen neuen Blogpost verfassen

Blogposts sind Markdown-Dateien und werden im Verzeichnis `/src/content/blog/` angelegt.

-   **Format:** Jeder Post hat einen `Frontmatter`-Bereich (Titel, Datum, etc.) und den eigentlichen Inhalt in Markdown.
-   **Beispiel:** Orientiere dich an den bestehenden Posts wie `post-1.md`.

### 5. Allgemeine Richtlinien

-   **[Dokumentation schreiben](./DOKUMENTATIONS_RICHTLINIE.md)**
-   **[Git Commits](./COMMIT_RICHTLINIE.md)**
-   **[Komponenten-Stories mit Astrobook](./STORYBOOK_RICHTLINIE.md)**
-   **[Responsives Design](./RESPONSIVE_RICHTLINIE.md)****