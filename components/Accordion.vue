<template>
  <div class="accordion" :class="{ 'is-expanded': isExpanded }">
    <h2 class="accordion-title">
        <button class="btn btn-styless" :aria-expanded="isExpanded" @click="toggleAccordion()" :disabled="!isMobile">
            <span><slot name="title" /></span>
            <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg" :class="{ 'rotate-180': isExpanded, 'rotate-0': !isExpanded }" aria-hidden="true"><path fill="#EE7B45" d="M0 8.003h20v4H0z"/><path fill="#EE7B45" d="M12 0v20H8V0z"/></svg>
        </button>
    </h2>

    <div class="accordion-inner">
        <div class="accordion-content">
            <slot name="content" />
        </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isExpanded = ref(true)
const isMobile = window.matchMedia('(max-width: 989px)').matches

function toggleAccordion() {
    isExpanded.value = !isExpanded.value;
}
</script>