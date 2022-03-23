<template>
    <div class="product-manuals">
        <div class="page-header page-header-product-manuals page-header--image-only"></div>
        <main>
            <div class="container-sm">
                <nav class="breadcrumb">
                    <ul>
                        <li>
                            <NuxtLink to="/">Home</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/support">Support</NuxtLink>
                        </li>
                        <li class="is-active">
                            <span>Product Manuals</span>
                        </li>
                    </ul>
                </nav>

                <h1 class="h2">Product Manuals</h1>

                <div :class="['select-dropdown', sortingIsOpen ? 'is-active' : '']">
                    <button class="btn-styless" @click="onToggleSorting">
                        <span v-if="currentSorting">{{ currentSorting }}</span>
                        <span class="select-dropdown-placeholder" v-else>Type</span>
                        <svg width="18" height="12" viewBox="0 0 18 12" fill="none">
                            <path d="m2 2 6.899 8L16 2" stroke="#EE7B45" stroke-width="2.7" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </button>
                    <ul class="select-dropdown-menu">
                        <li v-for="menu in sortingMenu" :key="menu">
                            <a href="#" @click.prevent="onSelectSorting(menu)">{{ menu }}</a>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="container">
                <ul class="product-cards" ref="cardsSection">
                    <li v-for="(item, index) in items" :key="item.title" class="product-card fade-in" :style="{ transitionDelay: index * 200 + 'ms' }">
                        <div class="product-card__image">
                            <img :src="item.img" />
                            <span class="product-card__tag">{{ item.type }}</span>
                        </div>
                        <div class="product-card__content">
                            <h2>{{ item.title }}</h2>
                            <ul>
                                <li v-for="(language, index) in item.languages" :key="language">{{ language }} {{ index !== item.languages.length - 1 ? '&#124;' : '' }}</li>
                            </ul>
                            <NuxtLink :to="item.url" class="btn btn--fill">Download</NuxtLink>
                        </div>
                    </li>
                </ul>
            </div>
        </main>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const cardsSection = ref(null)

const items = ref([
    {
        title: 'ChowHUB-BT',
        type: 'pdf',
        languages: ['ch'],
        img: '/images/manual-1-chowhub-bt.jpg',
        url: '#',
    },
    {
        title: 'ChowHUB',
        type: 'pdf',
        languages: ['en', 'cn', 'th', 'de'],
        img: '/images/manual-2-chowhub.jpg',
        url: '#',
    },
    {
        title: 'ChowCAM-Bullet1',
        type: 'pdf',
        languages: ['en', 'cn'],
        img: '/images/manual-3-chowcam-bullet-1.jpg',
        url: '#',
    },
    {
        title: 'ChowCAM-Dome1',
        type: 'pdf',
        languages: ['en'],
        img: '/images/manual-4-chowcam-dom1.jpg',
        url: '#',
    },
    {
        title: 'ChowCAM-Dome2',
        type: 'pdf',
        languages: ['en'],
        img: '/images/manual-5-chowcam-dom2.jpg',
        url: '#',
    },
    {
        title: 'ChowCAM',
        type: 'pdf',
        languages: ['en', 'th'],
        img: '/images/manual-6-chowcam.jpg',
        url: '#',
    },
    {
        title: 'ChowBELL-PRO',
        type: 'pdf',
        languages: ['en', 'cn'],
        img: '/images/manual-8-chowbell.jpg',
        url: '#',
    },
    {
        title: 'ChowBELL',
        type: 'pdf',
        languages: ['en', 'esp', 'cn', 'th', 'de'],
        img: '/images/manual-8-chowbell.jpg',
        url: '#',
    },
])

const sortingIsOpen = ref(false)
const sortingMenu = ref(['Type 1', 'Type 2'])
const currentSorting = ref('')

onMounted(() => {
    cardsSection.value.classList.add('is-revealed')
})

function onToggleSorting() {
    sortingIsOpen.value = !sortingIsOpen.value
}

function onSelectSorting(menu) {
    currentSorting.value = menu
    sortingIsOpen.value = false
}
</script>
