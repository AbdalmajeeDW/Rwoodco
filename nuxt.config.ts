import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
export default defineNuxtConfig({
  //...
  build: {
    transpile: ['vuetify'],
  },
vueEmail:{
autoImport:true
},
  modules: [
    '@nuxtjs/i18n',
  '@vue-email/nuxt',
    ['@nuxtjs/google-fonts', {
      families: {
        Roboto: true,
        Inter: [400, 700],
        'Josefin+Sans': true,
        Lato: [100, 300],
        Raleway: {
          wght: [100, 400],
          ital: [100]
        },
        'Crimson Pro': {
          wght: '200..900',
          ital: '200..700',
        }
      }
  }],,
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    //...
  ],
  css: ['~/assets/css/main.min.css'],
 
  vite: {
    
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },

  compatibilityDate: '2024-07-31',
})