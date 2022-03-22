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
                        <li class="is-active">
                            <span>FAQ</span>
                        </li>
                    </ul>
                </nav>

                <h1 class="h2">Frequently Asked Question</h1>

                <SearchBox />

                <div class="faq-content" ref="faqContentSection">
                    <ul class="tab">
                        <li v-for="menu in tabMenu" :key="menu" :class="{ 'is-active': currentTab === menu }">
                            <a href="#" @click.prevent="onSelectTab(menu)">{{ menu }}</a>
                        </li>
                    </ul>
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
import SearchBox from '../components/SearchBox.vue'
import OneOpenAccordion from '../components/OneOpenAccordion.vue'
import needHelp from '../components/NeedHelp.vue'

const searchValue = ref('')

const faqContentSection = ref(null)
const fadeInEnabled = ref(true)

const tabMenu = ref(['All', 'Gate Openers'])
const currentTab = ref('All')

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
const filteredQuestions = computed(() => {
    if (currentTab.value === 'All') {
        return questions.value
    } else {
        return questions.value.filter((question) => question.category === currentTab.value)
    }
})
const currentExpandedQuestion = ref(null)

onMounted(() => {
    window.addEventListener('scroll', fadeInQuestions)
})

onUnmounted(() => {
    window.removeEventListener('scroll', fadeInQuestions)
})

function onSelectTab(name) {
    currentTab.value = name
    currentExpandedQuestion.value = null
}

function fadeInQuestions() {
    const rect = faqContentSection.value.getBoundingClientRect()
    const elTop = rect.top + rect.top * 0.7
    const elBottom = rect.bottom

    if (window.innerHeight > elTop && elBottom > 0) {
        faqContentSection.value.classList.add('is-revealed')
    }
}
</script>
