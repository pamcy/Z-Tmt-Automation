<template>
    <div class="installation">
        <div class="page-header page-header-installation page-header--image-only"></div>
        <main>
            <div class="container-sm">
                <nav class="breadcrumb">
                    <ul>
                        <li>
                            <NuxtLink to="/" title="Home">Home</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/support" title="Support">Support</NuxtLink>
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
                        <swiper
                            class="installation-slider"
                            :modules="swiperModules"
                            :pagination="{ clickable: true }"
                            :centered-slides="true"
                            :rewind="true"
                            :initialSlide="1"
                            :speed="600"
                            :breakpoints="swiperOptions.breakpoints"
                            ref="installationSlider"
                            @click="onPlayVideo"
                            @slideChange="onSlideChange"
                            @afterInit="onAfterSwiperInit"
                        >
                            <swiper-slide v-for="(video, index) in featuredVideos" :key="video.youtubeId">
                                <div class="embed-responsive">
                                    <iframe class="embed-responsive-item" :src="`https://www.youtube.com/embed/${video.youtubeId}?playsinline=1&rel=0&enablejsapi=1`" :id="`video-${index + 1}`" allowfullscreen></iframe>
                                </div>
                            </swiper-slide>
                        </swiper>
                    </div>
                    <div class="video-more-btn">
                        <NuxtLink :to="youtubeChannel" class="btn btn--no-background" target="_blank">
                            More
                            <svg width="39" height="13" viewBox="0 0 39 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 6.552h33.618M31.6 11.375l5.6-4.804-5.6-4.946" stroke="#EE7B45" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" /></svg>
                        </NuxtLink>
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
                                <li v-for="(video, index) in gateVideos" :key="video.youtubeId" class="fade-in" :style="{ transitionDelay: index * 200 + 'ms' }">
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
                                <li v-for="(video, index) in smartVideos" :key="video.youtubeId" class="fade-in" :style="{ transitionDelay: index * 200 + 'ms' }">
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
                            <li v-for="(video, index) in tmtWorldVideos" :key="video.youtubeId" class="fade-in" :style="{ transitionDelay: index * 200 + 'ms' }">
                                <div class="embed-responsive">
                                    <iframe class="embed-responsive-item" :src="`https://www.youtube.com/embed/${video.youtubeId}?rel=0`" allowfullscreen></iframe>
                                </div>
                                <h4>{{ video.title }}</h4>
                            </li>
                        </ul>
                        <div class="video-more-btn">
                            <NuxtLink :to="youtubeChannel" class="btn btn--no-background" target="_blank">
                                More
                                <svg width="39" height="13" viewBox="0 0 39 13" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M2 6.552h33.618M31.6 11.375l5.6-4.804-5.6-4.946" stroke="#EE7B45" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" /></svg>
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

import { Pagination, Autoplay, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'

useMeta({
  script: [
    { src: 'https://www.youtube.com/iframe_api' }
  ]
})

const installationSlider = ref(null)
const swiperModules = [Pagination, Autoplay, A11y]
const swiperOptions = ref({
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        750: {
            slidesPerView: 1.6,
        },
        992: {
            slidesPerView: 2.4,
        }
    },
})
const players = ref([])

const youtubeChannel = ref('https://www.youtube.com/channel/UC_nCSH_V3K2o17KUU-3CiMA')
const featuredVideos = ref([
    {
        youtubeId: 'DnKHRezTpwE',
    },
    {
        youtubeId: 'pl13TRwrDbs',
    },
    {
        youtubeId: 'GGO1IbeRMfQ',
    },
])
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

onMounted(() => {
    window.addEventListener('scroll', fadeInVideoLists)
})

onUnmounted(() => {
    window.removeEventListener('scroll', fadeInVideoLists)
})

function onAfterSwiperInit() {
    setTimeout(() => {
        for (let i = 0; i < featuredVideos.value.length; i++) {
            const player = new YT.Player('video-' + (i + 1), {
                playerVars: { 'autoplay': 1 },
                events: {
                    'onReady': onPlayerReady,
                    'onStateChange': onPlayerStateChange
                }
            })
            players.value.push(player)
        }
    }, 500)
}

function onPlayerReady(event) {
    var playerStatus = event.target.getPlayerState()
    if (playerStatus == 5) {
        installationSlider.value.$el.swiper.autoplay.start()
    }
}

function onPlayerStateChange(event) {
    if (event.data != 5) {
      installationSlider.value.$el.swiper.autoplay.stop()
    }
}

function onPlayVideo(swiper, e) {
    if (e.target.closest('.swiper-slide-active') != null) {
        const iframeEl = e.target.querySelector('.embed-responsive-item')

        iframeEl.style.zIndex = 1
        iframeEl.src += '&autoplay=1'

        swiper.autoplay.stop()
    }
}

function onSlideChange(swiper) {
    for (let i = 0; i < players.value.length; i++) {
        if (players.value[i].getPlayerState() == 1) {
            players.value[i].pauseVideo()
        }
    }
}

function fadeInVideoLists() {
    var lists = document.querySelectorAll('.video-list')

    for (var i = 0; i < lists.length; i++) {
        if (window.innerHeight - lists[i].getBoundingClientRect().top >= lists[i].offsetHeight / 2) {
            lists[i].classList.add('is-revealed')
        }
    }
}
</script>
