<template>
    <div class="support">
        <div class="page-header page-header--sm" ref="pageHeaderSection">
            <div class="container-sm">
                <div class="page-header-text">
                    <h1>Support</h1>
                    <p>Welcome to TMT Support! Custom-made services tailored for you.</p>
                </div>
            </div>
        </div>
        <main>
            <div class="container-sm">
                <nav class="breadcrumb">
                    <ul>
                        <li>
                            <NuxtLink to="/">Home</NuxtLink>
                        </li>
                        <li class="is-active">
                            <span>Support</span>
                        </li>
                    </ul>
                </nav>
            </div>
            <div class="container">
                <ul class="cards list-styless" ref="cardsSection">
                    <li class="card fade-in" :class="'delay-' + (index + 1)" v-for="(item, index) in items" :key="item.title">
                        <NuxtLink :to="item.url">
                            <div class="card-icon" v-html="item.icon"></div>
                            <div class="d-md-flex flex-md-column flex-md-grow-1">
                                <h2 class="card-title">{{ item.title }}</h2>
                                <p class="card-content">
                                    {{ item.content }}
                                    <div class="card-action">
                                        <svg width="39" height="13" viewBox="0 0 39 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 6.552h33.618M31.6 11.375l5.6-4.804-5.6-4.946" stroke="#EE7B45" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>
                                    </div>
                                </p>
                            </div>
                        </NuxtLink>
                    </li>
                </ul>
            </div>
        </main>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const pageHeaderSection = ref(null)
