<template>
  <div :class="['select-dropdown', isExpanded ? 'is-active' : '']" ref="selectDropdown">
    <button type="button" class="btn btn-styless" @click="toggleSelectDropdown" :disabled="noData">
        <slot name="icon" />
        <slot name="title" />
        <svg width="18" height="12" viewBox="0 0 18 12" fill="none" aria-hidden="true"><path d="m2 2 6.899 8L16 2" stroke="#EE7B45" stroke-width="2.7" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" /></svg>
    </button>
    <div class="select-dropdown-menu">
        <div class="select-dropdown-menu__inner">
            <div class="select-dropdown-menu__top" v-if="$slots.contentTop">
                <slot name="contentTop"/>
            </div>
            <slot name="content" />
        </div>
    </div>
</div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const selectDropdown = ref(null)
const isExpanded = ref(false)

onMounted(() => {
    if (window.matchMedia('(min-width: 990px)').matches) {
        window.addEventListener('click', clickAway)
    }
})

onUnmounted(() => {
    window.removeEventListener('click', clickAway)
})

function toggleSelectDropdown() {
    isExpanded.value = !isExpanded.value;
}

function closeSelectDropdown() {
    isExpanded.value = false;
}

function clickAway(e) {
    if (selectDropdown.value && !selectDropdown.value.contains(e.target)){
        closeSelectDropdown()
    }
}

defineExpose({
    closeSelectDropdown
})

defineProps(['noData'])
</script>
