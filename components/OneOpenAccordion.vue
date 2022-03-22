<template>
    <div class="one-open-accordion" :class="{ 'is-expanded': isExpanded }">
        <h3 class="accordion-title">
            <button class="btn btn-styless" :aria-expanded="isExpanded">
                <span>{{ index + 1 }}</span>
                <span><slot name="title" /></span>
                <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path fill="#EE7B45" d="M0 8.003h20v4H0z" />
                    <path fill="#EE7B45" d="M12 0v20H8V0z" />
                </svg>
            </button>
        </h3>

        <div class="accordion-inner">
            <div class="accordion-content">
                <slot name="content" />
            </div>
        </div>
    </div>
</template>

<script setup>
const { index, isExpanded } = defineProps(['index', 'isExpanded'])
</script>
