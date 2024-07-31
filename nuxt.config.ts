// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: ['@nuxt/ui-pro'],

  modules: [
    '@nuxtjs/seo',
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxtjs/google-fonts',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxthq/studio',
    '@vueuse/nuxt',
    'nuxt-og-image'
  ],
  googleFonts: {
    families: {
      Roboto: [100, 300, 400, 700, 900]
    }
  },

  site: {
    url: 'https://www.longwebstudio.net',
    name: `Nhà thiết kế website hiện đại - Long Web Studio`,
    description: `Long Web Studio là nhà thiết kế website hiện đại và chuyên nghiệp, cung cấp các giải pháp thiết kế như website cửa hàng, thiết kế website blog, và ứng dụng.`,
    defaultLocale: 'vn'
  },

  hooks: {
    // Define `@nuxt/ui` components as global to use them in `.md` (feel free to add those you need)
    'components:extend': (components) => {
      const globals = components.filter(c => ['UButton'].includes(c.pascalName))

      globals.forEach(c => c.global = true)
    }
  },

  ui: {
    icons: ['heroicons', 'simple-icons']
  },

  colorMode: {
    disableTransition: true
  },

  routeRules: {
    // Temporary workaround for prerender regression. see https://github.com/nuxt/nuxt/issues/27490
    '/': { prerender: true },
    '/api/search.json': { prerender: true },
    '/docs': { redirect: '/docs/getting-started', prerender: false }
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
