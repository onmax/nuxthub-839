export default defineNuxtConfig({
  compatibilityDate: '2025-01-01',
  modules: ['@nuxthub/core'],
  hub: { cache: true },
  ssr: false,
  experimental: { payloadExtraction: true },
  nitro: {
    preset: 'cloudflare-pages',
    prerender: { routes: ['/', '/about'], crawlLinks: true },
  },
})
