import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  adapter: cloudflare({
    imageService: 'passthrough',
    session: false,
  }),
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
});