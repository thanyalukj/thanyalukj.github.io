import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://thanyalukj.com',
  trailingSlash: 'never',
  build: {
    format: 'directory',
  },
});
