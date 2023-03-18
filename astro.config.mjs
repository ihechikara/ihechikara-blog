import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import partytown from '@astrojs/partytown'

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  // output: 'server',
  site: "https://ihechikara.com",
  integrations: [
    mdx(),
    sitemap(),
    tailwind(),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
  ],
});