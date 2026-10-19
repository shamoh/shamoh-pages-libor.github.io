import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://libor.kramolis.cz',
  output: 'static',
  // the compression drops the space at a line break between inline elements of the texts
  compressHTML: false,
  integrations: [sitemap()],
});
