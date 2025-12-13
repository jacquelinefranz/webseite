// @ts-check
import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import icon from 'astro-icon';
import astrobook from 'astrobook';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: node({
    mode: 'standalone',
  }),
  integrations: [
    icon({ include: { lucide: ['*'], mingcute: ['*'] } }), // Lucide und Mingcute inkludieren
    // Astrobook wird nur geladen, wenn die Umgebungsvariable ENABLE_ASTROBOOK gesetzt ist.
    // Dies erlaubt es, Astrobook bei Bedarf separat zu starten, ohne die Hauptwebseite zu beeinflussen.
    process.env.ENABLE_ASTROBOOK ? astrobook() : null,
  ].filter(Boolean),
});