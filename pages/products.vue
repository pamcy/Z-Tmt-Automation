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
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const pageHeaderSection = ref(null)

onMounted(() => {
  pageHeaderSection.value.classList.add('is-loaded')
})
</script>

