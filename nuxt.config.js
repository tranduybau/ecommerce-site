export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Mukta:300,400,700' },
      { rel: 'stylesheet', href: '/fonts/icomoon/style.css' }
    ],
    script: [
      { src: '/js/jquery-3.3.1.min.js' },
      { src: '/js/jquery-ui.js' },
      { src: '/js/popper.min.js' },
      { src: '/js/bootstrap.min.js' },
      { src: '/js/owl.carousel.min.js' },
      { src: '/js/jquery.magnific-popup.min.js' },
      { src: '/js/aos.js' }
      // { src: '/js/main.js' }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  css: [
    '@/assets/css/bootstrap.min.css',
    '@/assets/css/magnific-popup.css',
    '@/assets/css/jquery-ui.css',
    '@/assets/css/owl.carousel.min.css',
    '@/assets/css/owl.theme.default.min.css',
    '@/assets/css/aos.css',
    '@/assets/css/style.css'
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend (config, ctx) {}
  }
}
