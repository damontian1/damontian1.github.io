export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Damon Tian | Portfolio',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'I’m Damon, a Web Developer from New York City and I love building beautiful and intuitive web applications.' },
      { property: "og:site_name", content: "Damon Tian | Portfolio" },
      { hid: "og:type", property: "og:type", content: "website" },
      {
        hid: "og:url",
        property: "og:url",
        content: "http://damontian1.github.io",
      },
      {
        hid: "og:title",
        property: "og:title",
        content: "Damon Tian | Portfolio",
      },
      {
        hid: "og:description",
        property: "og:description",
        content: "I’m Damon, a Web Developer from New York City and I love building beautiful and intuitive web applications.",
      },
      {
        hid: "og:image",
        property: "og:image",
        content: "https://damontian1.github.io/seo-card.png",
      },
      { property: "og:image:width", content: "740" },
      { property: "og:image:height", content: "300" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        hid: "twitter:url",
        name: "twitter:url",
        content: "https://damontian1.github.io",
      },
      {
        hid: "twitter:title",
        name: "twitter:title",
        content: "Damon Tian | Portfolio",
      },
      {
        hid: "twitter:description",
        name: "twitter:description",
        content: "I’m Damon, a Web Developer from New York City and I love building beautiful and intuitive web applications.",
      },
      {
        hid: "twitter:image",
        name: "twitter:image",
        content: "https://damontian1.github.io/seo-card.png",
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/assets/styles.css'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxt/http'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
