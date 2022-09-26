import { defineConfig } from 'astro/config';
import compress from "astro-compress";

export default defineConfig({
  site: 'https://lanceross.xyz',
  base: '/',

  vite: {
    ssr: {
      external: ["svgo"],
    },
  },

  integrations: [
    compress({
      css: true,
      html: true,
      js: true,
      img: true,
      svg: true,
    }),
  ],
});