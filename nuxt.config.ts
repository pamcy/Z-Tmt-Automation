import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    build: {
        transpile: ['v-calendar']
    },
    meta: {
        title: 'TMT AUTOMATION INC.',
        meta: [
            { hid: 'description', name: 'description', content: 'TMT website description' },
            { property: "og:site_name", content: "TMT AUTOMATION INC." },
            { hid: 'og-title', property: 'og:title', content: 'TMT AUTOMATION INC.' },
            { hid: 'og-desc', property: 'og:description', content: 'TMT website description' },
            { hid: 'og-url', property: 'og:url', content: 'https://www.tmt-automation.com/' },
            { hid: 'og-image', property: 'og:image', content: '/images/tmt-social-sharing.png' },
        ],
        link: [
            { rel: "apple-touch-icon", href: "/images/apple-touch-icon.png", sizes: "180x180" },
            { rel: "icon", type: "image/png", href: "/images/android-chrome-512x512.png", sizes: "192x192" },
            { rel: "icon", type: "image/png", href: "/images/android-chrome-192x192.png", sizes: "192x192" },
            { rel: "icon", type: "image/png", href: "/images/favicon-32x32.png", sizes: "32x32" },
            { rel: "icon", type: "image/png", href: "/images/favicon-16x16.png", sizes: "16x16" },
            { rel: "shortcut icon", href: "/images/favicon.ico" },
            { rel: "manifest", href: "/images/site.webmanifest" },
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
