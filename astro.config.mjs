import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  integrations: [react()],
  base: '/Proyecto-Astro-Peru/', // debe mantenerse tu base
});
