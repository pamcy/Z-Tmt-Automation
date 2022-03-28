<template>
    <div>
        <div class="support" v-if="$route.name === 'support'">
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
        <NuxtPage v-else />
    </div>
</template>

<script setup>
import { nextTick, onMounted, ref, watch } from 'vue'

const route = useRoute()
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
        icon: '<svg width="120" height="120" viewBox="0 0 120 120" fill="none"><path d="M118.25 60c0 32.17-26.08 58.25-58.25 58.25S1.75 92.17 1.75 60 27.83 1.75 60 1.75 118.25 27.83 118.25 60z" fill="#FFECE3" stroke="#EE7B45" stroke-width="3.5" stroke-miterlimit="10"/><path d="M92.6 89.7H28.2c-3.4 0-6.2-2.8-6.2-6.2V36.2c0-3.4 2.8-6.2 6.2-6.2h64.4c3.4 0 6.2 2.8 6.2 6.2v47.4c-.1 3.4-2.8 6.1-6.2 6.1z" fill="#fff" stroke="#EE7B45" stroke-width="3.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M73.5 55.2 55.2 44.6v21.2l18.3-10.6z" fill="#FFECE3" stroke="#EE7B45" stroke-width="3.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M31.9 76.9h59.4" stroke="#EE7B45" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M34 80.9a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" fill="#fff" stroke="#EE7B45" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>'
    },
    {
        title: 'Schedule a Call',
        url: '/support/schedule-a-call',
        content: 'Get technical support to assist you with any problems',
        icon: '<svg width="120" height="120" viewBox="0 0 120 120" fill="none"><path d="M118.25 60c0 32.17-26.08 58.25-58.25 58.25S1.75 92.17 1.75 60 27.83 1.75 60 1.75 118.25 27.83 118.25 60z" fill="#FFECE3" stroke="#EE7B45" stroke-width="3.5" stroke-miterlimit="10"/><path d="M91.8 89.7H27.4c-3.4 0-6.2-2.8-6.2-6.2V36.1c0-3.4 2.8-6.2 6.2-6.2h64.4c3.4 0 6.2 2.8 6.2 6.2v47.4c0 3.4-2.8 6.2-6.2 6.2z" fill="#fff" stroke="#EE7B45" stroke-width="3.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M45.1 37.6a1.7 1.7 0 1 0 0-3.4 1.7 1.7 0 0 0 0 3.4zm28.702 0a1.7 1.7 0 1 0 0-3.4 1.7 1.7 0 0 0 0 3.4z" fill="#EE7B45"/><path d="M21.3 41.2h76.3" stroke="#EE7B45" stroke-width="3.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M37.4 48.9h-7.1V56h7.1v-7.1zm0 12.3h-7.1v7.1h7.1v-7.1zm0 12.1h-7.1v7.1h7.1v-7.1zm12.901-24.4h-7.1V56h7.1v-7.1zm0 12.3h-7.1v7.1h7.1v-7.1zm0 12.1h-7.1v7.1h7.1v-7.1zm13-24.4h-7.1V56h7.1v-7.1zm0 12.3h-7.1v7.1h7.1v-7.1zm0 12.1h-7.1v7.1h7.1v-7.1zm13-24.4h-7.1V56h7.1v-7.1zm0 12.3h-7.1v7.1h7.1v-7.1zm0 12.1h-7.1v7.1h7.1v-7.1zm13-24.4h-7.1V56h7.1v-7.1zm0 12.3h-7.1v7.1h7.1v-7.1zm0 12.1h-7.1v7.1h7.1v-7.1z" fill="#FBD9CA" stroke="#EE7B45" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>'
    },
    {
        title: 'Product Registration',
        content: 'Receive a free extension on your warranty upon registration',
        url: '/support/product-registration',
        icon: '<svg width="120" height="120" viewBox="0 0 120 120" fill="none"><path d="M118.25 60c0 32.17-26.08 58.25-58.25 58.25S1.75 92.17 1.75 60 27.83 1.75 60 1.75 118.25 27.83 118.25 60z" fill="#FFECE3" stroke="#EE7B45" stroke-width="3.5" stroke-miterlimit="10"/><path d="M90.5 89.4H30.2c-3.4 0-6.2-2.8-6.2-6.2v-46c0-3.4 2.8-6.2 6.2-6.2h60.2c3.4 0 6.2 2.8 6.2 6.2v46c0 3.4-2.7 6.2-6.1 6.2z" fill="#fff" stroke="#EE7B45" stroke-width="3.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M41.2 61.7a5.4 5.4 0 1 0 0-10.8 5.4 5.4 0 0 0 0 10.8zM48.4 77H34v-5.1c0-4 3.2-7.2 7.2-7.2s7.2 3.2 7.2 7.2V77z" stroke="#EE7B45" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M24.102 42.3h71.2" stroke="#EE7B45" stroke-width="3.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M31.4 39a1.7 1.7 0 1 0 0-3.4 1.7 1.7 0 0 0 0 3.4zm7 0a1.7 1.7 0 1 0 0-3.4 1.7 1.7 0 0 0 0 3.4zm7 0a1.7 1.7 0 1 0 0-3.4 1.7 1.7 0 0 0 0 3.4z" fill="#EE7B45"/><path d="M54.7 60.9h32.8m-32.8-7.3h32.8M54.7 68.3h32.8m-32.8 7.3H72" stroke="#EE7B45" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>'
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

async function toggleIsLoadedClass(on) {
    await nextTick();

    if (pageHeaderSection.value) {
        pageHeaderSection.value.classList[on ? 'add' : 'remove']('is-loaded')
    }

    if (cardsSection.value) {
        cardsSection.value.classList[on ? 'add' : 'remove']('is-revealed')
    }
}

onMounted(() => {
    toggleIsLoadedClass(true)
})

watch(route, (to) => {
    toggleIsLoadedClass(to.name === 'support')
})

</script>
