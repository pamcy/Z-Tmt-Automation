<template>
  <div>
    <Header />

    <div class="page-header" ref="pageHeaderSection">
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
              <div class="select-dropdown is-active">
                <button class="btn-styless">
                  <span>Newest</span>
                  <svg width="18" height="12" viewBox="0 0 18 12" fill="none">
                    <path
                      d="m2 2 6.899 8L16 2"
                      stroke="#EE7B45"
                      stroke-width="2.7"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
                <ul class="select-dropdown-menu">
                  <li>
                    <a href="#">Most Popular</a>
                  </li>
                  <li>
                    <a href="#">Newest</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="prouducts-result"></div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const pageHeaderSection = ref(null)

onMounted(() => {
  pageHeaderSection.value.classList.add('is-loaded')
})
</script>

