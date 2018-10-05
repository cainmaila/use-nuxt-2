# How to use nuxt 2

(安裝`npx`工具)[https://www.npmjs.com/package/npx]

```bash
npm i -g npx
```

新專案

```bash
yarn create nuxt-app <my-project>
```

服務啟動
```bash
yarn dev
```

修改'port'加入環境變數
```
HOST=0.0.0.0 PORT=80
```

cssnext使用設定

nuxt2已內建`postcss-preset-env`，請再`nuxt.config.js`加上
```js
 build: {
        postcss: {
            preset: {
                /* use stage 3 features + css nesting rules */
                stage: 3,
                features: {
                    'nesting-rules': true
                }
            }
        },
```

多語系統

安裝 `nuxt-i18`模組

```js
modules: [
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
```

使用pwa

```bash
yarn add @nuxtjs/pwa
```

nuxt.config.js
```js
{
    modules: [
        '@nuxtjs/pwa',
    ],
}
