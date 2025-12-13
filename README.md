# Jacqueline Franz - Persönliche Webseite

Dieses Repository enthält den Quellcode für die persönliche Webseite von Jacqueline Franz. Für typische Entwicklungsaufgaben und Arbeitsabläufe, beginne bitte mit der **[Onboarding-Dokumentation](./dokumentation/_ONBOARDING.md)**.

## 🧞 Befehle

Alle Befehle werden aus dem `webseite`-Verzeichnis in einem Terminal ausgeführt:

| Befehl | Aktion |
| :------------------ | :------------------------------------------- |
| `bun install` | Installiert die Abhängigkeiten |
| `bun dev` | Startet den lokalen Entwicklungsserver auf `localhost:4321` |
| `bun build` | Erstellt die Produktionsseite im `./dist/`-Verzeichnis |
| `bun preview` | Startet eine lokale Vorschau des Builds |
| `bun astro ...` | Führt CLI-Befehle wie `astro add` oder `astro check` aus |

## 📚 Komponenten-Dokumentation (Astrobook)

Die technische Dokumentation und die interaktive Komponenten-Bibliothek werden mit **Astrobook** verwaltet.

**Wichtig:** Astrobook wird nur geladen, wenn Sie es explizit aktivieren, um die Hauptwebseite nicht zu stören.

*   **Für die Hauptwebseite:** Führen Sie einfach `bun dev` aus. Ihre Webseite ist unter `http://localhost:4321` erreichbar.
*   **Für Astrobook:** Führen Sie `ENABLE_ASTROBOOK=true bun dev` aus. Astrobook ist dann unter `http://localhost:4321` erreichbar.

Dadurch können Sie je nach Bedarf zwischen der Entwicklung der Webseite und der Nutzung von Astrobook wechseln, ohne die Konfigurationsdateien anpassen zu müssen.