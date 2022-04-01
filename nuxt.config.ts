import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    build: {
        transpile: ['v-calendar']
    },
    meta: {
        title: 'TMT AUTOMATION INC.',
        meta: [
            {
              hid: 'description',
              name: 'description',
              content: 'my website description'
            }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: ''},
            { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
            { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Rubik:wght@400;700&display=swap' },
          ],
    },
    css: [
        'normalize.css/normalize.css',
        '@/assets/css/main.scss'
    ]
})
