import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://vivekganesan.com',
  build: {
    assets: 'assets'
  },
  devToolbar: {
    enabled: false
  }
});
