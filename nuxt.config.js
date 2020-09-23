const BASE_URL = 'https://elect.in.th/coup-board/'
export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'spa',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'static',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: 'ว่าด้วยทหารบนบอร์ดรัฐวิสาหกิจ: อ่อนไหวแค่ไหนต่อรัฐประหาร',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'ก่อนหลังรัฐประหาร มีทหารเป็นบอร์ดรัฐวิสาหกิจมากน้อยแค่ไหน?'
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'ว่าด้วยทหารบนบอร์ดรัฐวิสาหกิจ: อ่อนไหวแค่ไหนต่อรัฐประหาร'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'ก่อนหลังรัฐประหาร มีทหารเป็นบอร์ดรัฐวิสาหกิจมากน้อยแค่ไหน?'
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'website'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: BASE_URL + 'og_image.png'
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: BASE_URL
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'ว่าด้วยทหารบนบอร์ดรัฐวิสาหกิจ: อ่อนไหวแค่ไหนต่อรัฐประหาร'
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: 'ก่อนหลังรัฐประหาร มีทหารเป็นบอร์ดรัฐวิสาหกิจมากน้อยแค่ไหน?'
      },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image'
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image:src',
        content: BASE_URL + 'og_image.png'
      },
      {
        hid: 'twitter:url',
        property: 'twitter:url',
        content: BASE_URL
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Global CSS
   */
  css: ['~/assets/scss/main.scss'],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    // '@nuxtjs/eslint-module'
    '@nuxtjs/google-analytics'
  ],
  googleAnalytics: {
    id: 'UA-129270906-1'
  },
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/style-resources'],
  styleResources: {
    scss: ['~/assets/scss/variable.scss']
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {},
  generate: {
    dir: 'dist/coup-board'
  },
  router: {
    base: '/coup-board/'
  }
}
