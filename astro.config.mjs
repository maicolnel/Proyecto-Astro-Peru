import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://maicolnel.github.io/Proyecto-Astro-Peru',
  base: '/Proyecto-Astro-Peru/',
  integrations: [react()],
});
