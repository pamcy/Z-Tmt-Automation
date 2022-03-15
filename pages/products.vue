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

