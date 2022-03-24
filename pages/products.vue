<template>
  <div>
    <div class="page-header page-header-products" ref="pageHeaderSection">
      <div class="container-sm">
        <div class="page-header-text">
          <h1>Products</h1>
          <p>TMT offers a wide range of products, specializing in swing gates, sliding gates and garage doors.</p>
          <p>Worldwide, we have distributors in over 50 countries and sell over 1 million units per annum.</p>
        </div>
      </div>
    </div>

    <div class="products" ref="productsSection">
      <div class="products-panel">
        <div class="container">
          <nav class="breadcrumb">
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li class="is-active">
                <a href="/products">Products</a>
              </li>
            </ul>
          </nav>

          <div class="panel">
            <ul class="tab">
              <li v-for="product in products" :key="product.title" :class="{ 'is-active': currentTab === product.title }">
                <a href="#" @click.prevent="onSelectTab(product.title)">{{ product.title }}</a>
              </li>
            </ul>

            <ul class="panel-filter">
              <li v-for="category in categories" :key="category" :class="{ 'is-active': currentCategory === category }">
                <a href="#" @click.prevent="onGetProducts(category)">{{ category }}</a>
              </li>
            </ul>

            <div class="panel-sorting">
              <span class="panel-sorting-result">Total Results<b>6</b></span>
              <SelectDropdown ref="sortingSelectDropdown">
                <template v-slot:title>{{ currentSorting }}</template>
                <template v-slot:content>
                   <ul>
                      <li v-for="menu in sortingMenu" :key="menu">
                        <a href="#" @click.prevent="onSelectSorting(menu)">{{ menu }}</a>
                      </li>
                    </ul>
                </template>
              </SelectDropdown>
            </div>
          </div>
        </div>
      </div>
      <div class="products-result">
        <div class="container">
          <ul class="product-cards">
            <li v-for="(item, index) in results" :key="item.name" class="product-card fade-in" :style="{ transitionDelay: index * 200 + 'ms' }">
              <NuxtLink :to="item.url" class="product-card__link">
                <div class="product-card__image">
                  <figure>
                    <img :src="item.img" />
                  </figure>
                  <div class="product-card__image-title">{{ item.name }}</div>
                </div>
                <div class="product-card__content">
                  <h2>{{ item.name }}</h2>
                  <span>{{ item.spec }}</span>
                </div>
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import SelectDropdown from "../components/SelectDropdown";

const pageHeaderSection = ref(null)
const productsSection = ref(null)

const products = ref([
  {
    title: 'Gate Openers',
    items: [
      {
        name: 'TERRIER',
        spec: '50/200',
        img: '/images/product-1-terrier.jpg',
        url: '/product-detail',
        category: 'Swing gate',
      },
      {
        name: 'MASTIFF',
        spec: '300/400/400L',
        img: '/images/product-2-mastiff.jpg',
        url: '/product-detail',
        category: 'Swing gate',
      },
      {
        name: 'MASTIFF LS',
        spec: '300LS/400LS/400LLS',
        img: '/images/product-3-mastiff-ls.jpg',
        url: '/product-detail',
        category: 'Swing gate',
      },
      {
        name: 'PAPILLON',
        spec: '50/200',
        img: '/images/product-4-papillon.jpg',
        url: '/product-detail',
        category: 'Swing gate',
      },
      {
        name: 'BOXER',
        spec: '800/500',
        img: '/images/product-5-boxer.jpg',
        url: '/product-detail',
        category: 'Sliding gate',
      },
      {
        name: 'HUSKY',
        spec: '700/1200/1500',
        img: '/images/product-6-husky.jpg',
        url: '/product-detail',
        category: 'Sliding gate',
      },
      {
        name: 'Marble',
        spec: '80/100/120',
        img: '/images/product-7-marble.jpg',
        url: '/product-detail',
        category: 'Garage door',
      },
    ],
  },
  {
    title: 'Home Automation',
    items: [
      {
        name: 'Marble',
        spec: '80/100/120',
        img: '/images/product-7-marble.jpg',
        url: '/product-detail',
        category: 'Home 1',
      },
      {
        name: 'MASTIFF LS',
        spec: '300LS/400LS/400LLS',
        img: '/images/product-3-mastiff-ls.jpg',
        url: '/product-detail',
        category: 'Home',
      },
      {
        name: 'HUSKY',
        spec: '700/1200/1500',
        img: '/images/product-6-husky.jpg',
        url: '/product-detail',
        category: 'Home 2',
      },
      {
        name: 'MASTIFF',
        spec: '300/400/400L',
        img: '/images/product-2-mastiff.jpg',
        url: '/product-detail',
        category: 'Home 1',
      },
    ],
  },
])

const currentTab = ref('Gate Openers')
const categories = ref([])
const currentCategory = ref('')
const tabData = ref({})
const results = ref([])

const sortingSelectDropdown = ref(null)
const sortingIsOpen = ref(false)
const sortingMenu = ref(['Most Popular', 'Newest'])
const currentSorting = ref('')

onMounted(() => {
  pageHeaderSection.value.classList.add('is-loaded')

  onSelectTab(currentTab.value)
  onGetProducts('View all')

  currentSorting.value = sortingMenu.value[1]

  window.addEventListener('scroll', fadeInProductCards)
})

onUnmounted(() => {
  window.removeEventListener('scroll', fadeInProductCards)
})

function onSelectTab(name) {
  currentTab.value = name
  currentCategory.value = 'View all'
  tabData.value = products.value.find((product) => product.title === name)

  getCategories()

  results.value = tabData.value.items
}

function getCategories() {
  categories.value = ['View all', ...new Set(tabData.value.items.map((item) => item.category))]
}

function onGetProducts(category) {
  currentCategory.value = category

  if (category == 'View all') {
    results.value = tabData.value.items.filter((item) => item.category !== category)
  } else {
    results.value = tabData.value.items.filter((item) => item.category === category)
  }
}

function onToggleSorting() {
  sortingIsOpen.value = !sortingIsOpen.value
}

function onSelectSorting(menu) {
  currentSorting.value = menu
  sortingIsOpen.value = false

  sortingSelectDropdown.value.closeSelectDropdown()
}

function fadeInProductCards() {
  if (window.innerHeight - productsSection.value.getBoundingClientRect().top >= productsSection.value.offsetHeight / 3) {
    productsSection.value.classList.add('is-revealed')
  }
}
</script>

