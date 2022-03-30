<template>
    <div class="faq faq-result">
        <div class="page-header page-header-faq page-header--image-only"></div>
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
                        <li>
                            <NuxtLink to="/support/faq" title="FAQ">FAQ</NuxtLink>
                        </li>
                        <li class="is-active">
                            <span>Result</span>
                        </li>
                    </ul>
                </nav>

                <h1 class="h2">Frequently Asked Question</h1>

                <SearchBox />

                <div class="faq-content" ref="faqContentSection">
                    <span class="faq-content-result">
                        <b>{{ questions.length }}</b> results for "{{ searchTerm }}”
                    </span>
                    <div class="faq-list">
                        <OneOpenAccordion
                            v-for="(question, index) in questions"
                            :key="index"
                            :index="index"
                            :isExpanded="currentExpandedQuestion === index"
                            @click="setExpandedQuestion(index)"
                            :fadeInEnabled="fadeInEnabled"
                        >
                            <template v-slot:title>{{ question.title }}</template>
                            <template v-slot:content>{{ question.answer }}</template>
                        </OneOpenAccordion>
                    </div>
                </div>

                <div class="faq-cta-btn">
                    <NuxtLink to="/support" class="btn btn--fill">Back</NuxtLink>
                </div>

                <NeedHelp />
            </div>
        </main>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import SearchBox from '../../components/SearchBox.vue'
import OneOpenAccordion from '../../components/OneOpenAccordion.vue'
import needHelp from '../../components/NeedHelp.vue'

const route = useRoute()
const searchTerm = ref(route.query.search)

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

function setExpandedQuestion(index)  {
  if (currentExpandedQuestion.value === index) {
    currentExpandedQuestion.value = null
  } else {
    currentExpandedQuestion.value = index
  }
}
</script>
