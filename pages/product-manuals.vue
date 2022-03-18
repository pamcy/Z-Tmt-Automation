<template>
  <div class="product-manuals">
    <div class="page-header page-header-product-manuals page-header--image-only"></div>
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
              <span>Product Manuals</span>
            </li>
          </ul>
        </nav>
        <h2 class="page-title">Product Manuals</h2>
        <div :class="['select-dropdown', sortingIsOpen ? 'is-active' : '']">
          <button class="btn-styless" @click="onToggleSorting">
            <span v-if="currentSorting">{{ currentSorting }}</span>
            <span class="select-dropdown-placeholder" v-else>Type</span>
            <svg width="18" height="12" viewBox="0 0 18 12" fill="none"><path d="m2 2 6.899 8L16 2" stroke="#EE7B45" stroke-width="2.7" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" /></svg>
          </button>
          <ul class="select-dropdown-menu">
            <li v-for="menu in sortingMenu" :key="menu">
              <a href="#" @click.prevent="onSelectSorting(menu)">{{ menu }}</a>
            </li>
          </ul>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const sortingIsOpen = ref(false)
const sortingMenu = ref(['Type 1', 'Type 2'])
const currentSorting = ref('')

function onToggleSorting() {
  sortingIsOpen.value = !sortingIsOpen.value
}

function onSelectSorting(menu) {
  currentSorting.value = menu
  sortingIsOpen.value = false
}
</script>
