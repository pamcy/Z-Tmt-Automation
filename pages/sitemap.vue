<template>
    <div class="sitemap">
        <div class="page-header page-header--sm page-header-sitemap" ref="pageHeaderSection">
            <div class="container-sm">
                <div class="page-header-text">
                    <h1>Sitemap</h1>
                </div>
            </div>
        </div>
        <main>
            <div class="container-sm">
                <div class="sitemap-list-wrapper">
                    <ul class="list-styless sitemap-list" ref="sitemapList">
                        <li class="fade-in" :class="'delay-' + (index + 1)" v-for="(listItem, index) in list" :key="listItem.title">
                            <h2 class="h3">{{ listItem.title }}</h2>
                            <ul>
                                <li v-for="subItem in listItem.items" :key="subItem.name">
                                    <NuxtLink :to="subItem.url">{{ subItem.name }}</NuxtLink>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <svg width="172" height="126" viewBox="0 0 172 126" fill="none" xmlns="http://www.w3.org/2000/svg" class="sitemap-deco"><path d="M54.362 13.428h-7.264V27.32h7.264V13.428z" fill="#fff" stroke="#EE7B45" stroke-width="2.4" stroke-miterlimit="10"/><path d="M48.298 90.423V30.256L85.973 6.664l37.675 23.592v60.167h-75.35z" fill="#fff" stroke="#EE7B45" stroke-width="2.4"/><path d="M131.76 39.767L85.974 9.945 40.187 39.767v-7.945L85.975 2l45.786 29.822v7.945z" fill="#EE7B45" stroke="#EE7B45" stroke-width="2.4" stroke-miterlimit="10"/><path d="M130.505 85.44h-89.02v7.592h89.02v-7.593z" fill="#fff" stroke="#EE7B45" stroke-width="2.4" stroke-miterlimit="10"/><path d="M24.639 63.17h-2.67v29.823h2.67V63.171z" fill="#EE7B45"/><path fill-rule="evenodd" clip-rule="evenodd" d="M32.12 47.729a9.794 9.794 0 001.077-4.48c0-5.447-4.43-9.862-9.895-9.862s-9.896 4.415-9.896 9.862c0 1.613.388 3.135 1.077 4.479a12.624 12.624 0 00-3.905 9.14c0 7.004 5.696 12.681 12.723 12.681 7.027 0 12.723-5.677 12.723-12.68 0-3.591-1.498-6.833-3.904-9.14z" fill="#F5BA9F"/><path d="M32.12 47.729l-1.068-.547-.407.795.645.618.83-.866zm-17.637-.001l.83.866.645-.618-.407-.795-1.068.547zm18.705.548a11.002 11.002 0 001.21-5.027h-2.4a8.594 8.594 0 01-.946 3.933l2.136 1.094zm1.21-5.027c0-6.113-4.972-11.062-11.096-11.062v2.4c4.806 0 8.695 3.882 8.695 8.662h2.4zM23.301 32.187c-6.124 0-11.096 4.949-11.096 11.062h2.4c0-4.78 3.89-8.662 8.696-8.662v-2.4zM12.206 43.249c0 1.807.436 3.517 1.209 5.026l2.136-1.094a8.594 8.594 0 01-.945-3.932h-2.4zm1.447 3.612A13.823 13.823 0 009.378 56.87h2.4c0-3.25 1.354-6.184 3.535-8.275l-1.66-1.733zM9.378 56.87c0 7.67 6.237 13.88 13.923 13.88v-2.4c-6.368 0-11.523-5.144-11.523-11.48h-2.4zm13.923 13.88c7.686 0 13.923-6.21 13.923-13.88h-2.4c0 6.336-5.155 11.48-11.523 11.48v2.4zm13.923-13.88a13.82 13.82 0 00-4.274-10.006l-1.66 1.732a11.423 11.423 0 013.534 8.274h2.4zm113.622 6.3h-2.67v29.823h2.67V63.171z" fill="#EE7B45"/><path fill-rule="evenodd" clip-rule="evenodd" d="M158.327 47.729a9.792 9.792 0 001.077-4.48c0-5.447-4.43-9.862-9.895-9.862s-9.896 4.415-9.896 9.862a9.8 9.8 0 001.077 4.479 12.624 12.624 0 00-3.905 9.14c0 7.004 5.696 12.681 12.723 12.681 7.027 0 12.723-5.677 12.723-12.68 0-3.591-1.498-6.833-3.904-9.14z" fill="#F5BA9F"/><path d="M158.327 47.729l-1.068-.547-.407.795.645.618.83-.866zm-17.637-.001l.83.866.645-.618-.407-.795-1.068.547zm18.705.548a11.001 11.001 0 001.209-5.027h-2.4a8.595 8.595 0 01-.945 3.933l2.136 1.094zm1.209-5.027c0-6.113-4.971-11.062-11.095-11.062v2.4c4.806 0 8.695 3.882 8.695 8.662h2.4zm-11.095-11.062c-6.124 0-11.096 4.949-11.096 11.062h2.4c0-4.78 3.89-8.662 8.696-8.662v-2.4zm-11.096 11.062c0 1.807.436 3.517 1.209 5.026l2.136-1.094a8.592 8.592 0 01-.945-3.932h-2.4zm1.447 3.612a13.823 13.823 0 00-4.275 10.008h2.4c0-3.25 1.354-6.184 3.535-8.275l-1.66-1.733zm-4.275 10.008c0 7.67 6.237 13.88 13.923 13.88v-2.4c-6.368 0-11.523-5.144-11.523-11.48h-2.4zm13.923 13.88c7.686 0 13.923-6.21 13.923-13.88h-2.4c0 6.336-5.155 11.48-11.523 11.48v2.4zm13.923-13.88a13.82 13.82 0 00-4.274-10.006l-1.66 1.732a11.425 11.425 0 013.534 8.274h2.4z" fill="#EE7B45"/><path d="M41.484 89.197h89.021" stroke="#EE7B45" stroke-width="2.4" stroke-miterlimit="10"/><path fill="#D9D8D9" stroke="#EE7B45" stroke-width="2.4" d="M72.645 41.981h28.529v46.822H72.645z"/><path d="M2 123.999h5.191V75.087h-5.19v48.912z" fill="#fff" stroke="#EE7B45" stroke-width="2.4" stroke-miterlimit="10"/><path d="M81.756 81.316H7.207v36.476h74.549V81.316z" fill="#EE7B45" stroke="#EE7B45" stroke-width="2.4" stroke-miterlimit="10"/><path d="M81.756 117.792H7.207v3.117h74.549v-3.117zm0-38.05H7.207v3.117h74.549v-3.117z" fill="#fff" stroke="#EE7B45" stroke-width="2.4" stroke-miterlimit="10"/><path d="M13.977 84.017v31.14m6.804-31.14v31.14m6.836-31.14v31.14m6.801-31.14v31.14m6.805-31.14v31.14m6.836-31.14v31.14m6.808-31.14v31.14m6.801-31.14v31.14m6.836-31.14v31.14m6.805-31.14v31.14M20.781 84.016v31.14" stroke="#fff" stroke-width="2.4" stroke-miterlimit="10"/><path d="M80.926 123.999h5.191V75.087h-5.191v48.912z" fill="#fff" stroke="#EE7B45" stroke-width="2.4" stroke-miterlimit="10"/><path d="M85.887 123.999h5.191V75.087h-5.191v48.912z" fill="#fff" stroke="#EE7B45" stroke-width="2.4" stroke-miterlimit="10"/><path d="M165.643 81.316h-74.55v36.476h74.55V81.316z" fill="#EE7B45" stroke="#EE7B45" stroke-width="2.4" stroke-miterlimit="10"/><path d="M165.643 117.792h-74.55v3.117h74.55v-3.117zm0-38.05h-74.55v3.117h74.55v-3.117z" fill="#fff" stroke="#EE7B45" stroke-width="2.4" stroke-miterlimit="10"/><path d="M97.863 84.017v31.14m6.805-31.14v31.14m6.836-31.14v31.14m6.801-31.14v31.14m6.804-31.14v31.14m6.836-31.14v31.14m6.809-31.14v31.14m6.801-31.14v31.14m6.836-31.14v31.14m6.804-31.14v31.14m-54.523-31.141v31.14" stroke="#fff" stroke-width="2.4" stroke-miterlimit="10"/><path d="M164.813 123.999h5.191V75.087h-5.191v48.912z" fill="#fff" stroke="#EE7B45" stroke-width="2.4" stroke-miterlimit="10"/><ellipse cx="94.889" cy="62.658" rx="2.494" ry="2.486" fill="#fff"/></svg>
                </div>
            </div>
        </main>
    </div>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue'

