# Richtlinie: Git Commits

Ein konsistenter und verständlicher Git-Verlauf ist entscheidend für die Wartbarkeit des Projekts. Alle Commits müssen dieser Richtlinie folgen.

## 1. Commit-Format (Conventional Commits)

Das Format einer Commit-Nachricht ist:
`<typ>(<bereich>): <kurzbeschreibung>`

-   **Beispiele:**
    -   `feat(blog): Fügt Filterfunktion hinzu`
    -   `fix(auth): Behebt Token-Erneuerung`
    -   `docs(komponenten): Aktualisiert die Komponenten-Richtlinie`

### Commit-Typen

-   `feat`: Ein neues Feature für den Benutzer.
-   `fix`: Ein Bugfix für den Benutzer.
-   `docs`: Änderungen an der Dokumentation.
-   `style`: Code-Formatierung (keine Funktionsänderung).
-   `refactor`: Code-Umstrukturierung.
-   `test`: Tests hinzufügen oder anpassen.
-   `chore`: Build-Prozess, Hilfs-Tools etc.
-   `ui`: Anpassungen an der Benutzeroberfläche.
-   `l10n`: Lokalisierungsänderungen.


## 2. Commit-Nachricht Body

Ein Body ist optional, aber **dringend empfohlen** für alle Commits außer trivialen Änderungen.

-   Der Body muss durch eine Leerzeile vom Titel getrennt sein.
-   Er erklärt das **"Was"** und **"Warum"** der Änderung, nicht das "Wie".

## 3. Mehrzeilige Commits (Kommandozeile)

Um mehrzeilige Commits zu erstellen, wird die `-m` Option mehrfach verwendet. Jede Zeichenkette wird in einfache Anführungszeichen (`'`) eingeschlossen.

-   **Erstes `-m`:** Der Titel.
-   **Jedes weitere `-m`:** Ein Absatz im Body.

```bash
git commit -m 'feat(profil): Fügt Benutzer-Avatar hinzu' -m 'Implementiert die Möglichkeit für Benutzer, ein Profilbild hochzuladen und anzuzeigen.'
```
