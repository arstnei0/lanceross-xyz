import { defineConfig } from 'astro/config';
import partytown from "@astrojs/partytown";

export default defineConfig({
  site: 'https://lanceross.xyz',
  base: '/',
  integrations: [
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
  ],
});