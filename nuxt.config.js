const pkg = require('./package')

module.exports = {
    mode: 'universal',
    /*
  ** Headers of the page
  */
    head: {
        title: pkg.name,
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            },
            {
                hid: 'description',
                name: 'description',
                content: pkg.description
            }
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
    },

    /*
  ** Customize the progress-bar color
  */
    loading: { color: '#fff' },

    /*
  ** Global CSS
  */
    css: [],

    /*
  ** Plugins to load before mounting the App
  */
    plugins: [],

    /*
  ** Nuxt.js modules
  */
    modules: [
        // Doc: https://github.com/nuxt-community/axios-module#usage
        '@nuxtjs/axios',
        [
            'nuxt-i18n',
            {
                locales: [
                    {
                        code: 'en',
                        iso: 'en-US',
                        file: 'en.json'
                    },
                    {
                        code: 'zh',
                        iso: 'zh-TW',
                        file: 'zh.json'
                    }
                ],
                defaultLocale: 'zh',
                lazy: true,
                langDir: 'lang/'
            }
        ]
    ],
    /*
  ** Axios module configuration
  */
    axios: {
        // See https://github.com/nuxt-community/axios-module#options
    },

    /*
  ** Build configuration
  */
    build: {
        postcss: {
            preset: {
                /* use stage 3 features + css nesting rules */
                stage: 3,
                features: {
                    'nesting-rules': true
                },
                autoprefixer: { grid: true }
            }
        },
        /*
    ** You can extend webpack config here
    */
        extend(config, ctx) {
            // Run ESLint on save
            if (ctx.isDev && ctx.isClient) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/
                })
            }
        }
    }
}
