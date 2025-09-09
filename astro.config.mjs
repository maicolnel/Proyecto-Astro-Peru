import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  // Si vas a subir tu sitio a internet, reemplaza 'https://example.com' con tu dominio.
  site: 'https://example.com',
  integrations: [react(), sitemap()]
});