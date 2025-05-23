// @ts-check
import { defineConfig } from 'astro/config'
import node from '@astrojs/node'
import prefetch from "@astrojs/prefetch"
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  output: 'server',

  adapter: node({
      mode: 'middleware',
  }),

  integrations: [
    react(),
    prefetch()
  ],
})

