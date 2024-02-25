// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Anka',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: './favicon-32x32.png' }
      ]
    },
  },
  devtools: { enabled: true },
  css: ['~/assets/css/main.scss'],
  modules: [
    '@nuxtjs/tailwindcss',
  ],
  buildModules: [
    '@nuxtjs/date-fns',
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
