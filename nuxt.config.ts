// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: ['@nuxt/ui-pro'],

  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/image',
    '@nuxt/ui',
    'nuxt-gtag',
    '@nuxtjs/seo'
  ],

  gtag: {
    id: 'G-7NHZPV6N6F'
  },
  site: {
    url: 'https://www.longwebstudio.net',
    name: 'Long Web Studio',
    description: 'Thiết kế website chuyên nghiệp hiện đại chuẩn SEO!',
    defaultLocale: 'vi' // not needed if you have @nuxtjs/i18n installed
  },

  ui: {
    icons: ['heroicons', 'simple-icons']
  },

  routeRules: {
    // Temporary workaround for prerender regression. see https://github.com/nuxt/nuxt/issues/27490
    '/': { prerender: true },
    '/blog': { redirect: 'https://blog.longwebstudio.net/', prerender: false },
    '/cua-hang': { redirect: 'https://shop.longwebstudio.net/', prerender: false },
    '/san-pham': { redirect: 'https://shop.longwebstudio.net/', prerender: false },
    '/lien-he': { redirect: 'https://shop.longwebstudio.net/', prerender: false },
    '/gioi-thieu': { redirect: 'https://shop.longwebstudio.net/', prerender: false },
    '/cam-on': { redirect: 'https://shop.longwebstudio.net/', prerender: false }
  },

  devtools: {
    enabled: true
  },

  typescript: {
    strict: false
  },

  future: {
    compatibilityVersion: 4
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  },

  compatibilityDate: '2024-07-11'
})
