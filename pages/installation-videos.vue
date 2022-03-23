<template>
    <div class="installation">
        <div class="page-header page-header-installation page-header--image-only"></div>
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
                            <span>Installation Videos</span>
                        </li>
                    </ul>
                </nav>
                <h1 class="h2">Installation Videos</h1>
            </div>

            <div class="installation-hero">
                <div class="container-sm">
                    <h2 class="section-title">Can’t miss it</h2>
                </div>
                <div class="container">
                    <div class="installation-hero-videos">
                        <swiper class="installation-slider" :modules="swiperModules" :pagination="{ clickable: true }" :centered-slides="true" loop :breakpoints="swiperOptions.breakpoints">
                            <swiper-slide>
                                <div class="embed-responsive">
                                    <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/DnKHRezTpwE?rel=0" allowfullscreen></iframe>
                                </div>
                                <span class="installation-slider-title">ChowHUB Kit-Smart Home Solution For Garage Doors and Gates</span>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="embed-responsive">
                                    <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/pl13TRwrDbs?rel=0" allowfullscreen> </iframe>
                                </div>
                                <span class="installation-slider-title">AP Mode Connection Instruction (Demo)</span>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="embed-responsive">
                                    <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/GGO1IbeRMfQ?rel=0" allowfullscreen></iframe>
                                </div>
                                <span class="installation-slider-title">How to connect Chow! x IFTTT (demo video)</span>
                            </swiper-slide>
                        </swiper>
                        <div class="video-more-btn">
                            <NuxtLink :to="youtubeChannel" class="btn btn--no-background" target="_blank">
                                More
                                <svg width="39" height="13" viewBox="0 0 39 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 6.552h33.618M31.6 11.375l5.6-4.804-5.6-4.946" stroke="#EE7B45" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" /></svg>
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container-sm">
                <div class="installation-content">
                    <section>
                        <h2 class="section-title">Installation Instruction</h2>
                        <div class="video-list-block">
                            <h3>Gate Automation</h3>
                            <ul class="video-list">
                                <li v-for="video in gateVideos" :key="video.youtubeId">
                                    <div class="embed-responsive">
                                        <iframe class="embed-responsive-item" :src="`https://www.youtube.com/embed/${video.youtubeId}?rel=0`" allowfullscreen></iframe>
                                    </div>
                                    <h4>{{ video.title }}</h4>
                                </li>
                            </ul>
                            <div class="video-more-btn">
                                <NuxtLink :to="youtubeChannel" class="btn btn--no-background" target="_blank">
                                    More
                                    <svg width="39" height="13" viewBox="0 0 39 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 6.552h33.618M31.6 11.375l5.6-4.804-5.6-4.946" stroke="#EE7B45" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" /></svg>
                                </NuxtLink>
                            </div>
                        </div>
                        <div class="video-list-block">
                            <h3>Smart Solutions</h3>
                            <ul class="video-list">
                                <li v-for="video in smartVideos" :key="video.youtubeId">
                                    <div class="embed-responsive">
                                        <iframe class="embed-responsive-item" :src="`https://www.youtube.com/embed/${video.youtubeId}?rel=0`" allowfullscreen></iframe>
                                    </div>
                                    <h4>{{ video.title }}</h4>
                                </li>
                            </ul>
                            <div class="video-more-btn">
                                <NuxtLink :to="youtubeChannel" class="btn btn--no-background" target="_blank">
                                    More
                                    <svg width="39" height="13" viewBox="0 0 39 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 6.552h33.618M31.6 11.375l5.6-4.804-5.6-4.946" stroke="#EE7B45" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" /></svg>
                                </NuxtLink>
                            </div>
                        </div>
                    </section>
                    <section>
                        <h2 class="section-title">TMT Around the World</h2>
                        <ul class="video-list">
                            <li v-for="video in tmtWorldVideos" :key="video.youtubeId">
                                <div class="embed-responsive">
                                    <iframe class="embed-responsive-item" :src="`https://www.youtube.com/embed/${video.youtubeId}?rel=0`" allowfullscreen></iframe>
                                </div>
                                <h4>{{ video.title }}</h4>
                            </li>
                        </ul>
                        <div class="video-more-btn">
                            <NuxtLink :to="youtubeChannel" class="btn btn--no-background" target="_blank">
                                More
                                <svg width="39" height="13" viewBox="0 0 39 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 6.552h33.618M31.6 11.375l5.6-4.804-5.6-4.946" stroke="#EE7B45" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" /></svg>
                            </NuxtLink>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

import { Pagination, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'

const swiperModules = [Pagination, A11y]
const swiperOptions = ref({
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        750: {
            slidesPerView: 3,
        },
    },
})

const youtubeChannel = ref('https://www.youtube.com/channel/UC_nCSH_V3K2o17KUU-3CiMA')
const gateVideos = ref([
    {
        title: 'Connect the gate opener to Chow! App',
        youtubeId: 'Gln0NlwxzK8',
    },
    {
        title: 'Cobble1000 Motor Setup For Double Garage Door',
        youtubeId: 'tqTvE52kGdQ',
    },
    {
        title: 'How to learn new remote to Cobble Garage Motor',
        youtubeId: 'phfRLDUSuB8',
    },
])
const smartVideos = ref([
    {
        title: 'Connect ChowCAM or ChowBELL to ChowHUB',
        youtubeId: 'Ng1Guln9V58',
    },
    {
        title: 'ChowCAM Setting and Operation',
        youtubeId: 'vKmuBUO6c5M',
    },
    {
        title: 'Pair and Delete Remote Control on Chow! App',
        youtubeId: '5I00Cn_pbnk',
    },
])
const tmtWorldVideos = ref([
    {
        title: 'Stylish Folding Gate Working w/ Mastiff 300 (Installed by MR. JUN JAE-IK, OPEN GATE)',
        youtubeId: 'NJWRjZuLSOU',
    },
    {
        title: 'The first MASTIFF 400 Installation (Installed by MR. JUN JAE-IK, OPEN GATE)',
        youtubeId: 'JPO80pp7wfI',
    },
    {
        title: 'TMT in Korea -Smooth Operation with BX Sliding Gate Opener',
        youtubeId: 'vFmeCyFMzBM',
    },
])

onMounted(() => {})

onUnmounted(() => {})
</script>
