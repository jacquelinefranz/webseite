// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import icon from 'astro-icon';
import astrobook from 'astrobook';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: import.meta.env.SITE || 'https://jacquelinefranz.de',
  integrations: [
    react(),
    icon({ include: { mingcute: ['*'] } }), // Mingcute inkludieren
    // Astrobook wird nur geladen, wenn die Umgebungsvariable ENABLE_ASTROBOOK gesetzt ist.
    // Dies erlaubt es, Astrobook bei Bedarf separat zu starten, ohne die Hauptwebseite zu beeinflussen.
    process.env.ENABLE_ASTROBOOK ? astrobook() : null,
  ].filter(Boolean),
});