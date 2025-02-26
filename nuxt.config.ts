// nuxt.config.ts
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    '@nuxtjs/i18n'
  ],

  i18n: {
    locales: [
      {
        code: 'en',
        name: 'English',
        language: 'en-US',
        file: 'en.json'
      },
      {
        code: 'fr',
        name: 'Français',
        language: 'fr-FR',
        file: 'fr.json'
      },
      {
        code: 'sv',
        name: 'Svenska',
        language: 'sv-SE',
        file: 'sv.json'
      },
      {
        code: 'th',
        name: 'ไทย',
        language: 'th-TH',
        file: 'th.json'
      }
    ],
    lazy: true,
    langDir: 'locales',
    defaultLocale: 'en',
    strategy: 'prefix_except_default',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected2',
      redirectOn: 'root'
    }
  }
})