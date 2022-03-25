<template>
    <div class="comparison">
        <div class="page-header page-header-comparison" ref="pageHeaderSection">
            <div class="container-sm">
                <div class="page-header-text">
                    <h1>Comparison with Other Brands</h1>
                    <p>How do TＭT products stack up against the competition? Find out here.</p>
                </div>
            </div>
        </div>

        <main ref="bodySection">
            <div class="container-sm">
                <nav class="breadcrumb">
                    <ul>
                        <li>
                            <NuxtLink to="/">Home</NuxtLink>
                        </li>
                        <li>
                            <span>Features</span>
                        </li>
                        <li class="is-active">
                            <span>Comparison with Other Brands</span>
                        </li>
                    </ul>
                </nav>

                <h2>TMT Automation’s Advantage</h2>
                <p class="fade-in delay-1">Don’t settle for plastic components and low output motors. TMT Automation uses the highest quality materials to ensure a build that can weather the most rugged of uses. Not only endeavors to deliver outstanding quality, but TMT also strives for environmentally sustainability.</p>
                <p class="fade-in delay-2">Below is a table comparing the swing gate openers of the same classes offered by some of the other leading DIY gate opener brands. You will find that TMT offers quality beyond this class. *Some information regarding the competitors are not available.</p>
                <img class="fade-in delay-3" src="/images/comparison-table.png" alt />
            </div>
        </main>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const pageHeaderSection = ref(null)
const bodySection = ref(null)

onMounted(() => {
    setTimeout(() => {
        if (pageHeaderSection.value) {
            pageHeaderSection.value.classList.add('is-loaded')
        }
    }, 100)

    window.addEventListener('scroll', fadeInContent)
})

onUnmounted(() => {
    window.removeEventListener('scroll', fadeInContent)
})

function fadeInContent() {
    if (window.innerHeight - bodySection.value.getBoundingClientRect().top >= bodySection.value.offsetHeight / 2) {
        bodySection.value.classList.add('is-revealed')
    }
}
</script>