const pageHeaderSection = ref(null)
const sitemapList = ref(null)
const list = [
    {
        title: 'Products',
        items: [
            {
                name: 'Gate Openers',
                url: '/product-detail',
            }
        ]
    },
    {
        title: 'Features',
        items: [
            {
                name: 'Solar',
                url: '/',
            },
            {
                name: 'App Integration',
                url: '/',
            },
            {
                name: 'Comparison with Other Brands',
                url: '/',
            },
        ]
    },
    {
        title: 'Support',
        items: [
            {
                name: 'Product Manuals',
                url: '/support/product-manuals',
            },
            {
                name: 'Installation videos',
                url: '/support/installation-videos',
            },
            {
                name: 'Schedule a Call',
                url: '/support/schedule-a-call',
            },
            {
                name: 'Product Registration',
                url: '/support/product-registration',
            },
            {
                name: 'FAQ',
                url: '/support/faq',
            },
        ]
    },
    {
        title: 'Contact',
        items: [
            {
                name: 'About Us',
                url: '/contact/about-us',
            },
            {
                name: 'Installation videos',
                url: '/contact/contact-us',
            }
        ]
    },
    {
        title: 'Legal',
        items: [
            {
                name: 'Privacy Policy',
                url: '/',
            },
            {
                name: 'Terms of Use',
                url: '/',
            },
            {
                name: 'Refund Policy',
                url: '/',
            }
        ]
    }
]

onMounted(() => {
    setTimeout(() => {
        if (pageHeaderSection.value) {
            pageHeaderSection.value.classList.add('is-loaded')
        }

        if (sitemapList.value) {
            sitemapList.value.classList.add('is-revealed')
        }
    }, 100);
})


</script>
