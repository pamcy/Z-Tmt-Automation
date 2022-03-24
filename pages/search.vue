<template>
    <div class="search">
        <div class="page-header page-header-search is-loaded">
            <div class="container-sm">
                <div class="page-header-text">
                    <h1>Search</h1>
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
                            <span>Search</span>
                        </li>
                    </ul>
                </nav>

                <h2>Search Result</h2>

                <SearchBox :searchValue="searchValue" />

                <span class="search-result-total">
                    Total Results <b>{{ results.length }}</b>
                </span>

                <ul class="search-result-list" ref="searchResultSection">
                    <li v-for="(result, index) in results" :key="index" class="fade-in" :style="{ transitionDelay: index * 200 + 'ms' }">
                        <h3>
                            <a :href="result.url">{{ result.title }}</a>
                        </h3>
                        <a :href="result.url">{{ result.url }}</a>
                        <p>{{ result.description }}</p>
                    </li>
                </ul>
            </div>
        </main>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import SearchBox from '../components/SearchBox.vue'

const searchResultSection = ref(null)
const searchValue = ref('swing door')
const results = ref([
    {
        title: 'TA2 Series',
        description: 'Introduction Don’t make the mistake of buying a robot when a simple actuator will do. Robots have become the “go-to” tool for industrial automation, yet they’re often expensive overkill. ...',
        url: 'www.timotion.com/tw/products/linear-actuators/ta2-series',
    },
    {
        title: 'Part 1: What Is An Actuator？Different Types Of Actuators Definition',
        description: 'TiMOTION’s TA2 series linear actuator is compact, robust and capable of performing well in certain outdoor environments. This linear actuator is perfect for use in small spaces where force or ca...',
        url: 'www.timotion.com/tw/products/linear-actuators/ta2p-series',
    },
    {
        title: 'Announcement of TiMOTION USA Office Relocation',
        description: 'Both the TA2 and the TA2P are compact, robust, and capable of performing well in certain outdoor environments. A more powerful motor makes the TA2P capable of handling load ratings up to 3500N (787 po...',
        url: 'www.timotion.com/tw/news-and-articles/part-1-what-is-an-electric-linear-actuator-and-how-to-choose-it',
    },
    {
        title: 'Part 3: Safety Feature Options',
        description: 'Contents 1. What Is An Electric Linear Actuator And How Does It Work?   2. Common Styles Of Electric Linear Actuators ...',
        url: 'www.timotion.com/tw/news-and-articles/part-3-safety-feature-options',
    },
    {
        title: 'Introduction- Get The Essential Facts About Actuators',
        description: 'Charlotte, NC – May 15, 2017 –TiMOTION recently announced the move of its North American office into Charlotte, North Carolina. The global manufacturing subsidiary relocated from the Matth...',
        url: 'www.timotion.com/tw/news-and-articles/introduction--get-the-essential-facts-about-actuators',
    },
    {
        title: 'MA2 - New Generation Industrial Linear Actuator',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, sequi.',
        url: 'www.timotion.com/tw/news-and-articles/ma2---new-generation-industrial-linear-actuator',
    },
    {
        title: 'Part 5: Dustproof And Waterproof Linear Actuator IP Rating',
        description: 'Introduction Don’t make the mistake of buying a robot when a simple actuator will do. Robots have become the “go-to” tool for industrial automation, yet they’re often expensive overkill. ...',
        url: 'www.timotion.com/tw/news-and-articles/ma2---new-generation-industrial-linear-actuator',
    },
])

onMounted(() => {
    window.addEventListener('scroll', fadeInResults)
})

onUnmounted(() => {
    window.removeEventListener('scroll', fadeInResults)
})

function fadeInResults() {
    const rect = searchResultSection.value.getBoundingClientRect()
    const elTop = rect.top + rect.top * 0.5
    const elBottom = rect.bottom

    if (window.innerHeight > elTop && elBottom > 0) {
        searchResultSection.value.classList.add('is-revealed')
    }
}
</script>
