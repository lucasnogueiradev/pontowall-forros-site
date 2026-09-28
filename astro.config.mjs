// @ts-check
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://pontowallforros.com.br',
  integrations: [mdx(), sitemap()],
  i18n: {
    locale: 'pt-BR',
    defaultLocale: 'pt',
    locales: ['pt'],
  },
});
