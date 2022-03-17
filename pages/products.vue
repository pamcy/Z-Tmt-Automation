<template>
  <div>

    <div class="page-header page-header-products" ref="pageHeaderSection">
      <div class="container">
        <div class="page-header-text">
          <h1>Products</h1>
          <p>TMT offers a wide range of products, specializing in swing gates, sliding gates and garage doors.</p>
          <p>Worldwide, we have distributors in over 50 countries and sell over 1 million units per annum.</p>
        </div>
      </div>
    </div>

    <div class="products">
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
              <li class="is-active">
                <a href="#">Gate Openers</a>
              </li>
              <li>
                <a href="#">Home Automation</a>
              </li>
            </ul>

            <ul class="panel-filter">
              <li class="is-active">
                <a href="#">View all</a>
              </li>
              <li>
                <a href="#">Swing gate</a>
              </li>
              <li>
                <a href="#">Sliding gate</a>
              </li>
              <li>
                <a href="#">Garage door</a>
              </li>
            </ul>

            <div class="panel-sorting">
              <span class="panel-sorting-result">Total Results<b>6</b></span>
              <div :class="['select-dropdown', sortingIsOpen ? 'is-active' : '']">
                <button class="btn-styless" @click="onToggleSorting">
                  <span>{{ currentSorting }}</span>
                  <svg width="18" height="12" viewBox="0 0 18 12" fill="none"><path d="m2 2 6.899 8L16 2" stroke="#EE7B45" stroke-width="2.7" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" /></svg>
                </button>
                <ul class="select-dropdown-menu">
                  <li v-for="menu in sortingMenu" :key="menu">
                    <a href="#" @click.prevent="onSelectSorting(menu)">{{ menu }}</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="products-result">
        <div class="container">
          <ul class="product-cards">
            <li class="product-card">
              <NuxtLink to="/product-detail" class="product-card__link">
                <div class="product-card__image">
                  <figure>
                    <img src="/images/product-1-terrier.jpg" />
                  </figure>
                  <div class="product-card__image-title">TERRIER</div>
                </div>
                <div class="product-card__content">
                  <h2>TERRIER</h2>
                  <span>50/200</span>
                </div>
              </NuxtLink>
            </li>
            <li class="product-card">
              <NuxtLink to="/product-detail" class="product-card__link">
                <div class="product-card__image">
                  <figure>
                    <img src="/images/product-2-mastiff.jpg" />
                  </figure>
                  <div class="product-card__image-title">MASTIFF</div>
                </div>
                <div class="product-card__content">
                  <h2>MASTIFF</h2>
                  <span>300/400/400L</span>
                </div>
              </NuxtLink>
            </li>
            <li class="product-card">
              <NuxtLink to="/product-detail" class="product-card__link">
                <div class="product-card__image">
                  <figure>
                    <img src="/images/product-3-mastiff-ls.jpg" />
                  </figure>
                  <div class="product-card__image-title">MASTIFF LS</div>
                </div>
                <div class="product-card__content">
                  <h2>MASTIFF LS</h2>
                  <span>300LS/400LS/400LLS</span>
                </div>
              </NuxtLink>
            </li>
            <li class="product-card">
              <NuxtLink to="/product-detail" class="product-card__link">
                <div class="product-card__image">
                  <figure>
                    <img src="/images/product-4-papillon.jpg" />
                  </figure>
                  <div class="product-card__image-title">PAPILLON</div>
                </div>
                <div class="product-card__content">
                  <h2>PAPILLON</h2>
                  <span>50/200</span>
                </div>
              </NuxtLink>
            </li>
            <li class="product-card">
              <NuxtLink to="/product-detail" class="product-card__link">
                <div class="product-card__image">
                  <figure>
                    <img src="/images/product-5-boxer.jpg" />
                  </figure>
                  <div class="product-card__image-title">BOXER</div>
                </div>
                <div class="product-card__content">
                  <h2>BOXER</h2>
                  <span>800/500</span>
                </div>
              </NuxtLink>
            </li>
            <li class="product-card">
              <NuxtLink to="/product-detail" class="product-card__link">
                <div class="product-card__image">
                  <figure>
                    <img src="/images/product-6-husky.jpg" />
                  </figure>
                  <div class="product-card__image-title">HUSKY</div>
                </div>
                <div class="product-card__content">
                  <h2>HUSKY</h2>
                  <span>700/1200/1500</span>
                </div>
              </NuxtLink>
            </li>
            <li class="product-card">
              <NuxtLink to="/product-detail" class="product-card__link">
                <div class="product-card__image">
                  <figure>
                    <img src="/images/product-7-marble.jpg" />
                  </figure>
                  <div class="product-card__image-title">MARBLE</div>
                </div>
                <div class="product-card__content">
                  <h2>MARBLE</h2>
                  <span>80/100/120</span>
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
import { ref, onMounted } from 'vue'

const pageHeaderSection = ref(null)

const sortingIsOpen = ref(false)
const sortingMenu = ref(['Most Popular', 'Newest'])
const currentSorting = ref('')

onMounted(() => {
  pageHeaderSection.value.classList.add('is-loaded')

  currentSorting.value = sortingMenu.value[1]
})

function onToggleSorting() {
  sortingIsOpen.value = !sortingIsOpen.value
}

function onSelectSorting(menu) {
  currentSorting.value = menu
  sortingIsOpen.value = false
}
</script>

