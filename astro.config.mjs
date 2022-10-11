import { defineConfig } from 'astro/config';
import compress from "astro-compress";
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://lanceross.xyz',
  base: '/',
  vite: {
    ssr: {
      external: ["svgo"]
    }
  },
  integrations: [compress({
    css: true,
    html: true,
    js: true,
    img: true,
    svg: true,
    webp: true,
  }), tailwind(), sitemap()],
});