<template>
    <div class="faq">
        <div class="page-header page-header-faq page-header--image-only"></div>
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
                        <li>
                            <NuxtLink to="/faq">FAQ</NuxtLink>
                        </li>
                        <li class="is-active">
                            <span>Result</span>
                        </li>
                    </ul>
                </nav>

                <h1 class="h2">Frequently Asked Question</h1>

                <form action="" class="faq-form">
                    <div class="input-group">
                        <input type="search" v-model="searchValue" placeholder="Type keyword" />
                        <button type="submit" class="btn btn-styless">
                            <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
                                <path d="m25.922 24.131-8.44-8.44A9.662 9.662 0 0 0 19.5 9.75a9.692 9.692 0 0 0-2.857-6.893A9.678 9.678 0 0 0 9.75 0a9.692 9.692 0 0 0-6.893 2.857A9.673 9.673 0 0 0 0 9.75a9.691 9.691 0 0 0 2.857 6.893A9.672 9.672 0 0 0 9.75 19.5a9.67 9.67 0 0 0 5.938-2.015l8.44 8.437a.267.267 0 0 0 .377 0l1.417-1.414a.267.267 0 0 0 0-.377zm-11.024-9.233A7.24 7.24 0 0 1 9.75 17.03a7.24 7.24 0 0 1-5.148-2.132A7.24 7.24 0 0 1 2.47 9.75c0-1.944.757-3.773 2.132-5.148A7.24 7.24 0 0 1 9.75 2.47c1.944 0 3.773.754 5.148 2.132A7.24 7.24 0 0 1 17.03 9.75a7.235 7.235 0 0 1-2.132 5.148z" fill="#EE7B45" />
                            </svg>
                        </button>
                    </div>
                </form>

                <div class="faq-content" ref="faqContentSection">
                    <h2 class="h3 faq-content-heading">Gate Openers</h2>
                    <div class="faq-list">
                        <OneOpenAccordion v-for="(question, index) in filteredQuestions" :key="index" :index="index" :isExpanded="currentExpandedQuestion === index" @click="currentExpandedQuestion = index" :fadeInEnabled="fadeInEnabled">
                            <template v-slot:title>{{ question.title }}</template>
                            <template v-slot:content>{{ question.answer }}</template>
                        </OneOpenAccordion>
                    </div>
                </div>

                <NeedHelp />
            </div>
        </main>
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import OneOpenAccordion from '../components/OneOpenAccordion.vue'
import needHelp from '../components/NeedHelp.vue'

const searchValue = ref('')

const faqContentSection = ref(null)
const fadeInEnabled = ref(true)

const questions = ref([
    {
        title: 'What kind of battery is recommended?',
        answer: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum, debitis corrupti?',
        category: 'Gate Openers',
    },
    {
        title: 'Are batteries required?',
        answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, quidem?',
        category: 'Gate Openers',
    },
    {
        title: 'Can I add more than one solar panel?',
        answer: 'Lorem ipsum dolor sit amet.',
        category: 'Gate Openers',
    },
    {
        title: 'What kinds of gates are suitable for using our operators?',
        answer: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia doloremque voluptas, sit laborum unde cumque!',
        category: 'Gate Openers',
    },
    {
        title: 'Can the operators be used on solid pane/ privacy gates?',
        answer: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat, quo eligendi et in cum reiciendis maiores deleniti minima, ratione porro illo dignissimos quidem itaque, reprehenderit vitae dolorum nesciunt. Perferendis reiciendis magnam quam deserunt perspiciatis soluta. Nihil itaque labore eligendi optio ipsa asperiores adipisci illo omnis iure.',
        category: 'Gate Openers',
    },
    {
        title: 'How to connect number pad??',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni quis velit molestiae id commodi cum modi atque rem vitae. Veritatis non sint placeat! Quis, vero!',
        category: 'Home Automation',
    },
])

const currentExpandedQuestion = ref(null)

onMounted(() => {
    window.addEventListener('scroll', fadeInQuestions)
})

onUnmounted(() => {
    window.removeEventListener('scroll', fadeInQuestions)
})

function fadeInQuestions() {
    const rect = faqContentSection.value.getBoundingClientRect()
    const elTop = rect.top + rect.top * 0.7
    const elBottom = rect.bottom

    if (window.innerHeight > elTop && elBottom > 0) {
        faqContentSection.value.classList.add('is-revealed')
    }
}
</script>
