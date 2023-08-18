import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  site: 'https://querymaster.io',
  integrations: [tailwind(), sitemap()],
  adapter: vercel({
    includeFiles: [
      './public/icon.svg',
      './public/QueryMaster.png',
      './public/QueryMaster-half.png',
    ],
  }),
  output: 'hybrid',
});