const cardsSection = ref(null)
const items = [
    {
        title: 'Product Manuals',
        content: 'Check out the manuals for any specific info that you may need',
        url: '/support/product-manuals',
        icon: '<svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M78.833 40c0 21.447-17.386 38.833-38.833 38.833S1.167 61.447 1.167 40 18.553 1.167 40 1.167 78.833 18.553 78.833 40z" fill="#FFECE3" stroke="#EE7B45" stroke-width="2.333" stroke-miterlimit="10"/><path d="M39.867 22.317v39.867S23.4 56.984 14 58.317V19.184s17.333-2.4 25.867 3.133z" fill="#fff" stroke="#EE7B45" stroke-width="2.333" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M39.867 22.317v39.867s16.467-5.2 25.867-3.867V19.184c-.067 0-17.4-2.4-25.867 3.133z" fill="#fff" stroke="#EE7B45" stroke-width="2.333" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M61 27.65c-4.4-.266-11.133-.266-16.6 1.467m16.6 4.2c-4.4-.266-11.133-.2-16.6 1.467m16.6 4.2c-4.4-.267-11.133-.2-16.6 1.533M61 44.651c-4.4-.266-11.133-.2-16.6 1.467M61 50.317c-4.4-.266-11.133-.2-16.6 1.467" stroke="#EE7B45" stroke-width="1.333" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M61 27.65c-4.4-.266-11.133-.266-16.6 1.467m16.6 4.2c-4.4-.266-11.133-.2-16.6 1.467m16.6 4.2c-4.4-.267-11.133-.2-16.6 1.533M61 44.651c-4.4-.266-11.133-.2-16.6 1.467M61 50.317c-4.4-.266-11.133-.2-16.6 1.467M18.666 27.65c4.4-.266 11.133-.266 16.6 1.467m-16.6 4.2c4.4-.266 11.133-.2 16.6 1.467m-16.6 4.2c4.4-.266 11.133-.2 16.6 1.467m-16.6 4.2c4.4-.266 11.133-.2 16.6 1.467m-16.6 4.199c4.4-.266 11.133-.2 16.6 1.467" stroke="#EE7B45" stroke-width="1.333" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>'
    },
    {
        title: 'Installation Videos',
        content: 'Step-by-step videos detailing the installation process',
        url: '/support/installation-videos',
        icon: '<svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M78.833 40c0 21.447-17.386 38.833-38.833 38.833S1.167 61.447 1.167 40 18.553 1.167 40 1.167 78.833 18.553 78.833 40z" fill="#FFECE3" stroke="#EE7B45" stroke-width="2.333" stroke-miterlimit="10"/><path d="M60.333 59.6h-40.2C17.867 59.6 16 57.732 16 55.465V24.799c0-2.266 1.867-4.133 4.133-4.133h40.134c2.266 0 4.133 1.867 4.133 4.133v30.667c0 2.267-1.8 4.133-4.067 4.133z" fill="#fff" stroke="#EE7B45" stroke-width="2.333" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M27.47 41.133a3.6 3.6 0 100-7.2 3.6 3.6 0 000 7.2zm4.798 10.2h-9.6v-3.4a4.78 4.78 0 014.8-4.8 4.78 4.78 0 014.8 4.8v3.4z" stroke="#EE7B45" stroke-width="1.333" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M16.068 28.2h47.467" stroke="#EE7B45" stroke-width="2.333" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M20.932 26a1.133 1.133 0 100-2.268 1.133 1.133 0 000 2.267zm4.668 0a1.133 1.133 0 100-2.268 1.133 1.133 0 000 2.267zm4.666 0a1.133 1.133 0 100-2.268 1.133 1.133 0 000 2.267z" fill="#EE7B45"/><path d="M36.467 40.6h21.867m-21.867-4.868h21.867m-21.867 9.801h21.867M36.467 50.4H48" stroke="#EE7B45" stroke-width="1.333" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>'
    },
    {
        title: 'Schedule a Call',
        url: '/support/schedule-a-call',
        content: 'Get technical support to assist you with any problems',
        icon: '<svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M78.833 40c0 21.447-17.386 38.833-38.833 38.833S1.167 61.447 1.167 40 18.553 1.167 40 1.167 78.833 18.553 78.833 40z" fill="#FFECE3" stroke="#EE7B45" stroke-width="2.333" stroke-miterlimit="10"/><path d="M60.333 59.6h-40.2C17.867 59.6 16 57.732 16 55.465V24.799c0-2.266 1.867-4.133 4.133-4.133h40.134c2.266 0 4.133 1.867 4.133 4.133v30.667c0 2.267-1.8 4.133-4.067 4.133z" fill="#fff" stroke="#EE7B45" stroke-width="2.333" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M27.47 41.133a3.6 3.6 0 100-7.2 3.6 3.6 0 000 7.2zm4.798 10.2h-9.6v-3.4a4.78 4.78 0 014.8-4.8 4.78 4.78 0 014.8 4.8v3.4z" stroke="#EE7B45" stroke-width="1.333" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M16.068 28.2h47.467" stroke="#EE7B45" stroke-width="2.333" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M20.932 26a1.133 1.133 0 100-2.268 1.133 1.133 0 000 2.267zm4.668 0a1.133 1.133 0 100-2.268 1.133 1.133 0 000 2.267zm4.666 0a1.133 1.133 0 100-2.268 1.133 1.133 0 000 2.267z" fill="#EE7B45"/><path d="M36.467 40.6h21.867m-21.867-4.868h21.867m-21.867 9.801h21.867M36.467 50.4H48" stroke="#EE7B45" stroke-width="1.333" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>'
    },
    {
        title: 'Product Registration',
        content: 'Receive a free extension on your warranty upon registration',
        url: '/support/product-registration',
        icon: '<svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M78.833 40c0 21.447-17.386 38.833-38.833 38.833S1.167 61.447 1.167 40 18.553 1.167 40 1.167 78.833 18.553 78.833 40z" fill="#FFECE3" stroke="#EE7B45" stroke-width="2.333" stroke-miterlimit="10"/><path d="M61.2 59.8H18.266c-2.266 0-4.133-1.866-4.133-4.133v-31.6c0-2.267 1.867-4.133 4.133-4.133H61.2c2.266 0 4.133 1.866 4.133 4.133v31.6c0 2.267-1.867 4.133-4.133 4.133z" fill="#fff" stroke="#EE7B45" stroke-width="2.333" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M30.067 25.067a1.133 1.133 0 100-2.266 1.133 1.133 0 000 2.266zm19.135 0a1.133 1.133 0 100-2.266 1.133 1.133 0 000 2.266z" fill="#EE7B45"/><path d="M14.201 27.467h50.867" stroke="#EE7B45" stroke-width="2.333" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M24.933 32.6h-4.734v4.733h4.734V32.6zm0 8.2h-4.734v4.733h4.734V40.8zm0 8.066h-4.734V53.6h4.734v-4.733zM33.532 32.6H28.8v4.733h4.733V32.6zm0 8.2H28.8v4.733h4.733V40.8zm0 8.066H28.8V53.6h4.733v-4.733zM42.2 32.6h-4.733v4.733H42.2V32.6zm0 8.2h-4.733v4.733H42.2V40.8zm0 8.066h-4.733V53.6H42.2v-4.733zM50.866 32.6h-4.733v4.733h4.733V32.6zm0 8.2h-4.733v4.733h4.733V40.8zm0 8.066h-4.733V53.6h4.733v-4.733zM59.532 32.6H54.8v4.733h4.733V32.6zm0 8.2H54.8v4.733h4.733V40.8zm0 8.066H54.8V53.6h4.733v-4.733z" fill="#FBD9CA" stroke="#EE7B45" stroke-width="1.333" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>'
    },
    {
        title: 'Warranty Info',
        content: 'Get the latest information',
        url: '/support/warranty-info',
        icon: '<svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M78.833 40c0 21.447-17.386 38.833-38.833 38.833S1.167 61.447 1.167 40 18.553 1.167 40 1.167 78.833 18.553 78.833 40z" fill="#FFECE3" stroke="#EE7B45" stroke-width="2.333" stroke-miterlimit="10"/><path d="M61.735 20H18.8c-2.266 0-4.133 1.867-4.133 4.133v28.4c0 2.267 1.867 4.134 4.133 4.134h17.534l4.533 7.8 4.533-7.8h16.334c2.266 0 4.133-1.867 4.133-4.134V24.067C65.801 21.8 64.001 20 61.735 20z" fill="#fff" stroke="#EE7B45" stroke-width="2.333" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M28.402 41.6a2.8 2.8 0 100-5.6 2.8 2.8 0 000 5.6zm11.732 0a2.8 2.8 0 100-5.6 2.8 2.8 0 000 5.6zm11.734 0a2.8 2.8 0 100-5.6 2.8 2.8 0 000 5.6z" fill="#EE7B45"/><path d="M20.602 52.267h12.4m15.533 0H60.87" stroke="#EE7B45" stroke-width="1.333" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>'
    },
    {
        title: 'FAQ',
        content: 'See what questions that other people may have',
        url: '/support/faq',
        icon: '<svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M78.833 40c0 21.447-17.386 38.833-38.833 38.833S1.167 61.447 1.167 40 18.553 1.167 40 1.167 78.833 18.553 78.833 40z" fill="#FFECE3" stroke="#EE7B45" stroke-width="2.333" stroke-miterlimit="10"/><path d="M30.068 43.4c-.467 0-.8-.133-1.067-.333l-.533-.534L27.4 41.2c-.667.067-1.4.133-2.133.133-2.4 0-4.534-.4-6.4-1.133-1.867-.733-3.267-1.867-4.334-3.4-1.066-1.533-1.6-3.333-1.733-5.533 0-1-.067-2.067-.067-3.267 0-1.133 0-2.267.067-3.333.067-2.2.667-4 1.733-5.534C15.6 17.6 17 16.467 18.867 15.667c1.866-.8 4-1.2 6.4-1.2 2.4 0 4.533.4 6.4 1.2 1.866.8 3.266 1.933 4.333 3.467 1.067 1.533 1.6 3.333 1.667 5.533.066 1.066.066 2.2.066 3.333 0 1.134 0 2.2-.066 3.267C37.534 34.067 36.6 36.334 35 38l2.933 4.2s.067.067.067.133c0 .067.067.134.067.2.066.2 0 .4-.2.6a.845.845 0 01-.6.267h-7.2zm-4.734-9.267c.8 0 1.467-.266 2-.733.467-.466.734-1.267.8-2.266.067-1.067.067-2.134.067-3.134s0-2.067-.067-3.067c0-.666-.133-1.266-.4-1.733-.266-.466-.533-.8-.933-1a3.099 3.099 0 00-2.8 0c-.4.2-.733.534-1 1-.267.467-.333 1-.4 1.733 0 1-.067 2.067-.067 3.067s0 2.067.067 3.134c.067 1.066.333 1.8.8 2.266.467.467 1.133.733 1.933.733zm11.865 30.133c-.2 0-.4-.067-.6-.267a.845.845 0 01-.267-.6c0-.066 0-.2.067-.266l8.266-23.734c.067-.266.267-.533.534-.8.266-.266.666-.4 1.133-.4h8.067c.466 0 .866.134 1.133.4.267.267.467.534.533.8l8.267 23.734c0 .066.067.133.067.266 0 .2-.067.4-.267.6a.845.845 0 01-.6.267h-6.733c-.467 0-.8-.133-1-.333-.2-.2-.334-.4-.4-.6l-.867-2.467h-8l-.867 2.467c-.066.2-.2.4-.4.6-.2.2-.533.333-1.066.333h-7zm11.133-10.6h4.2l-2.133-6.933-2.067 6.933z" fill="#fff" stroke="#EE7B45" stroke-width="2.333" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M57.467 53.667l2 5.867M15.934 25.467v6.067" stroke="#EE7B45" stroke-width="1.333" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>'
    }
]

onMounted(() => {
    pageHeaderSection.value.classList.add('is-loaded')
    cardsSection.value.classList.add('is-revealed')
})

</script>
