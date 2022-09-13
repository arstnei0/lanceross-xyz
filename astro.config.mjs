import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://lanceross.xyz',
  base: '/',

  vite: {
    ssr: {
      external: ["svgo"],
    },
  },
});